/**
 * Data Store - Cirebon Rattan Heritage (CV. Ridwan Rattan Export)
 * Products, Variants, Stock Availability, International Shipping Rates & Export FAQs
 * International English Edition for Global & Malaysian Export Markets
 */

const businessProfile = {
  name: "Cirebon Rattan Heritage",
  legalName: "CV. Ridwan Rattan Nusantara",
  founder: "Mr. H. Ridwan Mansyur, B.Eng.",
  tagline: "Fine Handcrafted Indonesian Rattan Furniture — Export Specialist to Malaysia & Global Markets",
  address: "Jl. Raya Tegalwangi No. 88, Rattan Industrial Zone, Weru, Cirebon, West Java 45154, Indonesia",
  phone: "+62 812-3456-7890",
  whatsapp: "6281234567890",
  email: "export@cirebonrattan.id",
  established: 2008,
  monthlyCapacity: "15 - 20 Containers (40ft High Cube)",
  factoryArea: "6,500 m² (Kiln Drying, Framework, Weaving & Export Packaging Center)",
  totalArtisans: "120+ Master Rattan Artisans of Cirebon",
  exportDestinations: "Malaysia (Port Klang, Penang, Johor) & 42+ Countries Worldwide",
  certifications: [
    {
      code: "ATIGA Form D",
      name: "ASEAN Trade in Goods Agreement",
      desc: "Official Preferential Certificate of Origin: 0% Import Duty on entry into Malaysia."
    },
    {
      code: "SVLK / V-Legal",
      name: "Indonesian Timber & Rattan Legality Verification",
      desc: "Guarantees 100% sustainable sourcing from certified Indonesian conservation forests."
    },
    {
      code: "MAQIS & ISPM 15",
      name: "Malaysian & International Quarantine Standard",
      desc: "Certified AFAS fumigation ensuring zero wood-boring insects for smooth customs clearance."
    },
    {
      code: "Phytosanitary",
      name: "Indonesian Agricultural Quarantine Agency",
      desc: "Official plant health clearance certificate recognized by global customs authorities."
    },
    {
      code: "ISO 9001:2015",
      name: "Quality Management Certified",
      desc: "Strict moisture control (MC < 12%), non-toxic water-based eco lacquer, and structural load testing."
    }
  ]
};

// Currency conversion rate: 1 USD = Rp 15,500
const USD_RATE = 15500;

const productsData = [
  {
    id: "crh-001",
    name: "The Tegalwangi Lounge Armchair",
    category: "Living",
    status: "ready", // ready | preorder
    stock: 142,
    leadTimeDays: 2, // packaging & dispatch readiness
    basePriceIdr: 1450000,
    basePriceUsd: 95,
    cbm: 0.45,
    weightKg: 8.5,
    rating: 4.9,
    reviewsCount: 38,
    image: "images/product-1-armchair.jpg",
    gallery: [
      "images/product-1-armchair.jpg",
      "images/product-8-living-set.jpg"
    ],
    shortDesc: "Iconic Scandinavian-meets-tropical lounge armchair with solid oak frame and tight handwoven cane cord.",
    description: "Ergonomically contoured lounge armchair featuring a kiln-dried solid teak/oak hardwood frame paired with tight, high-tension handwoven rattan peel and paper cord. Masterfully crafted in Tegalwangi, Cirebon for luxury resort lobbies, seaside villas in Penang and Langkawi, and contemporary living spaces.",
    dimensions: "W 72 cm x D 78 cm x H 82 cm (Seat H: 40 cm)",
    material: "Solid Kiln-Dried Hardwood Frame + Grade-A Handwoven Rattan / Cord",
    variants: {
      colors: [
        { name: "Natural Honey Teak", priceDiff: 0, preview: "#d97706" },
        { name: "Bleached Blonde Ash", priceDiff: 50000, preview: "#fef3c7" },
        { name: "Dark Smoked Walnut", priceDiff: 75000, preview: "#543821" },
        { name: "Matte Ebonized Black", priceDiff: 75000, preview: "#262626" }
      ],
      weaves: [
        { name: "Classic Danish Cord Weave", priceDiff: 0 },
        { name: "Reinforced Double Cannage", priceDiff: 85000 }
      ],
      cushions: [
        { name: "Without Additional Cushion", priceDiff: 0 },
        { name: "Natural Off-White Linen Seat Pad", priceDiff: 150000 },
        { name: "Sunbrella® Waterproof Marine Fabric Pad", priceDiff: 280000 }
      ]
    },
    features: [
      "Solid kiln-dried hardwood frame (Moisture Content < 12%)",
      "Ergonomically angled at 105° for optimal posture and comfort",
      "Load capacity tested up to 160 kg (350 lbs)",
      "Fitted with protective non-scratch floor glides"
    ]
  },
  {
    id: "crh-002",
    name: "Kuningan Cane Dining Armchair Set (4 Chairs)",
    category: "Dining",
    status: "ready",
    stock: 35,
    leadTimeDays: 3,
    basePriceIdr: 4200000,
    basePriceUsd: 275,
    cbm: 0.85,
    weightKg: 26.0,
    rating: 5.0,
    reviewsCount: 24,
    image: "images/product-2-dining-chairs.jpg",
    gallery: [
      "images/product-2-dining-chairs.jpg"
    ],
    shortDesc: "Set of 4 elegant curved dining armchairs with open hexagonal cane webbing and solid smooth hardwood seat.",
    description: "Designed for outdoor cafe terraces, resort verandas, and luxury dining spaces. Features steam-bent barrel-back wooden frames with breathable open hexagonal cane webbing (cannage) that keeps seated guests cool in tropical climates.",
    dimensions: "Per Chair: W 56 cm x D 54 cm x H 78 cm (Seat H: 45 cm)",
    material: "Solid Hardwood + Handwoven Hexagonal Rattan Cane Webbing",
    variants: {
      colors: [
        { name: "Warm Natural Sungkai", priceDiff: 0, preview: "#b45309" },
        { name: "Antique Walnut Glaze", priceDiff: 120000, preview: "#451a03" },
        { name: "Matte Raw Teak", priceDiff: 0, preview: "#e2b87f" }
      ],
      weaves: [
        { name: "Open Hexagonal Cannage Webbing", priceDiff: 0 },
        { name: "Tight Micro-Weave Cane", priceDiff: 100000 }
      ],
      cushions: [
        { name: "4x Smooth Wooden Seats (No Cushion)", priceDiff: 0 },
        { name: "4x Removable Cream Linen Seat Cushions", priceDiff: 250000 },
        { name: "4x Sunbrella® Weatherproof Outdoor Cushions", priceDiff: 480000 }
      ]
    },
    features: [
      "Includes 4 fully assembled matching dining armchairs",
      "Breathable open cane backrest provides continuous airflow",
      "Stackable design (up to 4 chairs) for export container efficiency",
      "Commercial-grade polyurethane UV and moisture sealant"
    ]
  },
  {
    id: "crh-003",
    name: "Plumbon Minimalist Rattan Accent Lounger",
    category: "Living",
    status: "ready",
    stock: 60,
    leadTimeDays: 2,
    basePriceIdr: 1650000,
    basePriceUsd: 108,
    cbm: 0.38,
    weightKg: 7.2,
    rating: 4.8,
    reviewsCount: 52,
    image: "images/product-3-accent-lounger.jpg",
    gallery: [
      "images/product-3-accent-lounger.jpg"
    ],
    shortDesc: "Sculptural low-slung accent lounger featuring organic curved rattan ribbing and minimalist black metal legs.",
    description: "An architectural statement piece combining delicate steam-bent natural rattan pole ribbing with an ultra-sturdy powder-coated black steel sled base. Perfectly suited for minimalist seaside patios, boutique hotel bedrooms, and zen reading corners.",
    dimensions: "W 68 cm x D 74 cm x H 76 cm (Seat H: 38 cm)",
    material: "Solid Natural Rattan Poles + Powder-Coated Steel Frame",
    variants: {
      colors: [
        { name: "Natural Warm Rattan Tone", priceDiff: 0, preview: "#d97706" },
        { name: "Bleached Dune Wash", priceDiff: 50000, preview: "#f8fafc" },
        { name: "Smoked Java Charcoal", priceDiff: 60000, preview: "#291b10" }
      ],
      weaves: [
        { name: "Contoured Vertical Ribbed Weave", priceDiff: 0 },
        { name: "Reinforced Cross-Lattice Weave", priceDiff: 70000 }
      ],
      cushions: [
        { name: "Frame Only (Without Cushion)", priceDiff: 0 },
        { name: "Includes Matching Round Wooden Side Table", priceDiff: 280000 },
        { name: "Contoured Faux-Shearling Seat Pad", priceDiff: 140000 }
      ]
    },
    features: [
      "Organic contoured scoop seat cradles the body comfortably",
      "Rust-proof powder-coated iron sled frame with leveling feet",
      "Compact cubic footprint for maximum export container efficiency",
      "Hand-finished with non-toxic matte clear eco-varnish"
    ]
  },
  {
    id: "crh-004",
    name: "Sunyaragi Octagonal Rattan & Wood Coffee Table",
    category: "Living",
    status: "ready",
    stock: 48,
    leadTimeDays: 2,
    basePriceIdr: 1950000,
    basePriceUsd: 128,
    cbm: 0.32,
    weightKg: 12.5,
    rating: 4.9,
    reviewsCount: 42,
    image: "images/product-4-coffee-table.jpg",
    gallery: [
      "images/product-4-coffee-table.jpg"
    ],
    shortDesc: "Geometric octagonal low coffee table featuring solid teak plank tabletop and fine vertical rope webbing.",
    description: "A geometric showpiece designed to anchor contemporary tropical living spaces. Handcrafted with an 8-sided solid natural teak plank tabletop supported by an architectural base wrapped in high-tensile weather-resistant rattan cord.",
    dimensions: "Width 85 cm x Depth 85 cm x Height 42 cm",
    material: "Solid Kiln-Dried Teak Planks + Heavy-Duty Rattan Rope Core",
    variants: {
      colors: [
        { name: "Natural Teak & Sand Cord", priceDiff: 0, preview: "#fed7aa" },
        { name: "Weathered Grey Wash & White Cord", priceDiff: 80000, preview: "#9ca3af" },
        { name: "Dark Espresso & Charcoal Cord", priceDiff: 80000, preview: "#1f2937" }
      ],
      weaves: [
        { name: "Vertical Fluted Cord Pattern", priceDiff: 0 },
        { name: "Diamond Cross-Lattice Cord Pattern", priceDiff: 90000 }
      ],
      cushions: [
        { name: "Standard Teak Plank Top (42 cm H)", priceDiff: 0 },
        { name: "With Tempered Glass Protective Top (6mm)", priceDiff: 160000 },
        { name: "Jumbo Size (Dia 100 cm x H 45 cm)", priceDiff: 350000 }
      ]
    },
    features: [
      "Solid hardwood plank top tested for 80 kg load",
      "Geometric 8-sided architectural form with seamless joinery",
      "Water-resistant sealant protects against drink spills and humidity",
      "Packaged with corner styrofoam armor in 5-ply export carton"
    ]
  },
  {
    id: "crh-005",
    name: "Ciremai Rattan Daybed & Sphere Coffee Table Set",
    category: "Daybeds",
    status: "preorder",
    stock: 0,
    leadTimeDays: 16, // Pre-order 16 days
    basePriceIdr: 5850000,
    basePriceUsd: 385,
    cbm: 1.45,
    weightKg: 28.0,
    rating: 5.0,
    reviewsCount: 18,
    image: "images/product-5-daybed-set.webp",
    gallery: [
      "images/product-5-daybed-set.webp",
      "images/product-6-bench-drum.jpg"
    ],
    shortDesc: "Full luxury rattan daybed with curved arms, thick white mattress, matching spherical coffee table & stool.",
    description: "The ultimate tropical sanctuary furniture suite. Handcrafted with thick steam-bent natural Manau rattan poles into an organic cradle silhouette. Complete with a high-density 12cm mattress, plush throw pillows, a spherical drum coffee table, and an ottoman stool.",
    dimensions: "Daybed: W 195 cm x D 85 cm x H 78 cm | Table: Dia 70 cm x H 42 cm",
    material: "Kiln-Dried Solid Manau Rattan Poles + High-Density D-30 Foam",
    variants: {
      colors: [
        { name: "Natural Honey Rattan Glow", priceDiff: 0, preview: "#d97706" },
        { name: "Bleached Scandinavian Cream", priceDiff: 120000, preview: "#fef3c7" },
        { name: "Smoked Antique Caramel", priceDiff: 120000, preview: "#78350f" }
      ],
      weaves: [
        { name: "Open Geometric Lattice Table Base", priceDiff: 0 },
        { name: "Dense Pitrit Basket Weave Table Base", priceDiff: 110000 }
      ],
      cushions: [
        { name: "Pure White Canvas Cushion & 2 Throw Pillows Included", priceDiff: 0 },
        { name: "Sunbrella® Natural Oatmeal Waterproof Fabric", priceDiff: 550000 },
        { name: "Complete Set with Plant Stand Included", priceDiff: 220000 }
      ]
    },
    features: [
      "Includes full 12cm thick mattress and 2 soft matching pillows",
      "Spherical geometric coffee table handcrafted by master weavers",
      "Removable and machine-washable zippered cushion covers",
      "Moisture content strictly regulated under 11% for international shipping"
    ]
  },
  {
    id: "crh-006",
    name: "Weru High-Back Rattan Bench & Drum Ottoman",
    category: "Daybeds",
    status: "ready",
    stock: 55,
    leadTimeDays: 2,
    basePriceIdr: 3450000,
    basePriceUsd: 225,
    cbm: 0.92,
    weightKg: 21.0,
    rating: 4.9,
    reviewsCount: 34,
    image: "images/product-6-bench-drum.jpg",
    gallery: [
      "images/product-6-bench-drum.jpg",
      "images/product-5-daybed-set.webp"
    ],
    shortDesc: "Handcrafted high-back rattan bench with padded drum ottoman table and spherical stool ensemble.",
    description: "A versatile multi-piece rattan ensemble showcasing traditional Cirebon bentwood technique. Features a high-back bench lounger flanked by high woven wings, a dual-purpose drum ottoman with padded top, and a cage-weave round stool.",
    dimensions: "Bench: W 160 cm x D 70 cm x H 88 cm | Ottoman: Dia 65 cm x H 44 cm",
    material: "Natural Pole Rattan + Fine Peel Webbing + D-28 Foam",
    variants: {
      colors: [
        { name: "Warm Natural Honey Finish", priceDiff: 0, preview: "#fde68a" },
        { name: "Nordic Bleached Raw", priceDiff: 80000, preview: "#fef3c7" },
        { name: "Dark Espresso Brown", priceDiff: 90000, preview: "#78350f" }
      ],
      weaves: [
        { name: "Traditional Slat and Wing Weave", priceDiff: 0 },
        { name: "Tight Cannage Hexagonal Wing Weave", priceDiff: 120000 }
      ],
      cushions: [
        { name: "Full Cushion Set Included (Bench & Drum)", priceDiff: 0 },
        { name: "Waterproof Sunbrella® Outdoor Fabric Upgrade", priceDiff: 420000 },
        { name: "Add Extra Matching Spherical Stool", priceDiff: 250000 }
      ]
    },
    features: [
      "High-back ergonomic wing design provides superior shoulder support",
      "Multi-functional padded drum serves as both coffee table and extra seat",
      "Kiln-dried solid frame load tested to 220 kg",
      "Certified ISPM 15 & MAQIS pest-free fumigation treated"
    ]
  },
  {
    id: "crh-007",
    name: "Batik Trusmi Resort Poolside Sun Lounger",
    category: "Outdoor",
    status: "ready",
    stock: 75,
    leadTimeDays: 2,
    basePriceIdr: 2750000,
    basePriceUsd: 180,
    cbm: 0.58,
    weightKg: 22.0,
    rating: 5.0,
    reviewsCount: 46,
    image: "images/product-7-sun-lounger.jpg",
    gallery: [
      "images/product-7-sun-lounger.jpg"
    ],
    shortDesc: "Heavy-duty resort poolside sun lounger with adjustable 5-stage backrest, wheels & quick-dry cushion.",
    description: "The definitive luxury sun lounger chosen by 5-star beachfront resorts across Malaysia (Langkawi, Tioman, Penang) and Bali. Crafted with solid Indonesian teakwood framework and ergonomic slatting, featuring rear transport wheels and a 5-position reclining ratchet mechanism.",
    dimensions: "L 200 cm x W 68 cm x H 35 cm (Max Reclined H: 90 cm)",
    material: "Solid Grade-A Teakwood + Rattan Core Accents + QuickDry Mattress",
    variants: {
      colors: [
        { name: "Natural Teak Gold (Oiled Finish)", priceDiff: 0, preview: "#d97706" },
        { name: "Weathered Silver Teak Wash", priceDiff: 95000, preview: "#9ca3af" },
        { name: "Dark Java Timber Finish", priceDiff: 95000, preview: "#5b21b6" }
      ],
      weaves: [
        { name: "Ergonomic Solid Slat Base", priceDiff: 0 },
        { name: "All-Weather Synthetic Wicker Inlay", priceDiff: 150000 }
      ],
      cushions: [
        { name: "Includes 8cm QuickDry White Mattress Pad", priceDiff: 0 },
        { name: "Sunbrella® Marine Navy Waterproof Mattress", priceDiff: 380000 },
        { name: "Sunbrella® Forest Green Waterproof Mattress", priceDiff: 380000 }
      ]
    },
    features: [
      "5-position adjustable reclining backrest from flat to 75 degrees",
      "Solid rubber-treaded rear wheels for effortless mobility across pool decks",
      "QuickDry reticulated foam drains moisture rapidly after rain or swimming",
      "Saltwater-resistant and UV-inhibited marine clear protective finish"
    ]
  },
  {
    id: "crh-008",
    name: "Keraton Heritage Bohemian Rattan Living Suite",
    category: "Living",
    status: "preorder",
    stock: 0,
    leadTimeDays: 18, // PO 18 days
    basePriceIdr: 8200000,
    basePriceUsd: 535,
    cbm: 2.10,
    weightKg: 52.0,
    rating: 5.0,
    reviewsCount: 29,
    image: "images/product-8-living-set.jpg",
    gallery: [
      "images/product-8-living-set.jpg"
    ],
    shortDesc: "Complete 4-piece luxury living room set: 3-seater curved woven sofa, drum table, armchair & cushions.",
    description: "An expansive tropical living room suite handcrafted for resort executive villas, private residences, and spacious penthouses. Includes a deep-seated 3-seater curved woven rattan sofa, an architectural woven drum coffee table, a matching lounge armchair, and plush multi-layer seating cushions.",
    dimensions: "Sofa: W 215 x D 90 x H 78 cm | Chair: W 85 x D 80 x H 78 cm | Table: Dia 80 x H 42 cm",
    material: "Full Natural Rattan Mandola Poles + Dense Core Pitrit Weaving",
    variants: {
      colors: [
        { name: "Natural Warm Amber Honey", priceDiff: 0, preview: "#d97706" },
        { name: "Bleached Sand Dune Wash", priceDiff: 180000, preview: "#f8fafc" },
        { name: "Smoked Walnut Brown", priceDiff: 180000, preview: "#78350f" }
      ],
      weaves: [
        { name: "Dense Vertical Fluting & Base Cannage", priceDiff: 0 },
        { name: "All-Weather Rehau PE Weave (Semi-Outdoor)", priceDiff: 350000 }
      ],
      cushions: [
        { name: "Full Set Oatmeal Beige Cushions & 6 Throw Pillows", priceDiff: 0 },
        { name: "Sunbrella® Terracotta & Cream Luxury Fabric Suite", priceDiff: 750000 },
        { name: "Includes Handwoven Jute Area Rug (Dia 180 cm)", priceDiff: 380000 }
      ]
    },
    features: [
      "Complete 4-piece curated living room furniture ensemble",
      "Deep 90cm seating profile with multi-density ergonomic foam layers",
      "All cushions feature concealed heavy-duty YKK zippers for easy washing",
      "Packed in reinforced 5-ply export crates with moisture-absorbent desiccant packs"
    ]
  }
];

// Shipping Destinations Data (Specialized in Malaysia & Global Export Ports)
const shippingDestinations = [
  {
    id: "dest-malaysia-klang",
    name: "🇲🇾 Malaysia - Port Klang (Kuala Lumpur & Selangor Hub)",
    country: "Malaysia",
    portName: "Port Klang (Northport / Westport)",
    type: "Primary Export - Malaysia",
    currency: "USD",
    transitMinDays: 3,
    transitMaxDays: 5,
    rateLclPerCbm: 32, // USD per CBM (~RM 145/CBM)
    rateFcl20ft: 580,  // USD flat
    rateFcl40ft: 980,  // USD flat
    rateAirPerKg: 3.2,
    fumigationRequired: true,
    fumigationFee: 55, // MAQIS / ISPM 15 compliance
    notes: "Direct express route via Malacca Strait from Tanjung Priok to Port Klang. Eligible for ATIGA Form D (0% Import Duty)."
  },
  {
    id: "dest-malaysia-penang",
    name: "🇲🇾 Malaysia - Penang Port (Northern Region & Langkawi)",
    country: "Malaysia",
    portName: "Penang Port (NBCT Container Terminal)",
    type: "Primary Export - Malaysia",
    currency: "USD",
    transitMinDays: 4,
    transitMaxDays: 6,
    rateLclPerCbm: 35,
    rateFcl20ft: 630,
    rateFcl40ft: 1050,
    rateAirPerKg: 3.5,
    fumigationRequired: true,
    fumigationFee: 55,
    notes: "Strategic gateway for luxury resort and villa interior projects in Penang, Langkawi, and Kedah."
  },
  {
    id: "dest-malaysia-johor",
    name: "🇲🇾 Malaysia - Johor Port / PTP (Southern Region)",
    country: "Malaysia",
    portName: "Port of Tanjung Pelepas (PTP) / Johor Port",
    type: "Primary Export - Malaysia",
    currency: "USD",
    transitMinDays: 3,
    transitMaxDays: 5,
    rateLclPerCbm: 34,
    rateFcl20ft: 600,
    rateFcl40ft: 1020,
    rateAirPerKg: 3.4,
    fumigationRequired: true,
    fumigationFee: 55,
    notes: "Southern logistics hub bordering Singapore. Highly efficient for Johor Bahru commercial and residential developments."
  },
  {
    id: "dest-singapore",
    name: "🇸🇬 Singapore (Port of Singapore)",
    country: "Singapore",
    portName: "PSA Singapore Port",
    type: "Export - ASEAN",
    currency: "USD",
    transitMinDays: 3,
    transitMaxDays: 6,
    rateLclPerCbm: 38,
    rateFcl20ft: 680,
    rateFcl40ft: 1150,
    rateAirPerKg: 3.8,
    fumigationRequired: true,
    fumigationFee: 65,
    notes: "Weekly feeder sailing from Jakarta Tanjung Priok directly to PSA Singapore."
  },
  {
    id: "dest-australia-syd",
    name: "🇦🇺 Australia (Sydney / Melbourne / Brisbane)",
    country: "Australia",
    portName: "Port Botany (Sydney) / Port of Melbourne",
    type: "Export - Oceania",
    currency: "USD",
    transitMinDays: 12,
    transitMaxDays: 18,
    rateLclPerCbm: 95,
    rateFcl20ft: 1480,
    rateFcl40ft: 2450,
    rateAirPerKg: 7.5,
    fumigationRequired: true,
    fumigationFee: 95,
    notes: "Compliant with Australian Biosecurity Department (AQIS / AFAS accredited fumigation treatment)."
  },
  {
    id: "dest-japan-tyo",
    name: "🇯🇵 Japan (Tokyo / Yokohama / Osaka / Kobe)",
    country: "Japan",
    portName: "Port of Tokyo / Yokohama",
    type: "Export - East Asia",
    currency: "USD",
    transitMinDays: 10,
    transitMaxDays: 15,
    rateLclPerCbm: 78,
    rateFcl20ft: 1280,
    rateFcl40ft: 2180,
    rateAirPerKg: 6.8,
    fumigationRequired: true,
    fumigationFee: 75,
    notes: "Complies with Japanese Agricultural Standards (JAS) & Plant Quarantine inspection standards."
  },
  {
    id: "dest-europe-rot",
    name: "🇪🇺 Europe (Rotterdam, Netherlands / Hamburg, Germany)",
    country: "European Union",
    portName: "Port of Rotterdam / Hamburg",
    type: "Export - Europe",
    currency: "USD",
    transitMinDays: 24,
    transitMaxDays: 32,
    rateLclPerCbm: 120,
    rateFcl20ft: 1950,
    rateFcl40ft: 3250,
    rateAirPerKg: 9.2,
    fumigationRequired: true,
    fumigationFee: 85,
    notes: "Covered by Indonesia-EU FLEGT VPA (SVLK V-Legal document) and ISPM 15 export packing."
  },
  {
    id: "dest-usa-west",
    name: "🇺🇸 USA West Coast (Los Angeles / Long Beach, CA)",
    country: "United States",
    portName: "Port of Los Angeles / Long Beach",
    type: "Export - North America",
    currency: "USD",
    transitMinDays: 20,
    transitMaxDays: 28,
    rateLclPerCbm: 135,
    rateFcl20ft: 2250,
    rateFcl40ft: 3750,
    rateAirPerKg: 10.5,
    fumigationRequired: true,
    fumigationFee: 85,
    notes: "Direct trans-Pacific ocean freight from Port Tanjung Priok Jakarta to Los Angeles."
  },
  {
    id: "dest-domestic",
    name: "🇮🇩 Domestic Indonesia (Jakarta / Surabaya / Bali)",
    country: "Indonesia",
    portName: "Tanjung Priok / Tanjung Perak Hub",
    type: "Domestic",
    currency: "IDR",
    transitMinDays: 2,
    transitMaxDays: 5,
    rateLclPerCbm: 280000,
    rateFcl20ft: 4500000,
    rateFcl40ft: 7500000,
    rateAirPerKg: 35000,
    fumigationRequired: false,
    fumigationFee: 0,
    notes: "Direct factory trucking delivery from Cirebon to buyer warehouses across Java and Bali."
  }
];

// Interactive FAQ Data (International Export Edition)
const faqData = [
  {
    id: "faq-1",
    category: "ketersediaan",
    categoryName: "Stock Availability",
    question: "Are products in stock (Ready Stock) or made-to-order (Pre-Order)?",
    answer: "We operate a transparent dual inventory system. Items with a green pulsing badge <strong>'READY STOCK'</strong> are stored in our Cirebon export warehouse and can be prepared for container loading within 1-3 business days. For shipments to Malaysia (Port Klang, Penang, Johor), ready items can reach your port in just <strong>3 to 5 sailing days</strong>! Items marked with an amber badge <strong>'PRE-ORDER / MADE TO ORDER'</strong> require 10-21 business days production lead time depending on order volume and custom architectural specifications."
  },
  {
    id: "faq-2",
    category: "varian",
    categoryName: "Variants & Customization",
    question: "What customization variants are available (colors, weaves, cushions, dimensions)?",
    answer: "Every model offers extensive customization options popular in luxury tropical markets:\n1. <strong>Finishing Colors:</strong> Natural Honey Clear Coat, Bleached Scandinavian Wash, Smoked Walnut, Antique Matte Charcoal, and custom color matching.\n2. <strong>Weave Patterns:</strong> Natural Peel Weave, Core Pitrit, Weathered Kubu Grey, and Heavy-Duty UV-Resistant Synthetic Polyethylene (all-weather outdoor).\n3. <strong>Cushions & Upholstery:</strong> High-density D-28 foam with natural linen, water-repellent canvas, or original Sunbrella® marine waterproof fabrics.\n4. <strong>Custom Sizing:</strong> We gladly accommodate bespoke dimensions tailored to your interior design and architectural floor plans."
  },
  {
    id: "faq-3",
    category: "harga",
    categoryName: "Pricing & Wholesale Discounts",
    question: "How is the total order price calculated, and are bulk container discounts available?",
    answer: "Pricing is calculated in real time: (Unit Variant Price x Quantity) - Volume Discount + Ocean Freight & Fumigation. We provide an <strong>Official Tiered Export Discount Structure</strong>:\n• <strong>1 - 9 Units:</strong> Standard Unit Price (Sample / Boutique tier)\n• <strong>10 - 49 Units:</strong> Automatic 5% Discount (Commercial / Hospitality tier)\n• <strong>50 - 99 Units:</strong> 12% Discount (Full 20ft Container capacity)\n• <strong>100+ Units:</strong> 18% Discount (Full 40ft High Cube Container capacity)\nYou can toggle between US Dollar (USD $) and Indonesian Rupiah (IDR Rp) at any time. Prices are highly competitive when converted to Malaysian Ringgit (MYR)!"
  },
  {
    id: "faq-4",
    category: "pengiriman",
    categoryName: "Shipping Costs to Malaysia & Global Ports",
    question: "What are the shipping costs to Malaysia (Port Klang, Penang, Johor) and global ports?",
    answer: "Shipments depart from Port Tanjung Priok (Jakarta) via direct weekly feeder sailings at transparent, cost-effective rates:\n• <strong>LCL (Less than Container Load):</strong> Starting from <strong>$32 USD / CBM</strong> (~RM 145 / CBM) to Port Klang.\n• <strong>FCL 20ft Full Container (~30 CBM):</strong> Approximately <strong>$580 USD</strong> flat (fits 60-80 armchairs).\n• <strong>FCL 40ft High Cube Container (~68 CBM):</strong> Approximately <strong>$980 USD</strong> flat (fits 180-240 mixed pieces).\n• <strong>Air Cargo Express:</strong> $3.2 USD / kg for urgent prototype samples (1-2 days to KLIA Kuala Lumpur).\nAll shipments include export clearance documentation."
  },
  {
    id: "faq-5",
    category: "estimasi",
    categoryName: "Estimated Delivery Time (ETA)",
    question: "How long does it take for goods to arrive at my destination port?",
    answer: "Due to our close geographical proximity across the Malacca Strait, delivery to Malaysia is exceptionally fast:\n• <strong>Port Klang (Selangor / KL):</strong> Only <strong>3 - 5 sailing days</strong> from Tanjung Priok.\n• <strong>Penang Port (Northern Region / Langkawi):</strong> Approx. <strong>4 - 6 sailing days</strong>.\n• <strong>Johor Port / PTP:</strong> Approx. <strong>3 - 5 sailing days</strong>.\nTotal estimated arrival time equals: Factory preparation/packing lead time (1-3 days for ready stock) + Ocean transit days. Bill of Lading (B/L) and live container tracking numbers are issued immediately once the vessel departs."
  },
  {
    id: "faq-6",
    category: "legalitas",
    categoryName: "ATIGA Form D (0% Duty) & Quarantine",
    question: "Are shipments eligible for 0% import duty in Malaysia, and are quarantine certificates provided?",
    answer: "Yes, 100%! As an Indonesian exporter, all our rattan shipments to Malaysia are accompanied by the <strong>ATIGA Form D (ASEAN Trade in Goods Agreement)</strong> Certificate of Origin, entitling buyers to <strong>0% IMPORT DUTY (Zero Tariff)</strong> on arrival in Malaysia!\nIn addition, we provide:\n1. <strong>ISPM 15 & MAQIS Fumigation Certificate:</strong> Certified by accredited treatment providers to ensure goods are 100% free of wood pests.\n2. <strong>SVLK / V-Legal Indonesia:</strong> Proof of legal timber and rattan sustainability recognized globally.\n3. <strong>Phytosanitary Certificate:</strong> Issued by the Indonesian Agricultural Quarantine Agency."
  },
  {
    id: "faq-7",
    category: "pembayaran",
    categoryName: "Payment Terms",
    question: "What payment terms are accepted for international and Malaysian clients?",
    answer: "We support standard international commercial banking methods:\n• <strong>T/T (Telegraphic Transfer):</strong> 40% Deposit upon Purchase Order (PO) confirmation, and 60% balance payment upon surrender of Bill of Lading (B/L) copy and export documents.\n• <strong>Irrevocable L/C at Sight:</strong> Accepted from leading Malaysian and international banks (Maybank, CIMB, Public Bank, RHB, HSBC) for full container loads.\n• <strong>Invoicing Currencies:</strong> USD, EUR, SGD, or IDR equivalent."
  },
  {
    id: "faq-8",
    category: "kemasan",
    categoryName: "Export Protective Packaging",
    question: "How is furniture packaged to prevent mold or damage during ocean transit?",
    answer: "We adhere strictly to our <strong>4-Tier Export Protective Packaging Protocol</strong>:\n1. <em>Controlled Moisture Content:</em> All rattan is kiln-dried to a strict Moisture Content (MC) below 12%.\n2. <em>Foam Sheet & Bubble Wrapping:</em> Complete cushioned wrapping shielding all curved frames from friction.\n3. <em>Corrugated Paper Edge Protectors:</em> Heavy-duty cardboard pads protecting vulnerable corners and chair legs.\n4. <em>5-Ply Master Export Cartons:</em> Heavy double-wall cartons engineered for high container stacking pressure.\n5. <em>Silica Gel Desiccant Bags:</em> Placed inside every box and container wall to absorb maritime humidity, ensuring goods arrive dry and pristine."
  }
];

// Global Client Testimonials (Highlighting Malaysian & International Buyers)
const testimonialsData = [
  {
    name: "Dato' Sri Farhan bin Ismail",
    company: "Nusantara Living Sdn. Bhd.",
    country: "Kuala Lumpur, Malaysia",
    flag: "🇲🇾",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    comment: "We imported 3x 40ft High Cube containers of handcrafted Tegalwangi rattan from Mr. Ridwan for luxury resort villas in Langkawi and boutique hotels in KL. The craftsmanship is world-class, the ATIGA Form D 0% import duty documents were flawless, and the ship arrived at Port Klang in just 4 days!",
    rating: 5
  },
  {
    name: "Puan Noraini Hashim",
    company: "Borneo & Malacca Home Deco",
    country: "Penang, Malaysia",
    flag: "🇲🇾",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    comment: "Mr. Ridwan's Plumbon swing chairs and Kuningan dining sets are best-sellers in our George Town showroom. MAQIS fumigation certificates were completely in order with zero customs friction at Penang Port. Truly our most trusted overseas supplier!",
    rating: 5
  },
  {
    name: "Oliver Weber",
    company: "Nordic Living GmbH",
    country: "Hamburg, Germany",
    flag: "🇩🇪",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    comment: "We import annual 40ft container loads of Cirebon lounge chairs for our retail chain in Germany. The SVLK V-Legal forestry documentation and 5-ply export packaging quality are consistently outstanding.",
    rating: 5
  }
];
