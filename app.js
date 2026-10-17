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
    materialType: 'Solid Kiln-Dried Hardwood Frame with Botanical Linen Cushion',
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
    description: 'Minimalist low-profile platform bed engineered to showcase the pure, uninterrupted natural grain of seasoned Nilambur teak. Monolithic headboard plank with recessed shadow-gap pedestal framing.',
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
    description: 'The ultimate dining ensemble crafted in Erattupetta. An expansive oval solid wood dining table paired with 6 ergonomically curved dining armchairs in stain-resistant cream leatherette.',
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
    materialType: '100% Solid Natural Nilambur Teak Wood (Zero Veneers)',
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
    materialType: 'Solid Nilambur Teak Wood Planks & Handcrafted Brass/Steel Chains',
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
    description: 'From The Tropical Modern Collection. A circular coffee table designed with interlocked sculptural four-beam legs, celebrating the natural warmth and golden tones of Nilambur teak.',
    features: [
      'Interlocking cross-lap solid timber joinery for indestructible stability',
      'Round solid wood top highlighting natural growth rings and golden woodgrain',
      'Compact footprint perfect for living lounge seating and reading nooks',
      '100% seasoned solid timber crafted in Erattupetta'
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
let galleryViewMode = localStorage.getItem('homeify_gallery_view_mode') || 'thumbnail'; // 'thumbnail' or 'bento'
let galleryThumbFit = localStorage.getItem('homeify_gallery_thumb_fit') || 'contain';   // 'contain' or 'cover'

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

// Load persisted custom images, logo, and MRPs from localStorage
function loadCustomAssets() {
  try {
    // 1. Logo
    const customLogo = localStorage.getItem('homeify_custom_logo');
    if (customLogo) {
      applyLogoToDOM(customLogo);
    } else {
      applyLogoToDOM(DEFAULT_LOGO);
    }

    // 2. Clear old Unsplash overrides so real local assets take precedence
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('homeify_prod_img_') || key.startsWith('homeify_hero_img_')) {
        const val = localStorage.getItem(key);
        if (val && (val.includes('unsplash.com') || val.includes('http://') || val.includes('https://'))) {
          localStorage.removeItem(key);
        }
      }
    });

    // 3. Apply any user-uploaded dataUrl or custom photo overrides
    PRODUCTS.forEach(p => {
      const customImg = localStorage.getItem('homeify_prod_img_' + p.id);
      if (customImg && (customImg.startsWith('data:') || customImg.startsWith('assets/'))) p.image = customImg;
    });

    HERO_SLIDES.forEach(s => {
      const customHeroImg = localStorage.getItem('homeify_hero_img_' + s.id);
      if (customHeroImg && (customHeroImg.startsWith('data:') || customHeroImg.startsWith('assets/'))) s.image = customHeroImg;
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
  } catch (e) {
    console.warn('LocalStorage access warning:', e);
  }
}

function applyLogoToDOM(logoSrc) {
  const logoElements = document.querySelectorAll('.dynamic-site-logo');
  logoElements.forEach(img => {
    img.src = logoSrc;
  });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  loadCustomAssets();
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
});

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
      class="hero-indicator-btn px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 ${idx === 0 ? 'bg-[#0D0C0B] text-white shadow-lg' : 'bg-white/80 text-[#141210] hover:bg-white'}"
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

    if (galleryViewMode === 'bento' && filterCategory === 'all') {
      if (index === 0 || index === 3) {
        spanClasses = 'col-span-12 md:col-span-12 lg:col-span-8';
        isLarge = true;
      }
    }

    const card = document.createElement('div');
    card.className = `${spanClasses} bento-card bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-2xl transition-all duration-400 flex flex-col group cursor-pointer`;
    card.setAttribute('data-id', product.id);

    const materialBadgeBg = product.materialCategory === 'natural-wood' 
      ? 'bg-[#2C4A38] text-white' 
      : product.materialCategory === 'particle-board' 
        ? 'bg-[#9E6738] text-white' 
        : 'bg-[#0D0C0B] text-[#D4AF37]';

    const materialLabel = product.materialCategory === 'natural-wood'
      ? '🌳 100% Seasoned Wood'
      : product.materialCategory === 'particle-board'
        ? '⚙️ Particle Board E1'
        : '✨ Hybrid Architecture';

    const savingsPercent = calculateSavingsPercent(product.mrp, product.factoryPrice);

    card.innerHTML = `
      <!-- Product Photo Thumbnail Frame -->
      <div class="relative overflow-hidden ${isLarge ? 'h-88 md:h-[460px]' : 'aspect-[4/5] sm:aspect-[3/4] max-h-[420px]'} bg-gradient-to-b from-[#181615] via-[#121110] to-[#0A0A09] flex items-center justify-center p-3 sm:p-4 border-b border-stone-100 group/thumb">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          loading="lazy"
          class="card-img w-full h-full ${galleryThumbFit === 'contain' ? 'object-contain' : 'object-cover object-top'} transition-transform duration-600 group-hover:scale-105 drop-shadow-2xl"
          onerror="this.src='assets/slated-coffee-table.jpg'"
        />
        
        <!-- Top Badges -->
        <div class="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 pointer-events-none z-10">
          <span class="px-3 py-1 text-xs font-semibold rounded-full ${materialBadgeBg} shadow-sm backdrop-blur-md">
            ${materialLabel}
          </span>
          <span class="px-2.5 py-1 text-xs font-bold rounded-full bg-[#D4AF37] text-[#0D0C0B] shadow-sm flex items-center gap-1 font-mono">
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            5-Yr Warranty
          </span>
        </div>

        <!-- Thumbnail Zoom / Quick View Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#0D0C0B]/90 via-[#0D0C0B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 z-10">
          <button class="w-full py-3 px-4 bg-white text-[#0D0C0B] rounded-2xl font-bold text-xs uppercase tracking-wider shadow-xl backdrop-blur-sm flex items-center justify-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 font-mono">
            <svg class="w-4 h-4 text-[#9E6738]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            Quick View Specs & Inquire
          </button>
        </div>
      </div>

      <!-- Card Details & Pricing -->
      <div class="p-6 md:p-7 flex-1 flex flex-col justify-between">
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
            <a 
              href="https://wa.me/${WORKSHOP_WHATSAPP}?text=${encodeURIComponent(`Hello Homeify Furniture (Erattupetta)! I am interested in ${product.name} (Factory Price: ${product.factoryPrice}, MRP: ${product.mrp}).`)}" 
              target="_blank" 
              rel="noopener"
              onclick="event.stopPropagation();"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/10 text-[#075E54] hover:bg-[#25D366] hover:text-white transition-all text-[11px] font-bold font-mono border border-[#25D366]/20"
            >
              <i class="fa-brands fa-whatsapp text-xs"></i>
              <span>Inquire</span>
            </a>
          </div>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      openProductModal(product);
    });

    gridContainer.appendChild(card);
  });
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

  // Gallery View Mode & Thumbnail Fit Toolbar Listeners
  const viewThumbBtn = document.getElementById('view-mode-thumbnail');
  const viewBentoBtn = document.getElementById('view-mode-bento');
  const fitContainBtn = document.getElementById('thumb-fit-contain');
  const fitCoverBtn = document.getElementById('thumb-fit-cover');
  const mrpManagerBtn = document.getElementById('open-mrp-manager-btn');
  const navMrpBtn = document.getElementById('open-customizer-btn-desktop');

  if (viewThumbBtn && viewBentoBtn) {
    viewThumbBtn.addEventListener('click', () => {
      galleryViewMode = 'thumbnail';
      localStorage.setItem('homeify_gallery_view_mode', 'thumbnail');
      viewThumbBtn.className = 'gallery-view-btn px-4 py-2 rounded-full font-bold bg-[#0D0C0B] text-white shadow-sm flex items-center gap-1.5 transition-all';
      viewBentoBtn.className = 'gallery-view-btn px-4 py-2 rounded-full font-bold text-stone-600 hover:text-stone-900 flex items-center gap-1.5 transition-all';
      renderBentoGallery(currentFilter);
    });

    viewBentoBtn.addEventListener('click', () => {
      galleryViewMode = 'bento';
      localStorage.setItem('homeify_gallery_view_mode', 'bento');
      viewBentoBtn.className = 'gallery-view-btn px-4 py-2 rounded-full font-bold bg-[#0D0C0B] text-white shadow-sm flex items-center gap-1.5 transition-all';
      viewThumbBtn.className = 'gallery-view-btn px-4 py-2 rounded-full font-bold text-stone-600 hover:text-stone-900 flex items-center gap-1.5 transition-all';
      renderBentoGallery(currentFilter);
    });
  }

  if (fitContainBtn && fitCoverBtn) {
    fitContainBtn.addEventListener('click', () => {
      galleryThumbFit = 'contain';
      localStorage.setItem('homeify_gallery_thumb_fit', 'contain');
      fitContainBtn.className = 'thumb-fit-btn px-3 py-1.5 rounded-full font-bold bg-[#0D0C0B] text-white shadow-sm flex items-center gap-1 transition-all';
      fitCoverBtn.className = 'thumb-fit-btn px-3 py-1.5 rounded-full font-bold text-stone-600 hover:text-stone-900 flex items-center gap-1 transition-all';
      renderBentoGallery(currentFilter);
    });

    fitCoverBtn.addEventListener('click', () => {
      galleryThumbFit = 'cover';
      localStorage.setItem('homeify_gallery_thumb_fit', 'cover');
      fitCoverBtn.className = 'thumb-fit-btn px-3 py-1.5 rounded-full font-bold bg-[#0D0C0B] text-white shadow-sm flex items-center gap-1 transition-all';
      fitContainBtn.className = 'thumb-fit-btn px-3 py-1.5 rounded-full font-bold text-stone-600 hover:text-stone-900 flex items-center gap-1 transition-all';
      renderBentoGallery(currentFilter);
    });
  }

  if (mrpManagerBtn) mrpManagerBtn.addEventListener('click', openCustomizer);
  if (navMrpBtn) navMrpBtn.addEventListener('click', openCustomizer);
}

// ==========================================================================
// 3. QUICK-VIEW LIGHTBOX MODAL WITH LOCAL POSTER VIEW
// ==========================================================================
function openProductModal(product) {
  selectedProductForModal = product;
  const modal = document.getElementById('product-lightbox-modal');
  if (!modal) return;

  const modalImg = document.getElementById('modal-product-img');
  if (modalImg) {
    modalImg.src = product.image;
    modalImg.className = 'w-full h-full object-contain bg-[#0D0C0B] p-2';
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

  const featuresList = document.getElementById('modal-product-features');
  if (featuresList) {
    featuresList.innerHTML = product.features.map(f => `
      <li class="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A443E]">
        <svg class="w-4 h-4 text-[#2C4A38] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        <span>${f}</span>
      </li>
    `).join('');
  }

  const waBtn = document.getElementById('modal-whatsapp-btn');
  if (waBtn) {
    const message = encodeURIComponent(
      `Hello Homeify Furniture (Erattupetta)! 🌳\n\nI am interested in customizing:\n*${product.name}*\n• Factory Offer Price: ${product.factoryPrice} (Showroom MRP: ${product.mrp})\n• Material: ${product.materialType}\n• Category: ${product.categoryName}\n• 5-Year Guaranteed Warranty Included\n\nPlease share availability, finishes, and delivery timeline to my address.`
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
}

function initModalListeners() {
  const closeBtn = document.getElementById('modal-close-btn');
  const modalOverlay = document.getElementById('product-lightbox-modal');
  const quoteActionBtn = document.getElementById('modal-add-to-quote-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeProductModal);

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProductModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeCustomizer();
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
// 4. INTERACTIVE MATERIAL COMPARATOR WITH METRIC BARS
// ==========================================================================
const MATERIAL_DATA = {
  naturalWood: {
    title: '100% Seasoned Natural Wood',
    tagline: 'Timeless Heirloom Durability & Artisanal Warmth',
    idealFor: 'Heritage Cots/Beds, Royal Dining Suites, Lounge Chairs, Architectural Fluted Panels',
    lifespan: '40 to 60+ Years (Generational Investment)',
    keralaClimate: 'Kiln-seasoned in Erattupetta to 10-12% moisture content to prevent monsoon swelling and cracking.',
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
    <div class="p-8 md:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-xl flex flex-col md:flex-row gap-8 items-center">
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
  material: '100% Seasoned Natural Wood',
  roomScale: 2,
  clientName: '',
  clientPhone: '',
  clientLocation: 'Erattupetta'
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
  const location = locInput ? locInput.value.trim() || 'Erattupetta / Kerala' : 'Erattupetta';
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
    `*🌳 NEW CUSTOM FURNITURE INQUIRY - HOMEIFY ERATTUPETTA*\n\n` +
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
  const navLinks = document.querySelectorAll('.mobile-drawer-link');

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
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 40) {
      navbar.classList.add('shadow-xl', 'bg-white/95');
      navbar.classList.remove('bg-[#FAF8F5]/85');
    } else {
      navbar.classList.remove('shadow-xl', 'bg-white/95');
      navbar.classList.add('bg-[#FAF8F5]/85');
    }
  });
}

// ==========================================================================
// 10. PHOTO & LOGO CUSTOMIZER MANAGER
// ==========================================================================
function initCustomizerManager() {
  const openBtn = document.getElementById('open-customizer-btn');
  const openBtnMobile = document.getElementById('open-customizer-btn-mobile');
  const openBtnDesktop = document.getElementById('open-customizer-btn-desktop');
  const openMrpBtn = document.getElementById('open-mrp-manager-btn');
  const modal = document.getElementById('customizer-modal');
  const closeBtn = document.getElementById('customizer-close-btn');

  if (openBtn) openBtn.addEventListener('click', openCustomizer);
  if (openBtnMobile) openBtnMobile.addEventListener('click', openCustomizer);
  if (openBtnDesktop) openBtnDesktop.addEventListener('click', openCustomizer);
  if (openMrpBtn) openMrpBtn.addEventListener('click', openCustomizer);
  if (closeBtn) closeBtn.addEventListener('click', closeCustomizer);

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCustomizer();
    });
  }

  const logoFileInput = document.getElementById('customizer-logo-file');
  if (logoFileInput) {
    logoFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const dataUrl = event.target.result;
          localStorage.setItem('homeify_custom_logo', dataUrl);
          applyLogoToDOM(dataUrl);
          updateCustomizerLogoPreview(dataUrl);
          showToast('Custom logo uploaded and applied successfully!');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  const resetLogoBtn = document.getElementById('customizer-reset-logo-btn');
  if (resetLogoBtn) {
    resetLogoBtn.addEventListener('click', () => {
      localStorage.removeItem('homeify_custom_logo');
      applyLogoToDOM(DEFAULT_LOGO);
      updateCustomizerLogoPreview(DEFAULT_LOGO);
      showToast('Logo restored to official brand logo.');
    });
  }

  populateCustomizerProductList();
}

function openCustomizer() {
  const modal = document.getElementById('customizer-modal');
  if (!modal) return;
  modal.classList.remove('modal-hidden');
  modal.classList.add('modal-visible');
  document.body.style.overflow = 'hidden';

  const currentLogo = localStorage.getItem('homeify_custom_logo') || DEFAULT_LOGO;
  updateCustomizerLogoPreview(currentLogo);
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
    itemEl.innerHTML = `
      <div class="flex items-center justify-between text-xs font-mono">
        <span class="font-bold text-teak">${product.categoryName.toUpperCase()}</span>
        <span class="text-stone-400">${product.badge}</span>
      </div>
      
      <div class="flex gap-3">
        <!-- Thumbnail Preview -->
        <div class="w-24 h-32 rounded-xl overflow-hidden bg-[#0D0C0B] flex-shrink-0 relative border border-stone-800 p-1 flex items-center justify-center">
          <img id="custom-preview-prod-${product.id}" src="${product.image}" class="w-full h-full object-contain">
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
    localStorage.setItem('homeify_prod_mrp_' + productId, newMrp);
  }
  if (newPrice) {
    prod.factoryPrice = newPrice;
    prod.priceEstimate = `${newPrice} (Direct Workshop Price)`;
    localStorage.setItem('homeify_prod_price_' + productId, newPrice);
  }

  renderBentoGallery(currentFilter);
  showToast(`Updated pricing for ${prod.name}! (MRP: ${newMrp}, Factory: ${newPrice})`);
};

window.resetProductPrice = function(productId) {
  const def = DEFAULT_PRODUCTS.find(p => p.id === productId);
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!def || !prod) return;

  localStorage.removeItem('homeify_prod_mrp_' + productId);
  localStorage.removeItem('homeify_prod_price_' + productId);

  prod.mrp = def.mrp;
  prod.factoryPrice = def.factoryPrice;
  prod.priceEstimate = def.priceEstimate;

  const mrpInput = document.getElementById(`custom-mrp-${productId}`);
  const priceInput = document.getElementById(`custom-price-${productId}`);
  if (mrpInput) mrpInput.value = def.mrp;
  if (priceInput) priceInput.value = def.factoryPrice;

  renderBentoGallery(currentFilter);
  showToast(`Restored default price for ${prod.name}`);
};

window.resetAllProductPrices = function() {
  DEFAULT_PRODUCTS.forEach(def => {
    localStorage.removeItem('homeify_prod_mrp_' + def.id);
    localStorage.removeItem('homeify_prod_price_' + def.id);
    const prod = PRODUCTS.find(p => p.id === def.id);
    if (prod) {
      prod.mrp = def.mrp;
      prod.factoryPrice = def.factoryPrice;
      prod.priceEstimate = def.priceEstimate;
    }
  });
  populateCustomizerProductList();
  renderBentoGallery(currentFilter);
  showToast('All product MRPs & prices restored to defaults!');
};

window.handleProductPhotoUpload = function(event, productId) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    setProductPhoto(productId, dataUrl);
  };
  reader.readAsDataURL(file);
};

window.handleProductPhotoUrlChange = function(event, productId) {
  const url = event.target.value.trim();
  if (url) {
    setProductPhoto(productId, url);
  }
};

function setProductPhoto(productId, newUrl) {
  localStorage.setItem('homeify_prod_img_' + productId, newUrl);
  const prod = PRODUCTS.find(p => p.id === productId);
  if (prod) prod.image = newUrl;

  const preview = document.getElementById('custom-preview-prod-' + productId);
  if (preview) preview.src = newUrl;

  renderBentoGallery(currentFilter);
  showToast(`Updated photo for "${prod ? prod.name : 'product'}"!`);
}

window.resetProductPhoto = function(productId) {
  localStorage.removeItem('homeify_prod_img_' + productId);
  const def = DEFAULT_PRODUCTS.find(p => p.id === productId);
  const prod = PRODUCTS.find(p => p.id === productId);
  if (def && prod) {
    prod.image = def.image;
    const preview = document.getElementById('custom-preview-prod-' + productId);
    if (preview) preview.src = def.image;
    renderBentoGallery(currentFilter);
    showToast(`Restored default photo for "${prod.name}"`);
  }
};

window.handleHeroPhotoUpload = function(slideId) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const dataUrl = e.target.result;
    setHeroPhoto(slideId, dataUrl);
  };
  reader.readAsDataURL(file);
};

window.handleHeroPhotoUrlChange = function(event, slideId) {
  const url = event.target.value.trim();
  if (url) {
    setHeroPhoto(slideId, url);
  }
};

function setHeroPhoto(slideId, newUrl) {
  localStorage.setItem('homeify_hero_img_' + slideId, newUrl);
  const slide = HERO_SLIDES.find(s => s.id === slideId);
  if (slide) slide.image = newUrl;

  const preview = document.getElementById('custom-preview-hero-' + slideId);
  if (preview) preview.src = newUrl;

  setHeroSlide(currentHeroSlideIndex);
  showToast(`Updated hero slide photo!`);
}

window.resetHeroPhoto = function(slideId) {
  localStorage.removeItem('homeify_hero_img_' + slideId);
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
  if (confirm('Are you sure you want to restore all photos and logo to the default workshop assets?')) {
    localStorage.clear();
    location.reload();
  }
};
