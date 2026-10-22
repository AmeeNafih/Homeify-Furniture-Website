/**
 * Homeify Furniture - Erattupetta, Kottayam, Kerala
 * Ultra-Modern Interactive Experience Engine & Awwwards-grade Showcase
 * WhatsApp Workshop Hotline: +91 97784 46620
 * Featuring 100% Real Local Workshop Assets from /assets/
 */

const WORKSHOP_WHATSAPP = '919778446620';
const WORKSHOP_DISPLAY_PHONE = '+91 97784 46620';
const DEFAULT_LOGO = 'assets/homeify-logo-dark-text.png';

// --- REAL LOCAL ASSETS PRODUCT CATALOG ---
const DEFAULT_PRODUCTS = [
  {
    id: 'living-slated-table',
    name: 'The Slated Coffee Table',
    category: 'living',
    categoryName: 'Living & Sofas',
    materialCategory: 'natural-wood',
    materialType: '100% Kiln-Seasoned Natural Teak Wood Staves',
    warranty: '5-Year Structural Integrity Warranty',
    dimensions: '24" Diameter × 20" Height',
    finish: 'Hand-Rubbed Organic Teak Satin Polish (Moisture Sealed)',
    badge: 'Curated Collection',
    mrp: '₹26,000',
    factoryPrice: '₹18,500',
    priceEstimate: '₹18,500 (Direct Workshop Price)',
    leadTime: '6 to 9 Working Days',
    image: 'assets/slated-coffee-table.jpg',
    description: 'An architectural dialogue of rhythmic vertical wooden slats crafted from pure seasoned teak. Engineered with precision organic joinery to create a light, sculptural statement for modern Kerala living rooms.',
    features: [
      'Individually hand-planed seasoned teak staves with calibrated gaps',
      'Solid circular solid wood top surface with beveled soft edges',
      'Resistant to humidity and hot beverage rings with heat-resistant topcoat',
      'Handcrafted directly at our Erattupetta workshop'
    ]
  },
  {
    id: 'bed-premium-cot',
    name: 'Premium 6-Foot Wooden Cot',
    category: 'bedroom-dining',
    categoryName: 'Bedroom & Dining',
    materialCategory: 'natural-wood',
    materialType: '100% Pure Kiln-Seasoned Solid Teak Wood',
    warranty: '5-Year Manufacturing & Timber Warranty',
    dimensions: '78"L × 72"W × 44"H (Fits 78×72 King Mattress)',
    finish: 'Deep Honey Teak Polyurethane Matte Seal',
    badge: 'Craftsmanship That Lasts',
    mrp: '₹78,000',
    factoryPrice: '₹54,000',
    priceEstimate: '₹54,000 (Direct Workshop Price)',
    leadTime: '12 to 16 Working Days',
    image: 'assets/premium-wooden-cot.jpg',
    description: 'Monumental 6-foot wooden cot crafted for generations. Features an elegant slatted arch crown with triple raised-panel lower framing, supported by heavy monolithic corner posts.',
    features: [
      'Substantial solid teak planks throughout framing, slats & headboard',
      'Internal steel cleat and silent mortise-and-tenon structural joints',
      'Kiln-seasoned in Erattupetta to prevent warping in Kerala monsoons',
      'Optional hydraulic lift storage or deep sliding wooden drawers'
    ]
  },
  {
    id: 'living-rosewood-table',
    name: 'The Rosewood Collection Coffee Table',
    category: 'living',
    categoryName: 'Living & Sofas',
    materialCategory: 'natural-wood',
    materialType: '100% Genuine Seasoned Kerala Rosewood & Tempered Glass',
    warranty: '5-Year Full Workshop Warranty',
    dimensions: '48"L × 26"W × 18"H',
    finish: 'Natural High-Luster Rosewood Lacquer with Scratch Guard',
    badge: 'Genuine Rosewood',
    mrp: '₹36,000',
    factoryPrice: '₹24,500',
    priceEstimate: '₹24,500 (Direct Workshop Price)',
    leadTime: '8 to 11 Working Days',
    image: 'assets/rosewood-coffee-table.jpg',
    description: 'Heirloom luxury coffee table handcrafted from authentic seasoned rosewood. Features sculptured cabriole legs, an integrated lower slatted storage shelf, and a flush-mounted toughened glass top.',
    features: [
      '100% authentic Kerala rosewood known for dense grain & dark luster',
      'Traditional hand-carved curved cabriole legs with reinforced dowels',
      '10mm shatter-resistant beveled tempered glass surface',
      'Integrated slatted magazine and device tier below'
    ]
  },
  {
    id: 'living-handcrafted-sofa',
    name: 'The Indoor Living Experience Handcrafted Sofa',
    category: 'living',
    categoryName: 'Living & Sofas',
    materialCategory: 'natural-wood',
    materialType: '100% Pure Natural Hardwood Frame with Botanical Linen Cushion',
    warranty: '5-Year Frame & Cushion Resilience Warranty',
    dimensions: '82"W × 34"D × 31"H (Seat Height: 17")',
    finish: 'Smooth Natural Teak Wax with Stain-Repellent Fabric',
    badge: 'Artisanal Daybed',
    mrp: '₹65,000',
    factoryPrice: '₹46,000',
    priceEstimate: '₹46,000 (Direct Workshop Price)',
    leadTime: '10 to 14 Working Days',
    image: 'assets/handcrafted-wooden-sofa.jpg',
    description: 'An airy Scandinavian-tropical spindle daybed sofa. The curved continuous armrest flows seamlessly into vertical wooden spindles, holding a plush botanical-patterned linen cushion.',
    features: [
      'Kiln-seasoned hardwood frame designed for maximum air circulation',
      'Dual-density 40-density orthopedic foam for lumbar and posture support',
      'Removable, washable botanical motif linen upholstery with hidden zippers',
      'Tapered wooden legs fitted with floor-protection pads'
    ]
  },
  {
    id: 'bed-timber-cot',
    name: 'The Timber Cot (6 Feet of Natural Elegance)',
    category: 'bedroom-dining',
    categoryName: 'Bedroom & Dining',
    materialCategory: 'natural-wood',
    materialType: '100% Seasoned Natural Teak Wood',
    warranty: '5-Year Structural Integrity Warranty',
    dimensions: '78"L × 72"W × 38"H (6-Foot King)',
    finish: 'Warm Teak Matte Seal with Organic Wood Grain Patina',
    badge: 'Natural Elegance',
    mrp: '₹68,000',
    factoryPrice: '₹48,000',
    priceEstimate: '₹48,000 (Direct Workshop Price)',
    leadTime: '10 to 14 Working Days',
    image: 'assets/timber-cot-6ft.jpg',
    description: 'Minimalist low-profile platform bed engineered to showcase the pure, uninterrupted natural grain of seasoned Grade-A natural teak. Monolithic headboard plank with recessed shadow-gap pedestal framing.',
    features: [
      'Wide continuous solid teak planks grain-matched across headboard',
      'Low platform profile offering ergonomic accessibility and modern spatial depth',
      'Heavy-duty internal multi-girder mattress support holding 450kg+ silently',
      '100% solid timber construction with zero particle board or cheap fillers'
    ]
  },
  {
    id: 'dining-oval-marble',
    name: 'The Oval Dining Table (Marble & Teak)',
    category: 'bedroom-dining',
    categoryName: 'Bedroom & Dining',
    materialCategory: 'natural-wood',
    materialType: 'Italian Polished White Marble Top & Monolithic Teak Pedestals',
    warranty: '5-Year Craftsmanship & Material Warranty',
    dimensions: '84"L × 42"W × 30"H (Comfortable 8-Seater)',
    finish: 'Sealed Polished Marble Top with Satin Natural Teak Base',
    badge: 'Marble & Teak',
    mrp: '₹1,15,000',
    factoryPrice: '₹79,000',
    priceEstimate: '₹79,000 (Direct Workshop Price)',
    leadTime: '14 to 18 Working Days',
    image: 'assets/oval-marble-dining-table.jpg',
    description: 'Craftsmanship in every curve. A grand oval slab of polished Italian white marble resting on twin sculptural curved monolithic teak wood pedestals that offer unrestricted legroom.',
    features: [
      '20mm thick natural Italian marble with rounded bullnose edges',
      'Monolithic twin teak wood pedestal pillars sculpted for maximum stability',
      'Food-safe nano-sealed surface resistant to citrus, curry, and wine stains',
      'Accommodates 8 dining chairs comfortably with zero corner leg obstructions'
    ]
  },
  {
    id: 'living-teakwood-coffee-table',
    name: 'The Teakwood Glass Coffee Table',
    category: 'living',
    categoryName: 'Living & Sofas',
    materialCategory: 'natural-wood',
    materialType: '100% Seasoned Natural Teak Wood & Smoked Glass',
    warranty: '5-Year Joint & Timber Warranty',
    dimensions: '44"L × 24"W × 16"H',
    finish: 'Warm Natural Teak Stain with Satin Anti-Scratch Coat',
    badge: 'Glass & Teak',
    mrp: '₹26,500',
    factoryPrice: '₹18,500',
    priceEstimate: '₹18,500 (Direct Workshop Price)',
    leadTime: '6 to 9 Working Days',
    image: 'assets/teakwood-glass-coffee-table.jpg',
    description: 'A perfect blend of organic wood and sleek glass, designed for modern living. Sculpted rounded box frame handcrafted from solid natural teak wood with a recessed smoked tempered glass top and slatted bottom storage shelf.',
    features: [
      'Continuous curved solid teak outer frame with rounded safety corners',
      'Recessed toughened smoked glass top resistant to impacts and thermal shock',
      'Spaced bottom slatted shelf providing ample storage for books and electronics',
      'Kiln-seasoned in Erattupetta to withstand monsoon humidity'
    ]
  },
  {
    id: 'dining-curve-chair',
    name: 'The Curve Dining Chair',
    category: 'bedroom-dining',
    categoryName: 'Bedroom & Dining',
    materialCategory: 'natural-wood',
    materialType: 'Sculptured Solid Teak Wood & Heavy-Duty Cream Bouclé',
    warranty: '5-Year Joint & Structural Warranty',
    dimensions: '22"W × 21"D × 31"H (Seat Height: 18")',
    finish: 'Hand-Smoothed Organic Teak Oil with Soil-Resistant Bouclé',
    badge: 'Timeless Comfort',
    mrp: '₹12,500',
    factoryPrice: '₹8,200',
    priceEstimate: '₹8,200 (Direct Workshop Price)',
    leadTime: '7 to 10 Working Days',
    image: 'assets/curve-dining-chair.jpg',
    description: 'A perfect blend of organic wood and plush comfort. Sculptured curved wraparound backrest carved from solid teak wood cradles the upper back, paired with a deep circular bouclé seat.',
    features: [
      'Anatomically contoured curved solid wood backrest promoting natural posture',
      'High-resilience 45-density foam core upholstered in textured cream bouclé',
      'Double-tenon splayed leg architecture tested for 180kg static load capacity',
      'Ideal companion for our Oval and Harmony dining tables'
    ]
  },
  {
    id: 'dining-harmony-table',
    name: 'The Harmony Dining Table',
    category: 'bedroom-dining',
    categoryName: 'Bedroom & Dining',
    materialCategory: 'natural-wood',
    materialType: 'White Calacatta Marble Top & Interlocking Cross-Curved Teak Legs',
    warranty: '5-Year Full Workshop Warranty',
    dimensions: '80"L × 38"W × 30"H (6 to 8 Seater)',
    finish: 'Polished Stain-Sealed Marble with Hand-Rubbed Walnut Teak Finish',
    badge: 'Crafted for Elegant Living',
    mrp: '₹98,000',
    factoryPrice: '₹69,000',
    priceEstimate: '₹69,000 (Direct Workshop Price)',
    leadTime: '12 to 16 Working Days',
    image: 'assets/harmony-dining-table.jpg',
    description: 'A statement dining centerpiece defined by architectural tension. A pure rectangular white marble slab floats atop dramatic interlocking cross-curved solid teak support legs.',
    features: [
      'Solid cross-curved architectural trestle legs engineered from thick teak billets',
      'Beveled rectangular marble slab with nano stain-repellent seal',
      'Integrated longitudinal stretcher beam ensuring zero wobble or flexing',
      'Custom sizing available to suit residential villa dining rooms'
    ]
  },
  {
    id: 'dining-oval-set',
    name: 'The Oval Dining Set (Complete with 6 Chairs)',
    category: 'bedroom-dining',
    categoryName: 'Bedroom & Dining',
    materialCategory: 'natural-wood',
    materialType: 'Oval Solid Wood Dining Table + 6 Curved Leatherette Chairs',
    warranty: '5-Year Comprehensive Suite Warranty',
    dimensions: 'Table: 82"L × 40"W × 30"H | Set of 6 Matching Chairs',
    finish: 'Natural Honey Teak Food-Safe Finish & Cream Leatherette',
    badge: 'Complete Suite',
    mrp: '₹1,35,000',
    factoryPrice: '₹92,000',
    priceEstimate: '₹92,000 (Direct Workshop Price for Set of 6)',
    leadTime: '14 to 18 Working Days',
    image: 'assets/oval-dining-set-chairs.jpg',
    description: 'The ultimate dining ensemble crafted in Gateway of Malanadu. An expansive oval solid wood dining table paired with 6 ergonomically curved dining armchairs in stain-resistant cream leatherette.',
    features: [
      'Curved oval table design facilitates natural conversation across all guests',
      'Includes 6 bespoke curved armchairs tailored to nest seamlessly under table',
      'Food-safe heat and water ring resistant polyurethane lacquer',
      'Factory direct savings of over 30% compared to Cochin retail showrooms'
    ]
  },
  {
    id: 'dining-oval-teak',
    name: 'The Oval Dining Table (Natural Teak Edition)',
    category: 'bedroom-dining',
    categoryName: 'Bedroom & Dining',
    materialCategory: 'natural-wood',
    materialType: '100% Solid Grade-A Natural Teak Wood (Zero Veneers)',
    warranty: '5-Year Timber & Manufacturing Warranty',
    dimensions: '84"L × 42"W × 30"H (8-Seater)',
    finish: 'Natural Teak Satin Oil with Water-Repellent Seal',
    badge: '100% Natural Teak',
    mrp: '₹1,05,000',
    factoryPrice: '₹74,000',
    priceEstimate: '₹74,000 (Direct Workshop Price)',
    leadTime: '12 to 16 Working Days',
    image: 'assets/oval-teak-dining-table.jpg',
    description: 'For lovers of pure wood. Monolithic edition of our signature oval dining table, built entirely from hand-selected, continuous grain-matched solid teak planks with hand-beveled edges.',
    features: [
      'Continuous solid teak tabletop with organic grain match and soft rounded rim',
      'Sculpted curved monolithic twin pedestals for unmatched structural rigidity',
      'Kiln-seasoned in Erattupetta to withstand seasonal humidity shifts',
      'Food-safe non-toxic organic topcoat easy to clean and maintain'
    ]
  },
  {
    id: 'custom-royal-jhoola',
    name: 'The Royal Jhoola (Kerala Verandah Oonjal)',
    category: 'custom-woodwork',
    categoryName: 'Custom Woodwork',
    materialCategory: 'natural-wood',
    materialType: 'Solid Grade-A Natural Teak Wood Planks & Handcrafted Brass/Steel Chains',
    warranty: '5-Year Heavy-Duty Structural Warranty',
    dimensions: '54"L × 26"D × 22"H Backrest (Chains adjustable to ceiling height)',
    finish: 'Deep Heritage Teak Luster Polish with Brass Accents',
    badge: 'Handcrafted Luxury',
    mrp: '₹58,000',
    factoryPrice: '₹39,500',
    priceEstimate: '₹39,500 (Direct Workshop Price)',
    leadTime: '10 to 14 Working Days',
    image: 'assets/royal-jhoola-swing.jpg',
    description: 'An iconic tribute to classical Kerala architectural verandas (Poomukham). Substantial solid teak wood swing plank with spindle backrest, suspended by heavy-duty interlocking chains.',
    features: [
      'Solid kiln-dried natural teak plank tested to support 350kg weight load',
      'Artisanal interlocking hanging chain links with brass safety shackles',
      'Contoured armrests and supportive spindle backrest for afternoon relaxation',
      'Includes ceiling mounting anchor plates and hardware for easy villa installation'
    ]
  },
  {
    id: 'dining-oval-fluted',
    name: 'The Oval Fluted Dining Table',
    category: 'bedroom-dining',
    categoryName: 'Bedroom & Dining',
    materialCategory: 'natural-wood',
    materialType: 'White Italian Marble Top & Fluted Teak Cylindrical Pillar Base',
    warranty: '5-Year Masterpiece Guarantee',
    dimensions: '78"L × 40"W × 30"H (6 to 8 Seater)',
    finish: 'Polished Marble Slab with Fluted Teak Organic Polyurethane Finish',
    badge: 'Masterpiece Craft',
    mrp: '₹1,10,000',
    factoryPrice: '₹76,000',
    priceEstimate: '₹76,000 (Direct Workshop Price)',
    leadTime: '12 to 16 Working Days',
    image: 'assets/oval-fluted-dining-table.jpg',
    description: 'A masterpiece of modern craftsmanship. An asymmetrical architectural base featuring one precision fluted cylindrical teak pillar and one curved monolithic plank supporting an oval marble top.',
    features: [
      'Precision CNC-fluted solid teak circular column displaying architectural rhythm',
      'Premium Italian white marble slab with smooth beveled edge detailing',
      'Asymmetrical sculpture balances modern minimalism with artisanal warmth',
      'Stain-resistant nano-sealed surface easy to wipe clean after family dinners'
    ]
  },
  {
    id: 'living-tropical-low-table',
    name: 'Handcrafted Teak Low Table',
    category: 'living',
    categoryName: 'Living & Sofas',
    materialCategory: 'natural-wood',
    materialType: '100% Solid Natural Teak Wood',
    warranty: '5-Year Guaranteed Warranty',
    dimensions: '28" Diameter × 18" Height',
    finish: 'Natural Teak Organic Wax Finish (Minimalist. Functional. Timeless.)',
    badge: 'Tropical Modern',
    mrp: '₹22,000',
    factoryPrice: '₹15,000',
    priceEstimate: '₹15,000 (Direct Workshop Price)',
    leadTime: '6 to 9 Working Days',
    image: 'assets/tropical-teak-low-table.jpg',
    description: 'From The Tropical Modern Collection. A circular coffee table designed with interlocked sculptural four-beam legs, celebrating the natural warmth and golden tones of Grade-A natural teak.',
    features: [
      'Interlocking cross-lap solid timber joinery for indestructible stability',
      'Round solid wood top highlighting natural growth rings and golden woodgrain',
      'Compact footprint perfect for living lounge seating and reading nooks',
      '100% seasoned solid timber crafted in Gateway of Malanadu'
    ]
  },
  {
    id: 'custom-slated-workshop',
    name: 'Artisanal Woodworks The Slated Table (Workshop Edition)',
    category: 'custom-woodwork',
    categoryName: 'Custom Woodwork',
    materialCategory: 'natural-wood',
    materialType: '100% Hand-Planed Seasoned Teak Staves',
    warranty: '5-Year Craftsmanship Guarantee',
    dimensions: '22" Diameter × 20" Height',
    finish: 'Erattupetta Workshop Hand-Rubbed Teak Oil',
    badge: 'Curated Collection',
    mrp: '₹24,000',
    factoryPrice: '₹16,500',
    priceEstimate: '₹16,500 (Direct Workshop Price)',
    leadTime: '7 to 10 Working Days',
    image: 'assets/artisanal-slated-workshop.jpg',
    description: 'Workshop edition of our slated side table. Each vertical teak stave is selected from aged logs, hand-planed by our master woodworkers, and calibrated to produce a flawless sculptural cylinder.',
    features: [
      'Hand-planed and calibrated wooden staves with continuous grain balance',
      'Versatile as a living room coffee table, bedside stand, or statement pedestal',
      'Internal structural tension rings ensure zero stave movement over time',
      'Stamped with Homeify Erattupetta workshop authenticity mark'
    ]
  },
  {
    id: 'office-curve-chair',
    name: 'The Curve Studio Executive & Dining Chair',
    category: 'office',
    categoryName: 'Office & Modular',
    materialCategory: 'natural-wood',
    materialType: 'Sculptured Solid Teak Wood Frame & Ergonomic Ivory Linen',
    warranty: '5-Year Joint & Frame Warranty',
    dimensions: '22"W × 22"D × 32"H (Seat Height: 18.5")',
    finish: 'Natural Organic Teak Matte Wax with Stain-Shield Fabric',
    badge: 'Executive Ergonomics',
    mrp: '₹13,500',
    factoryPrice: '₹8,900',
    priceEstimate: '₹8,900 (Direct Workshop Price)',
    leadTime: '7 to 10 Working Days',
    image: 'assets/curve-dining-chair-studio.jpg',
    description: 'Experience timeless comfort in executive suites and modern dining spaces. Sculptured solid teak architectural frame featuring an ergonomic curved floating lumbar backrest and high-density cushioned seat.',
    features: [
      'Ergonomically contoured floating backrest providing lumbar posture support during long working hours',
      'High-density 45-grade foam upholstered in breathable stain-repellent textured linen',
      'Mortise and tenon solid teak joints engineered to endure active commercial and home use',
      'Equally suited as an executive desk chair, conference seating, or luxury dining armchair'
    ]
  },
  {
    id: 'office-executive-suite',
    name: 'The Oval Executive Conference & Dining Suite',
    category: 'office',
    categoryName: 'Office & Modular',
    materialCategory: 'natural-wood',
    materialType: 'Polished Italian White Marble & Monolithic Teak Pedestals',
    warranty: '5-Year Structural Warranty',
    dimensions: '96"L × 44"W × 30"H (10-Seater Executive / Boardroom)',
    finish: 'Nano-Sealed Italian Marble with Satin Teak Pedestals',
    badge: 'Boardroom Luxury',
    mrp: '₹1,40,000',
    factoryPrice: '₹96,000',
    priceEstimate: '₹96,000 (Direct Workshop Price)',
    leadTime: '14 to 18 Working Days',
    image: 'assets/oval-dining-marble-solo.jpg',
    description: 'Craftsmanship in every curve. A grand oval marble table designed for corporate conference rooms, executive suites, and opulent dining halls. Twin monolithic teak pedestals maximize legroom.',
    features: [
      'Expansive 8-to-10 seater oval profile facilitating collaborative meetings and discussions',
      'Monolithic solid teak pedestals engineered for heavy-duty stability with hidden wire raceway options',
      'Stain-resistant and scratch-resistant Italian marble top ideal for intensive daily use',
      'Custom dimensions and integrated power/data box options available on order'
    ]
  },
  {
    id: 'office-modular-workstations',
    name: 'Modular Office Workstations & Storage Credenza',
    category: 'office',
    categoryName: 'Office & Modular',
    materialCategory: 'particle-board',
    materialType: 'Premium Grade-E1 Moisture-Resistant Particle Board & Teak Accents',
    warranty: '5-Year Hardware & Delamination Warranty',
    dimensions: 'Custom Modular Configurations (2-Pod, 4-Pod & Linear)',
    finish: 'Textured Melamine Anti-Scratch Finish with 2mm Impact Edge Banding',
    badge: 'Modular Ergonomics',
    mrp: '₹45,000 / pod',
    factoryPrice: '₹29,500 / pod',
    priceEstimate: '₹29,500 / pod (Direct Workshop Price)',
    leadTime: '10 to 14 Working Days',
    image: 'assets/artisanal-slated-workshop.jpg',
    description: 'High-performance modular office setups engineered for Kerala commercial spaces, creative studios, and corporate cabins. Manufactured with zero formaldehyde Grade-E1 engineered boards and precision German hardware.',
    features: [
      'Moisture-resistant Grade-E1 engineered particle boards with heavy-duty 2mm PVC edge banding',
      'Integrated under-desk wire management raceways and silent soft-close drawer slides',
      'Customizable privacy acoustic screens, CPU holders, and credenza storage pedestals',
      'Turnkey delivery and on-site assembly across Kottayam, Cochin, and all Kerala districts'
    ]
  }
];

// --- REAL HERO SLIDES (Using Real Homeify Local Photos) ---
const DEFAULT_HERO_SLIDES = [
  {
    id: 'hero-0',
    title: 'The Indoor Living Experience',
    tag: 'Living & Sofas',
    image: 'assets/handcrafted-wooden-sofa.jpg',
    specs: 'Handcrafted Wooden Sofa • Botanical Belgian Linen • 5-Year Warranty',
    quoteTarget: 'sofa'
  },
  {
    id: 'hero-1',
    title: 'The Timber Cot (6-Foot King)',
    tag: 'Master Bedroom',
    image: 'assets/timber-cot-6ft.jpg',
    specs: '100% Kiln-Seasoned Teak • Monolithic Headboard • Silent Sleep',
    quoteTarget: 'bed'
  },
  {
    id: 'hero-2',
    title: 'The Oval Dining Set',
    tag: 'Royal Dining Suites',
    image: 'assets/oval-dining-set-chairs.jpg',
    specs: 'Oval Table + 6 Curved Chairs • Marble & Teak • Direct Factory Price',
    quoteTarget: 'dining'
  },
  {
    id: 'hero-3',
    title: 'The Royal Jhoola',
    tag: 'Custom Kerala Woodwork',
    image: 'assets/royal-jhoola-swing.jpg',
    specs: 'Authentic Kerala Oonjal • Brass Interlocking Chains • Solid Teak',
    quoteTarget: 'custom'
  }
];

// Active State
let PRODUCTS = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
let HERO_SLIDES = JSON.parse(JSON.stringify(DEFAULT_HERO_SLIDES));
let currentFilter = 'all';
let selectedProductForModal = null;
let currentHeroSlideIndex = 0;
let heroSlideTimer = null;
let galleryViewMode = 'bento'; // Permanently set to Bento Showcase
let galleryThumbFit = 'cover';   // Full-size edge-to-edge frame fitting

// Calculate discount savings percentage
function calculateSavingsPercent(mrpStr, priceStr) {
  try {
    const mrp = parseInt((mrpStr || '').replace(/[^0-9]/g, ''), 10);
    const price = parseInt((priceStr || '').replace(/[^0-9]/g, ''), 10);
    if (mrp && price && mrp > price) {
      return Math.round(((mrp - price) / mrp) * 100);
    }
  } catch (e) {}
  return 30;
}

// ==========================================================================
// RESILIENT MULTI-TIER PERSISTENCE ENGINE (IndexedDB + Storage Quota Guard)
// ==========================================================================
const IDB_NAME = 'homeify_store_v1';
const IDB_STORE = 'catalog_state';

function openHomeifyDB() {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.indexedDB) return resolve(null);
    try {
      const req = window.indexedDB.open(IDB_NAME, 1);
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          db.createObjectStore(IDB_STORE);
        }
      };
      req.onsuccess = (e) => resolve(e.target.result);
      req.onerror = () => resolve(null);
    } catch (e) {
      resolve(null);
    }
  });
}

async function idbSet(key, val) {
  try {
    const db = await openHomeifyDB();
    if (!db) return;
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).put(val, key);
  } catch (e) {}
}

async function idbGet(key) {
  try {
    const db = await openHomeifyDB();
    if (!db) return null;
    return new Promise((resolve) => {
      const tx = db.transaction(IDB_STORE, 'readonly');
      const req = tx.objectStore(IDB_STORE).get(key);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => resolve(null);
    });
  } catch (e) {
    return null;
  }
}

async function idbDelete(key) {
  try {
    const db = await openHomeifyDB();
    if (!db) return;
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).delete(key);
  } catch (e) {}
}

// Auto-compress uploaded photos to max 900x900px JPEG 0.82 (typically 35KB-60KB)
// This prevents QuotaExceededError in localStorage and ensures fast mobile paints
function compressImageFile(file, maxWidth = 900, maxHeight = 900, quality = 0.82) {
  return new Promise((resolve, reject) => {
    if (!file) return reject(new Error('No image file provided'));
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        try {
          const dataUrl = canvas.toDataURL('image/jpeg', quality);
          resolve(dataUrl);
        } catch (err) {
          resolve(e.target.result);
        }
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// Load persisted custom images, logo, and MRPs from localStorage
function loadCustomAssets() {
  try {
    // 1. Logo
    const customLogo = localStorage.getItem('homeify_custom_logo');
    if (customLogo) {
      applyLogoToDOM(customLogo);
    } else {
      const isDark = document.documentElement.classList.contains('dark') || localStorage.getItem('homeify_theme') === 'dark';
      applyLogoToDOM(isDark ? 'assets/homeify-logo-cropped.png' : DEFAULT_LOGO);
    }

    // 2. Safe cleanup of legacy demo unsplash keys ONLY (do not touch https:// user images)
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('homeify_prod_img_') || key.startsWith('homeify_hero_img_')) {
        const val = localStorage.getItem(key);
        if (val && val.includes('images.unsplash.com')) {
          localStorage.removeItem(key);
        }
      }
    });

    // 2b. Load custom-added products created by admin from localStorage
    const savedCustomProducts = localStorage.getItem('homeify_custom_products');
    if (savedCustomProducts) {
      try {
        const customList = JSON.parse(savedCustomProducts);
        if (Array.isArray(customList)) {
          customList.forEach(cp => {
            const existingIdx = PRODUCTS.findIndex(p => p.id === cp.id);
            if (existingIdx !== -1) {
              PRODUCTS[existingIdx] = Object.assign({}, PRODUCTS[existingIdx], cp);
            } else {
              PRODUCTS.unshift(cp);
            }
          });
        }
      } catch (err) {
        console.warn('Could not parse homeify_custom_products:', err);
      }
    }

    // 2c. Filter out products removed/hidden by admin from the collection
    const hiddenProductIds = JSON.parse(localStorage.getItem('homeify_hidden_collection_ids') || '[]');
    if (Array.isArray(hiddenProductIds) && hiddenProductIds.length > 0) {
      PRODUCTS = PRODUCTS.filter(p => !hiddenProductIds.includes(p.id));
    }

    // 3. Apply any user-uploaded dataUrl or custom photo overrides (supports data:, assets/, https://, http://, blob:)
    PRODUCTS.forEach(p => {
      const customImg = localStorage.getItem('homeify_prod_img_' + p.id);
      if (customImg && typeof customImg === 'string' && customImg.trim().length > 0) {
        p.image = customImg;
      }
    });

    HERO_SLIDES.forEach(s => {
      const customHeroImg = localStorage.getItem('homeify_hero_img_' + s.id);
      if (customHeroImg && typeof customHeroImg === 'string' && customHeroImg.trim().length > 0) {
        s.image = customHeroImg;
      }
    });

    // 4. Apply any saved custom MRP and Factory Price overrides
    PRODUCTS.forEach(p => {
      const customMrp = localStorage.getItem('homeify_prod_mrp_' + p.id);
      const customPrice = localStorage.getItem('homeify_prod_price_' + p.id);
      if (customMrp) p.mrp = customMrp;
      if (customPrice) {
        p.factoryPrice = customPrice;
        p.priceEstimate = `${customPrice} (Direct Workshop Price)`;
      }
    });

    // 5. Apply any saved custom features / highlights overrides
    PRODUCTS.forEach(p => {
      const savedFeatures = localStorage.getItem('homeify_prod_features_' + p.id);
      if (savedFeatures !== null) {
        try {
          p.features = JSON.parse(savedFeatures);
        } catch (e) {}
      }
    });
  } catch (e) {
    console.warn('LocalStorage access warning:', e);
  }
}

// Authoritative Catalog Hydration: Fetches live catalog.json deployed on Vercel
// and merges with IndexedDB & localStorage so all visitors see the latest updates.
async function loadAuthoritativeCatalog() {
  try {
    const res = await fetch('catalog.json?v=' + Date.now(), { cache: 'no-cache' });
    if (res.ok) {
      const liveCatalog = await res.json();
      if (Array.isArray(liveCatalog) && liveCatalog.length > 0) {
        PRODUCTS = liveCatalog;
      }
    }
  } catch (e) {
    // Normal in local file:// mode or when offline
  }

  // Load any IndexedDB custom products & overrides
  try {
    const idbCustom = await idbGet('homeify_custom_products');
    if (Array.isArray(idbCustom) && idbCustom.length > 0) {
      idbCustom.forEach(cp => {
        const idx = PRODUCTS.findIndex(p => p.id === cp.id);
        if (idx !== -1) {
          PRODUCTS[idx] = Object.assign({}, PRODUCTS[idx], cp);
        } else {
          PRODUCTS.unshift(cp);
        }
      });
    }
  } catch (e) {}

  // Apply localStorage overlays on top
  loadCustomAssets();

  // Re-render gallery & customizer with authoritative catalog
  renderBentoGallery(currentFilter);
  populateCustomizerProductList();
  updateSyncStatusUI();
  checkUrlForProductDeepLink();
}

function applyLogoToDOM(logoSrc) {
  const logoElements = document.querySelectorAll('.dynamic-site-logo');
  logoElements.forEach(img => {
    img.src = logoSrc;
  });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initThemeMode();
  loadCustomAssets();
  init3DAmbientCanvas();
  init3DCardTilt();
  init3DMaterialCube();
  initHeroParallax();
  initHeroCarousel();
  renderBentoGallery('all');
  initFilterButtons();
  initModalListeners();
  initMaterialComparator();
  initAnimatedCounters();
  initQuoteConfigurator();
  initMobileNav();
  initScrollSpy();
  initCustomizerManager();
  initAddProductManager();
  initAdminAuth();
  checkUrlForProductDeepLink();
  loadAuthoritativeCatalog();
  initInstagramReels();
});

// ==========================================================================
// 0. ARTISANAL 3D SAWDUST & TIMBER SHAVINGS AMBIENT SIMULATION
// ==========================================================================
function init3DAmbientCanvas() {
  const canvas = document.getElementById('ambient-3d-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Respect battery & CPU if user prefers reduced motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  // Debounced resize to avoid layout thrashing
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, 120);
  }, { passive: true });

  const isMobile = window.innerWidth < 768;
  const PARTICLE_COUNT = isMobile ? 32 : 60;
  const particles = [];
  const focalLength = 380;

  // Camera parallax targets
  let targetCamX = 0;
  let targetCamY = 0;
  let camX = 0;
  let camY = 0;

  // Mouse wind wake
  let lastMouseX = width / 2;
  let lastMouseY = height / 2;
  let mouseX = width / 2;
  let mouseY = height / 2;
  let mouseVx = 0;
  let mouseVy = 0;
  let mouseMoved = false;

  window.addEventListener('mousemove', (e) => {
    targetCamX = (e.clientX - width / 2) * 0.12;
    targetCamY = (e.clientY - height / 2) * 0.12;

    mouseVx = (e.clientX - lastMouseX) * 0.25;
    mouseVy = (e.clientY - lastMouseY) * 0.25;
    mouseX = e.clientX;
    mouseY = e.clientY;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    mouseMoved = true;
  }, { passive: true });

  // Authentic Furniture Timber Color Palette
  const WOOD_PALETTES = [
    { base: [218, 155, 76], edge: [184, 122, 50], hi: [248, 195, 128] }, // Teak Amber Gold
    { base: [194, 136, 74], edge: [152, 98, 42],  hi: [230, 178, 118] }, // Warm Honey Teak
    { base: [158, 88, 42],  edge: [118, 58, 24],  hi: [198, 128, 78] },  // Seasoned Rosewood
    { base: [236, 208, 162],edge: [198, 168, 122],hi: [255, 235, 202] }, // Fresh Planed Pine
    { base: [226, 185, 96], edge: [178, 138, 58], hi: [250, 222, 146] }  // Golden Teak Sawdust
  ];

  function createParticle(initial = false) {
    // 4 Distinct Artisanal Wood Models:
    // 'shaving': Curled hand-planed timber ribbon (30%)
    // 'chip': Faceted polygonal wood flake (35%)
    // 'splinter': Fine teak grain fiber needle (20%)
    // 'mote': Ambient floating micro-dust mote (15%)
    const typeRoll = Math.random();
    let type = 'chip';
    if (typeRoll < 0.30) type = 'shaving';
    else if (typeRoll < 0.65) type = 'chip';
    else if (typeRoll < 0.85) type = 'splinter';
    else type = 'mote';

    const pal = WOOD_PALETTES[Math.floor(Math.random() * WOOD_PALETTES.length)];
    const z = Math.random() * 850 + 60;
    const baseVy = Math.random() * 0.42 + 0.22; // Gentle organic settling

    // Generate irregular polygon vertices for wood chips
    const vertices = [];
    const numVerts = Math.floor(Math.random() * 3) + 4; // 4 to 6 vertices
    for (let k = 0; k < numVerts; k++) {
      const angle = (k / numVerts) * Math.PI * 2;
      const r = 0.65 + Math.random() * 0.7; // Asymmetric radial distance
      vertices.push([Math.cos(angle) * r, Math.sin(angle) * r]);
    }

    return {
      type: type,
      x: (Math.random() - 0.5) * width * 1.6,
      y: initial ? (Math.random() - 0.5) * height * 1.6 : -height * 0.8 - Math.random() * 200,
      z: z,
      size: type === 'shaving' ? Math.random() * 4.5 + 3.0 :
            type === 'chip' ? Math.random() * 3.5 + 2.2 :
            type === 'splinter' ? Math.random() * 3.0 + 1.8 :
            Math.random() * 1.8 + 0.9,
      curl: Math.random() * 0.55 + 0.35, // Ribbon curvature
      vertices: vertices,
      pal: pal,
      baseAlpha: Math.random() * 0.45 + 0.40,

      // 3D Motion & Tumbling
      baseVy: baseVy,
      vx: (Math.random() - 0.5) * 0.3,
      vy: baseVy,
      vz: (Math.random() - 0.5) * 0.2,

      // Flutter / oscillation mimicking air currents
      wobbleSpeed: Math.random() * 0.025 + 0.015,
      wobbleAmp: Math.random() * 0.5 + 0.2,
      wobblePhase: Math.random() * Math.PI * 2,

      // 3D Rotation Angles & Tumbling Velocities
      rotX: Math.random() * Math.PI * 2,
      rotY: Math.random() * Math.PI * 2,
      rotZ: Math.random() * Math.PI * 2,
      vRotX: (Math.random() - 0.5) * 0.035,
      vRotY: (Math.random() - 0.5) * 0.045,
      vRotZ: (Math.random() - 0.5) * 0.025
    };
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(createParticle(true));
  }

  let time = 0;

  function render() {
    ctx.clearRect(0, 0, width, height);
    time += 0.018;

    // Decay mouse wake velocity
    mouseVx *= 0.92;
    mouseVy *= 0.92;

    // Parallax camera lerp
    camX += (targetCamX - camX) * 0.04;
    camY += (targetCamY - camY) * 0.04;

    const cx = width / 2 + camX;
    const cy = height / 2 + camY;
    const isDark = document.documentElement.classList.contains('dark');

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Organic horizontal sway mimicking delicate air drafts
      p.vx = Math.sin(time * p.wobbleSpeed * 60 + p.wobblePhase) * p.wobbleAmp;

      // Mouse wake breeze interaction
      if (mouseMoved) {
        const scaleApprox = focalLength / p.z;
        const screenPx = p.x * scaleApprox + cx;
        const screenPy = p.y * scaleApprox + cy;
        const dx = screenPx - mouseX;
        const dy = screenPy - mouseY;
        const distSq = dx * dx + dy * dy;
        const breezeRadius = 160;

        if (distSq < breezeRadius * breezeRadius && distSq > 4) {
          const dist = Math.sqrt(distSq);
          const force = (1 - dist / breezeRadius) * 1.8;
          p.x += (dx / dist) * force * 3.5 + mouseVx * 0.8;
          p.y += (dy / dist) * force * 3.5 + mouseVy * 0.8;
          // Agitate 3D tumble when stirred by cursor breeze
          p.vRotX += (Math.random() - 0.5) * 0.06;
          p.vRotY += (Math.random() - 0.5) * 0.06;
          p.vRotZ += (Math.random() - 0.5) * 0.04;
        }
      }

      // Physics update
      p.x += p.vx;
      p.y += p.vy;
      p.z += p.vz;

      // Tumbling rotation update
      p.rotX += p.vRotX;
      p.rotY += p.vRotY;
      p.rotZ += p.vRotZ;

      // Restoring natural gentle tumble speeds
      p.vRotX *= 0.99;
      p.vRotY *= 0.99;
      p.vRotZ *= 0.99;

      // Boundary recycle (smooth looping drift)
      if (p.y > height * 0.9) {
        p.y = -height * 0.8;
        p.x = (Math.random() - 0.5) * width * 1.6;
        p.z = Math.random() * 850 + 60;
      }
      if (p.x < -width * 0.9) p.x = width * 0.9;
      if (p.x > width * 0.9) p.x = -width * 0.9;
      if (p.z <= 20) p.z = 850;
      if (p.z > 920) p.z = 70;

      // 3D Perspective Projection
      const scale = focalLength / p.z;
      const sx = p.x * scale + cx;
      const sy = p.y * scale + cy;

      // Render only within viewport bounds
      if (sx > -60 && sx < width + 60 && sy > -60 && sy < height + 60 && scale > 0) {
        // Depth-based alpha fade
        const depthAlpha = Math.min(0.9, p.baseAlpha * Math.min(1.4, scale * 1.3));
        const [r, g, b] = p.pal.base;
        const [er, eg, eb] = p.pal.edge;
        const [hr, hg, hb] = p.pal.hi;

        // Dark mode brings out warm glowing amber highlights
        const alpha = isDark ? Math.min(0.85, depthAlpha * 1.15) : depthAlpha;
        const fillColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        const edgeColor = `rgba(${er}, ${eg}, ${eb}, ${alpha * 0.8})`;
        const hiColor = `rgba(${hr}, ${hg}, ${hb}, ${alpha * 0.95})`;

        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(p.rotZ);

        // 3D perspective foreshortening (tumbling in coordinate space)
        const cosX = Math.cos(p.rotX);
        const cosY = Math.cos(p.rotY);
        ctx.scale(Math.abs(cosX) > 0.08 ? cosX : 0.08, Math.abs(cosY) > 0.08 ? cosY : 0.08);

        // Render specific artisanal sawdust model
        if (p.type === 'shaving') {
          // Curled Wood Shaving: graceful curved ribbon
          const len = p.size * scale * 2.8;
          const w = p.size * scale * 0.95;
          const c = p.curl;

          ctx.beginPath();
          ctx.moveTo(-len / 2, 0);
          ctx.bezierCurveTo(-len * 0.25, -w * (c + 0.4), len * 0.25, w * c, len / 2, 0);
          ctx.bezierCurveTo(len * 0.25, w * (c + 0.5), -len * 0.25, -w * (c - 0.2), -len / 2, 0);
          ctx.fillStyle = fillColor;
          ctx.fill();

          // Subtle wood fiber highlight ridge
          ctx.beginPath();
          ctx.moveTo(-len * 0.35, -w * 0.15);
          ctx.quadraticCurveTo(0, w * 0.2, len * 0.35, 0);
          ctx.strokeStyle = hiColor;
          ctx.lineWidth = Math.max(0.4, 0.7 * scale);
          ctx.stroke();

        } else if (p.type === 'chip') {
          // Faceted Wood Chip: irregular timber flake
          const s = p.size * scale;
          ctx.beginPath();
          for (let k = 0; k < p.vertices.length; k++) {
            const vx = p.vertices[k][0] * s;
            const vy = p.vertices[k][1] * s;
            if (k === 0) ctx.moveTo(vx, vy);
            else ctx.lineTo(vx, vy);
          }
          ctx.closePath();
          ctx.fillStyle = fillColor;
          ctx.fill();

          ctx.strokeStyle = edgeColor;
          ctx.lineWidth = Math.max(0.35, 0.55 * scale);
          ctx.stroke();

        } else if (p.type === 'splinter') {
          // Slender Teak Fiber / Splinter
          const len = p.size * scale * 3.4;
          const w = Math.max(0.65, p.size * scale * 0.35);

          ctx.beginPath();
          ctx.moveTo(-len / 2, 0);
          ctx.lineTo(-len * 0.15, -w);
          ctx.lineTo(len * 0.3, -w * 0.6);
          ctx.lineTo(len / 2, 0);
          ctx.lineTo(len * 0.25, w * 0.6);
          ctx.lineTo(-len * 0.1, w);
          ctx.closePath();
          ctx.fillStyle = fillColor;
          ctx.fill();

        } else {
          // Ambient Golden Wood Mote
          const r = Math.max(0.65, p.size * scale * 0.75);
          ctx.beginPath();
          ctx.arc(0, 0, r, 0, Math.PI * 2);
          ctx.fillStyle = hiColor;
          if (isDark) {
            ctx.shadowColor = 'rgba(230, 180, 90, 0.7)';
            ctx.shadowBlur = 5 * scale;
          }
          ctx.fill();
        }

        ctx.restore();
      }
    }

    if (!isPaused) {
      animFrameId = requestAnimationFrame(render);
    }
  }

  let isPaused = false;
  let animFrameId = requestAnimationFrame(render);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      isPaused = true;
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
        animFrameId = null;
      }
    } else {
      if (isPaused) {
        isPaused = false;
        animFrameId = requestAnimationFrame(render);
      }
    }
  });
}

function init3DCardTilt() {
  function attachTiltToElements() {
    const tiltElements = document.querySelectorAll('.card-3d-tilt');
    tiltElements.forEach(el => {
      if (el.dataset.tiltInitialized) return;
      el.dataset.tiltInitialized = 'true';

      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -((y - centerY) / centerY) * 7;
        const rotateY = ((x - centerX) / centerX) * 7;

        el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
        el.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
        el.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  attachTiltToElements();
  window.refresh3DTilt = attachTiltToElements;
}

function init3DMaterialCube() {
  const cube = document.getElementById('material-3d-cube');
  const btnWood = document.getElementById('cube-btn-wood');
  const btnBoard = document.getElementById('cube-btn-board');
  const btnWarranty = document.getElementById('cube-btn-warranty');

  if (!cube) return;

  let currentRotX = -10;
  let currentRotY = 15;
  let isDragging = false;
  let startX = 0;
  let startY = 0;

  function updateCubeTransform(smooth = true) {
    if (smooth) {
      cube.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    } else {
      cube.style.transition = 'none';
    }
    cube.style.transform = `rotateX(${currentRotX}deg) rotateY(${currentRotY}deg)`;
  }

  updateCubeTransform();

  if (btnWood) {
    btnWood.addEventListener('click', () => {
      currentRotX = -8;
      currentRotY = 0;
      updateCubeTransform(true);
    });
  }
  if (btnBoard) {
    btnBoard.addEventListener('click', () => {
      currentRotX = -8;
      currentRotY = 180;
      updateCubeTransform(true);
    });
  }
  if (btnWarranty) {
    btnWarranty.addEventListener('click', () => {
      currentRotX = -8;
      currentRotY = -90;
      updateCubeTransform(true);
    });
  }

  const container = cube.parentElement;
  if (!container) return;

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    currentRotY += deltaX * 0.4;
    currentRotX -= deltaY * 0.4;
    startX = e.clientX;
    startY = e.clientY;
    updateCubeTransform(false);
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      updateCubeTransform(true);
    }
  });

  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;
    currentRotY += deltaX * 0.5;
    currentRotX -= deltaY * 0.5;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    updateCubeTransform(false);
  }, { passive: true });

  window.addEventListener('touchend', () => {
    if (isDragging) {
      isDragging = false;
      updateCubeTransform(true);
    }
  });
}

// ==========================================================================
// 1. HERO PARALLAX & FLOATING BADGE TILT
// ==========================================================================
function initHeroParallax() {
  const heroContainer = document.getElementById('hero-showcase-container');
  const badges = document.querySelectorAll('.hero-floating-badge');

  if (!heroContainer) return;

  heroContainer.addEventListener('mousemove', (e) => {
    const rect = heroContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const moveX = (x - centerX) / 22;
    const moveY = (y - centerY) / 22;

    badges.forEach((badge, index) => {
      const multiplier = (index + 1) * 0.75;
      badge.style.transform = `translate(${moveX * multiplier}px, ${moveY * multiplier}px)`;
    });
  });

  heroContainer.addEventListener('mouseleave', () => {
    badges.forEach((badge) => {
      badge.style.transform = 'translate(0px, 0px)';
    });
  });
}

function initHeroCarousel() {
  const heroImg = document.getElementById('hero-main-img');
  const heroBadgeTag = document.getElementById('hero-slide-tag');
  const heroBadgeTitle = document.getElementById('hero-slide-title');
  const heroBadgeSpecs = document.getElementById('hero-slide-specs');
  const indicatorsContainer = document.getElementById('hero-indicators');

  if (!heroImg || !indicatorsContainer) return;

  indicatorsContainer.innerHTML = HERO_SLIDES.map((slide, idx) => `
    <button 
      class="hero-indicator-btn flex-shrink-0 whitespace-nowrap px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-semibold tracking-wide transition-all duration-300 ${idx === 0 ? 'bg-[#0D0C0B] text-white shadow-lg' : 'bg-white/80 text-[#141210] hover:bg-white'}"
      data-slide="${idx}"
      onclick="setHeroSlide(${idx})"
    >
      ${slide.tag}
    </button>
  `).join('');

  if (heroSlideTimer) clearInterval(heroSlideTimer);
  heroSlideTimer = setInterval(() => {
    setHeroSlide((currentHeroSlideIndex + 1) % HERO_SLIDES.length);
  }, 6500);
}

window.setHeroSlide = function(index) {
  currentHeroSlideIndex = index;
  const slide = HERO_SLIDES[index];
  const heroImg = document.getElementById('hero-main-img');
  const heroBadgeTag = document.getElementById('hero-slide-tag');
  const heroBadgeTitle = document.getElementById('hero-slide-title');
  const heroBadgeSpecs = document.getElementById('hero-slide-specs');
  const indicatorBtns = document.querySelectorAll('.hero-indicator-btn');

  if (!heroImg) return;

  heroImg.style.opacity = '0.3';
  heroImg.style.transform = 'scale(0.97)';

  setTimeout(() => {
    heroImg.src = slide.image;
    if (heroBadgeTag) heroBadgeTag.textContent = slide.tag;
    if (heroBadgeTitle) heroBadgeTitle.textContent = slide.title;
    if (heroBadgeSpecs) heroBadgeSpecs.textContent = slide.specs;

    heroImg.style.opacity = '1';
    heroImg.style.transform = 'scale(1)';
  }, 240);

  indicatorBtns.forEach((btn, idx) => {
    if (idx === index) {
      btn.className = 'hero-indicator-btn px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 bg-[#0D0C0B] text-white shadow-lg';
    } else {
      btn.className = 'hero-indicator-btn px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 bg-white/80 text-[#141210] hover:bg-white';
    }
  });
};

// ==========================================================================
// 2. ULTRA-MODERN BENTO GALLERY (Configured for Local Homeify Assets)
// ==========================================================================
function renderBentoGallery(filterCategory) {
  const gridContainer = document.getElementById('bento-grid-container');
  if (!gridContainer) return;

  const filtered = filterCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filterCategory);

  gridContainer.innerHTML = '';

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="col-span-12 py-16 px-6 text-center rounded-3xl bg-stone-50 border border-stone-200">
        <i class="fa-solid fa-compass-drafting text-4xl text-teak mb-4"></i>
        <h3 class="font-heading text-2xl font-bold text-[#0D0C0B]">Custom Made-To-Order Projects</h3>
        <p class="text-sm text-stone-600 max-w-md mx-auto mt-2 font-sans">We build custom pieces tailored to your exact floor plan and interior specifications at our Erattupetta workshop.</p>
        <a href="https://wa.me/919778446620?text=Hello%20Homeify!%20I%20want%20to%20discuss%20a%20custom%20order." target="_blank" rel="noopener" class="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-[#25D366] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-md hover:bg-emerald-600 transition-colors">
          <i class="fa-brands fa-whatsapp text-base"></i> Chat on WhatsApp (97784 46620)
        </a>
      </div>
    `;
    return;
  }

  filtered.forEach((product, index) => {
    let spanClasses = 'col-span-12 sm:col-span-6 lg:col-span-4';
    let isLarge = false;

    // Bento layout: Highlighted featured items receive prominent architectural spans
    const customHighlights = JSON.parse(localStorage.getItem('homeify_highlighted_bento_ids') || 'null');
    if (customHighlights !== null) {
      if (customHighlights.includes(product.id)) {
        spanClasses = 'col-span-12 md:col-span-12 lg:col-span-8';
        isLarge = true;
      }
    } else {
      if (filterCategory === 'all') {
        if (index === 0 || index === 3) {
          spanClasses = 'col-span-12 md:col-span-12 lg:col-span-8';
          isLarge = true;
        }
      } else if (filtered.length >= 3 && index === 0) {
        spanClasses = 'col-span-12 md:col-span-12 lg:col-span-8';
        isLarge = true;
      }
    }

    const card = document.createElement('div');
    card.className = `${spanClasses} bento-card card-3d-tilt depth-3d-surface bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm transition-all duration-400 flex flex-col group cursor-pointer preserve-3d`;
    card.setAttribute('data-id', product.id);

    const materialBadgeBg = product.materialCategory === 'natural-wood' 
      ? 'bg-[#2C4A38] text-white' 
      : product.materialCategory === 'particle-board' 
        ? 'bg-[#9E6738] text-white' 
        : 'bg-[#0D0C0B] text-[#D4AF37]';

    const materialLabel = product.materialCategory === 'natural-wood'
      ? '🌳 100% Pure Natural Wood'
      : product.materialCategory === 'particle-board'
        ? '⚙️ Particle Board E1'
        : '✨ Hybrid Architecture';

    const savingsPercent = calculateSavingsPercent(product.mrp, product.factoryPrice);

    card.innerHTML = `
      <!-- 3D Cursor-driven Specular Glare -->
      <div class="card-sheen"></div>

      <!-- Product Photo Thumbnail Frame (Full Size Edge-to-Edge) -->
      <div class="relative overflow-hidden ${isLarge ? 'h-88 sm:h-[440px] md:h-[500px]' : 'h-72 sm:h-84 md:h-96'} bg-stone-900 border-b border-stone-100 dark:border-white/10 group/thumb">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          loading="lazy"
          class="card-img w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
          onerror="this.src='assets/slated-coffee-table.jpg'"
        />
        
        <!-- Top Badges with 3D Z-Lift -->
        <div class="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 right-2.5 sm:right-4 flex items-center justify-between gap-1.5 sm:gap-2 pointer-events-none z-10 float-3d-element">
          <span class="px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full ${materialBadgeBg} shadow-sm backdrop-blur-md">
            ${materialLabel}
          </span>
          <div class="flex items-center gap-1.5">
            <span class="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold rounded-full bg-[#D4AF37] text-[#0D0C0B] shadow-sm flex items-center gap-1 font-mono">
              <svg class="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              5-Yr Warranty
            </span>
            <button 
              type="button" 
              onclick="shareProductLink('${product.id}', event);" 
              class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 hover:bg-white text-stone-800 shadow-md flex items-center justify-center transition-all hover:scale-110 pointer-events-auto border border-black/5 cursor-pointer" 
              title="Share ${product.name}" 
              aria-label="Share ${product.name}"
            >
              <i class="fa-solid fa-share-nodes text-[11px] sm:text-xs text-[#9E6738]"></i>
            </button>
          </div>
        </div>

        <!-- Thumbnail Zoom / Quick View Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#0D0C0B]/90 via-[#0D0C0B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-5 z-10">
          <button class="w-full py-2.5 sm:py-3 px-4 bg-white text-[#0D0C0B] rounded-2xl font-bold text-xs uppercase tracking-wider shadow-xl backdrop-blur-sm flex items-center justify-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 font-mono btn-3d">
            <svg class="w-4 h-4 text-[#9E6738]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            Quick View Specs & Inquire
          </button>
        </div>
      </div>

      <!-- Card Details & Pricing with 3D Z-Depth -->
      <div class="p-4 sm:p-6 md:p-7 flex-1 flex flex-col justify-between float-3d-element">
        <div>
          <div class="flex items-center justify-between text-xs text-[#9E6738] font-bold uppercase tracking-widest mb-1.5 font-mono">
            <span>${product.categoryName}</span>
            <span class="text-stone-400 font-sans font-medium text-[11px]">${product.badge}</span>
          </div>
          <h3 class="font-heading text-lg sm:text-xl font-bold text-[#141210] mb-2 leading-snug group-hover:text-[#9E6738] transition-colors">
            ${product.name}
          </h3>
          <p class="text-xs text-[#665F57] line-clamp-2 mb-4 leading-relaxed font-sans">
            ${product.description}
          </p>
        </div>

        <!-- Pricing with MRP and Direct Factory Price -->
        <div class="pt-4 border-t border-stone-200/90 flex flex-col gap-2.5">
          <div class="flex items-baseline justify-between">
            <div>
              <span class="block text-[10px] text-stone-400 font-bold uppercase tracking-wider font-mono">Showroom MRP</span>
              <span class="text-xs sm:text-sm text-stone-400 line-through font-mono font-medium">${product.mrp}</span>
            </div>
            <div class="text-right">
              <span class="block text-[10px] text-teak font-bold uppercase tracking-wider font-mono">Direct Workshop Price</span>
              <span class="text-base sm:text-lg font-black text-[#2C4A38] font-mono">${product.factoryPrice}</span>
            </div>
          </div>

          <div class="flex items-center justify-between pt-1">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold font-mono bg-emerald-50 text-emerald-800 border border-emerald-200/90">
              Save ${savingsPercent}% Direct
            </span>
            <div class="flex items-center gap-1.5">
              <button 
                type="button" 
                onclick="shareProductLink('${product.id}', event);" 
                class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-stone-100 hover:bg-teak hover:text-white text-stone-600 transition-colors border border-stone-200/90 shadow-sm cursor-pointer" 
                title="Share ${product.name}"
                aria-label="Share ${product.name}"
              >
                <i class="fa-solid fa-share-nodes text-xs"></i>
              </button>
              <a 
                href="https://wa.me/${WORKSHOP_WHATSAPP}?text=${encodeURIComponent(`Hello Homeify Furniture (M E S Junction, Erattupetta)! I am interested in ${product.name} (Factory Price: ${product.factoryPrice}, MRP: ${product.mrp}).`)}" 
                target="_blank" 
                rel="noopener"
                onclick="event.stopPropagation();"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/10 text-[#075E54] hover:bg-[#25D366] hover:text-white transition-all text-[11px] font-bold font-mono border border-[#25D366]/20 btn-3d"
              >
                <i class="fa-brands fa-whatsapp text-xs"></i>
                <span>Inquire</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      openProductModal(product);
    });

    gridContainer.appendChild(card);
  });

  if (typeof window.refresh3DTilt === 'function') {
    window.refresh3DTilt();
  }
}

function initFilterButtons() {
  const filterBtns = document.querySelectorAll('.bento-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'bg-[#0D0C0B]', 'text-white'));
      btn.classList.add('active', 'bg-[#0D0C0B]', 'text-white');
      
      const category = btn.getAttribute('data-filter');
      currentFilter = category;
      
      const grid = document.getElementById('bento-grid-container');
      if (grid) {
        grid.style.opacity = '0.3';
        grid.style.transform = 'translateY(12px)';
        setTimeout(() => {
          renderBentoGallery(category);
          grid.style.opacity = '1';
          grid.style.transform = 'translateY(0)';
        }, 180);
      }
    });
  });
}

// ==========================================================================
// 3. QUICK-VIEW LIGHTBOX MODAL WITH LOCAL POSTER VIEW
// ==========================================================================
function openProductModal(product) {
  selectedProductForModal = product;
  const modal = document.getElementById('product-lightbox-modal');
  if (!modal) return;

  // Update browser URL with canonical product link without reloading page
  try {
    const url = new URL(window.location.href);
    url.searchParams.set('product', product.id);
    window.history.replaceState({ productId: product.id }, '', url.toString());
    document.title = `${product.name} | Homeify Furniture Erattupetta`;
  } catch (e) {}

  const modalImg = document.getElementById('modal-product-img');
  if (modalImg) {
    modalImg.src = product.image;
    modalImg.className = 'w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] object-cover object-center transition-transform duration-500 hover:scale-105';
  }

  document.getElementById('modal-product-category').textContent = product.categoryName;
  document.getElementById('modal-product-title').textContent = product.name;
  document.getElementById('modal-product-desc').textContent = product.description;
  document.getElementById('modal-product-material').textContent = product.materialType;
  document.getElementById('modal-product-dimensions').textContent = product.dimensions;
  document.getElementById('modal-product-finish').textContent = product.finish;
  document.getElementById('modal-product-leadtime').textContent = product.leadTime;
  
  const modalMrp = document.getElementById('modal-product-mrp');
  if (modalMrp) modalMrp.textContent = product.mrp;

  const modalPrice = document.getElementById('modal-product-price');
  if (modalPrice) modalPrice.textContent = product.factoryPrice;

  const modalSavings = document.getElementById('modal-product-savings');
  if (modalSavings) {
    const savings = calculateSavingsPercent(product.mrp, product.factoryPrice);
    modalSavings.textContent = `Save ${savings}% Direct from Erattupetta Factory`;
  }

  document.getElementById('modal-product-warranty').textContent = product.warranty;

  const matBadge = document.getElementById('modal-material-badge');
  if (matBadge) {
    if (product.materialCategory === 'natural-wood') {
      matBadge.textContent = '100% Seasoned Natural Wood';
      matBadge.className = 'px-3 py-1 rounded-full text-xs font-semibold bg-[#2C4A38] text-white font-mono';
    } else if (product.materialCategory === 'particle-board') {
      matBadge.textContent = 'High-Grade Engineered Particle Board';
      matBadge.className = 'px-3 py-1 rounded-full text-xs font-semibold bg-[#9E6738] text-white font-mono';
    } else {
      matBadge.textContent = 'Bespoke Hybrid Construction';
      matBadge.className = 'px-3 py-1 rounded-full text-xs font-semibold bg-[#0D0C0B] text-[#D4AF37] font-mono';
    }
  }

  const highlightsContainer = document.getElementById('modal-highlights-container');
  const hideHighlights = localStorage.getItem('homeify_hide_collection_highlights') === 'true';
  const hasFeatures = Array.isArray(product.features) && product.features.length > 0;

  if (highlightsContainer) {
    if (hideHighlights || !hasFeatures) {
      highlightsContainer.classList.add('hidden');
    } else {
      highlightsContainer.classList.remove('hidden');
    }
  }

  const featuresList = document.getElementById('modal-product-features');
  if (featuresList) {
    if (hasFeatures && !hideHighlights) {
      featuresList.innerHTML = product.features.map(f => `
        <li class="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A443E]">
          <svg class="w-4 h-4 text-[#2C4A38] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
          <span>${f}</span>
        </li>
      `).join('');
    } else {
      featuresList.innerHTML = '';
    }
  }

  const waBtn = document.getElementById('modal-whatsapp-btn');
  if (waBtn) {
    const directUrl = getCanonicalProductShareUrl(product.id);
    const message = encodeURIComponent(
      `Hello Homeify Furniture (M E S Junction, Erattupetta)! 🌳\n\nI am interested in customizing:\n*${product.name}*\n• Factory Offer Price: ${product.factoryPrice} (Showroom MRP: ${product.mrp})\n• Material: ${product.materialType}\n• Category: ${product.categoryName}\n• 5-Year Guaranteed Warranty Included\n• Direct Link: ${directUrl}\n\nPlease share availability, finishes, and delivery timeline to my address.`
    );
    waBtn.href = `https://wa.me/${WORKSHOP_WHATSAPP}?text=${message}`;
  }

  // Populate Modal Thumbnail Strip
  const strip = document.getElementById('modal-thumbnail-strip');
  if (strip) {
    strip.innerHTML = '';
    PRODUCTS.forEach(p => {
      const thumbBtn = document.createElement('button');
      thumbBtn.type = 'button';
      const isActive = p.id === product.id;
      thumbBtn.className = `flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 transition-all p-1 flex items-center justify-center cursor-pointer ${isActive ? 'border-teak scale-105 shadow-md bg-stone-900' : 'border-stone-300 hover:border-teak opacity-70 hover:opacity-100 bg-stone-800'}`;
      thumbBtn.title = p.name;
      thumbBtn.innerHTML = `
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-contain" />
      `;
      thumbBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openProductModal(p);
      });
      strip.appendChild(thumbBtn);
    });
  }

  modal.classList.remove('modal-hidden');
  modal.classList.add('modal-visible');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('product-lightbox-modal');
  if (!modal) return;
  modal.classList.add('modal-hidden');
  modal.classList.remove('modal-visible');
  document.body.style.overflow = 'auto';

  // Restore clean URL without product parameter
  try {
    const url = new URL(window.location.href);
    url.searchParams.delete('product');
    const cleanUrl = url.pathname + (url.search ? url.search : '') + (url.hash ? url.hash : '');
    window.history.replaceState({}, '', cleanUrl);
    document.title = 'Homeify Furniture | Erattupetta, Kottayam | Direct Kerala Woodwork Workshop';
  } catch (e) {}
}

function initModalListeners() {
  const closeBtn = document.getElementById('modal-close-btn');
  const modalOverlay = document.getElementById('product-lightbox-modal');
  const quoteActionBtn = document.getElementById('modal-add-to-quote-btn');
  const shareModalOverlay = document.getElementById('product-share-modal');

  if (closeBtn) closeBtn.addEventListener('click', closeProductModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProductModal();
    });
  }

  if (shareModalOverlay) {
    shareModalOverlay.addEventListener('click', (e) => {
      if (e.target === shareModalOverlay) closeShareModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeShareModal();
      closeProductModal();
      closeCustomizer();
    }
  });

  // Browser Back/Forward navigation listener for deep-linked modals
  window.addEventListener('popstate', () => {
    const params = new URLSearchParams(window.location.search);
    const prodId = params.get('product');
    if (prodId) {
      const p = PRODUCTS.find(item => item.id === prodId);
      if (p) openProductModal(p);
    } else {
      closeProductModal();
      closeShareModal();
    }
  });

  if (quoteActionBtn) {
    quoteActionBtn.addEventListener('click', () => {
      if (selectedProductForModal) {
        selectConfiguratorItemFromProduct(selectedProductForModal);
        closeProductModal();
        const configSection = document.getElementById('custom-quote');
        if (configSection) {
          configSection.scrollIntoView({ behavior: 'smooth' });
          showToast(`Added "${selectedProductForModal.name}" to your Custom Estimate!`);
        }
      }
    });
  }
}

// ==========================================================================
// 3b. DIRECT PRODUCT LINK SHARING & DEEP-LINKING ENGINE
// ==========================================================================
let currentShareProduct = null;
let currentShareUrl = '';

function getCanonicalProductShareUrl(productId) {
  const origin = (window.location.origin && window.location.origin !== 'null') 
    ? window.location.origin 
    : 'https://homeifyfurniture.in';
  const pathname = window.location.pathname || '/';
  return `${origin}${pathname}?product=${encodeURIComponent(productId)}`;
}

// Universal product share trigger (used across cards, modals, and overlays)
window.shareProductLink = async function(productId, event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }

  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const shareUrl = getCanonicalProductShareUrl(product.id);
  const shareTitle = `${product.name} | Homeify Furniture Erattupetta`;
  const shareText = `Check out "${product.name}" at Homeify Furniture!\n• Direct Factory Price: ${product.factoryPrice} (Showroom MRP: ${product.mrp})\n• Material: ${product.materialType}\n• 5-Year Full Warranty Handcrafted in Erattupetta Workshop\n\nView piece & photos here:`;

  // On touch / mobile devices, try native Web Share API first for instant WhatsApp/Instagram sharing
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isMobile && navigator.share && typeof navigator.share === 'function') {
    try {
      await navigator.share({
        title: shareTitle,
        text: `${shareText}\n${shareUrl}`,
        url: shareUrl
      });
      showToast(`Shared "${product.name}"!`);
      return;
    } catch (err) {
      if (err.name === 'AbortError') return; // User closed native sheet
      console.warn('Native share failed, opening share modal:', err);
    }
  }

  // Open the luxury product share modal
  openShareModal(product, shareUrl, shareText);
};

// Share current product in the lightbox modal
window.shareCurrentModalProduct = function(event) {
  if (selectedProductForModal) {
    shareProductLink(selectedProductForModal.id, event);
  }
};

window.openShareModal = function(product, shareUrl, shareText) {
  currentShareProduct = product;
  currentShareUrl = shareUrl;

  const modal = document.getElementById('product-share-modal');
  if (!modal) return;

  const imgEl = document.getElementById('share-modal-img');
  if (imgEl) imgEl.src = product.image;

  const catEl = document.getElementById('share-modal-category');
  if (catEl) catEl.textContent = product.categoryName;

  const titleEl = document.getElementById('share-modal-title');
  if (titleEl) titleEl.textContent = product.name;

  const priceEl = document.getElementById('share-modal-price');
  if (priceEl) priceEl.textContent = product.factoryPrice;

  const mrpEl = document.getElementById('share-modal-mrp');
  if (mrpEl) mrpEl.textContent = product.mrp;

  const inputEl = document.getElementById('share-modal-link-input');
  if (inputEl) inputEl.value = shareUrl;

  const copyBtnText = document.getElementById('share-modal-copy-btn-text');
  if (copyBtnText) copyBtnText.textContent = 'Copy';

  // Social Links
  const waBtn = document.getElementById('share-social-whatsapp');
  if (waBtn) {
    const waText = encodeURIComponent(`${shareText}\n${shareUrl}`);
    waBtn.href = `https://wa.me/?text=${waText}`;
  }

  const fbBtn = document.getElementById('share-social-facebook');
  if (fbBtn) {
    fbBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  }

  const twBtn = document.getElementById('share-social-twitter');
  if (twBtn) {
    twBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
  }

  const nativeContainer = document.getElementById('share-modal-native-container');
  if (nativeContainer) {
    if (navigator.share) {
      nativeContainer.classList.remove('hidden');
    } else {
      nativeContainer.classList.add('hidden');
    }
  }

  modal.classList.remove('modal-hidden');
  modal.classList.add('modal-visible');
};

window.closeShareModal = function() {
  const modal = document.getElementById('product-share-modal');
  if (!modal) return;
  modal.classList.add('modal-hidden');
  modal.classList.remove('modal-visible');
};

function copyTextToClipboard(text, onSuccess) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      if (onSuccess) onSuccess();
    }).catch(() => {
      fallbackCopyText(text, onSuccess);
    });
  } else {
    fallbackCopyText(text, onSuccess);
  }
}

function fallbackCopyText(text, onSuccess) {
  try {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    tempInput.style.position = 'fixed';
    tempInput.style.left = '-9999px';
    tempInput.style.top = '0';
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(tempInput);
    if (successful && onSuccess) onSuccess();
  } catch (err) {
    prompt('Copy direct product link:', text);
  }
}

window.copyShareModalLink = function() {
  if (!currentShareUrl) return;
  copyTextToClipboard(currentShareUrl, () => {
    const btnText = document.getElementById('share-modal-copy-btn-text');
    const copyBtn = document.getElementById('share-modal-copy-btn');
    if (btnText) btnText.textContent = 'Copied! ✓';
    if (copyBtn) {
      copyBtn.classList.remove('bg-[#0D0C0B]', 'hover:bg-teak');
      copyBtn.classList.add('bg-emerald-600');
    }
    setTimeout(() => {
      if (btnText) btnText.textContent = 'Copy';
      if (copyBtn) {
        copyBtn.classList.add('bg-[#0D0C0B]', 'hover:bg-teak');
        copyBtn.classList.remove('bg-emerald-600');
      }
    }, 2000);
    showToast(`🔗 Copied direct link to "${currentShareProduct ? currentShareProduct.name : 'product'}"!`);
  });
};

window.shareToInstagram = function() {
  if (!currentShareUrl) return;
  copyTextToClipboard(currentShareUrl, () => {
    showToast(`📸 Link copied! Open Instagram and paste in your Story or DM.`);
    setTimeout(() => {
      window.open('https://www.instagram.com/homeify.furniture/', '_blank', 'noopener');
    }, 500);
  });
};

window.triggerNativeShareFromModal = async function() {
  if (!currentShareProduct || !navigator.share) return;
  const shareTitle = `${currentShareProduct.name} | Homeify Furniture Erattupetta`;
  const shareText = `Check out "${currentShareProduct.name}" at Homeify Furniture - Direct Workshop Price: ${currentShareProduct.factoryPrice}:\n${currentShareUrl}`;
  try {
    await navigator.share({
      title: shareTitle,
      text: shareText,
      url: currentShareUrl
    });
    closeShareModal();
  } catch (e) {}
};

// Check incoming URL for product deep link (?product=item-id or #product=item-id)
function checkUrlForProductDeepLink() {
  try {
    let targetId = null;
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('product')) {
      targetId = urlParams.get('product');
    } else if (urlParams.has('p')) {
      targetId = urlParams.get('p');
    } else if (window.location.hash) {
      const cleanHash = window.location.hash.replace(/^#/, '');
      if (cleanHash.startsWith('product=')) {
        targetId = cleanHash.replace('product=', '');
      } else if (PRODUCTS.some(p => p.id === cleanHash)) {
        targetId = cleanHash;
      }
    }

    if (!targetId) return false;

    const matchedProduct = PRODUCTS.find(p => p.id === targetId || p.id === targetId.trim());
    if (matchedProduct) {
      const catalogEl = document.getElementById('catalog');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        openProductModal(matchedProduct);
      }, 350);
      return true;
    }
  } catch (err) {
    console.warn('Deep link lookup error:', err);
  }
  return false;
}

// ==========================================================================
// 4. INTERACTIVE MATERIAL COMPARATOR WITH METRIC BARS
// ==========================================================================
const MATERIAL_DATA = {
  naturalWood: {
    title: '100% Pure Natural Wood',
    tagline: 'Timeless Heirloom Durability & Artisanal Warmth',
    idealFor: 'Heritage Cots/Beds, Royal Dining Suites, Lounge Chairs, Architectural Fluted Panels',
    lifespan: '40 to 60+ Years (Generational Investment)',
    keralaClimate: 'Seasoned at M E S Junction workshop to 10-12% moisture equilibrium without chemical soaking.',
    repairability: '100% Re-sandable, re-polishable, and repairable at any point in its lifespan.',
    weight: 'Substantial, solid, and heavyweight with monolithic stability.',
    aesthetic: 'Authentic organic grains, natural knots, and rich patina that grows more beautiful with age.',
    warranty: '5-Year Manufacturing & Timber Seasoning Warranty',
    metrics: [
      { name: 'Lifespan & Heirloom Index', value: 98 },
      { name: 'Heavy Load Joint Stability', value: 96 },
      { name: 'Kerala Monsoon Moisture Calibration', value: 94 },
      { name: 'Restorability & Re-Polishing', value: 100 }
    ]
  },
  particleBoard: {
    title: 'High-Density Engineered Particle Board',
    tagline: 'Modern Precision Ergonomics & Budget-Optimized Agility',
    idealFor: 'Modular Office Workstations, Executive Storage, Sleek Wardrobes, Contemporary Partitions',
    lifespan: '12 to 18 Years with Proper Care',
    keralaClimate: 'Grade-E1 high-density moisture-resistant core with 2mm PVC hot-melt edge-banding sealed against humidity.',
    repairability: 'Replaceable modular panels; pre-finished surface requires no sanding or repolishing.',
    weight: 'Light-to-medium weight, enabling easy flat-pack modular reassembly.',
    aesthetic: 'Ultra-uniform, flawless matte/woodgrain textures, scratch & stain-resistant melamine.',
    warranty: '5-Year Edge-Banding & Hardware Delamination Warranty',
    metrics: [
      { name: 'Scratch & Stain Resistance', value: 95 },
      { name: 'Budget Optimization Index', value: 96 },
      { name: 'Modular Cable & Power Integration', value: 98 },
      { name: 'Hot-Melt Edge-Band Humidity Seal', value: 90 }
    ]
  }
};

function initMaterialComparator() {
  const btnWood = document.getElementById('tab-wood-btn');
  const btnBoard = document.getElementById('tab-board-btn');
  const btnSplit = document.getElementById('tab-split-btn');

  const viewSingle = document.getElementById('comparator-single-view');
  const viewSplit = document.getElementById('comparator-split-view');

  if (!btnWood || !btnBoard || !btnSplit) return;

  function setSingleTab(type) {
    btnWood.classList.remove('bg-[#0D0C0B]', 'text-white', 'shadow-md');
    btnBoard.classList.remove('bg-[#0D0C0B]', 'text-white', 'shadow-md');
    btnSplit.classList.remove('bg-[#0D0C0B]', 'text-white', 'shadow-md');

    if (type === 'wood') {
      btnWood.classList.add('bg-[#0D0C0B]', 'text-white', 'shadow-md');
      renderSingleMaterial('naturalWood');
    } else {
      btnBoard.classList.add('bg-[#0D0C0B]', 'text-white', 'shadow-md');
      renderSingleMaterial('particleBoard');
    }

    if (viewSingle) viewSingle.classList.remove('hidden');
    if (viewSplit) viewSplit.classList.add('hidden');
  }

  btnWood.addEventListener('click', () => setSingleTab('wood'));
  btnBoard.addEventListener('click', () => setSingleTab('board'));

  btnSplit.addEventListener('click', () => {
    btnWood.classList.remove('bg-[#0D0C0B]', 'text-white', 'shadow-md');
    btnBoard.classList.remove('bg-[#0D0C0B]', 'text-white', 'shadow-md');
    btnSplit.classList.add('bg-[#0D0C0B]', 'text-white', 'shadow-md');

    if (viewSingle) viewSingle.classList.add('hidden');
    if (viewSplit) viewSplit.classList.remove('hidden');
  });

  const spaceSelect = document.getElementById('quiz-space-select');
  const prioritySelect = document.getElementById('quiz-priority-select');

  function updateQuizRecommendation() {
    if (!spaceSelect || !prioritySelect) return;
    const space = spaceSelect.value;
    const priority = prioritySelect.value;
    const resultBox = document.getElementById('quiz-recommendation-result');
    if (!resultBox) return;

    if (space === 'office' || priority === 'budget' || priority === 'modular') {
      resultBox.innerHTML = `
        <div class="p-5 rounded-2xl bg-[#9E6738]/10 border border-[#9E6738]/30 flex items-start gap-4">
          <div class="w-12 h-12 rounded-2xl bg-[#9E6738] text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">⚙️</div>
          <div>
            <h5 class="font-heading font-bold text-[#141210] text-base">Recommended: Premium Engineered Particle Board</h5>
            <p class="text-xs text-[#665F57] mt-1">Ideal for high-efficiency workstations, executive desks, and modular wardrobes where scratch-resistance, cable conduits, and budget agility matter most.</p>
            <span class="inline-block mt-2.5 text-xs font-bold text-[#D4AF37] bg-[#0D0C0B] px-3 py-1 rounded-full font-mono">Covered by 5-Year Homeify Warranty</span>
          </div>
        </div>
      `;
    } else {
      resultBox.innerHTML = `
        <div class="p-5 rounded-2xl bg-[#2C4A38]/10 border border-[#2C4A38]/30 flex items-start gap-4">
          <div class="w-12 h-12 rounded-2xl bg-[#2C4A38] text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">🌳</div>
          <div>
            <h5 class="font-heading font-bold text-[#141210] text-base">Recommended: 100% Seasoned Natural Teak Wood</h5>
            <p class="text-xs text-[#665F57] mt-1 font-sans">Perfect for master bedroom cots, royal dining sets, and statement lounge pieces. Delivers generational heirloom life, rich grain character, and superior resistance to heavy loads.</p>
            <span class="inline-block mt-2.5 text-xs font-bold text-[#D4AF37] bg-[#0D0C0B] px-3 py-1 rounded-full font-mono">Covered by 5-Year Homeify Warranty</span>
          </div>
        </div>
      `;
    }
  }

  if (spaceSelect) spaceSelect.addEventListener('change', updateQuizRecommendation);
  if (prioritySelect) prioritySelect.addEventListener('change', updateQuizRecommendation);
}

function renderSingleMaterial(key) {
  const data = MATERIAL_DATA[key];
  const container = document.getElementById('comparator-single-view');
  if (!container) return;

  const isWood = key === 'naturalWood';
  const badgeEmoji = isWood ? '🌳' : '⚙️';

  const metricsHtml = data.metrics.map(m => `
    <div class="space-y-1">
      <div class="flex justify-between text-xs font-semibold text-stone-700">
        <span>${m.name}</span>
        <span class="font-mono text-[#9E6738] font-bold">${m.value}%</span>
      </div>
      <div class="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
        <div class="h-full bg-gradient-to-r ${isWood ? 'from-[#2C4A38] to-[#9E6738]' : 'from-[#9E6738] to-[#D4AF37]'} rounded-full transition-all duration-1000" style="width: ${m.value}%"></div>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="p-4 sm:p-8 md:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xl flex flex-col md:flex-row gap-6 md:gap-8 items-center">
      <div class="w-full md:w-5/12">
        <div class="relative rounded-2xl overflow-hidden shadow-lg h-72 md:h-80 bg-stone-100">
          <img 
            src="${isWood ? 'assets/slated-coffee-table.jpg' : 'assets/teakwood-glass-coffee-table.jpg'}" 
            alt="${data.title}" 
            class="w-full h-full object-cover object-top"
          />
          <div class="absolute top-4 left-4">
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#0D0C0B] text-[#D4AF37] shadow-md flex items-center gap-1.5 font-mono">
              <span>${badgeEmoji}</span> ${data.title}
            </span>
          </div>
        </div>
      </div>
      <div class="w-full md:w-7/12 space-y-4">
        <div>
          <span class="text-xs font-bold uppercase tracking-widest text-[#9E6738] font-mono">Erattupetta Workshop Standards</span>
          <h4 class="font-heading text-2xl md:text-3xl font-bold text-[#141210] mt-1">${data.title}</h4>
          <p class="text-xs text-[#665F57] italic mt-0.5">${data.tagline}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div class="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80">
            <span class="text-[11px] font-bold text-[#9E6738] uppercase font-mono block">Estimated Lifespan</span>
            <span class="text-xs font-bold text-[#141210]">${data.lifespan}</span>
          </div>
          <div class="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80">
            <span class="text-[11px] font-bold text-[#9E6738] uppercase font-mono block">Best Application</span>
            <span class="text-xs font-bold text-[#141210]">${data.idealFor}</span>
          </div>
        </div>

        <div class="space-y-2.5 pt-2 font-sans">
          ${metricsHtml}
        </div>

        <div class="p-3.5 rounded-2xl bg-[#FAF8F5] border border-stone-200/80">
          <span class="text-[11px] font-bold text-[#2C4A38] uppercase font-mono block">Kerala Monsoon Resilience Process</span>
          <p class="text-xs text-[#4A443E] mt-1 leading-relaxed font-sans">${data.keralaClimate}</p>
        </div>
      </div>
    </div>
  `;
}

// ==========================================================================
// 5. ANIMATED NUMBER COUNTERS
// ==========================================================================
function initAnimatedCounters() {
  const counterElements = document.querySelectorAll('.stat-counter');
  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        counterElements.forEach(el => {
          const target = parseInt(el.getAttribute('data-target') || '0', 10);
          const duration = 2000;
          const stepTime = 30;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target + (el.getAttribute('data-suffix') || '');
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current) + (el.getAttribute('data-suffix') || '');
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('warranty-stats-section');
  if (statsSection) {
    observer.observe(statsSection);
  }
}

// ==========================================================================
// 6. CUSTOM QUOTE CONFIGURATOR WITH HOTLINE: 9778446620
// ==========================================================================
let quoteState = {
  spaceType: 'Home',
  items: ['Sofa Set', 'Solid Wood Cot/Bed'],
  material: '100% Pure Natural Wood',
  roomScale: 2,
  clientName: '',
  clientPhone: '',
  clientLocation: 'M E S Junction, Erattupetta'
};

function initQuoteConfigurator() {
  const spaceBtns = document.querySelectorAll('.quote-space-btn');
  spaceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      spaceBtns.forEach(b => b.classList.remove('bg-[#0D0C0B]', 'text-white'));
      btn.classList.add('bg-[#0D0C0B]', 'text-white');
      quoteState.spaceType = btn.getAttribute('data-space');
      updateQuoteEstimate();
    });
  });

  const itemPills = document.querySelectorAll('.quote-item-pill');
  itemPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const item = pill.getAttribute('data-item');
      if (quoteState.items.includes(item)) {
        quoteState.items = quoteState.items.filter(i => i !== item);
        pill.classList.remove('bg-[#2C4A38]', 'text-white', 'border-[#2C4A38]');
        pill.classList.add('bg-white', 'text-[#141210]', 'border-stone-200');
      } else {
        quoteState.items.push(item);
        pill.classList.add('bg-[#2C4A38]', 'text-white', 'border-[#2C4A38]');
        pill.classList.remove('bg-white', 'text-[#141210]', 'border-stone-200');
      }
      updateQuoteEstimate();
    });
  });

  const materialRadios = document.querySelectorAll('.quote-material-btn');
  materialRadios.forEach(btn => {
    btn.addEventListener('click', () => {
      materialRadios.forEach(b => b.classList.remove('border-[#9E6738]', 'bg-[#9E6738]/10'));
      btn.classList.add('border-[#9E6738]', 'bg-[#9E6738]/10');
      quoteState.material = btn.getAttribute('data-material');
      updateQuoteEstimate();
    });
  });

  const slider = document.getElementById('quote-scale-slider');
  const scaleLabel = document.getElementById('quote-scale-label');
  if (slider && scaleLabel) {
    slider.addEventListener('input', (e) => {
      quoteState.roomScale = parseInt(e.target.value, 10);
      const labels = ['Compact Apartment / Single Room', 'Standard Residence / Floor', 'Grand Villa / Corporate Floor'];
      scaleLabel.textContent = labels[quoteState.roomScale - 1] || 'Standard';
      updateQuoteEstimate();
    });
  }

  const submitBtn = document.getElementById('quote-whatsapp-submit');
  if (submitBtn) {
    submitBtn.addEventListener('click', handleWhatsAppQuoteSubmit);
  }

  updateQuoteEstimate();
}

function selectConfiguratorItemFromProduct(product) {
  const itemPills = document.querySelectorAll('.quote-item-pill');
  let matchItem = 'Custom Woodwork';

  if (product.category === 'living') {
    matchItem = product.name.toLowerCase().includes('table') ? 'Frosted Glass Coffee Table' : 'Sofa Set';
  } else if (product.category === 'bedroom-dining') {
    matchItem = product.name.toLowerCase().includes('cot') || product.name.toLowerCase().includes('bed') 
      ? 'Solid Wood Cot/Bed' 
      : 'Dining Table & Cane Chairs';
  } else if (product.category === 'custom-woodwork') {
    matchItem = 'Custom Woodwork';
  }

  if (!quoteState.items.includes(matchItem)) {
    quoteState.items.push(matchItem);
  }

  itemPills.forEach(pill => {
    const item = pill.getAttribute('data-item');
    if (quoteState.items.includes(item)) {
      pill.classList.add('bg-[#2C4A38]', 'text-white', 'border-[#2C4A38]');
      pill.classList.remove('bg-white', 'text-[#141210]', 'border-stone-200');
    }
  });

  updateQuoteEstimate();
}

function updateQuoteEstimate() {
  const estRangeEl = document.getElementById('quote-est-range');
  const estDaysEl = document.getElementById('quote-est-days');
  const estItemsCountEl = document.getElementById('quote-selected-count');

  if (!estRangeEl || !estDaysEl) return;

  const itemCount = Math.max(1, quoteState.items.length);
  if (estItemsCountEl) estItemsCountEl.textContent = `${itemCount} Item(s) Selected`;

  let basePerItem = 25000;
  if (quoteState.material.includes('Natural Wood')) basePerItem = 38000;
  if (quoteState.material.includes('Particle Board')) basePerItem = 22000;
  if (quoteState.material.includes('Hybrid')) basePerItem = 30000;

  const scaleMultiplier = quoteState.roomScale === 1 ? 0.85 : quoteState.roomScale === 2 ? 1.0 : 1.45;
  const minEst = Math.round((basePerItem * itemCount * scaleMultiplier * 0.9) / 1000) * 1000;
  const maxEst = Math.round((basePerItem * itemCount * scaleMultiplier * 1.25) / 1000) * 1000;

  estRangeEl.textContent = `₹${minEst.toLocaleString('en-IN')} – ₹${maxEst.toLocaleString('en-IN')}`;
  
  const leadDays = 7 + (itemCount * 2) + (quoteState.roomScale * 2);
  estDaysEl.textContent = `${leadDays} – ${leadDays + 5} Working Days`;
}

function handleWhatsAppQuoteSubmit(e) {
  if (e) e.preventDefault();

  const nameInput = document.getElementById('quote-client-name');
  const phoneInput = document.getElementById('quote-client-phone');
  const locInput = document.getElementById('quote-client-location');
  const notesInput = document.getElementById('quote-client-notes');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const location = locInput ? locInput.value.trim() || 'M E S Junction, Erattupetta / Kerala' : 'M E S Junction, Erattupetta';
  const notes = notesInput ? notesInput.value.trim() : '';

  if (quoteState.items.length === 0) {
    showToast('Please select at least one furniture item.');
    return;
  }

  if (typeof confetti === 'function') {
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#9E6738', '#D4AF37', '#2C4A38', '#0D0C0B']
    });
  }

  const itemsString = quoteState.items.join(', ');
  const scaleText = quoteState.roomScale === 1 ? 'Compact' : quoteState.roomScale === 2 ? 'Standard' : 'Luxury Villa / Large Floor';

  const messageText = 
    `*🌳 NEW CUSTOM FURNITURE INQUIRY - HOMEIFY FURNITURE, M E S JUNCTION, ERATTUPETTA*\n\n` +
    `👤 *Client Name:* ${name || 'Prospective Customer'}\n` +
    `📍 *Location:* ${location}\n` +
    `📞 *Client Phone:* ${phone || 'Via WhatsApp'}\n\n` +
    `🏢 *Space Type:* ${quoteState.spaceType}\n` +
    `🪑 *Furniture Needed:* ${itemsString}\n` +
    `🪵 *Material Preference:* ${quoteState.material}\n` +
    `📐 *Scope / Scale:* ${scaleText}\n` +
    `🛡️ *Warranty Required:* 5-Year Manufacturing Guarantee\n` +
    (notes ? `📝 *Custom Notes:* ${notes}\n\n` : `\n`) +
    `Please share your catalog, factory direct quotation, and workshop visit availability.`;

  const waUrl = `https://wa.me/${WORKSHOP_WHATSAPP}?text=${encodeURIComponent(messageText)}`;
  
  showToast(`Connecting to Homeify WhatsApp: ${WORKSHOP_DISPLAY_PHONE}...`);
  
  setTimeout(() => {
    window.open(waUrl, '_blank');
  }, 400);
}

// ==========================================================================
// 7. TOAST NOTIFICATION SYSTEM
// ==========================================================================
function showToast(message) {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-pill px-5 py-3.5 rounded-2xl bg-[#0D0C0B] text-[#FAF8F5] border border-[#D4AF37]/40 shadow-2xl flex items-center gap-3 text-xs font-semibold';
  toast.innerHTML = `
    <span class="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px)';
    setTimeout(() => toast.remove(), 350);
  }, 4000);
}

// ==========================================================================
// 8. MOBILE NAVIGATION DRAWER
// ==========================================================================
function initMobileNav() {
  const hamburgerBtn = document.getElementById('mobile-menu-btn');
  const closeDrawerBtn = document.getElementById('drawer-close-btn');
  const drawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const navLinks = drawer ? drawer.querySelectorAll('a, button:not(#drawer-close-btn)') : [];

  if (!hamburgerBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.remove('translate-x-full');
    if (drawerOverlay) drawerOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.add('translate-x-full');
    if (drawerOverlay) drawerOverlay.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  hamburgerBtn.addEventListener('click', openDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

// ==========================================================================
// 9. SCROLL SPY
// ==========================================================================
function initScrollSpy() {
  const navbar = document.getElementById('primary-navbar');
  if (!navbar) return;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 30) {
          navbar.classList.add('shadow-xl', 'bg-white/95', 'dark:bg-stone-900/95');
          navbar.classList.remove('bg-[#FAF8F5]/85', 'dark:bg-stone-900/80');
        } else {
          navbar.classList.remove('shadow-xl', 'bg-white/95', 'dark:bg-stone-900/95');
          navbar.classList.add('bg-[#FAF8F5]/85', 'dark:bg-stone-900/80');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ==========================================================================
// 10. WORKSHOP ADMIN AUTHENTICATION & RESTRICTED ACCESS GATEWAY
// ==========================================================================
function initAdminAuth() {
  const footerAdminBtn = document.getElementById('footer-admin-btn');
  const authModal = document.getElementById('admin-auth-modal');
  const authCloseBtn = document.getElementById('admin-auth-close-btn');
  const authForm = document.getElementById('admin-auth-form');
  const pinInput = document.getElementById('admin-auth-pin');
  const errorMsg = document.getElementById('admin-auth-error');
  const togglePinBtn = document.getElementById('admin-toggle-pin-visibility');
  const logoutBtn = document.getElementById('admin-logout-btn');
  const changePinBtn = document.getElementById('admin-change-pin-btn');

  // Trigger from footer button
  if (footerAdminBtn) {
    footerAdminBtn.addEventListener('click', () => {
      openAdminAuthGateway();
    });
  }

  // Close auth modal
  if (authCloseBtn) {
    authCloseBtn.addEventListener('click', closeAdminAuthGateway);
  }

  if (authModal) {
    authModal.addEventListener('click', (e) => {
      if (e.target === authModal) closeAdminAuthGateway();
    });
  }

  // Toggle PIN visibility
  if (togglePinBtn && pinInput) {
    togglePinBtn.addEventListener('click', () => {
      const isPassword = pinInput.type === 'password';
      pinInput.type = isPassword ? 'text' : 'password';
      togglePinBtn.innerHTML = isPassword 
        ? '<i class="fa-solid fa-eye-slash"></i>' 
        : '<i class="fa-solid fa-eye"></i>';
    });
  }

  // Form submit
  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredPin = (pinInput ? pinInput.value : '').trim();
      const currentPin = localStorage.getItem('homeify_admin_pin') || '1234';

      if (enteredPin === currentPin) {
        sessionStorage.setItem('homeify_admin_authenticated', 'true');
        closeAdminAuthGateway();
        openCustomizer();
        showToast('Admin authenticated successfully. Welcome, Ameen!');
      } else {
        if (errorMsg) {
          errorMsg.classList.remove('hidden');
          const errText = document.getElementById('admin-auth-error-msg');
          if (errText) errText.textContent = 'Incorrect Admin PIN. Please try again.';
        }
        if (pinInput) {
          pinInput.classList.add('border-rose-500');
          setTimeout(() => pinInput.classList.remove('border-rose-500'), 600);
          pinInput.value = '';
          pinInput.focus();
        }
      }
    });
  }

  // Admin Logout
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('homeify_admin_authenticated');
      closeCustomizer();
      showToast('Admin session locked and logged out.');
    });
  }

  // Admin Change PIN
  if (changePinBtn) {
    changePinBtn.addEventListener('click', () => {
      const currentPin = localStorage.getItem('homeify_admin_pin') || '1234';
      const verifyPin = prompt('Enter your current Admin PIN:');
      if (verifyPin === null) return;
      if (verifyPin.trim() !== currentPin) {
        alert('Verification failed: Current PIN is incorrect.');
        return;
      }
      const newPin = prompt('Enter new Admin PIN (minimum 4 characters):');
      if (!newPin || newPin.trim().length < 4) {
        alert('PIN must be at least 4 characters.');
        return;
      }
      localStorage.setItem('homeify_admin_pin', newPin.trim());
      showToast('Admin PIN updated successfully!');
    });
  }

  // Secret shortcut: Ctrl + Shift + A / Cmd + Shift + A
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
      e.preventDefault();
      openAdminAuthGateway();
    }
  });

  // URL Hash or query parameter trigger (#admin or ?admin)
  if (window.location.hash === '#admin' || window.location.search.includes('admin')) {
    setTimeout(openAdminAuthGateway, 400);
  }
}

function openAdminAuthGateway() {
  if (sessionStorage.getItem('homeify_admin_authenticated') === 'true') {
    openCustomizer();
    return;
  }

  const authModal = document.getElementById('admin-auth-modal');
  if (!authModal) return;

  const pinInput = document.getElementById('admin-auth-pin');
  const errorMsg = document.getElementById('admin-auth-error');
  if (pinInput) pinInput.value = '';
  if (errorMsg) errorMsg.classList.add('hidden');

  authModal.classList.remove('modal-hidden');
  authModal.classList.add('modal-visible');
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    if (pinInput) pinInput.focus();
  }, 100);
}

function closeAdminAuthGateway() {
  const authModal = document.getElementById('admin-auth-modal');
  if (!authModal) return;
  authModal.classList.add('modal-hidden');
  authModal.classList.remove('modal-visible');
  document.body.style.overflow = 'auto';
}

// ==========================================================================
// 11. PHOTO & LOGO CUSTOMIZER STUDIO (Restricted to Authenticated Admin)
// ==========================================================================
function initCustomizerManager() {
  const modal = document.getElementById('customizer-modal');
  const closeBtn = document.getElementById('customizer-close-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeCustomizer);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCustomizer();
    });
  }

  const logoFileInput = document.getElementById('customizer-logo-file');
  if (logoFileInput) {
    logoFileInput.addEventListener('change', async (e) => {
      const file = e.target.files[0];
      if (file) {
        try {
          const dataUrl = await compressImageFile(file, 600, 300, 0.85);
          localStorage.setItem('homeify_custom_logo', dataUrl);
          idbSet('homeify_custom_logo', dataUrl);
          applyLogoToDOM(dataUrl);
          updateCustomizerLogoPreview(dataUrl);
          markCatalogDirty();
          showToast('Custom logo uploaded and applied successfully!');
        } catch (err) {
          const reader = new FileReader();
          reader.onload = (event) => {
            const dataUrl = event.target.result;
            try { localStorage.setItem('homeify_custom_logo', dataUrl); } catch (e) {}
            idbSet('homeify_custom_logo', dataUrl);
            applyLogoToDOM(dataUrl);
            updateCustomizerLogoPreview(dataUrl);
            markCatalogDirty();
            showToast('Custom logo applied!');
          };
          reader.readAsDataURL(file);
        }
      }
    });
  }

  const resetLogoBtn = document.getElementById('customizer-reset-logo-btn');
  if (resetLogoBtn) {
    resetLogoBtn.addEventListener('click', () => {
      localStorage.removeItem('homeify_custom_logo');
      idbDelete('homeify_custom_logo');
      applyLogoToDOM(DEFAULT_LOGO);
      updateCustomizerLogoPreview(DEFAULT_LOGO);
      markCatalogDirty();
      showToast('Logo restored to official brand logo.');
    });
  }

  populateCustomizerProductList();
}

function openCustomizer() {
  // Security guard: Only authenticated admin can access
  if (sessionStorage.getItem('homeify_admin_authenticated') !== 'true') {
    openAdminAuthGateway();
    return;
  }

  const modal = document.getElementById('customizer-modal');
  if (!modal) return;

  // Close mobile drawer if open
  const drawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  if (drawer) drawer.classList.add('translate-x-full');
  if (drawerOverlay) drawerOverlay.classList.add('hidden');

  modal.classList.remove('modal-hidden');
  modal.classList.add('modal-visible');
  document.body.style.overflow = 'hidden';

  const currentLogo = localStorage.getItem('homeify_custom_logo') || DEFAULT_LOGO;
  updateCustomizerLogoPreview(currentLogo);
  updateHighlightsToggleButtonUI();
  updateRestoreCollectionButtonUI();
  populateCustomizerProductList();
  
  const tokenInput = document.getElementById('admin-github-token');
  if (tokenInput && !tokenInput.value) {
    tokenInput.value = localStorage.getItem('homeify_gh_token') || '';
  }
  updateSyncStatusUI();
}

function closeCustomizer() {
  const modal = document.getElementById('customizer-modal');
  if (!modal) return;
  modal.classList.add('modal-hidden');
  modal.classList.remove('modal-visible');
  document.body.style.overflow = 'auto';
}

function updateCustomizerLogoPreview(src) {
  const preview = document.getElementById('customizer-logo-preview');
  if (preview) preview.src = src;
}

function populateCustomizerProductList() {
  const listContainer = document.getElementById('customizer-products-grid');
  if (!listContainer) return;

  listContainer.innerHTML = '';

  HERO_SLIDES.forEach((slide, idx) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col gap-3';
    itemEl.innerHTML = `
      <div class="flex items-center justify-between text-xs font-mono">
        <span class="font-bold text-teak">HERO SLIDE #${idx + 1}</span>
        <span class="text-stone-400">${slide.tag}</span>
      </div>
      <div class="aspect-video rounded-xl overflow-hidden bg-stone-900 relative">
        <img id="custom-preview-hero-${slide.id}" src="${slide.image}" class="w-full h-full object-cover object-top">
      </div>
      <div class="text-xs font-bold text-[#0D0C0B]">${slide.title}</div>
      
      <div class="space-y-2 mt-auto">
        <label class="w-full py-2 px-3 rounded-xl bg-[#0D0C0B] text-white text-[11px] font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer hover:bg-teak transition-colors">
          <i class="fa-solid fa-upload"></i> Upload Local Image
          <input type="file" accept="image/*" class="hidden" onchange="handleHeroPhotoUpload(event, '${slide.id}')">
        </label>
        <div class="flex gap-2">
          <input type="text" placeholder="assets/..." value="${slide.image.startsWith('data:') ? '' : slide.image}" class="flex-1 text-[11px] px-2.5 py-1.5 rounded-lg border border-stone-200 bg-white" onchange="handleHeroPhotoUrlChange(event, '${slide.id}')">
          <button type="button" class="px-2 py-1 text-[10px] text-stone-500 hover:text-red-600 font-mono" onclick="resetHeroPhoto('${slide.id}')">Reset</button>
        </div>
      </div>
    `;
    listContainer.appendChild(itemEl);
  });

  PRODUCTS.forEach((product) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'p-4 rounded-2xl bg-white border border-stone-200 shadow-sm flex flex-col gap-3 hover:border-teak transition-colors';

    const highlightedBento = JSON.parse(localStorage.getItem('homeify_highlighted_bento_ids') || 'null');
    const isCurrentlyLarge = highlightedBento !== null 
      ? highlightedBento.includes(product.id)
      : (product.id === 'living-slated-table' || product.id === 'handcrafted-sofa');
    const featCount = (product.features || []).length;

    itemEl.innerHTML = `
      <div class="flex items-center justify-between text-xs font-mono">
        <div class="flex items-center gap-2">
          <span class="font-bold text-teak">${product.categoryName.toUpperCase()}</span>
          ${product.isCustom ? '<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-bold">CUSTOM ADDED</span>' : ''}
        </div>
        <div class="flex items-center gap-2">
          <span class="text-stone-400">${product.badge}</span>
          <button 
            type="button" 
            onclick="removeProductFromCollection('${product.id}')" 
            class="px-2.5 py-1 rounded-lg border border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-colors text-[10px] font-bold flex items-center gap-1 cursor-pointer" 
            title="Remove this item from the collection"
          >
            <i class="fa-solid fa-trash-can text-[9px]"></i>
            <span>Remove</span>
          </button>
        </div>
      </div>
      
      <div class="flex gap-3">
        <!-- Thumbnail Preview -->
        <div class="w-24 h-32 rounded-xl overflow-hidden bg-[#0D0C0B] flex-shrink-0 relative border border-stone-800 p-0 flex items-center justify-center">
          <img id="custom-preview-prod-${product.id}" src="${product.image}" class="w-full h-full object-cover">
        </div>

        <!-- Product Name and Price Inputs -->
        <div class="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <h5 class="text-xs font-bold text-[#0D0C0B] line-clamp-1">${product.name}</h5>
            <span class="text-[10px] text-stone-500 font-mono block mt-0.5 line-clamp-1">${product.materialType}</span>
          </div>
          
          <!-- Pricing Inputs -->
          <div class="grid grid-cols-2 gap-2 mt-2 font-mono">
            <div>
              <label class="block text-[9px] font-bold text-stone-500 uppercase">Showroom MRP</label>
              <input 
                id="custom-mrp-${product.id}" 
                type="text" 
                value="${product.mrp}" 
                placeholder="₹26,000"
                class="w-full text-xs px-2 py-1.5 rounded-lg border border-stone-300 bg-stone-50 font-bold text-stone-700 focus:bg-white focus:border-teak outline-none"
              />
            </div>
            <div>
              <label class="block text-[9px] font-bold text-emerald-700 uppercase">Factory Price</label>
              <input 
                id="custom-price-${product.id}" 
                type="text" 
                value="${product.factoryPrice}" 
                placeholder="₹18,500"
                class="w-full text-xs px-2 py-1.5 rounded-lg border border-emerald-300 bg-emerald-50/50 font-bold text-emerald-800 focus:bg-white focus:border-emerald-600 outline-none"
              />
            </div>
          </div>

          <!-- Save Price Button -->
          <div class="pt-2 flex items-center justify-between gap-1.5 font-mono text-xs">
            <button 
              type="button" 
              onclick="handleProductPriceSave('${product.id}')"
              class="flex-1 py-1 px-2.5 rounded-lg bg-[#0D0C0B] text-white hover:bg-emerald-700 transition-colors font-bold text-[10px] flex items-center justify-center gap-1 shadow-sm"
            >
              <i class="fa-solid fa-check text-[9px]"></i>
              <span>Save Price</span>
            </button>
            <button 
              type="button" 
              onclick="resetProductPrice('${product.id}')"
              class="py-1 px-2 rounded-lg border border-stone-200 text-stone-500 hover:text-stone-800 text-[10px]"
              title="Reset to default price"
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <!-- Photo Controls -->
      <div class="space-y-1.5 pt-2 border-t border-stone-100 text-xs font-mono">
        <label class="w-full py-1.5 px-2 rounded-lg bg-stone-100 hover:bg-teak hover:text-white transition-colors text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer text-stone-700">
          <i class="fa-solid fa-camera text-[10px]"></i> Replace Photo
          <input type="file" accept="image/*" class="hidden" onchange="handleProductPhotoUpload(event, '${product.id}')">
        </label>
        <div class="flex gap-1.5">
          <input 
            type="text" 
            placeholder="assets/..." 
            value="${product.image.startsWith('data:') ? '' : product.image}" 
            class="flex-1 text-[10px] px-2 py-1 rounded border border-stone-200 bg-stone-50" 
            onchange="handleProductPhotoUrlChange(event, '${product.id}')"
          />
          <button type="button" class="px-1.5 py-0.5 text-[9px] text-stone-400 hover:text-red-600 font-mono" onclick="resetProductPhoto('${product.id}')">Reset</button>
        </div>
      </div>

      <!-- Collection Key Highlights & Bento Frame Controls -->
      <div class="pt-2 border-t border-stone-100 flex flex-col gap-1.5 font-mono text-[10px]">
        <div class="flex items-center justify-between">
          <span class="text-stone-600 font-semibold flex items-center gap-1">
            <i class="fa-solid fa-list-check text-teak text-[9px]"></i>
            <span>Highlights:</span>
            <span class="font-bold text-stone-800">${featCount} points</span>
          </span>
          <div class="flex items-center gap-1">
            ${featCount > 0 ? `
              <button 
                type="button" 
                onclick="clearProductHighlights('${product.id}')" 
                class="px-2 py-0.5 rounded border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white font-bold transition-colors cursor-pointer"
                title="Remove all Key Highlights from this product"
              >
                <i class="fa-solid fa-eraser text-[8px] mr-1"></i>Remove Highlights
              </button>
            ` : `
              <button 
                type="button" 
                onclick="restoreProductHighlights('${product.id}')" 
                class="px-2 py-0.5 rounded border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white font-bold transition-colors cursor-pointer"
                title="Restore default Key Highlights"
              >
                <i class="fa-solid fa-rotate-left text-[8px] mr-1"></i>Restore Highlights
              </button>
            `}
          </div>
        </div>

        <div class="flex items-center justify-between pt-1 border-t border-dashed border-stone-200">
          <span class="text-stone-600 font-semibold flex items-center gap-1">
            <i class="fa-solid fa-border-all text-stone-500 text-[9px]"></i>
            <span>Bento Showcase Frame</span>
          </span>
          <button 
            type="button" 
            onclick="toggleProductFeaturedBento('${product.id}')" 
            class="px-2 py-0.5 rounded border text-[10px] font-bold transition-colors cursor-pointer ${isCurrentlyLarge ? 'bg-amber-100 text-amber-900 border-amber-300' : 'bg-stone-100 text-stone-600 border-stone-200 hover:bg-stone-200'}"
            title="${isCurrentlyLarge ? 'Click to remove large highlight framing' : 'Click to highlight as large card in Bento Showcase'}"
          >
            <i class="fa-solid ${isCurrentlyLarge ? 'fa-compress text-amber-700' : 'fa-expand text-stone-500'} text-[8px] mr-1"></i>
            <span>${isCurrentlyLarge ? 'Featured (Large Highlight)' : 'Standard Size'}</span>
          </button>
        </div>
      </div>
    `;
    listContainer.appendChild(itemEl);
  });
}

window.handleProductPriceSave = function(productId) {
  const mrpInput = document.getElementById(`custom-mrp-${productId}`);
  const priceInput = document.getElementById(`custom-price-${productId}`);
  if (!mrpInput || !priceInput) return;

  const newMrp = mrpInput.value.trim();
  const newPrice = priceInput.value.trim();

  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  if (newMrp) {
    prod.mrp = newMrp;
    try { localStorage.setItem('homeify_prod_mrp_' + productId, newMrp); } catch (e) {}
    idbSet('homeify_prod_mrp_' + productId, newMrp);
  }
  if (newPrice) {
    prod.factoryPrice = newPrice;
    prod.priceEstimate = `${newPrice} (Direct Workshop Price)`;
    try { localStorage.setItem('homeify_prod_price_' + productId, newPrice); } catch (e) {}
    idbSet('homeify_prod_price_' + productId, newPrice);
  }

  // If custom product, also persist in homeify_custom_products
  if (prod.isCustom) {
    try {
      const customProducts = JSON.parse(localStorage.getItem('homeify_custom_products') || '[]');
      const cpIndex = customProducts.findIndex(p => p.id === productId);
      if (cpIndex !== -1) {
        if (newMrp) customProducts[cpIndex].mrp = newMrp;
        if (newPrice) {
          customProducts[cpIndex].factoryPrice = newPrice;
          customProducts[cpIndex].priceEstimate = `${newPrice} (Direct Workshop Price)`;
        }
        localStorage.setItem('homeify_custom_products', JSON.stringify(customProducts));
      }
    } catch (e) {
      console.error('Failed to update homeify_custom_products in localStorage:', e);
    }

    idbGet('homeify_custom_products').then(customProducts => {
      if (Array.isArray(customProducts)) {
        const cpIndex = customProducts.findIndex(p => p.id === productId);
        if (cpIndex !== -1) {
          if (newMrp) customProducts[cpIndex].mrp = newMrp;
          if (newPrice) {
            customProducts[cpIndex].factoryPrice = newPrice;
            customProducts[cpIndex].priceEstimate = `${newPrice} (Direct Workshop Price)`;
          }
          idbSet('homeify_custom_products', customProducts);
        }
      }
    }).catch(() => {});
  }

  renderBentoGallery(currentFilter);
  markCatalogDirty();
  showToast(`Updated pricing for ${prod.name}! (MRP: ${newMrp}, Factory: ${newPrice})`);
};

window.resetProductPrice = function(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  if (prod.isCustom) {
    showToast(`Custom products keep their configured pricing.`);
    return;
  }

  const def = DEFAULT_PRODUCTS.find(p => p.id === productId);
  if (!def) return;

  try {
    localStorage.removeItem('homeify_prod_mrp_' + productId);
    localStorage.removeItem('homeify_prod_price_' + productId);
  } catch (e) {}
  idbDelete('homeify_prod_mrp_' + productId);
  idbDelete('homeify_prod_price_' + productId);

  prod.mrp = def.mrp;
  prod.factoryPrice = def.factoryPrice;
  prod.priceEstimate = def.priceEstimate;

  const mrpInput = document.getElementById(`custom-mrp-${productId}`);
  const priceInput = document.getElementById(`custom-price-${productId}`);
  if (mrpInput) mrpInput.value = def.mrp;
  if (priceInput) priceInput.value = def.factoryPrice;

  renderBentoGallery(currentFilter);
  markCatalogDirty();
  showToast(`Restored default price for ${prod.name}`);
};

window.resetAllProductPrices = function() {
  if (!confirm('Are you sure you want to restore all product MRPs and factory prices to their defaults?')) return;
  DEFAULT_PRODUCTS.forEach(def => {
    try {
      localStorage.removeItem('homeify_prod_mrp_' + def.id);
      localStorage.removeItem('homeify_prod_price_' + def.id);
    } catch (e) {}
    idbDelete('homeify_prod_mrp_' + def.id);
    idbDelete('homeify_prod_price_' + def.id);
    const prod = PRODUCTS.find(p => p.id === def.id);
    if (prod) {
      prod.mrp = def.mrp;
      prod.factoryPrice = def.factoryPrice;
      prod.priceEstimate = def.priceEstimate;
    }
  });
  populateCustomizerProductList();
  renderBentoGallery(currentFilter);
  markCatalogDirty();
  showToast('All default product MRPs & prices restored!');
};

window.handleProductPhotoUpload = async function(event, productId) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  showToast('Optimizing photo for fast loading...');
  try {
    const compressed = await compressImageFile(file, 900, 900, 0.82);
    setProductPhoto(productId, compressed);
  } catch (err) {
    console.error('Photo optimization error:', err);
    const reader = new FileReader();
    reader.onload = (e) => {
      setProductPhoto(productId, e.target.result);
    };
    reader.readAsDataURL(file);
  }
};

window.handleProductPhotoUrlChange = function(event, productId) {
  const url = event.target.value.trim();
  if (url) {
    setProductPhoto(productId, url);
  }
};

function setProductPhoto(productId, newUrl) {
  try {
    localStorage.setItem('homeify_prod_img_' + productId, newUrl);
  } catch (err) {
    console.warn('localStorage full, falling back to IndexedDB:', err);
  }
  idbSet('homeify_prod_img_' + productId, newUrl);

  const prod = PRODUCTS.find(p => p.id === productId);
  if (prod) prod.image = newUrl;

  // If custom product, also persist updated photo in homeify_custom_products
  if (prod && prod.isCustom) {
    try {
      const customProducts = JSON.parse(localStorage.getItem('homeify_custom_products') || '[]');
      const cpIndex = customProducts.findIndex(p => p.id === productId);
      if (cpIndex !== -1) {
        customProducts[cpIndex].image = newUrl;
        localStorage.setItem('homeify_custom_products', JSON.stringify(customProducts));
      }
    } catch (e) {
      console.error('Failed to update homeify_custom_products image:', e);
    }

    idbGet('homeify_custom_products').then(customProducts => {
      if (Array.isArray(customProducts)) {
        const cpIndex = customProducts.findIndex(p => p.id === productId);
        if (cpIndex !== -1) {
          customProducts[cpIndex].image = newUrl;
          idbSet('homeify_custom_products', customProducts);
        }
      }
    }).catch(() => {});
  }

  const preview = document.getElementById('custom-preview-prod-' + productId);
  if (preview) preview.src = newUrl;

  renderBentoGallery(currentFilter);
  markCatalogDirty();
  showToast(`Updated photo for "${prod ? prod.name : 'product'}"!`);
}

window.resetProductPhoto = function(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  if (prod.isCustom) {
    showToast(`Custom products use their designated photo.`);
    return;
  }

  const def = DEFAULT_PRODUCTS.find(p => p.id === productId);
  if (def && prod) {
    try { localStorage.removeItem('homeify_prod_img_' + productId); } catch (e) {}
    idbDelete('homeify_prod_img_' + productId);
    prod.image = def.image;
    const preview = document.getElementById('custom-preview-prod-' + productId);
    if (preview) preview.src = def.image;
    renderBentoGallery(currentFilter);
    markCatalogDirty();
    showToast(`Restored default photo for "${prod.name}"`);
  }
};

window.handleHeroPhotoUpload = async function(slideId) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  showToast('Optimizing hero banner photo...');
  try {
    const compressed = await compressImageFile(file, 1400, 900, 0.82);
    setHeroPhoto(slideId, compressed);
  } catch (err) {
    const reader = new FileReader();
    reader.onload = (e) => {
      setHeroPhoto(slideId, e.target.result);
    };
    reader.readAsDataURL(file);
  }
};

window.handleHeroPhotoUrlChange = function(event, slideId) {
  const url = event.target.value.trim();
  if (url) {
    setHeroPhoto(slideId, url);
  }
};

function setHeroPhoto(slideId, newUrl) {
  try { localStorage.setItem('homeify_hero_img_' + slideId, newUrl); } catch (e) {}
  idbSet('homeify_hero_img_' + slideId, newUrl);

  const slide = HERO_SLIDES.find(s => s.id === slideId);
  if (slide) slide.image = newUrl;

  const preview = document.getElementById('custom-preview-hero-' + slideId);
  if (preview) preview.src = newUrl;

  setHeroSlide(currentHeroSlideIndex);
  showToast(`Updated hero slide photo!`);
}

window.resetHeroPhoto = function(slideId) {
  try { localStorage.removeItem('homeify_hero_img_' + slideId); } catch (e) {}
  idbDelete('homeify_hero_img_' + slideId);
  const def = DEFAULT_HERO_SLIDES.find(s => s.id === slideId);
  const slide = HERO_SLIDES.find(s => s.id === slideId);
  if (def && slide) {
    slide.image = def.image;
    const preview = document.getElementById('custom-preview-hero-' + slideId);
    if (preview) preview.src = def.image;
    setHeroSlide(currentHeroSlideIndex);
    showToast(`Restored default photo for hero slide`);
  }
};

window.resetAllCustomMedia = function() {
  if (confirm('Are you sure you want to restore all product photos and logo to the default workshop assets? (Your custom products and pricing will be safely kept!)')) {
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith('homeify_prod_img_') || key.startsWith('homeify_hero_img_') || key === 'homeify_custom_logo') {
          localStorage.removeItem(key);
        }
      });
    } catch (e) {}
    location.reload();
  }
};

// ==========================================================================
// 12. THEME APPEARANCE SYSTEM (DARK & LIGHT MODE)
// ==========================================================================
function initThemeMode() {
  const savedTheme = localStorage.getItem('homeify_theme') || 'light';
  setTheme(savedTheme, false);

  const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isDark = document.documentElement.classList.contains('dark');
      const nextTheme = isDark ? 'light' : 'dark';
      setTheme(nextTheme, true);
    });
  });
}

window.setTheme = function(theme, showFeedback = false) {
  const isDark = theme === 'dark';
  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('homeify_theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('homeify_theme', 'light');
  }

  // Toggle icons across all instances of buttons
  document.querySelectorAll('.dark-toggle-moon').forEach(el => {
    el.classList.toggle('hidden', isDark);
  });
  document.querySelectorAll('.dark-toggle-sun').forEach(el => {
    el.classList.toggle('hidden', !isDark);
  });
  document.querySelectorAll('.dark-toggle-label').forEach(el => {
    el.textContent = isDark ? 'Light' : 'Dark';
  });

  // Switch default logo between light and dark modes if custom logo is not uploaded
  const customLogo = localStorage.getItem('homeify_custom_logo');
  if (!customLogo) {
    const defaultLogoSrc = isDark ? 'assets/homeify-logo-cropped.png' : 'assets/homeify-logo-dark-text.png';
    applyLogoToDOM(defaultLogoSrc);
  }

  if (showFeedback && typeof showToast === 'function') {
    showToast(isDark ? 'Switched to Ultra-Luxury Obsidian Dark Mode' : 'Switched to Modern Warm Light Mode');
  }
};

// ==========================================================================
// 13. ADMIN CATALOG PRODUCT CREATOR & MANAGER
// ==========================================================================
function initAddProductManager() {
  const form = document.getElementById('admin-add-product-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      handleAddNewProduct(e);
    });
  }
}

window.toggleAddProductForm = function(forceState) {
  const form = document.getElementById('admin-add-product-form');
  const btnText = document.getElementById('toggle-add-product-btn-text');
  const btn = document.getElementById('toggle-add-product-form-btn');
  if (!form) return;

  const shouldOpen = typeof forceState === 'boolean' ? forceState : form.classList.contains('hidden');
  if (shouldOpen) {
    form.classList.remove('hidden');
    if (btnText) btnText.textContent = 'Close Form';
    if (btn) {
      const icon = btn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-chevron-up text-xs';
    }
    const nameInput = document.getElementById('new-prod-name');
    if (nameInput) setTimeout(() => nameInput.focus(), 100);
  } else {
    form.classList.add('hidden');
    if (btnText) btnText.textContent = 'Add New Product';
    if (btn) {
      const icon = btn.querySelector('i');
      if (icon) icon.className = 'fa-solid fa-plus text-xs';
    }
  }
};

window.selectNewProdPreset = function(val) {
  if (!val) return;
  const pathInput = document.getElementById('new-prod-img-path');
  const previewImg = document.getElementById('new-prod-preview-img');
  const statusEl = document.getElementById('new-prod-img-status');
  if (pathInput) pathInput.value = val;
  if (previewImg) previewImg.src = val;
  if (statusEl) statusEl.textContent = 'Asset preset selected';
};

window.handleNewProductPhotoSelect = async function(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const statusEl = document.getElementById('new-prod-img-status');
  if (statusEl) statusEl.textContent = 'Optimizing photo for fast loading...';

  try {
    const dataUrl = await compressImageFile(file, 900, 900, 0.82);
    const pathInput = document.getElementById('new-prod-img-path');
    const previewImg = document.getElementById('new-prod-preview-img');
    if (pathInput) pathInput.value = dataUrl;
    if (previewImg) previewImg.src = dataUrl;
    if (statusEl) statusEl.textContent = 'Optimized photo ready (' + Math.round(dataUrl.length / 1024) + ' KB)';
  } catch (err) {
    console.error('Photo optimization error:', err);
    const reader = new FileReader();
    reader.onload = function(e) {
      const dataUrl = e.target.result;
      const pathInput = document.getElementById('new-prod-img-path');
      const previewImg = document.getElementById('new-prod-preview-img');
      if (pathInput) pathInput.value = dataUrl;
      if (previewImg) previewImg.src = dataUrl;
      if (statusEl) statusEl.textContent = 'Custom photo uploaded';
    };
    reader.readAsDataURL(file);
  }
};

window.handleAddNewProduct = function(event) {
  if (event) event.preventDefault();

  const nameInput = document.getElementById('new-prod-name');
  const categoryInput = document.getElementById('new-prod-category');
  const materialCatInput = document.getElementById('new-prod-material-category');
  const mrpInput = document.getElementById('new-prod-mrp');
  const priceInput = document.getElementById('new-prod-price');
  const dimInput = document.getElementById('new-prod-dimensions');
  const finishInput = document.getElementById('new-prod-finish');
  const badgeInput = document.getElementById('new-prod-badge');
  const descInput = document.getElementById('new-prod-desc');
  const featuresInput = document.getElementById('new-prod-features');
  const imgPathInput = document.getElementById('new-prod-img-path');

  if (!nameInput || !mrpInput || !priceInput || !descInput) return;

  const name = nameInput.value.trim();
  const category = categoryInput ? categoryInput.value : 'custom-woodwork';
  const materialCategory = materialCatInput ? materialCatInput.value : 'natural-wood';
  let mrp = mrpInput.value.trim();
  let price = priceInput.value.trim();
  const dimensions = dimInput ? dimInput.value.trim() : '';
  const finish = finishInput ? finishInput.value.trim() : '';
  const badge = badgeInput ? badgeInput.value.trim() : '';
  const desc = descInput.value.trim();
  const featuresRaw = featuresInput ? featuresInput.value.trim() : '';
  const image = (imgPathInput && imgPathInput.value.trim()) ? imgPathInput.value.trim() : 'assets/slated-coffee-table.jpg';

  if (!name || !mrp || !price || !desc) {
    alert('Please fill in all required fields (Product Name, MRP, Factory Price, and Description).');
    return;
  }

  // Format currency
  if (!mrp.startsWith('₹')) mrp = '₹' + mrp.replace(/[^0-9,]/g, '');
  if (!price.startsWith('₹')) price = '₹' + price.replace(/[^0-9,]/g, '');

  const categoryNames = {
    'living': 'Living & Sofas',
    'bedroom-dining': 'Bedroom & Dining',
    'office': 'Office & Modular',
    'custom-woodwork': 'Custom Bespoke Kerala Woodwork',
    'custom': 'Custom Bespoke Kerala Woodwork'
  };

  const materialNames = {
    'natural-wood': '100% Pure Kiln-Seasoned Solid Teak / Rosewood',
    'particle-board': 'Grade-E1 High-Density Moisture-Resistant Board',
    'hybrid': 'Solid Teak Framing with Architectural Paneling'
  };

  let features = featuresRaw.split('\n').map(f => f.trim()).filter(Boolean);
  if (features.length === 0) {
    features = [
      'Engineered with premium seasoned timber',
      '5-Year Full Structural Warranty included',
      'Handcrafted directly at our Erattupetta workshop'
    ];
  }

  const id = 'custom-' + Date.now();
  const newProduct = {
    id: id,
    name: name,
    category: category,
    categoryName: categoryNames[category] || 'Custom Bespoke',
    materialCategory: materialCategory,
    materialType: materialNames[materialCategory] || 'Custom Kerala Solid Wood',
    warranty: materialCategory === 'particle-board' ? '5-Year Grade-E1 Termite & Moisture Warranty' : '5-Year Structural Integrity Warranty',
    dimensions: dimensions || 'Custom Dimensions Available',
    finish: finish || 'Organic Matte Teak Polyurethane Seal',
    badge: badge || 'New Workshop Addition',
    mrp: mrp,
    factoryPrice: price,
    priceEstimate: `${price} (Direct Workshop Price)`,
    leadTime: '7 to 12 Working Days',
    image: image,
    description: desc,
    features: features,
    isCustom: true
  };

  // Prepend to active PRODUCTS list
  PRODUCTS.unshift(newProduct);

  // Save to localStorage
  try {
    const existing = JSON.parse(localStorage.getItem('homeify_custom_products') || '[]');
    existing.unshift(newProduct);
    localStorage.setItem('homeify_custom_products', JSON.stringify(existing));
  } catch (err) {
    console.warn('Failed to save custom product to localStorage, will rely on IndexedDB:', err);
  }

  // Also save to IndexedDB (unlimited quota)
  idbGet('homeify_custom_products').then(existing => {
    const list = Array.isArray(existing) ? existing : [];
    list.unshift(newProduct);
    idbSet('homeify_custom_products', list);
  }).catch(() => {});

  // Update UI immediately
  renderBentoGallery(currentFilter);
  populateCustomizerProductList();
  markCatalogDirty();

  // Reset form
  const form = document.getElementById('admin-add-product-form');
  if (form) form.reset();
  const previewImg = document.getElementById('new-prod-preview-img');
  if (previewImg) previewImg.src = 'assets/slated-coffee-table.jpg';
  const statusEl = document.getElementById('new-prod-img-status');
  if (statusEl) statusEl.textContent = 'Default sample selected';
  toggleAddProductForm(false);

  showToast(`🎉 Added "${name}" to Homeify Catalog!`);
};

// ==========================================================================
// 12. ADMIN COLLECTION & HIGHLIGHTS MANAGEMENT
// ==========================================================================

// Global toggle for Key Highlights visibility in product modal/views
window.toggleCollectionHighlights = function() {
  const current = localStorage.getItem('homeify_hide_collection_highlights') === 'true';
  const newState = !current;
  if (newState) {
    localStorage.setItem('homeify_hide_collection_highlights', 'true');
    showToast('Collection Key Highlights removed/hidden from product views.');
  } else {
    localStorage.removeItem('homeify_hide_collection_highlights');
    showToast('Collection Key Highlights restored to product views.');
  }
  updateHighlightsToggleButtonUI();
};

window.updateHighlightsToggleButtonUI = function() {
  const btn = document.getElementById('admin-toggle-highlights-btn');
  const txt = document.getElementById('admin-highlights-btn-text');
  const isHidden = localStorage.getItem('homeify_hide_collection_highlights') === 'true';
  if (btn && txt) {
    if (isHidden) {
      btn.className = 'px-3.5 py-1.5 rounded-xl border border-rose-300 bg-rose-50 text-rose-700 text-xs font-mono font-bold hover:bg-rose-100 transition-colors shadow-sm flex items-center gap-1.5 cursor-pointer';
      txt.textContent = 'Highlights: Hidden (Click to Show)';
    } else {
      btn.className = 'px-3.5 py-1.5 rounded-xl border border-stone-300 bg-white text-stone-700 text-xs font-mono font-bold hover:bg-stone-100 transition-colors shadow-sm flex items-center gap-1.5 cursor-pointer';
      txt.textContent = 'Highlights: Visible (Click to Remove)';
    }
  }
};

window.updateRestoreCollectionButtonUI = function() {
  const btn = document.getElementById('admin-restore-collection-btn');
  if (!btn) return;
  const hiddenProductIds = JSON.parse(localStorage.getItem('homeify_hidden_collection_ids') || '[]');
  if (Array.isArray(hiddenProductIds) && hiddenProductIds.length > 0) {
    btn.classList.remove('hidden');
    btn.innerHTML = `<i class="fa-solid fa-rotate-left text-emerald-600 text-[11px]"></i><span>Restore Collection (${hiddenProductIds.length} hidden)</span>`;
  } else {
    btn.classList.add('hidden');
  }
};

// Remove any product (default or custom) from the active collection
window.removeProductFromCollection = function(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  const name = prod ? prod.name : 'this item';
  if (!confirm(`Are you sure you want to remove "${name}" from the Homeify Collection?`)) {
    return;
  }

  if (prod && prod.isCustom) {
    try {
      const existing = JSON.parse(localStorage.getItem('homeify_custom_products') || '[]');
      const updated = existing.filter(p => p.id !== productId);
      localStorage.setItem('homeify_custom_products', JSON.stringify(updated));
      idbSet('homeify_custom_products', updated);
    } catch (err) {
      console.error('Failed to update homeify_custom_products:', err);
    }
  } else {
    try {
      const hiddenIds = JSON.parse(localStorage.getItem('homeify_hidden_collection_ids') || '[]');
      if (!hiddenIds.includes(productId)) {
        hiddenIds.push(productId);
        localStorage.setItem('homeify_hidden_collection_ids', JSON.stringify(hiddenIds));
        idbSet('homeify_hidden_collection_ids', hiddenIds);
      }
    } catch (err) {
      console.error('Failed to update homeify_hidden_collection_ids:', err);
    }
  }

  // Remove from active memory
  PRODUCTS = PRODUCTS.filter(p => p.id !== productId);

  // Clean up any individual price/image overrides
  try {
    localStorage.removeItem('homeify_prod_mrp_' + productId);
    localStorage.removeItem('homeify_prod_price_' + productId);
    localStorage.removeItem('homeify_prod_img_' + productId);
  } catch (e) {}
  idbDelete('homeify_prod_mrp_' + productId);
  idbDelete('homeify_prod_price_' + productId);
  idbDelete('homeify_prod_img_' + productId);

  renderBentoGallery(currentFilter);
  populateCustomizerProductList();
  updateRestoreCollectionButtonUI();
  markCatalogDirty();
  showToast(`Removed "${name}" from Collection.`);
};

// Backwards-compatible alias for deleteCustomProduct
window.deleteCustomProduct = window.removeProductFromCollection;

// Restore all default collection products that were removed/hidden
window.restoreAllRemovedCollectionItems = function() {
  localStorage.removeItem('homeify_hidden_collection_ids');
  idbDelete('homeify_hidden_collection_ids');
  PRODUCTS = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
  loadCustomAssets();
  renderBentoGallery(currentFilter);
  populateCustomizerProductList();
  updateRestoreCollectionButtonUI();
  markCatalogDirty();
  showToast('Restored all default collection items!');
};

// Clear/remove key highlights for a specific product
window.clearProductHighlights = function(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;
  if (!confirm(`Remove all Key Highlights from "${prod.name}"?`)) return;

  prod.features = [];
  localStorage.setItem('homeify_prod_features_' + productId, JSON.stringify([]));
  idbSet('homeify_prod_features_' + productId, []);
  populateCustomizerProductList();
  markCatalogDirty();
  showToast(`Removed Key Highlights for "${prod.name}".`);
};

// Restore original key highlights for a specific product
window.restoreProductHighlights = function(productId) {
  const def = DEFAULT_PRODUCTS.find(p => p.id === productId);
  const prod = PRODUCTS.find(p => p.id === productId);
  if (prod && def) {
    prod.features = JSON.parse(JSON.stringify(def.features || []));
    localStorage.removeItem('homeify_prod_features_' + productId);
    idbDelete('homeify_prod_features_' + productId);
    populateCustomizerProductList();
    markCatalogDirty();
    showToast(`Restored Key Highlights for "${prod.name}".`);
  }
};

// Toggle whether a product is highlighted as a large featured card in the Bento Showcase
window.toggleProductFeaturedBento = function(productId) {
  let highlightedList = JSON.parse(localStorage.getItem('homeify_highlighted_bento_ids') || 'null');
  if (highlightedList === null) {
    highlightedList = ['living-slated-table', 'handcrafted-sofa'];
  }
  const idx = highlightedList.indexOf(productId);
  if (idx > -1) {
    highlightedList.splice(idx, 1);
    showToast('Removed large bento highlight (set to standard size).');
  } else {
    highlightedList.push(productId);
    showToast('Highlighted as Large Featured Card in Collection!');
  }
  localStorage.setItem('homeify_highlighted_bento_ids', JSON.stringify(highlightedList));
  idbSet('homeify_highlighted_bento_ids', highlightedList);
  renderBentoGallery(currentFilter);
  populateCustomizerProductList();
  markCatalogDirty();
};

// ==========================================================================
// 14. LIVE DEPLOYMENT & PERMANENT DOMAIN SYNCHRONIZATION (homeifyfurniture.in)
// ==========================================================================

function markCatalogDirty() {
  localStorage.setItem('homeify_catalog_dirty', 'true');
  updateSyncStatusUI();
}

function updateSyncStatusUI() {
  const isDirty = localStorage.getItem('homeify_catalog_dirty') === 'true';
  const indicator = document.getElementById('admin-sync-indicator');
  const text = document.getElementById('admin-sync-indicator-text');
  const tokenInput = document.getElementById('admin-github-token');

  if (tokenInput && !tokenInput.value) {
    tokenInput.value = localStorage.getItem('homeify_gh_token') || '';
  }

  if (indicator && text) {
    if (isDirty) {
      indicator.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[11px] font-bold border border-amber-400/30 self-start sm:self-auto';
      indicator.innerHTML = '<span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span><span>Pending Live Deploy</span>';
    } else {
      indicator.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-[11px] font-bold border border-emerald-400/30 self-start sm:self-auto';
      indicator.innerHTML = '<span class="w-2 h-2 rounded-full bg-emerald-400"></span><span>Live Synced</span>';
    }
  }
}

// 1-Click Publish to GitHub Main Branch -> Vercel Auto-Deploy to homeifyfurniture.in
window.publishCatalogToGitHub = async function() {
  const tokenInput = document.getElementById('admin-github-token');
  let token = (tokenInput ? tokenInput.value.trim() : '') || localStorage.getItem('homeify_gh_token') || '';

  if (!token) {
    token = prompt(
      'Enter your GitHub Personal Access Token to deploy directly to homeifyfurniture.in:\n\n' +
      '(To create one: go to github.com/settings/tokens, click "Generate new token (classic)", select "repo" scope, and paste it here.)'
    );
    if (!token || !token.trim()) {
      alert('GitHub token is required to deploy permanently to homeifyfurniture.in.');
      return;
    }
    token = token.trim();
    localStorage.setItem('homeify_gh_token', token);
    if (tokenInput) tokenInput.value = token;
  }

  const publishBtn = document.getElementById('admin-publish-live-btn');
  const statusEl = document.getElementById('admin-publish-status');

  if (publishBtn) {
    publishBtn.disabled = true;
    publishBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1.5"></i> Publishing to Live Website...';
  }
  if (statusEl) statusEl.innerHTML = '<span class="text-amber-300">Connecting to GitHub repository (AmeeNafih/Homeify-Furniture-Website)...</span>';

  try {
    const owner = 'AmeeNafih';
    const repo = 'Homeify-Furniture-Website';
    const path = 'catalog.json';
    const branch = 'main';

    // 1. Get current SHA of catalog.json from GitHub
    let currentSha = null;
    try {
      const getRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`, {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      if (getRes.ok) {
        const fileData = await getRes.json();
        currentSha = fileData.sha;
      }
    } catch (e) {
      console.warn('Could not read existing SHA:', e);
    }

    if (statusEl) statusEl.innerHTML = '<span class="text-amber-300">Writing updated catalog with ' + PRODUCTS.length + ' products...</span>';

    // 2. Format catalog JSON string and encode to Base64 (supporting UTF-8 characters like ₹)
    const jsonStr = JSON.stringify(PRODUCTS, null, 2);
    const base64Content = window.btoa(unescape(encodeURIComponent(jsonStr)));

    // 3. Commit catalog.json to GitHub main branch
    const putRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v3+json'
      },
      body: JSON.stringify({
        message: `Admin update catalog: ${PRODUCTS.length} products & updated pricing [skip ci]`,
        content: base64Content,
        sha: currentSha || undefined,
        branch: branch
      })
    });

    if (!putRes.ok) {
      const errData = await putRes.json().catch(() => ({}));
      throw new Error(errData.message || `GitHub error ${putRes.status}`);
    }

    localStorage.setItem('homeify_gh_token', token);
    localStorage.setItem('homeify_catalog_dirty', 'false');
    updateSyncStatusUI();

    showToast('🚀 Successfully Published! Vercel is now deploying your changes live to homeifyfurniture.in.');
    if (statusEl) {
      statusEl.innerHTML = '<span class="text-emerald-400 font-bold">✓ Published! Live across all devices on homeifyfurniture.in in ~15 seconds.</span>';
    }
  } catch (err) {
    console.error('Publishing failed:', err);
    alert(`Could not deploy to GitHub:\n${err.message}\n\nPlease verify your GitHub Token has "repo" permissions enabled.`);
    if (statusEl) {
      statusEl.innerHTML = `<span class="text-rose-400 font-bold">Deploy failed: ${err.message}</span>`;
    }
  } finally {
    if (publishBtn) {
      publishBtn.disabled = false;
      publishBtn.innerHTML = '<i class="fa-solid fa-cloud-arrow-up"></i><span>Publish to Live Website</span>';
    }
  }
};

window.downloadCatalogJson = function() {
  const jsonStr = JSON.stringify(PRODUCTS, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'catalog.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Downloaded authoritative catalog.json file!');
};

window.copyCatalogJson = function() {
  const jsonStr = JSON.stringify(PRODUCTS, null, 2);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(jsonStr).then(() => {
      showToast('Copied full catalog JSON to clipboard!');
    }).catch(() => {
      prompt('Copy your catalog JSON:', jsonStr);
    });
  } else {
    prompt('Copy your catalog JSON:', jsonStr);
  }
};

// ==========================================================================
// 15. INSTAGRAM REELS SHOWCASE & LIGHTBOX VIEWER ENGINE (@homeify.furniture)
// ==========================================================================
const DEFAULT_INSTAGRAM_REELS = [
  {
    id: 'reel-teak-sofa',
    category: 'crafting',
    tag: 'Workshop Joinery',
    title: 'Handcrafted Grade-A Natural Teak Sofa Frame',
    caption: 'Master artisans carving and assembling 3-seater solid Grade-A natural teak sofa frames with traditional mortise & tenon interlocking joints. Monolithic strength built to last generations without metallic fasteners. 🌿✨',
    image: 'assets/handcrafted-wooden-sofa.jpg',
    views: '14.8K',
    likes: 1248,
    duration: '0:38',
    audioTitle: 'Original Audio - Homeify Timber Acoustics',
    location: 'Erattupetta Workshop • Kerala',
    batch: 'Erattupetta Workshop • Batch #NK-42',
    instagramUrl: 'https://www.instagram.com/homeify.furniture/',
    productInquiry: 'Handcrafted Grade-A Natural Teak Sofa Frame (3-Seater)'
  },
  {
    id: 'reel-kerala-jhoola',
    category: 'delivery',
    tag: 'Client Delivery',
    title: 'Royal Kerala Jhoola Swing Installation',
    caption: 'Delivered & installed at a heritage villa residence in Kottayam! 100% monolithic Grade-A natural teak plank suspended with ornamental solid cast-brass chains and high-gloss marine polyurethane coat. 🏡✨',
    image: 'assets/royal-jhoola-swing.jpg',
    views: '28.6K',
    likes: 2890,
    duration: '0:45',
    audioTitle: 'Heritage Kerala Jhoola - Workshop Chimes',
    location: 'Client Villa • Kottayam',
    batch: 'Installed & Load-Tested to 450kg',
    instagramUrl: 'https://www.instagram.com/homeify.furniture/',
    productInquiry: 'Royal Kerala Solid Teak Jhoola Swing'
  },
  {
    id: 'reel-teak-cot',
    category: 'teak',
    tag: 'Grade-A Natural Teak',
    title: 'Kiln-Seasoned 6-ft Grade-A Natural Teak King Cot',
    caption: 'From seasoned plantation teak logs to a monolithic 6-ft king cot headboard. Calibrated to 10-12% moisture equilibrium so it will never bend, expand, or creak through humid Kerala monsoon seasons. 🪵💤',
    image: 'assets/premium-wooden-cot.jpg',
    views: '19.8K',
    likes: 1720,
    duration: '0:52',
    audioTitle: 'Woodworking ASMR - Timber Planing & Polish',
    location: 'Kiln Seasoning Unit • M E S Junction',
    batch: 'Seasoned Grade-A Natural Teak',
    instagramUrl: 'https://www.instagram.com/homeify.furniture/',
    productInquiry: 'Kiln-Seasoned 6-ft Monolithic Teak Cot'
  },
  {
    id: 'reel-cane-dining',
    category: 'crafting',
    tag: 'Workshop Joinery',
    title: 'Organic Cane Weave Dining Chair Studio Finish',
    caption: 'Hand-weaving natural cane mesh onto steam-curved solid teak backrests. Ergonomic, breathable, and an iconic mid-century modern Kerala dining silhouette designed for tropical comfort. 🪑🌿',
    image: 'assets/curve-dining-chair-studio.jpg',
    views: '22.1K',
    likes: 1980,
    duration: '0:34',
    audioTitle: 'Artisan Hands - Cane Weaving Rhythm',
    location: 'Erattupetta Finishing Studio',
    batch: 'Hand-Woven Natural Rattan & Teak',
    instagramUrl: 'https://www.instagram.com/homeify.furniture/',
    productInquiry: 'Curved Back Cane Teak Dining Chair'
  },
  {
    id: 'reel-marble-table',
    category: 'delivery',
    tag: 'Client Delivery',
    title: 'Italian Marble & Fluted Teak Dining Table',
    caption: 'Unboxing & assembly at Kochi luxury waterfront apartment! Monolithic fluted teak twin pedestal bases paired with a chamfered 20mm Italian Carrara marble oval top. Direct factory price advantage! 🏛️🍽️',
    image: 'assets/oval-marble-dining-table.jpg',
    views: '34.5K',
    likes: 3410,
    duration: '1:02',
    audioTitle: 'Trending Interior Audio - Architectural Reveal',
    location: 'Marine Drive Waterfront • Kochi',
    batch: 'Custom Fluted Teak & 20mm Carrara Marble',
    instagramUrl: 'https://www.instagram.com/homeify.furniture/',
    productInquiry: 'Italian Marble & Fluted Teak Oval Dining Table'
  },
  {
    id: 'reel-slated-table',
    category: 'teak',
    tag: 'Grade-A Natural Teak',
    title: 'Slated Grade-A Natural Teak Low Coffee Table',
    caption: 'Hand-rubbed Italian matte polyurethane coat applied to slated Grade-A natural teak coffee table. Water-resistant, scratch-resistant, and showcasing natural golden amber teak grain patterns. ☕✨',
    image: 'assets/slated-coffee-table.jpg',
    views: '16.4K',
    likes: 1450,
    duration: '0:29',
    audioTitle: 'Workshop Acoustics - Spray & Rub Polish',
    location: 'Erattupetta Workshop • Finishing Bay',
    batch: 'Italian Polyurethane Matte Finish',
    instagramUrl: 'https://www.instagram.com/homeify.furniture/',
    productInquiry: 'Slated Grade-A Natural Teak Coffee Table'
  }
];

const LIKED_REELS_STORAGE_KEY = 'homeify_liked_reels';
let activeModalReel = null;
let reelPlaybackTimer = null;
let reelPlaybackProgress = 0;
let isReelPlaying = false;
let currentReelsFilter = 'all';

function getLikedReelIds() {
  try {
    const raw = localStorage.getItem(LIKED_REELS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveLikedReelIds(ids) {
  try {
    localStorage.setItem(LIKED_REELS_STORAGE_KEY, JSON.stringify(ids));
  } catch (e) {}
}

function formatReelNumber(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
}

function escapeReelText(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

window.renderInstagramReels = function(filterCategory = 'all') {
  currentReelsFilter = filterCategory;
  const container = document.getElementById('instagram-reels-container');
  if (!container) return;

  const likedIds = getLikedReelIds();
  const reelsToDisplay = filterCategory === 'all'
    ? DEFAULT_INSTAGRAM_REELS
    : DEFAULT_INSTAGRAM_REELS.filter(r => r.category === filterCategory);

  if (reelsToDisplay.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-stone-400 font-mono text-sm">
        No reels found for this category.
      </div>
    `;
    return;
  }

  container.innerHTML = reelsToDisplay.map((reel) => {
    const isLiked = likedIds.includes(reel.id);
    const displayLikes = isLiked ? reel.likes + 1 : reel.likes;

    return `
      <div 
        class="reel-phone-frame group cursor-pointer relative overflow-hidden bg-[#141210] border border-white/10 hover:border-pink-500/50 flex flex-col justify-between"
        onclick="openReelModal('${reel.id}')"
        role="button"
        tabindex="0"
        aria-label="Watch Instagram Reel: ${escapeReelText(reel.title)}"
      >
        <!-- Background Reel Image -->
        <div class="absolute inset-0 bg-stone-900 overflow-hidden">
          <img 
            src="${reel.image}" 
            alt="${escapeReelText(reel.title)}" 
            loading="lazy" 
            decoding="async" 
            class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 select-none"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-transparent to-black/40"></div>
        </div>

        <!-- Top Header Info Row -->
        <div class="relative z-10 p-3 flex items-start justify-between gap-2">
          <div class="flex items-center gap-1.5">
            <span class="px-2 py-0.5 rounded-full bg-black/65 backdrop-blur-md text-[9px] font-mono font-bold text-champagne border border-white/10 shadow-sm">
              ${escapeReelText(reel.tag)}
            </span>
          </div>

          <div class="flex items-center gap-1.5">
            <span class="px-2 py-0.5 rounded-full bg-black/65 backdrop-blur-md text-[9px] font-mono font-bold text-white border border-white/10 flex items-center gap-1 shadow-sm">
              <i class="fa-solid fa-play text-[7px] text-pink-400"></i>
              <span>${reel.views}</span>
            </span>
          </div>
        </div>

        <!-- Center Floating Play Button -->
        <div class="relative z-10 my-auto flex items-center justify-center">
          <div class="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/25 text-white flex items-center justify-center group-hover:scale-115 group-hover:bg-pink-600 group-hover:border-pink-400 transition-all duration-300 shadow-xl">
            <i class="fa-solid fa-play ml-0.5 text-base"></i>
          </div>
        </div>

        <!-- Bottom Overlay: Title, Audio Equalizer, Likes & CTA -->
        <div class="relative z-10 p-3 pt-6 bg-gradient-to-t from-black via-black/85 to-transparent text-white space-y-1.5">
          <!-- Audio Equalizer Strip -->
          <div class="flex items-center gap-1.5 text-[9px] font-mono text-stone-300">
            <div class="audio-equalizer">
              <span></span><span></span><span></span><span></span>
            </div>
            <span class="truncate max-w-[120px] sm:max-w-[140px] text-stone-300">Homeify Teak</span>
          </div>

          <h4 class="text-xs font-bold leading-snug line-clamp-2 text-white group-hover:text-pink-200 transition-colors">
            ${escapeReelText(reel.title)}
          </h4>

          <div class="flex items-center justify-between pt-1.5 border-t border-white/10 text-[10px] font-mono text-stone-400">
            <span class="flex items-center gap-1 ${isLiked ? 'text-pink-400 font-bold' : ''}">
              <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart text-pink-400 text-[10px]"></i>
              <span>${formatReelNumber(displayLikes)}</span>
            </span>

            <span class="text-pink-400 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
              <span>Watch</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[8px]"></i>
            </span>
          </div>
        </div>

        <!-- Simulated Reel Playback Bar at Bottom -->
        <div class="reel-playback-bar z-10"></div>
      </div>
    `;
  }).join('');
};

window.filterReels = function(category, btnElement) {
  // Update button active states
  const buttons = document.querySelectorAll('.reel-tab-btn');
  buttons.forEach(btn => {
    btn.classList.remove('active', 'bg-white', 'text-[#0D0C0B]', 'font-bold');
    btn.classList.add('bg-white/10', 'text-stone-300', 'font-medium');
  });

  if (btnElement) {
    btnElement.classList.add('active', 'bg-white', 'text-[#0D0C0B]', 'font-bold');
    btnElement.classList.remove('bg-white/10', 'text-stone-300', 'font-medium');
  }

  // Fade out container briefly for smooth modern feel
  const container = document.getElementById('instagram-reels-container');
  if (container) {
    container.style.opacity = '0.5';
    container.style.transform = 'translateY(4px)';
    container.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
    setTimeout(() => {
      renderInstagramReels(category);
      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
    }, 120);
  } else {
    renderInstagramReels(category);
  }
};

window.openReelModal = function(reelId) {
  const reel = DEFAULT_INSTAGRAM_REELS.find(r => r.id === reelId);
  if (!reel) return;
  activeModalReel = reel;

  const modal = document.getElementById('instagram-reel-modal');
  if (!modal) return;

  // Set Modal Data
  const posterEl = document.getElementById('reel-modal-poster');
  if (posterEl) {
    posterEl.src = reel.image;
    posterEl.alt = reel.title;
  }

  const tagEl = document.getElementById('reel-modal-tag');
  if (tagEl) tagEl.textContent = reel.tag;

  const locEl = document.getElementById('reel-modal-location');
  if (locEl) locEl.textContent = reel.location;

  const titleEl = document.getElementById('reel-modal-title');
  if (titleEl) titleEl.textContent = reel.title;

  const captionEl = document.getElementById('reel-modal-caption');
  if (captionEl) captionEl.textContent = reel.caption;

  const viewsEl = document.getElementById('reel-modal-views');
  if (viewsEl) viewsEl.textContent = reel.views;

  const durationEl = document.getElementById('reel-modal-duration');
  if (durationEl) durationEl.textContent = reel.duration;

  const batchEl = document.getElementById('reel-modal-batch');
  if (batchEl) batchEl.textContent = reel.batch;

  const audioTitleEl = document.getElementById('reel-modal-audio-title');
  if (audioTitleEl) audioTitleEl.textContent = reel.audioTitle;

  // Update Like State in Modal
  updateModalLikeState();

  // Update WhatsApp Inquiry Link
  const waCta = document.getElementById('reel-modal-wa-cta');
  const waFloat = document.getElementById('reel-modal-whatsapp-float');
  const waMsg = encodeURIComponent(
    `Hello Homeify Furniture Workshop (Erattupetta),\n\nI was watching your Instagram Reel "${reel.title}" (@homeify.furniture).\n\nI would like to inquire about specifications, customized wood dimensions, and direct workshop pricing for this piece:\n${reel.productInquiry}`
  );
  const waUrl = `https://wa.me/919778446620?text=${waMsg}`;
  if (waCta) waCta.href = waUrl;
  if (waFloat) waFloat.href = waUrl;

  // Open Modal
  modal.classList.remove('modal-hidden');
  modal.classList.add('modal-visible');
  document.body.style.overflow = 'hidden';

  // Start Playback Simulation
  startReelPlaybackSimulation();
};

function updateModalLikeState() {
  if (!activeModalReel) return;
  const likedIds = getLikedReelIds();
  const isLiked = likedIds.includes(activeModalReel.id);
  const heartIcon = document.getElementById('reel-modal-heart-icon');
  const likesCountEl = document.getElementById('reel-modal-likes-count');

  const currentCount = isLiked ? activeModalReel.likes + 1 : activeModalReel.likes;
  if (likesCountEl) {
    likesCountEl.textContent = currentCount.toLocaleString();
    if (isLiked) {
      likesCountEl.classList.add('text-pink-400');
    } else {
      likesCountEl.classList.remove('text-pink-400');
    }
  }

  if (heartIcon) {
    if (isLiked) {
      heartIcon.className = 'fa-solid fa-heart text-base text-pink-500 animate-pulse';
    } else {
      heartIcon.className = 'fa-regular fa-heart text-base text-white';
    }
  }
}

window.toggleCurrentModalReelLike = function() {
  if (!activeModalReel) return;
  const likedIds = getLikedReelIds();
  const index = likedIds.indexOf(activeModalReel.id);

  if (index > -1) {
    likedIds.splice(index, 1);
    saveLikedReelIds(likedIds);
    showToast(`Removed like for "${activeModalReel.title}"`);
  } else {
    likedIds.push(activeModalReel.id);
    saveLikedReelIds(likedIds);
    showToast(`❤️ Liked "${activeModalReel.title}"!`);
  }

  updateModalLikeState();
  renderInstagramReels(currentReelsFilter);
};

window.toggleReelPlayback = function() {
  if (isReelPlaying) {
    pauseReelPlaybackSimulation();
  } else {
    resumeReelPlaybackSimulation();
  }
};

function startReelPlaybackSimulation() {
  clearInterval(reelPlaybackTimer);
  reelPlaybackProgress = 0;
  isReelPlaying = true;
  updatePlayButtonUI(true);

  const progressBar = document.getElementById('reel-modal-progress-bar');
  if (progressBar) progressBar.style.width = '0%';

  reelPlaybackTimer = setInterval(() => {
    if (!isReelPlaying) return;
    reelPlaybackProgress += 1.5;
    if (reelPlaybackProgress >= 100) {
      reelPlaybackProgress = 0;
    }
    if (progressBar) {
      progressBar.style.width = `${reelPlaybackProgress}%`;
    }
  }, 100);
}

function pauseReelPlaybackSimulation() {
  isReelPlaying = false;
  updatePlayButtonUI(false);
}

function resumeReelPlaybackSimulation() {
  isReelPlaying = true;
  updatePlayButtonUI(true);
}

function updatePlayButtonUI(playing) {
  const playBtn = document.getElementById('reel-modal-play-btn');
  const playIcon = document.getElementById('reel-modal-play-icon');
  if (!playBtn || !playIcon) return;

  if (playing) {
    playIcon.className = 'fa-solid fa-pause text-2xl group-hover:scale-105 transition-transform';
    playBtn.style.opacity = '0.35';
  } else {
    playIcon.className = 'fa-solid fa-play ml-1 text-2xl group-hover:scale-105 transition-transform';
    playBtn.style.opacity = '0.9';
  }
}

window.shareCurrentModalReel = function() {
  if (!activeModalReel) return;
  const reelShareUrl = activeModalReel.instagramUrl;
  const shareTitle = `${activeModalReel.title} | Homeify Instagram Reels`;
  const shareText = `Watch ${activeModalReel.title} on Homeify Furniture Instagram Reels:\n${reelShareUrl}`;

  if (navigator.share) {
    navigator.share({
      title: shareTitle,
      text: shareText,
      url: reelShareUrl
    }).catch(() => {});
  } else {
    copyTextToClipboard(reelShareUrl, () => {
      showToast('🔗 Copied Homeify Instagram Reel link to clipboard!');
    });
  }
};

window.closeReelModal = function() {
  const modal = document.getElementById('instagram-reel-modal');
  if (!modal) return;
  clearInterval(reelPlaybackTimer);
  isReelPlaying = false;
  modal.classList.add('modal-hidden');
  modal.classList.remove('modal-visible');
  document.body.style.overflow = '';
  activeModalReel = null;
};

function initInstagramReels() {
  renderInstagramReels('all');

  // Modal Backdrop Click & Escape Key Listener
  const modal = document.getElementById('instagram-reel-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeReelModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modal = document.getElementById('instagram-reel-modal');
      if (modal && modal.classList.contains('modal-visible')) {
        closeReelModal();
      }
    }
  });
}

// Interactive Google Review Helpful Button Reaction
window.markReviewHelpful = function(btn) {
  const countEl = btn.querySelector('.helpful-count');
  if (!countEl) return;
  const isMarked = btn.getAttribute('data-marked') === 'true';
  let count = parseInt(countEl.textContent, 10) || 0;
  if (isMarked) {
    btn.setAttribute('data-marked', 'false');
    countEl.textContent = count - 1;
    btn.classList.remove('text-blue-600', 'font-bold');
    btn.classList.add('text-stone-500');
    showToast('Removed helpful reaction');
  } else {
    btn.setAttribute('data-marked', 'true');
    countEl.textContent = count + 1;
    btn.classList.add('text-blue-600', 'font-bold');
    btn.classList.remove('text-stone-500');
    showToast('👍 Thanks! Marked review as helpful');
  }
};
