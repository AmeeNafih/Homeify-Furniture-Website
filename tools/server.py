#!/usr/bin/env python3
"""
Homeify Furniture - Local Workshop Server & Auto-Deploy Bridge
Serves website files locally and provides /api/deploy endpoint to push
catalog price and best seller changes directly to GitHub (triggering Vercel).
"""

import http.server
import json
import os
import re
import socketserver
import subprocess
import sys
from urllib.parse import urlparse

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
REPO_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

def update_index_schema(repo_dir, products):
    """Update static Schema.org ItemList in index.html to reflect updated prices/catalog."""
    try:
        items = []
        for idx, p in enumerate(products, 1):
            items.append({
                "@type": "ListItem",
                "position": idx,
                "item": {
                    "@type": "Product",
                    "name": p.get("name", ""),
                    "image": f"https://homeifyfurniture.in/{p.get('img', '')}",
                    "description": p.get("desc", ""),
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "price": p.get("price", 0),
                        "availability": "https://schema.org/InStock",
                        "url": "https://homeifyfurniture.in/#shop"
                    }
                }
            })
        schema_data = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Homeify Furniture Handcrafted Teak Catalog",
            "numberOfItems": len(products),
            "itemListElement": items
        }
        schema_json = json.dumps(schema_data, indent=2, ensure_ascii=False)
        index_path = os.path.join(repo_dir, "index.html")
        with open(index_path, "r", encoding="utf-8") as f:
            html = f.read()

        pattern = re.compile(
            r'(<!-- Schema\.org Product Structured Data for Catalog -->\s*<script type="application/ld\+json">).*?(</script>)',
            re.DOTALL
        )
        if pattern.search(html):
            new_html = pattern.sub(lambda m: f"{m.group(1)}\n{schema_json}\n  {m.group(2)}", html)
            with open(index_path, "w", encoding="utf-8") as f:
                f.write(new_html)
    except Exception as e:
        print(f"Warning: Failed to update index.html schema: {e}", file=sys.stderr)

class HomeifyHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=REPO_DIR, **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/status":
            try:
                rev = subprocess.run(
                    ["git", "-C", REPO_DIR, "rev-parse", "--short", "HEAD"],
                    capture_output=True, text=True, check=True
                ).stdout.strip()
            except Exception:
                rev = "unknown"
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({
                "online": True,
                "gitBranch": "main",
                "commit": rev,
                "repo": "AmeeNafih/Homeify-Furniture-Website"
            }).encode("utf-8"))
            return
        super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == "/api/deploy":
            content_length = int(self.headers.get("Content-Length", 0))
            body_bytes = self.rfile.read(content_length)
            try:
                data = json.loads(body_bytes.decode("utf-8"))
                products = data.get("products")
                highlights = data.get("highlights")

                if not products or not isinstance(products, list):
                    raise ValueError("Payload missing 'products' list")

                # 1. Write products.json
                products_path = os.path.join(REPO_DIR, "products.json")
                with open(products_path, "w", encoding="utf-8") as f:
                    json.dump(products, f, indent=2, ensure_ascii=False)
                    f.write("\n")

                # 2. Write highlights.json if provided
                if highlights is not None and isinstance(highlights, list):
                    highlights_path = os.path.join(REPO_DIR, "highlights.json")
                    with open(highlights_path, "w", encoding="utf-8") as f:
                        json.dump(highlights, f, indent=2, ensure_ascii=False)
                        f.write("\n")

                # 3. Synchronize Schema.org JSON-LD in index.html
                update_index_schema(REPO_DIR, products)

                # 4. Git stage
                subprocess.run(
                    ["git", "-C", REPO_DIR, "add", "products.json", "highlights.json", "index.html"],
                    check=True
                )

                # 5. Check if staged changes exist
                diff = subprocess.run(["git", "-C", REPO_DIR, "diff", "--cached", "--quiet"])
                if diff.returncode == 0:
                    resp = {
                        "success": True,
                        "deployed": False,
                        "message": "Website data is already up to date with the latest commit."
                    }
                else:
                    # Staged changes found -> commit and push
                    subprocess.run(
                        ["git", "-C", REPO_DIR, "commit", "-m", "Update catalog prices and best sellers via Workshop Admin"],
                        check=True
                    )
                    env = os.environ.copy()
                    env["GIT_SSH_COMMAND"] = "ssh -o StrictHostKeyChecking=accept-new"
                    push_res = subprocess.run(
                        ["git", "-C", REPO_DIR, "push", "origin", "main"],
                        env=env,
                        capture_output=True,
                        text=True
                    )
                    if push_res.returncode != 0:
                        raise RuntimeError(f"Git push failed: {push_res.stderr.strip()}")

                    rev_res = subprocess.run(
                        ["git", "-C", REPO_DIR, "rev-parse", "--short", "HEAD"],
                        capture_output=True,
                        text=True
                    )
                    commit_hash = rev_res.stdout.strip()
                    resp = {
                        "success": True,
                        "deployed": True,
                        "commit": commit_hash,
                        "message": f"Committed ({commit_hash}) and pushed to GitHub! Vercel is now deploying your changes to https://homeifyfurniture.in."
                    }

                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps(resp).encode("utf-8"))

            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({
                    "success": False,
                    "error": str(e)
                }).encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()

class ThreadingServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = True

if __name__ == "__main__":
    print(f"Starting Homeify Workshop Server on port {PORT}...")
    print(f"Serving repository: {REPO_DIR}")
    print(f"Workshop Studio URL: http://localhost:{PORT}/tools/admin.html")
    with ThreadingServer(("", PORT), HomeifyHandler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
