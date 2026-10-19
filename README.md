# Homeify Furniture | Official Showcase & Digital Experience

> **Address:** **Homeify Furniture, M E S Junction, Erattupetta, Kottayam District, Kerala - 686122**  
> **Direct Workshop WhatsApp & Call:** **+91 97784 46620**  
> **Brand Aesthetic:** *"Haute Modern 3D Architectural Ergonomics meets Kerala Woodcraft"*  
> **Key Value Proposition:** 5-Year Comprehensive Manufacturing Warranty, 100% Pure Natural Wood & Premium Engineered Particle Board, Direct-from-Factory Pricing.

---

## 🌟 Executive Overview

**Homeify Furniture** is a premier furniture manufacturing company and workshop located at **M E S Junction, Erattupetta, Kottayam District, Kerala**. 

This single-page showcase has been completely upgraded with a **cutting-edge Modern 3D Look**, featuring:
- **Interactive 3D Ambient Depth Canvas:** Warm floating wood-dust motes and golden ambient particles responding to 3D mouse parallax.
- **Dynamic 3D Card Tilt & Specular Light Sheen:** Every product card and trust badge physically tilts in 3D coordinate space with cursor-driven light reflections.
- **Interactive 3D Material Studio Cube:** Real 3D draggable plinth comparing **100% Pure Natural Wood** against **Grade-E1 Particle Board**.
- **Tactile 3D Buttons & Layered Depth:** Multi-tier elevation drop shadows, beveled glass rims, and physical press feedback.
- **Showroom MRP vs. Direct Factory Pricing:** Transparent dual pricing with instant in-browser editor and savings pills.
- **Real-Time WhatsApp Inquiries:** Direct to **+91 97784 46620**.

---

## 🎨 Design System & Modern Visual Identity

### 1. Color Palette
- **Primary Canvas:** Warm Alabaster / Soft Cream Chalk (`#FAF8F5`)
- **Secondary Dark Sections:** Deep Obsidian Charcoal (`#0D0C0B`)
- **Primary Accent:** Warm Teak Bronze (`#9E6738`)
- **Secondary Accents:**
  - Forest Sage (`#2C4A38`) — representing Nilambur seasoned timber & organic sustainability
  - Champagne Gold (`#D4AF37`) — highlighting the **5-Year Warranty** seals and badges

### 2. Typography
- **Primary Display & Headings:** *Syne* & *Playfair Display* (Google Fonts)
- **Editorial Sub-Headings:** *Cormorant Garamond* (Google Fonts)
- **UI Elements, Metrics & Mono Labels:** *Plus Jakarta Sans* & Technical Monospace

---

## 📱 WhatsApp Integration: +91 97784 46620

All contact points throughout the entire website are pre-wired to the workshop number **9778446620**:
1. **Top Utility Bar:** Direct link to WhatsApp and call line `+91 97784 46620`.
2. **Navigation Header & Mobile Drawer:** One-click WhatsApp button to `+91 97784 46620`.
3. **Product Lightbox Modal:** Pre-filled product inquiry message sent directly to WhatsApp.
4. **Interactive Custom Quote Configurator:** Formats selected items, room scale, and material choice into an inquiry message sent to `+91 97784 46620`.
5. **Floating Action Button:** Persistent floating WhatsApp button with live notification ping.

---

## 🚀 Interactive Features

1. **Floating Anti-Gravity Trust Badges:**
   - `🛡️ 5-Year Guaranteed Warranty`
   - `🌳 100% Pure Natural Wood`
   - `🏭 Direct from Factory`
   - Bob gently with CSS keyframes and react to mouse movement with 3D parallax tilt.
2. **Filterable Bento Grid Gallery:**
   - Dynamic cards for *Living & Sofas*, *Bedroom & Dining*, *Office & Modular*, and *Custom Woodwork*.
   - Interactive Quick-View Lightbox modal with complete specifications.
3. **Interactive Material Comparator with Animated Metric Bars:**
   - 100% Seasoned Natural Wood vs. Engineered Particle Board.
   - Animated visual percentage bars for Lifespan, Moisture Resistance, Re-sandability, and Kerala Monsoon Stability.
   - Interactive 2-Question Material Finder Quiz.
4. **The 5-Year Warranty & Craftsmanship Promise:**
   - Dark modern luxury section (`#0D0C0B`) with animated number counters and 4-step workshop workflow.
5. **Interactive Custom Quote & WhatsApp Estimator:**
   - Calculates estimated factory costs and timeline, and launches WhatsApp to `9778446620` with a confetti celebration.

---

## 📱 Mobile Architecture & Touch Optimization Engine

The mobile experience has been engineered to feel like a high-performance native iOS / Android application:
1. **Persistent Mobile Quick-Action Dock:**
   - Thumb-reachable bottom bar (`#mobile-bottom-dock`) with 4 primary actions:
     - 💬 **WhatsApp Us** (direct to `+91 97784 46620` with notification ping)
     - 📞 **Call Now** (`tel:+919778446620`)
     - 🛋️ **Catalog** (smooth scroll to collections)
     - 📐 **Get Quote** (instant scroll to custom configurator)
   - Features `safe-bottom` padding to adapt seamlessly to modern bezel-less iPhones and Androids.
2. **Horizontal Swipeable Hero Trust Badges:**
   - On mobile displays, the 3 floating trust badges snap into a sleek horizontal touch-scrolling reel with smooth scroll snap (`snap-x snap-mandatory`), preventing vertical layout clutter.
3. **Touch-Swipeable Category Filter Pills:**
   - Single-row horizontal scrollable filter strip (`no-scrollbar`) allowing quick one-thumb switching between collections without taking up vertical screen real estate.
4. **Touch-Scaled 3D Material Studio Cube:**
   - Dynamically scaled to `190px × 190px` on small screens (`<=640px`) to guarantee zero edge-clipping or horizontal scroll overflow on 320px–375px viewports (iPhone SE, mini).
5. **Auto-Zoom Prevention on iOS Safari:**
   - Text, phone, and select inputs maintain `font-size: 16px !important` on mobile, permanently preventing annoying iOS Safari viewport auto-zooming.
6. **Auto-Closing Slide-out Drawer:**
   - Clean slide-out drawer that automatically closes whenever any navigation anchor, quote link, or modal button is tapped.


## 🏷️ Showroom MRP vs. Factory Direct Pricing & Thumbnail Showcase

1. **Uncropped Product Thumbnails:**
   - 9:16 portrait workshop photos are fitted with `aspect-[4/5]` / `aspect-[3/4]` containers using `object-contain` on dark studio gradient backing.
   - Dual controls above the gallery: **"Thumbnail Grid"** vs. **"Bento Showcase"** and **"Uncropped Photo"** vs. **"Cover Fill"**.
   - Lightbox modal contains an interactive **bottom thumbnail strip** to quickly browse between products.
2. **Dual Pricing Engine:**
   - Displays **Showroom Retail MRP** with strikethrough (e.g. ~₹38,000~) alongside **Factory Direct Price** (e.g. ₹24,500) and **Savings Badge** (e.g. "Save 36% Direct").
3. **Workshop Management Studio (Edit MRP & Photos):**
   - Click the **"Edit MRP"** button in the top navigation bar or toolbar to edit prices for any product right in the browser with instant local persistence.
   - Or modify defaults in [`app.js`](file:///home/ameen/Downloads/Homeify%20Website/app.js) inside `DEFAULT_PRODUCTS`.

---

## 🛠️ How to Run & Preview

The website is running on your local server:
- **Local URL:** [http://localhost:8000](http://localhost:8000)
- **Local File:** [**`index.html`**](file:///home/ameen/Downloads/Homeify%20Website/index.html)

To launch anytime after reboot or from terminal:
```bash
cd "/home/ameen/Downloads/Homeify Website"
python3 -m http.server 8000
```

---

## 📦 Version Control & File Safety

All files and assets are tracked in Git on branch `main`.
To view recent commits or changes:
```bash
git log --oneline
```

