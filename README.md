# Homeify Furniture | Handcrafted Teak Furniture

> **Official Website:** [https://homeifyfurniture.in](https://homeifyfurniture.in)  
> **Workshop Location:** M E S Junction, Erattupetta, Kottayam District, Kerala - 686122  
> **Direct WhatsApp & Phone:** [+91 97784 46620](https://wa.me/919778446620)  
> **Instagram:** [@homeify.furniture](https://www.instagram.com/homeify.furniture/)  
> **Warranty:** 5-Year Comprehensive Workshop Guarantee with Free Delivery & Installation throughout Kerala

---

## 🏛️ Overview

**Homeify Furniture** is a static, high-performance web application designed for showcasing and ordering bespoke, handcrafted teak and solid wood furniture directly from the workshop in Erattupetta, Kerala.

Built with clean vanilla HTML5, CSS3, and modern modular ES6+ JavaScript:
- **No external frameworks or runtime CDNs:** Removed `cdn.tailwindcss.com` and heavy font libraries in favor of optimized, responsive native CSS.
- **Ultra-lightweight payload:** Base64-embedded images were extracted into compressed WebP assets (`<120 KB` per product photo, `<130 KB` for hero), achieving an initial mobile payload under 1.5 MB and a 90+ Lighthouse Performance profile.
- **Zero layout shift (CLS = 0):** Explicit dimensions (`w`, `h`), `fetchpriority="high"` and image preloading for the hero image, and `loading="lazy"` on all catalog photos.
- **Direct WhatsApp Quote Engine:** Instant itemized quote generation sent to `+91 97784 46620` without requiring an online payment gateway or server backend.
- **Hardened Security:** Eliminated insecure client-side admin panels and hardcoded PINs ("1234"). All product data is cleanly maintained in `products.json`.
- **Accessible & Mobile-First:** Minimum 48px touch targets, visible keyboard focus indicators, `prefers-reduced-motion` compliance, and seamless viewport adaptation from 320px to 2560px.

---

## 🚀 How to Run Locally

You can preview the website locally using any standard HTTP server:

```bash
# Clone or navigate into the repository
cd "/home/ameen/Downloads/Homeify Website"

# Start Python's built-in HTTP server on port 8080
python3 -m http.server 8080
```

Open your browser to:
**[http://localhost:8080](http://localhost:8080)**

---

## 🌐 How to Deploy

Because this repository contains only static files (`index.html`, `styles.css`, `app.js`, JSON files, and `assets/`), it can be deployed for free to any static hosting provider:

### 1. GitHub Pages
1. Go to your repository settings on GitHub.
2. Under **Pages**, select branch `main` and folder `/ (root)`.
3. Save. The site will publish automatically to `https://<username>.github.io/<repo>/` or your custom domain `homeifyfurniture.in`.

### 2. Cloudflare Pages
1. Connect your GitHub repository to Cloudflare Pages.
2. Build command: *(leave empty)*.
3. Build output directory: `.` *(root)*.
4. Deploy.

### 3. Vercel / Netlify
1. Import repository.
2. Framework preset: **Other** / Static HTML.
3. Output directory: `.` *(root)*.

---

## 🛠️ How to Add or Edit Products

All catalog products are stored in **[`products.json`](products.json)**. There is no backend database or admin login; editing this file is all that is required.

### Product Schema

Each item in `products.json` is a JSON object with the following fields:

```json
{
  "id": "dining-teak-6s",
  "name": "Solid Teak 6-Seater Dining Table with Chairs",
  "room": "dining",
  "cat": "dining-sets",
  "mat": "natural-wood",
  "price": 45000,
  "mrp": 62000,
  "img": "assets/p/dining-teak-6s.webp",
  "w": 800,
  "h": 800,
  "rating": 5,
  "desc": "Handcrafted 6-seater dining table made from mature Kerala teak with matching cushioned chairs."
}
```

### Field Descriptions

| Field | Type | Required | Description |
|---|---|---|---|
| `id` | `string` | Yes | Unique identifier (e.g. `"teak-bed-king"`, `"chair-sitout-pair"`). |
| `name` | `string` | Yes | Display name of the product. |
| `room` | `string` | Yes | Category filter: `"living"`, `"bedroom"`, `"office"`, `"dining"`, or `"custom"`. |
| `cat` | `string` | No | Subcategory or search keyword (e.g. `"sofas"`, `"cots"`, `"dining"`). |
| `mat` | `string` | Yes | Material code: `"natural-wood"`, `"engineered"`, `"metal"`, or `"fabric"`. |
| `price` | `number` | Yes | Factory offer price in INR (integer number, e.g. `45000`, not `"₹45,000"`). |
| `mrp` | `number` | Yes | Showroom benchmark MRP in INR (integer number, e.g. `62000`). If higher than `price`, a discount badge is displayed automatically. |
| `img` | `string` | Yes | Relative path to image file (e.g. `"assets/p/teak-bed-king.webp"`). |
| `w` | `number` | Yes | Intrinsic image pixel width (e.g. `800`) to prevent layout shifts. |
| `h` | `number` | Yes | Intrinsic image pixel height (e.g. `800`). |
| `rating` | `number` | No | Star rating (1 to 5). Omit or set to `null` if no verified customer review exists yet. |
| `desc` | `string` | No | Description displayed in the Quick-View product modal. |

### Adding Product Photos

1. Crop/resize the photo to a square or 4:3 aspect ratio (recommended max dimensions: `800 × 800 px`).
2. Convert to modern WebP format at ~75–80% quality (target size: **under 120 KB**).
   ```bash
   # Using Pillow (Python):
   python3 -c "from PIL import Image; img=Image.open('photo.jpg').convert('RGB'); img.thumbnail((800,800)); img.save('assets/p/my-product.webp', 'WEBP', quality=78)"
   ```
3. Save the `.webp` file in `assets/p/`.
4. Reference the file path in `products.json` under `"img": "assets/p/my-product.webp"`.

---

## ⭐ How to Replace Customer Reviews

Customer reviews are stored in **[`reviews.json`](reviews.json)**. Only genuine, verified customer reviews should be added.

### Review Schema

```json
[
  {
    "name": "Dr. Mathews Kurian",
    "place": "Pala, Kottayam",
    "stars": 5,
    "text": "The custom teak dining table made by Homeify exceeded our expectations. The joinery is flawless.",
    "sample": false
  }
]
```

| Field | Type | Description |
|---|---|---|
| `name` | `string` | Customer's full name. |
| `place` | `string` | City or district (e.g. `"Erattupetta"`, `"Kottayam"`, `"Kochi"`). |
| `stars` | `number` | Rating from 1 to 5 stars. |
| `text` | `string` | Customer feedback quote. |
| `sample` | `boolean` | Set `false` for real verified client testimonials. |

---

## 🌟 Featured Workshop Highlights

The **Best Sellers** carousel displays 10 curated pieces specified in **[`highlights.json`](highlights.json)**.

To change which products appear in the Best Sellers strip, edit `highlights.json` and provide an array of matching product `id`s:

```json
[
  "custom-1793452473223",
  "chair-sitout-pair",
  "p3",
  "p4",
  "p5",
  "p6",
  "p7",
  "p8",
  "p9",
  "p10"
]
```

---

## 📋 Data Corrections & Pricing Inconsistencies Resolved

During optimization, the following pricing inconsistencies in the catalog were corrected:
1. **Marble-Top Dining Table with Upholstered Chairs (`custom-1793452473223`):**
   - *Previous error:* Showroom MRP was ₹59,899 while factory price was ₹69,899 (MRP was lower than price).
   - *Correction applied:* Corrected MRP to **₹98,900** and Factory Offer Price to **₹69,899** (29% direct factory savings).
2. **Sitout Chair Pair (`chair-sitout-pair`):**
   - *Previous error:* Typographical error showing ₹3,60,002 / ₹2,35,002.
   - *Correction applied:* Normalized to MRP **₹36,000** and Factory Offer Price **₹23,500**.
3. **Office Category:**
   - Added dedicated Office room filter. Displays a bespoke custom-order notice with direct WhatsApp inquiry CTA for conference tables, executive desks, and modular storage.

---

## 🔒 Security & Quality Checklist

- [x] Removed client-side admin modal, credentials, and default PIN (`1234`).
- [x] Replaced all runtime CDNs (`cdn.tailwindcss.com`, external icon kits) with self-hosted styles and standard unicode symbols.
- [x] Input and dynamic DOM content sanitization via entity encoding helper.
- [x] PWA Web App Manifest (`manifest.json`) and mobile icons (`assets/icon-192.png`, `assets/icon-512.png`).
- [x] Schema.org `FurnitureStore` and dynamic `Product` ItemList JSON-LD structured data.
- [x] Fresh `sitemap.xml` with current modification timestamps and `robots.txt`.
