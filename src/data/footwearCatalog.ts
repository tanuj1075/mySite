import { ShoeProduct, SneakerDrop, Order, ExchangeReturnRequest, Coupon, ReviewItem } from '../types';

export const BRANDS = [
  'VANTA ATELIER',
  'NIKE',
  'ADIDAS',
  'NEW BALANCE',
  'PUMA',
  'CONVERSE',
  'VANS',
  'SALOMON',
  'SKECHERS',
  'ASICS',
  'REEBOK',
  'UNDER ARMOUR',
  'HOKA',
  'ADIDAS ORIGINALS',
  'CAMPUS',
  'CROCS',
  'RED TAPE',
  'CLARKS',
];

export const CATEGORIES = [
  'Sneakers',
  'Running',
  'Walking',
  'Football',
  'Basketball',
  'Training',
  'Formal Shoes',
  'Casual Shoes',
  'Sandals',
  'Slippers',
  'Boots',
] as const;

export const GENDERS = ['Men', 'Women', 'Kids', 'Unisex'] as const;

export const COLLECTIONS = [
  'New Drops',
  'Limited Edition',
  'Running Collection',
  'Streetwear',
  'Retro Collection',
  'Premium Sneakers',
  'Trending Now',
];

export const ALL_SIZES = ['5', '6', '7', '8', '9', '10', '11', '12'];

export const INITIAL_PRODUCTS: ShoeProduct[] = [
  {
    "id": "superkicks-9389711786235",
    "mrp": 2744,
    "sku": "SU-HF3263-600-7",
    "use": "Slippers",
    "code": "SUPERKICKS-9389711786235",
    "name": "FRANCHISE SLIDE { VARSITY RED/WHITE-BLACK",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Core Black",
    "price": 2195,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_269aadcf-50c7-4dd6-b231-d703d8ec5385.jpg?v=1786627247",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_aa45029d-1f94-438b-a114-5abce58d29cc.jpg?v=1786627247",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_b1bac4d7-ee46-4b16-a61a-fdd9e7f54fed.jpg?v=1786627247",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_0602132b-3dfc-4ed4-af23-fcdc67628a4b.jpg?v=1786627247",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_f738959c-aee1-4f94-8196-4e8f5851b0f1.jpg?v=1786627248"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.3,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Footwear",
      "Franchise: Jordan Slide",
      "New Arrivals",
      "NO-COD",
      "ship@250"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Jordan",
      "Footwear",
      "Franchise: Jordan Slide",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "ship@250",
      "Slides & Sandals"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Made from robust yet flexible foam, these slides support your every step. A slight curve in the footbed helps keep the fit feeling secure. And with the Jumpman front and center, you can show off your Jordan pride. Synthetic leather forefoot strap helps hold your foot in place. Curved foam footbed feels soft and supportive. Foam outsole helps provide traction.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 117,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_f738959c-aee1-4f94-8196-4e8f5851b0f1.jpg?v=1786627248",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_b1bac4d7-ee46-4b16-a61a-fdd9e7f54fed.jpg?v=1786627247",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_aa45029d-1f94-438b-a114-5abce58d29cc.jpg?v=1786627247",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_269aadcf-50c7-4dd6-b231-d703d8ec5385.jpg?v=1786627247",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_0602132b-3dfc-4ed4-af23-fcdc67628a4b.jpg?v=1786627247"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "HF3263-600-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "HF3263-600-7",
          "size": "7",
          "stock": 4
        },
        {
          "sku": "HF3263-600-8",
          "size": "8",
          "stock": 10
        },
        {
          "sku": "HF3263-600-9",
          "size": "9",
          "stock": 15
        },
        {
          "sku": "HF3263-600-10",
          "size": "10",
          "stock": 12
        },
        {
          "sku": "HF3263-600-11",
          "size": "11",
          "stock": 12
        },
        {
          "sku": "HF3263-600-12",
          "size": "12",
          "stock": 12
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9389711786235",
    "waterResistance": "No",
    "shortDescription": "Made from robust yet flexible foam, these slides support your every step. A slight curve in the footbed helps keep the fit feeling secure. And with the Jumpman front and center, yo",
    "sourceProductUrl": "https://www.superkicks.in/products/jordan-franchise-slide-varsity-red-white-black",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15395451928827",
    "mrp": 9994,
    "sku": "SU-DQ8423-407-3",
    "use": "Sneakers",
    "code": "SUPERKICKS-15395451928827",
    "name": "AIR JORDAN 1 MID { HYDROGEN BLUE/WHITE-ALUMINUM",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Cloud White",
    "price": 7995,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_80c5d80f-8876-4862-8e2f-51709f9b983c.jpg?v=1790598124",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_971b376a-49a0-4678-b4e6-a87f8b5cbead.jpg?v=1790598125",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_e089341b-2e1f-4044-88b9-83c68874fefa.jpg?v=1790598124",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_e2da562e-5603-48fc-a849-884566472a8b.jpg?v=1790598125",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_c06603e9-f5e0-4552-a6ff-328f3392650a.jpg?v=1790598124"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.3,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Classic laces",
      "Cupsole construction",
      "Padded collar"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Jordan",
      "Footwear",
      "Franchise: AIR JORDAN 1",
      "Gender - Women",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "This iteration of the AJ1 reimagines Mike's first signature model with a fresh mix of colors. Premium materials, soft cushioning and a padded ankle collar offer total support and celebrate the shoe that started it all. Premium construction delivers comfort and iconic appeal. Encapsulated Air-Sole unit in the heel gives you soft cushioning. More Details Classic laces Cupsole construction Padded collar",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 128,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_c06603e9-f5e0-4552-a6ff-328f3392650a.jpg?v=1790598124",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_e089341b-2e1f-4044-88b9-83c68874fefa.jpg?v=1790598124",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_971b376a-49a0-4678-b4e6-a87f8b5cbead.jpg?v=1790598125",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_80c5d80f-8876-4862-8e2f-51709f9b983c.jpg?v=1790598124",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_e2da562e-5603-48fc-a849-884566472a8b.jpg?v=1790598125"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "DQ8423-407-3",
          "size": "3",
          "stock": 15
        },
        {
          "sku": "DQ8423-407-4",
          "size": "4",
          "stock": 4
        },
        {
          "sku": "DQ8423-407-5",
          "size": "5",
          "stock": 11
        },
        {
          "sku": "DQ8423-407-6",
          "size": "6",
          "stock": 7
        },
        {
          "sku": "DQ8423-407-6.5",
          "size": "6.5",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15395451928827",
    "waterResistance": "No",
    "shortDescription": "This iteration of the AJ1 reimagines Mike's first signature model with a fresh mix of colors. Premium materials, soft cushioning and a padded ankle collar offer total support and c",
    "sourceProductUrl": "https://www.superkicks.in/products/jordan-air-jordan-1-mid-hydrogen-blue-white-aluminum",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9599239651559",
    "mrp": 3999,
    "sku": "CA-ELAN-13-G-OLIVE-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9599239651559",
    "name": "ELAN-13 Olive",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Olive",
    "price": 2249,
    "sport": "Lifestyle",
    "upper": "Mesh+Pu",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "Olive",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-13OLIVE_04.webp?v=1781867921",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-13OLIVE_03.webp?v=1781867921",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-13OLIVE_01.jpg?v=1781867921",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Infographics-Master-ELAN-13_OLIVEPortrait_adapt_3X4_38661cd1-71dd-4caf-b1f1-a6a0590e8e2b.webp?v=1786005014",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-13OLIVE_02.webp?v=1781867921"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The Campus ELAN-13 Men's Casual Shoes in olive bring a distinctive kind of confidence — subtle yet full of character. The mesh and PU upper create a balanced mix of structure and breathability, while the lycra lining and PU foam die-cut insole ensure comfort stays part of the experience throughout the day. Supported by an EVA midsole and dual-colour TPR outsole, the pair feels lightweight, cushioned, and easy to move in. The olive colourway lends ELAN-13 an earthy, contemporary appeal that stands apart without ever feeling loud. Occasion: Everyday Insole: Eva+Pu Foam Die Cut Upper Material: Mesh+Pu Care Instructions: Gently scrub with a soft cloth or brush using mild soap and cold water, then air dry in the shade. Avoid bleach and harsh cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 108,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-13OLIVE_02.webp?v=1781867921",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-13OLIVE_01.jpg?v=1781867921",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-13OLIVE_03.webp?v=1781867921",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-13OLIVE_04.webp?v=1781867921",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Infographics-Master-ELAN-13_OLIVEPortrait_adapt_3X4_38661cd1-71dd-4caf-b1f1-a6a0590e8e2b.webp?v=1786005014"
    ],
    "sizeInventory": {
      "Olive": [
        {
          "sku": "ELAN-13-G-OLIVE-6",
          "size": "6",
          "stock": 10
        },
        {
          "sku": "ELAN-13-G-OLIVE-7",
          "size": "7",
          "stock": 8
        },
        {
          "sku": "ELAN-13-G-OLIVE-8",
          "size": "8",
          "stock": 8
        },
        {
          "sku": "ELAN-13-G-OLIVE-9",
          "size": "9",
          "stock": 10
        },
        {
          "sku": "ELAN-13-G-OLIVE-10",
          "size": "10",
          "stock": 5
        },
        {
          "sku": "ELAN-13-G-OLIVE-11",
          "size": "11",
          "stock": 10
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 44,
    "sourceProductId": "9599239651559",
    "waterResistance": "No",
    "shortDescription": "The Campus ELAN-13 Men's Casual Shoes in olive bring a distinctive kind of confidence — subtle yet full of character. The mesh and PU upper create a balanced mix of structure and b",
    "sourceProductUrl": "https://campusshoes.com/products/elan-13-olive-mens-formal-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9692007366887",
    "mrp": 1499,
    "sku": "CA-22C-221-C-BLACK-FGRN-5",
    "use": "Running",
    "code": "CAMPUS-9692007366887",
    "name": "SIDEBEAT CH Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 1199,
    "sport": "Running",
    "upper": "Mesh +Pvc+ Printing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SIDEBEATCH_22C-221_BLACK-FGRN_04.webp?v=1788343989",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SIDEBEATCH_22C-221_BLACK-FGRN_03.webp?v=1788343989",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SIDEBEATCH_22C-221_BLACK-FGRN_02.jpg?v=1788343989",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SIDEBEATCH_22C-221_BLACK-FGRN_05.webp?v=1788343989",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SIDEBEATCH_22C-221_BLACK-FGRN_01.webp?v=1788343989"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes",
      "new",
      "payday",
      "sale",
      "shshoes",
      "wyv"
    ],
    "collections": [
      "Running Collection",
      "Sale"
    ],
    "description": "Built For Little Feet With Big Energy. The Campus Sidebeat Ch Kids’ Running Shoes Bring A Sporty Edge To Everyday Movement With A Sleek Black Base And Striking Green Accents. The Mesh And Pvc Upper Keeps Things Light And Comfortable, While The Segmented Eva Sole Gives The Pair Its Bold, Edgy Look Without Weighing Little Feet Down. Inside, The Memory Tech Insole Adds Soft Cushioning For All The Running, Jumping, And Non-Stop Play. Fun, Sporty, And Ready To Keep Up — Sidebeat Ch Is Made For Every Little Adventure. Occasion: Everyday Insole: Memory Tech Upper Material: Mesh +Pvc+ Printing Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 87,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SIDEBEATCH_22C-221_BLACK-FGRN_01.webp?v=1788343989",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SIDEBEATCH_22C-221_BLACK-FGRN_02.jpg?v=1788343989",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SIDEBEATCH_22C-221_BLACK-FGRN_03.webp?v=1788343989",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SIDEBEATCH_22C-221_BLACK-FGRN_04.webp?v=1788343989",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SIDEBEATCH_22C-221_BLACK-FGRN_05.webp?v=1788343989"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "22C-221-C-BLACK-FGRN-2",
          "size": "2",
          "stock": 7
        },
        {
          "sku": "22C-221-C-BLACK-FGRN-3",
          "size": "3",
          "stock": 14
        },
        {
          "sku": "22C-221-C-BLACK-FGRN-4",
          "size": "4",
          "stock": 15
        },
        {
          "sku": "22C-221-C-BLACK-FGRN-5",
          "size": "5",
          "stock": 10
        }
      ]
    },
    "sourceCategory": "Kids Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9692007366887",
    "waterResistance": "No",
    "shortDescription": "Built For Little Feet With Big Energy. The Campus Sidebeat Ch Kids’ Running Shoes Bring A Sporty Edge To Everyday Movement With A Sleek Black Base And Striking Green Accents. The M",
    "sourceProductUrl": "https://campusshoes.com/products/sidebeat-ch-black-f-grn-child-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9619339804903",
    "mrp": 1124,
    "sku": "CA-GC-22175-N-G-OLIVE-BLK-6",
    "use": "Sandals",
    "code": "CAMPUS-9619339804903",
    "name": "GC-22175-N Olive",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Olive",
    "price": 899,
    "sport": "Lifestyle",
    "upper": "Pvc + Lycra + Printing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "Olive",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22175_GC-22175_OLIVE-BLK_04copy.webp?v=1773296226",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22175_GC-22175_OLIVE-BLK_03copy.webp?v=1773296226",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22175_GC-22175_OLIVE-BLK_02.jpg?v=1773296261",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22175_GC-22175_OLIVE-BLK_05copy.webp?v=1773296226",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22175_GC-22175_OLIVE-BLK_01copy.webp?v=1773296261"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.3,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "c&s",
      "cs",
      "emp0",
      "men",
      "men sandals & floaters"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "c&s",
      "cs",
      "emp0",
      "men",
      "men sandals & floaters",
      "men sandals & slippers",
      "mss",
      "payday",
      "s&s",
      "Slippers & Sandals",
      "sss",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Adventure energy — unlocked. Campus GC-22175 Men’s Sandals bring that outdoorsy attitude with a twist. The printed PVC upper gives the design a bold, animated personality, while the lycra lining keeps the strap soft and comfortable on the skin. The EVA footpad cushions your stride for easy movement, and the rugged TPR outsole grips confidently even on the newest terrains. Olive tones add that earthy, travel-ready vibe — perfect for road trips, casual treks, or simply stepping out with style. Occasion: Everyday Insole: Footpad :- Eva Upper Material: Pvc + Lycra + Printing Care Instructions: Gently scrub with a soft cloth or brush using mild soap and cold water, then air dry in the shade. Avoid bleach and harsh cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 136,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22175_GC-22175_OLIVE-BLK_01copy.webp?v=1773296261",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22175_GC-22175_OLIVE-BLK_02.jpg?v=1773296261",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22175_GC-22175_OLIVE-BLK_03copy.webp?v=1773296226",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22175_GC-22175_OLIVE-BLK_04copy.webp?v=1773296226",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22175_GC-22175_OLIVE-BLK_05copy.webp?v=1773296226"
    ],
    "sizeInventory": {
      "Olive": [
        {
          "sku": "GC-22175-N-G-OLIVE-BLK-6",
          "size": "6",
          "stock": 15
        },
        {
          "sku": "GC-22175-N-G-OLIVE-BLK-7",
          "size": "7",
          "stock": 12
        },
        {
          "sku": "GC-22175-N-G-OLIVE-BLK-8",
          "size": "8",
          "stock": 8
        },
        {
          "sku": "GC-22175-N-G-OLIVE-BLK-9",
          "size": "9",
          "stock": 13
        },
        {
          "sku": "GC-22175-N-G-OLIVE-BLK-10",
          "size": "10",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9619339804903",
    "waterResistance": "No",
    "shortDescription": "Adventure energy — unlocked. Campus GC-22175 Men’s Sandals bring that outdoorsy attitude with a twist. The printed PVC upper gives the design a bold, animated personality, while th",
    "sourceProductUrl": "https://campusshoes.com/products/gc-22175-n-olive-blk-mens-sandals",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9702190579943",
    "mrp": 2299,
    "sku": "CA-22G-13499-G-BLK-DGRY-6",
    "use": "Walking",
    "code": "CAMPUS-9702190579943",
    "name": "ATHERO Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 1349,
    "sport": "Walking",
    "upper": "Mesh+Lycra+Raise Printing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_BLK-DGRY_04.webp?v=1788929530",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_BLK-DGRY_03.webp?v=1788929530",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_BLK-DGRY_02.jpg?v=1788929531",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_BLK-DGRY_05.webp?v=1788929530",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_BLK-DGRY_01.webp?v=1788929530"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "men",
      "men shoes",
      "men walking shoes",
      "mss"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "men",
      "men shoes",
      "men walking shoes",
      "mss",
      "new",
      "payday",
      "sale",
      "shoes",
      "topseller"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Campus Athero Men’S Slip-On Walking Shoes In Black/Grey With A Breathable Mesh Upper And Soft Textile Lining. Designed For Everyday Walking And Casual Wear, These Athleisure Shoes Feature Campus Nitrofly Cushioned Insole For Comfort And An Anti Slip Sole Design For Improved Grip. Finished With A Low-Top Profile, Round Closed Toe, Heel Pull Tab And Contrast Overlays; Cemented Construction With Tpr Outsole. Care: Wipe With A Clean, Dry Cloth. Occasion: Everyday Insole: Campus Nitrofly Upper Material: Mesh+Lycra+Raise Printing Technology: Anti Slip Sole Design Care Instructions: Wipe With A Clean, Dry Cloth Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 67,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_BLK-DGRY_01.webp?v=1788929530",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_BLK-DGRY_02.jpg?v=1788929531",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_BLK-DGRY_03.webp?v=1788929530",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_BLK-DGRY_04.webp?v=1788929530",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_BLK-DGRY_05.webp?v=1788929530"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "22G-13499-G-BLK-DGRY-6",
          "size": "6",
          "stock": 13
        },
        {
          "sku": "22G-13499-G-BLK-DGRY-7",
          "size": "7",
          "stock": 13
        },
        {
          "sku": "22G-13499-G-BLK-DGRY-8",
          "size": "8",
          "stock": 13
        },
        {
          "sku": "22G-13499-G-BLK-DGRY-9",
          "size": "9",
          "stock": 4
        },
        {
          "sku": "22G-13499-G-BLK-DGRY-10",
          "size": "10",
          "stock": 13
        }
      ]
    },
    "sourceCategory": "Men Walking Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 41,
    "sourceProductId": "9702190579943",
    "waterResistance": "No",
    "shortDescription": "Campus Athero Men’S Slip-On Walking Shoes In Black/Grey With A Breathable Mesh Upper And Soft Textile Lining. Designed For Everyday Walking And Casual Wear, These Athleisure Shoes ",
    "sourceProductUrl": "https://campusshoes.com/products/athero-blk-d-gry-mens-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9389720568059",
    "mrp": 6244,
    "sku": "SU-555501-004-7",
    "use": "Slippers",
    "code": "SUPERKICKS-9389720568059",
    "name": "HYDRO 5 RETRO  { BLACK/UNIVERSITY BLUE-WHITE",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Core Black",
    "price": 4995,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_5a636edf-42e7-4b40-83cf-35ab80373e8f.jpg?v=1786627381",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_71697f4f-afca-4824-8966-84cde0a01cdc.jpg?v=1786627381",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_e7b20dc7-d5a0-4eb5-8250-5763d5d568eb.jpg?v=1786627382",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_9e85910e-c464-4056-98c3-0f836fa58cdf.jpg?v=1786627381",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_20879466-a08a-4e7e-9aa0-dd158c049fa9.jpg?v=1786627381"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Footwear",
      "Franchise: JORDAN SLIDE",
      "Jordan Footwear",
      "JORDAN-NIKE",
      "New Arrivals"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Jordan",
      "Footwear",
      "Franchise: JORDAN SLIDE",
      "Gender - Men",
      "Jordan Footwear",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD",
      "ship@250",
      "Slides and Sandals",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Inspired by heritage, made for every day. These Jordan slides deliver a cushy footbed and customizable foot strap for extra-cool comfort. Dual-injection foam footbed offers an ultra-cushioned ride. Adjustable midfoot strap lets you customize the fit. Flex grooves on the outsole allow natural motion. Lightweight outsole material is soft yet durable. Lining provides a plush feel on your foot.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 85,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_20879466-a08a-4e7e-9aa0-dd158c049fa9.jpg?v=1786627381",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_e7b20dc7-d5a0-4eb5-8250-5763d5d568eb.jpg?v=1786627382",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_71697f4f-afca-4824-8966-84cde0a01cdc.jpg?v=1786627381",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_5a636edf-42e7-4b40-83cf-35ab80373e8f.jpg?v=1786627381",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_9e85910e-c464-4056-98c3-0f836fa58cdf.jpg?v=1786627381"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "555501-004-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "555501-004-7",
          "size": "7",
          "stock": 4
        },
        {
          "sku": "555501-004-8",
          "size": "8",
          "stock": 0
        },
        {
          "sku": "555501-004-9",
          "size": "9",
          "stock": 15
        },
        {
          "sku": "555501-004-10",
          "size": "10",
          "stock": 0
        },
        {
          "sku": "555501-004-11",
          "size": "11",
          "stock": 5
        },
        {
          "sku": "555501-004-12",
          "size": "12",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9389720568059",
    "waterResistance": "No",
    "shortDescription": "Inspired by heritage, made for every day. These Jordan slides deliver a cushy footbed and customizable foot strap for extra-cool comfort. Dual-injection foam footbed offers an ultr",
    "sourceProductUrl": "https://www.superkicks.in/products/jordan-hydro-5-retro-black-university-blue-white",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15397754208507",
    "mrp": 16249,
    "sku": "SU-1203B081.020-7",
    "use": "Sneakers",
    "code": "SUPERKICKS-15397754208507",
    "name": "GEL-NYC { SMOKE GREY/BLACK",
    "sole": "Not specified",
    "brand": "ASICS",
    "color": "Core Black",
    "price": 12999,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_80965ee0-7655-4b17-90f1-fec3549211aa.jpg?v=1790772488",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_7090d546-94dc-4307-923f-ed1760730a0e.jpg?v=1790772488",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_1_b3bbb703-8e17-43d1-88a2-18a04bfd4bf0.jpg?v=1790772488",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_aadc6373-1446-4cb0-be22-5f37ca3036c6.jpg?v=1790772488",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_6aafbf14-2e6c-4363-96d4-024f073a6482.jpg?v=1790772488"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Footwear",
      "Franchise: GEL-NYC",
      "New Arrivals",
      "NO-COD",
      "Sneakers"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - ASICS",
      "Footwear",
      "Franchise: GEL-NYC",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "The GEL-NYC sneaker sources inspiration from heritage and modern performance running styles. Its upper construction references the GEL-NIMBUS 3 shoe from the early 2000s and blends it with various embellishments from the GEL-MC PLUS V shoe design. The overlays are also updated with patent synthetic leather for a premium finish. The tooling contrasts the upper's retro influences by using the GEL-CUMULUS 16 shoe's tooling system. The sneaker's soft cushioning properties are left intact. It features dual GEL technology inserts, FLUIDRIDE technology, and FLYTEFOAM technology to help provide a comfortable feel underfoot.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 62,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_6aafbf14-2e6c-4363-96d4-024f073a6482.jpg?v=1790772488",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_1_b3bbb703-8e17-43d1-88a2-18a04bfd4bf0.jpg?v=1790772488",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_7090d546-94dc-4307-923f-ed1760730a0e.jpg?v=1790772488",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_80965ee0-7655-4b17-90f1-fec3549211aa.jpg?v=1790772488",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_aadc6373-1446-4cb0-be22-5f37ca3036c6.jpg?v=1790772488"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "1203B081.020-7",
          "size": "7",
          "stock": 10
        },
        {
          "sku": "1203B081.020-8",
          "size": "8",
          "stock": 12
        },
        {
          "sku": "1203B081.020-9",
          "size": "9",
          "stock": 12
        },
        {
          "sku": "1203B081.020-10",
          "size": "10",
          "stock": 9
        },
        {
          "sku": "1203B081.020-11",
          "size": "11",
          "stock": 5
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15397754208507",
    "waterResistance": "No",
    "shortDescription": "The GEL-NYC sneaker sources inspiration from heritage and modern performance running styles. Its upper construction references the GEL-NIMBUS 3 shoe from the early 2000s and blends",
    "sourceProductUrl": "https://www.superkicks.in/products/asics-gel-nyc-smoke-grey-black",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9622660251879",
    "mrp": 3499,
    "sku": "CA-ELAN-28-G-BLACK-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9622660251879",
    "name": "ELAN-28 Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 1949,
    "sport": "Lifestyle",
    "upper": "Pvc Synthetic",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-28BLACK_04.webp?v=1783422573",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-25_BROWN_3X4_6922ac25-a4fe-4b4b-bf8a-57936657969c.webp?v=1785929979",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-28BLACK_01.jpg?v=1783422573",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Infographics-Master-ELAN-28_BLACKPortrait_adapt_3X4_276134dc-8c76-4fa5-8b81-ab49d12775c4.webp?v=1786005293",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-28BLACK_02.webp?v=1783422573"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.9,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The Campus ELAN-28 Men's Derby Shoes prove that dressing well doesn't have to come at the cost of comfort. Designed with a clean semi-formal silhouette, this pair carries a polished presence that's subtly elevated by dotted detailing across the upper—a thoughtful touch that brings character without overpowering the design. Inside, the soft lycra lining keeps the experience comfortable through long days, while the lightweight EVA sole makes every step feel remarkably effortless. Finished in black, ELAN-28 delivers a sharp, understated look that works just as confidently in the boardroom as it does after hours. Occasion: Everyday Insole: Pu Foam-Molded Upper Material: Pvc Synthetic Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 125,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-28BLACK_02.webp?v=1783422573",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-28BLACK_01.jpg?v=1783422573",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-25_BROWN_3X4_6922ac25-a4fe-4b4b-bf8a-57936657969c.webp?v=1785929979",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-28BLACK_04.webp?v=1783422573",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Infographics-Master-ELAN-28_BLACKPortrait_adapt_3X4_276134dc-8c76-4fa5-8b81-ab49d12775c4.webp?v=1786005293"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "ELAN-28-G-BLACK-6",
          "size": "6",
          "stock": 12
        },
        {
          "sku": "ELAN-28-G-BLACK-7",
          "size": "7",
          "stock": 11
        },
        {
          "sku": "ELAN-28-G-BLACK-8",
          "size": "8",
          "stock": 6
        },
        {
          "sku": "ELAN-28-G-BLACK-9",
          "size": "9",
          "stock": 4
        },
        {
          "sku": "ELAN-28-G-BLACK-10",
          "size": "10",
          "stock": 5
        },
        {
          "sku": "ELAN-28-G-BLACK-11",
          "size": "11",
          "stock": 11
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 44,
    "sourceProductId": "9622660251879",
    "waterResistance": "No",
    "shortDescription": "The Campus ELAN-28 Men's Derby Shoes prove that dressing well doesn't have to come at the cost of comfort. Designed with a clean semi-formal silhouette, this pair carries a polishe",
    "sourceProductUrl": "https://campusshoes.com/products/elan-28-black-mens-formal-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9692007104743",
    "mrp": 1374,
    "sku": "CA-22K-120V-K-BLACK-MUSTARD-13",
    "use": "Running",
    "code": "CAMPUS-9692007104743",
    "name": "INFRA-K V Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 1099,
    "sport": "Running",
    "upper": "Mesh+Pvc+Welding+Printing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRA-KV_22K-120V_BLACK-MUSTARD_04.webp?v=1788344882",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRA-KV_22K-120V_BLACK-MUSTARD_03.webp?v=1788344882",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRA-KV_22K-120V_BLACK-MUSTARD_02.jpg?v=1788344882",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRA-KV_22K-120V_BLACK-MUSTARD_05.webp?v=1788344882",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRA-KV_22K-120V_BLACK-MUSTARD_01.webp?v=1788344882"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes",
      "new",
      "payday",
      "sale",
      "shshoes",
      "wyv"
    ],
    "collections": [
      "Running Collection",
      "Sale"
    ],
    "description": "Lil Feet, Big Sporty Energy! The Campus Infra K Kids’ Running Shoes Bring Black And Mustard Together With Shiny Silver Details For A Fun, Energetic Look. The Breathable Mesh Upper Keeps Little Feet Comfortable, While Pvc Overlays At The Heel And Toe Add Structure And A Sporty Finish. The Edgy Eva Sole Keeps Steps Light And Cushioned, While The Memory Tech Lite Insole With Pillofoam Adds Soft Comfort For All That Running, Jumping, And Playing. Ready For Playground Sprints, Park Adventures, And Everything In Between. Occasion: Everyday Insole: Micro Lycra Diecut Upper Material: Mesh+Pvc+Welding+Printing Technology: Pillofoam Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 118,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRA-KV_22K-120V_BLACK-MUSTARD_01.webp?v=1788344882",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRA-KV_22K-120V_BLACK-MUSTARD_02.jpg?v=1788344882",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRA-KV_22K-120V_BLACK-MUSTARD_03.webp?v=1788344882",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRA-KV_22K-120V_BLACK-MUSTARD_04.webp?v=1788344882",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRA-KV_22K-120V_BLACK-MUSTARD_05.webp?v=1788344882"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "22K-120V-K-BLACK-MUSTARD-1",
          "size": "1",
          "stock": 8
        },
        {
          "sku": "22K-120V-K-BLACK-MUSTARD-11",
          "size": "11",
          "stock": 10
        },
        {
          "sku": "22K-120V-K-BLACK-MUSTARD-12",
          "size": "12",
          "stock": 6
        },
        {
          "sku": "22K-120V-K-BLACK-MUSTARD-13",
          "size": "13",
          "stock": 4
        }
      ]
    },
    "sourceCategory": "Kids Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9692007104743",
    "waterResistance": "No",
    "shortDescription": "Lil Feet, Big Sporty Energy! The Campus Infra K Kids’ Running Shoes Bring Black And Mustard Together With Shiny Silver Details For A Fun, Energetic Look. The Breathable Mesh Upper ",
    "sourceProductUrl": "https://campusshoes.com/products/infra-k-v-black-mustard-kids-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9619336921319",
    "mrp": 999,
    "sku": "CA-GC-22101-N-G-BLACK-RED-6",
    "use": "Sandals",
    "code": "CAMPUS-9619336921319",
    "name": "GC-22101-N Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 799,
    "sport": "Lifestyle",
    "upper": "Pvc + Lycra + Printing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_BLACK-RED_04copy.webp?v=1773054668",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_BLACK-RED_03copy.webp?v=1773054667",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_BLACK-RED_02.jpg?v=1773054667",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_BLACK-RED_05copy.webp?v=1773054668",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_BLACK-RED_01copy.webp?v=1773054667"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "c&s",
      "cs",
      "emp0",
      "men",
      "men sandals & floaters"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "c&s",
      "cs",
      "emp0",
      "men",
      "men sandals & floaters",
      "men sandals & slippers",
      "mss",
      "s&s",
      "Slippers & Sandals",
      "sss",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Campus GC-22101 Men’s Sandals in Black — no bluff, just solid comfort that shows up every day. Built with comfort and movement as a priority, these sandals feature a durable PVC upper lined with soft lycra that keeps the fit smooth against the skin. Underfoot, the cushioned EVA footbed keeps every step light and comfortable, while the rugged TPR outsole grips confidently across streets, parks, or busy days on the go. The dual velcro straps let you lock in the fit exactly how you like it — be it by the water, sandy terrains, or cityside hangouts. The all-black look keeps it versatile and ready to go with whatever you have on. Occasion: Everyday Insole: Footpad :- Eva Upper Material: Pvc + Lycra + Printing Technology: 0 Care Instructions: Gently scrub with a soft cloth or brush using mild soap and cold water, then air dry in the shade. Avoid bleach and harsh cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 88,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_BLACK-RED_01copy.webp?v=1773054667",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_BLACK-RED_02.jpg?v=1773054667",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_BLACK-RED_03copy.webp?v=1773054667",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_BLACK-RED_04copy.webp?v=1773054668",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_BLACK-RED_05copy.webp?v=1773054668"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "GC-22101-N-G-BLACK-RED-6",
          "size": "6",
          "stock": 7
        },
        {
          "sku": "GC-22101-N-G-BLACK-RED-7",
          "size": "7",
          "stock": 11
        },
        {
          "sku": "GC-22101-N-G-BLACK-RED-8",
          "size": "8",
          "stock": 4
        },
        {
          "sku": "GC-22101-N-G-BLACK-RED-9",
          "size": "9",
          "stock": 7
        },
        {
          "sku": "GC-22101-N-G-BLACK-RED-10",
          "size": "10",
          "stock": 10
        }
      ]
    },
    "sourceCategory": "Men Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9619336921319",
    "waterResistance": "No",
    "shortDescription": "Campus GC-22101 Men’s Sandals in Black — no bluff, just solid comfort that shows up every day. Built with comfort and movement as a priority, these sandals feature a durable PVC up",
    "sourceProductUrl": "https://campusshoes.com/products/gc-22101-n-black-red-mens-sandals",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9717183348967",
    "mrp": 1999,
    "sku": "CA-22L-1103-L-BLACK-PURPLE-4",
    "use": "Walking",
    "code": "CAMPUS-9717183348967",
    "name": "UNO CW Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 1014,
    "sport": "Walking",
    "upper": "Knit+Welding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_BLACK-PURPLE_04.webp?v=1789473460",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_BLACK-PURPLE_03.webp?v=1789473460",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_BLACK-PURPLE_02.jpg?v=1789473460",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_BLACK-PURPLE_05.webp?v=1789473460",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_BLACK-PURPLE_01.webp?v=1789473460"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.9,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "new",
      "payday",
      "sale",
      "shshoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "new",
      "payday",
      "sale",
      "shshoes",
      "topseller",
      "women",
      "women shoes",
      "women walking shoes",
      "wss"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Step Into Everyday Comfort With These Women’S Slip-On Walking Shoes, Designed In A Breathable Knit Upper With Welded Overlays For A Secure, Modern Athleisure Look. The Nitrofly+ Pillofoam Cushioning With Nitrofly Insole Helps Keep Your Steps Comfortable During Daily Walks, While The Lightweight Eva Outsole Supports Smooth Movement For Casual And Travel Wear. Finished With A Low-Top Profile, Round Toe, Soft Textile Lining, And A Handy Heel Pull Tab For Easy On And Off. Care Is Simple—Just Wipe With A Clean, Dry Cloth. Occasion: Everyday Insole: Nitrofly Insole Upper Material: Knit+Welding Technology: Nitrofly+ Pillofoam Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 79,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_BLACK-PURPLE_01.webp?v=1789473460",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_BLACK-PURPLE_02.jpg?v=1789473460",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_BLACK-PURPLE_03.webp?v=1789473460",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_BLACK-PURPLE_04.webp?v=1789473460",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_BLACK-PURPLE_05.webp?v=1789473460"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "22L-1103-L-BLACK-PURPLE-4",
          "size": "4",
          "stock": 5
        },
        {
          "sku": "22L-1103-L-BLACK-PURPLE-5",
          "size": "5",
          "stock": 5
        },
        {
          "sku": "22L-1103-L-BLACK-PURPLE-6",
          "size": "6",
          "stock": 5
        },
        {
          "sku": "22L-1103-L-BLACK-PURPLE-7",
          "size": "7",
          "stock": 8
        },
        {
          "sku": "22L-1103-L-BLACK-PURPLE-8",
          "size": "8",
          "stock": 13
        }
      ]
    },
    "sourceCategory": "Women Walking Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 49,
    "sourceProductId": "9717183348967",
    "waterResistance": "No",
    "shortDescription": "Step Into Everyday Comfort With These Women’S Slip-On Walking Shoes, Designed In A Breathable Knit Upper With Welded Overlays For A Secure, Modern Athleisure Look. The Nitrofly+ Pi",
    "sourceProductUrl": "https://campusshoes.com/products/uno-cw-black-purple-womens-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9379243032827",
    "mrp": 8749,
    "sku": "SU-40719701-7",
    "use": "Slippers",
    "code": "SUPERKICKS-9379243032827",
    "name": "PUMA X HYROX NITROCAT SLIDES {  INTENSE MINT-LIGHT LAVENDER-PUMA BLACK",
    "sole": "Not specified",
    "brand": "PUMA",
    "color": "Core Black",
    "price": 6999,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_4cb88aa8-b9ee-4a0b-a1e3-1e692b4e5712.jpg?v=1786108272",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_22865437-31cf-41b1-b9b7-adf4ded94304.jpg?v=1786108272",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_70b195ee-ea93-4e64-877f-0465fb737eb9.jpg?v=1786108272",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_ae24a200-0dd5-4c09-862d-818117d8d6a8.jpg?v=1786108272",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_fbd5df57-3132-4be9-b9ad-4c81ccc29bd1.jpg?v=1786108272"
        }
      }
    ],
    "gender": "Unisex",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "collab room",
      "Footwear",
      "Franchise: PUMA SLIDE",
      "New Arrivals",
      "NO-COD"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Puma",
      "collab room",
      "Footwear",
      "Franchise: PUMA SLIDE",
      "New Arrivals",
      "NO-COD",
      "Product Style: Slides & Clogs",
      "Season: FW26",
      "ship@250",
      "Slides and Sandals",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "PUMA x HYROX delivers high-performance designs specifically curated for the ultimate fitness race. These slides take that same performance edge into recovery mode with plush NITROFOAM™ cushioning and a thick midsole.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 63,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_fbd5df57-3132-4be9-b9ad-4c81ccc29bd1.jpg?v=1786108272",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_70b195ee-ea93-4e64-877f-0465fb737eb9.jpg?v=1786108272",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_22865437-31cf-41b1-b9b7-adf4ded94304.jpg?v=1786108272",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_4cb88aa8-b9ee-4a0b-a1e3-1e692b4e5712.jpg?v=1786108272",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_ae24a200-0dd5-4c09-862d-818117d8d6a8.jpg?v=1786108272"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "40719701-7",
          "size": "7",
          "stock": 12
        },
        {
          "sku": "40719701-8",
          "size": "8",
          "stock": 15
        },
        {
          "sku": "40719701-9",
          "size": "9",
          "stock": 6
        },
        {
          "sku": "40719701-10",
          "size": "10",
          "stock": 6
        },
        {
          "sku": "40719701-11",
          "size": "11",
          "stock": 8
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9379243032827",
    "waterResistance": "No",
    "shortDescription": "PUMA x HYROX delivers high-performance designs specifically curated for the ultimate fitness race. These slides take that same performance edge into recovery mode with plush NITROF",
    "sourceProductUrl": "https://www.superkicks.in/products/puma-puma-x-hyrox-nitrocat-slides-intense-mint-light-lavender-puma-black",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15397760270587",
    "mrp": 16249,
    "sku": "SU-1203B081.103-7",
    "use": "Sneakers",
    "code": "SUPERKICKS-15397760270587",
    "name": "GEL-NYC { CREAM/ANTIQUE RED",
    "sole": "Not specified",
    "brand": "ASICS",
    "color": "Crimson Red",
    "price": 12999,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#dc2626",
        "name": "Crimson Red",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_88957061-6127-4a71-b783-2d9aeda4733f.jpg?v=1790771394",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_ccc5cd2d-16ca-4d00-a6e6-2ef79d040eef.jpg?v=1790771395",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_4528ebd3-90b9-4f1a-844e-f3b52a96acec.jpg?v=1790771395",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_cf430646-298b-413a-aef9-bf8721b748a1.jpg?v=1790771394",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_43387c28-ba92-4b3b-bc52-efa01bf40b07.jpg?v=1790771395"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Footwear",
      "Franchise: GEL-NYC",
      "New Arrivals",
      "NO-COD",
      "Sneakers"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - ASICS",
      "Footwear",
      "Franchise: GEL-NYC",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "The GEL-NYC sneaker sources inspiration from heritage and modern performance running styles. Its upper construction references the GEL-NIMBUS 3 shoe from the early 2000s and blends it with various embellishments from the GEL-MC PLUS V shoe design. The overlays are also updated with patent synthetic leather for a premium finish. The tooling contrasts the upper's retro influences by using the GEL-CUMULUS 16 shoe's tooling system. The sneaker's soft cushioning properties are left intact. It features dual GEL technology inserts, FLUIDRIDE technology, and FLYTEFOAM technology to help provide a comfortable feel underfoot.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 122,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_43387c28-ba92-4b3b-bc52-efa01bf40b07.jpg?v=1790771395",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_4528ebd3-90b9-4f1a-844e-f3b52a96acec.jpg?v=1790771395",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_ccc5cd2d-16ca-4d00-a6e6-2ef79d040eef.jpg?v=1790771395",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_88957061-6127-4a71-b783-2d9aeda4733f.jpg?v=1790771394",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_cf430646-298b-413a-aef9-bf8721b748a1.jpg?v=1790771394"
    ],
    "sizeInventory": {
      "Crimson Red": [
        {
          "sku": "1203B081.103-7",
          "size": "7",
          "stock": 12
        },
        {
          "sku": "1203B081.103-8",
          "size": "8",
          "stock": 15
        },
        {
          "sku": "1203B081.103-9",
          "size": "9",
          "stock": 4
        },
        {
          "sku": "1203B081.103-10",
          "size": "10",
          "stock": 9
        },
        {
          "sku": "1203B081.103-11",
          "size": "11",
          "stock": 6
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15397760270587",
    "waterResistance": "No",
    "shortDescription": "The GEL-NYC sneaker sources inspiration from heritage and modern performance running styles. Its upper construction references the GEL-NIMBUS 3 shoe from the early 2000s and blends",
    "sourceProductUrl": "https://www.superkicks.in/products/asics-gel-nyc-cream-antique-red",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9622660284647",
    "mrp": 3499,
    "sku": "CA-ELAN-03-G-BLK-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9622660284647",
    "name": "ELAN-03 Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 1849,
    "sport": "Lifestyle",
    "upper": "Pu Suede",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-03BLACK_04.webp?v=1783422477",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-03_BLACK_3X4_44b4e83e-6bf7-4d0f-862e-281b51110df9.webp?v=1785928969",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-03BLACK_01.jpg?v=1783422477",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Infographics-Master-ELAN-03_BLACKPortrait_adapt_3X4_48af08ff-8696-4fb3-8ca0-f6dcd127fecc.webp?v=1786001615",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-03BLACK_02.webp?v=1783422477"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "loafers",
      "men"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "loafers",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "There's a reason black suede never goes out of style. Rich in texture yet remarkably understated, it carries a depth that the Campus ELAN-03 Men's Loafers capture through a clean, sleek silhouette designed to fit effortlessly into your wardrobe. The PU suede upper brings a refined tactile finish, while the soft lycra lining and lightweight EVA sole ensure the experience feels every bit as effortless as the styling itself. The result is a loafer that looks quietly luxurious, feels remarkably easy to wear, and never competes for attention—it simply earns it. Occasion: Everyday Insole: Pu Foam-Molded Upper Material: Pu Suede Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 101,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-03BLACK_02.webp?v=1783422477",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-03BLACK_01.jpg?v=1783422477",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-03_BLACK_3X4_44b4e83e-6bf7-4d0f-862e-281b51110df9.webp?v=1785928969",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-03BLACK_04.webp?v=1783422477",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Infographics-Master-ELAN-03_BLACKPortrait_adapt_3X4_48af08ff-8696-4fb3-8ca0-f6dcd127fecc.webp?v=1786001615"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "ELAN-03-G-BLK-6",
          "size": "6",
          "stock": 8
        },
        {
          "sku": "ELAN-03-G-BLK-7",
          "size": "7",
          "stock": 14
        },
        {
          "sku": "ELAN-03-G-BLK-8",
          "size": "8",
          "stock": 7
        },
        {
          "sku": "ELAN-03-G-BLK-9",
          "size": "9",
          "stock": 12
        },
        {
          "sku": "ELAN-03-G-BLK-10",
          "size": "10",
          "stock": 15
        },
        {
          "sku": "ELAN-03-G-BLK-11",
          "size": "11",
          "stock": 7
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 47,
    "sourceProductId": "9622660284647",
    "waterResistance": "No",
    "shortDescription": "There's a reason black suede never goes out of style. Rich in texture yet remarkably understated, it carries a depth that the Campus ELAN-03 Men's Loafers capture through a clean, ",
    "sourceProductUrl": "https://campusshoes.com/products/elan-03-blk-mens-loafers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9692007039207",
    "mrp": 1499,
    "sku": "CA-22C-222-C-WHITE-PEACH-5",
    "use": "Running",
    "code": "CAMPUS-9692007039207",
    "name": "INFRA CH White",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cloud White",
    "price": 1199,
    "sport": "Running",
    "upper": "Mesh+Pvc+Welding+Printing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_WHITE-PEACH_04.webp?v=1788344934",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_WHITE-PEACH_03.webp?v=1788344934",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_WHITE-PEACH_02.jpg?v=1788344935",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_WHITE-PEACH_05.webp?v=1788344934",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_WHITE-PEACH_01.webp?v=1788344934"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes",
      "new",
      "payday",
      "sale",
      "shshoes",
      "wyv"
    ],
    "collections": [
      "Running Collection",
      "Sale"
    ],
    "description": "Clean, Sporty, With Just The Right Pop Of Colour. The Campus Infra Ch Kids’ Running Shoes Pair A Crisp White Base With Navy And Peach Accents For A Fresh Look That Works With Pretty Much Everything. The Mesh Upper Keeps The Fit Light And Breathable, While Pvc Overlays At The Heel And Toe Add Structure And A Sharp Sporty Edge. The Edgy Eva Sole Keeps Movement Cushioned And Easy, While The Memory Tech Lite Insole With Pillofoam Brings Soft Comfort Underfoot. A Solid Pick For Active Days When Staying Comfortable Is Non-Negotiable. Occasion: Everyday Insole: Memory Tech Lite Upper Material: Mesh+Pvc+Welding+Printing Technology: Pillofoam Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 112,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_WHITE-PEACH_01.webp?v=1788344934",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_WHITE-PEACH_02.jpg?v=1788344935",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_WHITE-PEACH_03.webp?v=1788344934",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_WHITE-PEACH_04.webp?v=1788344934",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_WHITE-PEACH_05.webp?v=1788344934"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "22C-222-C-WHITE-PEACH-2",
          "size": "2",
          "stock": 9
        },
        {
          "sku": "22C-222-C-WHITE-PEACH-3",
          "size": "3",
          "stock": 7
        },
        {
          "sku": "22C-222-C-WHITE-PEACH-4",
          "size": "4",
          "stock": 6
        },
        {
          "sku": "22C-222-C-WHITE-PEACH-5",
          "size": "5",
          "stock": 12
        }
      ]
    },
    "sourceCategory": "Kids Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9692007039207",
    "waterResistance": "No",
    "shortDescription": "Clean, Sporty, With Just The Right Pop Of Colour. The Campus Infra Ch Kids’ Running Shoes Pair A Crisp White Base With Navy And Peach Accents For A Fresh Look That Works With Prett",
    "sourceProductUrl": "https://campusshoes.com/products/infra-ch-white-peach-child-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9681237737703",
    "mrp": 1374,
    "sku": "CA-GC-22182L-L-MAUVE-PEACH-5",
    "use": "Sandals",
    "code": "CAMPUS-9681237737703",
    "name": "GC-22182L Mauve",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Mauve",
    "price": 1099,
    "sport": "Lifestyle",
    "upper": "Knit Vamp + Welding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "Mauve",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_MAUVE-PEACH_04.webp?v=1787554898",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_MAUVE-PEACH_03.webp?v=1787554898",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_MAUVE-PEACH_02.jpg?v=1787554898",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_MAUVE-PEACH_05.webp?v=1787554898",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_MAUVE-PEACH_01.webp?v=1787554898"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "c&s",
      "cs",
      "emp0",
      "payday",
      "s&s"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "c&s",
      "cs",
      "emp0",
      "payday",
      "s&s",
      "Slippers & Sandals",
      "sss",
      "Women",
      "Women Sandals & Floaters",
      "women sandals & slippers",
      "wss"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Add A Playful Pop To Your Everyday Style With The Campus Gc-22182L Women’S Sandals. The Mauve And Peach Combination Brings Together Soft, Fun Tones That Instantly Brighten Up Your Look. The Knitted Upper Feels Soft And Comfortable Around Your Feet, So You Can Keep Moving With Ease. The Lightweight Eva Sole Adds Cushioned Comfort Under Every Step, While The Slip-On Design Makes Them Super Easy To Wear. From Morning Errands To Casual Meet-Ups, These Sandals Are Ready To Go Wherever Your Day Takes You. Occasion: Everyday Insole: Footpad :- Eva Upper Material: Knit Vamp + Welding Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 41,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_MAUVE-PEACH_01.webp?v=1787554898",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_MAUVE-PEACH_02.jpg?v=1787554898",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_MAUVE-PEACH_03.webp?v=1787554898",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_MAUVE-PEACH_04.webp?v=1787554898",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_MAUVE-PEACH_05.webp?v=1787554898"
    ],
    "sizeInventory": {
      "Mauve": [
        {
          "sku": "GC-22182L-L-MAUVE-PEACH-4",
          "size": "4",
          "stock": 0
        },
        {
          "sku": "GC-22182L-L-MAUVE-PEACH-5",
          "size": "5",
          "stock": 4
        },
        {
          "sku": "GC-22182L-L-MAUVE-PEACH-6",
          "size": "6",
          "stock": 15
        },
        {
          "sku": "GC-22182L-L-MAUVE-PEACH-7",
          "size": "7",
          "stock": 8
        },
        {
          "sku": "GC-22182L-L-MAUVE-PEACH-8",
          "size": "8",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Women Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9681237737703",
    "waterResistance": "No",
    "shortDescription": "Add A Playful Pop To Your Everyday Style With The Campus Gc-22182L Women’S Sandals. The Mauve And Peach Combination Brings Together Soft, Fun Tones That Instantly Brighten Up Your ",
    "sourceProductUrl": "https://campusshoes.com/products/gc-22182l-mauve-peach-womens-sandal",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9717183283431",
    "mrp": 1999,
    "sku": "CA-22L-1103-L-ARAGON-SEEDPEARL-4",
    "use": "Walking",
    "code": "CAMPUS-9717183283431",
    "name": "UNO CW Red",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Crimson Red",
    "price": 1014,
    "sport": "Walking",
    "upper": "Knit+Welding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#dc2626",
        "name": "Crimson Red",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_ARAGON-SEEDPEARL_04.webp?v=1789473518",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_ARAGON-SEEDPEARL_03.webp?v=1789473518",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_ARAGON-SEEDPEARL_02.jpg?v=1789473519",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_ARAGON-SEEDPEARL_05.webp?v=1789473518",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_ARAGON-SEEDPEARL_01.webp?v=1789473518"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "new",
      "payday",
      "sale",
      "shshoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "new",
      "payday",
      "sale",
      "shshoes",
      "topseller",
      "women",
      "women shoes",
      "women walking shoes",
      "wss"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Step Into Everyday Comfort With These Women’S Slip-On Knit Walking Shoes, Designed For Easy Wear And All-Day Ease. The Knitted Upper With Welded Overlays Feels Breathable And Flexible, While The Nitrofly+ Pillofoam Cushioning And Nitrofly Insole Add Plush Comfort For Walking. A Lightweight Eva Outsole Supports Smooth Daily Movement, And The Low-Top, Closed-Toe Slip-On Build With A Heel Pull Tab Makes Them Quick To Wear. Finished With A Soft Textile Lining And A Wedge-Style Platform Sole, They Pair Effortlessly With Athleisure Looks For Casual Outings And Travel. Care Is Simple—Wipe With A Clean, Dry Cloth. Occasion: Everyday Insole: Nitrofly Insole Upper Material: Knit+Welding Technology: Nitrofly+ Pillofoam Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 79,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_ARAGON-SEEDPEARL_01.webp?v=1789473518",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_ARAGON-SEEDPEARL_02.jpg?v=1789473519",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_ARAGON-SEEDPEARL_03.webp?v=1789473518",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_ARAGON-SEEDPEARL_04.webp?v=1789473518",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/UNOCW_22L-1103_ARAGON-SEEDPEARL_05.webp?v=1789473518"
    ],
    "sizeInventory": {
      "Crimson Red": [
        {
          "sku": "22L-1103-L-ARAGON-SEEDPEARL-4",
          "size": "4",
          "stock": 14
        },
        {
          "sku": "22L-1103-L-ARAGON-SEEDPEARL-5",
          "size": "5",
          "stock": 7
        },
        {
          "sku": "22L-1103-L-ARAGON-SEEDPEARL-6",
          "size": "6",
          "stock": 5
        },
        {
          "sku": "22L-1103-L-ARAGON-SEEDPEARL-7",
          "size": "7",
          "stock": 9
        },
        {
          "sku": "22L-1103-L-ARAGON-SEEDPEARL-8",
          "size": "8",
          "stock": 11
        }
      ]
    },
    "sourceCategory": "Women Walking Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 49,
    "sourceProductId": "9717183283431",
    "waterResistance": "No",
    "shortDescription": "Step Into Everyday Comfort With These Women’S Slip-On Knit Walking Shoes, Designed For Easy Wear And All-Day Ease. The Knitted Upper With Welded Overlays Feels Breathable And Flexi",
    "sourceProductUrl": "https://campusshoes.com/products/uno-cw-aragon-seed-pearl-womens-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9387556274427",
    "mrp": 2744,
    "sku": "SU-HQ2163-001-7",
    "use": "Slippers",
    "code": "SUPERKICKS-9387556274427",
    "name": "FRANCHISE SLIDE { BLACK/WHITE",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Core Black",
    "price": 2195,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_8f0a9c62-c4eb-4e83-9d12-89e0f27850f5.jpg?v=1786601218",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_beb77456-cb08-4ed4-a02b-e128891132e4.jpg?v=1786601218",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_ebeaedf1-43e5-4375-8da5-cc7fcba7a42e.jpg?v=1786601218",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_66dd37ed-6f9a-4e18-bd2d-fce272cec51a.jpg?v=1786601218",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_6e524965-f53d-4914-b36e-327640e3fc38.jpg?v=1786601218"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Footwear",
      "Franchise: Jordan Slide",
      "New Arrivals",
      "NO-COD",
      "ship@250"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Jordan",
      "Footwear",
      "Franchise: Jordan Slide",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "ship@250",
      "Slides & Sandals"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Keep every step supported—even in the shower. Made from a single piece of robust yet flexible foam, these quick-drying shower slides have drainage holes throughout the outsole. A raised elephant print helps add traction to the footbed while giving you heritage Jordan style. Curved foam footbed feels soft and supportive. Herringbone tread pattern on foam outsole helps add traction. More Details Jumpman branding",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 79,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_6e524965-f53d-4914-b36e-327640e3fc38.jpg?v=1786601218",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_ebeaedf1-43e5-4375-8da5-cc7fcba7a42e.jpg?v=1786601218",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_beb77456-cb08-4ed4-a02b-e128891132e4.jpg?v=1786601218",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_8f0a9c62-c4eb-4e83-9d12-89e0f27850f5.jpg?v=1786601218",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_66dd37ed-6f9a-4e18-bd2d-fce272cec51a.jpg?v=1786601218"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "HQ2163-001-7",
          "size": "7",
          "stock": 15
        },
        {
          "sku": "HQ2163-001-8",
          "size": "8",
          "stock": 5
        },
        {
          "sku": "HQ2163-001-9",
          "size": "9",
          "stock": 15
        },
        {
          "sku": "HQ2163-001-10",
          "size": "10",
          "stock": 9
        },
        {
          "sku": "HQ2163-001-11",
          "size": "11",
          "stock": 9
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9387556274427",
    "waterResistance": "No",
    "shortDescription": "Keep every step supported—even in the shower. Made from a single piece of robust yet flexible foam, these quick-drying shower slides have drainage holes throughout the outsole. A r",
    "sourceProductUrl": "https://www.superkicks.in/products/jordan-franchise-slide-black-white",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15396588323067",
    "mrp": 16249,
    "sku": "SU-HP4525-7",
    "use": "Sneakers",
    "code": "SUPERKICKS-15396588323067",
    "name": "SAMBA OG MERCEDES AMG PETRONAS F1 TEAM  { MAGIC BEIGE/MAGIC BEIGE/SILVER METALLIC",
    "sole": "Not specified",
    "brand": "ADIDAS",
    "color": "Concrete Grey",
    "price": 12999,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#8a8885",
        "name": "Concrete Grey",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_25d88e4e-53b5-4c2d-9449-55cb06910d8e.jpg?v=1790684678",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_ee84d47a-a911-4703-b011-b45f498a4fc0.jpg?v=1790684678",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_ab3e24b7-e385-45a3-a5b7-5fd101c592d5.jpg?v=1790684679",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/29_9751c28e-c97a-44ce-bf21-b4201d68fe64.jpg?v=1790684678",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_fa6500e6-31c5-4fe9-8bc4-f4c413ec9dd8.jpg?v=1790684678"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Coming Soon",
      "Enddate__20 October 2026 23:59",
      "Footwear",
      "Franchise: SAMBA OG",
      "New Arrivals"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Adidas",
      "Brand - Adidas Originals",
      "Coming Soon",
      "Enddate__20 October 2026 23:59",
      "Footwear",
      "Franchise: SAMBA OG",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers",
      "Startdate__13 October 2026 00:01"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "The Samba OG Mercedes AMG Petronas F1 Team Shoes from adidas Originals bring together an iconic football silhouette and modern motorsport influence in a design that connects heritage sport style with the passion of Formula 1. A premium leather upper delivers a classic look with a comfortable feel, while the leather lining adds a smooth finish. Underfoot, a tough rubber outsole provides durable grip for everyday wear. Finished with Mercedes AMG Petronas F1 Team detailing and iconic adidas branding, including striking serrated 3-Stripes on the side, it brings race-track energy to a standout, street-ready edge.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 111,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_fa6500e6-31c5-4fe9-8bc4-f4c413ec9dd8.jpg?v=1790684678",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_ab3e24b7-e385-45a3-a5b7-5fd101c592d5.jpg?v=1790684679",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_ee84d47a-a911-4703-b011-b45f498a4fc0.jpg?v=1790684678",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_25d88e4e-53b5-4c2d-9449-55cb06910d8e.jpg?v=1790684678",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/29_9751c28e-c97a-44ce-bf21-b4201d68fe64.jpg?v=1790684678"
    ],
    "sizeInventory": {
      "Concrete Grey": [
        {
          "sku": "HP4525-7",
          "size": "7",
          "stock": 13
        },
        {
          "sku": "HP4525-8",
          "size": "8",
          "stock": 10
        },
        {
          "sku": "HP4525-9",
          "size": "9",
          "stock": 14
        },
        {
          "sku": "HP4525-10",
          "size": "10",
          "stock": 13
        },
        {
          "sku": "HP4525-11",
          "size": "11",
          "stock": 14
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15396588323067",
    "waterResistance": "No",
    "shortDescription": "The Samba OG Mercedes AMG Petronas F1 Team Shoes from adidas Originals bring together an iconic football silhouette and modern motorsport influence in a design that connects herita",
    "sourceProductUrl": "https://www.superkicks.in/products/adidas-originals-samba-og-mercedes-amg-petronas-f1-team-magic-beige-magic-beige-silver-metallic",
    "inventoryCountsAreExact": false
  },
  {
    "id": "clarks-15299438412147",
    "mrp": 14374,
    "sku": "CL-147-1638-23-7",
    "use": "Boots",
    "code": "CLARKS-15299438412147",
    "name": "Jaxen Easy Tan Boots",
    "sole": "Not specified",
    "brand": "CLARKS",
    "color": "Cognac Tan",
    "price": 11499,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1638-23-5.jpg?v=1774420214",
          "back": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1638-23-4.jpg?v=1774420214",
          "side": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1638-23-2.jpg?v=1774420214",
          "sole": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1638-23-6.jpg?v=1774420214",
          "front": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1638-23-3_6d0ad220-6a77-466a-9443-6bfff3767e85.jpg?v=1774420214"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Boots",
    "features": [
      "Boots",
      "Coming_Soon_Mens_SS2026",
      "Country of origin: India",
      "Footwear",
      "Jaxen"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Boots",
      "Coming_Soon_Mens_SS2026",
      "Country of origin: India",
      "Footwear",
      "Jaxen",
      "Jaxen Easy Easy",
      "Leather",
      "Men",
      "Mens black and brown collection",
      "New",
      "New Arrival",
      "None",
      "RAIN",
      "Slip on",
      "SS2026",
      "TAN",
      "zero_inv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Boots are back in a big way! Our Jaxen Easy ankle boot combines a classic silhouette with comfort to tackle the day head-on. Crafted from premium leather that's equally soft and hard-wearing, it comes together with a stack-effect heel and a super-grippy sole. Paying tribute to Clarks quality craftsmanship, subtle branding and heritage stitching complete each pair perfectly. • Premium tan leather upper • Elastic panel and heel loop offer easy on/off • Lightweight and flexible rubber outsole",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CLARKS",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 32,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1638-23-3_6d0ad220-6a77-466a-9443-6bfff3767e85.jpg?v=1774420214",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1638-23-2.jpg?v=1774420214",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1638-23-4.jpg?v=1774420214",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1638-23-5.jpg?v=1774420214",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1638-23-6.jpg?v=1774420214"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "147-1638-23-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "147-1638-23-7",
          "size": "7",
          "stock": 13
        },
        {
          "sku": "147-1638-23-8",
          "size": "8",
          "stock": 0
        },
        {
          "sku": "147-1638-23-9",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "147-1638-23-10",
          "size": "10",
          "stock": 0
        },
        {
          "sku": "147-1638-23-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Boots",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15299438412147",
    "waterResistance": "Water Repellent",
    "shortDescription": "Boots are back in a big way! Our Jaxen Easy ankle boot combines a classic silhouette with comfort to tackle the day head-on. Crafted from premium leather that's equally soft and ha",
    "sourceProductUrl": "https://clarks.in/products/clarks-men-jaxen-easy-tan-boots",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9622660317415",
    "mrp": 3499,
    "sku": "CA-ELAN-09-G-BLK-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9622660317415",
    "name": "ELAN-09 Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 1949,
    "sport": "Lifestyle",
    "upper": "Pu",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_BLK_04.webp?v=1783422261",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_BLK_03.webp?v=1783422261",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_BLK_01.jpg?v=1783422261",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_BLK_05.webp?v=1783422261",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_BLK_02.webp?v=1783422261"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Campus ELAN-09 Men's Casual Shoes are built around a silhouette that's clean, confident, and remarkably easy to wear. The refined PU upper creates a sleek finish, while the dual-colour TPR sole introduces just enough contrast to add visual interest without disturbing the minimalist design. Inside, the soft lycra lining keeps comfort effortless through long hours, making ELAN-09 feel as good as it looks. Then comes black — the one colour that has a way of making everything else look more intentional. Versatile, polished, and always appropriate, it's the kind of pair that quietly elevates your wardrobe. Occasion: Everyday Insole: Eva+Pu Foam Die Cut Upper Material: Pu Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 100,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_BLK_02.webp?v=1783422261",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_BLK_01.jpg?v=1783422261",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_BLK_03.webp?v=1783422261",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_BLK_04.webp?v=1783422261",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_BLK_05.webp?v=1783422261"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "ELAN-09-G-BLK-6",
          "size": "6",
          "stock": 13
        },
        {
          "sku": "ELAN-09-G-BLK-7",
          "size": "7",
          "stock": 7
        },
        {
          "sku": "ELAN-09-G-BLK-8",
          "size": "8",
          "stock": 8
        },
        {
          "sku": "ELAN-09-G-BLK-9",
          "size": "9",
          "stock": 15
        },
        {
          "sku": "ELAN-09-G-BLK-10",
          "size": "10",
          "stock": 12
        },
        {
          "sku": "ELAN-09-G-BLK-11",
          "size": "11",
          "stock": 8
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 44,
    "sourceProductId": "9622660317415",
    "waterResistance": "No",
    "shortDescription": "Campus ELAN-09 Men's Casual Shoes are built around a silhouette that's clean, confident, and remarkably easy to wear. The refined PU upper creates a sleek finish, while the dual-co",
    "sourceProductUrl": "https://campusshoes.com/products/elan-09-blk-mens-formal-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9692007006439",
    "mrp": 1499,
    "sku": "CA-22C-222-C-BLACK-MUSTARD-5",
    "use": "Running",
    "code": "CAMPUS-9692007006439",
    "name": "INFRA CH Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 1199,
    "sport": "Running",
    "upper": "Mesh+Pvc+Welding+Printing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_BLACK-MUSTARD_04.webp?v=1788345085",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_BLACK-MUSTARD_03.webp?v=1788345085",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_BLACK-MUSTARD_02.jpg?v=1788345085",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_BLACK-MUSTARD_05.webp?v=1788345085",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_BLACK-MUSTARD_01.webp?v=1788345085"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes",
      "new",
      "payday",
      "sale",
      "shshoes",
      "wyv"
    ],
    "collections": [
      "Running Collection",
      "Sale"
    ],
    "description": "Sporty With A Little Extra Attitude. The Campus Infra Ch Kids’ Running Shoes Bring Together A Sleek Black Base, Bold Mustard Accents, And Silver Details For A Look That Stands Out. The Breathable Mesh Upper Keeps Things Light And Comfortable, While Pvc Overlays At The Heel And Toe Add Structure And A Sporty Finish. Underfoot, The Edgy Eva Sole Gives Every Step A Cushioned, Easy Feel, While The Memory Tech Lite Insole And Pillofoam Add An Extra Layer Of Comfort. From Birthday Parties To Weekend Plans And Everything In Between, Infra Ch Is Ready To Keep Up. Occasion: Everyday Insole: Memory Tech Lite Upper Material: Mesh+Pvc+Welding+Printing Technology: Pillofoam Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 128,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_BLACK-MUSTARD_01.webp?v=1788345085",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_BLACK-MUSTARD_02.jpg?v=1788345085",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_BLACK-MUSTARD_03.webp?v=1788345085",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_BLACK-MUSTARD_04.webp?v=1788345085",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/INFRACH_22C-222_BLACK-MUSTARD_05.webp?v=1788345085"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "22C-222-C-BLACK-MUSTARD-2",
          "size": "2",
          "stock": 15
        },
        {
          "sku": "22C-222-C-BLACK-MUSTARD-3",
          "size": "3",
          "stock": 14
        },
        {
          "sku": "22C-222-C-BLACK-MUSTARD-4",
          "size": "4",
          "stock": 14
        },
        {
          "sku": "22C-222-C-BLACK-MUSTARD-5",
          "size": "5",
          "stock": 15
        }
      ]
    },
    "sourceCategory": "Kids Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9692007006439",
    "waterResistance": "No",
    "shortDescription": "Sporty With A Little Extra Attitude. The Campus Infra Ch Kids’ Running Shoes Bring Together A Sleek Black Base, Bold Mustard Accents, And Silver Details For A Look That Stands Out.",
    "sourceProductUrl": "https://campusshoes.com/products/infra-ch-black-mustard-child-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9681237704935",
    "mrp": 1374,
    "sku": "CA-GC-22182L-L-FROSTYGREEN-IVORY-4",
    "use": "Sandals",
    "code": "CAMPUS-9681237704935",
    "name": "GC-22182L Green",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Olive Green",
    "price": 1099,
    "sport": "Lifestyle",
    "upper": "Knit Vamp + Welding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#15803d",
        "name": "Olive Green",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_FROSTYGREEN-IVORY_04.webp?v=1787554977",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_FROSTYGREEN-IVORY_03.webp?v=1787554977",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_FROSTYGREEN-IVORY_02.jpg?v=1787554977",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_FROSTYGREEN-IVORY_05.webp?v=1787554976",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_FROSTYGREEN-IVORY_01.webp?v=1787554977"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "c&s",
      "cs",
      "emp0",
      "payday",
      "s&s"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "c&s",
      "cs",
      "emp0",
      "payday",
      "s&s",
      "Slippers & Sandals",
      "sss",
      "Women",
      "Women Sandals & Floaters",
      "women sandals & slippers",
      "wss"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Freshen Up Your Everyday Look With The Campus Gc-22182L Women’S Sandals. The Frosty Green And Ivory Colourway Brings A Soft, Refreshing Vibe To The Pair. The Knitted Upper Gently Wraps Your Feet For A Comfortable Feel, While The Lightweight Eva Sole Keeps Your Steps Light And Cushioned As You Move. With An Easy Slip-On Design, Getting Ready Takes No Extra Effort. Perfect For Relaxed Days, Casual Outings, And Those Plans Where Comfort Is Always A Good Idea. Occasion: Everyday Insole: Footpad :- Eva Upper Material: Knit Vamp + Welding Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 79,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_FROSTYGREEN-IVORY_01.webp?v=1787554977",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_FROSTYGREEN-IVORY_02.jpg?v=1787554977",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_FROSTYGREEN-IVORY_03.webp?v=1787554977",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_FROSTYGREEN-IVORY_04.webp?v=1787554977",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_FROSTYGREEN-IVORY_05.webp?v=1787554976"
    ],
    "sizeInventory": {
      "Olive Green": [
        {
          "sku": "GC-22182L-L-FROSTYGREEN-IVORY-4",
          "size": "4",
          "stock": 15
        },
        {
          "sku": "GC-22182L-L-FROSTYGREEN-IVORY-5",
          "size": "5",
          "stock": 15
        },
        {
          "sku": "GC-22182L-L-FROSTYGREEN-IVORY-6",
          "size": "6",
          "stock": 10
        },
        {
          "sku": "GC-22182L-L-FROSTYGREEN-IVORY-7",
          "size": "7",
          "stock": 13
        },
        {
          "sku": "GC-22182L-L-FROSTYGREEN-IVORY-8",
          "size": "8",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Women Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9681237704935",
    "waterResistance": "No",
    "shortDescription": "Freshen Up Your Everyday Look With The Campus Gc-22182L Women’S Sandals. The Frosty Green And Ivory Colourway Brings A Soft, Refreshing Vibe To The Pair. The Knitted Upper Gently W",
    "sourceProductUrl": "https://campusshoes.com/products/gc-22182l-frosty-green-ivory-womens-sandal",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9717182988519",
    "mrp": 999,
    "sku": "CA-JIGLIFY-LOB-K-BLUE-6",
    "use": "Walking",
    "code": "CAMPUS-9717182988519",
    "name": "JIGLIFY-LOB Blue",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Royal Blue",
    "price": 774,
    "sport": "Walking",
    "upper": "Lycra",
    "width": "Medium",
    "colors": [
      {
        "hex": "#2563eb",
        "name": "Royal Blue",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-LOB_JIGLIFY-LOB_BLUE_04.webp?v=1789473881",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-LOB_JIGLIFY-LOB_BLUE_03.webp?v=1789473880",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-LOB_JIGLIFY-LOB_BLUE_02.jpg?v=1789473881",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-LOB_JIGLIFY-LOB_BLUE_05.webp?v=1789473880",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-LOB_JIGLIFY-LOB_BLUE_01.webp?v=1789473880"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "Kids",
      "Kids shoes",
      "kids slip on shoes",
      "new"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "Kids",
      "Kids shoes",
      "kids slip on shoes",
      "new",
      "nys",
      "payday",
      "sale",
      "shoes",
      "topseller"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Designed For Everyday Walking And Casual Wear, These Kids’ Low-Ankle Sport Shoes Feature A Soft Lycra Upper With A Stitched Construction For A Flexible, Comfortable Fit. The Velcro Closure Across The Instep Makes Them Easy To Wear And Adjust, While The Closed-Toe, Round-Toe Shape And Toe Bumper Add Extra Everyday Protection. Inside, The Lycra + Foam Insole Provides Foam Cushioning For Comfort During Regular Use. A Pvc Outsole With A Textured Pattern Supports Steady Steps For Outdoor And Casual Outings. Finished With An All-Over Cartoon Crab Print And A 3D Crab Patch, This Pair Brings Playful Style To Daily Routines. Care Is Simple—Wipe With A Clean, Dry Cloth. Occasion: Everyday Insole: Lycra+Foam Upper Material: Lycra Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 39,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-LOB_JIGLIFY-LOB_BLUE_01.webp?v=1789473880",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-LOB_JIGLIFY-LOB_BLUE_02.jpg?v=1789473881",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-LOB_JIGLIFY-LOB_BLUE_03.webp?v=1789473880",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-LOB_JIGLIFY-LOB_BLUE_04.webp?v=1789473881",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-LOB_JIGLIFY-LOB_BLUE_05.webp?v=1789473880"
    ],
    "sizeInventory": {
      "Royal Blue": [
        {
          "sku": "JIGLIFY-LOB-K-BLUE-6",
          "size": "6",
          "stock": 8
        },
        {
          "sku": "JIGLIFY-LOB-K-BLUE-7",
          "size": "7",
          "stock": 10
        },
        {
          "sku": "JIGLIFY-LOB-K-BLUE-8",
          "size": "8",
          "stock": 10
        },
        {
          "sku": "JIGLIFY-LOB-K-BLUE-9",
          "size": "9",
          "stock": 6
        },
        {
          "sku": "JIGLIFY-LOB-K-BLUE-10",
          "size": "10",
          "stock": 15
        }
      ]
    },
    "sourceCategory": "Kids Slip on Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 23,
    "sourceProductId": "9717182988519",
    "waterResistance": "No",
    "shortDescription": "Designed For Everyday Walking And Casual Wear, These Kids’ Low-Ankle Sport Shoes Feature A Soft Lycra Upper With A Stitched Construction For A Flexible, Comfortable Fit. The Velcro",
    "sourceProductUrl": "https://campusshoes.com/products/jiglify-lob-blue-kids-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9387557978363",
    "mrp": 2744,
    "sku": "SU-HQ2163-101-7",
    "use": "Slippers",
    "code": "SUPERKICKS-9387557978363",
    "name": "FRANCHISE SLIDE { OFF WHITE/FIRE PINK",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Cloud White",
    "price": 2195,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_c2f815e5-f92d-44e5-8285-4860802fd1e6.jpg?v=1786947130",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_e28ff288-8f7a-4685-b273-86a18918d28f.jpg?v=1786947130",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_dc055b24-67bc-4653-b7a6-e8c4d31c3b2f.jpg?v=1786947130",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_8b479aba-dbbe-463b-b87e-ddda9b272465.jpg?v=1786947129",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_c20b1509-9dce-4ba8-9d68-b2af6657dacf.jpg?v=1786947130"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Footwear",
      "Franchise: Jordan Slide",
      "New Arrivals",
      "NO-COD",
      "ship@250"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Jordan",
      "Footwear",
      "Franchise: Jordan Slide",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "ship@250",
      "Slides & Sandals"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Keep every step supported—even in the shower. Made from a single piece of robust yet flexible foam, these quick-drying shower slides have drainage holes throughout the outsole. A raised elephant print helps add traction to the footbed while giving you heritage Jordan style. Curved foam footbed feels soft and supportive. Herringbone tread pattern on foam outsole helps add traction. More Details Jumpman branding",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 55,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_c20b1509-9dce-4ba8-9d68-b2af6657dacf.jpg?v=1786947130",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_dc055b24-67bc-4653-b7a6-e8c4d31c3b2f.jpg?v=1786947130",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_e28ff288-8f7a-4685-b273-86a18918d28f.jpg?v=1786947130",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_c2f815e5-f92d-44e5-8285-4860802fd1e6.jpg?v=1786947130",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_8b479aba-dbbe-463b-b87e-ddda9b272465.jpg?v=1786947129"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "HQ2163-101-7",
          "size": "7",
          "stock": 11
        },
        {
          "sku": "HQ2163-101-8",
          "size": "8",
          "stock": 6
        },
        {
          "sku": "HQ2163-101-9",
          "size": "9",
          "stock": 8
        },
        {
          "sku": "HQ2163-101-10",
          "size": "10",
          "stock": 11
        },
        {
          "sku": "HQ2163-101-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9387557978363",
    "waterResistance": "No",
    "shortDescription": "Keep every step supported—even in the shower. Made from a single piece of robust yet flexible foam, these quick-drying shower slides have drainage holes throughout the outsole. A r",
    "sourceProductUrl": "https://www.superkicks.in/products/jordan-franchise-slide-off-white-fire-pink",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15396669653243",
    "mrp": 16249,
    "sku": "SU-HP4534-7",
    "use": "Sneakers",
    "code": "SUPERKICKS-15396669653243",
    "name": "SAMBA OG MERCEDES AMG PETRONAS F1 TEAM { GREY FIVE/GREY FIVE/SILVER METALLIC",
    "sole": "Not specified",
    "brand": "ADIDAS",
    "color": "Concrete Grey",
    "price": 12999,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#8a8885",
        "name": "Concrete Grey",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_ea39b3a3-8eae-47da-90a0-5fa7765f2512.jpg?v=1790684818",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_a75fc5f2-1981-4a92-8fda-d6fbb22edca3.jpg?v=1790684817",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_e14faf59-4edd-45b7-acda-23ef926489db.jpg?v=1790684817",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_063cdfa1-299e-483f-a1cd-78edf0c71b59.jpg?v=1790684817",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_972a8278-4680-4420-a051-56b36825da40.jpg?v=1790684817"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Coming Soon",
      "Enddate__20 October 2026 23:59",
      "Footwear",
      "Franchise: SAMBA OG",
      "New Arrivals"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Adidas",
      "Brand - Adidas Originals",
      "Coming Soon",
      "Enddate__20 October 2026 23:59",
      "Footwear",
      "Franchise: SAMBA OG",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers",
      "Startdate__13 October 2026 00:01"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "The Samba OG Mercedes AMG Petronas F1 Team Shoes from adidas Originals bring together an iconic football silhouette and modern motorsport influence in a design that connects heritage sport style with the passion of Formula 1. A premium leather upper delivers a classic look with a comfortable feel, while the leather lining adds a smooth finish. Underfoot, a tough rubber outsole provides durable grip for everyday wear. Finished with Mercedes AMG Petronas F1 Team detailing and iconic adidas branding, including striking serrated 3-Stripes on the side, it brings race-track energy to a standout, street-ready edge.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 100,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_972a8278-4680-4420-a051-56b36825da40.jpg?v=1790684817",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_e14faf59-4edd-45b7-acda-23ef926489db.jpg?v=1790684817",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_a75fc5f2-1981-4a92-8fda-d6fbb22edca3.jpg?v=1790684817",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_ea39b3a3-8eae-47da-90a0-5fa7765f2512.jpg?v=1790684818",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_063cdfa1-299e-483f-a1cd-78edf0c71b59.jpg?v=1790684817"
    ],
    "sizeInventory": {
      "Concrete Grey": [
        {
          "sku": "HP4534-7",
          "size": "7",
          "stock": 13
        },
        {
          "sku": "HP4534-8",
          "size": "8",
          "stock": 14
        },
        {
          "sku": "HP4534-9",
          "size": "9",
          "stock": 11
        },
        {
          "sku": "HP4534-10",
          "size": "10",
          "stock": 14
        },
        {
          "sku": "HP4534-11",
          "size": "11",
          "stock": 11
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15396669653243",
    "waterResistance": "No",
    "shortDescription": "The Samba OG Mercedes AMG Petronas F1 Team Shoes from adidas Originals bring together an iconic football silhouette and modern motorsport influence in a design that connects herita",
    "sourceProductUrl": "https://www.superkicks.in/products/adidas-originals-samba-og-mercedes-amg-petronas-f1-team-grey-five-grey-five-silver-metallic",
    "inventoryCountsAreExact": false
  },
  {
    "id": "clarks-15471723807091",
    "mrp": 13749,
    "sku": "CL-161-1708-11-3",
    "use": "Boots",
    "code": "CLARKS-15471723807091",
    "name": "Black Shaya Sky Boots",
    "sole": "Not specified",
    "brand": "CLARKS",
    "color": "Core Black",
    "price": 10999,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/161-1708-11-4.jpg?v=1785824745",
          "back": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/161-1708-11-3.jpg?v=1785824745",
          "side": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/161-1708-11-2.jpg?v=1785824745",
          "sole": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/161-1708-11-5.jpg?v=1785824745",
          "front": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/161-1708-11-1.jpg?v=1785824745"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Boots",
    "features": [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "AW26",
      "Black",
      "Boots",
      "Clarks",
      "Fall Drop",
      "Footwear",
      "Leather",
      "New",
      "New Arrival",
      "Shaya",
      "Shaya Sky",
      "Women",
      "Zip"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Comfort and versatility come together to create timeless dress boot Shaya Sky. Crafted from soft premium materials, this silhouette features a supportive mid-height heel and delivers unbeatable ease via our signature removable Contour Cushion footbed. • Premium black leather upper • Moulded, removable Contour Cushion footbed offers unrivalled underfoot comfort • Classic, easy-to-wear almond toe shape allows versatile styling • Durable rubber outsole with a curved side for a dynamic look and excellent grip • Heel height: 55mm",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CLARKS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 67,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/161-1708-11-1.jpg?v=1785824745",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/161-1708-11-2.jpg?v=1785824745",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/161-1708-11-3.jpg?v=1785824745",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/161-1708-11-4.jpg?v=1785824745",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/161-1708-11-5.jpg?v=1785824745"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "161-1708-11-3",
          "size": "3",
          "stock": 7
        },
        {
          "sku": "161-1708-11-4",
          "size": "4",
          "stock": 13
        },
        {
          "sku": "161-1708-11-5",
          "size": "5",
          "stock": 7
        },
        {
          "sku": "161-1708-11-6",
          "size": "6",
          "stock": 9
        },
        {
          "sku": "161-1708-11-7",
          "size": "7",
          "stock": 12
        },
        {
          "sku": "161-1708-11-8",
          "size": "8",
          "stock": 5
        }
      ]
    },
    "sourceCategory": "Boots",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15471723807091",
    "waterResistance": "Water Repellent",
    "shortDescription": "Comfort and versatility come together to create timeless dress boot Shaya Sky. Crafted from soft premium materials, this silhouette features a supportive mid-height heel and delive",
    "sourceProductUrl": "https://clarks.in/products/clarks-women-black-shaya-sky-boots",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9622660350183",
    "mrp": 3499,
    "sku": "CA-ELAN-09-G-IVORY-BROWN-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9622660350183",
    "name": "ELAN-09 Off White",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cloud White",
    "price": 1949,
    "sport": "Lifestyle",
    "upper": "Pu",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_IVORY-BROWN_04.webp?v=1783422161",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_IVORY-BROWN_03.webp?v=1783422161",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_IVORY-BROWN_01.jpg?v=1783422162",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_IVORY-BROWN_05.webp?v=1783422161",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_IVORY-BROWN_02.webp?v=1783422162"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The Campus ELAN-09 Men's Casual Shoes are a study in understated sophistication. Cleanly designed and impeccably balanced, this is the kind of pair that elevates an outfit without ever competing for attention. The refined PU upper creates a sleek, polished silhouette that feels contemporary yet timeless, while the dual-colour TPR sole adds a subtle layer of distinction beneath its minimal exterior. Inside, the lycra lining ensures comfort remains effortless, allowing the experience to feel every bit as premium as the look. Whether paired with tailored trousers, elevated denim, or modern smart-casual separates, ELAN-09 brings a quiet confidence to every step. Thoughtfully styled. Effortlessly worn. Unmistakably ELAN. Occasion: Everyday Insole: Eva+Pu Foam Die Cut Upper Material: Pu Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 78,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_IVORY-BROWN_02.webp?v=1783422162",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_IVORY-BROWN_01.jpg?v=1783422162",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_IVORY-BROWN_03.webp?v=1783422161",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_IVORY-BROWN_04.webp?v=1783422161",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_IVORY-BROWN_05.webp?v=1783422161"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "ELAN-09-G-IVORY-BROWN-6",
          "size": "6",
          "stock": 4
        },
        {
          "sku": "ELAN-09-G-IVORY-BROWN-7",
          "size": "7",
          "stock": 14
        },
        {
          "sku": "ELAN-09-G-IVORY-BROWN-8",
          "size": "8",
          "stock": 6
        },
        {
          "sku": "ELAN-09-G-IVORY-BROWN-9",
          "size": "9",
          "stock": 11
        },
        {
          "sku": "ELAN-09-G-IVORY-BROWN-10",
          "size": "10",
          "stock": 6
        },
        {
          "sku": "ELAN-09-G-IVORY-BROWN-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 44,
    "sourceProductId": "9622660350183",
    "waterResistance": "No",
    "shortDescription": "The Campus ELAN-09 Men's Casual Shoes are a study in understated sophistication. Cleanly designed and impeccably balanced, this is the kind of pair that elevates an outfit without ",
    "sourceProductUrl": "https://campusshoes.com/products/elan-09-ivory-brown-mens-formal-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9692649619687",
    "mrp": 3124,
    "sku": "CA-22G-13502-G-WHT-PEACHECO-10",
    "use": "Running",
    "code": "CAMPUS-9692649619687",
    "name": "HOLDER White",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cloud White",
    "price": 2499,
    "sport": "Running",
    "upper": "Mesh+Sublimatiom+Raise Printing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/HOLDER_22G-13502_WHT-PEACHECO_04.webp?v=1788418570",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/HOLDER_22G-13502_WHT-PEACHECO_03.webp?v=1788418570",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/HOLDER_22G-13502_WHT-PEACHECO_02.jpg?v=1788418570",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/HOLDER_22G-13502_WHT-PEACHECO_05.webp?v=1788418570",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/HOLDER_22G-13502_WHT-PEACHECO_01.webp?v=1788418570"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "emp0",
      "m&w running shoes",
      "men",
      "men running shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "m&w running shoes",
      "men",
      "men running shoes",
      "men shoes",
      "mss",
      "new",
      "sale",
      "wyv"
    ],
    "collections": [
      "Running Collection",
      "Sale"
    ],
    "description": "More Bounce. More Comfort. More Reasons To Keep Moving. The Campus Holder Men’S Running Shoes Bring A Clean White Base To Life With Peach Accents, But The Real Action Happens Underfoot. Nitroboost Technology And The Etpu Midsole Work Together To Give Every Stride A Lively, Responsive Feel, While The Breathable Mesh Upper With Raised Detailing Keeps The Look Sporty And The Fit Comfortable. Midsole Shank Adds Support Around The Midfoot, And The Tpr Outsole Helps Keep Your Steps Steady As The Pace Picks Up. Inside, Bubble Yoga Max Delivers That Plush Cushioning That Makes Long Runs Feel A Little Easier. Fresh On The Outside, Fully Loaded Underneath. Occasion: Everyday Insole: Bubble Yoga Max Upper Material: Mesh+Sublimatiom+Raise Printing Technology: Nitroboost;Shank Support Care Instructions: Gently scrub with a soft cloth or brush using mild soap and cold water, then air dry in the shade. Avoid bleach and harsh cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 100,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/HOLDER_22G-13502_WHT-PEACHECO_01.webp?v=1788418570",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/HOLDER_22G-13502_WHT-PEACHECO_02.jpg?v=1788418570",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/HOLDER_22G-13502_WHT-PEACHECO_03.webp?v=1788418570",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/HOLDER_22G-13502_WHT-PEACHECO_04.webp?v=1788418570",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/HOLDER_22G-13502_WHT-PEACHECO_05.webp?v=1788418570"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "22G-13502-G-WHT-PEACHECO-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "22G-13502-G-WHT-PEACHECO-7",
          "size": "7",
          "stock": 0
        },
        {
          "sku": "22G-13502-G-WHT-PEACHECO-8",
          "size": "8",
          "stock": 0
        },
        {
          "sku": "22G-13502-G-WHT-PEACHECO-9",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "22G-13502-G-WHT-PEACHECO-10",
          "size": "10",
          "stock": 7
        }
      ]
    },
    "sourceCategory": "Men Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9692649619687",
    "waterResistance": "No",
    "shortDescription": "More Bounce. More Comfort. More Reasons To Keep Moving. The Campus Holder Men’S Running Shoes Bring A Clean White Base To Life With Peach Accents, But The Real Action Happens Under",
    "sourceProductUrl": "https://campusshoes.com/products/holder-wht-peach-eco-mens-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9681237672167",
    "mrp": 1374,
    "sku": "CA-GC-22182L-L-BLACK-TBLUE-4",
    "use": "Sandals",
    "code": "CAMPUS-9681237672167",
    "name": "GC-22182L Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 1099,
    "sport": "Lifestyle",
    "upper": "Knit Vamp + Welding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_BLACK-TBLUE_04.webp?v=1787555065",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_BLACK-TBLUE_03.webp?v=1787555065",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_BLACK-TBLUE_02.jpg?v=1787555065",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_BLACK-TBLUE_05.webp?v=1787555064",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_BLACK-TBLUE_01.webp?v=1787555064"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "c&s",
      "cs",
      "emp0",
      "payday",
      "s&s"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "c&s",
      "cs",
      "emp0",
      "payday",
      "s&s",
      "Slippers & Sandals",
      "sss",
      "Women",
      "Women Sandals & Floaters",
      "women sandals & slippers",
      "wss"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Meet The Campus Gc-22182L Women’S Sandals — Made For Easy Days, Effortless Style, And Plenty Of Movement. The Black And Teal Blue Colour Combination Gives Them A Sporty, Modern Look That Adds A Little Edge To Your Everyday Outfits. The Soft Knitted Upper Feels Comfortable Around Your Feet, Making Every Step Feel Easy And Natural. Underfoot, The Lightweight Eva Sole Keeps Your Steps Light And Cushioned. Just Slip Them On And Head Out — From Quick Errands To Casual Plans, These Sandals Are Ready To Keep Up. Occasion: Everyday Insole: Footpad :- Eva Upper Material: Knit Vamp + Welding Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 90,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_BLACK-TBLUE_01.webp?v=1787555064",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_BLACK-TBLUE_02.jpg?v=1787555065",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_BLACK-TBLUE_03.webp?v=1787555065",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_BLACK-TBLUE_04.webp?v=1787555065",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22182L_GC-22182L_BLACK-TBLUE_05.webp?v=1787555064"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "GC-22182L-L-BLACK-TBLUE-4",
          "size": "4",
          "stock": 7
        },
        {
          "sku": "GC-22182L-L-BLACK-TBLUE-5",
          "size": "5",
          "stock": 0
        },
        {
          "sku": "GC-22182L-L-BLACK-TBLUE-6",
          "size": "6",
          "stock": 4
        },
        {
          "sku": "GC-22182L-L-BLACK-TBLUE-7",
          "size": "7",
          "stock": 4
        },
        {
          "sku": "GC-22182L-L-BLACK-TBLUE-8",
          "size": "8",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Women Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9681237672167",
    "waterResistance": "No",
    "shortDescription": "Meet The Campus Gc-22182L Women’S Sandals — Made For Easy Days, Effortless Style, And Plenty Of Movement. The Black And Teal Blue Colour Combination Gives Them A Sporty, Modern Loo",
    "sourceProductUrl": "https://campusshoes.com/products/gc-22182l-black-t-blue-womens-sandal",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9717182922983",
    "mrp": 999,
    "sku": "CA-JIGLIFY-KTY-K-PINK-6",
    "use": "Walking",
    "code": "CAMPUS-9717182922983",
    "name": "JIGLIFY-KTY Pink",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Blush Pink",
    "price": 774,
    "sport": "Walking",
    "upper": "Lycra",
    "width": "Medium",
    "colors": [
      {
        "hex": "#ec4899",
        "name": "Blush Pink",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-KTY_JIGLIFY-KTY_PINK_04.webp?v=1789473938",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-KTY_JIGLIFY-KTY_PINK_03.webp?v=1789473938",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-KTY_JIGLIFY-KTY_PINK_02.jpg?v=1789473938",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-KTY_JIGLIFY-KTY_PINK_05.webp?v=1789473938",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-KTY_JIGLIFY-KTY_PINK_01.webp?v=1789473938"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "Kids",
      "Kids shoes",
      "kids slip on shoes",
      "new"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "Kids",
      "Kids shoes",
      "kids slip on shoes",
      "new",
      "nys",
      "payday",
      "sale",
      "shoes",
      "topseller"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Designed For Kids’ Everyday Walking And Play, These Low-Top Sport-Style Shoes Feature A Soft Lycra Upper With An All-Over Cartoon Character Print And A Closed Toe With Toe Bumper For Added Protection. The Across-Instep Velcro Strap Makes Wearing Quick And Secure, While The Heel Pull Tab Helps Kids Slip Them On Easily. Inside, A Lycra + Foam Insole Provides Cushioned Comfort, And The Soft Fabric Lining Feels Gentle On Feet. Finished With A Durable Pvc Outsole With A Textured Grip Pattern, This Pair Is A Great Pick For Casual, Daily Wear. Care Is Simple—Wipe With A Clean Dry Cloth. Occasion: Everyday Insole: Lycra+Foam Upper Material: Lycra Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 118,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-KTY_JIGLIFY-KTY_PINK_01.webp?v=1789473938",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-KTY_JIGLIFY-KTY_PINK_02.jpg?v=1789473938",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-KTY_JIGLIFY-KTY_PINK_03.webp?v=1789473938",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-KTY_JIGLIFY-KTY_PINK_04.webp?v=1789473938",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-KTY_JIGLIFY-KTY_PINK_05.webp?v=1789473938"
    ],
    "sizeInventory": {
      "Blush Pink": [
        {
          "sku": "JIGLIFY-KTY-K-PINK-6",
          "size": "6",
          "stock": 5
        },
        {
          "sku": "JIGLIFY-KTY-K-PINK-7",
          "size": "7",
          "stock": 12
        },
        {
          "sku": "JIGLIFY-KTY-K-PINK-8",
          "size": "8",
          "stock": 12
        },
        {
          "sku": "JIGLIFY-KTY-K-PINK-9",
          "size": "9",
          "stock": 5
        },
        {
          "sku": "JIGLIFY-KTY-K-PINK-10",
          "size": "10",
          "stock": 11
        }
      ]
    },
    "sourceCategory": "Kids Slip on Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 23,
    "sourceProductId": "9717182922983",
    "waterResistance": "No",
    "shortDescription": "Designed For Kids’ Everyday Walking And Play, These Low-Top Sport-Style Shoes Feature A Soft Lycra Upper With An All-Over Cartoon Character Print And A Closed Toe With Toe Bumper F",
    "sourceProductUrl": "https://campusshoes.com/products/jiglify-kty-pink-kids-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9396305461499",
    "mrp": 3994,
    "sku": "SU-IF2870-400-7",
    "use": "Slippers",
    "code": "SUPERKICKS-9396305461499",
    "name": "KOBE OFFCOURT { HYPER ROYAL/WHITE",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Cloud White",
    "price": 3195,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_2d155da0-0b65-4e06-be93-b90d30cffb69.jpg?v=1787575653",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_7ce9d5b3-589d-4a58-bc4c-30df8885c419.jpg?v=1787575653",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_4ba18729-f8c5-4e3e-988d-97816c7db0ba.jpg?v=1787575653",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_177b9c63-aef4-4ddf-bea1-3e89a5512a44.jpg?v=1787575653",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_44532388-95e0-4cad-807b-99a9dde97578.jpg?v=1787575653"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Footwear",
      "Franchise: NIKE SLIDE",
      "New Arrivals",
      "NO-COD",
      "ship@250"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Nike",
      "Footwear",
      "Franchise: NIKE SLIDE",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "ship@250",
      "Slides & Sandals",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The Offcourt Slides are designed to help you relax and recharge. The innovative, dual-layered foam and soft lining on the strap ensure a gratifying, full-foot experience. A Kobe Sheath logo and iconic snakeskin texturing bring the Mamba Mentality to your recovery. Contoured footbed cradles the foot, while dual-density foam adds plush underfoot cushioning and stability. Soft strap and binding on the upper ensure total comfort. Deep flex grooves bend with your foot for a natural feel. Contouring at the toe provides additional grip and support, while the concentric outsole adds multi-surface traction.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 44,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_44532388-95e0-4cad-807b-99a9dde97578.jpg?v=1787575653",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_4ba18729-f8c5-4e3e-988d-97816c7db0ba.jpg?v=1787575653",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_7ce9d5b3-589d-4a58-bc4c-30df8885c419.jpg?v=1787575653",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_2d155da0-0b65-4e06-be93-b90d30cffb69.jpg?v=1787575653",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_177b9c63-aef4-4ddf-bea1-3e89a5512a44.jpg?v=1787575653"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "IF2870-400-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "IF2870-400-7",
          "size": "7",
          "stock": 13
        },
        {
          "sku": "IF2870-400-8",
          "size": "8",
          "stock": 9
        },
        {
          "sku": "IF2870-400-9",
          "size": "9",
          "stock": 5
        },
        {
          "sku": "IF2870-400-10",
          "size": "10",
          "stock": 4
        },
        {
          "sku": "IF2870-400-11",
          "size": "11",
          "stock": 10
        },
        {
          "sku": "IF2870-400-12",
          "size": "12",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9396305461499",
    "waterResistance": "No",
    "shortDescription": "The Offcourt Slides are designed to help you relax and recharge. The innovative, dual-layered foam and soft lining on the strap ensure a gratifying, full-foot experience. A Kobe Sh",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-kobe-offcourt-hyper-royal-white",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15396680990971",
    "mrp": 16249,
    "sku": "SU-HP4535-7",
    "use": "Sneakers",
    "code": "SUPERKICKS-15396680990971",
    "name": "SAMBA OG MERCEDES AMG PETRONAS F1 TEAM { CORE BLACK/CORE BLACK/SILVER METALLIC",
    "sole": "Not specified",
    "brand": "ADIDAS",
    "color": "Core Black",
    "price": 12999,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_315065c6-8f1f-4752-b18e-b15cdf45d369.jpg?v=1790684982",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_515c8392-2534-47ad-80a5-21c127e2998f.jpg?v=1790684982",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_a3502688-a91e-4ef8-8481-ee420ad5fc04.jpg?v=1790684982",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_6efa0739-06b4-4918-b330-614968a43180.jpg?v=1790684982",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_f4453d9b-ff0d-4d70-a231-96608c934e87.jpg?v=1790684982"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Coming Soon",
      "Enddate__20 October 2026 23:59",
      "Footwear",
      "Franchise: SAMBA OG",
      "New Arrivals"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Adidas",
      "Brand - Adidas Originals",
      "Coming Soon",
      "Enddate__20 October 2026 23:59",
      "Footwear",
      "Franchise: SAMBA OG",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers",
      "Startdate__13 October 2026 00:01"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "The Samba OG Mercedes AMG Petronas F1 Team Shoes from adidas Originals bring together an iconic football silhouette and modern motorsport influence in a design that connects heritage sport style with the passion of Formula 1. A premium leather upper delivers a classic look with a comfortable feel, while the leather lining adds a smooth finish. Underfoot, a tough rubber outsole provides durable grip for everyday wear. Finished with Mercedes AMG Petronas F1 Team detailing and iconic adidas branding, including striking serrated 3-Stripes on the side, it brings race-track energy to a standout, street-ready edge.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 45,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_f4453d9b-ff0d-4d70-a231-96608c934e87.jpg?v=1790684982",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_a3502688-a91e-4ef8-8481-ee420ad5fc04.jpg?v=1790684982",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_515c8392-2534-47ad-80a5-21c127e2998f.jpg?v=1790684982",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_315065c6-8f1f-4752-b18e-b15cdf45d369.jpg?v=1790684982",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_6efa0739-06b4-4918-b330-614968a43180.jpg?v=1790684982"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "HP4535-7",
          "size": "7",
          "stock": 6
        },
        {
          "sku": "HP4535-8",
          "size": "8",
          "stock": 9
        },
        {
          "sku": "HP4535-9",
          "size": "9",
          "stock": 15
        },
        {
          "sku": "HP4535-10",
          "size": "10",
          "stock": 13
        },
        {
          "sku": "HP4535-11",
          "size": "11",
          "stock": 11
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15396680990971",
    "waterResistance": "No",
    "shortDescription": "The Samba OG Mercedes AMG Petronas F1 Team Shoes from adidas Originals bring together an iconic football silhouette and modern motorsport influence in a design that connects herita",
    "sourceProductUrl": "https://www.superkicks.in/products/adidas-originals-samba-og-mercedes-amg-petronas-f1-team-core-black-core-black-silver-metallic",
    "inventoryCountsAreExact": false
  },
  {
    "id": "clarks-15471732949363",
    "mrp": 11249,
    "sku": "CL-147-1719-11-6",
    "use": "Boots",
    "code": "CLARKS-15471732949363",
    "name": "Black Berwick Easy Boots",
    "sole": "Not specified",
    "brand": "CLARKS",
    "color": "Core Black",
    "price": 8999,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1719-11-4.jpg?v=1785824782",
          "back": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1719-11-3.jpg?v=1785824782",
          "side": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1719-11-2.jpg?v=1785824782",
          "sole": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1719-11-5.jpg?v=1785824782",
          "front": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1719-11-1.jpg?v=1785824782"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Boots",
    "features": [
      "10",
      "11",
      "6",
      "7",
      "8"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "10",
      "11",
      "6",
      "7",
      "8",
      "9",
      "AW26",
      "Berwick",
      "Berwick Easy",
      "Black",
      "Boots",
      "Clarks",
      "Fall Drop",
      "Footwear",
      "Leather",
      "Men",
      "New",
      "New Arrival"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Berwick Easy is a modern take on the classic Chelsea boot silhouette, blending premium smooth leathers with built-in comfort. Its chunky cleated sole adds a contemporary edge, while the EXTRALIGHT® sole guarantees lightweight flexibility and long-lasting performance. We've completed this pair with ultra-soft foam footbeds too, delivering all-day cushioning that's prepped for any eventuality. • Premium black leather upper • Soft cushioned foam footbed delivers all-day comfort • Elastic side panels and heel pull offer easy on and off • Modern stitch details add a contemporary look • EXTRALIGHT® sole guarantees effortless traction and durability",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CLARKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 65,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1719-11-1.jpg?v=1785824782",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1719-11-2.jpg?v=1785824782",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1719-11-3.jpg?v=1785824782",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1719-11-4.jpg?v=1785824782",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1719-11-5.jpg?v=1785824782"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "147-1719-11-6",
          "size": "6",
          "stock": 15
        },
        {
          "sku": "147-1719-11-7",
          "size": "7",
          "stock": 6
        },
        {
          "sku": "147-1719-11-8",
          "size": "8",
          "stock": 4
        },
        {
          "sku": "147-1719-11-9",
          "size": "9",
          "stock": 8
        },
        {
          "sku": "147-1719-11-10",
          "size": "10",
          "stock": 0
        },
        {
          "sku": "147-1719-11-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Boots",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15471732949363",
    "waterResistance": "Water Repellent",
    "shortDescription": "Berwick Easy is a modern take on the classic Chelsea boot silhouette, blending premium smooth leathers with built-in comfort. Its chunky cleated sole adds a contemporary edge, whil",
    "sourceProductUrl": "https://clarks.in/products/clarks-men-black-berwick-easy-boots",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9622660382951",
    "mrp": 3499,
    "sku": "CA-ELAN-03-G-TAN-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9622660382951",
    "name": "ELAN-03 Tan",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cognac Tan",
    "price": 1849,
    "sport": "Lifestyle",
    "upper": "Pu Suede",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-03TAN_04.webp?v=1783422064",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-03_TAN_3X4_5300c224-aa6f-4d0f-b512-b00665189de7.webp?v=1785929047",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-03TAN_01.jpg?v=1783422066",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Infographics-Master-ELAN-03_TANPortrait_adapt_3X4_2d817a5e-458e-4e48-b9ab-32a3c67ff9d0.webp?v=1786001670",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-03TAN_02.webp?v=1783422066"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "loafers",
      "men"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "loafers",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The Campus ELAN-03 Men’s Loafers present a softer expression of refinement — relaxed, yet distinctly polished. From silhouette to material, every detail is considered to bring out a quiet sense of elegance. The PU suede upper lends a rich finish, elevated without trying too hard, shaped into a clean loafer form that slips seamlessly into your day. Inside, the lycra lining keeps the experience smooth and easy, while the lightweight EVA sole ensures movement stays light and fluid as you transition from one mood to another. Understated, versatile, and confident without the noise, ELAN-03 is effortless elegance, worn your way. Occasion: Everyday Insole: Pu Foam-Molded Upper Material: Pu Suede Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 124,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-03TAN_02.webp?v=1783422066",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-03TAN_01.jpg?v=1783422066",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-03_TAN_3X4_5300c224-aa6f-4d0f-b512-b00665189de7.webp?v=1785929047",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-03TAN_04.webp?v=1783422064",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Infographics-Master-ELAN-03_TANPortrait_adapt_3X4_2d817a5e-458e-4e48-b9ab-32a3c67ff9d0.webp?v=1786001670"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "ELAN-03-G-TAN-6",
          "size": "6",
          "stock": 4
        },
        {
          "sku": "ELAN-03-G-TAN-7",
          "size": "7",
          "stock": 9
        },
        {
          "sku": "ELAN-03-G-TAN-8",
          "size": "8",
          "stock": 11
        },
        {
          "sku": "ELAN-03-G-TAN-9",
          "size": "9",
          "stock": 9
        },
        {
          "sku": "ELAN-03-G-TAN-10",
          "size": "10",
          "stock": 4
        },
        {
          "sku": "ELAN-03-G-TAN-11",
          "size": "11",
          "stock": 11
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 47,
    "sourceProductId": "9622660382951",
    "waterResistance": "No",
    "shortDescription": "The Campus ELAN-03 Men’s Loafers present a softer expression of refinement — relaxed, yet distinctly polished. From silhouette to material, every detail is considered to bring out ",
    "sourceProductUrl": "https://campusshoes.com/products/elan-03-tan-mens-loafers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9702190776551",
    "mrp": 2099,
    "sku": "CA-22L-1098-L-OFFWHT-LBGE-4",
    "use": "Running",
    "code": "CAMPUS-9702190776551",
    "name": "MISS CR White",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cloud White",
    "price": 904,
    "sport": "Running",
    "upper": "Mesh+Pvc+Printing+Welding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_OFFWHT-LBGE_04.webp?v=1788929390",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_OFFWHT-LBGE_03.webp?v=1788929390",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_OFFWHT-LBGE_02.jpg?v=1788929390",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_OFFWHT-LBGE_05.webp?v=1788929390",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_OFFWHT-LBGE_01.webp?v=1788929390"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "new",
      "payday",
      "sale",
      "shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "new",
      "payday",
      "sale",
      "shoes",
      "topseller",
      "women",
      "women running shoes",
      "women shoes",
      "wss"
    ],
    "collections": [
      "Running Collection",
      "Sale"
    ],
    "description": "Women Lace-Up Running Shoes Featuring A Breathable Mesh Upper With Contrast Side Overlays And Striped Branding. Designed With Pillofoam Cushioning And A Memory Tech Lite Memory Foam Insole For Enhanced Comfort, Plus A Soft Padded Textile Lining And Padded Collar And Tongue. Finished With A Chunky Eva Outsole, Round Closed-Toe Front, And A Handy Heel Pull Tab—Ideal For Running And Athleisure Wear. Occasion: Everyday Insole: Memory Tech Lite Upper Material: Mesh+Pvc+Printing+Welding Technology: Pillofoam Care Instructions: Wipe With A Clean, Dry Cloth Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 76,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_OFFWHT-LBGE_01.webp?v=1788929390",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_OFFWHT-LBGE_02.jpg?v=1788929390",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_OFFWHT-LBGE_03.webp?v=1788929390",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_OFFWHT-LBGE_04.webp?v=1788929390",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_OFFWHT-LBGE_05.webp?v=1788929390"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "22L-1098-L-OFFWHT-LBGE-4",
          "size": "4",
          "stock": 8
        },
        {
          "sku": "22L-1098-L-OFFWHT-LBGE-5",
          "size": "5",
          "stock": 6
        },
        {
          "sku": "22L-1098-L-OFFWHT-LBGE-6",
          "size": "6",
          "stock": 15
        },
        {
          "sku": "22L-1098-L-OFFWHT-LBGE-7",
          "size": "7",
          "stock": 8
        },
        {
          "sku": "22L-1098-L-OFFWHT-LBGE-8",
          "size": "8",
          "stock": 9
        }
      ]
    },
    "sourceCategory": "Women Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 57,
    "sourceProductId": "9702190776551",
    "waterResistance": "No",
    "shortDescription": "Women Lace-Up Running Shoes Featuring A Breathable Mesh Upper With Contrast Side Overlays And Striped Branding. Designed With Pillofoam Cushioning And A Memory Tech Lite Memory Foa",
    "sourceProductUrl": "https://campusshoes.com/products/miss-cr-off-wht-l-bge-womens-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9635047080167",
    "mrp": 1749,
    "sku": "CA-SS26-OPG-006-G-BLK-7",
    "use": "Sandals",
    "code": "CAMPUS-9635047080167",
    "name": "SS26-OPG-006 Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 1399,
    "sport": "Lifestyle",
    "upper": "PVC",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_04_64f56bbb-ad19-4c4f-ba9c-36f28b5cdeb2.webp?v=1784200562",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_03_d3308ab5-1808-4423-a9db-111a5fa57551.webp?v=1784200562",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_01_2e784877-d52a-481b-b634-3b6df07f5c63.jpg?v=1784200562",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_05_e487a26f-90f2-4b99-b043-9ddc3f6233e0.webp?v=1784200562",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_02_b229d4f0-f64d-47fd-98bc-8b4b0382d8d5.webp?v=1784200562"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "c&s",
      "camp",
      "cs",
      "elan",
      "emp0"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "c&s",
      "camp",
      "cs",
      "elan",
      "emp0",
      "fs",
      "men",
      "men sandal casual",
      "men sandals & floaters",
      "men sandals & slippers",
      "mss",
      "nys",
      "payday",
      "s&s",
      "sss"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Refined. Relaxed. Ready for anywhere. Campus ELAN Men’s Slippers bring effortless elegance to your everyday. The clean silhouette is elevated by a thumb-loop design and an adjustable buckle that create a secure, comfortable fit while maintaining a contemporary edge. The open construction keeps things light and breathable, while the soft EVA footbed cushions every step with ease. Wrapped in an all-black finish, this pair is understated, versatile, and made to complement everything from relaxed tailoring to your weekend staples. Occasion: Everyday Insole: Footbed- Eva Upper Material: PVC Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 33,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_02_b229d4f0-f64d-47fd-98bc-8b4b0382d8d5.webp?v=1784200562",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_01_2e784877-d52a-481b-b634-3b6df07f5c63.jpg?v=1784200562",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_03_d3308ab5-1808-4423-a9db-111a5fa57551.webp?v=1784200562",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_04_64f56bbb-ad19-4c4f-ba9c-36f28b5cdeb2.webp?v=1784200562",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_05_e487a26f-90f2-4b99-b043-9ddc3f6233e0.webp?v=1784200562"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "SS26-OPG-006-G-BLK-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "SS26-OPG-006-G-BLK-7",
          "size": "7",
          "stock": 8
        },
        {
          "sku": "SS26-OPG-006-G-BLK-8",
          "size": "8",
          "stock": 5
        },
        {
          "sku": "SS26-OPG-006-G-BLK-9",
          "size": "9",
          "stock": 13
        },
        {
          "sku": "SS26-OPG-006-G-BLK-10",
          "size": "10",
          "stock": 9
        }
      ]
    },
    "sourceCategory": "Men Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9635047080167",
    "waterResistance": "No",
    "shortDescription": "Refined. Relaxed. Ready for anywhere. Campus ELAN Men’s Slippers bring effortless elegance to your everyday. The clean silhouette is elevated by a thumb-loop design and an adjustab",
    "sourceProductUrl": "https://campusshoes.com/products/ss26-opg-006-blk-mens-sandals",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9717182857447",
    "mrp": 999,
    "sku": "CA-JIGLIFY-CR-K-GREEN-6",
    "use": "Walking",
    "code": "CAMPUS-9717182857447",
    "name": "JIGLIFY-CR Green",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Olive Green",
    "price": 774,
    "sport": "Walking",
    "upper": "Lycra",
    "width": "Medium",
    "colors": [
      {
        "hex": "#15803d",
        "name": "Olive Green",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-CR_JIGLIFY-CR_GREEN_04.webp?v=1789473996",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-CR_JIGLIFY-CR_GREEN_03.webp?v=1789473995",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-CR_JIGLIFY-CR_GREEN_02.jpg?v=1789473996",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-CR_JIGLIFY-CR_GREEN_05.webp?v=1789473995",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-CR_JIGLIFY-CR_GREEN_01.webp?v=1789473995"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "Kids",
      "Kids shoes",
      "kids slip on shoes",
      "new"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "Kids",
      "Kids shoes",
      "kids slip on shoes",
      "new",
      "nys",
      "payday",
      "sale",
      "shoes",
      "topseller"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Designed For Everyday Wear, These Kids’ Low-Ankle Walking Shoes Combine A Soft Lycra Upper With A Stitched Construction For A Comfortable, Regular Fit. The Across-Instep Velcro Closure Makes Them Quick To Wear And Adjust, While The Closed-Toe Design With A Toe Bumper Helps Protect Little Feet During Playtime. Inside, A Lycra + Foam Insole Delivers Cushioned Comfort, And The Pvc Outsole Supports Easy Movement For Daily Walking. Finished With A Fun Dinosaur Theme And A 3D Dinosaur Badge On The Strap, They’Re A Great Pick For Casual Outings And Active Days. Care Is Simple—Wipe With A Clean, Dry Cloth. Occasion: Everyday Insole: Lycra+Foam Upper Material: Lycra Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 85,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-CR_JIGLIFY-CR_GREEN_01.webp?v=1789473995",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-CR_JIGLIFY-CR_GREEN_02.jpg?v=1789473996",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-CR_JIGLIFY-CR_GREEN_03.webp?v=1789473995",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-CR_JIGLIFY-CR_GREEN_04.webp?v=1789473996",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/JIGLIFY-CR_JIGLIFY-CR_GREEN_05.webp?v=1789473995"
    ],
    "sizeInventory": {
      "Olive Green": [
        {
          "sku": "JIGLIFY-CR-K-GREEN-6",
          "size": "6",
          "stock": 13
        },
        {
          "sku": "JIGLIFY-CR-K-GREEN-7",
          "size": "7",
          "stock": 6
        },
        {
          "sku": "JIGLIFY-CR-K-GREEN-8",
          "size": "8",
          "stock": 15
        },
        {
          "sku": "JIGLIFY-CR-K-GREEN-9",
          "size": "9",
          "stock": 12
        },
        {
          "sku": "JIGLIFY-CR-K-GREEN-10",
          "size": "10",
          "stock": 6
        }
      ]
    },
    "sourceCategory": "Kids Slip on Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 23,
    "sourceProductId": "9717182857447",
    "waterResistance": "No",
    "shortDescription": "Designed For Everyday Wear, These Kids’ Low-Ankle Walking Shoes Combine A Soft Lycra Upper With A Stitched Construction For A Comfortable, Regular Fit. The Across-Instep Velcro Clo",
    "sourceProductUrl": "https://campusshoes.com/products/jiglify-cr-green-kids-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9400976146683",
    "mrp": 6874,
    "sku": "SU-RCVRYSM1-6.5",
    "use": "Slippers",
    "code": "SUPERKICKS-9400976146683",
    "name": "FRESH FOAM RCVRY { TIMBERWOLF WITH SHIPYARD",
    "sole": "Not specified",
    "brand": "NEW BALANCE",
    "color": "6.5",
    "price": 5499,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "6.5",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_1bad9a84-7a13-4ee5-96f6-a34b102a3ec9.jpg?v=1787745826",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_49d967eb-0cd8-4933-a30a-d233ff676a48.jpg?v=1787745826",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_67f4b7fc-9429-4801-95b4-9ab6a600b367.jpg?v=1787745826",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_a5825699-1271-458f-bc53-256835127394.jpg?v=1787745826",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_a5825699-1271-458f-bc53-256835127394.jpg?v=1787745826"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Footwear",
      "Franchise: NEW BALANCE SLIDE",
      "New Arrivals",
      "NO-COD",
      "Slides and Sandals"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - New Balance",
      "Footwear",
      "Franchise: NEW BALANCE SLIDE",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Slides and Sandals",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The Fresh Foam RCVRY Slide brings world-class comfort to athletes recovering from tough workouts and big games.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 135,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_a5825699-1271-458f-bc53-256835127394.jpg?v=1787745826",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_67f4b7fc-9429-4801-95b4-9ab6a600b367.jpg?v=1787745826",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_49d967eb-0cd8-4933-a30a-d233ff676a48.jpg?v=1787745826",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_1bad9a84-7a13-4ee5-96f6-a34b102a3ec9.jpg?v=1787745826"
    ],
    "sizeInventory": {
      "6.5": [
        {
          "sku": "RCVRYSM1-6.5",
          "size": "6.5",
          "stock": 7
        },
        {
          "sku": "RCVRYSM1-7.5",
          "size": "7.5",
          "stock": 15
        },
        {
          "sku": "RCVRYSM1-8.5",
          "size": "8.5",
          "stock": 14
        },
        {
          "sku": "RCVRYSM1-9.5",
          "size": "9.5",
          "stock": 13
        },
        {
          "sku": "RCVRYSM1-10.5",
          "size": "10.5",
          "stock": 11
        },
        {
          "sku": "RCVRYSM1-11.5",
          "size": "11.5",
          "stock": 10
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9400976146683",
    "waterResistance": "No",
    "shortDescription": "The Fresh Foam RCVRY Slide brings world-class comfort to athletes recovering from tough workouts and big games.",
    "sourceProductUrl": "https://www.superkicks.in/products/new-balance-fresh-foam-rcvry-timberwolf-with-shipyard",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15395383935227",
    "mrp": 24119,
    "sku": "SU-440888-008-3.5",
    "use": "Sneakers",
    "code": "SUPERKICKS-15395383935227",
    "name": "AIR JORDAN 5 \"BLACK CAROLINA\" { BLACK/UNIVERSITY BLUE-WHITE",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Core Black",
    "price": 19295,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_1239c482-81c7-48a8-b356-7252e562c78e.jpg?v=1781262977",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_c31aadd4-af52-4d6e-aa55-22a14286104f.jpg?v=1781262977",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_13a23884-10d5-443b-9cac-548c7d416cd9.jpg?v=1781262977",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_29ce76c4-3515-4a84-9bcb-bd600d7f33af.jpg?v=1781262977",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_6041c51d-e95c-46c7-84b2-e5fbb808dba3.jpg?v=1781262977"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Footwear",
      "Franchise: AIR JORDAN 5",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Jordan",
      "Footwear",
      "Franchise: AIR JORDAN 5",
      "Gender - Women",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "You know the colors. You know the history. From his high-flying artistry to his dramatic game-winning shots, MJ's college years catapulted him to early stardom. Everything that followed was a continuation of his legacy. This bringback of the 2006 ode to his time at Carolina features University Blue accents on a premium black nubuck upper, finished with an icy outsole. Nike Air technology absorbs impact for cushioning with every step. Foam midsole adds lightweight cushioning. Rubber in the outsole gives you durable traction.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 57,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_6041c51d-e95c-46c7-84b2-e5fbb808dba3.jpg?v=1781262977",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_13a23884-10d5-443b-9cac-548c7d416cd9.jpg?v=1781262977",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_c31aadd4-af52-4d6e-aa55-22a14286104f.jpg?v=1781262977",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_1239c482-81c7-48a8-b356-7252e562c78e.jpg?v=1781262977",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_29ce76c4-3515-4a84-9bcb-bd600d7f33af.jpg?v=1781262977"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "440888-008-3.5",
          "size": "3.5",
          "stock": 5
        },
        {
          "sku": "440888-008-4.5",
          "size": "4.5",
          "stock": 0
        },
        {
          "sku": "440888-008-5.5",
          "size": "5.5",
          "stock": 12
        },
        {
          "sku": "440888-008-6.5",
          "size": "6.5",
          "stock": 9
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15395383935227",
    "waterResistance": "No",
    "shortDescription": "You know the colors. You know the history. From his high-flying artistry to his dramatic game-winning shots, MJ's college years catapulted him to early stardom. Everything that fol",
    "sourceProductUrl": "https://www.superkicks.in/products/jordan-air-jordan-5-black-carolina-black-university-blue-white-1",
    "inventoryCountsAreExact": false
  },
  {
    "id": "clarks-15471747826035",
    "mrp": 9999,
    "sku": "CL-147-1724-99-6",
    "use": "Boots",
    "code": "CLARKS-15471747826035",
    "name": "Brown-Beige Brodin Mid Boots",
    "sole": "Not specified",
    "brand": "CLARKS",
    "color": "Cognac Tan",
    "price": 7999,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-99-4.jpg?v=1785824634",
          "back": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-99-3.jpg?v=1785824634",
          "side": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-99-2.jpg?v=1785824634",
          "sole": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-99-5.jpg?v=1785824634",
          "front": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-99-1.jpg?v=1785824634"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Boots",
    "features": [
      "10",
      "11",
      "6",
      "7",
      "8"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "10",
      "11",
      "6",
      "7",
      "8",
      "9",
      "AW26",
      "Boots",
      "Brodin",
      "Brodin Mid",
      "Brown",
      "Clarks",
      "Fall Drop",
      "Footwear",
      "Lace",
      "Leather",
      "Men",
      "New",
      "New Arrival"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "A high-top trainer in premium leathers, Brodin Mid boasts a classic, simple design that matches every casual look. Underfoot, a super-soft footbed lends support where you need it most, while a lightweight, flexible sole grounds every step in total confidence. • Premium beeswax leather upper • Extreme Comfort foam footbed delivers lasting cushioning • Lace fastening delivers a secure, custom fit • EVA heelcup offers added stability • Lightweight, impact-absorbing EVA sole",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CLARKS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 103,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-99-1.jpg?v=1785824634",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-99-2.jpg?v=1785824634",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-99-3.jpg?v=1785824634",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-99-4.jpg?v=1785824634",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-99-5.jpg?v=1785824634"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "147-1724-99-6",
          "size": "6",
          "stock": 13
        },
        {
          "sku": "147-1724-99-7",
          "size": "7",
          "stock": 7
        },
        {
          "sku": "147-1724-99-8",
          "size": "8",
          "stock": 0
        },
        {
          "sku": "147-1724-99-9",
          "size": "9",
          "stock": 9
        },
        {
          "sku": "147-1724-99-10",
          "size": "10",
          "stock": 9
        },
        {
          "sku": "147-1724-99-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Boots",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15471747826035",
    "waterResistance": "Water Repellent",
    "shortDescription": "A high-top trainer in premium leathers, Brodin Mid boasts a classic, simple design that matches every casual look. Underfoot, a super-soft footbed lends support where you need it m",
    "sourceProductUrl": "https://clarks.in/products/clarks-men-brown-beige-brodin-mid-boots",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9622660415719",
    "mrp": 3499,
    "sku": "CA-ELAN-28-G-TAN-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9622660415719",
    "name": "ELAN-28 Tan",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cognac Tan",
    "price": 1949,
    "sport": "Lifestyle",
    "upper": "Pvc Synthetic",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-28_ELAN-28_TAN_04.webp?v=1783421961",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-28-TAN_3X4_9f370b26-abab-412c-bb21-6213fff95010.webp?v=1785929996",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-28_ELAN-28_TAN_01.jpg?v=1783421962",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-28_ELAN-28_TAN_05.webp?v=1783421962",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-28_ELAN-28_TAN_02.webp?v=1783421962"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Bringing a lighter, more contemporary mood to semi-formal dressing, the Campus ELAN-28 Men's Derby Shoes strike an effortless balance between classic styling and modern ease. Defined by clean lines and refined dotted detailing, the silhouette feels polished without appearing overly formal. The soft lycra lining ensures lasting comfort throughout the day, while the lightweight EVA sole keeps movement easy, whether you're heading into meetings or stepping out for the evening. The tan hue feels warm, contemporary, and full of character — a colourway that adds depth to tailored looks and an elevated finish to everyday smart-casual dressing. Occasion: Everyday Insole: Pu Foam-Molded Upper Material: Pvc Synthetic Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 81,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-28_ELAN-28_TAN_02.webp?v=1783421962",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-28_ELAN-28_TAN_01.jpg?v=1783421962",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-28-TAN_3X4_9f370b26-abab-412c-bb21-6213fff95010.webp?v=1785929996",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-28_ELAN-28_TAN_04.webp?v=1783421961",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-28_ELAN-28_TAN_05.webp?v=1783421962"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "ELAN-28-G-TAN-6",
          "size": "6",
          "stock": 5
        },
        {
          "sku": "ELAN-28-G-TAN-7",
          "size": "7",
          "stock": 14
        },
        {
          "sku": "ELAN-28-G-TAN-8",
          "size": "8",
          "stock": 13
        },
        {
          "sku": "ELAN-28-G-TAN-9",
          "size": "9",
          "stock": 11
        },
        {
          "sku": "ELAN-28-G-TAN-10",
          "size": "10",
          "stock": 6
        },
        {
          "sku": "ELAN-28-G-TAN-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 44,
    "sourceProductId": "9622660415719",
    "waterResistance": "No",
    "shortDescription": "Bringing a lighter, more contemporary mood to semi-formal dressing, the Campus ELAN-28 Men's Derby Shoes strike an effortless balance between classic styling and modern ease. Defin",
    "sourceProductUrl": "https://campusshoes.com/products/elan-28-tan-mens-formal-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9702190711015",
    "mrp": 2099,
    "sku": "CA-22L-1098-L-BLACK-PINK-4",
    "use": "Running",
    "code": "CAMPUS-9702190711015",
    "name": "MISS CR Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 904,
    "sport": "Running",
    "upper": "Mesh+Pvc+Printing+Welding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_BLACK-PINK_04.webp?v=1788929444",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_BLACK-PINK_03.webp?v=1788929445",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_BLACK-PINK_02.jpg?v=1788929445",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_BLACK-PINK_05.webp?v=1788929445",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_BLACK-PINK_01.webp?v=1788929444"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "new",
      "payday",
      "sale",
      "shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "new",
      "payday",
      "sale",
      "shoes",
      "topseller",
      "women",
      "women running shoes",
      "women shoes",
      "wss"
    ],
    "collections": [
      "Running Collection",
      "Sale"
    ],
    "description": "Women Black And Pink Lace-Up Running Shoes Featuring A Breathable Mesh Upper With All-Over Solid Texture And Contrast Side Stripes/Branding. Designed With Pillofoam Cushioning And A Memory Tech Lite Memory Foam Insole For Enhanced Comfort, Plus A Thick Eva Outsole For Lightweight Support. Finished With A Low-Top Profile, Padded Collar And Tongue, Soft Padded Textile Lining, And A Heel Pull Tab. Occasion: Everyday Insole: Memory Tech Lite Upper Material: Mesh+Pvc+Printing+Welding Technology: Pillofoam Care Instructions: Wipe With A Clean, Dry Cloth Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 38,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_BLACK-PINK_01.webp?v=1788929444",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_BLACK-PINK_02.jpg?v=1788929445",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_BLACK-PINK_03.webp?v=1788929445",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_BLACK-PINK_04.webp?v=1788929444",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MISSCR_22L-1098_BLACK-PINK_05.webp?v=1788929445"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "22L-1098-L-BLACK-PINK-4",
          "size": "4",
          "stock": 8
        },
        {
          "sku": "22L-1098-L-BLACK-PINK-5",
          "size": "5",
          "stock": 14
        },
        {
          "sku": "22L-1098-L-BLACK-PINK-6",
          "size": "6",
          "stock": 15
        },
        {
          "sku": "22L-1098-L-BLACK-PINK-7",
          "size": "7",
          "stock": 7
        },
        {
          "sku": "22L-1098-L-BLACK-PINK-8",
          "size": "8",
          "stock": 12
        }
      ]
    },
    "sourceCategory": "Women Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 57,
    "sourceProductId": "9702190711015",
    "waterResistance": "No",
    "shortDescription": "Women Black And Pink Lace-Up Running Shoes Featuring A Breathable Mesh Upper With All-Over Solid Texture And Contrast Side Stripes/Branding. Designed With Pillofoam Cushioning And ",
    "sourceProductUrl": "https://campusshoes.com/products/miss-cr-black-pink-womens-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9635047342311",
    "mrp": 1749,
    "sku": "CA-SS26-OPG-004-G-BROWN-IVORY-6",
    "use": "Sandals",
    "code": "CAMPUS-9635047342311",
    "name": "SS26-OPG-004 Brown",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cognac Tan",
    "price": 1399,
    "sport": "Lifestyle",
    "upper": "PVC",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_BROWN-IVORY_04.webp?v=1784200442",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_BROWN-IVORY_03.webp?v=1784200443",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_BROWN-IVORY_01.jpg?v=1784200442",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_BROWN-IVORY_05.webp?v=1784200442",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_BROWN-IVORY_02.webp?v=1784200442"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "c&s",
      "camp",
      "cs",
      "elan",
      "emp0"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "c&s",
      "camp",
      "cs",
      "elan",
      "emp0",
      "fs",
      "men",
      "men sandal casual",
      "men sandals & floaters",
      "men sandals & slippers",
      "mss",
      "nys",
      "payday",
      "s&s",
      "sss"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Campus ELAN Men’s Slippers bring together clean lines and effortless comfort in one easy-going pair. The broad asymmetrical PVC strap wraps naturally over the foot, while the adjustable buckle lets you fine-tune the fit with ease. The open-sided construction keeps things light and breathable, making this pair a natural choice for slow vacation mornings, weekend escapes, and everything in between. Underfoot, the soft, lightweight EVA footbed cushions every step with lasting comfort. Rich brown paired with contrasting ivory earns serious style points, making this pair hard to beat. Occasion: Everyday Insole: Footbed- Eva Upper Material: PVC Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 111,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_BROWN-IVORY_02.webp?v=1784200442",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_BROWN-IVORY_01.jpg?v=1784200442",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_BROWN-IVORY_03.webp?v=1784200443",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_BROWN-IVORY_04.webp?v=1784200442",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_BROWN-IVORY_05.webp?v=1784200442"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "SS26-OPG-004-G-BROWN-IVORY-6",
          "size": "6",
          "stock": 9
        },
        {
          "sku": "SS26-OPG-004-G-BROWN-IVORY-7",
          "size": "7",
          "stock": 15
        },
        {
          "sku": "SS26-OPG-004-G-BROWN-IVORY-8",
          "size": "8",
          "stock": 6
        },
        {
          "sku": "SS26-OPG-004-G-BROWN-IVORY-9",
          "size": "9",
          "stock": 15
        },
        {
          "sku": "SS26-OPG-004-G-BROWN-IVORY-10",
          "size": "10",
          "stock": 4
        }
      ]
    },
    "sourceCategory": "Men Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9635047342311",
    "waterResistance": "No",
    "shortDescription": "Campus ELAN Men’s Slippers bring together clean lines and effortless comfort in one easy-going pair. The broad asymmetrical PVC strap wraps naturally over the foot, while the adjus",
    "sourceProductUrl": "https://campusshoes.com/products/ss26-opg-004-brown-ivory-mens-sandals",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9717182791911",
    "mrp": 2299,
    "sku": "CA-22G-13499-G-WHT-AGATEGRY-6",
    "use": "Walking",
    "code": "CAMPUS-9717182791911",
    "name": "ATHERO White",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cloud White",
    "price": 1349,
    "sport": "Walking",
    "upper": "Mesh+Lycra+Raise Printing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_WHT-AGATEGRY_04.webp?v=1789474046",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_WHT-AGATEGRY_03.webp?v=1789474046",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_WHT-AGATEGRY_02.jpg?v=1789474046",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_WHT-AGATEGRY_05.webp?v=1789474046",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_WHT-AGATEGRY_01.webp?v=1789474046"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "men",
      "men shoes",
      "men walking shoes",
      "mss"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "men",
      "men shoes",
      "men walking shoes",
      "mss",
      "new",
      "payday",
      "sale",
      "shoes",
      "topseller"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Step Into Everyday Comfort With These Men’S Slip-On Walking Shoes Designed For Casual Wear And Travel. The Breathable Mesh Upper With Textured Detailing Helps Keep Your Feet Feeling Airy, While The Soft Fabric Lining Adds Comfort For All-Day Use. A Cushioned Campus Nitrofly Insole Provides A Soft Underfoot Feel With Moderate Arch Support, And The Low-Top, Round-Toe Slip-On Construction Offers Easy On/Off Convenience. Finished With A Durable Tpr Outsole And Anti Slip Sole Design For Improved Grip, This Pair Is Made For Daily Walking And Athleisure Styling. Occasion: Everyday Insole: Campus Nitrofly Upper Material: Mesh+Lycra+Raise Printing Technology: Anti Slip Sole Design Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 30,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_WHT-AGATEGRY_01.webp?v=1789474046",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_WHT-AGATEGRY_02.jpg?v=1789474046",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_WHT-AGATEGRY_03.webp?v=1789474046",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_WHT-AGATEGRY_04.webp?v=1789474046",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ATHERO_22G-13499_WHT-AGATEGRY_05.webp?v=1789474046"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "22G-13499-G-WHT-AGATEGRY-6",
          "size": "6",
          "stock": 15
        },
        {
          "sku": "22G-13499-G-WHT-AGATEGRY-7",
          "size": "7",
          "stock": 11
        },
        {
          "sku": "22G-13499-G-WHT-AGATEGRY-8",
          "size": "8",
          "stock": 14
        },
        {
          "sku": "22G-13499-G-WHT-AGATEGRY-9",
          "size": "9",
          "stock": 4
        },
        {
          "sku": "22G-13499-G-WHT-AGATEGRY-10",
          "size": "10",
          "stock": 4
        }
      ]
    },
    "sourceCategory": "Men Walking Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 41,
    "sourceProductId": "9717182791911",
    "waterResistance": "No",
    "shortDescription": "Step Into Everyday Comfort With These Men’S Slip-On Walking Shoes Designed For Casual Wear And Travel. The Breathable Mesh Upper With Textured Detailing Helps Keep Your Feet Feelin",
    "sourceProductUrl": "https://campusshoes.com/products/athero-wht-agate-gry-mens-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9294278230267",
    "mrp": 10869,
    "sku": "SU-HQ8035-004-10",
    "use": "Basketball",
    "code": "SUPERKICKS-9294278230267",
    "name": "LEBRON WITNESS IX EP { LIGHT BONE/PALE IVORY/FLAT PEWTER/MULTI COLOUR",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Travertine Cream",
    "price": 8695,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#e4ddcf",
        "name": "Travertine Cream",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/HQ8035-004_3.jpg?v=1778754040",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/HQ8035-004_4.jpg?v=1778754040",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/HQ8035-004_5.jpg?v=1778754040",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/HQ8035-004_2.jpg?v=1778754040",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/HQ8035-004_1_4bb9b7b9-1304-4da9-9d66-dd4b71bc14f4.jpg?v=1779689611"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Basketball",
    "features": [
      "abc-camp",
      "Basketball Sneakers",
      "Basketball10",
      "Footwear",
      "For Footwear"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "abc-camp",
      "Basketball Sneakers",
      "Basketball10",
      "Brand - Nike",
      "Footwear",
      "For Footwear",
      "Franchise: LEBRON",
      "free-delivery",
      "FREE-SHIPPING",
      "Gender - Men",
      "JORDAN-NIKE",
      "New Arrivals",
      "Newadss",
      "NO-COD",
      "Non Hype",
      "season: SS26",
      "Sneakers",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "When LeBron needs to reach deep into his seemingly endless well of stamina, he wants a shoe that can help him stay energised all game. With a full-length ReactX foam midsole helping keep him spry, the LeBron Witness IX can help The King cross the finishing line fresh. With its extra-durable rubber outsole, this version gives you traction for outdoor courts. A plush ride ReactX foam, 13% more responsive than previous React technology, offers full-length responsiveness. It gives you a stable, plush sensation that helps keep your legs fresh, crucial for optimising speed and leaping ability. Lock in The upper is made from a synthetic material that helps provide the necessary ventilation for all-day wear. Play anywhere The outsole is made from a rubber compound that gives you optimal lateral support both indoors and outdoors. It stretches from the toe tip around the heel for enhanced durability. More benefits Supportive lacing and webbing offer a secure fit.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 33,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/HQ8035-004_1_4bb9b7b9-1304-4da9-9d66-dd4b71bc14f4.jpg?v=1779689611",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/HQ8035-004_5.jpg?v=1778754040",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/HQ8035-004_4.jpg?v=1778754040",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/HQ8035-004_3.jpg?v=1778754040",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/HQ8035-004_2.jpg?v=1778754040"
    ],
    "sizeInventory": {
      "Travertine Cream": [
        {
          "sku": "HQ8035-004-7",
          "size": "7",
          "stock": 0
        },
        {
          "sku": "HQ8035-004-8",
          "size": "8",
          "stock": 0
        },
        {
          "sku": "HQ8035-004-9",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "HQ8035-004-10",
          "size": "10",
          "stock": 9
        },
        {
          "sku": "HQ8035-004-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Basketball Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9294278230267",
    "waterResistance": "No",
    "shortDescription": "When LeBron needs to reach deep into his seemingly endless well of stamina, he wants a shoe that can help him stay energised all game. With a full-length ReactX foam midsole helpin",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-lebron-witness-ix-ep-light-bone-pale-ivory-flat-pewter-multi-colour",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9401014092027",
    "mrp": 6874,
    "sku": "SU-RCVRYSK1-6.5",
    "use": "Slippers",
    "code": "SUPERKICKS-9401014092027",
    "name": "FRESH FOAM RCVRY { PHANTOM WITH PARCHMENT",
    "sole": "Not specified",
    "brand": "NEW BALANCE",
    "color": "6.5",
    "price": 5499,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "6.5",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_025ca10d-fbcb-4e62-9a90-ef9de7eaac49.jpg?v=1787746599",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/25_ec873740-84ef-4587-aa97-0c2dc5f26f1d.jpg?v=1787746599",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_d0c254b8-19e8-43ee-8801-e5a188ac6416.jpg?v=1787746599",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_13398360-d8e8-4a17-a5ef-d11fb5037ddc.jpg?v=1787746599",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_13398360-d8e8-4a17-a5ef-d11fb5037ddc.jpg?v=1787746599"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Footwear",
      "Franchise: NEW BALANCE SLIDE",
      "New Arrivals",
      "NO-COD",
      "Slides and Sandals"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - New Balance",
      "Footwear",
      "Franchise: NEW BALANCE SLIDE",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Slides and Sandals",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The Fresh Foam RCVRY Slide brings world-class comfort to athletes recovering from tough workouts and big games.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 132,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_13398360-d8e8-4a17-a5ef-d11fb5037ddc.jpg?v=1787746599",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_d0c254b8-19e8-43ee-8801-e5a188ac6416.jpg?v=1787746599",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/25_ec873740-84ef-4587-aa97-0c2dc5f26f1d.jpg?v=1787746599",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_025ca10d-fbcb-4e62-9a90-ef9de7eaac49.jpg?v=1787746599"
    ],
    "sizeInventory": {
      "6.5": [
        {
          "sku": "RCVRYSK1-6.5",
          "size": "6.5",
          "stock": 12
        },
        {
          "sku": "RCVRYSK1-7.5",
          "size": "7.5",
          "stock": 10
        },
        {
          "sku": "RCVRYSK1-8.5",
          "size": "8.5",
          "stock": 5
        },
        {
          "sku": "RCVRYSK1-9.5",
          "size": "9.5",
          "stock": 7
        },
        {
          "sku": "RCVRYSK1-10.5",
          "size": "10.5",
          "stock": 9
        },
        {
          "sku": "RCVRYSK1-11.5",
          "size": "11.5",
          "stock": 7
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9401014092027",
    "waterResistance": "No",
    "shortDescription": "The Fresh Foam RCVRY Slide brings world-class comfort to athletes recovering from tough workouts and big games.",
    "sourceProductUrl": "https://www.superkicks.in/products/new-balance-fresh-foam-rcvry-phantom-with-parchment",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15399393132795",
    "mrp": 24999,
    "sku": "SU-LB5626-7",
    "use": "Sneakers",
    "code": "SUPERKICKS-15399393132795",
    "name": "X HELLSTAR MEGARIDE S2 { BRIGHT RED/CORE BLACK",
    "sole": "Not specified",
    "brand": "ADIDAS",
    "color": "Core Black",
    "price": 19999,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_6717105b-4996-4783-a769-86a45b464753.jpg?v=1791200321",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_fe1f8933-6572-4b57-a7b4-b080348e070e.jpg?v=1791200321",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_8c3bf1df-98e5-4480-8a66-36b1f380424c.jpg?v=1791200321",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/8_d58b38ac-acf0-4f72-a97c-33ad55b20266.jpg?v=1791200321",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_f76e5c19-4b05-41a7-a9bd-69b0c95be2fb.jpg?v=1791200321"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.3,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Coming Soon",
      "Enddate__15 October 2026 23:59",
      "Footwear",
      "Franchise - Hellstar MEGARIDE S2",
      "New Arrivals"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Adidas",
      "Brand - Adidas Originals",
      "Coming Soon",
      "Enddate__15 October 2026 23:59",
      "Footwear",
      "Franchise - Hellstar MEGARIDE S2",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers",
      "Startdate__10 October 2026 00:01"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "HELLSTAR and adidas turn the Megaride S2 into something far more sinister. The sculpted silhouette is wrapped in raised red flame overlays that burn across the upper before fading into black at the heel. A zippered shroud replaces the usual lacing setup, while glossy heel panels, metallic co-branding and HELLSTAR graphics push the futuristic aesthetic further. Underfoot, the exposed Megaride cushioning and translucent outsole carry the flame motif through to the finish.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 64,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_f76e5c19-4b05-41a7-a9bd-69b0c95be2fb.jpg?v=1791200321",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_8c3bf1df-98e5-4480-8a66-36b1f380424c.jpg?v=1791200321",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_fe1f8933-6572-4b57-a7b4-b080348e070e.jpg?v=1791200321",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_6717105b-4996-4783-a769-86a45b464753.jpg?v=1791200321",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/8_d58b38ac-acf0-4f72-a97c-33ad55b20266.jpg?v=1791200321"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "LB5626-7",
          "size": "7",
          "stock": 7
        },
        {
          "sku": "LB5626-8",
          "size": "8",
          "stock": 6
        },
        {
          "sku": "LB5626-9",
          "size": "9",
          "stock": 9
        },
        {
          "sku": "LB5626-10",
          "size": "10",
          "stock": 8
        },
        {
          "sku": "LB5626-11",
          "size": "11",
          "stock": 10
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15399393132795",
    "waterResistance": "No",
    "shortDescription": "HELLSTAR and adidas turn the Megaride S2 into something far more sinister. The sculpted silhouette is wrapped in raised red flame overlays that burn across the upper before fading ",
    "sourceProductUrl": "https://www.superkicks.in/products/adidas-originals-x-hellstar-megaride-s2-bright-red-core-black",
    "inventoryCountsAreExact": false
  },
  {
    "id": "clarks-15471747989875",
    "mrp": 9999,
    "sku": "CL-147-1724-12-7",
    "use": "Boots",
    "code": "CLARKS-15471747989875",
    "name": "Brown Brodin Mid Boots",
    "sole": "Not specified",
    "brand": "CLARKS",
    "color": "Cognac Tan",
    "price": 7999,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-12-4.jpg?v=1785824639",
          "back": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-12-3.jpg?v=1785824639",
          "side": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-12-2.jpg?v=1785824639",
          "sole": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-12-5.jpg?v=1785824639",
          "front": "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-12-1.jpg?v=1785824639"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Boots",
    "features": [
      "10",
      "11",
      "6",
      "7",
      "8"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "10",
      "11",
      "6",
      "7",
      "8",
      "9",
      "AW26",
      "Boots",
      "Brodin",
      "Brodin Mid",
      "Brown",
      "Clarks",
      "Fall Drop",
      "Footwear",
      "Lace",
      "Leather",
      "Men",
      "New",
      "New Arrival"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "A high-top trainer in premium leathers, Brodin Mid boasts a classic, simple design that matches every casual look. Underfoot, a super-soft footbed lends support where you need it most, while a lightweight, flexible sole grounds every step in total confidence. • Premium beeswax leather upper • Extreme Comfort foam footbed delivers lasting cushioning • Lace fastening delivers a secure, custom fit • EVA heelcup offers added stability • Lightweight, impact-absorbing EVA sole",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CLARKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 135,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-12-1.jpg?v=1785824639",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-12-2.jpg?v=1785824639",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-12-3.jpg?v=1785824639",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-12-4.jpg?v=1785824639",
      "https://cdn.shopify.com/s/files/1/0937/8145/9315/files/147-1724-12-5.jpg?v=1785824639"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "147-1724-12-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "147-1724-12-7",
          "size": "7",
          "stock": 10
        },
        {
          "sku": "147-1724-12-8",
          "size": "8",
          "stock": 9
        },
        {
          "sku": "147-1724-12-9",
          "size": "9",
          "stock": 4
        },
        {
          "sku": "147-1724-12-10",
          "size": "10",
          "stock": 11
        },
        {
          "sku": "147-1724-12-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Boots",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15471747989875",
    "waterResistance": "Water Repellent",
    "shortDescription": "A high-top trainer in premium leathers, Brodin Mid boasts a classic, simple design that matches every casual look. Underfoot, a super-soft footbed lends support where you need it m",
    "sourceProductUrl": "https://clarks.in/products/clarks-men-brown-brodin-mid-boots",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9622660448487",
    "mrp": 3499,
    "sku": "CA-ELAN-09-G-WHT-NAVY-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9622660448487",
    "name": "ELAN-09 White",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cloud White",
    "price": 1949,
    "sport": "Lifestyle",
    "upper": "Pu",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_WHT-NAVY_04.webp?v=1783421881",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_WHT-NAVY_03.webp?v=1783421881",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_WHT-NAVY_01.jpg?v=1783421882",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_WHT-NAVY_05_d3bb1291-1d50-494e-9163-90ccff0c4638.webp?v=1783421884",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_WHT-NAVY_02.webp?v=1783421882"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The best-dressed outfits often begin with the simplest choices - the Campus ELAN-09 Men's Casual Shoes are simply one. Clean lines, refined detailing, and a silhouette that always feels chic. The sleek PU upper delivers a polished finish, while the dual-colour TPR sole introduces just enough contrast to keep the design feeling fresh and contemporary. Inside, the soft lycra lining ensures comfort stays with you from the first meeting to the last plan of the day. Finished in white n' navy, ELAN-09 slips effortlessly between formal-inspired dressing and elevated everyday style. Occasion: Everyday Insole: Eva+Pu Foam Die Cut Upper Material: Pu Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 58,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_WHT-NAVY_02.webp?v=1783421882",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_WHT-NAVY_01.jpg?v=1783421882",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_WHT-NAVY_03.webp?v=1783421881",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_WHT-NAVY_04.webp?v=1783421881",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-09_ELAN-09_WHT-NAVY_05_d3bb1291-1d50-494e-9163-90ccff0c4638.webp?v=1783421884"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "ELAN-09-G-WHT-NAVY-6",
          "size": "6",
          "stock": 8
        },
        {
          "sku": "ELAN-09-G-WHT-NAVY-7",
          "size": "7",
          "stock": 11
        },
        {
          "sku": "ELAN-09-G-WHT-NAVY-8",
          "size": "8",
          "stock": 12
        },
        {
          "sku": "ELAN-09-G-WHT-NAVY-9",
          "size": "9",
          "stock": 9
        },
        {
          "sku": "ELAN-09-G-WHT-NAVY-10",
          "size": "10",
          "stock": 10
        },
        {
          "sku": "ELAN-09-G-WHT-NAVY-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 44,
    "sourceProductId": "9622660448487",
    "waterResistance": "No",
    "shortDescription": "The best-dressed outfits often begin with the simplest choices - the Campus ELAN-09 Men's Casual Shoes are simply one. Clean lines, refined detailing, and a silhouette that always ",
    "sourceProductUrl": "https://campusshoes.com/products/elan-09-wht-navy-mens-formal-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9412893933799",
    "mrp": 2399,
    "sku": "CA-22G-827-G-NAVY-MSTD-6",
    "use": "Running",
    "code": "CAMPUS-9412893933799",
    "name": "DECCAN Navy",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Deep Navy",
    "price": 1399,
    "sport": "Running",
    "upper": "Mesh",
    "width": "Medium",
    "colors": [
      {
        "hex": "#1f2937",
        "name": "Deep Navy",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/DECCAN_22G-827_NAVY-MSTD_04_13f36c2f-b99c-4f98-86b8-bb600f3ba350.webp?v=1764844401",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/DECCAN_22G-827_NAVY-MSTD_03_8e999676-0753-4780-96f8-97010692416d.webp?v=1764844401",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/DECCAN_22G-827_NAVY-MSTD_02_67ca06fb-ca81-4066-ba09-37eeeb343617.jpg?v=1764844400",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/DECCAN_22G-827_NAVY-MSTD_05_89406ba5-82e6-4a41-bea9-0b5efe256c08.webp?v=1764844401",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/DECCAN_22G-827_NAVY-MSTD_01_15156690-658b-4ff7-9b1d-49eaf5005353.webp?v=1764844401"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "bfs24",
      "blckfrdy",
      "btc",
      "camp",
      "campus10"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bfs24",
      "blckfrdy",
      "btc",
      "camp",
      "campus10",
      "cbs",
      "cs",
      "ds",
      "fs",
      "holi",
      "m&w running shoes",
      "men",
      "men running shoes",
      "men shoes",
      "mss",
      "msu1000",
      "nd",
      "new10",
      "nys",
      "payday",
      "rsu2000",
      "sale",
      "ss599",
      "ss699",
      "ss899",
      "stf999",
      "upt",
      "vsale",
      "week40"
    ],
    "collections": [
      "Running Collection",
      "Sale"
    ],
    "description": "Look smart while you are wearing this pair of shoes from Campus. The phylon sole provides the required support and stability to your feet, making it an ideal choice to invest in. The sturdy premium quality mesh upper keeps your feet comfortable and allows you to indulge in your workouts for long periods. Wear it with a pair of trackpants and a T-Shirt. Occasion: Everyday Insole: Super Soft Care Instructions: Wash in Lukewarm Water. Do Not Bleach Upper Material: Mesh Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi, 110041 Country of Origin: India",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 134,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/DECCAN_22G-827_NAVY-MSTD_01_15156690-658b-4ff7-9b1d-49eaf5005353.webp?v=1764844401",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/DECCAN_22G-827_NAVY-MSTD_02_67ca06fb-ca81-4066-ba09-37eeeb343617.jpg?v=1764844400",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/DECCAN_22G-827_NAVY-MSTD_03_8e999676-0753-4780-96f8-97010692416d.webp?v=1764844401",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/DECCAN_22G-827_NAVY-MSTD_04_13f36c2f-b99c-4f98-86b8-bb600f3ba350.webp?v=1764844401",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/DECCAN_22G-827_NAVY-MSTD_05_89406ba5-82e6-4a41-bea9-0b5efe256c08.webp?v=1764844401"
    ],
    "sizeInventory": {
      "Deep Navy": [
        {
          "sku": "22G-827-G-NAVY-MSTD-6",
          "size": "6",
          "stock": 13
        },
        {
          "sku": "22G-827-G-NAVY-MSTD-7",
          "size": "7",
          "stock": 10
        },
        {
          "sku": "22G-827-G-NAVY-MSTD-8",
          "size": "8",
          "stock": 9
        },
        {
          "sku": "22G-827-G-NAVY-MSTD-9",
          "size": "9",
          "stock": 13
        },
        {
          "sku": "22G-827-G-NAVY-MSTD-10",
          "size": "10",
          "stock": 5
        }
      ]
    },
    "sourceCategory": "Men Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 42,
    "sourceProductId": "9412893933799",
    "waterResistance": "No",
    "shortDescription": "Look smart while you are wearing this pair of shoes from Campus. The phylon sole provides the required support and stability to your feet, making it an ideal choice to invest in. T",
    "sourceProductUrl": "https://campusshoes.com/products/deccan-navy-mst-mens-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9635047473383",
    "mrp": 1749,
    "sku": "CA-SS26-OPG-006-G-BROWN-IVORY-6",
    "use": "Sandals",
    "code": "CAMPUS-9635047473383",
    "name": "SS26-OPG-006 Brown",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cognac Tan",
    "price": 1399,
    "sport": "Lifestyle",
    "upper": "PVC",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_BROWN-IVORY_04.webp?v=1784200353",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_BROWN-IVORY_03.webp?v=1784200353",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_BROWN-IVORY_01.jpg?v=1784200353",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_BROWN-IVORY_05.webp?v=1784200353",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_BROWN-IVORY_02.webp?v=1784200353"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "c&s",
      "camp",
      "cs",
      "elan",
      "emp0"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "c&s",
      "camp",
      "cs",
      "elan",
      "emp0",
      "fs",
      "men",
      "men sandal casual",
      "men sandals & floaters",
      "men sandals & slippers",
      "mss",
      "nys",
      "payday",
      "s&s",
      "sss"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The art of taking it easy. Campus ELAN Men’s Slippers blend sculptural design with everyday comfort in a pair that's impossible to overlook. The broad PVC strap, thumb loop, and adjustable buckle come together to create a distinctive silhouette that feels both modern and timeless. Underfoot, the soft EVA footbed and lightweight EVA sole keep every step easy, whether you're heading out for a slow morning coffee or winding down after a long day. Rich brown paired with contrasting ivory brings warmth, character, and an effortlessly elevated finish. Occasion: Everyday Insole: Footbed- Eva Upper Material: PVC Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 75,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_BROWN-IVORY_02.webp?v=1784200353",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_BROWN-IVORY_01.jpg?v=1784200353",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_BROWN-IVORY_03.webp?v=1784200353",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_BROWN-IVORY_04.webp?v=1784200353",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_BROWN-IVORY_05.webp?v=1784200353"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "SS26-OPG-006-G-BROWN-IVORY-6",
          "size": "6",
          "stock": 7
        },
        {
          "sku": "SS26-OPG-006-G-BROWN-IVORY-7",
          "size": "7",
          "stock": 12
        },
        {
          "sku": "SS26-OPG-006-G-BROWN-IVORY-8",
          "size": "8",
          "stock": 13
        },
        {
          "sku": "SS26-OPG-006-G-BROWN-IVORY-9",
          "size": "9",
          "stock": 15
        },
        {
          "sku": "SS26-OPG-006-G-BROWN-IVORY-10",
          "size": "10",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9635047473383",
    "waterResistance": "No",
    "shortDescription": "The art of taking it easy. Campus ELAN Men’s Slippers blend sculptural design with everyday comfort in a pair that's impossible to overlook. The broad PVC strap, thumb loop, and ad",
    "sourceProductUrl": "https://campusshoes.com/products/ss26-opg-006-brown-ivory-mens-sandals",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719075930343",
    "mrp": 799,
    "sku": "CA-10G-149-L-LGRY-BPINK-4",
    "use": "Walking",
    "code": "CAMPUS-9719075930343",
    "name": "ZOE PLUS Grey",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Concrete Grey",
    "price": 684,
    "sport": "Walking",
    "upper": "Mesh+Printing+Welding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#8a8885",
        "name": "Concrete Grey",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZOE-PLUSE_10G-149_L.GRY-B.PINK_4.webp?v=1789557580",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZOE-PLUSE_10G-149_L.GRY-B.PINK_3.webp?v=1789557580",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZOE-PLUSE_10G-149_L.GRY-B.PINK_1.webp?v=1789557580",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZOE-PLUSE_10G-149_L.GRY-B.PINK_5.webp?v=1789557580",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZOE-PLUSE_10G-149_L.GRY-B.PINK_2.jpg?v=1789557580"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "emp0",
      "sale",
      "shshoes",
      "topseller"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "sale",
      "shshoes",
      "topseller",
      "women",
      "women shoes",
      "women walking shoes",
      "wss"
    ],
    "collections": [
      "Trending Now"
    ],
    "description": "Highlight Your Style Quotient With This Pair Of Walking Shoes For Women From Campus. Made Of A Superior Quality Knitted Mesh Upper, These Cool Slip On Feature A Fitted Closure, And A Perfect Shaped Tip And Phylon Sole For Flexibility. The Foam Insole Provides Comfortable Movement To Your Feet And The Non-Abrasive Feature Ensures Optimum Surface Traction. Occasion: Everyday Insole: Memory Foam Upper Material: Mesh+Printing+Welding Technology: Pillo Foam Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 75,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZOE-PLUSE_10G-149_L.GRY-B.PINK_2.jpg?v=1789557580",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZOE-PLUSE_10G-149_L.GRY-B.PINK_1.webp?v=1789557580",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZOE-PLUSE_10G-149_L.GRY-B.PINK_3.webp?v=1789557580",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZOE-PLUSE_10G-149_L.GRY-B.PINK_4.webp?v=1789557580",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZOE-PLUSE_10G-149_L.GRY-B.PINK_5.webp?v=1789557580"
    ],
    "sizeInventory": {
      "Concrete Grey": [
        {
          "sku": "10G-149-L-LGRY-BPINK-4",
          "size": "4",
          "stock": 8
        },
        {
          "sku": "10G-149-L-LGRY-BPINK-5",
          "size": "5",
          "stock": 6
        },
        {
          "sku": "10G-149-L-LGRY-BPINK-6",
          "size": "6",
          "stock": 5
        },
        {
          "sku": "10G-149-L-LGRY-BPINK-7",
          "size": "7",
          "stock": 7
        },
        {
          "sku": "10G-149-L-LGRY-BPINK-8",
          "size": "8",
          "stock": 12
        }
      ]
    },
    "sourceCategory": "Women Walking Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 14,
    "sourceProductId": "9719075930343",
    "waterResistance": "No",
    "shortDescription": "Highlight Your Style Quotient With This Pair Of Walking Shoes For Women From Campus. Made Of A Superior Quality Knitted Mesh Upper, These Cool Slip On Feature A Fitted Closure, And",
    "sourceProductUrl": "https://campusshoes.com/products/zoe-plus-l-gry-b-pink-womens-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9310261412091",
    "mrp": 13999,
    "sku": "SU-31279301-7",
    "use": "Basketball",
    "code": "SUPERKICKS-9310261412091",
    "name": "MB.05 FLUTTER MID BASKETBALL { GLOWING RED/PUMA BLACK",
    "sole": "Not specified",
    "brand": "PUMA",
    "color": "Core Black",
    "price": 11199,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_e612fa3f-2971-4259-b188-6da6d7ca231d.jpg?v=1778762123",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_a544fb88-8497-4164-b950-87aff811951a.jpg?v=1778762123",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_1b06e864-4040-4dfe-b7b4-a636a092e7dc.jpg?v=1778762123",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_4206d304-9d49-49f4-a3da-035a02855f70.jpg?v=1778762123",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_a493ed66-9e7a-4813-99ad-f7c80ee75b7a.jpg?v=1778762123"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Basketball",
    "features": [
      "Width: Regular",
      "Toe Type: Rounded",
      "Fastener: Laces",
      "Heel type: Flat",
      "High-abrasion tread pattern",
      "Moulded forefoot straps for additional support"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Puma",
      "Footwear",
      "For Footwear",
      "Franchise :  MB.05 FLUTTER MID BASKETBALL",
      "free-delivery",
      "Fresh Arrivals",
      "Gender - Men",
      "New Arrivals",
      "Newadss",
      "Newppadd",
      "NO-COD",
      "Non Hype",
      "Product Style: Lifestyle",
      "season: SS26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "LaMelo Ball’s fifth signature shoe, the MB.05, brings rockstar energy to the court. A moulded forefoot strap helps with a lockdown fit, and unique materials add to the design. This drop is highlighted by a butterfly graphic with bright neon orange to help you stand out. DETAILS: Width: Regular Toe Type: Rounded Fastener: Laces Heel type: Flat High-abrasion tread pattern Moulded forefoot straps for additional support",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 89,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_a493ed66-9e7a-4813-99ad-f7c80ee75b7a.jpg?v=1778762123",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_1b06e864-4040-4dfe-b7b4-a636a092e7dc.jpg?v=1778762123",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_a544fb88-8497-4164-b950-87aff811951a.jpg?v=1778762123",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_e612fa3f-2971-4259-b188-6da6d7ca231d.jpg?v=1778762123",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_4206d304-9d49-49f4-a3da-035a02855f70.jpg?v=1778762123"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "31279301-7",
          "size": "7",
          "stock": 14
        },
        {
          "sku": "31279301-8",
          "size": "8",
          "stock": 6
        },
        {
          "sku": "31279301-9",
          "size": "9",
          "stock": 10
        },
        {
          "sku": "31279301-10",
          "size": "10",
          "stock": 13
        },
        {
          "sku": "31279301-11",
          "size": "11",
          "stock": 15
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9310261412091",
    "waterResistance": "No",
    "shortDescription": "LaMelo Ball’s fifth signature shoe, the MB.05, brings rockstar energy to the court. A moulded forefoot strap helps with a lockdown fit, and unique materials add to the design. This",
    "sourceProductUrl": "https://www.superkicks.in/products/puma-mb-05-flutter-mid-basketball-glowing-red-puma-black",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9401421005051",
    "mrp": 9994,
    "sku": "SU-212136-90H-7",
    "use": "Slippers",
    "code": "SUPERKICKS-9401421005051",
    "name": "YOSHI CLASSIC CLOG { GREEN/WHITE",
    "sole": "Not specified",
    "brand": "CROCS",
    "color": "Cloud White",
    "price": 7995,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_b4d6844d-098c-457e-a448-afee03ce2231.jpg?v=1788179485",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_40f97801-1d70-4420-92bf-c3303480a3e6.jpg?v=1788179485",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_a1d1ba4d-14a1-40e0-b8d2-7e737a95b049.jpg?v=1788179485",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_04c68082-0126-471a-b836-c6666abec685.jpg?v=1788179485",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_1f923602-98c8-47c3-8b73-38a96d1de12f.jpg?v=1788179485"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.3,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Footwear",
      "Franchise: CROCS SLIDE",
      "New Arrivals",
      "NO-COD",
      "Sneakers"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Crocs",
      "Footwear",
      "Franchise: CROCS SLIDE",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Straight out of the Mushroom Kingdom, the Crocs Yoshi Classic Clog (Super Mario™ collection) brings playful comfort to every step. A vivid green base pairs with orange fin detailing inspired by Yoshi's wings, finished with a custom egg-themed rivet and six exclusive Jibbitz™ charms for a fit that's all your own. Lightweight, water-friendly, and quick-drying, with Crocs' signature 360-degree comfort and pivoting heel strap for a secure hold.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 52,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_1f923602-98c8-47c3-8b73-38a96d1de12f.jpg?v=1788179485",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_a1d1ba4d-14a1-40e0-b8d2-7e737a95b049.jpg?v=1788179485",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_40f97801-1d70-4420-92bf-c3303480a3e6.jpg?v=1788179485",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_b4d6844d-098c-457e-a448-afee03ce2231.jpg?v=1788179485",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_04c68082-0126-471a-b836-c6666abec685.jpg?v=1788179485"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "212136-90H-7",
          "size": "7",
          "stock": 13
        },
        {
          "sku": "212136-90H-8",
          "size": "8",
          "stock": 11
        },
        {
          "sku": "212136-90H-9",
          "size": "9",
          "stock": 7
        },
        {
          "sku": "212136-90H-10",
          "size": "10",
          "stock": 8
        },
        {
          "sku": "212136-90H-11",
          "size": "11",
          "stock": 15
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9401421005051",
    "waterResistance": "No",
    "shortDescription": "Straight out of the Mushroom Kingdom, the Crocs Yoshi Classic Clog (Super Mario™ collection) brings playful comfort to every step. A vivid green base pairs with orange fin detailin",
    "sourceProductUrl": "https://www.superkicks.in/products/crocs-yoshi-classic-clog-green-white",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-10280578547963",
    "mrp": 14619,
    "sku": "SU-IO2076-100-3",
    "use": "Sneakers",
    "code": "SUPERKICKS-10280578547963",
    "name": "AIR JORDAN 3 RETRO \"PLAY YOUR WAY\" (GS) { CHALK/TRACK RED-TRUE BLUE-KINETIC GREEN",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Royal Blue",
    "price": 11695,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#2563eb",
        "name": "Royal Blue",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_97265b95-90f6-461c-8177-62f6ba68d63b.jpg?v=1790591524",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_cd879317-9e4a-4f0f-95fe-7631a8345f4b.jpg?v=1790591524",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_40df4bcc-50b6-4a17-bc9f-aa9089839c41.jpg?v=1790591524",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_acf65bfa-4860-44cf-9db5-4c02947a878d.jpg?v=1790591524",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_98fc4b95-c177-4518-bc60-18e65fa9aa36.jpg?v=1790591524"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Footwear",
      "Franchise: AIR JORDAN 3",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Jordan",
      "Footwear",
      "Franchise: AIR JORDAN 3",
      "Gender - Women",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "Sweater weather? We got you. The AJ3 returns with all its style and grace. A rustic \"Fireside\" colorway mixes Velvet Brown with Pearl White Jumpman branding and Rust Pink laces. Premium leather in the upper—with luxurious elephant print texture—combines with visible Air cushioning for a smooth, comfy ride. Even the smoldering embers can't compete. So, kick back and let the heat from your sneakers warm your feet by the fire. Cue the starry skies and toasted marshmallows. Leather and nubuck upper is durable and comfortable. Nike Air technology absorbs impact for cushioning with every step. Plush and comfortable, Max Air cushioning has just the right amount of support. Grippy rubber outsole helps provide durable traction. More Details Foam midsole",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 118,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_98fc4b95-c177-4518-bc60-18e65fa9aa36.jpg?v=1790591524",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_40df4bcc-50b6-4a17-bc9f-aa9089839c41.jpg?v=1790591524",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_cd879317-9e4a-4f0f-95fe-7631a8345f4b.jpg?v=1790591524",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_97265b95-90f6-461c-8177-62f6ba68d63b.jpg?v=1790591524",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_acf65bfa-4860-44cf-9db5-4c02947a878d.jpg?v=1790591524"
    ],
    "sizeInventory": {
      "Royal Blue": [
        {
          "sku": "IO2076-100-3",
          "size": "3",
          "stock": 15
        },
        {
          "sku": "IO2076-100-4",
          "size": "4",
          "stock": 11
        },
        {
          "sku": "IO2076-100-5",
          "size": "5",
          "stock": 12
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "10280578547963",
    "waterResistance": "No",
    "shortDescription": "Sweater weather? We got you. The AJ3 returns with all its style and grace. A rustic \"Fireside\" colorway mixes Velvet Brown with Pearl White Jumpman branding and Rust Pink laces. Pr",
    "sourceProductUrl": "https://www.superkicks.in/products/jordan-air-jordan-3-retro-play-your-way-chalk-track-red-true-blue-kinetic-green",
    "inventoryCountsAreExact": false
  },
  {
    "id": "redtape-8921322160318",
    "mrp": 12499,
    "sku": "RE-RWB0002B-36",
    "use": "Boots",
    "code": "REDTAPE-8921322160318",
    "name": "Women’s Burgundy Chelsea Boots",
    "sole": "Not specified",
    "brand": "RED TAPE",
    "color": "3",
    "price": 2000,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "3",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0002_4.jpg?v=1786700488",
          "back": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0002_3.jpg?v=1786700488",
          "side": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0002_2.jpg?v=1786700488",
          "sole": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0002_5.jpg?v=1786700488",
          "front": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0002_1.jpg?v=1786700488"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Boots",
    "features": [
      "Leather Upper: Premium construction for durability and a refined finish.",
      "Chelsea Boot Design: Classic ankle-length silhouette for versatile styling.",
      "TPR Sole: Provides dependable grip, flexibility, and durable wear.",
      "Round Toe: Offers comfortable space for natural foot movement.",
      "Heel: Adds elegant elevation to everyday outfits.",
      "Material: Upper – Leather | Sole – TPR"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Boots",
      "Footwear",
      "Women"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Elevate your everyday style with the Red Tape women’s Burgundy Chelsea boots, designed with a refined ankle-length silhouette and timeless casual appeal. Crafted with a premium leather upper, these boots offer a polished finish with durable everyday wear. The TPR sole provides dependable grip and flexibility, while the round toe allows comfortable foot movement. Finished with a stylish 1.5-inch heel, these Chelsea boots add subtle elevation and pair effortlessly with jeans, trousers, skirts, and dresses. Features Leather Upper: Premium construction for durability and a refined finish. Chelsea Boot Design: Classic ankle-length silhouette for versatile styling. TPR Sole: Provides dependable grip, flexibility, and durable wear. Round Toe: Offers comfortable space for natural foot movement. Heel: Adds elegant elevation to everyday outfits. Product Specification Material: Upper – Leather | Sole – TPR Design: Ankle-length Chelsea boot silhouette with a round toe for refined casual styling Heel: 1.5-inch heel adds elegant elevation while enhancing the overall silhouette Benefits: Leather upper and TPR sole combine durability, flexibility, and dependable grip Utility: Ideal for casual outings, travel, dinners, weekend styling, and everyday wear",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "REDTAPE",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 32,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0002_1.jpg?v=1786700488",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0002_2.jpg?v=1786700488",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0002_3.jpg?v=1786700488",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0002_4.jpg?v=1786700488",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0002_5.jpg?v=1786700488"
    ],
    "sizeInventory": {
      "3": [
        {
          "sku": "RWB0002B-36",
          "size": "3",
          "stock": 4
        },
        {
          "sku": "RWB0002B-37",
          "size": "4",
          "stock": 4
        },
        {
          "sku": "RWB0002B-38",
          "size": "5",
          "stock": 8
        },
        {
          "sku": "RWB0002B-39",
          "size": "6",
          "stock": 13
        },
        {
          "sku": "RWB0002B-40",
          "size": "7",
          "stock": 6
        }
      ]
    },
    "sourceCategory": "Boots",
    "countryOfOrigin": "India",
    "discountPercent": 84,
    "sourceProductId": "8921322160318",
    "waterResistance": "Water Repellent",
    "shortDescription": "Elevate your everyday style with the Red Tape women’s Burgundy Chelsea boots, designed with a refined ankle-length silhouette and timeless casual appeal. Crafted with a premium lea",
    "sourceProductUrl": "https://redtape.com/products/red-tape-womens-burgundy-chelsea-boots-leather-ankle-length-boots-rwb0002b",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9565154738407",
    "mrp": 3499,
    "sku": "CA-SS26-SCG-001-G-ALLBLK-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9565154738407",
    "name": "ELAN-01 Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 1649,
    "sport": "Lifestyle",
    "upper": "PU",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01BLACK_04.webp?v=1780307513",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-01_BLACK3X4.webp?v=1785928824",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01BLACK_02.jpg?v=1780307513",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01-BLACK-Infographics-Adapt.webp?v=1780904296",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01BLACK_01.webp?v=1780307513"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The Campus ELAN-01 Men’s Casual Shoes are defined by their ease — clean, composed, and built for the pace of modern days. Crafted with a refined PU upper, they hold a structured silhouette that feels sharp, making them an effortless choice across work and beyond. Inside, the lycra footbed and soft lining ensure comfort that stays consistent through long hours, while the lightweight EVA sole works quietly to keep movement light and fluid. Laced to fit, built to last, and designed for every room you walk into — this is smart casual, elevated. The all-black finish lends it a sleek, understated presence that transitions effortlessly from workwear to after-hours dressing. Occasion: Everyday Insole: Pu Foam Molded Upper Material: PU Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 94,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01BLACK_01.webp?v=1780307513",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01BLACK_02.jpg?v=1780307513",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-01_BLACK3X4.webp?v=1785928824",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01BLACK_04.webp?v=1780307513",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01-BLACK-Infographics-Adapt.webp?v=1780904296"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "SS26-SCG-001-G-ALLBLK-6",
          "size": "6",
          "stock": 4
        },
        {
          "sku": "SS26-SCG-001-G-ALLBLK-7",
          "size": "7",
          "stock": 13
        },
        {
          "sku": "SS26-SCG-001-G-ALLBLK-8",
          "size": "8",
          "stock": 14
        },
        {
          "sku": "SS26-SCG-001-G-ALLBLK-9",
          "size": "9",
          "stock": 12
        },
        {
          "sku": "SS26-SCG-001-G-ALLBLK-10",
          "size": "10",
          "stock": 12
        },
        {
          "sku": "SS26-SCG-001-G-ALLBLK-11",
          "size": "11",
          "stock": 6
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 53,
    "sourceProductId": "9565154738407",
    "waterResistance": "No",
    "shortDescription": "The Campus ELAN-01 Men’s Casual Shoes are defined by their ease — clean, composed, and built for the pace of modern days. Crafted with a refined PU upper, they hold a structured si",
    "sourceProductUrl": "https://campusshoes.com/products/elan-01-all-blk-mens-formal-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9717183054055",
    "mrp": 2399,
    "sku": "CA-22G-13511-G-BLACK-SILVER-6",
    "use": "Running",
    "code": "CAMPUS-9717183054055",
    "name": "POST Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 1449,
    "sport": "Running",
    "upper": "Mesh+Raise Printing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/POST_22G-13511_BLACK-SILVER_04.webp?v=1789473830",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/POST_22G-13511_BLACK-SILVER_03.webp?v=1789473830",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/POST_22G-13511_BLACK-SILVER_02.jpg?v=1789473830",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/POST_22G-13511_BLACK-SILVER_05.webp?v=1789473830",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/POST_22G-13511_BLACK-SILVER_01.webp?v=1789473830"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.3,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "m&w running shoes",
      "men",
      "men running shoes",
      "men shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "m&w running shoes",
      "men",
      "men running shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "sale",
      "topseller"
    ],
    "collections": [
      "Running Collection",
      "Sale"
    ],
    "description": "Step Into Everyday Comfort With These Men’S Low-Top Running Shoes Built For Daily Movement. The Breathable Mesh Upper Keeps Airflow Going, While The Lace-Up Closure Gives A Secure, Adjustable Fit. A Cushioned Proline Insole With Medium Arch Support And Soft Textile Lining Helps Keep Your Feet Comfortable Through Walks, Commutes, And Light Runs. The Tpr Outsole Is Designed For Flexible Everyday Traction, And The Anti Slip Sole Design Adds Extra Confidence On Regular Surfaces. Finished With Sporty Geometric Detailing And A Padded Collar And Tongue, This Pair Fits Right Into Your Athleisure Rotation. Occasion: Everyday Insole: Proline Upper Material: Mesh+Raise Printing Technology: Anti Slip Sole Design Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 74,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/POST_22G-13511_BLACK-SILVER_01.webp?v=1789473830",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/POST_22G-13511_BLACK-SILVER_02.jpg?v=1789473830",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/POST_22G-13511_BLACK-SILVER_03.webp?v=1789473830",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/POST_22G-13511_BLACK-SILVER_04.webp?v=1789473830",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/POST_22G-13511_BLACK-SILVER_05.webp?v=1789473830"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "22G-13511-G-BLACK-SILVER-6",
          "size": "6",
          "stock": 6
        },
        {
          "sku": "22G-13511-G-BLACK-SILVER-7",
          "size": "7",
          "stock": 10
        },
        {
          "sku": "22G-13511-G-BLACK-SILVER-8",
          "size": "8",
          "stock": 9
        },
        {
          "sku": "22G-13511-G-BLACK-SILVER-9",
          "size": "9",
          "stock": 12
        },
        {
          "sku": "22G-13511-G-BLACK-SILVER-10",
          "size": "10",
          "stock": 5
        }
      ]
    },
    "sourceCategory": "Men Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 40,
    "sourceProductId": "9717183054055",
    "waterResistance": "No",
    "shortDescription": "Step Into Everyday Comfort With These Men’S Low-Top Running Shoes Built For Daily Movement. The Breathable Mesh Upper Keeps Airflow Going, While The Lace-Up Closure Gives A Secure,",
    "sourceProductUrl": "https://campusshoes.com/products/post-black-silver-mens-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9635047899367",
    "mrp": 1749,
    "sku": "CA-SS26-OPG-004-G-TAN-6",
    "use": "Sandals",
    "code": "CAMPUS-9635047899367",
    "name": "SS26-OPG-004 Tan",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cognac Tan",
    "price": 1399,
    "sport": "Lifestyle",
    "upper": "PVC",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_04.webp?v=1784200169",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_03.webp?v=1784200168",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_01.jpg?v=1784200168",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_05.webp?v=1784200168",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_02.webp?v=1784200168"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "c&s",
      "camp",
      "cs",
      "elan",
      "emp0"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "c&s",
      "camp",
      "cs",
      "elan",
      "emp0",
      "fs",
      "men",
      "men sandal casual",
      "men sandals & floaters",
      "men sandals & slippers",
      "mss",
      "nys",
      "payday",
      "s&s",
      "sss"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Exude a luxe, effortless aura with the Campus ELAN Men’s Slippers. Proving that the simplest pieces often make the strongest impression, this pair features a sculpted silhouette defined by a wide asymmetrical strap that sits comfortably across the foot, finished with an adjustable buckle. The open-sided construction keeps things airy and relaxed, while the soft EVA footbed and lightweight EVA outsole deliver comfort that lasts from weekday downtime to laid-back weekends. Wrapped in a timeless tan finish, this pair slips effortlessly into every wardrobe, bringing a refined touch to everyday dressing. Occasion: Everyday Insole: Footbed- Eva Upper Material: PVC Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 23,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_02.webp?v=1784200168",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_01.jpg?v=1784200168",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_03.webp?v=1784200168",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_04.webp?v=1784200169",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-004_SS26-OPG-004_TAN_05.webp?v=1784200168"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "SS26-OPG-004-G-TAN-6",
          "size": "6",
          "stock": 13
        },
        {
          "sku": "SS26-OPG-004-G-TAN-7",
          "size": "7",
          "stock": 10
        },
        {
          "sku": "SS26-OPG-004-G-TAN-8",
          "size": "8",
          "stock": 5
        },
        {
          "sku": "SS26-OPG-004-G-TAN-9",
          "size": "9",
          "stock": 8
        },
        {
          "sku": "SS26-OPG-004-G-TAN-10",
          "size": "10",
          "stock": 4
        }
      ]
    },
    "sourceCategory": "Men Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9635047899367",
    "waterResistance": "No",
    "shortDescription": "Exude a luxe, effortless aura with the Campus ELAN Men’s Slippers. Proving that the simplest pieces often make the strongest impression, this pair features a sculpted silhouette de",
    "sourceProductUrl": "https://campusshoes.com/products/ss26-opg-004-tan-mens-sandals",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719075864807",
    "mrp": 1156,
    "sku": "CA-22K-170-K-LSKY-NAVY-1",
    "use": "Walking",
    "code": "CAMPUS-9719075864807",
    "name": "ZIP",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Royal Blue",
    "price": 925,
    "sport": "Walking",
    "upper": "Knitting+Reflector Welding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#2563eb",
        "name": "Royal Blue",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZIPKIDS_22K-170_LSKY-NAVY_04.webp?v=1789557658",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZIPKIDS_22K-170_LSKY-NAVY_03.webp?v=1789557658",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZIPKIDS_22K-170_LSKY-NAVY_02.jpg?v=1789557658",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZIPKIDS_22K-170_LSKY-NAVY_05.webp?v=1789557658",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZIPKIDS_22K-170_LSKY-NAVY_01.webp?v=1789557658"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "emp0",
      "Kids",
      "Kids shoes",
      "kids slip on shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "Kids",
      "Kids shoes",
      "kids slip on shoes",
      "nys",
      "payday",
      "sale",
      "shoes",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Run, Jump, And Giggle All Day! Campus Zip Kids Walking Shoes In Light Sky & Navy Are Made For Tiny Feet With Big Energy. The Soft Knitted Upper With Its Fun Dotted Design Keeps Things Light, Airy, And Super Comfy From Morning Play To Evening Fun. The Chunky Eva Sole Feels Feather-Light, Helping Every Little Step Stay Smooth And Steady. Inside, The Memory Insole And Pillofoam Cushioning Duo Adds That Soft, Cloud-Like Comfort Kids Love. Easy To Wear And Easy To Love, This Pair Is Perfect For Park Trips, Play Parties, And Everything In Between. Occasion: Everyday Insole: Memory Insole Upper Material: Knitting+Reflector Welding Technology: Anti Slip Sole Design Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 105,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZIPKIDS_22K-170_LSKY-NAVY_01.webp?v=1789557658",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZIPKIDS_22K-170_LSKY-NAVY_02.jpg?v=1789557658",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZIPKIDS_22K-170_LSKY-NAVY_03.webp?v=1789557658",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZIPKIDS_22K-170_LSKY-NAVY_04.webp?v=1789557658",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ZIPKIDS_22K-170_LSKY-NAVY_05.webp?v=1789557658"
    ],
    "sizeInventory": {
      "Royal Blue": [
        {
          "sku": "22K-170-K-LSKY-NAVY-1",
          "size": "1",
          "stock": 9
        },
        {
          "sku": "22K-170-K-LSKY-NAVY-11",
          "size": "11",
          "stock": 5
        },
        {
          "sku": "22K-170-K-LSKY-NAVY-12",
          "size": "12",
          "stock": 14
        },
        {
          "sku": "22K-170-K-LSKY-NAVY-13",
          "size": "13",
          "stock": 12
        }
      ]
    },
    "sourceCategory": "Kids Slip on Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9719075864807",
    "waterResistance": "No",
    "shortDescription": "Run, Jump, And Giggle All Day! Campus Zip Kids Walking Shoes In Light Sky & Navy Are Made For Tiny Feet With Big Energy. The Soft Knitted Upper With Its Fun Dotted Design Keeps Thi",
    "sourceProductUrl": "https://campusshoes.com/products/zip-kids-l-sky-navy-kids-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9310265213179",
    "mrp": 13999,
    "sku": "SU-31279401-7",
    "use": "Basketball",
    "code": "SUPERKICKS-9310265213179",
    "name": "MB.05 MIST BASKETBALL { PUMA WHITE/GOLD",
    "sole": "Not specified",
    "brand": "PUMA",
    "color": "Cloud White",
    "price": 11199,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_a52537cf-cddb-4dda-9874-7f94e6be5fe8.jpg?v=1778762560",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_84a19e52-5673-4baf-99cd-9873e721b6ef.jpg?v=1778762560",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_4259312d-0e63-4552-8b5a-455612cfd691.jpg?v=1778762560",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_3dcca21d-fed9-4386-9887-52b40a3d4e58.jpg?v=1778762560",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_eb5b1888-c5b6-4f1f-82dc-92c2ebe26f9b.jpg?v=1778762560"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Basketball",
    "features": [
      "Width: Regular",
      "Toe Type: Rounded",
      "Fastener: Laces",
      "Heel type: Flat",
      "High-abrasion tread pattern",
      "Moulded forefoot straps for additional support"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Puma",
      "Footwear",
      "For Footwear",
      "Franchise :MB.05 MIST BASKETBALL",
      "free-delivery",
      "Fresh Arrivals",
      "Gender - Men",
      "New Arrivals",
      "Newadss",
      "Newppadd",
      "NO-COD",
      "Non Hype",
      "Product Style: Lifestyle",
      "season: SS26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Melo doesn’t hold back, and neither does the MB.05 Mist. These shoes capture Melo’s calm in the chaos. Design details include moulded wing heel straps, an inlay of Melo’s signature “One of One”, and a moulded skull on the outsole. This all-white drop brings pure focus to Melo’s unmistakable style. DETAILS: Width: Regular Toe Type: Rounded Fastener: Laces Heel type: Flat High-abrasion tread pattern Moulded forefoot straps for additional support",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 124,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_eb5b1888-c5b6-4f1f-82dc-92c2ebe26f9b.jpg?v=1778762560",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_4259312d-0e63-4552-8b5a-455612cfd691.jpg?v=1778762560",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_84a19e52-5673-4baf-99cd-9873e721b6ef.jpg?v=1778762560",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_a52537cf-cddb-4dda-9874-7f94e6be5fe8.jpg?v=1778762560",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_3dcca21d-fed9-4386-9887-52b40a3d4e58.jpg?v=1778762560"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "31279401-7",
          "size": "7",
          "stock": 11
        },
        {
          "sku": "31279401-8",
          "size": "8",
          "stock": 10
        },
        {
          "sku": "31279401-9",
          "size": "9",
          "stock": 5
        },
        {
          "sku": "31279401-10",
          "size": "10",
          "stock": 7
        },
        {
          "sku": "31279401-11",
          "size": "11",
          "stock": 14
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9310265213179",
    "waterResistance": "No",
    "shortDescription": "Melo doesn’t hold back, and neither does the MB.05 Mist. These shoes capture Melo’s calm in the chaos. Design details include moulded wing heel straps, an inlay of Melo’s signature",
    "sourceProductUrl": "https://www.superkicks.in/products/puma-mb-05-mist-basketball-puma-white-gold",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9402094584059",
    "mrp": 9994,
    "sku": "SU-212134-90H-7",
    "use": "Slippers",
    "code": "SUPERKICKS-9402094584059",
    "name": "MARIO CLASSIC CLOG { BLUE/ORANGE",
    "sole": "Not specified",
    "brand": "CROCS",
    "color": "Royal Blue",
    "price": 7995,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#2563eb",
        "name": "Royal Blue",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_e6471901-0b54-4ef8-bd4a-834f96b5656b.jpg?v=1788179367",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_5988597d-33e1-42f0-8d62-d8f0f372123a.jpg?v=1788179367",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_7bf467cb-d4c1-40a0-b99f-b153a2a795e5.jpg?v=1788179367",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/7_62742a2e-c027-4a20-848d-ae2120de294a.jpg?v=1788179368",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_b9450add-5f95-47ba-90ff-145ead34fcfd.jpg?v=1788179367"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Incredibly light and fun to wear",
      "Blue colorway with printed yellow button details",
      "Mario’s plush red cap is fixed to the upper",
      "Includes 6 exclusive Jibbitz™ charms including 2 Mario charms, Super Star, Super Mushroom, coin and ? Block.",
      "Custom Mario “M” insignia on river",
      "Water-friendly and buoyant; weighs only ounces"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Crocs",
      "Footwear",
      "Franchise: Crocs Others",
      "Franchise: CROCS SLIDE",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The new Mario Classic Clog from the Super Mario™ collection brings you into the game, no matter where your adventure takes you next. This bold, blue clog is topped with Mario’s plush red cap and personalized with 6 exclusive Jibbitz™ charms. The yellow buttons from Mario’s overalls pop from the heel cup for a style that is unmistakably Mario. Mario Classic Clog Details: Incredibly light and fun to wear Blue colorway with printed yellow button details Mario’s plush red cap is fixed to the upper Includes 6 exclusive Jibbitz™ charms including 2 Mario charms, Super Star, Super Mushroom, coin and ? Block. Custom Mario “M” insignia on river Water-friendly and buoyant; weighs only ounces Designed to enhance breathability Easy to clean and quick to dry Pivoting heel straps for a more secure fit Customizable with Jibbitz™ charms Iconic Crocs Comfort™: Lightweight. Flexible. 360-degree comfort.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 76,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_b9450add-5f95-47ba-90ff-145ead34fcfd.jpg?v=1788179367",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_7bf467cb-d4c1-40a0-b99f-b153a2a795e5.jpg?v=1788179367",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_5988597d-33e1-42f0-8d62-d8f0f372123a.jpg?v=1788179367",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_e6471901-0b54-4ef8-bd4a-834f96b5656b.jpg?v=1788179367",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/7_62742a2e-c027-4a20-848d-ae2120de294a.jpg?v=1788179368"
    ],
    "sizeInventory": {
      "Royal Blue": [
        {
          "sku": "212134-90H-7",
          "size": "7",
          "stock": 6
        },
        {
          "sku": "212134-90H-8",
          "size": "8",
          "stock": 11
        },
        {
          "sku": "212134-90H-79",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "212134-90H-10",
          "size": "10",
          "stock": 7
        },
        {
          "sku": "212134-90H-11",
          "size": "11",
          "stock": 14
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9402094584059",
    "waterResistance": "No",
    "shortDescription": "The new Mario Classic Clog from the Super Mario™ collection brings you into the game, no matter where your adventure takes you next. This bold, blue clog is topped with Mario’s plu",
    "sourceProductUrl": "https://www.superkicks.in/products/crocs-mario-classic-clog-blue-orange",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15399429865723",
    "mrp": 16249,
    "sku": "SU-HQ5289-6",
    "use": "Sneakers",
    "code": "SUPERKICKS-15399429865723",
    "name": "ADISTAR CONTROL 5 X HARDIES { AURORA RUBY /MAROON /DUSKY INK",
    "sole": "Not specified",
    "brand": "ADIDAS",
    "color": "6",
    "price": 12999,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "6",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_56d62462-899f-4888-92f7-ec6c0e7ecd11.jpg?v=1791200491",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_4d70ea7a-ccb1-44d7-a0d8-1cfbe435795d.jpg?v=1791200490",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_aafd9a54-0764-4be2-bf43-672cffb2acee.jpg?v=1791200490",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/7_42e6040d-b196-4df4-a278-9075d8aab669.jpg?v=1791200490",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_943d6d14-7dd8-42a4-8a39-1cad58a1a868.jpg?v=1791200490"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Footwear",
      "Franchise: ADISTAR CONTROL 5",
      "New Arrivals",
      "NO-COD",
      "Sneakers"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Adidas",
      "Brand - Adidas Originals",
      "Footwear",
      "Franchise: ADISTAR CONTROL 5",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "Adistar Control 5 X Hardies Shoes Bring Back To The Fore The Running Silhouette Of The 2000s, Reinterpreted With An Influence From The Skateboarding Universe, For A Look That Connects Traditional Design With Urban-looking Style. The Open Mesh Upper Promotes Air Circulation And The Adiprene+ Unit At The Tip Provides Damping Adjusted For Everyday Movement. The Classic Cut Structure And Lace Closure Give You A Sense Of Safety And Stability. Specific Details, Including The Iconic 3 Stripes, The Badge Of Sport Logo And Adistar Branding, Connect The Design To Its Origins, Anchored In Adidas DNA, With A Refined And Confident Finish.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 92,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_943d6d14-7dd8-42a4-8a39-1cad58a1a868.jpg?v=1791200490",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_aafd9a54-0764-4be2-bf43-672cffb2acee.jpg?v=1791200490",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_4d70ea7a-ccb1-44d7-a0d8-1cfbe435795d.jpg?v=1791200490",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_56d62462-899f-4888-92f7-ec6c0e7ecd11.jpg?v=1791200491",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/7_42e6040d-b196-4df4-a278-9075d8aab669.jpg?v=1791200490"
    ],
    "sizeInventory": {
      "6": [
        {
          "sku": "HQ5289-6",
          "size": "6",
          "stock": 11
        },
        {
          "sku": "HQ5289-7",
          "size": "7",
          "stock": 13
        },
        {
          "sku": "HQ5289-8",
          "size": "8",
          "stock": 11
        },
        {
          "sku": "HQ5289-9",
          "size": "9",
          "stock": 4
        },
        {
          "sku": "HQ5289-10",
          "size": "10",
          "stock": 14
        },
        {
          "sku": "HQ5289-11",
          "size": "11",
          "stock": 4
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15399429865723",
    "waterResistance": "No",
    "shortDescription": "Adistar Control 5 X Hardies Shoes Bring Back To The Fore The Running Silhouette Of The 2000s, Reinterpreted With An Influence From The Skateboarding Universe, For A Look That Conne",
    "sourceProductUrl": "https://www.superkicks.in/products/adidas-aadistar-control-5-x-hardies-aurora-ruby-maroon-dusky-ink",
    "inventoryCountsAreExact": false
  },
  {
    "id": "redtape-8921322193086",
    "mrp": 11899,
    "sku": "RE-RWB0005B-36",
    "use": "Boots",
    "code": "REDTAPE-8921322193086",
    "name": "Women’s Off White Chelsea Boots",
    "sole": "Not specified",
    "brand": "RED TAPE",
    "color": "Cloud White",
    "price": 1904,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0005_4_0514c938-3ee5-4631-b8d2-78da29431005.jpg?v=1786700490",
          "back": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0005_3_68e2e611-13cd-4133-8cfc-852120db08d6.jpg?v=1786700490",
          "side": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0005_2_7870f00c-8bf9-4c12-abe4-591cce0478b7.jpg?v=1786700490",
          "sole": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0005_5_e6346675-115c-483e-948e-766b6b475e3f.jpg?v=1786700489",
          "front": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0005_2_jpg.jpg?v=1786947033"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Boots",
    "features": [
      "Leather Upper: Premium construction for durability and a refined finish.",
      "Chelsea Boot Design: Classic ankle-length silhouette for versatile styling.",
      "TPR Sole: Provides dependable grip, flexibility, and durable wear.",
      "Round Toe: Offers comfortable space for natural foot movement.",
      "Heel: Adds elegant elevation to everyday outfits.",
      "Material: Upper – Leather | Sole – TPR"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Boots",
      "Footwear",
      "Women"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Elevate your everyday style with the Red Tape women’s Off White Chelsea boots, designed with a refined ankle-length silhouette and timeless casual appeal. Crafted with a premium leather upper, these boots offer a polished finish with durable everyday wear. The TPR sole provides dependable grip and flexibility, while the round toe allows comfortable foot movement. Finished with a stylish 1.5-inch heel, these Chelsea boots add subtle elevation and pair effortlessly with jeans, trousers, skirts, and dresses. Features Leather Upper: Premium construction for durability and a refined finish. Chelsea Boot Design: Classic ankle-length silhouette for versatile styling. TPR Sole: Provides dependable grip, flexibility, and durable wear. Round Toe: Offers comfortable space for natural foot movement. Heel: Adds elegant elevation to everyday outfits. Product Specification Material: Upper – Leather | Sole – TPR Design: Ankle-length Chelsea boot silhouette with a round toe for refined casual styling Heel: 1.5-inch heel adds elegant elevation while enhancing the overall silhouette Benefits: Leather upper and TPR sole combine durability, flexibility, and dependable grip Utility: Ideal for casual outings, travel, dinners, weekend styling, and everyday wear",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "REDTAPE",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 29,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0005_2_jpg.jpg?v=1786947033",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0005_2_7870f00c-8bf9-4c12-abe4-591cce0478b7.jpg?v=1786700490",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0005_3_68e2e611-13cd-4133-8cfc-852120db08d6.jpg?v=1786700490",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0005_4_0514c938-3ee5-4631-b8d2-78da29431005.jpg?v=1786700490",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0005_5_e6346675-115c-483e-948e-766b6b475e3f.jpg?v=1786700489"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "RWB0005B-36",
          "size": "3",
          "stock": 10
        },
        {
          "sku": "RWB0005B-37",
          "size": "4",
          "stock": 11
        },
        {
          "sku": "RWB0005B-38",
          "size": "5",
          "stock": 9
        },
        {
          "sku": "RWB0005B-39",
          "size": "6",
          "stock": 5
        },
        {
          "sku": "RWB0005B-40",
          "size": "7",
          "stock": 6
        }
      ]
    },
    "sourceCategory": "Boots",
    "countryOfOrigin": "India",
    "discountPercent": 84,
    "sourceProductId": "8921322193086",
    "waterResistance": "Water Repellent",
    "shortDescription": "Elevate your everyday style with the Red Tape women’s Off White Chelsea boots, designed with a refined ankle-length silhouette and timeless casual appeal. Crafted with a premium le",
    "sourceProductUrl": "https://redtape.com/products/red-tape-womens-off-white-chelsea-boots-leather-ankle-length-boots-rwb0005b",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9565156344039",
    "mrp": 3999,
    "sku": "CA-ELAN-27-G-BROWN-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9565156344039",
    "name": "ELAN-27 Brown",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cognac Tan",
    "price": 1749,
    "sport": "Lifestyle",
    "upper": "PU",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-27BROWN_04.webp?v=1780307153",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-27_BROWN3X4.webp?v=1785929877",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-27BROWN_02.jpg?v=1780307153",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-27-BROWN-Infographics-Adapt.webp?v=1780904712",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-27BROWN_01.webp?v=1780307153"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Campus ELAN-27 Men's Brogue Shoes — a nod to timeless style, reimagined for the modern wardrobe. Defined by intricate detailing across the upper and vamp, this pair brings character, depth, and a touch of old-world charm to every outfit. The classic brogue-inspired accents lend a distinguished presence, making ELAN-27 the kind of shoe that naturally draws a second glance. Crafted with a sleek synthetic upper and grounded by a durable TPR sole, it balances vintage-inspired aesthetics with everyday wearability. Pair it with tailored trousers for the office, dress it down with chinos for evening plans, or let it elevate a simple shirt-and-denim combination. ELAN-27 isn't just another formal shoe — it's a conversation starter designed for men who appreciate the finer details. Occasion: Everyday Insole: Pu Foam Die Cut Upper Material: PU Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 24,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-27BROWN_01.webp?v=1780307153",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-27BROWN_02.jpg?v=1780307153",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-27_BROWN3X4.webp?v=1785929877",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-27BROWN_04.webp?v=1780307153",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-27-BROWN-Infographics-Adapt.webp?v=1780904712"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "ELAN-27-G-BROWN-6",
          "size": "6",
          "stock": 9
        },
        {
          "sku": "ELAN-27-G-BROWN-7",
          "size": "7",
          "stock": 8
        },
        {
          "sku": "ELAN-27-G-BROWN-8",
          "size": "8",
          "stock": 5
        },
        {
          "sku": "ELAN-27-G-BROWN-9",
          "size": "9",
          "stock": 10
        },
        {
          "sku": "ELAN-27-G-BROWN-10",
          "size": "10",
          "stock": 8
        },
        {
          "sku": "ELAN-27-G-BROWN-11",
          "size": "11",
          "stock": 9
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 56,
    "sourceProductId": "9565156344039",
    "waterResistance": "No",
    "shortDescription": "Campus ELAN-27 Men's Brogue Shoes — a nod to timeless style, reimagined for the modern wardrobe. Defined by intricate detailing across the upper and vamp, this pair brings characte",
    "sourceProductUrl": "https://campusshoes.com/products/elan-27-brown-mens-formal-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719075799271",
    "mrp": 1156,
    "sku": "CA-22K-166-K-SKY-BLK-1",
    "use": "Running",
    "code": "CAMPUS-9719075799271",
    "name": "SUNNY-KIDS Blue",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Royal Blue",
    "price": 925,
    "sport": "Running",
    "upper": "Mesh+ Pvc+ Welding+Embossing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#2563eb",
        "name": "Royal Blue",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_SKY-BLK_04.webp?v=1789557737",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_SKY-BLK_03.webp?v=1789557737",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_SKY-BLK_02.jpg?v=1789557737",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_SKY-BLK_05.webp?v=1789557737",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_SKY-BLK_01.webp?v=1789557737"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes",
      "payday",
      "sale",
      "shshoes",
      "wyv"
    ],
    "collections": [
      "Running Collection",
      "Sale"
    ],
    "description": "Lil Feet, Big Adventures. Campus Sunny-Kids Kids Running Shoes Are Made For Everyday Action And Endless Energy. The Mesh And Pvc Upper Balances Airflow With Durability, Keeping Little Feet Cool And Supported. The Flexible Eva Sole Makes Movement Feel Light And Effortless, While The Power Duo — Memory Insole And Pillofoam — Adds Gentle Cushioning For All-Day Comfort. Sky Blue Paired With Pops Of Bright Yellow Brings A Sporty, Easy-To-Style Look That’S Playful Enough For Fun Days And Cool Enough For Mini Trendsetters. Occasion: Everyday Insole: Memory Insole Upper Material: Mesh+ Pvc+ Welding+Embossing Technology: Pillofoam Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 84,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_SKY-BLK_01.webp?v=1789557737",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_SKY-BLK_02.jpg?v=1789557737",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_SKY-BLK_03.webp?v=1789557737",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_SKY-BLK_04.webp?v=1789557737",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_SKY-BLK_05.webp?v=1789557737"
    ],
    "sizeInventory": {
      "Royal Blue": [
        {
          "sku": "22K-166-K-SKY-BLK-1",
          "size": "1",
          "stock": 7
        },
        {
          "sku": "22K-166-K-SKY-BLK-11",
          "size": "11",
          "stock": 8
        },
        {
          "sku": "22K-166-K-SKY-BLK-12",
          "size": "12",
          "stock": 11
        },
        {
          "sku": "22K-166-K-SKY-BLK-13",
          "size": "13",
          "stock": 11
        }
      ]
    },
    "sourceCategory": "Kids Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9719075799271",
    "waterResistance": "No",
    "shortDescription": "Lil Feet, Big Adventures. Campus Sunny-Kids Kids Running Shoes Are Made For Everyday Action And Endless Energy. The Mesh And Pvc Upper Balances Airflow With Durability, Keeping Lit",
    "sourceProductUrl": "https://campusshoes.com/products/sunny-kids-sky-blk-kids-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9635048030439",
    "mrp": 1749,
    "sku": "CA-SS26-OPG-006-G-TAN-6",
    "use": "Sandals",
    "code": "CAMPUS-9635048030439",
    "name": "SS26-OPG-006 Tan",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cognac Tan",
    "price": 1399,
    "sport": "Lifestyle",
    "upper": "PVC",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_TAN_04.webp?v=1784200098",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_TAN_03.webp?v=1784200097",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_TAN_01.jpg?v=1784200098",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_TAN_05.webp?v=1784200097",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_TAN_02.webp?v=1784200098"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "c&s",
      "camp",
      "cs",
      "elan",
      "emp0"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "c&s",
      "camp",
      "cs",
      "elan",
      "emp0",
      "fs",
      "men",
      "men sandal casual",
      "men sandals & floaters",
      "men sandals & slippers",
      "mss",
      "nys",
      "payday",
      "s&s",
      "sss"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Quiet style speaks the loudest. Campus ELAN Men’s Slippers are designed for men who appreciate clean aesthetics and thoughtful details. The thumb-loop construction and adjustable buckle create a refined fit, while the open design keeps things breezy and comfortable throughout the day. A soft EVA footbed paired with a lightweight EVA sole delivers lasting comfort without compromising the sleek profile. Finished in a timeless tan hue, this pair slips seamlessly into your wardrobe, adding an easy, understated touch to every outfit. Occasion: Everyday Insole: Footbed- Eva Upper Material: PVC Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 129,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_TAN_02.webp?v=1784200098",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_TAN_01.jpg?v=1784200098",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_TAN_03.webp?v=1784200097",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_TAN_04.webp?v=1784200098",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-006_SS26-OPG-006_TAN_05.webp?v=1784200097"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "SS26-OPG-006-G-TAN-6",
          "size": "6",
          "stock": 6
        },
        {
          "sku": "SS26-OPG-006-G-TAN-7",
          "size": "7",
          "stock": 15
        },
        {
          "sku": "SS26-OPG-006-G-TAN-8",
          "size": "8",
          "stock": 13
        },
        {
          "sku": "SS26-OPG-006-G-TAN-9",
          "size": "9",
          "stock": 12
        },
        {
          "sku": "SS26-OPG-006-G-TAN-10",
          "size": "10",
          "stock": 4
        }
      ]
    },
    "sourceCategory": "Men Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9635048030439",
    "waterResistance": "No",
    "shortDescription": "Quiet style speaks the loudest. Campus ELAN Men’s Slippers are designed for men who appreciate clean aesthetics and thoughtful details. The thumb-loop construction and adjustable b",
    "sourceProductUrl": "https://campusshoes.com/products/ss26-opg-006-tan-mens-sandals",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719074980071",
    "mrp": 2061,
    "sku": "CA-22G-210-G-BEIGE-6",
    "use": "Walking",
    "code": "CAMPUS-9719074980071",
    "name": "IMAGINE Beige",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Travertine Cream",
    "price": 1649,
    "sport": "Walking",
    "upper": "Flyknit+Welding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#e4ddcf",
        "name": "Travertine Cream",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/IMAGINE_22G-210_BEIGE_04.webp?v=1789558523",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/IMAGINE_22G-210_BEIGE_03.webp?v=1789558523",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/IMAGINE_22G-210_BEIGE_02.jpg?v=1789558523",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/IMAGINE_22G-210_BEIGE_05.webp?v=1789558523",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/IMAGINE_22G-210_BEIGE_01.webp?v=1789558523"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "emp0",
      "men",
      "men shoes",
      "men walking shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "men",
      "men shoes",
      "men walking shoes",
      "mss",
      "payday",
      "sale",
      "shoes",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Let Your Imagination Run Free & Embrace Effortless Elegance With Campus Imagine Men'S Casual Slip-On Shoes. The Breathable Knitted Vamp Upper Provides Maximum Airflow, While The Memory Foam Insole Offers Exceptional Cushioning. The Tyre-Tech Outsole Delivers Superior Traction, Ensuring Stability On Any Surface. The Beige Upper And White Base Combination Exudes Timeless Style And Versatility. Occasion: Everyday Insole: Memory Foam Upper Material: Flyknit+Welding Technology: Rubber Sole, Tyretek Care Instructions: Wipe With A Damp Cloth And Mild Soapy Water, Then Pat Dry And Air Dry Naturally. Do Not Soak, Rinse Under Running Water, Or Expose To Direct Heat And Harsh Chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 70,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/IMAGINE_22G-210_BEIGE_01.webp?v=1789558523",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/IMAGINE_22G-210_BEIGE_02.jpg?v=1789558523",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/IMAGINE_22G-210_BEIGE_03.webp?v=1789558523",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/IMAGINE_22G-210_BEIGE_04.webp?v=1789558523",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/IMAGINE_22G-210_BEIGE_05.webp?v=1789558523"
    ],
    "sizeInventory": {
      "Travertine Cream": [
        {
          "sku": "22G-210-G-BEIGE-6",
          "size": "6",
          "stock": 12
        },
        {
          "sku": "22G-210-G-BEIGE-7",
          "size": "7",
          "stock": 5
        },
        {
          "sku": "22G-210-G-BEIGE-8",
          "size": "8",
          "stock": 13
        },
        {
          "sku": "22G-210-G-BEIGE-9",
          "size": "9",
          "stock": 11
        },
        {
          "sku": "22G-210-G-BEIGE-10",
          "size": "10",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Walking Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9719074980071",
    "waterResistance": "No",
    "shortDescription": "Let Your Imagination Run Free & Embrace Effortless Elegance With Campus Imagine Men'S Casual Slip-On Shoes. The Breathable Knitted Vamp Upper Provides Maximum Airflow, While The Me",
    "sourceProductUrl": "https://campusshoes.com/products/imagine-beige-mens-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9318000754939",
    "mrp": 10999,
    "sku": "SU-31347802-7",
    "use": "Basketball",
    "code": "SUPERKICKS-9318000754939",
    "name": "LAFRANCÉ GRADIENT { SANDSTONE/CANVAS",
    "sole": "Not specified",
    "brand": "PUMA",
    "color": "7",
    "price": 8799,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "7",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_346125bd-1a1b-4216-b37f-1043b98f32d4.jpg?v=1779110712",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/18.jpg1.jpg?v=1779110712",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_5971bdce-bd6b-40f2-831a-5241b596cd51.jpg?v=1779110712",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_9b534ef2-f483-4d0d-ac5a-c41469e12831.jpg?v=1779110712",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_5fb778e2-e790-4d45-8c6a-358f9dff9be3.jpg?v=1779110712"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Basketball",
    "features": [
      "Width: Regular",
      "Toe Type: Rounded",
      "Fastener: Laces",
      "Heel type: Flat",
      "Textured outsole surface with LaFrancé and PUMA callouts"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Basketball10",
      "Brand - Puma",
      "Footwear",
      "For Footwear",
      "Franchise: PUMA others",
      "free-delivery",
      "Gender - Men",
      "New Arrivals",
      "Newadss",
      "Newppadd",
      "NO-COD",
      "Non Hype",
      "Product Style: Lifestyle",
      "season: SS26",
      "Sneakers",
      "trending footwear"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "LaFrancé shoes bring Melo’s “Not From Here” style to a bold off-court silhouette. Inspired by chunky skate shoes, they feature Melo callouts on the midsole, outsole, and his LaFrancé branding. The gradient fade effect provides a different look and execution to add to your wardrobe. DETAILS Width: Regular Toe Type: Rounded Fastener: Laces Heel type: Flat Textured outsole surface with LaFrancé and PUMA callouts",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 51,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_5fb778e2-e790-4d45-8c6a-358f9dff9be3.jpg?v=1779110712",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_5971bdce-bd6b-40f2-831a-5241b596cd51.jpg?v=1779110712",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/18.jpg1.jpg?v=1779110712",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_346125bd-1a1b-4216-b37f-1043b98f32d4.jpg?v=1779110712",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_9b534ef2-f483-4d0d-ac5a-c41469e12831.jpg?v=1779110712"
    ],
    "sizeInventory": {
      "7": [
        {
          "sku": "31347802-7",
          "size": "7",
          "stock": 6
        },
        {
          "sku": "31347802-8",
          "size": "8",
          "stock": 0
        },
        {
          "sku": "31347802-9",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "31347802-10",
          "size": "10",
          "stock": 0
        },
        {
          "sku": "31347802-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Basketball Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9318000754939",
    "waterResistance": "No",
    "shortDescription": "LaFrancé shoes bring Melo’s “Not From Here” style to a bold off-court silhouette. Inspired by chunky skate shoes, they feature Melo callouts on the midsole, outsole, and his LaFran",
    "sourceProductUrl": "https://www.superkicks.in/products/puma-lafrance-gradient-sandstone-canvas",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9402097074427",
    "mrp": 10619,
    "sku": "SU-212137-90H-4",
    "use": "Slippers",
    "code": "SUPERKICKS-9402097074427",
    "name": "PRINCESS PEACH CLASSIC PLATFORM CLOG { PINK",
    "sole": "Not specified",
    "brand": "CROCS",
    "color": "Blush Pink",
    "price": 8495,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#ec4899",
        "name": "Blush Pink",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_978a9e2d-dc3d-44f3-afa7-edc456a0725d.jpg?v=1788179159",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_d18ca5e6-fb49-476a-9b94-f1c457d443e1.jpg?v=1788179159",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_0a0c261d-f9d8-4ca6-9d30-9008d35ba996.jpg?v=1788179159",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_ebaabab2-ea65-47c0-b909-70394040b4b5.jpg?v=1788179159",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_72eeaab7-802f-46c2-a975-0cd30b79913a.jpg?v=1788179159"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Elevated 1.6-inch / 41mm wedge height, measured from floor to heel rest",
      "Glitter treatment on sole",
      "Pink colorway with dimensional scalloping detail",
      "7 exclusive Jibbitz™ charms featuring Princess Peach, Toad, blue jewels, and a 3-D crown",
      "Fixed blue and red jewels across backstrap",
      "Custom crown rivet"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Crocs",
      "Footwear",
      "Franchise: Crocs Others",
      "Franchise: CROCS SLIDE",
      "Gender - Women",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Get the royal treatment in the Princess Peach Platform Clog from the Super Mario™ collection. This sparkling style features a glitter platform sole with a matching pink upper accented by dimensional scalloping detail. 7 exclusive Jibbitz™ charms decorate the top with brilliant fixed jewels adorning the backstrap. Princess Peach Classic Platform Clog Details: Elevated 1.6-inch / 41mm wedge height, measured from floor to heel rest Glitter treatment on sole Pink colorway with dimensional scalloping detail 7 exclusive Jibbitz™ charms featuring Princess Peach, Toad, blue jewels, and a 3-D crown Fixed blue and red jewels across backstrap Custom crown rivet Customizable with Jibbitz™ charms on the upper and backstrap Iconic Crocs Comfort™: Lightweight. Flexible. 360-degree comfort.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 87,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_72eeaab7-802f-46c2-a975-0cd30b79913a.jpg?v=1788179159",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_0a0c261d-f9d8-4ca6-9d30-9008d35ba996.jpg?v=1788179159",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_d18ca5e6-fb49-476a-9b94-f1c457d443e1.jpg?v=1788179159",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_978a9e2d-dc3d-44f3-afa7-edc456a0725d.jpg?v=1788179159",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_ebaabab2-ea65-47c0-b909-70394040b4b5.jpg?v=1788179159"
    ],
    "sizeInventory": {
      "Blush Pink": [
        {
          "sku": "212137-90H-4",
          "size": "4",
          "stock": 13
        },
        {
          "sku": "212137-90H-5",
          "size": "5",
          "stock": 15
        },
        {
          "sku": "212137-90H-6",
          "size": "6",
          "stock": 12
        },
        {
          "sku": "212137-90H-7",
          "size": "7",
          "stock": 7
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9402097074427",
    "waterResistance": "No",
    "shortDescription": "Get the royal treatment in the Princess Peach Platform Clog from the Super Mario™ collection. This sparkling style features a glitter platform sole with a matching pink upper accen",
    "sourceProductUrl": "https://www.superkicks.in/products/crocs-princess-peach-classic-platform-clog-pink",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15409971200251",
    "mrp": 21244,
    "sku": "SU-IQ5495-005-7",
    "use": "Sneakers",
    "code": "SUPERKICKS-15409971200251",
    "name": "AIR JORDAN 1 HIGH OG \"ROYAL\" { BLACK/GAME ROYAL-WHITE",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Core Black",
    "price": 16995,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_9b12901a-0a12-4a99-9ccb-9dd444fda082.jpg?v=1791275660",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_29c46c10-f983-4845-a229-528328e7df4c.jpg?v=1791275660",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_96e2d9db-ce4d-4c84-832d-7099adebf74e.jpg?v=1791275660",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/0_bb7885e3-7ca2-4dad-a169-ca184ef1c55e.jpg?v=1791275660",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_1e8e4baf-a118-4b2b-917d-c5f4ae5c3a76.jpg?v=1791275660"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Foam midsole",
      "Rubber outsole",
      "High collar"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Jordan",
      "Coming Soon",
      "Enddate__15 October 2026 23:59",
      "Footwear",
      "Franchise: AIR JORDAN 1",
      "Gender - Men",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers",
      "Startdate__10 October 2026 00:01"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "First released in 1985, the AJ1 set the tone for years of innovation through the Air Jordan signature line. More than four decades since the design forever changed the future of footwear, the debut AJ1 \"Royal\" returns true to form. Premium leather upper is durable and comfortable. Nike Air technology absorbs impact for cushioning with every step. Perforations on the toes add breathability. More Details Foam midsole Rubber outsole High collar",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 86,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_1e8e4baf-a118-4b2b-917d-c5f4ae5c3a76.jpg?v=1791275660",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_96e2d9db-ce4d-4c84-832d-7099adebf74e.jpg?v=1791275660",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_29c46c10-f983-4845-a229-528328e7df4c.jpg?v=1791275660",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_9b12901a-0a12-4a99-9ccb-9dd444fda082.jpg?v=1791275660",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/0_bb7885e3-7ca2-4dad-a169-ca184ef1c55e.jpg?v=1791275660"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "IQ5495-005-7",
          "size": "7",
          "stock": 4
        },
        {
          "sku": "IQ5495-005-8",
          "size": "8",
          "stock": 13
        },
        {
          "sku": "IQ5495-005-9",
          "size": "9",
          "stock": 11
        },
        {
          "sku": "IQ5495-005-10",
          "size": "10",
          "stock": 12
        },
        {
          "sku": "IQ5495-005-11",
          "size": "11",
          "stock": 4
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15409971200251",
    "waterResistance": "No",
    "shortDescription": "First released in 1985, the AJ1 set the tone for years of innovation through the Air Jordan signature line. More than four decades since the design forever changed the future of fo",
    "sourceProductUrl": "https://www.superkicks.in/products/jordan-air-jordan-1-high-og-royal-black-game-royal-white-1",
    "inventoryCountsAreExact": false
  },
  {
    "id": "redtape-8958697177278",
    "mrp": 12099,
    "sku": "RE-RTE5877A-6",
    "use": "Boots",
    "code": "REDTAPE-8958697177278",
    "name": "Men’s Chelsea Boots",
    "sole": "Not specified",
    "brand": "RED TAPE",
    "color": "6",
    "price": 3145,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "6",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5877_4.jpg?v=1788585338",
          "back": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5877_3.jpg?v=1788585338",
          "side": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5877_2.jpg?v=1788585338",
          "sole": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5877_5.jpg?v=1788585338",
          "front": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5877_1.jpg?v=1788585338"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.9,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Boots",
    "features": [
      "Leather Upper: Premium leather construction for durability and a refined finish",
      "TPR Sole: Provides grip, stability, and everyday comfort",
      "High-Top Design: Offers ankle support with a classic Chelsea boot silhouette",
      "Flat Heel: Ensures stable and comfortable movement",
      "Slip-On Closure: Easy-to-wear design for everyday formal use",
      "Material: Upper – Premium Leather | Sole – TPR"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Boots",
      "Footwear",
      "Men"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Elevate your formal wardrobe with Red Tape Men’s Chelsea Boots. Designed in a high-top silhouette, these teak-colored boots feature a premium leather upper that delivers a refined and polished look. The durable TPR sole offers reliable grip and stability, while the slip-on design ensures effortless wear—making them ideal for office wear and smart formal occasions. Features: Leather Upper: Premium leather construction for durability and a refined finish TPR Sole: Provides grip, stability, and everyday comfort High-Top Design: Offers ankle support with a classic Chelsea boot silhouette Flat Heel: Ensures stable and comfortable movement Slip-On Closure: Easy-to-wear design for everyday formal use Product Specification Material: Upper – Premium Leather | Sole – TPR Design: High-top Chelsea boot silhouette with a refined and sophisticated appearance Heel: Flat heel provides stable and comfortable everyday movement Fit: High-top Chelsea boot construction offers comfortable coverage and support Utility: Ideal for casual outings, travel, everyday wear, and smart-casual styling",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "REDTAPE",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 36,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5877_1.jpg?v=1788585338",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5877_2.jpg?v=1788585338",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5877_3.jpg?v=1788585338",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5877_4.jpg?v=1788585338",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5877_5.jpg?v=1788585338"
    ],
    "sizeInventory": {
      "6": [
        {
          "sku": "RTE5877A-6",
          "size": "6",
          "stock": 15
        },
        {
          "sku": "RTE5877A-7",
          "size": "7",
          "stock": 0
        },
        {
          "sku": "RTE5877A-8",
          "size": "8",
          "stock": 0
        },
        {
          "sku": "RTE5877A-9",
          "size": "9",
          "stock": 14
        },
        {
          "sku": "RTE5877A-10",
          "size": "10",
          "stock": 7
        }
      ]
    },
    "sourceCategory": "Boots",
    "countryOfOrigin": "India",
    "discountPercent": 74,
    "sourceProductId": "8958697177278",
    "waterResistance": "Water Repellent",
    "shortDescription": "Elevate your formal wardrobe with Red Tape Men’s Chelsea Boots. Designed in a high-top silhouette, these teak-colored boots feature a premium leather upper that delivers a refined ",
    "sourceProductUrl": "https://redtape.com/products/red-tape-mens-chelsea-bootseveryday-formal-style-rte5877a",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9565156638951",
    "mrp": 3499,
    "sku": "CA-ELAN-01-G-NAVY-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9565156638951",
    "name": "ELAN-01 Navy",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Deep Navy",
    "price": 1649,
    "sport": "Lifestyle",
    "upper": "PU",
    "width": "Medium",
    "colors": [
      {
        "hex": "#1f2937",
        "name": "Deep Navy",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01NAVY_04.webp?v=1780307096",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-01_NAVY3X4.webp?v=1785928776",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01NAVY_02.jpg?v=1780307096",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01NAVY_05.webp?v=1780307096",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01NAVY_01.webp?v=1780307096"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Designed for the rhythm of contemporary living, the Campus ELAN-01 Men's Casual Shoes balance sharp aesthetics with everyday comfort. The refined PU upper creates a clean, structured look, while the lycra footbed and soft inner lining provide a comfortable feel that lasts throughout the day. A lightweight EVA sole keeps movement smooth and easy, making it a reliable choice for busy schedules. Refined without trying too hard, it's a smart casual essential that fits naturally into every occasion. The rich navy colourway adds depth and character, offering a sophisticated alternative to everyday neutrals while remaining remarkably versatile. Occasion: Everyday Insole: Pu Foam Molded Upper Material: PU Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 111,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01NAVY_01.webp?v=1780307096",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01NAVY_02.jpg?v=1780307096",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-01_NAVY3X4.webp?v=1785928776",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01NAVY_04.webp?v=1780307096",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-01NAVY_05.webp?v=1780307096"
    ],
    "sizeInventory": {
      "Deep Navy": [
        {
          "sku": "ELAN-01-G-NAVY-6",
          "size": "6",
          "stock": 5
        },
        {
          "sku": "ELAN-01-G-NAVY-7",
          "size": "7",
          "stock": 4
        },
        {
          "sku": "ELAN-01-G-NAVY-8",
          "size": "8",
          "stock": 15
        },
        {
          "sku": "ELAN-01-G-NAVY-9",
          "size": "9",
          "stock": 14
        },
        {
          "sku": "ELAN-01-G-NAVY-10",
          "size": "10",
          "stock": 5
        },
        {
          "sku": "ELAN-01-G-NAVY-11",
          "size": "11",
          "stock": 7
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 53,
    "sourceProductId": "9565156638951",
    "waterResistance": "No",
    "shortDescription": "Designed for the rhythm of contemporary living, the Campus ELAN-01 Men's Casual Shoes balance sharp aesthetics with everyday comfort. The refined PU upper creates a clean, structur",
    "sourceProductUrl": "https://campusshoes.com/products/elan-01-navy-mens-formal-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719075733735",
    "mrp": 1156,
    "sku": "CA-22K-166-K-NAVY-WHT-FORG-11",
    "use": "Running",
    "code": "CAMPUS-9719075733735",
    "name": "SUNNY-KIDS Navy",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Deep Navy",
    "price": 925,
    "sport": "Running",
    "upper": "Mesh+ Pvc+ Welding+Embossing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#1f2937",
        "name": "Deep Navy",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_NAVY-WHT-FORG_04.webp?v=1789557824",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_NAVY-WHT-FORG_03.webp?v=1789557824",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_NAVY-WHT-FORG_02.jpg?v=1789557824",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_NAVY-WHT-FORG_05.webp?v=1789557824",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_NAVY-WHT-FORG_01.webp?v=1789557824"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes",
      "payday",
      "sale",
      "shshoes",
      "wyv"
    ],
    "collections": [
      "Running Collection",
      "Sale"
    ],
    "description": "Ready, Steady, Zoom! Campus Sunny-Kids Running Shoes Are Built For Little Feet That Never Sit Still. The Breathable Mesh And Sturdy Pvc Upper Keep Them Comfy While Handling All The Running, Jumping, And Exploring. The Lightweight Eva Sole Supports Easy Movement, While The Memory Insole And Pillofoam Cushioning Duo Add Soft, Bouncy Comfort That Keeps Smiles Going All Day. The Navy Base Gets A Playful Lift With Bright Orange Pops — Fun, Sporty, And Full Of Personality. Occasion: Everyday Insole: Memory Insole Upper Material: Mesh+ Pvc+ Welding+Embossing Technology: Pillofoam Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 92,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_NAVY-WHT-FORG_01.webp?v=1789557824",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_NAVY-WHT-FORG_02.jpg?v=1789557824",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_NAVY-WHT-FORG_03.webp?v=1789557824",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_NAVY-WHT-FORG_04.webp?v=1789557824",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNY-KIDS_22K-166_NAVY-WHT-FORG_05.webp?v=1789557824"
    ],
    "sizeInventory": {
      "Deep Navy": [
        {
          "sku": "22K-166-K-NAVY-WHT-FORG-1",
          "size": "1",
          "stock": 0
        },
        {
          "sku": "22K-166-K-NAVY-WHT-FORG-11",
          "size": "11",
          "stock": 13
        },
        {
          "sku": "22K-166-K-NAVY-WHT-FORG-12",
          "size": "12",
          "stock": 11
        },
        {
          "sku": "22K-166-K-NAVY-WHT-FORG-13",
          "size": "13",
          "stock": 7
        }
      ]
    },
    "sourceCategory": "Kids Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9719075733735",
    "waterResistance": "No",
    "shortDescription": "Ready, Steady, Zoom! Campus Sunny-Kids Running Shoes Are Built For Little Feet That Never Sit Still. The Breathable Mesh And Sturdy Pvc Upper Keep Them Comfy While Handling All The",
    "sourceProductUrl": "https://campusshoes.com/products/sunny-kids-navy-wht-f-org-kids-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9619339313383",
    "mrp": 999,
    "sku": "CA-GC-22101-N-G-NAVY-FGREEN-6",
    "use": "Sandals",
    "code": "CAMPUS-9619339313383",
    "name": "GC-22101-N Blue",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Royal Blue",
    "price": 799,
    "sport": "Lifestyle",
    "upper": "Pvc + Lycra + Printing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#2563eb",
        "name": "Royal Blue",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_NAVY-FGREEN_04copy.webp?v=1773123653",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_NAVY-FGREEN_03.jpg?v=1773123653",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_NAVY-FGREEN_02.jpg?v=1773123653",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_NAVY-FGREEN_05.jpg?v=1773123654",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_NAVY-FGREEN_01copy.webp?v=1773123653"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "c&s",
      "cs",
      "emp0",
      "men",
      "men sandals & floaters"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "c&s",
      "cs",
      "emp0",
      "men",
      "men sandals & floaters",
      "men sandals & slippers",
      "mss",
      "s&s",
      "Slippers & Sandals",
      "sss",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "A lot comfortable, a whole lot dependable — Campus GC-22101 Men’s Sandals in Navy bring sporty character to relaxed summer days. Let’s take you through this beast of a pair. The upper is crafted with smooth PVC that keeps things durable, while the lycra lining feels soft against the skin. Next, the EVA footbed cushions every step, while the rugged TPR outsole keeps your footing steady across uneven paths. The sporty design in navy paired with green accents adds a vibrant twist that feels fresh, outdoorsy, and ready for adventure, while the dual velcro closure makes slipping in, out, and adjusting the fit oh-so quick and easy. Occasion: Everyday Insole: Footpad :- Eva Upper Material: Pvc + Lycra + Printing Care Instructions: Gently scrub with a soft cloth or brush using mild soap and cold water, then air dry in the shade. Avoid bleach and harsh cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 56,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_NAVY-FGREEN_01copy.webp?v=1773123653",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_NAVY-FGREEN_02.jpg?v=1773123653",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_NAVY-FGREEN_03.jpg?v=1773123653",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_NAVY-FGREEN_04copy.webp?v=1773123653",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22101_GC-22101_NAVY-FGREEN_05.jpg?v=1773123654"
    ],
    "sizeInventory": {
      "Royal Blue": [
        {
          "sku": "GC-22101-N-G-NAVY-FGREEN-6",
          "size": "6",
          "stock": 5
        },
        {
          "sku": "GC-22101-N-G-NAVY-FGREEN-7",
          "size": "7",
          "stock": 7
        },
        {
          "sku": "GC-22101-N-G-NAVY-FGREEN-8",
          "size": "8",
          "stock": 14
        },
        {
          "sku": "GC-22101-N-G-NAVY-FGREEN-9",
          "size": "9",
          "stock": 10
        },
        {
          "sku": "GC-22101-N-G-NAVY-FGREEN-10",
          "size": "10",
          "stock": 12
        }
      ]
    },
    "sourceCategory": "Men Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9619339313383",
    "waterResistance": "No",
    "shortDescription": "A lot comfortable, a whole lot dependable — Campus GC-22101 Men’s Sandals in Navy bring sporty character to relaxed summer days. Let’s take you through this beast of a pair. The up",
    "sourceProductUrl": "https://campusshoes.com/products/gc-22101-n-navy-f-green-mens-sandals",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719074750695",
    "mrp": 969,
    "sku": "CA-22C-169-C-SLATEGRN-BLK-2",
    "use": "Walking",
    "code": "CAMPUS-9719074750695",
    "name": "GUMP Green",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Olive Green",
    "price": 775,
    "sport": "Walking",
    "upper": "Mesh+Pvc+ Lycra+ Elastic",
    "width": "Medium",
    "colors": [
      {
        "hex": "#15803d",
        "name": "Olive Green",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_SLATEGRN-BLK_04_912e1b82-10db-4d24-88a2-14e0b7de7ad3.webp?v=1789559054",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_SLATEGRN-BLK_03_d95fcfcf-f1bd-4e34-b61d-6d3584591d07.webp?v=1789559054",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_SLATEGRN-BLK_02_358ae847-d426-49cd-a80d-add000e987e5.jpg?v=1789559054",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_SLATEGRN-BLK_05_e085a315-11b9-445f-8c5f-36006baa03f9.webp?v=1789559054",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_SLATEGRN-BLK_01_b61e449c-2d46-4173-bb88-8f9f30c08e40.webp?v=1789559054"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "emp0",
      "Kids",
      "Kids shoes",
      "kids slip on shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "Kids",
      "Kids shoes",
      "kids slip on shoes",
      "new",
      "nys",
      "payday",
      "sale",
      "shoes",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Slip In And Turn The Fun Mode On! Campus Gump Childs’ Walking Shoes Keep Up With Curious Steps And Endless Energy. The Mesh And Pvc Upper Balances Airflow With Durability, While The Elastic Band Locks In A Comfy, Flexible Fit. A Lightweight Eva Sole Supports Smooth Movement, And The Memory Insole With Pillofoam Delivers Soft, Cloud-Like Cushioning That Keeps Little Feet Happy All Day. The Slate Green And Black Combo Adds A Cool, Outdoorsy Vibe — Perfect For Kids Who Are Always Ready To Explore. Occasion: Everyday Insole: Memory Insole Upper Material: Mesh+Pvc+ Lycra+ Elastic Technology: Pillofoam Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 20,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_SLATEGRN-BLK_01_b61e449c-2d46-4173-bb88-8f9f30c08e40.webp?v=1789559054",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_SLATEGRN-BLK_02_358ae847-d426-49cd-a80d-add000e987e5.jpg?v=1789559054",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_SLATEGRN-BLK_03_d95fcfcf-f1bd-4e34-b61d-6d3584591d07.webp?v=1789559054",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_SLATEGRN-BLK_04_912e1b82-10db-4d24-88a2-14e0b7de7ad3.webp?v=1789559054",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_SLATEGRN-BLK_05_e085a315-11b9-445f-8c5f-36006baa03f9.webp?v=1789559054"
    ],
    "sizeInventory": {
      "Olive Green": [
        {
          "sku": "22C-169-C-SLATEGRN-BLK-2",
          "size": "2",
          "stock": 7
        },
        {
          "sku": "22C-169-C-SLATEGRN-BLK-3",
          "size": "3",
          "stock": 9
        },
        {
          "sku": "22C-169-C-SLATEGRN-BLK-4",
          "size": "4",
          "stock": 5
        },
        {
          "sku": "22C-169-C-SLATEGRN-BLK-5",
          "size": "5",
          "stock": 12
        }
      ]
    },
    "sourceCategory": "Kids Slip on Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9719074750695",
    "waterResistance": "No",
    "shortDescription": "Slip In And Turn The Fun Mode On! Campus Gump Childs’ Walking Shoes Keep Up With Curious Steps And Endless Energy. The Mesh And Pvc Upper Balances Airflow With Durability, While Th",
    "sourceProductUrl": "https://campusshoes.com/products/gump-slate-grn-blk-child-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9379293298939",
    "mrp": 16249,
    "sku": "SU-KJ1885-7",
    "use": "Basketball",
    "code": "SUPERKICKS-9379293298939",
    "name": "ANTHONY EDWARDS 2 { CORE BLACK / GOLD METALLIC / SOLAR TURBO",
    "sole": "Not specified",
    "brand": "ADIDAS",
    "color": "Core Black",
    "price": 12999,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_95c5159d-b1d5-4a08-9e98-f55d4fec7102.jpg?v=1785496655",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_1015c550-6969-4c53-9cac-1273f0c2177d.jpg?v=1785496655",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/31_17f271f4-bd64-4c78-acc1-27424ed3db1f.jpg?v=1785496655",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_072154be-f660-4fd3-8244-3b362e840204.jpg?v=1785496655",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_eca15519-4c1a-4055-9e2c-7bd7c57e3004.jpg?v=1785496655"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Basketball",
    "features": [
      "Footwear",
      "Frachise: A.E.2",
      "New Arrivals",
      "NO-COD",
      "Sneakers"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Adidas",
      "Footwear",
      "Frachise: A.E.2",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "When You Step Onto The Court, You Want To Feel Unstoppable. Designed To Elevate Your Game With Cutting-edge Technology And Sleek Design, The Anthony Edwards 2 Shoes Are Made For Basketball Enthusiasts Who Crave Performance And Style In Equal Measure. Lightstrike Technology In The Midsole Provides Super-light Cushioning For Next-level Speed. It Reinvents The Feeling And Expectations Of Lightweight Cushioning, Helping You Stay Agile And Responsive During Intense Play. The Integrated Boost Technology Is Designed To Keep You Going. Delivering Incredible Energy Return And Instant Comfort With Each Stride, It Helps You Feel Ready To Make Those Game-winning Moves. Featuring A Textile And Synthetic Upper, These Shoes Are Crafted To Provide A Snug Fit That Helps Support Your Moves. The Rubber Outsole Offers Reliable Grip On Indoor Surfaces, Giving You Confidence To Pivot And Sprint With Ease. Whether You're Playing A High-stakes Match Or Practising Your Skills, This Adidas Footwear Is Your Go-to Partner On The Court. Embrace The Future Of Basketball Footwear With These Performance-driven Shoes.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 30,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_eca15519-4c1a-4055-9e2c-7bd7c57e3004.jpg?v=1785496655",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/31_17f271f4-bd64-4c78-acc1-27424ed3db1f.jpg?v=1785496655",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_1015c550-6969-4c53-9cac-1273f0c2177d.jpg?v=1785496655",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_95c5159d-b1d5-4a08-9e98-f55d4fec7102.jpg?v=1785496655",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_072154be-f660-4fd3-8244-3b362e840204.jpg?v=1785496655"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "KJ1885-7",
          "size": "7",
          "stock": 5
        },
        {
          "sku": "KJ1885-8",
          "size": "8",
          "stock": 9
        },
        {
          "sku": "KJ1885-9",
          "size": "9",
          "stock": 4
        },
        {
          "sku": "KJ1885-10",
          "size": "10",
          "stock": 9
        },
        {
          "sku": "KJ1885-11",
          "size": "11",
          "stock": 6
        }
      ]
    },
    "sourceCategory": "Basketball Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9379293298939",
    "waterResistance": "No",
    "shortDescription": "When You Step Onto The Court, You Want To Feel Unstoppable. Designed To Elevate Your Game With Cutting-edge Technology And Sleek Design, The Anthony Edwards 2 Shoes Are Made For Ba",
    "sourceProductUrl": "https://www.superkicks.in/products/adidas-anthony-edwards-2-core-black-gold-metallic-solar-turbo",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9402134036731",
    "mrp": 9994,
    "sku": "SU-212135-90H-7",
    "use": "Slippers",
    "code": "SUPERKICKS-9402134036731",
    "name": "BOWSER CLASSIC CLOG { GREEN/YELLOW/RED",
    "sole": "Not specified",
    "brand": "CROCS",
    "color": "Crimson Red",
    "price": 7995,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#dc2626",
        "name": "Crimson Red",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_48da24b2-3705-418c-bd5a-2f4066e63a38.jpg?v=1788178889",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_ec80343b-8d76-4f00-84c9-46b34871e7c1.jpg?v=1788178889",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_40c7a368-ccff-4f46-8b1b-6f23e4f53268.jpg?v=1788178889",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_bb2211c4-9962-4ba1-ae66-e6cb27f1fd67.jpg?v=1788178890",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_7f18cad1-826f-41a3-a887-96701a737bff.jpg?v=1788178889"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Incredibly light and fun to wear",
      "Dark green colorway with black, red-orange, yellow, and white details",
      "7 fixed PVC spikes on each upper",
      "5 fixed PVC spikes on backstrap",
      "Custom rivet featuring Bowser’s face",
      "Water-friendly and buoyant; weighs only ounces"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Crocs",
      "Footwear",
      "Franchise: CROCS SLIDE",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The King of the Koopa Troopas is here! Like lightning in a bottle, earthquake in a can, the Bowser Classic Clog from the Super Mario™ collection brings powerful style to an everyday essential. This comfortable clog is colored in Bowser’s classic palette with a green upper, red-orange edge detail, and a yellow sole. 7 fearsome PVC spikes are fixed to the vamp of each shoe with 5 more spikes punctuating the backstrap. Bowser’s character mark sits on custom rivets, so you know it’s showtime. Bowser Classic Clog Details: Incredibly light and fun to wear Dark green colorway with black, red-orange, yellow, and white details 7 fixed PVC spikes on each upper 5 fixed PVC spikes on backstrap Custom rivet featuring Bowser’s face Water-friendly and buoyant; weighs only ounces Designed to enhance breathability Easy to clean and quick to dry Pivoting heel straps for a more secure fit Customizable with Jibbitz™ charms Iconic Crocs Comfort™: Lightweight. Flexible. 360-degree comfort.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 82,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_7f18cad1-826f-41a3-a887-96701a737bff.jpg?v=1788178889",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_40c7a368-ccff-4f46-8b1b-6f23e4f53268.jpg?v=1788178889",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_ec80343b-8d76-4f00-84c9-46b34871e7c1.jpg?v=1788178889",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_48da24b2-3705-418c-bd5a-2f4066e63a38.jpg?v=1788178889",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_bb2211c4-9962-4ba1-ae66-e6cb27f1fd67.jpg?v=1788178890"
    ],
    "sizeInventory": {
      "Crimson Red": [
        {
          "sku": "212135-90H-7",
          "size": "7",
          "stock": 10
        },
        {
          "sku": "212135-90H-8",
          "size": "8",
          "stock": 9
        },
        {
          "sku": "212135-90H-9",
          "size": "9",
          "stock": 11
        },
        {
          "sku": "212135-90H-10",
          "size": "10",
          "stock": 8
        },
        {
          "sku": "212135-90H-11",
          "size": "11",
          "stock": 10
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9402134036731",
    "waterResistance": "No",
    "shortDescription": "The King of the Koopa Troopas is here! Like lightning in a bottle, earthquake in a can, the Bowser Classic Clog from the Super Mario™ collection brings powerful style to an everyda",
    "sourceProductUrl": "https://www.superkicks.in/products/crocs-bowser-classic-clog-green-yellow-red",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15409980637435",
    "mrp": 24119,
    "sku": "SU-HQ7978-001-7",
    "use": "Sneakers",
    "code": "SUPERKICKS-15409980637435",
    "name": "AIR JORDAN 5 RETRO \"HALLOWEEN\" { BLACK/BLACK-PICANTE RED-GLOW N THE DARK",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Core Black",
    "price": 19295,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_936f79c5-e1b7-482d-9917-d56c0e328090.jpg?v=1791276576",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_5c602742-a225-4f6e-9bd7-806000361836.jpg?v=1791276575",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_1c5c93ad-1b84-492b-a410-b4d88c23eef8.jpg?v=1791276576",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_a9dad43c-3bf3-4286-9d2d-0f3e9093dad3.jpg?v=1791276576",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_7f6d3a4f-24a3-48b0-8f57-d7cf3d5e6d0c.jpg?v=1791276575"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Foam midsole",
      "Glow-in-the-dark details"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Jordan",
      "Coming Soon",
      "Enddate__25 October 2026 23:59",
      "Footwear",
      "Franchise: AIR JORDAN 5",
      "Gender - Men",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers",
      "Startdate__17 October 2026 00:01"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "The spooky season's upon us. Step into the shadows in this sinister take on the AJ5. Premium black nubuck cloaks the upper to keep you out of sight. Spine-chilling Picante Red accents emerge like a jack-o-lantern's flickering glare in the dead of night. Glow-in-the-dark details bring a ghostly glimmer to the legendary silhouette. The net-inspired tongue and quarter panels combine with a jagged midsole, bump-out collar and lace locks to revive the original 1990 build. An Air-cushioned heel and forefoot let you ditch the ghosts, ghouls and goblins in comfort, but beware the Black Cat. Premium leather and nubuck upper adds durable comfort. Nike Air technology absorbs impact for cushioning with every step. Plush and comfortable, Max Air cushioning has just the right amount of support. Grippy rubber outsole helps provide durable traction. More Details Foam midsole Glow-in-the-dark details",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 22,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_7f6d3a4f-24a3-48b0-8f57-d7cf3d5e6d0c.jpg?v=1791276575",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_1c5c93ad-1b84-492b-a410-b4d88c23eef8.jpg?v=1791276576",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_5c602742-a225-4f6e-9bd7-806000361836.jpg?v=1791276575",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_936f79c5-e1b7-482d-9917-d56c0e328090.jpg?v=1791276576",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_a9dad43c-3bf3-4286-9d2d-0f3e9093dad3.jpg?v=1791276576"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "HQ7978-001-7",
          "size": "7",
          "stock": 6
        },
        {
          "sku": "HQ7978-001-8",
          "size": "8",
          "stock": 0
        },
        {
          "sku": "HQ7978-001-9",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "HQ7978-001-10",
          "size": "10",
          "stock": 7
        },
        {
          "sku": "HQ7978-001-11",
          "size": "11",
          "stock": 5
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15409980637435",
    "waterResistance": "No",
    "shortDescription": "The spooky season's upon us. Step into the shadows in this sinister take on the AJ5. Premium black nubuck cloaks the upper to keep you out of sight. Spine-chilling Picante Red acce",
    "sourceProductUrl": "https://www.superkicks.in/products/jordan-air-jordan-5-retro-halloween-black-black-picante-red-glow-n-the-dark",
    "inventoryCountsAreExact": false
  },
  {
    "id": "redtape-8969108226238",
    "mrp": 15099,
    "sku": "RE-RWB0024-36",
    "use": "Boots",
    "code": "REDTAPE-8969108226238",
    "name": "Chelsea Boots for Women in Brown",
    "sole": "Not specified",
    "brand": "RED TAPE",
    "color": "Cognac Tan",
    "price": 2340,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0024_4.jpg?v=1789019442",
          "back": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0024_3.jpg?v=1789019442",
          "side": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0024_2.jpg?v=1789019442",
          "sole": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0024_5.jpg?v=1789019442",
          "front": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0024_1.jpg?v=1789019442"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Boots",
    "features": [
      "PU + Textile Lining: PU and textile lining balances soft contact, internal structure, and comfortable co",
      "Material: Sole – TPR | Upper – LEATHER",
      "Heel: 1-inch heel adds subtle elevation while maintaining stable, balanced support for everyday wear",
      "Fit: Mid-cut Chelsea-style pull-on profile supports easy wear, comfortable ankle coverage, and versatile styling",
      "Utility: Suitable for casual outings, smart-casual dressing, travel, weekend wear, and cool-weather styling"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Boots",
      "Footwear",
      "Women"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Step into timeless boot styling with comfortable everyday structure in Red Tape chelsea boots for women in Brown, designed to bring together comfort, durability, and confident everyday styling. The premium leather upper delivers durable structure, a refined finish, and dependable shape retention. Inside, the PU and textile lining balances soft contact, internal structure, and comfortable coverage. Underfoot, the TPR sole delivers durable traction, flexible grip, and stable everyday support. Crafted with a round toe profile and 1 inch heel construction, the design supports comfortable movement throughout the day. The design follows a mid-cut Chelsea boot silhouette with a clean, timeless profile and refined casual appeal. The mid-cut Chelsea-style pull-on profile supports easy wear, comfortable ankle coverage, and versatile styling. Together, these elements provide a practical balance of support, mobility, and style. A versatile choice for casual outings, smart-casual dressing, travel, weekend wear, and cool-weather styling, this pair is built to complement an active wardrobe without compromising on comfort or everyday usability. Features. Premium Leather Upper: Premium leather upper delivers durable structure, a refined finish, and dependable shape retention. PU + Textile Lining: PU and textile lining balances soft contact, internal structure, and comfortable co Product Specification Material: Sole – TPR | Upper – LEATHER Design: Mid-cut Chelsea boot silhouette with a clean, timeless profile and refined casual appeal for a versatile and comfortable finish Heel: 1-inch heel adds subtle elevation while maintaining stable, balanced support for everyday wear Fit: Mid-cut Chelsea-style pull-on profile supports easy wear, comfortable ankle coverage, and versatile styling Utility: Suitable for casual outings, smart-casual dressing, travel, weekend wear, and cool-weather styling",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "REDTAPE",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 84,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0024_1.jpg?v=1789019442",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0024_2.jpg?v=1789019442",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0024_3.jpg?v=1789019442",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0024_4.jpg?v=1789019442",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RWB0024_5.jpg?v=1789019442"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "RWB0024-36",
          "size": "3",
          "stock": 14
        },
        {
          "sku": "RWB0024-37",
          "size": "4",
          "stock": 13
        },
        {
          "sku": "RWB0024-38",
          "size": "5",
          "stock": 11
        },
        {
          "sku": "RWB0024-39",
          "size": "6",
          "stock": 13
        },
        {
          "sku": "RWB0024-40",
          "size": "7",
          "stock": 5
        }
      ]
    },
    "sourceCategory": "Boots",
    "countryOfOrigin": "India",
    "discountPercent": 85,
    "sourceProductId": "8969108226238",
    "waterResistance": "Water Repellent",
    "shortDescription": "Step into timeless boot styling with comfortable everyday structure in Red Tape chelsea boots for women in Brown, designed to bring together comfort, durability, and confident ever",
    "sourceProductUrl": "https://redtape.com/products/red-tape-chelsea-boots-for-women-in-brown-chelsea-bootsrwb0024",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9565156737255",
    "mrp": 3999,
    "sku": "CA-ELAN-26-G-NAVY-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9565156737255",
    "name": "ELAN-26 Navy",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Deep Navy",
    "price": 1649,
    "sport": "Lifestyle",
    "upper": "Knitted+Pu",
    "width": "Medium",
    "colors": [
      {
        "hex": "#1f2937",
        "name": "Deep Navy",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-26BLUE_04.webp?v=1780306837",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-26BLUE_03.webp?v=1780306837",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-26BLUE_02.jpg?v=1780306837",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-26-BLUE-Infographics-Adapt_49614111-6068-483c-a9cf-fe674161d68f.webp?v=1785922735",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Elan-26_navy_new.jpg?v=1781864016"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.3,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The Campus ELAN-26 Men's Derby Shoes are the kind of pair that earns a permanent place in your weekday rotation. The knitted vamp softens the formality of the classic derby silhouette, while refined PU detailing keeps the overall look polished and professional. Inside, the lycra footbed ensures lasting comfort through packed schedules and back-to-back commitments. Underfoot, the TPR sole delivers dependable support and stability with every step. Pair them with tailored trousers, chinos, or smart separates — finished in navy, ELAN-26 brings an effortless sense of polish to whatever the day demands. A true office essential, reimagined for the way modern professionals move. Occasion: Everyday Insole: Pu Foam Molded Upper Material: Knitted+Pu Care Instructions: Gently scrub with a soft cloth or brush using mild soap and cold water, then air dry in the shade. Avoid bleach and harsh cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 92,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Elan-26_navy_new.jpg?v=1781864016",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-26BLUE_02.jpg?v=1780306837",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-26BLUE_03.webp?v=1780306837",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-26BLUE_04.webp?v=1780306837",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-26-BLUE-Infographics-Adapt_49614111-6068-483c-a9cf-fe674161d68f.webp?v=1785922735"
    ],
    "sizeInventory": {
      "Deep Navy": [
        {
          "sku": "ELAN-26-G-NAVY-6",
          "size": "6",
          "stock": 6
        },
        {
          "sku": "ELAN-26-G-NAVY-7",
          "size": "7",
          "stock": 13
        },
        {
          "sku": "ELAN-26-G-NAVY-8",
          "size": "8",
          "stock": 7
        },
        {
          "sku": "ELAN-26-G-NAVY-9",
          "size": "9",
          "stock": 10
        },
        {
          "sku": "ELAN-26-G-NAVY-10",
          "size": "10",
          "stock": 6
        },
        {
          "sku": "ELAN-26-G-NAVY-11",
          "size": "11",
          "stock": 10
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 59,
    "sourceProductId": "9565156737255",
    "waterResistance": "No",
    "shortDescription": "The Campus ELAN-26 Men's Derby Shoes are the kind of pair that earns a permanent place in your weekday rotation. The knitted vamp softens the formality of the classic derby silhoue",
    "sourceProductUrl": "https://campusshoes.com/products/elan-26-navy-mens-formal-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719075668199",
    "mrp": 1249,
    "sku": "CA-22C-177-C-SKY-BLK-2",
    "use": "Running",
    "code": "CAMPUS-9719075668199",
    "name": "SUNNY CH Blue",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Royal Blue",
    "price": 999,
    "sport": "Running",
    "upper": "Mesh+ Pvc+ Welding+Embossing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#2563eb",
        "name": "Royal Blue",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNYCH_22C-177_SKY-BLK_04.webp?v=1789557905",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNYCH_22C-177_SKY-BLK_03.webp?v=1789557905",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNYCH_22C-177_SKY-BLK_02.jpg?v=1789557905",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNYCH_22C-177_SKY-BLK_05.webp?v=1789557905",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNYCH_22C-177_SKY-BLK_01.webp?v=1789557905"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes",
      "payday",
      "sale",
      "shshoes",
      "wyv"
    ],
    "collections": [
      "Running Collection",
      "Sale"
    ],
    "description": "Game Face On, Laces Tied Tight! Campus Sunny Ch Child Running Shoes Are Made For Young Champs Who Are Always Ready To Race Ahead. The Mesh And Pvc Upper Keeps Things Breathable While Adding The Right Protection And Structure. The Lightweight Eva Sole Ensures Smooth, Flexible Movement, While The Memory Insole And Pillofoam Cushioning Team Up To Deliver Soft Comfort — All To Keep Up With Their Energy. Finished In Cool Sky Blue With Bright Yellow Accents, This Pair Brings Sporty Confidence With Dashing Style. Occasion: Everyday Insole: Memory Insole Upper Material: Mesh+ Pvc+ Welding+Embossing Technology: Pillofoam Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 67,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNYCH_22C-177_SKY-BLK_01.webp?v=1789557905",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNYCH_22C-177_SKY-BLK_02.jpg?v=1789557905",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNYCH_22C-177_SKY-BLK_03.webp?v=1789557905",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNYCH_22C-177_SKY-BLK_04.webp?v=1789557905",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SUNNYCH_22C-177_SKY-BLK_05.webp?v=1789557905"
    ],
    "sizeInventory": {
      "Royal Blue": [
        {
          "sku": "22C-177-C-SKY-BLK-2",
          "size": "2",
          "stock": 6
        },
        {
          "sku": "22C-177-C-SKY-BLK-3",
          "size": "3",
          "stock": 13
        },
        {
          "sku": "22C-177-C-SKY-BLK-4",
          "size": "4",
          "stock": 13
        },
        {
          "sku": "22C-177-C-SKY-BLK-5",
          "size": "5",
          "stock": 6
        }
      ]
    },
    "sourceCategory": "Kids Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9719075668199",
    "waterResistance": "No",
    "shortDescription": "Game Face On, Laces Tied Tight! Campus Sunny Ch Child Running Shoes Are Made For Young Champs Who Are Always Ready To Race Ahead. The Mesh And Pvc Upper Keeps Things Breathable Whi",
    "sourceProductUrl": "https://campusshoes.com/products/sunny-ch-sky-blk-child-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9692649881831",
    "mrp": 999,
    "sku": "CA-SS26-OPG-010-G-BROWN-6",
    "use": "Sandals",
    "code": "CAMPUS-9692649881831",
    "name": "SS26-OPG-010 Brown",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cognac Tan",
    "price": 799,
    "sport": "Lifestyle",
    "upper": "Pvc",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BROWN_04.webp?v=1788418151",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BROWN_03.webp?v=1788418151",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BROWN_02.jpg?v=1788418151",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BROWN_05.webp?v=1788418151",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BROWN_01.webp?v=1788418151"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "bssfm",
      "c&s",
      "camp",
      "cs",
      "emp0"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "c&s",
      "camp",
      "cs",
      "emp0",
      "fs",
      "men",
      "men sandal casual",
      "men sandals & floaters",
      "men sandals & slippers",
      "mss",
      "nys",
      "payday",
      "s&s",
      "sss",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Earthy, Easy, And Made For Off-Duty Days. The Campus Ss26-Opg-010 Men’S Sandals Bring A Warm Brown Finish To A Classic Two-Strap Design. The Adjustable Buckles Let You Fine-Tune The Fit, While The All-Pvc Construction Keeps Things Simple And Practical. Pair Them With Shorts, Denims, Or Your Favourite Easy-Breezy Fits — These Are Built To Keep Things Comfortable With Zero Effort. Occasion: Everyday Upper Material: Pvc Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 37,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BROWN_01.webp?v=1788418151",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BROWN_02.jpg?v=1788418151",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BROWN_03.webp?v=1788418151",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BROWN_04.webp?v=1788418151",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BROWN_05.webp?v=1788418151"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "SS26-OPG-010-G-BROWN-6",
          "size": "6",
          "stock": 7
        },
        {
          "sku": "SS26-OPG-010-G-BROWN-7",
          "size": "7",
          "stock": 7
        },
        {
          "sku": "SS26-OPG-010-G-BROWN-8",
          "size": "8",
          "stock": 0
        },
        {
          "sku": "SS26-OPG-010-G-BROWN-9",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "SS26-OPG-010-G-BROWN-10",
          "size": "10",
          "stock": 5
        },
        {
          "sku": "SS26-OPG-010-G-BROWN-11",
          "size": "11",
          "stock": 9
        }
      ]
    },
    "sourceCategory": "Men Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9692649881831",
    "waterResistance": "No",
    "shortDescription": "Earthy, Easy, And Made For Off-Duty Days. The Campus Ss26-Opg-010 Men’S Sandals Bring A Warm Brown Finish To A Classic Two-Strap Design. The Adjustable Buckles Let You Fine-Tune Th",
    "sourceProductUrl": "https://campusshoes.com/products/ss26-opg-010-brown-mens-sandals",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719074652391",
    "mrp": 969,
    "sku": "CA-22C-169-C-MODBLU-BLK-2",
    "use": "Walking",
    "code": "CAMPUS-9719074652391",
    "name": "GUMP Blue",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Royal Blue",
    "price": 775,
    "sport": "Walking",
    "upper": "Mesh+Pvc+ Lycra+ Elastic",
    "width": "Medium",
    "colors": [
      {
        "hex": "#2563eb",
        "name": "Royal Blue",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_MODBLU-BLK_04.webp?v=1789559245",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_MODBLU-BLK_03.webp?v=1789559245",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_MODBLU-BLK_02.jpg?v=1789559245",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_MODBLU-BLK_05.webp?v=1789559245",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_MODBLU-BLK_01.webp?v=1789559245"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "emp0",
      "Kids",
      "Kids shoes",
      "kids slip on shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "Kids",
      "Kids shoes",
      "kids slip on shoes",
      "nys",
      "payday",
      "sale",
      "shoes",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Fast Feet, Cool Moves. Campus Gump Childs’ Walking Shoes Are Made For Everyday Adventures That Never Sit Still. The Mesh And Pvc Upper Keeps Things Breezy While Holding Its Shape. Additionally, The Elastic Band Ensures A Secure, Fuss-Free Fit So They Can Move Carefree. The Eva Sole Keeps Movement Light And Easy, While The Memory Insole And Pillofoam Combo Cushions Every Hop, Skip, And Sprint. Styled In A Modern Blue And Black Mix, This Pair Feels Sporty, Sharp, And Ready For Some Fun N’ Action. Occasion: Everyday Insole: Memory Insole Upper Material: Mesh+Pvc+ Lycra+ Elastic Technology: Pillofoam Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 43,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_MODBLU-BLK_01.webp?v=1789559245",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_MODBLU-BLK_02.jpg?v=1789559245",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_MODBLU-BLK_03.webp?v=1789559245",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_MODBLU-BLK_04.webp?v=1789559245",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_MODBLU-BLK_05.webp?v=1789559245"
    ],
    "sizeInventory": {
      "Royal Blue": [
        {
          "sku": "22C-169-C-MODBLU-BLK-2",
          "size": "2",
          "stock": 5
        },
        {
          "sku": "22C-169-C-MODBLU-BLK-3",
          "size": "3",
          "stock": 6
        },
        {
          "sku": "22C-169-C-MODBLU-BLK-4",
          "size": "4",
          "stock": 15
        },
        {
          "sku": "22C-169-C-MODBLU-BLK-5",
          "size": "5",
          "stock": 8
        }
      ]
    },
    "sourceCategory": "Kids Slip on Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9719074652391",
    "waterResistance": "No",
    "shortDescription": "Fast Feet, Cool Moves. Campus Gump Childs’ Walking Shoes Are Made For Everyday Adventures That Never Sit Still. The Mesh And Pvc Upper Keeps Things Breezy While Holding Its Shape. ",
    "sourceProductUrl": "https://campusshoes.com/products/gump-mod-blu-blk-child-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9379294707963",
    "mrp": 16249,
    "sku": "SU-KJ1887-7",
    "use": "Basketball",
    "code": "SUPERKICKS-9379294707963",
    "name": "ANTHONY EDWARDS 2 { HAZE CORAL / BLISS LILAC / ZERO METALIC",
    "sole": "Not specified",
    "brand": "ADIDAS",
    "color": "7",
    "price": 12999,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "7",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_4878b597-29fb-47e4-bb20-0f69ce8e6016.jpg?v=1785496893",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_5db56a77-bf35-4d72-b9b3-1fca45382e65.jpg?v=1785496893",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_07bf6085-80cb-4939-a000-63fab5b22387.jpg?v=1785496893",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/31_aeb98142-bd21-400c-83d5-837849aa1f7a.jpg?v=1785496893",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_618c55be-8c0a-4419-8c8c-2b0a4650c67d.jpg?v=1785496893"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Basketball",
    "features": [
      "Footwear",
      "Frachise: A.E.2",
      "New Arrivals",
      "NO-COD",
      "Sneakers"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Adidas",
      "Footwear",
      "Frachise: A.E.2",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Step onto the court with rebellious optimism in the Anthony Edwards 2 Shoes. These basketball shoes are designed to empower athletes and trendsetters alike, blending advanced design with a dynamic look that stands out. Experience adidas technologies working in synergy. Made for speed, Lightstrike midsole foam is light, giving you a responsive experience. Delivering energy return, Boost’s foam spring-like cushioning is responsive and effortlessly comfortable. The textile and synthetic upper provides durability and flexibility, delivering a comfortable fit that adapts to your match. A rubber outsole offers reliable grip underfoot, so you can move with assurance and agility. Whether you're driving to the hoop or making moves off the court, these shoes support your journey with confidence and flair. adidas brings together innovation and attitude, making them your go-to for performance and everyday style.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 71,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_618c55be-8c0a-4419-8c8c-2b0a4650c67d.jpg?v=1785496893",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_07bf6085-80cb-4939-a000-63fab5b22387.jpg?v=1785496893",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_5db56a77-bf35-4d72-b9b3-1fca45382e65.jpg?v=1785496893",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_4878b597-29fb-47e4-bb20-0f69ce8e6016.jpg?v=1785496893",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/31_aeb98142-bd21-400c-83d5-837849aa1f7a.jpg?v=1785496893"
    ],
    "sizeInventory": {
      "7": [
        {
          "sku": "KJ1887-7",
          "size": "7",
          "stock": 5
        },
        {
          "sku": "KJ1887-8",
          "size": "8",
          "stock": 5
        },
        {
          "sku": "KJ1887-9",
          "size": "9",
          "stock": 7
        },
        {
          "sku": "KJ1887-10",
          "size": "10",
          "stock": 10
        },
        {
          "sku": "KJ1887-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Basketball Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9379294707963",
    "waterResistance": "No",
    "shortDescription": "Step onto the court with rebellious optimism in the Anthony Edwards 2 Shoes. These basketball shoes are designed to empower athletes and trendsetters alike, blending advanced desig",
    "sourceProductUrl": "https://www.superkicks.in/products/adidas-anthony-edwards-2-haze-coral-bliss-lilac-zero-metalic",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9405591453947",
    "mrp": 8749,
    "sku": "SU-40719603-7",
    "use": "Slippers",
    "code": "SUPERKICKS-9405591453947",
    "name": "NITROCAT { MOODY GRAY-LIGHT LAVENDER-ULTRA RED",
    "sole": "Not specified",
    "brand": "PUMA",
    "color": "Concrete Grey",
    "price": 6999,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#8a8885",
        "name": "Concrete Grey",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_9825c864-e868-4648-90e6-bea0ca2e098b.jpg?v=1788352051",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_11cfe30c-62e5-4c05-b4a0-a79c2d886413.jpg?v=1788352051",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_5c928b6c-50c5-40a1-b6ee-2b1df4a4a5b8.jpg?v=1788352051",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_54d920bd-a352-40c5-b2d4-0b6165bd707a.jpg?v=1788352051",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_a81d0184-1f0d-4ccc-82f7-c93f25ffac06.jpg?v=1788352051"
        }
      }
    ],
    "gender": "Unisex",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Designed for: Lifestyle by PUMA",
      "Width: Regular",
      "Closure: Hook and loop",
      "Heel type: Flat",
      "PUMA branding details"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Puma",
      "Footwear",
      "Franchise: PUMA SLIDE",
      "New Arrivals",
      "NO-COD",
      "Product Style: Slides & Clogs",
      "Season: FW26",
      "ship@250",
      "Slides and Sandals",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The NITROcat Slide Sandals take you from post-workout cooldowns to long city walks with our signature NITROFOAM™ cushioning underfoot. Casual, laid-back, and sport-inspired, these sandals make recovery part of your everyday style. DETAILS Designed for: Lifestyle by PUMA Width: Regular Closure: Hook and loop Heel type: Flat PUMA branding details",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 99,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_a81d0184-1f0d-4ccc-82f7-c93f25ffac06.jpg?v=1788352051",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_5c928b6c-50c5-40a1-b6ee-2b1df4a4a5b8.jpg?v=1788352051",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_11cfe30c-62e5-4c05-b4a0-a79c2d886413.jpg?v=1788352051",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_9825c864-e868-4648-90e6-bea0ca2e098b.jpg?v=1788352051",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_54d920bd-a352-40c5-b2d4-0b6165bd707a.jpg?v=1788352051"
    ],
    "sizeInventory": {
      "Concrete Grey": [
        {
          "sku": "40719603-7",
          "size": "7",
          "stock": 15
        },
        {
          "sku": "40719603-8",
          "size": "8",
          "stock": 15
        },
        {
          "sku": "40719603-9",
          "size": "9",
          "stock": 13
        },
        {
          "sku": "40719603-10",
          "size": "10",
          "stock": 10
        },
        {
          "sku": "40719603-11",
          "size": "11",
          "stock": 13
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9405591453947",
    "waterResistance": "No",
    "shortDescription": "The NITROcat Slide Sandals take you from post-workout cooldowns to long city walks with our signature NITROFOAM™ cushioning underfoot. Casual, laid-back, and sport-inspired, these ",
    "sourceProductUrl": "https://www.superkicks.in/products/puma-nitrocat-moody-gray-light-lavender-ultra-red",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15395485384955",
    "mrp": 19994,
    "sku": "SU-IV3305-600-4",
    "use": "Sneakers",
    "code": "SUPERKICKS-15395485384955",
    "name": "AIR MAX 95 BIG BUBBLE SE { PINK FOAM/METALLIC SILVER-PEARL PINK",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Concrete Grey",
    "price": 15995,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#8a8885",
        "name": "Concrete Grey",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_7da75b09-d0cb-4dc7-956c-e8adeba191b9.jpg?v=1790681926",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_5f193102-a0bc-40b2-a0ba-f9db325103f4.jpg?v=1790681926",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_75437b7d-ca86-4894-91e7-05fa3b99cb3b.jpg?v=1790681926",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_3a0afd5d-f417-4239-919d-1ac79c0a7aab.jpg?v=1790681926",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_9d13b8b9-a17b-40bb-ab62-2350d5cee9f6.jpg?v=1790681926"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Metallic accents",
      "Foam midsole",
      "Rubber outsole"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Nike",
      "Footwear",
      "Franchise: AIR MAX 95",
      "Gender - Women",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "Taking inspiration from '90s track aesthetics, the Air Max 95 Big Bubble mixes unbelievable comfort with fast-paced style. Smooth leather and tonal textures create dimension while pumped-up Max Air unit adds performance-like cushioning. Upper mixes genuine leather and textile for a layered look built to last. Visible Max Air unit provides lightweight cushioning. Waffle outsole gives you durable traction and heritage style. More Details Metallic accents Foam midsole Rubber outsole",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 45,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_9d13b8b9-a17b-40bb-ab62-2350d5cee9f6.jpg?v=1790681926",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_75437b7d-ca86-4894-91e7-05fa3b99cb3b.jpg?v=1790681926",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_5f193102-a0bc-40b2-a0ba-f9db325103f4.jpg?v=1790681926",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_7da75b09-d0cb-4dc7-956c-e8adeba191b9.jpg?v=1790681926",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_3a0afd5d-f417-4239-919d-1ac79c0a7aab.jpg?v=1790681926"
    ],
    "sizeInventory": {
      "Concrete Grey": [
        {
          "sku": "IV3305-600-3",
          "size": "3",
          "stock": 0
        },
        {
          "sku": "IV3305-600-4",
          "size": "4",
          "stock": 6
        },
        {
          "sku": "IV3305-600-5",
          "size": "5",
          "stock": 13
        },
        {
          "sku": "IV3305-600-6",
          "size": "6",
          "stock": 9
        },
        {
          "sku": "IV3305-600-7",
          "size": "7",
          "stock": 0
        },
        {
          "sku": "IV3305-600-8",
          "size": "8",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15395485384955",
    "waterResistance": "No",
    "shortDescription": "Taking inspiration from '90s track aesthetics, the Air Max 95 Big Bubble mixes unbelievable comfort with fast-paced style. Smooth leather and tonal textures create dimension while ",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-air-max-95-big-bubble-se-pink-foam-metallic-silver-pearl-pink",
    "inventoryCountsAreExact": false
  },
  {
    "id": "redtape-8969108390078",
    "mrp": 14499,
    "sku": "RE-RTE6017-6",
    "use": "Boots",
    "code": "REDTAPE-8969108390078",
    "name": "Biker Boots for Men in Brown",
    "sole": "Not specified",
    "brand": "RED TAPE",
    "color": "Cognac Tan",
    "price": 3769,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6017_4.jpg?v=1789019450",
          "back": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6017_3.jpg?v=1789019450",
          "side": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6017_2.jpg?v=1789019450",
          "sole": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6017_5.jpg?v=1789019450",
          "front": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6017_1.jpg?v=1789019450"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.9,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Boots",
    "features": [
      "Soft Fabric Lining: Soft fabric lining supports a comfortable in-shoe feel and dependable daily wear. Durable TPR S",
      "Material: Sole – TPR | Upper – LEATHER",
      "Heel: Flat heel supports stable, balanced movement and dependable everyday comfort",
      "Fit: High-top construction provides supportive ankle coverage while maintaining comfortable everyday movement",
      "Utility: Suitable for casual outings, travel, weekend wear, rugged everyday styling, and cool-weather wardrobes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Boots",
      "Footwear",
      "Men"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Step into rugged everyday style with structured high-top comfort in Red Tape biker boots for men in Brown, designed to bring together comfort, durability, and confident everyday styling. The premium leather upper delivers durable structure, a refined finish, and dependable shape retention. Inside, the soft fabric lining supports a comfortable in-shoe feel and dependable daily wear. Underfoot, the TPR sole delivers durable traction, flexible grip, and stable everyday support. Crafted with a round toe profile and flat heel construction, the design supports comfortable movement throughout the day. The design follows a high-top biker boot silhouette with a rugged, structured profile and added ankle coverage. The high-top construction provides supportive ankle coverage while maintaining comfortable everyday movement. Together, these elements provide a practical balance of support, mobility, and style. A versatile choice for casual outings, travel, weekend wear, rugged everyday styling, and cool-weather wardrobes, this pair is built to complement an active wardrobe without compromising on comfort or everyday usability. Features. Premium Leather Upper: Premium leather upper delivers durable structure, a refined finish, and dependable shape retention. Soft Fabric Lining: Soft fabric lining supports a comfortable in-shoe feel and dependable daily wear. Durable TPR S Product Specification Material: Sole – TPR | Upper – LEATHER Design: High-top biker boot silhouette with a rugged, structured profile and added ankle coverage for a versatile and comfortable finish Heel: Flat heel supports stable, balanced movement and dependable everyday comfort Fit: High-top construction provides supportive ankle coverage while maintaining comfortable everyday movement Utility: Suitable for casual outings, travel, weekend wear, rugged everyday styling, and cool-weather wardrobes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "REDTAPE",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 130,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6017_1.jpg?v=1789019450",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6017_2.jpg?v=1789019450",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6017_3.jpg?v=1789019450",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6017_4.jpg?v=1789019450",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6017_5.jpg?v=1789019450"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "RTE6017-6",
          "size": "6",
          "stock": 15
        },
        {
          "sku": "RTE6017-7",
          "size": "7",
          "stock": 11
        },
        {
          "sku": "RTE6017-8",
          "size": "8",
          "stock": 6
        },
        {
          "sku": "RTE6017-9",
          "size": "9",
          "stock": 10
        },
        {
          "sku": "RTE6017-10",
          "size": "10",
          "stock": 13
        }
      ]
    },
    "sourceCategory": "Boots",
    "countryOfOrigin": "India",
    "discountPercent": 74,
    "sourceProductId": "8969108390078",
    "waterResistance": "Water Repellent",
    "shortDescription": "Step into rugged everyday style with structured high-top comfort in Red Tape biker boots for men in Brown, designed to bring together comfort, durability, and confident everyday st",
    "sourceProductUrl": "https://redtape.com/products/red-tape-biker-boots-for-men-in-brownbiker-boots-rte6017",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9565156770023",
    "mrp": 3999,
    "sku": "CA-ELAN-16-G-NAVY-TAN-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9565156770023",
    "name": "ELAN-16 Navy",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Deep Navy",
    "price": 2149,
    "sport": "Lifestyle",
    "upper": "Knitted+Pu+Lycra",
    "width": "Medium",
    "colors": [
      {
        "hex": "#1f2937",
        "name": "Deep Navy",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-16_ELAN-16_NAVY-TAN_04.webp?v=1780568262",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-16_ELAN-16_NAVY-TAN_03.webp?v=1780568262",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-16_ELAN-16_NAVY-TAN_02.jpg?v=1780568262",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-16_ELAN-16_NAVY-TAN_05.webp?v=1780568262",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Elan-16.jpg?v=1781863738"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Designed for men who move seamlessly between formal commitments and casual moments, the Campus ELAN-16 Men's Derby Shoes combine refined styling with all-day ease. The knitted vamp works alongside the PU upper to create a silhouette that feels elevated yet approachable, blending structure with breathability for everyday wear. A lightweight EVA sole keeps every step easy and fluid, while the lycra footbed provides lasting comfort through packed schedules and long hours on your feet. Modern in construction and versatile in character, ELAN-16 in a navy and tan combination brings a contemporary edge, reimagining the derby for contemporary lifestyles. Occasion: Everyday Insole: Pu Foam Molded Upper Material: Knitted+Pu+Lycra Care Instructions: Gently scrub with a soft cloth or brush using mild soap and cold water, then air dry in the shade. Avoid bleach and harsh cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 26,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Elan-16.jpg?v=1781863738",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-16_ELAN-16_NAVY-TAN_02.jpg?v=1780568262",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-16_ELAN-16_NAVY-TAN_03.webp?v=1780568262",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-16_ELAN-16_NAVY-TAN_04.webp?v=1780568262",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-16_ELAN-16_NAVY-TAN_05.webp?v=1780568262"
    ],
    "sizeInventory": {
      "Deep Navy": [
        {
          "sku": "ELAN-16-G-NAVY-TAN-6",
          "size": "6",
          "stock": 13
        },
        {
          "sku": "ELAN-16-G-NAVY-TAN-7",
          "size": "7",
          "stock": 14
        },
        {
          "sku": "ELAN-16-G-NAVY-TAN-8",
          "size": "8",
          "stock": 13
        },
        {
          "sku": "ELAN-16-G-NAVY-TAN-9",
          "size": "9",
          "stock": 8
        },
        {
          "sku": "ELAN-16-G-NAVY-TAN-10",
          "size": "10",
          "stock": 15
        },
        {
          "sku": "ELAN-16-G-NAVY-TAN-11",
          "size": "11",
          "stock": 7
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 46,
    "sourceProductId": "9565156770023",
    "waterResistance": "No",
    "shortDescription": "Designed for men who move seamlessly between formal commitments and casual moments, the Campus ELAN-16 Men's Derby Shoes combine refined styling with all-day ease. The knitted vamp",
    "sourceProductUrl": "https://campusshoes.com/products/elan-16-navy-tan-mens-casual-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719075537127",
    "mrp": 1049,
    "sku": "CA-22G-991-G-NAVY-RSLATE-6",
    "use": "Running",
    "code": "CAMPUS-9719075537127",
    "name": "SPAKE Navy",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Deep Navy",
    "price": 1004,
    "sport": "Running",
    "upper": "Mesh+Printing+Welding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#1f2937",
        "name": "Deep Navy",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SPAKE_22G-991_NAVY-R.SLATE_4.webp?v=1789558023",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SPAKE_22G-991_NAVY-R.SLATE_3.webp?v=1789558023",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SPAKE_22G-991_NAVY-R.SLATE_1.webp?v=1789558023",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SPAKE_22G-991_NAVY-R.SLATE_5.webp?v=1789558023",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SPAKE_22G-991_NAVY-R.SLATE_2.jpg?v=1789558023"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "emp0",
      "m&w running shoes",
      "men",
      "men running shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "m&w running shoes",
      "men",
      "men running shoes",
      "men shoes",
      "mss",
      "payday",
      "sale",
      "wyv"
    ],
    "collections": [
      "Running Collection"
    ],
    "description": "Say Hello To Spake, The Suave Companion From Campus For Every Step! With A Breathable Mesh Upper That Keeps Your Feet Fresh And An Anti-Slip Sole That Provides A Firm Grip, These Shoes Make You Look And Feel Incredible In Every Way. Slip Into Spake And Let Your Confident Stride Take Center Stage! Occasion: Everyday Insole: Die Cut Eva 4.5 Mm Upper Material: Mesh+Printing+Welding Technology: Anti Slip Sole Design Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 127,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SPAKE_22G-991_NAVY-R.SLATE_2.jpg?v=1789558023",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SPAKE_22G-991_NAVY-R.SLATE_1.webp?v=1789558023",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SPAKE_22G-991_NAVY-R.SLATE_3.webp?v=1789558023",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SPAKE_22G-991_NAVY-R.SLATE_4.webp?v=1789558023",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SPAKE_22G-991_NAVY-R.SLATE_5.webp?v=1789558023"
    ],
    "sizeInventory": {
      "Deep Navy": [
        {
          "sku": "22G-991-G-NAVY-RSLATE-6",
          "size": "6",
          "stock": 6
        },
        {
          "sku": "22G-991-G-NAVY-RSLATE-7",
          "size": "7",
          "stock": 7
        },
        {
          "sku": "22G-991-G-NAVY-RSLATE-8",
          "size": "8",
          "stock": 11
        },
        {
          "sku": "22G-991-G-NAVY-RSLATE-9",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "22G-991-G-NAVY-RSLATE-10",
          "size": "10",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 4,
    "sourceProductId": "9719075537127",
    "waterResistance": "No",
    "shortDescription": "Say Hello To Spake, The Suave Companion From Campus For Every Step! With A Breathable Mesh Upper That Keeps Your Feet Fresh And An Anti-Slip Sole That Provides A Firm Grip, These S",
    "sourceProductUrl": "https://campusshoes.com/products/spake-navy-r-slate-mens-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9692649849063",
    "mrp": 999,
    "sku": "CA-SS26-OPG-010-G-BLK-11",
    "use": "Sandals",
    "code": "CAMPUS-9692649849063",
    "name": "SS26-OPG-010 Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 799,
    "sport": "Lifestyle",
    "upper": "Pvc",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BLK_04.webp?v=1788418219",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BLK_03.webp?v=1788418219",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BLK_02.jpg?v=1788418219",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BLK_05.webp?v=1788418219",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BLK_01.webp?v=1788418219"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "bssfm",
      "c&s",
      "camp",
      "cs",
      "emp0"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "c&s",
      "camp",
      "cs",
      "emp0",
      "fs",
      "men",
      "men sandal casual",
      "men sandals & floaters",
      "men sandals & slippers",
      "mss",
      "nys",
      "payday",
      "s&s",
      "sss",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The Kind Of Sandal That Makes Laid-Back Style Look Effortless. The Campus Ss26-Opg-010 Men’S Sandals Bring A Clean, Classic Shape To Your Everyday Rotation. The Two Broad Straps With Adjustable Buckles Let You Fine-Tune The Fit, While The All-Pvc Construction Keeps The Pair Practical And Easy To Wear. Finished In All Black, It’S A No-Fuss Choice For Relaxed Days, Easy Summer Fits, And Everything In Between. Occasion: Everyday Upper Material: Pvc Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 39,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BLK_01.webp?v=1788418219",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BLK_02.jpg?v=1788418219",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BLK_03.webp?v=1788418219",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BLK_04.webp?v=1788418219",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-010_SS26-OPG-010_BLK_05.webp?v=1788418219"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "SS26-OPG-010-G-BLK-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "SS26-OPG-010-G-BLK-7",
          "size": "7",
          "stock": 0
        },
        {
          "sku": "SS26-OPG-010-G-BLK-8",
          "size": "8",
          "stock": 0
        },
        {
          "sku": "SS26-OPG-010-G-BLK-9",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "SS26-OPG-010-G-BLK-10",
          "size": "10",
          "stock": 0
        },
        {
          "sku": "SS26-OPG-010-G-BLK-11",
          "size": "11",
          "stock": 12
        }
      ]
    },
    "sourceCategory": "Men Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9692649849063",
    "waterResistance": "No",
    "shortDescription": "The Kind Of Sandal That Makes Laid-Back Style Look Effortless. The Campus Ss26-Opg-010 Men’S Sandals Bring A Clean, Classic Shape To Your Everyday Rotation. The Two Broad Straps Wi",
    "sourceProductUrl": "https://campusshoes.com/products/ss26-opg-010-blk-mens-sandals",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719074586855",
    "mrp": 969,
    "sku": "CA-22C-169-C-BLK-MSTD-2",
    "use": "Walking",
    "code": "CAMPUS-9719074586855",
    "name": "GUMP Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 775,
    "sport": "Walking",
    "upper": "Mesh+Pvc+ Lycra+ Elastic",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_BLK-MSTD_04.webp?v=1789559300",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_BLK-MSTD_03.webp?v=1789559300",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_BLK-MSTD_02.jpg?v=1789559301",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_BLK-MSTD_05.webp?v=1789559300",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_BLK-MSTD_01.webp?v=1789559300"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "emp0",
      "Kids",
      "Kids shoes",
      "kids slip on shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "Kids",
      "Kids shoes",
      "kids slip on shoes",
      "nys",
      "payday",
      "sale",
      "shoes",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Ready To Slip In And Speed Off! Campus Gump Childs’ Walking Shoes Are Built For Non-Stop Movers. The Mesh And Pvc Combo Keeps The Upper Breathable Yet Sturdy, While The Elastic Band Gives A Snug, Stay-Put Fit Without Slowing Them Down. Underfoot, The Lightweight Eva Sole Keeps Steps Smooth And Flexible. Inside, The Memory Insole Paired With Pillofoam Cushioning Adds Soft, Bouncy Comfort That Lasts Through After-School Fun And Weekend Getaways. Finished In A Bold Black Base With Mustard Accents, This Pair Is A Sure-Shot Go-To. Occasion: Everyday Insole: Memory Insole Upper Material: Mesh+Pvc+ Lycra+ Elastic Technology: Pillofoam Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 139,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_BLK-MSTD_01.webp?v=1789559300",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_BLK-MSTD_02.jpg?v=1789559301",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_BLK-MSTD_03.webp?v=1789559300",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_BLK-MSTD_04.webp?v=1789559300",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GUMP_22C-169_BLK-MSTD_05.webp?v=1789559300"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "22C-169-C-BLK-MSTD-2",
          "size": "2",
          "stock": 7
        },
        {
          "sku": "22C-169-C-BLK-MSTD-3",
          "size": "3",
          "stock": 12
        },
        {
          "sku": "22C-169-C-BLK-MSTD-4",
          "size": "4",
          "stock": 5
        },
        {
          "sku": "22C-169-C-BLK-MSTD-5",
          "size": "5",
          "stock": 7
        }
      ]
    },
    "sourceCategory": "Kids Slip on Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9719074586855",
    "waterResistance": "No",
    "shortDescription": "Ready To Slip In And Speed Off! Campus Gump Childs’ Walking Shoes Are Built For Non-Stop Movers. The Mesh And Pvc Combo Keeps The Upper Breathable Yet Sturdy, While The Elastic Ban",
    "sourceProductUrl": "https://campusshoes.com/products/gump-blk-mstd-child-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9388435767547",
    "mrp": 14999,
    "sku": "SU-31409803-7",
    "use": "Basketball",
    "code": "SUPERKICKS-9388435767547",
    "name": "HALI 1 BASKETBALL { FRESH MINT-GREEN MOON",
    "sole": "Not specified",
    "brand": "PUMA",
    "color": "Olive Green",
    "price": 11999,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#15803d",
        "name": "Olive Green",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_b409d2b0-d39f-43e4-bffc-3da1734bdecb.jpg?v=1786434590",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_31f24576-f2d5-4913-b4b0-5cce0e3491ae.jpg?v=1786434590",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_e1a73728-60ee-4a6f-a5c2-033c720908c8.jpg?v=1786434590",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_b8268304-73d9-4fd9-b08b-7a4bd5bfa7cf.jpg?v=1786434590",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_36b37d6e-301e-4d56-b72f-014e96ba5b1b.jpg?v=1786434590"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Basketball",
    "features": [
      "Footwear",
      "Franchise: HALI",
      "New Arrivals",
      "NO-COD",
      "Product Style: Lifestyle"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Puma",
      "Footwear",
      "Franchise: HALI",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Product Style: Lifestyle",
      "Season: FW26",
      "Sneakers",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The Hali 1 Low Basketball Shoes bring bounce and court-gripping traction to help quick cuts feel smooth and landings stay soft. A mesh overlay locks you in, and cushioning helps you keep pushing – right through the final buzzer. FEATURES & BENEFITS The upper of the shoes is made with at least 30% recycled materials",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 78,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_36b37d6e-301e-4d56-b72f-014e96ba5b1b.jpg?v=1786434590",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_e1a73728-60ee-4a6f-a5c2-033c720908c8.jpg?v=1786434590",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_31f24576-f2d5-4913-b4b0-5cce0e3491ae.jpg?v=1786434590",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_b409d2b0-d39f-43e4-bffc-3da1734bdecb.jpg?v=1786434590",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_b8268304-73d9-4fd9-b08b-7a4bd5bfa7cf.jpg?v=1786434590"
    ],
    "sizeInventory": {
      "Olive Green": [
        {
          "sku": "31409803-7",
          "size": "7",
          "stock": 8
        },
        {
          "sku": "31409803-8",
          "size": "8",
          "stock": 13
        },
        {
          "sku": "31409803-9",
          "size": "9",
          "stock": 7
        },
        {
          "sku": "31409803-10",
          "size": "10",
          "stock": 7
        },
        {
          "sku": "31409803-11",
          "size": "11",
          "stock": 11
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9388435767547",
    "waterResistance": "No",
    "shortDescription": "The Hali 1 Low Basketball Shoes bring bounce and court-gripping traction to help quick cuts feel smooth and landings stay soft. A mesh overlay locks you in, and cushioning helps yo",
    "sourceProductUrl": "https://www.superkicks.in/products/puma-hali-1-basketball-fresh-mint-green-moon",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9428556677371",
    "mrp": 8249,
    "sku": "SU-KI0075-7",
    "use": "Slippers",
    "code": "SUPERKICKS-9428556677371",
    "name": "PURECHILL { BETTER SCARLET/CLOUD WHITE/CORE BLACK",
    "sole": "Not specified",
    "brand": "ADIDAS",
    "color": "Core Black",
    "price": 6599,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_44aee6c6-9fb9-4db6-a3cb-9611f584409e.jpg?v=1790167026",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_44e34366-30d7-45bc-b7ae-8f8889f1c386.jpg?v=1790167026",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_07132268-fbe9-4871-82e5-02f39789c362.jpg?v=1790167026",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/7_b42542ad-e422-44fc-b62a-635347c25922.jpg?v=1790167026",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/23_5ca8b9ff-6834-4f16-871c-5b706a545ec5.jpg?v=1790167026"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.3,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Footwear",
      "Franchise: Purechill",
      "New Arrivals",
      "NO-COD",
      "ship@250"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Adidas",
      "Footwear",
      "Franchise: Purechill",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "ship@250",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The Purechill slides fuse comfort and style, bringing adidas energy to your look with a modern, standout attitude that’s built for function and everyday movement. Made using Climacool technology for breathable materials and an open construction that helps keep your feet dry and comfortable, while a high-cushioned EVA midsole delivers a soft responsive feel. A full-length rubber outsole provides grip and durability, letting these slides move with ease and presence, finished with the iconic 3-Stripes for unmistakable adidas style.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 61,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/23_5ca8b9ff-6834-4f16-871c-5b706a545ec5.jpg?v=1790167026",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_07132268-fbe9-4871-82e5-02f39789c362.jpg?v=1790167026",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_44e34366-30d7-45bc-b7ae-8f8889f1c386.jpg?v=1790167026",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_44aee6c6-9fb9-4db6-a3cb-9611f584409e.jpg?v=1790167026",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/7_b42542ad-e422-44fc-b62a-635347c25922.jpg?v=1790167026"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "KI0075-7",
          "size": "7",
          "stock": 10
        },
        {
          "sku": "KI0075-8",
          "size": "8",
          "stock": 12
        },
        {
          "sku": "KI0075-9",
          "size": "9",
          "stock": 15
        },
        {
          "sku": "KI0075-10",
          "size": "10",
          "stock": 8
        },
        {
          "sku": "KI0075-11",
          "size": "11",
          "stock": 6
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9428556677371",
    "waterResistance": "No",
    "shortDescription": "The Purechill slides fuse comfort and style, bringing adidas energy to your look with a modern, standout attitude that’s built for function and everyday movement. Made using Climac",
    "sourceProductUrl": "https://www.superkicks.in/products/adidas-purechill-better-scarlet-cloud-white-core-black",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15395488235771",
    "mrp": 14994,
    "sku": "SU-DO6701-100-6",
    "use": "Sneakers",
    "code": "SUPERKICKS-15395488235771",
    "name": "AIR FORCE 1 LOW '07 { WHITE/WHITE-WHITE",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Cloud White",
    "price": 11995,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_542ad2d6-01aa-4c64-9e38-e8f7a6d9e3be.jpg?v=1790682027",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_21a671c7-37c7-41ef-b257-44dda951b0fd.jpg?v=1790682027",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_97cf2ae3-dc21-4aef-a3b6-f08ec9abfe54.jpg?v=1790682027",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/7_1e784790-b3a0-499e-be68-de79a5d4920e.jpg?v=1790682027",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_30743b8f-3010-4427-837b-288245f5bad6.jpg?v=1790682027"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Retro tongue label with original Nike script and Swoosh logo",
      "Foam midsole",
      "Perforations on toe",
      "Extra set of laces"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Nike",
      "Footwear",
      "Franchise: AIR FORCE 1",
      "Gender - Men",
      "Gender - Women",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "The radiance lives on in the Nike Air Force 1 Low ’07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to make you shine. Water-repellent Cordura fabric makes these kicks your favorite on rainy days. Cordura fabric on the upper helps keep your feet dry. Padded, low-cut collar looks sleek and feels great. Suede accents on the upper add to the retro look. More Details Retro tongue label with original Nike script and Swoosh logo Foam midsole Perforations on toe Extra set of laces",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 136,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_30743b8f-3010-4427-837b-288245f5bad6.jpg?v=1790682027",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_97cf2ae3-dc21-4aef-a3b6-f08ec9abfe54.jpg?v=1790682027",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_21a671c7-37c7-41ef-b257-44dda951b0fd.jpg?v=1790682027",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_542ad2d6-01aa-4c64-9e38-e8f7a6d9e3be.jpg?v=1790682027",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/7_1e784790-b3a0-499e-be68-de79a5d4920e.jpg?v=1790682027"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "DO6701-100-6",
          "size": "6",
          "stock": 15
        },
        {
          "sku": "DO6701-100-7",
          "size": "7",
          "stock": 4
        },
        {
          "sku": "DO6701-100-8",
          "size": "8",
          "stock": 4
        },
        {
          "sku": "DO6701-100-9",
          "size": "9",
          "stock": 12
        },
        {
          "sku": "DO6701-100-10",
          "size": "10",
          "stock": 15
        },
        {
          "sku": "DO6701-100-11",
          "size": "11",
          "stock": 11
        },
        {
          "sku": "DO6701-100-12",
          "size": "12",
          "stock": 13
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15395488235771",
    "waterResistance": "No",
    "shortDescription": "The radiance lives on in the Nike Air Force 1 Low ’07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colors and the perfect amount of flash to m",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-air-force-1-low-07-white-white-white",
    "inventoryCountsAreExact": false
  },
  {
    "id": "redtape-8969108455614",
    "mrp": 11899,
    "sku": "RE-RTE5998A-6",
    "use": "Boots",
    "code": "REDTAPE-8969108455614",
    "name": "Chelsea Boots for Men in Brown",
    "sole": "Not specified",
    "brand": "RED TAPE",
    "color": "Cognac Tan",
    "price": 1903,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5998_4_8d78afb2-2303-44d8-b9ff-82710c10adf5.jpg?v=1789019454",
          "back": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5998_3_a878ca67-6464-44ed-9559-76175908d41e.jpg?v=1789019454",
          "side": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5998_2_db7867b3-a809-4f43-8aae-a9fda0c07652.jpg?v=1789019454",
          "sole": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5998_5_d41fab01-037a-4eeb-86d1-6a3fe81d9cae.jpg?v=1789019454",
          "front": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5998_1_b1c7c4f9-a457-4833-adfc-7ba48aa61327.jpg?v=1789019454"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Boots",
    "features": [
      "LEATHER Upper: Premium finish for a sleek and durable look.",
      "FABRIC Lining: Soft and breathable for enhanced comfort.",
      "TPR Sole: Ensures durability, flexibility, and reliable grip.",
      "Mid-Cut Design: Modern silhouette with a contemporary edge.",
      "Round Toe: Adds a polished and stylish touch.",
      "High Cushioning: Soft underfoot feel that reduces fatigue.\""
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Boots",
      "Footwear",
      "Men"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Step into rugged style with Red Tape Chelsea Boots for men in Brown, designed to deliver bold character and all-day comfort. The premium leather upper delivers a sleek and durable finish, well-suited for casual occasions. A soft FABRIC lining adds breathability and step-in comfort. The TPR sole ensures durability, flexibility, and reliable traction for confident steps. The high cushioning delivers superior cushioning and reduces fatigue during long wear. Designed in a Mid-Cut silhouette with a Round toe, these boots offer a contemporary edge with timeless appeal. Whether you are looking for Red Tape essentials or the best chelsea boots men can rely on, this pair is a versatile choice for casual styling. Features LEATHER Upper: Premium finish for a sleek and durable look. FABRIC Lining: Soft and breathable for enhanced comfort. TPR Sole: Ensures durability, flexibility, and reliable grip. Mid-Cut Design: Modern silhouette with a contemporary edge. Round Toe: Adds a polished and stylish touch. High Cushioning: Soft underfoot feel that reduces fatigue.\" Product Specification Material: Sole – TPR | Upper – LEATHER | Lining – FABRIC Design: Mid-Cut Chelsea Boot silhouette built for casual wear Heel: Flat heel delivers stable support and all-day comfort Fit: Slipon closure ensures a secure and adjustable fit Utility: Suitable for casual outings, daily wear, and smart styling",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "REDTAPE",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 132,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5998_1_b1c7c4f9-a457-4833-adfc-7ba48aa61327.jpg?v=1789019454",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5998_2_db7867b3-a809-4f43-8aae-a9fda0c07652.jpg?v=1789019454",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5998_3_a878ca67-6464-44ed-9559-76175908d41e.jpg?v=1789019454",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5998_4_8d78afb2-2303-44d8-b9ff-82710c10adf5.jpg?v=1789019454",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE5998_5_d41fab01-037a-4eeb-86d1-6a3fe81d9cae.jpg?v=1789019454"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "RTE5998A-6",
          "size": "6",
          "stock": 5
        },
        {
          "sku": "RTE5998A-7",
          "size": "7",
          "stock": 4
        },
        {
          "sku": "RTE5998A-8",
          "size": "8",
          "stock": 5
        },
        {
          "sku": "RTE5998A-9",
          "size": "9",
          "stock": 7
        },
        {
          "sku": "RTE5998A-10",
          "size": "10",
          "stock": 7
        }
      ]
    },
    "sourceCategory": "Boots",
    "countryOfOrigin": "India",
    "discountPercent": 84,
    "sourceProductId": "8969108455614",
    "waterResistance": "Water Repellent",
    "shortDescription": "Step into rugged style with Red Tape Chelsea Boots for men in Brown, designed to deliver bold character and all-day comfort. The premium leather upper delivers a sleek and durable ",
    "sourceProductUrl": "https://redtape.com/products/red-tape-chelsea-boots-for-men-in-brown-mid-cut-casualboots-rte5998a",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9565156802791",
    "mrp": 3499,
    "sku": "CA-ELAN-19-G-OLIVE-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9565156802791",
    "name": "ELAN-19 Olive",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Olive",
    "price": 1699,
    "sport": "Lifestyle",
    "upper": "PU",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "Olive",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-19OLIVE_04.webp?v=1780306700",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-19_OLIVE3X4.webp?v=1785929407",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-19OLIVE_02.jpg?v=1780306700",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-19-OLIVE-Infographics-Adapt.webp?v=1780904590",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Elan-19_olive.jpg?v=1781863923"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "loafers",
      "men"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "loafers",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Confidence that doesn't announce itself — it simply shows in the ELAN-19 Men's Moccasins. True moccasin construction keeps the silhouette sleek and the fit effortless, while the smooth synthetic leather upper brings a quiet sophistication that dresses up without trying too hard. The rubber sole keeps every step grounded and comfortable, while the olive colourway adds depth and earthy richness to your outfit, making everything around it feel more considered. Wear it with tailored trousers or washed denim — it holds its own either way. Understated is the new statement. Occasion: Everyday Insole: Pu Foam Die Cut Upper Material: PU Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 73,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Elan-19_olive.jpg?v=1781863923",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-19OLIVE_02.jpg?v=1780306700",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/Listing-Vegan-Leather-Style-ELAN-19_OLIVE3X4.webp?v=1785929407",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-19OLIVE_04.webp?v=1780306700",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-19-OLIVE-Infographics-Adapt.webp?v=1780904590"
    ],
    "sizeInventory": {
      "Olive": [
        {
          "sku": "ELAN-19-G-OLIVE-6",
          "size": "6",
          "stock": 13
        },
        {
          "sku": "ELAN-19-G-OLIVE-7",
          "size": "7",
          "stock": 8
        },
        {
          "sku": "ELAN-19-G-OLIVE-8",
          "size": "8",
          "stock": 9
        },
        {
          "sku": "ELAN-19-G-OLIVE-9",
          "size": "9",
          "stock": 13
        },
        {
          "sku": "ELAN-19-G-OLIVE-10",
          "size": "10",
          "stock": 5
        },
        {
          "sku": "ELAN-19-G-OLIVE-11",
          "size": "11",
          "stock": 8
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 51,
    "sourceProductId": "9565156802791",
    "waterResistance": "No",
    "shortDescription": "Confidence that doesn't announce itself — it simply shows in the ELAN-19 Men's Moccasins. True moccasin construction keeps the silhouette sleek and the fit effortless, while the sm",
    "sourceProductUrl": "https://campusshoes.com/products/elan-19-olive-mens-loafers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719075045607",
    "mrp": 1686,
    "sku": "CA-22C-175-C-CRM-CML-GRN-2",
    "use": "Running",
    "code": "CAMPUS-9719075045607",
    "name": "MOLLY Cream",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Travertine Cream",
    "price": 1349,
    "sport": "Running",
    "upper": "Sublimation Mesh+Pvc",
    "width": "Medium",
    "colors": [
      {
        "hex": "#e4ddcf",
        "name": "Travertine Cream",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MOLLY_22C-175_CRM-CML-GRN_04.webp?v=1789558467",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MOLLY_22C-175_CRM-CML-GRN_03.webp?v=1789558467",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MOLLY_22C-175_CRM-CML-GRN_02.jpg?v=1789558467",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MOLLY_22C-175_CRM-CML-GRN_05.webp?v=1789558467",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MOLLY_22C-175_CRM-CML-GRN_01.webp?v=1789558467"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes",
      "payday",
      "sale",
      "shshoes",
      "wyv"
    ],
    "collections": [
      "Running Collection",
      "Sale"
    ],
    "description": "Built For Little Explorers Who Love To Move, The Campus Molly Kids’ Running Shoes Bring Together Fun Colors And Lightweight Comfort. The Mesh And Pvc Upper Keeps Their Feet Fresh And Protected, While The Tpu Sole Ensures Easy Movement In Every Step. Inside, The Soft Memory Insole Cushions Growing Feet For All-Day Comfort. With Support-Tech Providing Added Stability At Heel, These Kicks Are Ready For Nonstop Energy! Occasion: Everyday Insole: Memory Insole Upper Material: Sublimation Mesh+Pvc Technology: Support-Tech Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 113,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MOLLY_22C-175_CRM-CML-GRN_01.webp?v=1789558467",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MOLLY_22C-175_CRM-CML-GRN_02.jpg?v=1789558467",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MOLLY_22C-175_CRM-CML-GRN_03.webp?v=1789558467",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MOLLY_22C-175_CRM-CML-GRN_04.webp?v=1789558467",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/MOLLY_22C-175_CRM-CML-GRN_05.webp?v=1789558467"
    ],
    "sizeInventory": {
      "Travertine Cream": [
        {
          "sku": "22C-175-C-CRM-CML-GRN-2",
          "size": "2",
          "stock": 4
        },
        {
          "sku": "22C-175-C-CRM-CML-GRN-3",
          "size": "3",
          "stock": 0
        },
        {
          "sku": "22C-175-C-CRM-CML-GRN-4",
          "size": "4",
          "stock": 13
        },
        {
          "sku": "22C-175-C-CRM-CML-GRN-5",
          "size": "5",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Kids Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9719075045607",
    "waterResistance": "No",
    "shortDescription": "Built For Little Explorers Who Love To Move, The Campus Molly Kids’ Running Shoes Bring Together Fun Colors And Lightweight Comfort. The Mesh And Pvc Upper Keeps Their Feet Fresh A",
    "sourceProductUrl": "https://campusshoes.com/products/molly-crm-cml-grn-child-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9692649816295",
    "mrp": 999,
    "sku": "CA-SS26-OPG-009-G-OLIVE-6",
    "use": "Sandals",
    "code": "CAMPUS-9692649816295",
    "name": "SS26-OPG-009 Olive",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Olive",
    "price": 799,
    "sport": "Lifestyle",
    "upper": "Pvc",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "Olive",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-009_SS26-OPG-009_OLIVE_04.webp?v=1788418276",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-009_SS26-OPG-009_OLIVE_03.webp?v=1788418276",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-009_SS26-OPG-009_OLIVE_02.jpg?v=1788418276",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-009_SS26-OPG-009_OLIVE_05.webp?v=1788418275",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-009_SS26-OPG-009_OLIVE_01.webp?v=1788418275"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "bssfm",
      "c&s",
      "camp",
      "cs",
      "emp0"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "c&s",
      "camp",
      "cs",
      "emp0",
      "fs",
      "men",
      "men sandal casual",
      "men sandals & floaters",
      "men sandals & slippers",
      "mss",
      "nys",
      "payday",
      "s&s",
      "sss",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Earthy Tones, Easy Comfort, And A Style That Feels Right At Home Outdoors. The Campus Ss26-Opg-009 Men’S Sandals Bring Olive And Tan Together For A Grounded, Versatile Look. The All-Pvc Construction Keeps The Pair Practical And Easy To Wear, While The Buckle Closure Lets You Adjust The Fit To Your Liking. Simple, Sturdy, And Effortlessly Laid-Back, This Is The Kind Of Pair That Works With Everything From Relaxed Denims To Easy Summer Fits. Occasion: Everyday Upper Material: Pvc Care Instructions: Wipe with a damp cloth and mild soapy water, then pat dry and air dry naturally. Do not soak, rinse under running water, or expose to direct heat and harsh chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 100,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-009_SS26-OPG-009_OLIVE_01.webp?v=1788418275",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-009_SS26-OPG-009_OLIVE_02.jpg?v=1788418276",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-009_SS26-OPG-009_OLIVE_03.webp?v=1788418276",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-009_SS26-OPG-009_OLIVE_04.webp?v=1788418276",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SS26-OPG-009_SS26-OPG-009_OLIVE_05.webp?v=1788418275"
    ],
    "sizeInventory": {
      "Olive": [
        {
          "sku": "SS26-OPG-009-G-OLIVE-6",
          "size": "6",
          "stock": 5
        },
        {
          "sku": "SS26-OPG-009-G-OLIVE-7",
          "size": "7",
          "stock": 0
        },
        {
          "sku": "SS26-OPG-009-G-OLIVE-8",
          "size": "8",
          "stock": 0
        },
        {
          "sku": "SS26-OPG-009-G-OLIVE-9",
          "size": "9",
          "stock": 10
        },
        {
          "sku": "SS26-OPG-009-G-OLIVE-10",
          "size": "10",
          "stock": 4
        },
        {
          "sku": "SS26-OPG-009-G-OLIVE-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9692649816295",
    "waterResistance": "No",
    "shortDescription": "Earthy Tones, Easy Comfort, And A Style That Feels Right At Home Outdoors. The Campus Ss26-Opg-009 Men’S Sandals Bring Olive And Tan Together For A Grounded, Versatile Look. The Al",
    "sourceProductUrl": "https://campusshoes.com/products/ss26-opg-009-olive-mens-sandals",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719074324711",
    "mrp": 1049,
    "sku": "CA-22L-112-L-DGRN-PISTA-5",
    "use": "Walking",
    "code": "CAMPUS-9719074324711",
    "name": "CROWN NEW Green",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Olive Green",
    "price": 1004,
    "sport": "Walking",
    "upper": "Knitting",
    "width": "Medium",
    "colors": [
      {
        "hex": "#15803d",
        "name": "Olive Green",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CROWNNEW_22L-112_D.GRN-PISTA_4.webp?v=1789559598",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CROWNNEW_22L-112_D.GRN-PISTA_3.webp?v=1789559597",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CROWNNEW_22L-112_D.GRN-PISTA_1.webp?v=1789559597",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CROWNNEW_22L-112_D.GRN-PISTA_5.webp?v=1789559598",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CROWNNEW_22L-112_D.GRN-PISTA_2.jpg?v=1789559598"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "emp0",
      "sale",
      "shshoes",
      "women"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "sale",
      "shshoes",
      "women",
      "women shoes",
      "women walking shoes",
      "wss",
      "wyv"
    ],
    "collections": [
      "Trending Now"
    ],
    "description": "This Campus Crown New Collection Will Upgrade Your Style Definition With Pillofoam Technology Which Helps In Setting The Pressure In Order To Have A Cell Structure That'S Consistent, Giving It A Feel Of Softness And Cushioning. It Has 50% More Cushioning Than A Usual Sole For Your Easy Walk. Occasion: Everyday Insole: Memory Tech Upper Material: Knitting Technology: Springy Fit/Pillofoam Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 29,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CROWNNEW_22L-112_D.GRN-PISTA_2.jpg?v=1789559598",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CROWNNEW_22L-112_D.GRN-PISTA_1.webp?v=1789559597",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CROWNNEW_22L-112_D.GRN-PISTA_3.webp?v=1789559597",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CROWNNEW_22L-112_D.GRN-PISTA_4.webp?v=1789559598",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CROWNNEW_22L-112_D.GRN-PISTA_5.webp?v=1789559598"
    ],
    "sizeInventory": {
      "Olive Green": [
        {
          "sku": "22L-112-L-DGRN-PISTA-4",
          "size": "4",
          "stock": 0
        },
        {
          "sku": "22L-112-L-DGRN-PISTA-5",
          "size": "5",
          "stock": 9
        },
        {
          "sku": "22L-112-L-DGRN-PISTA-6",
          "size": "6",
          "stock": 15
        },
        {
          "sku": "22L-112-L-DGRN-PISTA-7",
          "size": "7",
          "stock": 10
        },
        {
          "sku": "22L-112-L-DGRN-PISTA-8",
          "size": "8",
          "stock": 12
        }
      ]
    },
    "sourceCategory": "Women Walking Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 4,
    "sourceProductId": "9719074324711",
    "waterResistance": "No",
    "shortDescription": "This Campus Crown New Collection Will Upgrade Your Style Definition With Pillofoam Technology Which Helps In Setting The Pressure In Order To Have A Cell Structure That'S Consisten",
    "sourceProductUrl": "https://campusshoes.com/products/crown-new-d-grn-pista-womens-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9399693672699",
    "mrp": 14994,
    "sku": "SU-II0402-600-4",
    "use": "Basketball",
    "code": "SUPERKICKS-9399693672699",
    "name": "SABRINA 4 \"THE SWITCH\" { DESERT PINK/LEMON VENOM-PINK RISE",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Blush Pink",
    "price": 11995,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#ec4899",
        "name": "Blush Pink",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_aea25565-93fd-494c-bd9a-ed9b12a5a320.jpg?v=1787578061",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_71c78a8c-2a45-4813-85e8-890962a75eac.jpg?v=1787578062",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_48287768-32ae-4563-a1f4-9e0daca0209e.jpg?v=1787578062",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_42cf481a-53eb-46ed-942d-cf9c8810e538.jpg?v=1787578061",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_977a1094-1526-4f36-a333-8af83d08d1bd.jpg?v=1787578061"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Basketball",
    "features": [
      "Basketball",
      "Footwear",
      "Franchise: NIKE others",
      "JORDAN-NIKE",
      "New Arrivals"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Basketball",
      "Brand - Nike",
      "Footwear",
      "Franchise: NIKE others",
      "Gender - Women",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Sabrina’s pace is unpredictable—shifting gears without warning and freezing defenders in their tracks. The Sabrina 4 is built to match her game, updated with the track-and-field-inspired Nike Flyplate for those sudden bursts of speed. “It feels like you have that pop in your step,” Sabrina says. With Cushlon 3.0 foam and a secure midfoot lockdown system, it helps you accelerate and stop on a dime when your best is needed in crunch time. Toe box is compression molded for comfort and containment. Forefoot rubber wrap adds extra durability. Reinforced heel underlay gives stability and helps you stay locked in. Rounded collar shape provides extra mobility and comfort around the ankle. Perforated tongue offers enhanced breathability. Inspired by her alma mater’s track heritage, we brought our Nike Flyplate from running shoes to the hardwood. “It helps you stay on your toes and pivot quickly,” Sabrina said. We created the TPU plate specifically for hoops, placing it under the forefoot Air Zoom unit for a springier feel. It also extends through the arch and up the sidewall for extra stability and support. Full-length Cushlon 3.0 foam gives optimal cushioning and responsiveness for those who love running rim to rim. A snappy Air Zoom unit in the forefoot provides that extra oomph when it’s time to hustle. The internal midfoot band and cables create a glove-like fit, adding the support and stability you need to change direction and create separation. “I love the lockdown feel; you feel very secure while also having a lot of comfort and stability,” says Sabrina. The elite traction pattern comes with concentric circles made of the letter ’S’ for quick cuts, plants and pivots. “This shoe is built for everyone, everywhere,” Sabrina says. “As long as you’re a hooper, this shoe is for you.” Sabrina learned early to switch doubt into fuel. After not getting picked for pickup ball at the park in her favorite cartoon bird tee and pink shorts, she made a promise to never let it happen again. This colorway reflects the competitive fire that still drives her game today.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 121,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_977a1094-1526-4f36-a333-8af83d08d1bd.jpg?v=1787578061",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_48287768-32ae-4563-a1f4-9e0daca0209e.jpg?v=1787578062",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_71c78a8c-2a45-4813-85e8-890962a75eac.jpg?v=1787578062",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_aea25565-93fd-494c-bd9a-ed9b12a5a320.jpg?v=1787578061",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_42cf481a-53eb-46ed-942d-cf9c8810e538.jpg?v=1787578061"
    ],
    "sizeInventory": {
      "Blush Pink": [
        {
          "sku": "II0402-600-3",
          "size": "3",
          "stock": 0
        },
        {
          "sku": "II0402-600-4",
          "size": "4",
          "stock": 10
        },
        {
          "sku": "II0402-600-5",
          "size": "5",
          "stock": 13
        },
        {
          "sku": "II0402-600-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "II0402-600-7",
          "size": "7",
          "stock": 0
        },
        {
          "sku": "II0402-600-8",
          "size": "8",
          "stock": 0
        },
        {
          "sku": "II0402-600-9",
          "size": "9",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Basketball Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9399693672699",
    "waterResistance": "No",
    "shortDescription": "Sabrina’s pace is unpredictable—shifting gears without warning and freezing defenders in their tracks. The Sabrina 4 is built to match her game, updated with the track-and-field-in",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-sabrina-4-the-switch-desert-pink-lemon-venom-pink-rise",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15395008643323",
    "mrp": 5869,
    "sku": "SU-HV4484-004-4.5",
    "use": "Slippers",
    "code": "SUPERKICKS-15395008643323",
    "name": "REACT X REJUVEN8 { PHANTOM/RUST PINK-RUST PINK",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Blush Pink",
    "price": 4695,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#ec4899",
        "name": "Blush Pink",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_35c52fa1-f1c9-47b6-a4be-d247606ce2d9.jpg?v=1790591862",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_e19bf19c-b52f-4dcc-b58f-90672bd809e3.jpg?v=1790591862",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_5b62509c-bb76-46a7-a3cc-c0d558de1f63.jpg?v=1790591862",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_9ec5f102-1691-4dd2-b236-5dc76a95bd21.jpg?v=1790591862",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_0c00b8db-596f-460e-93fe-1f1ad3c03c70.jpg?v=1790591862"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Footwear",
      "Franchise : REJUVEN8",
      "New Arrivals",
      "NO-COD",
      "ship@250"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Nike",
      "Footwear",
      "Franchise : REJUVEN8",
      "Gender - Women",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "ship@250",
      "Slides & Sandals",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Give your feet a rest. Made with soft and responsive ReactX foam, the Rejuven8 uses some of our best tech to create recovery slides you’ll look forward to wearing. ReactX upper and midsole surround your feet in soft, responsive comfort. Sticky rubber outsole adds grip even on slick surfaces. Extra room at the forefoot helps accommodate various foot widths.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 105,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_0c00b8db-596f-460e-93fe-1f1ad3c03c70.jpg?v=1790591862",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_5b62509c-bb76-46a7-a3cc-c0d558de1f63.jpg?v=1790591862",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_e19bf19c-b52f-4dcc-b58f-90672bd809e3.jpg?v=1790591862",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_35c52fa1-f1c9-47b6-a4be-d247606ce2d9.jpg?v=1790591862",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_9ec5f102-1691-4dd2-b236-5dc76a95bd21.jpg?v=1790591862"
    ],
    "sizeInventory": {
      "Blush Pink": [
        {
          "sku": "HV4484-004-4.5",
          "size": "4.5",
          "stock": 14
        },
        {
          "sku": "HV4484-004-5.5",
          "size": "5.5",
          "stock": 15
        },
        {
          "sku": "HV4484-004-6.5",
          "size": "6.5",
          "stock": 10
        },
        {
          "sku": "HV4484-004-7.5",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "HV4484-004-8.5",
          "size": "8.5",
          "stock": 12
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15395008643323",
    "waterResistance": "No",
    "shortDescription": "Give your feet a rest. Made with soft and responsive ReactX foam, the Rejuven8 uses some of our best tech to create recovery slides you’ll look forward to wearing. ReactX upper and",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-react-x-rejuven8-phantom-rust-pink-rust-pink",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15395483746555",
    "mrp": 21244,
    "sku": "SU-IV2839-002-4",
    "use": "Sneakers",
    "code": "SUPERKICKS-15395483746555",
    "name": "AIR MAX 95 BIG BUBBLE SE { ENIGMA STONE/METALLIC SILVER-WHITE",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Cloud White",
    "price": 16995,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_aacd4835-a626-441f-8601-12c87057ae6f.jpg?v=1790681838",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_337d9424-b530-459a-86e1-b08fe5835442.jpg?v=1790681837",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_11b3acba-5207-4198-9d71-73e78e8be6c4.jpg?v=1790681837",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_23a35177-8968-46d3-8e13-1401a4cc356b.jpg?v=1790681837",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_2c6de227-79af-4da6-b2da-46119296cf81.jpg?v=1790681837"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Metallic accents",
      "Foam midsole",
      "Rubber outsole"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Nike",
      "Footwear",
      "Franchise: AIR MAX 95",
      "Gender - Women",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "Taking inspiration from '90s track aesthetics, the Air Max 95 Big Bubble mixes unbelievable comfort with fast-paced style. Smooth leather and tonal textures create dimension while pumped-up Max Air unit adds performance-like cushioning. Upper mixes genuine leather and textile for a layered look built to last. Visible Max Air unit provides lightweight cushioning. Waffle outsole gives you durable traction and heritage style. More Details Metallic accents Foam midsole Rubber outsole",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 68,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_2c6de227-79af-4da6-b2da-46119296cf81.jpg?v=1790681837",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_11b3acba-5207-4198-9d71-73e78e8be6c4.jpg?v=1790681837",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_337d9424-b530-459a-86e1-b08fe5835442.jpg?v=1790681837",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_aacd4835-a626-441f-8601-12c87057ae6f.jpg?v=1790681838",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_23a35177-8968-46d3-8e13-1401a4cc356b.jpg?v=1790681837"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "IV2839-002-3",
          "size": "3",
          "stock": 0
        },
        {
          "sku": "IV2839-002-4",
          "size": "4",
          "stock": 8
        },
        {
          "sku": "IV2839-002-5",
          "size": "5",
          "stock": 15
        },
        {
          "sku": "IV2839-002-6",
          "size": "6",
          "stock": 6
        },
        {
          "sku": "IV2839-002-7",
          "size": "7",
          "stock": 0
        },
        {
          "sku": "IV2839-002-8",
          "size": "8",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15395483746555",
    "waterResistance": "No",
    "shortDescription": "Taking inspiration from '90s track aesthetics, the Air Max 95 Big Bubble mixes unbelievable comfort with fast-paced style. Smooth leather and tonal textures create dimension while ",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-air-max-95-big-bubble-se-enigma-stone-metallic-silver-white",
    "inventoryCountsAreExact": false
  },
  {
    "id": "redtape-9002422665406",
    "mrp": 10299,
    "sku": "RE-RTE5771D-7",
    "use": "Boots",
    "code": "REDTAPE-9002422665406",
    "name": "Chelsea Boots for Men in Black",
    "sole": "Not specified",
    "brand": "RED TAPE",
    "color": "Core Black",
    "price": 2678,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/4_0f9c1749-1fb9-4bf0-a4b8-d945c9d848ed.jpg?v=1789706751",
          "back": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/3_40a915c8-0670-42f0-b57b-c0153c5014cb.jpg?v=1789706751",
          "side": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/2_1ecf9402-d017-4e8c-98ed-82d71b49b76d.jpg?v=1789706751",
          "sole": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/5_4c1b536a-d395-416b-b405-56985ad4f0dd.jpg?v=1789706751",
          "front": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/1_3bbebbc3-671c-4d22-8d5d-a25878f28d14.jpg?v=1789706751"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Boots",
    "features": [
      "TEXTILE Lining: The lining promotes a softer, more breathable in-shoe feel during extended everyday wear.",
      "TPR Sole: The sole delivers dependable traction, flexible durability, an",
      "Material: Sole – TPR | Upper – Leather | Lining – TEXTILE",
      "Heel & Toe: Flat heel offers a balanced base, while the round toe supports comfortable natural placement"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Boots",
      "Footwear",
      "Men"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Step into confident comfort with Redtape chelsea boots for men in black, thoughtfully designed to combine relevant styling, dependable support, and versatile everyday performance. The Leather upper delivers a refined appearance, structured support, and dependable durability for polished formal wear. A TEXTILE lining supports a softer, more breathable in-shoe environment during longer periods of use. Underfoot, the TPR sole delivers dependable traction, flexible durability, and stable support for polished everyday movement. The round toe supports natural placement, while the flat heel creates a stable and balanced foundation. Chelsea Boots Fit: The mid-cut profile supports ankle coverage, comfortable placement, and confident everyday wear. Black styling gives the silhouette a contemporary, distinctive, and easy-to-coordinate finish. Pair this footwear with denim, cargos, chinos, layered casualwear, or rugged winter outfits for an effortless look suited to travel, weekend outings, casual occasions, outdoor-inspired looks, and smart everyday styling. Features. Leather Upper: The upper delivers a refined appearance, structured support, and dependable durability for polished formal wear. TEXTILE Lining: The lining promotes a softer, more breathable in-shoe feel during extended everyday wear. TPR Sole: The sole delivers dependable traction, flexible durability, an Product Specification Material: Sole – TPR | Upper – Leather | Lining – TEXTILE Design: mid-cut boot silhouette created for supportive coverage, rugged styling, and confident everyday movement; Black colourway adds a contemporary and relevant finish Heel & Toe: Flat heel offers a balanced base, while the round toe supports comfortable natural placement Fit: Supportive ankle coverage with comfortable everyday movement; designed for comfortable placement and natural movement Utility: Suitable for travel, weekend outings, casual occasions, outdoor-inspired looks, and smart everyday styling; pairs easily with denim, cargos, chinos, layered casualwear, or rugged winter outfits",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "REDTAPE",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 38,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/1_3bbebbc3-671c-4d22-8d5d-a25878f28d14.jpg?v=1789706751",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/2_1ecf9402-d017-4e8c-98ed-82d71b49b76d.jpg?v=1789706751",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/3_40a915c8-0670-42f0-b57b-c0153c5014cb.jpg?v=1789706751",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/4_0f9c1749-1fb9-4bf0-a4b8-d945c9d848ed.jpg?v=1789706751",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/5_4c1b536a-d395-416b-b405-56985ad4f0dd.jpg?v=1789706751"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "RTE5771D-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "RTE5771D-7",
          "size": "7",
          "stock": 4
        },
        {
          "sku": "RTE5771D-8",
          "size": "8",
          "stock": 12
        },
        {
          "sku": "RTE5771D-9",
          "size": "9",
          "stock": 10
        },
        {
          "sku": "RTE5771D-10",
          "size": "10",
          "stock": 15
        }
      ]
    },
    "sourceCategory": "Boots",
    "countryOfOrigin": "India",
    "discountPercent": 74,
    "sourceProductId": "9002422665406",
    "waterResistance": "Water Repellent",
    "shortDescription": "Step into confident comfort with Redtape chelsea boots for men in black, thoughtfully designed to combine relevant styling, dependable support, and versatile everyday performance. ",
    "sourceProductUrl": "https://redtape.com/products/redtape-chelsea-boots-formen-in-black-chelsea-boots-rte5771d",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9565156901095",
    "mrp": 3999,
    "sku": "CA-ELAN-17-G-TAN-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9565156901095",
    "name": "ELAN-17 Tan",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cognac Tan",
    "price": 2149,
    "sport": "Lifestyle",
    "upper": "Knitted+Pu+Lycra",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-17TAN_04.webp?v=1780306550",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-17TAN_03.webp?v=1780306549",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-17TAN_02.jpg?v=1780306549",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-17TAN_05.webp?v=1780306549",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-17TAN_01.webp?v=1780306549"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Blending contemporary comfort with timeless styling, the Campus ELAN-17 Men's Derby Shoes are designed for modern men who appreciate versatility in every detail. The knitted upper, complemented by refined PU accents, creates a balanced look that feels polished without appearing overly formal. Soft lycra lining enhances comfort and flexibility, while the lightweight EVA sole keeps every step smooth and effortless throughout the day. Thoughtfully crafted for changing schedules and varied occasions, ELAN-17 offers a fresh take on semi-formal footwear. The tan colourway brings warmth and understated sophistication to the design, making it an easy companion for smart-casual dressing and refined everyday looks. Occasion: Everyday Insole: Pu Foam Molded Upper Material: Knitted+Pu+Lycra Care Instructions: Gently scrub with a soft cloth or brush using mild soap and cold water, then air dry in the shade. Avoid bleach and harsh cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 90,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-17TAN_01.webp?v=1780306549",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-17TAN_02.jpg?v=1780306549",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-17TAN_03.webp?v=1780306549",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-17TAN_04.webp?v=1780306550",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-17TAN_05.webp?v=1780306549"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "ELAN-17-G-TAN-6",
          "size": "6",
          "stock": 5
        },
        {
          "sku": "ELAN-17-G-TAN-7",
          "size": "7",
          "stock": 7
        },
        {
          "sku": "ELAN-17-G-TAN-8",
          "size": "8",
          "stock": 15
        },
        {
          "sku": "ELAN-17-G-TAN-9",
          "size": "9",
          "stock": 6
        },
        {
          "sku": "ELAN-17-G-TAN-10",
          "size": "10",
          "stock": 13
        },
        {
          "sku": "ELAN-17-G-TAN-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 46,
    "sourceProductId": "9565156901095",
    "waterResistance": "No",
    "shortDescription": "Blending contemporary comfort with timeless styling, the Campus ELAN-17 Men's Derby Shoes are designed for modern men who appreciate versatility in every detail. The knitted upper,",
    "sourceProductUrl": "https://campusshoes.com/products/elan-17-tan-mens-formal-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-7536621617383",
    "mrp": 2061,
    "sku": "CA-22G-210-G-BLU-6",
    "use": "Casual Shoes",
    "code": "CAMPUS-7536621617383",
    "name": "IMAGINE Blue",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Royal Blue",
    "price": 1649,
    "sport": "Lifestyle",
    "upper": "Knitted",
    "width": "Medium",
    "colors": [
      {
        "hex": "#2563eb",
        "name": "Royal Blue",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/IMAGINE_22G-110_BLU_4.jpg?v=1755513143",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/IMAGINE_22G-110_BLU_3.jpg?v=1755513143",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/IMAGINE_22G-110_BLU_1.jpg?v=1755513143",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/IMAGINE_22G-110_BLU_5.jpg?v=1755513143",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/IMAGINE_22G-110_BLU_2.jpg?v=1755513142"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Casual Shoes",
    "features": [
      "aw23",
      "awm23",
      "blcs",
      "bssfm",
      "camp"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "aw23",
      "awm23",
      "blcs",
      "bssfm",
      "camp",
      "cbs",
      "cs",
      "ds",
      "dwls",
      "emp0",
      "eoss",
      "m&w running shoes",
      "men",
      "men shoes",
      "men sports shoes",
      "men walking shoes",
      "nys",
      "payday",
      "sale",
      "ss599",
      "ss699",
      "ss899",
      "stf999",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Look smart while you are wearing this pair of shoes from Campus. The EVA sole provides the required support and stability to your feet, making it an ideal choice to invest in. The sturdy premium quality knitted upper keeps your feet comfortable and allows you to indulge in your workouts for long periods. Occasion: Everyday Insole: Pu Foam Care Instructions: Wash in Lukewarm Water.Do Not Bleach Upper Material: Knitted Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi, 110041 Country of Origin: India",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 53,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/IMAGINE_22G-110_BLU_2.jpg?v=1755513142",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/IMAGINE_22G-110_BLU_1.jpg?v=1755513143",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/IMAGINE_22G-110_BLU_3.jpg?v=1755513143",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/IMAGINE_22G-110_BLU_4.jpg?v=1755513143",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/products/IMAGINE_22G-110_BLU_5.jpg?v=1755513143"
    ],
    "sizeInventory": {
      "Royal Blue": [
        {
          "sku": "22G-210-G-BLU-6",
          "size": "6",
          "stock": 13
        },
        {
          "sku": "22G-210-G-BLU-7",
          "size": "7",
          "stock": 0
        },
        {
          "sku": "22G-210-G-BLU-8",
          "size": "8",
          "stock": 9
        },
        {
          "sku": "22G-210-G-BLU-9",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "22G-210-G-BLU-10",
          "size": "10",
          "stock": 0
        },
        {
          "sku": "22G-210-G-BLU-11",
          "size": "11",
          "stock": 0
        },
        {
          "sku": "22G-210-G-BLU-12",
          "size": "12",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Sports Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "7536621617383",
    "waterResistance": "No",
    "shortDescription": "Look smart while you are wearing this pair of shoes from Campus. The EVA sole provides the required support and stability to your feet, making it an ideal choice to invest in. The ",
    "sourceProductUrl": "https://campusshoes.com/products/imagine-blu-mens-casual-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719074291943",
    "mrp": 3249,
    "sku": "CA-22G-1306-G-WHT-FGRN-6",
    "use": "Running",
    "code": "CAMPUS-9719074291943",
    "name": "CRASH White",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cloud White",
    "price": 2599,
    "sport": "Running",
    "upper": "Engineered Vamp+Raise Printing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CRASH_22G-1306_WHT_F.GRN_04.webp?v=1789559676",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CRASH_22G-1306_WHT_F.GRN_03.webp?v=1789559676",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CRASH_22G-1306_WHT_F.GRN_02.jpg?v=1789559676",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CRASH_22G-1306_WHT_F.GRN_05.webp?v=1789559676",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CRASH_22G-1306_WHT_F.GRN_01.webp?v=1789559676"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "emp0",
      "m&w running shoes",
      "men",
      "men running shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "m&w running shoes",
      "men",
      "men running shoes",
      "men shoes",
      "mss",
      "payday",
      "sale",
      "wyv"
    ],
    "collections": [
      "Running Collection",
      "Sale"
    ],
    "description": "Crisp, Cool, And Ready To Take On Anything—The Campus Crash Men'S Running Shoes Fuse Style With Comfort Like Never Before. The Engineered Vamp Upper Keeps Airflow At Its Best, While The Yoga Max Insole Ensures Every Step Is Cushioned. Designed With An Eva, Tpr & Tpu Sole For Durability, These Sports Shoes Offer The Confidence To Push Limits. Whether You'Re Hitting The Gym, Cruising Through Your Day, Or Just Flexin', This White-And-Green Combo Is Pure Perfection! Occasion: Everyday Insole: Yoga Max Upper Material: Engineered Vamp+Raise Printing Technology: Anti Slip Sole Design/Support-Tech Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 102,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CRASH_22G-1306_WHT_F.GRN_01.webp?v=1789559676",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CRASH_22G-1306_WHT_F.GRN_02.jpg?v=1789559676",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CRASH_22G-1306_WHT_F.GRN_03.webp?v=1789559676",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CRASH_22G-1306_WHT_F.GRN_04.webp?v=1789559676",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CRASH_22G-1306_WHT_F.GRN_05.webp?v=1789559676"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "22G-1306-G-WHT-FGRN-6",
          "size": "6",
          "stock": 8
        },
        {
          "sku": "22G-1306-G-WHT-FGRN-7",
          "size": "7",
          "stock": 7
        },
        {
          "sku": "22G-1306-G-WHT-FGRN-8",
          "size": "8",
          "stock": 8
        },
        {
          "sku": "22G-1306-G-WHT-FGRN-9",
          "size": "9",
          "stock": 8
        },
        {
          "sku": "22G-1306-G-WHT-FGRN-10",
          "size": "10",
          "stock": 13
        }
      ]
    },
    "sourceCategory": "Men Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9719074291943",
    "waterResistance": "No",
    "shortDescription": "Crisp, Cool, And Ready To Take On Anything—The Campus Crash Men'S Running Shoes Fuse Style With Comfort Like Never Before. The Engineered Vamp Upper Keeps Airflow At Its Best, Whil",
    "sourceProductUrl": "https://campusshoes.com/products/crash-wht-f-grn-mens-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719074488551",
    "mrp": 1499,
    "sku": "CA-GC-22169-G-NAVY-LGRY-6",
    "use": "Sandals",
    "code": "CAMPUS-9719074488551",
    "name": "GC-22169 Navy",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Deep Navy",
    "price": 804,
    "sport": "Lifestyle",
    "upper": "Mesh+Pvc+Silicone Buckle+Lycra",
    "width": "Medium",
    "colors": [
      {
        "hex": "#1f2937",
        "name": "Deep Navy",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_NAVY_L.GRY_04.webp?v=1789559363",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_NAVY_L.GRY_03.webp?v=1789559363",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_NAVY_L.GRY_02.jpg?v=1789559363",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_NAVY_L.GRY_05.webp?v=1789559363",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_NAVY_L.GRY_01.webp?v=1789559363"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.3,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "cs",
      "emp0",
      "fs",
      "men",
      "men sandal casual"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "fs",
      "men",
      "men sandal casual",
      "men sandals & floaters",
      "men sandals & slippers",
      "mss",
      "nys",
      "payday",
      "s&s",
      "sss",
      "topseller"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Breeze Through The Day In Style With The Campus Gc-22169 Men'S Sandals In Navy And Light Grey. The Mix Of Mesh, Pvc, And Lycra Brings Both Breathability And Flexibility, While The Silicone Buckle Detail Gives It A Rugged Yet Refined Edge. Designed For All-Day Wear, The Eva And Tpr Sole Delivers Reliable Support, And The Anti-Slip Sole Design Makes It Ready For Monsoon Errands, Beachside Walks, Or Any Weekend Adventure. Style These With Track Pants, Chinos, Or Shorts—Whatever Your Day Demands, These Sandals Are Ready To Move With You. Occasion: Everyday Upper Material: Mesh+Pvc+Silicone Buckle+Lycra Technology: Anti Slip Sole Design Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 103,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_NAVY_L.GRY_01.webp?v=1789559363",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_NAVY_L.GRY_02.jpg?v=1789559363",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_NAVY_L.GRY_03.webp?v=1789559363",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_NAVY_L.GRY_04.webp?v=1789559363",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_NAVY_L.GRY_05.webp?v=1789559363"
    ],
    "sizeInventory": {
      "Deep Navy": [
        {
          "sku": "GC-22169-G-NAVY-LGRY-6",
          "size": "6",
          "stock": 11
        },
        {
          "sku": "GC-22169-G-NAVY-LGRY-7",
          "size": "7",
          "stock": 4
        },
        {
          "sku": "GC-22169-G-NAVY-LGRY-8",
          "size": "8",
          "stock": 9
        },
        {
          "sku": "GC-22169-G-NAVY-LGRY-9",
          "size": "9",
          "stock": 11
        },
        {
          "sku": "GC-22169-G-NAVY-LGRY-10",
          "size": "10",
          "stock": 10
        }
      ]
    },
    "sourceCategory": "Men Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 46,
    "sourceProductId": "9719074488551",
    "waterResistance": "No",
    "shortDescription": "Breeze Through The Day In Style With The Campus Gc-22169 Men'S Sandals In Navy And Light Grey. The Mix Of Mesh, Pvc, And Lycra Brings Both Breathability And Flexibility, While The ",
    "sourceProductUrl": "https://campusshoes.com/products/gc-22169-navy-l-gry-mens-sandal",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-10335038636263",
    "mrp": 1874,
    "sku": "CA-22G-13531-G-LGRY-FADEDDNM-8",
    "use": "Walking",
    "code": "CAMPUS-10335038636263",
    "name": "SERVE CW Grey",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Concrete Grey",
    "price": 1499,
    "sport": "Walking",
    "upper": "Knitting+Welding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#8a8885",
        "name": "Concrete Grey",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_LGRY-FADEDDNM_04.webp?v=1791177958",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_LGRY-FADEDDNM_03.webp?v=1791177958",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_LGRY-FADEDDNM_02.jpg?v=1791177959",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_LGRY-FADEDDNM_05.webp?v=1791177958",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_LGRY-FADEDDNM_01.webp?v=1791177958"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "emp0",
      "men",
      "men shoes",
      "men walking shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "men",
      "men shoes",
      "men walking shoes",
      "mss",
      "new",
      "payday",
      "sale",
      "shoes",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Your 9-to-9 deserves better shoes. The Campus SERVE CW Men's Walking Shoes bring a Light Grey base, subtle Dark Grey detailing, and the smallest hint of Blue into a clean, versatile silhouette. It's understated enough for work, relaxed enough for weekends, and comfortable enough to stay on through long days. The thick EVA midsole keeps things lightweight underfoot, while the Memory Insole and PilloFoam add soft, lasting comfort. A padded collar gives the slip-on fit a cushioned finish. One pair, plenty of plans. Occasion: Everyday Insole: Memory Insole Upper Material: Knitting+Welding Technology: Piillofoam Care Instructions: Gently scrub with a soft cloth or brush using mild soap and cold water, then air dry in the shade. Avoid bleach and harsh cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 133,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_LGRY-FADEDDNM_01.webp?v=1791177958",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_LGRY-FADEDDNM_02.jpg?v=1791177959",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_LGRY-FADEDDNM_03.webp?v=1791177958",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_LGRY-FADEDDNM_04.webp?v=1791177958",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_LGRY-FADEDDNM_05.webp?v=1791177958"
    ],
    "sizeInventory": {
      "Concrete Grey": [
        {
          "sku": "22G-13531-G-LGRY-FADEDDNM-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "22G-13531-G-LGRY-FADEDDNM-7",
          "size": "7",
          "stock": 0
        },
        {
          "sku": "22G-13531-G-LGRY-FADEDDNM-8",
          "size": "8",
          "stock": 10
        },
        {
          "sku": "22G-13531-G-LGRY-FADEDDNM-9",
          "size": "9",
          "stock": 9
        },
        {
          "sku": "22G-13531-G-LGRY-FADEDDNM-10",
          "size": "10",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Walking Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "10335038636263",
    "waterResistance": "No",
    "shortDescription": "Your 9-to-9 deserves better shoes. The Campus SERVE CW Men's Walking Shoes bring a Light Grey base, subtle Dark Grey detailing, and the smallest hint of Blue into a clean, versatil",
    "sourceProductUrl": "https://campusshoes.com/products/serve-cw-l-gry-faded-dnm-mens-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9284823580923",
    "mrp": 6499,
    "sku": "SU-A17566C-7",
    "use": "Training",
    "code": "SUPERKICKS-9284823580923",
    "name": "OMEGA TRAINER SE { HONEY STICK/HAY DAY/EGRET",
    "sole": "Not specified",
    "brand": "CONVERSE",
    "color": "7",
    "price": 5849,
    "sport": "Training",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "7",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_dcbf53fa-a4c2-49b2-8a10-a552014726b9.png?v=1778768657",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_a6c31d36-6122-4a38-ae78-7661f1cd995f.png?v=1778768657",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_abe4c61f-3204-4fd6-89e9-c65ff5cae17b.png?v=1778768657",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_70823602-65b0-4a5f-9896-105e4c954b8a.png?v=1778768657",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/A17566C_1.png?v=1779546241"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.3,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Training",
    "features": [
      "'80s-inspired, mesh upper inspired by retro Converse running shoes, with suede details and durable mudguard overlays",
      "Converse Comfort sockliner helps provide optimal comfort",
      "A lightweight EVA midsole helps provide optimal comfort without the bulk",
      "Heel and tongue pulls for easy on and off",
      "Flecked, round laces and synthetic, reflective accents nod to old-school outdoor styles"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "affiliate_5",
      "Brand - Converse",
      "Footwear",
      "For Footwear",
      "Franchise: Converse Others",
      "Gender - Men",
      "Low_Profile",
      "New Arrivals",
      "Newadss",
      "NO-COD",
      "Non Hype",
      "Product Style: Lifestyle",
      "season: SS26",
      "ship@250",
      "Sneakers",
      "Under8K"
    ],
    "collections": [
      "Trending Now"
    ],
    "description": "CREATE THE PATH This special-edition Omega Trainer takes the retro running style of the original off the beaten path. Rugged fabrics, plush comfort, and colors that evoke throwback trail styles create a trainer made for everyday exploration. '80s-inspired, mesh upper inspired by retro Converse running shoes, with suede details and durable mudguard overlays Converse Comfort sockliner helps provide optimal comfort A lightweight EVA midsole helps provide optimal comfort without the bulk Heel and tongue pulls for easy on and off Flecked, round laces and synthetic, reflective accents nod to old-school outdoor styles",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 84,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/A17566C_1.png?v=1779546241",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_abe4c61f-3204-4fd6-89e9-c65ff5cae17b.png?v=1778768657",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_a6c31d36-6122-4a38-ae78-7661f1cd995f.png?v=1778768657",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_dcbf53fa-a4c2-49b2-8a10-a552014726b9.png?v=1778768657",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_70823602-65b0-4a5f-9896-105e4c954b8a.png?v=1778768657"
    ],
    "sizeInventory": {
      "7": [
        {
          "sku": "A17566C-7",
          "size": "7",
          "stock": 7
        },
        {
          "sku": "A17566C-8",
          "size": "8",
          "stock": 5
        },
        {
          "sku": "A17566C-9",
          "size": "9",
          "stock": 8
        },
        {
          "sku": "A17566C-10",
          "size": "10",
          "stock": 11
        },
        {
          "sku": "A17566C-11",
          "size": "11",
          "stock": 7
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 10,
    "sourceProductId": "9284823580923",
    "waterResistance": "No",
    "shortDescription": "CREATE THE PATH This special-edition Omega Trainer takes the retro running style of the original off the beaten path. Rugged fabrics, plush comfort, and colors that evoke throwback",
    "sourceProductUrl": "https://www.superkicks.in/products/converse-omega-trainer-se-honey-stick-hay-day-egret",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9405530046715",
    "mrp": 17499,
    "sku": "SU-31362401-7",
    "use": "Basketball",
    "code": "SUPERKICKS-9405530046715",
    "name": "MB.06 SHOOTING STAR { DARK AMETHYST-LAVENDER ALERT",
    "sole": "Not specified",
    "brand": "PUMA",
    "color": "7",
    "price": 13999,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "7",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_f8de32be-4603-4f19-8703-464449f9c59b.jpg?v=1788351756",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_a0f44e24-e597-4a1c-82b9-c83343faedd0.jpg?v=1788351756",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_32f58f32-d30e-46a6-a4ac-c07422987380.jpg?v=1788351756",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/7_38afd540-b258-4887-891c-343eea91332c.jpg?v=1788351756",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_b01351c0-517b-4176-886b-6304dc28778f.jpg?v=1788351756"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Basketball",
    "features": [
      "Basketball Sneakers",
      "Footwear",
      "Franchise :MB.06 SHOOTING STAR",
      "New Arrivals",
      "NO-COD"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Basketball Sneakers",
      "Brand - Puma",
      "Footwear",
      "Franchise :MB.06 SHOOTING STAR",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "No one rewrites the playbook like Melo, and the MB.06 Shooting Star Basketball Shoes bring that “1of1” attitude to your game. Its low-to-the-court feel helps you cut, pivot, and show off what’s next – always shining under pressure.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 75,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_b01351c0-517b-4176-886b-6304dc28778f.jpg?v=1788351756",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_32f58f32-d30e-46a6-a4ac-c07422987380.jpg?v=1788351756",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_a0f44e24-e597-4a1c-82b9-c83343faedd0.jpg?v=1788351756",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_f8de32be-4603-4f19-8703-464449f9c59b.jpg?v=1788351756",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/7_38afd540-b258-4887-891c-343eea91332c.jpg?v=1788351756"
    ],
    "sizeInventory": {
      "7": [
        {
          "sku": "31362401-7",
          "size": "7",
          "stock": 8
        },
        {
          "sku": "31362401-8",
          "size": "8",
          "stock": 15
        },
        {
          "sku": "31362401-9",
          "size": "9",
          "stock": 13
        },
        {
          "sku": "31362401-10",
          "size": "10",
          "stock": 13
        },
        {
          "sku": "31362401-11",
          "size": "11",
          "stock": 10
        }
      ]
    },
    "sourceCategory": "Basketball Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9405530046715",
    "waterResistance": "No",
    "shortDescription": "No one rewrites the playbook like Melo, and the MB.06 Shooting Star Basketball Shoes bring that “1of1” attitude to your game. Its low-to-the-court feel helps you cut, pivot, and sh",
    "sourceProductUrl": "https://www.superkicks.in/products/puma-mb-06-shooting-star-dark-amethyst-lavender-alert",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15395063628027",
    "mrp": 5869,
    "sku": "SU-HV4479-403-7",
    "use": "Slippers",
    "code": "SUPERKICKS-15395063628027",
    "name": "REACT X REJUVEN8 { NEW SLATE/OBSIDIAN",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "7",
    "price": 4695,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "7",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_cc058f3e-717c-4721-ab0e-817c924aff49.jpg?v=1790592049",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_7695ed33-cd1b-40e5-9554-0b8fa690b653.jpg?v=1790592050",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_55e99f98-7694-4d5a-bfcb-5361c603eea5.jpg?v=1790592050",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_8bc21807-88fa-4905-9690-605611e1e27c.jpg?v=1790592049",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_2c79750c-6eef-48af-983f-634e387679ee.jpg?v=1790592050"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.3,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Footwear",
      "Franchise : REJUVEN8",
      "New Arrivals",
      "NO-COD",
      "ship@250"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Nike",
      "Footwear",
      "Franchise : REJUVEN8",
      "Gender - Men",
      "Gender - Women",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "ship@250",
      "Slides & Sandals",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Give your feet a rest. Made with soft and responsive ReactX foam, the Rejuven8 uses some of our best tech to create recovery slides you’ll look forward to wearing. ReactX upper and midsole surround your feet in soft, responsive comfort. Sticky rubber outsole adds grip even on slick surfaces. Extra room at the forefoot helps accommodate various foot widths.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 48,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_2c79750c-6eef-48af-983f-634e387679ee.jpg?v=1790592050",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_55e99f98-7694-4d5a-bfcb-5361c603eea5.jpg?v=1790592050",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_7695ed33-cd1b-40e5-9554-0b8fa690b653.jpg?v=1790592050",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_cc058f3e-717c-4721-ab0e-817c924aff49.jpg?v=1790592049",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_8bc21807-88fa-4905-9690-605611e1e27c.jpg?v=1790592049"
    ],
    "sizeInventory": {
      "7": [
        {
          "sku": "HV4479-403-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "HV4479-403-7",
          "size": "7",
          "stock": 13
        },
        {
          "sku": "HV4479-403-8",
          "size": "8",
          "stock": 5
        },
        {
          "sku": "HV4479-403-9",
          "size": "9",
          "stock": 14
        },
        {
          "sku": "HV4479-403-10",
          "size": "10",
          "stock": 4
        },
        {
          "sku": "HV4479-403-11",
          "size": "11",
          "stock": 0
        },
        {
          "sku": "HV4479-403-12",
          "size": "12",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15395063628027",
    "waterResistance": "No",
    "shortDescription": "Give your feet a rest. Made with soft and responsive ReactX foam, the Rejuven8 uses some of our best tech to create recovery slides you’ll look forward to wearing. ReactX upper and",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-react-x-rejuven8-new-slate-obsidian",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15395482632443",
    "mrp": 21244,
    "sku": "SU-IV2839-001-4",
    "use": "Sneakers",
    "code": "SUPERKICKS-15395482632443",
    "name": "AIR MAX 95 BIG BUBBLE SE { BLACK/METALLIC SILVER-WHITE",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Core Black",
    "price": 16995,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_a3724492-c8b7-404c-8329-e46c9cf50e17.jpg?v=1790681198",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_b6441eec-c2dd-490e-af43-4ea21f366131.jpg?v=1790681198",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_153f56e4-5bfc-4323-918b-efc3e93480b4.jpg?v=1790681198",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_e6f5db82-f2e3-490e-88c8-84819eac843d.jpg?v=1790681198",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_0d9f59fe-4302-4a2a-b6b1-eda022b99b9d.jpg?v=1790681198"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Metallic accents",
      "Foam midsole",
      "Rubber outsole"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Nike",
      "Footwear",
      "Franchise: AIR MAX 95",
      "Gender - Women",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "Taking inspiration from '90s track aesthetics, the Air Max 95 Big Bubble mixes unbelievable comfort with fast-paced style. Smooth leather and tonal textures create dimension while pumped-up Max Air unit adds performance-like cushioning. Upper mixes genuine leather and textile for a layered look built to last. Visible Max Air unit provides lightweight cushioning. Waffle outsole gives you durable traction and heritage style. More Details Metallic accents Foam midsole Rubber outsole",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 96,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_0d9f59fe-4302-4a2a-b6b1-eda022b99b9d.jpg?v=1790681198",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_153f56e4-5bfc-4323-918b-efc3e93480b4.jpg?v=1790681198",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_b6441eec-c2dd-490e-af43-4ea21f366131.jpg?v=1790681198",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_a3724492-c8b7-404c-8329-e46c9cf50e17.jpg?v=1790681198",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_e6f5db82-f2e3-490e-88c8-84819eac843d.jpg?v=1790681198"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "IV2839-001-3",
          "size": "3",
          "stock": 0
        },
        {
          "sku": "IV2839-001-4",
          "size": "4",
          "stock": 10
        },
        {
          "sku": "IV2839-001-5",
          "size": "5",
          "stock": 13
        },
        {
          "sku": "IV2839-001-6",
          "size": "6",
          "stock": 10
        },
        {
          "sku": "IV2839-001-7",
          "size": "7",
          "stock": 0
        },
        {
          "sku": "IV2839-001-8",
          "size": "8",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15395482632443",
    "waterResistance": "No",
    "shortDescription": "Taking inspiration from '90s track aesthetics, the Air Max 95 Big Bubble mixes unbelievable comfort with fast-paced style. Smooth leather and tonal textures create dimension while ",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-air-max-95-big-bubble-se-black-metallic-silver-white",
    "inventoryCountsAreExact": false
  },
  {
    "id": "redtape-9002422993086",
    "mrp": 10299,
    "sku": "RE-RTE5892A-7",
    "use": "Boots",
    "code": "REDTAPE-9002422993086",
    "name": "Chelsea Boots for Men",
    "sole": "Not specified",
    "brand": "RED TAPE",
    "color": "7",
    "price": 2678,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "7",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/4_f6f90e56-e96a-463f-beda-15f9dd32ebee.jpg?v=1789706756",
          "back": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/3_41a3634f-46ce-4915-90f9-3bf8f39dcb67.jpg?v=1789706756",
          "side": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/2_1b8a8df3-9661-4738-b409-11acbb0b0eb4.jpg?v=1789706756",
          "sole": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/5_e6419b93-c9b6-4c83-8800-36d5ecd9a70c.jpg?v=1789706756",
          "front": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/1_870a0521-ea88-45d0-84db-bdbd4218b424.jpg?v=1789706756"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Boots",
    "features": [
      "Premium Leather Upper: Offers a polished look with lasting durability",
      "High-Top Chelsea Design: Adds a refined, modern formal appeal",
      "Durable TPR Sole: Ensures grip, flexibility, and long-term wear",
      "Slip-On Closure: Enables easy on-and-off convenience",
      "Formal Utility: Ideal for office, business, and smart-formal occasions\"",
      "Upper: Premium leather upper for a sleek and polished formal look"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Boots",
      "Footwear",
      "Men"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Make a sharp style statement with Red Tape Men’s Black Chelsea Boots, crafted for modern formal dressing. Designed in a high-top silhouette, these boots feature a premium leather upper that delivers a sleek and refined finish. Features: Premium Leather Upper: Offers a polished look with lasting durability High-Top Chelsea Design: Adds a refined, modern formal appeal Durable TPR Sole: Ensures grip, flexibility, and long-term wear Slip-On Closure: Enables easy on-and-off convenience Formal Utility: Ideal for office, business, and smart-formal occasions\" Product Specification Upper: Premium leather upper for a sleek and polished formal look Sole: Durable TPR sole provides grip, flexibility, and long-lasting wear Heel: Low-profile heel with a stable base for comfortable formal use Fit: High-top Chelsea boot design with slip-on closure for easy wear Boots:Chelsea",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "REDTAPE",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 80,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/1_870a0521-ea88-45d0-84db-bdbd4218b424.jpg?v=1789706756",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/2_1b8a8df3-9661-4738-b409-11acbb0b0eb4.jpg?v=1789706756",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/3_41a3634f-46ce-4915-90f9-3bf8f39dcb67.jpg?v=1789706756",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/4_f6f90e56-e96a-463f-beda-15f9dd32ebee.jpg?v=1789706756",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/5_e6419b93-c9b6-4c83-8800-36d5ecd9a70c.jpg?v=1789706756"
    ],
    "sizeInventory": {
      "7": [
        {
          "sku": "RTE5892A-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "RTE5892A-7",
          "size": "7",
          "stock": 6
        },
        {
          "sku": "RTE5892A-8",
          "size": "8",
          "stock": 11
        },
        {
          "sku": "RTE5892A-9",
          "size": "9",
          "stock": 13
        },
        {
          "sku": "RTE5892A-10",
          "size": "10",
          "stock": 12
        },
        {
          "sku": "RTE5892A-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Boots",
    "countryOfOrigin": "India",
    "discountPercent": 74,
    "sourceProductId": "9002422993086",
    "waterResistance": "Water Repellent",
    "shortDescription": "Make a sharp style statement with Red Tape Men’s Black Chelsea Boots, crafted for modern formal dressing. Designed in a high-top silhouette, these boots feature a premium leather u",
    "sourceProductUrl": "https://redtape.com/products/red-tape-chelsea-boots-for-men-timelesssophistication-rte5892a",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9692837282023",
    "mrp": 2874,
    "sku": "CA-ELAN-25-G-TAN-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9692837282023",
    "name": "ELAN-25 Tan",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cognac Tan",
    "price": 2299,
    "sport": "Lifestyle",
    "upper": "Synthetic",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-25_ELAN-25_TAN_04.webp?v=1788435119",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-25_ELAN-25_TAN_03.webp?v=1788435119",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-25_ELAN-25_TAN_01_c4701d6f-4ffc-47ff-8928-f701f01a6077.jpg?v=1788435119",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-25_ELAN-25_TAN_05.webp?v=1788435119",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-25_ELAN-25_TAN_02.webp?v=1788435119"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "emp0",
      "loafers"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "emp0",
      "loafers",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The Wit In Blurring The Line Between Two Silhouettes That Were Never Meant To Overlap! The Campus Elan-25 Men'S Loafers Do Exactly That — Borrowing The Easy Elegance Of A Loafer And Lending It The Distinguished Detail Of A Derby. A Warm Tan Colourway Settles The Silhouette Into Something Relaxed Yet Refined, While Dotted Derby-Inspired Detailing Brings Quiet Character To The Clean Synthetic Upper. Elastic Panels Make The On-And-Off Effortless, While A Pu Foam Die-Cut Insole And Lightweight Eva Sole Keep Comfort As Considered As The Design. Worn With Tailored Trousers, Relaxed Chinos, Or Your Most Dependable Denim — Elan-25 Has A Way Of Making Every Look Feel A Touch More Finished. Occasion: Everyday Insole: Pu Foam Die Cut Upper Material: Synthetic Care Instructions: Wipe With A Damp Cloth And Mild Soapy Water, Then Pat Dry And Air Dry Naturally. Do Not Soak, Rinse Under Running Water, Or Expose To Direct Heat And Harsh Chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 99,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-25_ELAN-25_TAN_02.webp?v=1788435119",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-25_ELAN-25_TAN_01_c4701d6f-4ffc-47ff-8928-f701f01a6077.jpg?v=1788435119",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-25_ELAN-25_TAN_03.webp?v=1788435119",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-25_ELAN-25_TAN_04.webp?v=1788435119",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-25_ELAN-25_TAN_05.webp?v=1788435119"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "ELAN-25-G-TAN-6",
          "size": "6",
          "stock": 13
        },
        {
          "sku": "ELAN-25-G-TAN-7",
          "size": "7",
          "stock": 9
        },
        {
          "sku": "ELAN-25-G-TAN-8",
          "size": "8",
          "stock": 5
        },
        {
          "sku": "ELAN-25-G-TAN-9",
          "size": "9",
          "stock": 4
        },
        {
          "sku": "ELAN-25-G-TAN-10",
          "size": "10",
          "stock": 6
        },
        {
          "sku": "ELAN-25-G-TAN-11",
          "size": "11",
          "stock": 10
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9692837282023",
    "waterResistance": "No",
    "shortDescription": "The Wit In Blurring The Line Between Two Silhouettes That Were Never Meant To Overlap! The Campus Elan-25 Men'S Loafers Do Exactly That — Borrowing The Easy Elegance Of A Loafer An",
    "sourceProductUrl": "https://campusshoes.com/products/elan-25-tan-mens-loafers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9655484088551",
    "mrp": 3999,
    "sku": "CA-ELAN-14-G-GREEN-6",
    "use": "Casual Shoes",
    "code": "CAMPUS-9655484088551",
    "name": "ELAN-14 Green",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Olive Green",
    "price": 2349,
    "sport": "Lifestyle",
    "upper": "Mesh+Pu",
    "width": "Medium",
    "colors": [
      {
        "hex": "#15803d",
        "name": "Olive Green",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_GREEN_04.webp?v=1785215408",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_GREEN_03.webp?v=1785215408",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_GREEN_01.jpg?v=1785215408",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_GREEN_05.webp?v=1785215408",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_GREEN_02.webp?v=1785215408"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Casual Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "sale",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Nailing that old-money aesthetic, this one's a sure-shot head-turner. The Campus ELAN-14 Men's Sneakers pair a rich emerald green with crisp white and black accents for a look that balances vintage charm with urban style. The breathable mesh and PU upper gives the silhouette a polished finish, while the sturdy TPR outsole and Foam Die Cut insole keep every step comfortably grounded. Sophisticated and effortlessly elegant, this is the pair that elevates everything from linen trousers to your favourite denim. Occasion: Everyday Insole: Eva+Pu Foam Die Cut Upper Material: Mesh+Pu Care Instructions: Gently scrub with a soft cloth or brush using mild soap and cold water, then air dry in the shade. Avoid bleach and harsh cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 32,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_GREEN_02.webp?v=1785215408",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_GREEN_01.jpg?v=1785215408",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_GREEN_03.webp?v=1785215408",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_GREEN_04.webp?v=1785215408",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_GREEN_05.webp?v=1785215408"
    ],
    "sizeInventory": {
      "Olive Green": [
        {
          "sku": "ELAN-14-G-GREEN-6",
          "size": "6",
          "stock": 9
        },
        {
          "sku": "ELAN-14-G-GREEN-7",
          "size": "7",
          "stock": 12
        },
        {
          "sku": "ELAN-14-G-GREEN-8",
          "size": "8",
          "stock": 15
        },
        {
          "sku": "ELAN-14-G-GREEN-9",
          "size": "9",
          "stock": 14
        },
        {
          "sku": "ELAN-14-G-GREEN-10",
          "size": "10",
          "stock": 8
        },
        {
          "sku": "ELAN-14-G-GREEN-11",
          "size": "11",
          "stock": 9
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 41,
    "sourceProductId": "9655484088551",
    "waterResistance": "No",
    "shortDescription": "Nailing that old-money aesthetic, this one's a sure-shot head-turner. The Campus ELAN-14 Men's Sneakers pair a rich emerald green with crisp white and black accents for a look that",
    "sourceProductUrl": "https://campusshoes.com/products/elan-14-green-mens-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719074226407",
    "mrp": 1049,
    "sku": "CA-22C-179-C-WHT-SGRN-2",
    "use": "Running",
    "code": "CAMPUS-9719074226407",
    "name": "CAMP STAR CH White",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cloud White",
    "price": 1024,
    "sport": "Running",
    "upper": "Mesh + Pvc",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPSTARKIDS_22K-167_WHT-GRN_04.webp?v=1789559730",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPSTARKIDS_22K-167_WHT-GRN_03.webp?v=1789559730",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPSTARKIDS_22K-167_WHT-GRN_02.jpg?v=1789559730",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPSTARKIDS_22K-167_WHT-GRN_05.webp?v=1789559730",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPSTARKIDS_22K-167_WHT-GRN_01.webp?v=1789559730"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.3,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes",
      "payday",
      "sale",
      "shshoes",
      "wyv"
    ],
    "collections": [
      "Running Collection"
    ],
    "description": "Parents! This Is What Your Lil One Wants — The Campus Star Kids Running Shoes. Comfy, Reliable, And Made For All Things Fun, It Checks All The Boxes. The Breathable Mesh Upper Keeps Their Feet Fresh. Underfoot, The Eva Sole And The Power Of Support-Tech Bring Light, Flexible Steps And Heel Support Hand In Hand. The Memory Insole Takes The Cushioning To The Next Level, Adapting To The Shape Of The Feet. The White Base With A Pop Of Sea Green Feels Fresh And Versatile — A Colorway That Works For School, Play, And Everything In Between. Occasion: Everyday Insole: Memory Insole Upper Material: Mesh + Pvc Technology: Support-Tech Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 20,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPSTARKIDS_22K-167_WHT-GRN_01.webp?v=1789559730",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPSTARKIDS_22K-167_WHT-GRN_02.jpg?v=1789559730",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPSTARKIDS_22K-167_WHT-GRN_03.webp?v=1789559730",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPSTARKIDS_22K-167_WHT-GRN_04.webp?v=1789559730",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPSTARKIDS_22K-167_WHT-GRN_05.webp?v=1789559730"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "22C-179-C-WHT-SGRN-2",
          "size": "2",
          "stock": 9
        },
        {
          "sku": "22C-179-C-WHT-SGRN-3",
          "size": "3",
          "stock": 7
        },
        {
          "sku": "22C-179-C-WHT-SGRN-4",
          "size": "4",
          "stock": 9
        },
        {
          "sku": "22C-179-C-WHT-SGRN-5",
          "size": "5",
          "stock": 4
        }
      ]
    },
    "sourceCategory": "Kids Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 2,
    "sourceProductId": "9719074226407",
    "waterResistance": "No",
    "shortDescription": "Parents! This Is What Your Lil One Wants — The Campus Star Kids Running Shoes. Comfy, Reliable, And Made For All Things Fun, It Checks All The Boxes. The Breathable Mesh Upper Keep",
    "sourceProductUrl": "https://campusshoes.com/products/camp-star-ch-wht-s-grn-child-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719074423015",
    "mrp": 1499,
    "sku": "CA-GC-22169-G-LGRY-BLK-6",
    "use": "Sandals",
    "code": "CAMPUS-9719074423015",
    "name": "GC-22169 Grey",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Concrete Grey",
    "price": 784,
    "sport": "Lifestyle",
    "upper": "Mesh+Pvc+Silicone Buckle+Lycra",
    "width": "Medium",
    "colors": [
      {
        "hex": "#8a8885",
        "name": "Concrete Grey",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_L.GRY_BLK_04.webp?v=1789559434",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_L.GRY_BLK_03.webp?v=1789559434",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_L.GRY_BLK_02.jpg?v=1789559434",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_L.GRY_BLK_05.webp?v=1789559434",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_L.GRY_BLK_01.webp?v=1789559434"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "cs",
      "emp0",
      "fs",
      "men",
      "men sandal casual"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "fs",
      "men",
      "men sandal casual",
      "men sandals & floaters",
      "men sandals & slippers",
      "mss",
      "nys",
      "payday",
      "s&s",
      "sss",
      "topseller"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Hit Peak Comfort With The Campus Gc-22169 Men'S Sandals In Light Grey And Black—A Versatile Pair Designed To Keep Up With Your Everyday Hustle. Built With A Breathable Mesh And Pvc Upper, Plus Soft Lycra Lining And A Sturdy Silicone Buckle, These Sandals Lock In A Custom Fit With Ease. The Eva And Tpr Sole Offers Lightweight Durability, While The The Anti-Slip Sole Design Gives You Steady Grip Across Changing Surfaces. From Casual City Strolls To Relaxed Weekends, These Sandals Pair Effortlessly With Cargo Shorts, Joggers, Or Denim For That Laid-Back Summer Vibe. Occasion: Everyday Upper Material: Mesh+Pvc+Silicone Buckle+Lycra Technology: Anti Slip Sole Design Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 77,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_L.GRY_BLK_01.webp?v=1789559434",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_L.GRY_BLK_02.jpg?v=1789559434",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_L.GRY_BLK_03.webp?v=1789559434",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_L.GRY_BLK_04.webp?v=1789559434",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/GC-22169_GC-22169_L.GRY_BLK_05.webp?v=1789559434"
    ],
    "sizeInventory": {
      "Concrete Grey": [
        {
          "sku": "GC-22169-G-LGRY-BLK-6",
          "size": "6",
          "stock": 7
        },
        {
          "sku": "GC-22169-G-LGRY-BLK-7",
          "size": "7",
          "stock": 14
        },
        {
          "sku": "GC-22169-G-LGRY-BLK-8",
          "size": "8",
          "stock": 4
        },
        {
          "sku": "GC-22169-G-LGRY-BLK-9",
          "size": "9",
          "stock": 8
        },
        {
          "sku": "GC-22169-G-LGRY-BLK-10",
          "size": "10",
          "stock": 7
        }
      ]
    },
    "sourceCategory": "Men Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 48,
    "sourceProductId": "9719074423015",
    "waterResistance": "No",
    "shortDescription": "Hit Peak Comfort With The Campus Gc-22169 Men'S Sandals In Light Grey And Black—A Versatile Pair Designed To Keep Up With Your Everyday Hustle. Built With A Breathable Mesh And Pvc",
    "sourceProductUrl": "https://campusshoes.com/products/gc-22169-l-gry-blk-mens-sandal",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-10335038570727",
    "mrp": 1874,
    "sku": "CA-22G-13531-G-FADEDDNM-OFFWHT-7",
    "use": "Walking",
    "code": "CAMPUS-10335038570727",
    "name": "SERVE CW Blue",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Royal Blue",
    "price": 1499,
    "sport": "Walking",
    "upper": "Knitting+Welding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#2563eb",
        "name": "Royal Blue",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_FADEDDNM-OFFWHT_04.webp?v=1791178008",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_FADEDDNM-OFFWHT_03.webp?v=1791178008",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_FADEDDNM-OFFWHT_02.jpg?v=1791178009",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_FADEDDNM-OFFWHT_05.webp?v=1791178008",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_FADEDDNM-OFFWHT_01.webp?v=1791178008"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "emp0",
      "men",
      "men shoes",
      "men walking shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "men",
      "men shoes",
      "men walking shoes",
      "mss",
      "new",
      "payday",
      "sale",
      "shoes",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The easy-breezy weekend mood, in a shoe. The Campus SERVE CW Men's Walking Shoes take a relaxed Faded Denim Blue and pair it with subtle Off White details for an effortlessly laid-back look. The clean knitted upper keeps the silhouette neat without making it feel too dressed up, while the slip-on design is made for those grab-and-go moments. A lightweight EVA midsole keeps things comfortably cushioned, with the Memory Insole and PilloFoam adding a soft, plush feel. Throw them on with jeans, shorts, or easygoing separates and call it a day. Occasion: Everyday Insole: Memory Insole Upper Material: Knitting+Welding Technology: Piillofoam Care Instructions: Gently scrub with a soft cloth or brush using mild soap and cold water, then air dry in the shade. Avoid bleach and harsh cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 61,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_FADEDDNM-OFFWHT_01.webp?v=1791178008",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_FADEDDNM-OFFWHT_02.jpg?v=1791178009",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_FADEDDNM-OFFWHT_03.webp?v=1791178008",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_FADEDDNM-OFFWHT_04.webp?v=1791178008",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_FADEDDNM-OFFWHT_05.webp?v=1791178008"
    ],
    "sizeInventory": {
      "Royal Blue": [
        {
          "sku": "22G-13531-G-FADEDDNM-OFFWHT-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "22G-13531-G-FADEDDNM-OFFWHT-7",
          "size": "7",
          "stock": 7
        },
        {
          "sku": "22G-13531-G-FADEDDNM-OFFWHT-8",
          "size": "8",
          "stock": 0
        },
        {
          "sku": "22G-13531-G-FADEDDNM-OFFWHT-9",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "22G-13531-G-FADEDDNM-OFFWHT-10",
          "size": "10",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Walking Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "10335038570727",
    "waterResistance": "No",
    "shortDescription": "The easy-breezy weekend mood, in a shoe. The Campus SERVE CW Men's Walking Shoes take a relaxed Faded Denim Blue and pair it with subtle Off White details for an effortlessly laid-",
    "sourceProductUrl": "https://campusshoes.com/products/serve-cw-faded-dnm-off-wht-mens-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9284824695035",
    "mrp": 8124,
    "sku": "SU-A17564C-7",
    "use": "Training",
    "code": "SUPERKICKS-9284824695035",
    "name": "OMEGA TRAINER SE { CLEAR SKIES/INDIGO STORM/EGRET",
    "sole": "Not specified",
    "brand": "CONVERSE",
    "color": "7",
    "price": 6499,
    "sport": "Training",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "7",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_57178805-5fa9-4aae-9f26-a513361025bd.png?v=1778779621",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_73dbc2c7-e838-45d3-b59f-49b32a0a3dfa.png?v=1778779621",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_25f58d92-3397-4f96-9991-28c0266f0921.png?v=1778779621",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_c91dd57d-d52e-498b-945b-b70684e473f1.png?v=1778779621",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_3eac3086-33fc-4c42-a124-fa926624edcf.png?v=1778779621"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Training",
    "features": [
      "'80s-inspired, mesh upper inspired by retro Converse running shoes, with suede details and durable mudguard overlays",
      "Converse Comfort sockliner helps provide optimal comfort",
      "A lightweight EVA midsole helps provide optimal comfort without the bulk",
      "Heel and tongue pulls for easy on and off",
      "Flecked, round laces and synthetic, reflective accents nod to old-school outdoor styles"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "affiliate_5",
      "Brand - Converse",
      "Footwear",
      "For Footwear",
      "Franchise: Converse Others",
      "Gender - Men",
      "Low_Profile",
      "New Arrivals",
      "Newadss",
      "NO-COD",
      "Non Hype",
      "Product Style: Lifestyle",
      "season: SS26",
      "ship@250",
      "Sneakers",
      "STAYVISTA15",
      "Under8K"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "CREATE THE PATH This special-edition Omega Trainer takes the retro running style of the original off the beaten path. Rugged fabrics, plush comfort, and colors that evoke throwback trail styles create a trainer made for everyday exploration. '80s-inspired, mesh upper inspired by retro Converse running shoes, with suede details and durable mudguard overlays Converse Comfort sockliner helps provide optimal comfort A lightweight EVA midsole helps provide optimal comfort without the bulk Heel and tongue pulls for easy on and off Flecked, round laces and synthetic, reflective accents nod to old-school outdoor styles",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 49,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_3eac3086-33fc-4c42-a124-fa926624edcf.png?v=1778779621",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_25f58d92-3397-4f96-9991-28c0266f0921.png?v=1778779621",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_73dbc2c7-e838-45d3-b59f-49b32a0a3dfa.png?v=1778779621",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_57178805-5fa9-4aae-9f26-a513361025bd.png?v=1778779621",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_c91dd57d-d52e-498b-945b-b70684e473f1.png?v=1778779621"
    ],
    "sizeInventory": {
      "7": [
        {
          "sku": "A17564C-7",
          "size": "7",
          "stock": 5
        },
        {
          "sku": "A17564C-8",
          "size": "8",
          "stock": 15
        },
        {
          "sku": "A17564C-9",
          "size": "9",
          "stock": 10
        },
        {
          "sku": "A17564C-10",
          "size": "10",
          "stock": 12
        },
        {
          "sku": "A17564C-11",
          "size": "11",
          "stock": 8
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9284824695035",
    "waterResistance": "No",
    "shortDescription": "CREATE THE PATH This special-edition Omega Trainer takes the retro running style of the original off the beaten path. Rugged fabrics, plush comfort, and colors that evoke throwback",
    "sourceProductUrl": "https://www.superkicks.in/products/converse-omega-trainer-se-clear-skies-indigo-storm-egret",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9427276235003",
    "mrp": 16244,
    "sku": "SU-IV4884-200-6",
    "use": "Basketball",
    "code": "SUPERKICKS-9427276235003",
    "name": "AIR FORCE 1 LOW RETRO  { BAROQUE BROWN/BAROQUE BROWN-BLACK",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Core Black",
    "price": 12995,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_6fb574b8-3179-4cad-8de4-c04c1a5bca04.jpg?v=1789994216",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_a265270a-7e89-488e-8adf-25688e3a6f18.jpg?v=1789994216",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_caaf9507-2669-47f7-9251-8e6ff1c2865c.jpg?v=1789994216",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_4f61edf6-26ae-4c41-b083-a9b9060de367.jpg?v=1789994216",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_11e3507b-52b3-4c6b-8b0f-0305a0ae0847.jpg?v=1789994216"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Basketball",
    "features": [
      "NYC label on tongue",
      "Plush laces",
      "Foam midsole"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Basketball Sneakers",
      "Brand - Nike",
      "Footwear",
      "Franchise: AIR FORCE 1",
      "free-delivery",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Sneakers",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Peek-a-BOO! These fur-rightening AF1s are as startling as they are stylish. The upper pairs real and synthetic leather with faux fur. Glow-in-the-dark eyes and outsoles complete their monstrous look. Retro profile features a slimmer look, rounded toe box, curved heel tab and longer tongue. Leather and synthetic leather upper with perforated toe box is breathable and comfortable. Nike Air unit provides lightweight cushioning. Rubber outsole with classic pivot circles delivers traction and durability. More Details NYC label on tongue Plush laces Foam midsole",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 34,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_11e3507b-52b3-4c6b-8b0f-0305a0ae0847.jpg?v=1789994216",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_caaf9507-2669-47f7-9251-8e6ff1c2865c.jpg?v=1789994216",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_a265270a-7e89-488e-8adf-25688e3a6f18.jpg?v=1789994216",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_6fb574b8-3179-4cad-8de4-c04c1a5bca04.jpg?v=1789994216",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_4f61edf6-26ae-4c41-b083-a9b9060de367.jpg?v=1789994216"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "IV4884-200-6",
          "size": "6",
          "stock": 6
        },
        {
          "sku": "IV4884-200-7",
          "size": "7",
          "stock": 12
        },
        {
          "sku": "IV4884-200-8",
          "size": "8",
          "stock": 0
        },
        {
          "sku": "IV4884-200-9",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "IV4884-200-10",
          "size": "10",
          "stock": 15
        },
        {
          "sku": "IV4884-200-11",
          "size": "11",
          "stock": 9
        },
        {
          "sku": "IV4884-200-12",
          "size": "12",
          "stock": 8
        }
      ]
    },
    "sourceCategory": "Basketball Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9427276235003",
    "waterResistance": "No",
    "shortDescription": "Peek-a-BOO! These fur-rightening AF1s are as startling as they are stylish. The upper pairs real and synthetic leather with faux fur. Glow-in-the-dark eyes and outsoles complete th",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-air-force-1-low-retro-baroque-brown-baroque-brown-black",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15397762662651",
    "mrp": 8249,
    "sku": "SU-KH6887-6",
    "use": "Slippers",
    "code": "SUPERKICKS-15397762662651",
    "name": "PURECHILL { SOLAR TURBO/CORE BLACK/CORE BLACK",
    "sole": "Not specified",
    "brand": "ADIDAS",
    "color": "Core Black",
    "price": 6599,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_de5369d7-9e24-4868-b0b0-f8e6f617c303.jpg?v=1790773290",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_50b2af6f-0dc4-402c-86e5-cd5f0a851100.jpg?v=1790773290",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_47321dc2-dc0a-4fdf-86a0-45d8a3f188d3.jpg?v=1790773291",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_10fc11a5-be68-4b36-af0d-bd33a19f7386.jpg?v=1790773290",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_639a04d2-182f-4554-a541-3d0509fb03de.jpg?v=1790773290"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.3,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Footwear",
      "Franchise: Purechill",
      "New Arrivals",
      "NO-COD",
      "ship@250"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Adidas",
      "Footwear",
      "Franchise: Purechill",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "ship@250"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Soft comfort meets strong style in iconic post-workout slides. Move effortlessly from grind to glide in the innovative Purechill Slides. With an airy cushioned feel and a cool futuristic vibe, these fashion-forward shoes are the ultimate recovery essential. The seamless upper and soft cushioning provide welcome relief after intense workouts. Cutouts for ventilation and breathable materials bring cool comfort to hardworking feet. A bold yet sleek design adds distinctive flair, fusing effortless comfort with a strong style statement. Iconic adidas 3-Stripes complete this standout look, reflecting our commitment to quality and innovation.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 93,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_639a04d2-182f-4554-a541-3d0509fb03de.jpg?v=1790773290",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_47321dc2-dc0a-4fdf-86a0-45d8a3f188d3.jpg?v=1790773291",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_50b2af6f-0dc4-402c-86e5-cd5f0a851100.jpg?v=1790773290",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_de5369d7-9e24-4868-b0b0-f8e6f617c303.jpg?v=1790773290",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_10fc11a5-be68-4b36-af0d-bd33a19f7386.jpg?v=1790773290"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "KH6887-6",
          "size": "6",
          "stock": 4
        },
        {
          "sku": "KH6887-7",
          "size": "7",
          "stock": 9
        },
        {
          "sku": "KH6887-8",
          "size": "8",
          "stock": 7
        },
        {
          "sku": "KH6887-9",
          "size": "9",
          "stock": 8
        },
        {
          "sku": "KH6887-10",
          "size": "10",
          "stock": 15
        },
        {
          "sku": "KH6887-11",
          "size": "11",
          "stock": 13
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15397762662651",
    "waterResistance": "No",
    "shortDescription": "Soft comfort meets strong style in iconic post-workout slides. Move effortlessly from grind to glide in the innovative Purechill Slides. With an airy cushioned feel and a cool futu",
    "sourceProductUrl": "https://www.superkicks.in/products/adidas-purechill-solar-turbo-core-black-core-black",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15395481682171",
    "mrp": 19119,
    "sku": "SU-HV8154-609-4",
    "use": "Sneakers",
    "code": "SUPERKICKS-15395481682171",
    "name": "VOMERO PLUS { PARTICLE ROSE/SAIL-SILVER LILAC",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Concrete Grey",
    "price": 15295,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#8a8885",
        "name": "Concrete Grey",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/29_50880162-5e6c-4432-bf23-62a4555d2d9a.jpg?v=1790681119",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_35845fb4-33d2-4fd4-9316-650f5fd19d25.jpg?v=1790681119",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_9a11d69d-8d00-483f-b8dd-83140fa9c289.jpg?v=1790681119",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_7eafb330-d810-49c8-89d3-13b7e4a926f4.jpg?v=1790681119",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_73710a7e-7221-4166-9015-b8ffdb750c39.jpg?v=1790681119"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Weight: Approx. 242g/8.5 oz (Women's US 8)",
      "Heel-to-toe drop: 10mm",
      "Webbed lace loops for an adjustable fit",
      "Reflective details",
      "Not intended for use as Personal Protective Equipment (PPE)"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Nike",
      "Footwear",
      "Franchise: VOMERO",
      "Gender - Women",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD",
      "Running sneakers",
      "Season: FW26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "A tall stack of responsive, light foam offers next-level cushioning. Take maximum cushioning to the next level with the Vomero Plus. It provides an ultra-comfortable ride for every day runs thanks to a mountainous stack of full-length ZoomX foam, the most responsive foam in the industry. Plus, the engineered mesh upper is made of soft, breathable yarn for a comfortable fit. Ultra-responsive ZoomX foam midsole delivers Nike's highest energy return. Engineered mesh upper provides soft breathability. High-abrasion rubber outsole offers durable traction. More Details Weight: Approx. 242g/8.5 oz (Women's US 8) Heel-to-toe drop: 10mm Webbed lace loops for an adjustable fit Reflective details Not intended for use as Personal Protective Equipment (PPE)",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 46,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_73710a7e-7221-4166-9015-b8ffdb750c39.jpg?v=1790681119",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_9a11d69d-8d00-483f-b8dd-83140fa9c289.jpg?v=1790681119",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_35845fb4-33d2-4fd4-9316-650f5fd19d25.jpg?v=1790681119",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/29_50880162-5e6c-4432-bf23-62a4555d2d9a.jpg?v=1790681119",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_7eafb330-d810-49c8-89d3-13b7e4a926f4.jpg?v=1790681119"
    ],
    "sizeInventory": {
      "Concrete Grey": [
        {
          "sku": "HV8154-609-3",
          "size": "3",
          "stock": 0
        },
        {
          "sku": "HV8154-609-4",
          "size": "4",
          "stock": 7
        },
        {
          "sku": "HV8154-609-5",
          "size": "5",
          "stock": 11
        },
        {
          "sku": "HV8154-609-6",
          "size": "6",
          "stock": 13
        },
        {
          "sku": "HV8154-609-7",
          "size": "7",
          "stock": 0
        },
        {
          "sku": "HV8154-609-8",
          "size": "8",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15395481682171",
    "waterResistance": "No",
    "shortDescription": "A tall stack of responsive, light foam offers next-level cushioning. Take maximum cushioning to the next level with the Vomero Plus. It provides an ultra-comfortable ride for every",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-vomero-plus-particle-rose-sail-silver-lilac",
    "inventoryCountsAreExact": false
  },
  {
    "id": "redtape-9038793375934",
    "mrp": 12899,
    "sku": "RE-RTE6031-6",
    "use": "Boots",
    "code": "REDTAPE-9038793375934",
    "name": "Biker Boot for Men in Wood",
    "sole": "Not specified",
    "brand": "RED TAPE",
    "color": "Cognac Tan",
    "price": 2128,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6031_4.jpg?v=1790581503",
          "back": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6031_3.jpg?v=1790581503",
          "side": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6031_2.jpg?v=1790581503",
          "sole": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6031_5.jpg?v=1790581503",
          "front": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6031_1.jpg?v=1790581503"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Boots",
    "features": [
      "Leather Upper: Durable construction provides structure, comfort, and a refined product finish.",
      "Fabric Lining: Adds softness, breathable comfort, and a pleasant in-shoe feel for regular wear.",
      "TPR Sole: Delivers grip, cushioning, durability, and dependable every",
      "Material: Sole – TPR | Upper – Leather | Lining – Fabric",
      "Design: High Top biker boot silhouette designed for comfort, style, and everyday usability",
      "Heel: Flat heel design provides stability, support, and balanced movement"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Boots",
      "Footwear",
      "Men"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Experience elevated comfort and dependable style with Red Tape biker boot for men in wood, designed for casual wear, outdoor-inspired styling, travel, weekend plans, and everyday rugged movement. These footwear for men are crafted with a leather upper that supports durability, comfort, and a clean product finish while keeping the look versatile for regular use. The fabric lining adds a softer internal feel, making the pair more comfortable for extended wear and daily movement. The tpr sole is designed to deliver reliable grip, lightweight support, and long-lasting durability, helping you move confidently through different daily settings. Built with a round profile and flat heel design, this high top boots pair balances comfort, stability, and modern Red Tape styling. The secure high-top construction makes the pair easy to wear while giving a secure, convenient, and practical feel for everyday use. Whether styled with denims, chinos, casual outfits, athleisure looks, or formal separates according to the occasion, this pair offers a refined blend of comfort, utility, and product durability. Features. Leather Upper: Durable construction provides structure, comfort, and a refined product finish. Fabric Lining: Adds softness, breathable comfort, and a pleasant in-shoe feel for regular wear. TPR Sole: Delivers grip, cushioning, durability, and dependable every Product Specification Material: Sole – TPR | Upper – Leather | Lining – Fabric Design: High Top biker boot silhouette designed for comfort, style, and everyday usability Heel: Flat heel design provides stability, support, and balanced movement Fit: Secure high-top construction ensures easy, secure, and comfortable wear Utility: Suitable for casual wear, outdoor-inspired styling, travel, weekend plans, and everyday rugged movement",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "REDTAPE",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 75,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6031_1.jpg?v=1790581503",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6031_2.jpg?v=1790581503",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6031_3.jpg?v=1790581503",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6031_4.jpg?v=1790581503",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/RTE6031_5.jpg?v=1790581503"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "RTE6031-6",
          "size": "6",
          "stock": 11
        },
        {
          "sku": "RTE6031-7",
          "size": "7",
          "stock": 6
        },
        {
          "sku": "RTE6031-8",
          "size": "8",
          "stock": 9
        },
        {
          "sku": "RTE6031-9",
          "size": "9",
          "stock": 11
        },
        {
          "sku": "RTE6031-10",
          "size": "10",
          "stock": 6
        }
      ]
    },
    "sourceCategory": "Boots",
    "countryOfOrigin": "India",
    "discountPercent": 84,
    "sourceProductId": "9038793375934",
    "waterResistance": "Water Repellent",
    "shortDescription": "Experience elevated comfort and dependable style with Red Tape biker boot for men in wood, designed for casual wear, outdoor-inspired styling, travel, weekend plans, and everyday r",
    "sourceProductUrl": "https://redtape.com/products/red-tape-biker-boot-for-men-in-wood-bootsrte6031",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9692837216487",
    "mrp": 3124,
    "sku": "CA-ELAN-20-G-TAN-7",
    "use": "Formal Shoes",
    "code": "CAMPUS-9692837216487",
    "name": "ELAN-20 Tan",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cognac Tan",
    "price": 2499,
    "sport": "Lifestyle",
    "upper": "Pu",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-20_ELAN-20_TAN_04.webp?v=1788435197",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-20_ELAN-20_TAN_03.webp?v=1788435197",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-20_ELAN-20_TAN_01.jpg?v=1788435197",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-20_ELAN-20_TAN_05.webp?v=1788435197",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-20_ELAN-20_TAN_02.webp?v=1788435197"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.9,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "emp0",
      "men"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "emp0",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The Campus Elan-20 Men'S Brogue Shoes Carry All The Character Of A Timeless Brogue Into A Silhouette That Reads Distinctly Modern. Rendered In A Rich Tan, The Clean Pu Upper Takes On An Ease That Feels Almost Off-Duty, While Subtle Dotted Detailing At The Heel Offers Restraint Over Embellishment. A Soft Lycra Lining Sees You Through The Longer Days, And A Thick Eva Sole Brings A Lightweight, Contemporary Edge Underfoot. Smart Without Tipping Into Formal, Elan-20 Is The Pair For When The Occasion Asks For Polish — With Just Enough Personality To Keep Things Interesting. Occasion: Everyday Insole: Pu Foam-Molded Upper Material: Pu Technology: Care Instructions: Wipe With A Damp Cloth And Mild Soapy Water, Then Pat Dry And Air Dry Naturally. Do Not Soak, Rinse Under Running Water, Or Expose To Direct Heat And Harsh Chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 108,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-20_ELAN-20_TAN_02.webp?v=1788435197",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-20_ELAN-20_TAN_01.jpg?v=1788435197",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-20_ELAN-20_TAN_03.webp?v=1788435197",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-20_ELAN-20_TAN_04.webp?v=1788435197",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-20_ELAN-20_TAN_05.webp?v=1788435197"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "ELAN-20-G-TAN-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "ELAN-20-G-TAN-7",
          "size": "7",
          "stock": 14
        },
        {
          "sku": "ELAN-20-G-TAN-8",
          "size": "8",
          "stock": 6
        },
        {
          "sku": "ELAN-20-G-TAN-9",
          "size": "9",
          "stock": 15
        },
        {
          "sku": "ELAN-20-G-TAN-10",
          "size": "10",
          "stock": 15
        },
        {
          "sku": "ELAN-20-G-TAN-11",
          "size": "11",
          "stock": 15
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9692837216487",
    "waterResistance": "No",
    "shortDescription": "The Campus Elan-20 Men'S Brogue Shoes Carry All The Character Of A Timeless Brogue Into A Silhouette That Reads Distinctly Modern. Rendered In A Rich Tan, The Clean Pu Upper Takes ",
    "sourceProductUrl": "https://campusshoes.com/products/elan-20-tan-mens-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9655484121319",
    "mrp": 3999,
    "sku": "CA-ELAN-14-G-OFFWHT-6",
    "use": "Casual Shoes",
    "code": "CAMPUS-9655484121319",
    "name": "ELAN-14 Off White",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cloud White",
    "price": 2349,
    "sport": "Lifestyle",
    "upper": "Mesh+Pu",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_OFFWHT_04.webp?v=1785215278",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_OFFWHT_03.webp?v=1785215278",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_OFFWHT_01.jpg?v=1785215278",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_OFFWHT_05.webp?v=1785215278",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_OFFWHT_02.webp?v=1785215278"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.5,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Casual Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "sale",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The kind of sneakers you'd spot at a country club in the '80s—and still want today. The Campus ELAN-14 Men's Sneakers bring vintage sporting charm into the present with a clean Off White base and understated green accents. Effortlessly refined, they strike that sweet spot between retro and timeless, making every outfit feel a little more put together. The breathable mesh and PU upper keeps the look crisp, while the TPR outsole and Foam Die Cut insole ensure comfort follows wherever the day takes you. Quietly confident, endlessly versatile, and never chasing trends. Occasion: Everyday Insole: Eva+Pu Foam Die Cut Upper Material: Mesh+Pu Care Instructions: Gently scrub with a soft cloth or brush using mild soap and cold water, then air dry in the shade. Avoid bleach and harsh cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 44,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_OFFWHT_02.webp?v=1785215278",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_OFFWHT_01.jpg?v=1785215278",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_OFFWHT_03.webp?v=1785215278",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_OFFWHT_04.webp?v=1785215278",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-14_ELAN-14_OFFWHT_05.webp?v=1785215278"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "ELAN-14-G-OFFWHT-6",
          "size": "6",
          "stock": 11
        },
        {
          "sku": "ELAN-14-G-OFFWHT-7",
          "size": "7",
          "stock": 10
        },
        {
          "sku": "ELAN-14-G-OFFWHT-8",
          "size": "8",
          "stock": 4
        },
        {
          "sku": "ELAN-14-G-OFFWHT-9",
          "size": "9",
          "stock": 11
        },
        {
          "sku": "ELAN-14-G-OFFWHT-10",
          "size": "10",
          "stock": 13
        },
        {
          "sku": "ELAN-14-G-OFFWHT-11",
          "size": "11",
          "stock": 14
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 41,
    "sourceProductId": "9655484121319",
    "waterResistance": "No",
    "shortDescription": "The kind of sneakers you'd spot at a country club in the '80s—and still want today. The Campus ELAN-14 Men's Sneakers bring vintage sporting charm into the present with a clean Off",
    "sourceProductUrl": "https://campusshoes.com/products/elan-14-off-wht-mens-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719074160871",
    "mrp": 1899,
    "sku": "CA-22G-107-G-LGRY-RED-7",
    "use": "Running",
    "code": "CAMPUS-9719074160871",
    "name": "CAMP ERIK Grey",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Concrete Grey",
    "price": 1699,
    "sport": "Running",
    "upper": "Vamp+Printing+Welding+Embossing",
    "width": "Medium",
    "colors": [
      {
        "hex": "#8a8885",
        "name": "Concrete Grey",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPERIK_22G-107_L.GRY-RED_04.webp?v=1789559801",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPERIK_22G-107_L.GRY-RED_03.webp?v=1789559801",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPERIK_22G-107_L.GRY-RED_02.jpg?v=1789559801",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPERIK_22G-107_L.GRY-RED_05.webp?v=1789559801",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPERIK_22G-107_L.GRY-RED_01.webp?v=1789559801"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "emp0",
      "m&w running shoes",
      "men",
      "men running shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "m&w running shoes",
      "men",
      "men running shoes",
      "men shoes",
      "mss",
      "payday",
      "sale",
      "wyv"
    ],
    "collections": [
      "Running Collection"
    ],
    "description": "Discover The Perfect Fusion Of Comfort And Style With Camp Erik Running Shoes For Men. The Quality Knitted Vamp Provides A Gentle, Luxurious Touch, Ensuring You Stay Comfortable All Day. The Memory Foam Insole Is Like A Tailor-Made Cushion For Your Feet, Delivering Unbeatable Support. And With The Anti-Slip Design Outsole, You Can Confidently Stride Through Any Terrain. Elevate Your Fashion Game And Make A Lasting Impression With Camp Erik By Campus. Occasion: Everyday Insole: Memory Foam Upper Material: Vamp+Printing+Welding+Embossing Technology: Anti-Slip Sole Design Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 52,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPERIK_22G-107_L.GRY-RED_01.webp?v=1789559801",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPERIK_22G-107_L.GRY-RED_02.jpg?v=1789559801",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPERIK_22G-107_L.GRY-RED_03.webp?v=1789559801",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPERIK_22G-107_L.GRY-RED_04.webp?v=1789559801",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/CAMPERIK_22G-107_L.GRY-RED_05.webp?v=1789559801"
    ],
    "sizeInventory": {
      "Concrete Grey": [
        {
          "sku": "22G-107-G-LGRY-RED-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "22G-107-G-LGRY-RED-7",
          "size": "7",
          "stock": 11
        },
        {
          "sku": "22G-107-G-LGRY-RED-8",
          "size": "8",
          "stock": 8
        },
        {
          "sku": "22G-107-G-LGRY-RED-9",
          "size": "9",
          "stock": 9
        },
        {
          "sku": "22G-107-G-LGRY-RED-10",
          "size": "10",
          "stock": 8
        }
      ]
    },
    "sourceCategory": "Men Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 11,
    "sourceProductId": "9719074160871",
    "waterResistance": "No",
    "shortDescription": "Discover The Perfect Fusion Of Comfort And Style With Camp Erik Running Shoes For Men. The Quality Knitted Vamp Provides A Gentle, Luxurious Touch, Ensuring You Stay Comfortable Al",
    "sourceProductUrl": "https://campusshoes.com/products/camp-erik-l-gry-red-mens-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719074029799",
    "mrp": 999,
    "sku": "CA-3K-SD-064A-G-BLK-DGRY-FORG-6",
    "use": "Sandals",
    "code": "CAMPUS-9719074029799",
    "name": "3K-SD-064A Blue",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Royal Blue",
    "price": 754,
    "sport": "Lifestyle",
    "upper": "Lycra+Buckle+Velcro+Back Tape+Binding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#2563eb",
        "name": "Royal Blue",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-064-BLK-D.GRY-F.O_04.webp?v=1789559927",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-064-BLK-D.GRY-F.O_03.webp?v=1789559926",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-064-BLK-D.GRY-F.O_02.jpg?v=1789559927",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-064-BLK-D.GRY-F.O_05.webp?v=1789559926",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-064-BLK-D.GRY-F.O_01.webp?v=1789559926"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "cs",
      "emp0",
      "fs",
      "men",
      "men sandal casual"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "fs",
      "men",
      "men sandal casual",
      "men sandals & floaters",
      "men sandals & slippers",
      "mss",
      "nys",
      "payday",
      "s&s",
      "sss",
      "topseller"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Sleek, Secure, And Soft On Your Feet—Campus 3K-Sd-064A Men's Sandals Deliver All-Day Ease. Designed With Lycra, These Velcro Sandals Adapts To Your Stride While Keeping It Breezy. The Eva Sole, Powered By Pillofoam, Cushions Every Movement With Rebound Comfort. Whether It'S Park Hangouts Or Beachside Plans, These Sandals Bring Both Support And Street-Style Charm. Occasion: Everyday Upper Material: Lycra+Buckle+Velcro+Back Tape+Binding Technology: Pillofoam Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 87,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-064-BLK-D.GRY-F.O_01.webp?v=1789559926",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-064-BLK-D.GRY-F.O_02.jpg?v=1789559927",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-064-BLK-D.GRY-F.O_03.webp?v=1789559926",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-064-BLK-D.GRY-F.O_04.webp?v=1789559927",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-064-BLK-D.GRY-F.O_05.webp?v=1789559926"
    ],
    "sizeInventory": {
      "Royal Blue": [
        {
          "sku": "3K-SD-064A-G-BLK-DGRY-FORG-6",
          "size": "6",
          "stock": 6
        },
        {
          "sku": "3K-SD-064A-G-BLK-DGRY-FORG-7",
          "size": "7",
          "stock": 9
        },
        {
          "sku": "3K-SD-064A-G-BLK-DGRY-FORG-8",
          "size": "8",
          "stock": 9
        },
        {
          "sku": "3K-SD-064A-G-BLK-DGRY-FORG-9",
          "size": "9",
          "stock": 9
        },
        {
          "sku": "3K-SD-064A-G-BLK-DGRY-FORG-10",
          "size": "10",
          "stock": 8
        }
      ]
    },
    "sourceCategory": "Men Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 25,
    "sourceProductId": "9719074029799",
    "waterResistance": "No",
    "shortDescription": "Sleek, Secure, And Soft On Your Feet—Campus 3K-Sd-064A Men's Sandals Deliver All-Day Ease. Designed With Lycra, These Velcro Sandals Adapts To Your Stride While Keeping It Breezy. ",
    "sourceProductUrl": "https://campusshoes.com/products/3k-sd-064a-blk-d-gry-f-org-mens-sandal",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-10335038734567",
    "mrp": 1874,
    "sku": "CA-22G-13531-G-OFFWHT-BLK-8",
    "use": "Walking",
    "code": "CAMPUS-10335038734567",
    "name": "SERVE CW White",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cloud White",
    "price": 1499,
    "sport": "Walking",
    "upper": "Knitting+Welding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_OFFWHT-BLK_04.webp?v=1791177857",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_OFFWHT-BLK_03.webp?v=1791177857",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_OFFWHT-BLK_02.jpg?v=1791177857",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_OFFWHT-BLK_05.webp?v=1791177857",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_OFFWHT-BLK_01.webp?v=1791177857"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "emp0",
      "men",
      "men shoes",
      "men walking shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "men",
      "men shoes",
      "men walking shoes",
      "mss",
      "new",
      "payday",
      "sale",
      "shoes",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "For the guy who likes his style understated, not unnoticed. The Campus SERVE CW Men's Walking Shoes pair a clean Off White base with subtle Plum detailing, giving the silhouette an element of interest. The sleek knitted upper keeps things polished, while the slip-on design makes them an easy choice when you don't want to overthink your outfit. Underfoot, the lightweight EVA midsole brings cushioned ease, with the Memory Insole and PilloFoam adding a plush layer of comfort. The padded collar finishes the fit nicely. Consider this your everyday upgrade. Occasion: Everyday Insole: Memory Insole Upper Material: Knitting+Welding Technology: Piillofoam Care Instructions: Gently scrub with a soft cloth or brush using mild soap and cold water, then air dry in the shade. Avoid bleach and harsh cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 120,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_OFFWHT-BLK_01.webp?v=1791177857",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_OFFWHT-BLK_02.jpg?v=1791177857",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_OFFWHT-BLK_03.webp?v=1791177857",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_OFFWHT-BLK_04.webp?v=1791177857",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_OFFWHT-BLK_05.webp?v=1791177857"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "22G-13531-G-OFFWHT-BLK-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "22G-13531-G-OFFWHT-BLK-7",
          "size": "7",
          "stock": 0
        },
        {
          "sku": "22G-13531-G-OFFWHT-BLK-8",
          "size": "8",
          "stock": 15
        },
        {
          "sku": "22G-13531-G-OFFWHT-BLK-9",
          "size": "9",
          "stock": 4
        },
        {
          "sku": "22G-13531-G-OFFWHT-BLK-10",
          "size": "10",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Walking Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "10335038734567",
    "waterResistance": "No",
    "shortDescription": "For the guy who likes his style understated, not unnoticed. The Campus SERVE CW Men's Walking Shoes pair a clean Off White base with subtle Plum detailing, giving the silhouette an",
    "sourceProductUrl": "https://campusshoes.com/products/serve-cw-off-wht-blk-mens-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9307568374011",
    "mrp": 5999,
    "sku": "SU-A18836C-7",
    "use": "Training",
    "code": "SUPERKICKS-9307568374011",
    "name": "ALL STAR CLASSIC TRAINER { WEEDS/WHITE/GUM",
    "sole": "Not specified",
    "brand": "CONVERSE",
    "color": "Cloud White",
    "price": 5099,
    "sport": "Training",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_ed2fe39e-7d78-42a5-99bd-eddde9c96587.jpg?v=1780921908",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_998f9108-632d-4dd0-84d0-41d1112a32e1.jpg?v=1780921908",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_5aa3fe2c-86ff-4b5a-bd29-8778b1e12d03.jpg?v=1780921908",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_c6bd9d5f-bfc9-4649-9687-6a7a47b5047c.jpg?v=1780921908",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_1d684f59-a1c7-43fb-84e3-4ee639492bd1.jpg?v=1780921908"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Training",
    "features": [
      "Suede upper with that signature Converse look and feel",
      "OrthoLite cushioning and an EVA midsole help provide optimal underfoot comfort",
      "Slim design kicks it back to a retro, '70s soccer look",
      "Gold All Star branding and the iconic Star Chevron rep the legacy"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "affiliate_5",
      "Brand - Converse",
      "Footwear",
      "For Footwear",
      "Franchise: Converse Others",
      "Gender - Men",
      "Low Profile Sneakers",
      "Low_Profile",
      "New Arrivals",
      "Newadss",
      "Newppadd",
      "NO-COD",
      "Non Hype",
      "Product Style: Lifestyle",
      "season: SS26",
      "ship@250",
      "Sneakers",
      "Under8K"
    ],
    "collections": [
      "Trending Now"
    ],
    "description": "FLAT-OUT CLASSIC Festival field, studio, street—no matter your arena, channel '70s soccer style in these classic trainers. Slimmed-down, this retro pair fuses the vintage sport look you love with the luxe feel of now. Suede upper with that signature Converse look and feel OrthoLite cushioning and an EVA midsole help provide optimal underfoot comfort Slim design kicks it back to a retro, '70s soccer look Gold All Star branding and the iconic Star Chevron rep the legacy",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 115,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_1d684f59-a1c7-43fb-84e3-4ee639492bd1.jpg?v=1780921908",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_5aa3fe2c-86ff-4b5a-bd29-8778b1e12d03.jpg?v=1780921908",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_998f9108-632d-4dd0-84d0-41d1112a32e1.jpg?v=1780921908",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_ed2fe39e-7d78-42a5-99bd-eddde9c96587.jpg?v=1780921908",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_c6bd9d5f-bfc9-4649-9687-6a7a47b5047c.jpg?v=1780921908"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "A18836C-7",
          "size": "7",
          "stock": 14
        },
        {
          "sku": "A18836C-8",
          "size": "8",
          "stock": 6
        },
        {
          "sku": "A18836C-9",
          "size": "9",
          "stock": 4
        },
        {
          "sku": "A18836C-10",
          "size": "10",
          "stock": 15
        },
        {
          "sku": "A18836C-11",
          "size": "11",
          "stock": 5
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 15,
    "sourceProductId": "9307568374011",
    "waterResistance": "No",
    "shortDescription": "FLAT-OUT CLASSIC Festival field, studio, street—no matter your arena, channel '70s soccer style in these classic trainers. Slimmed-down, this retro pair fuses the vintage sport loo",
    "sourceProductUrl": "https://www.superkicks.in/products/converse-all-star-classic-trainer-weeds-white-gum",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9428559331579",
    "mrp": 14369,
    "sku": "SU-DJ9158-200-7",
    "use": "Basketball",
    "code": "SUPERKICKS-9428559331579",
    "name": "AIR FORCE 1 MID '07  { FLAX/WHEAT-GUM LIGHT BROWN-BLACK",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Core Black",
    "price": 11495,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_068489e4-86ba-49c7-b6f1-a3a48456b059.jpg?v=1790155646",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_bd0105b7-eb11-4b7a-a642-6d96d99df0a2.jpg?v=1790155646",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_f4fd3aa5-9832-4e0e-b31f-99103f980b92.jpg?v=1790155646",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_475332e8-a7ec-4dcb-894a-a8d0e1d2eda0.jpg?v=1790155646",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_e4257529-c95c-4813-a25e-7cc4c3f1001b.jpg?v=1790155646"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.7,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Basketball",
    "features": [
      "Embroidered details",
      "Foam midsole",
      "Variable width lacing system",
      "Round laces",
      "Perforations on the toe"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Basketball Sneakers",
      "Brand - Nike",
      "Footwear",
      "Franchise: AIR FORCE 1",
      "Gender - Men",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD",
      "Sneakers",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "LEGENDARY AF1 STYLE. The Air Force 1 Mid '07 is everything you know best: crisp overlays, fresh accents, and the perfect details to let your shoe game shine. The padded, mid-height collar with classic hook-and-loop closure adds heritage b-ball comfort. Nike Air cushioning in the heel delivers performance comfort. For over 35 years it's been comfort and durability straight out of the box. From stitched overlays to pristine leather to the cupsole design, it's got you covered so you can wear them everywhere. Originally designed for performance hoops, the Air cushioning delivers lasting comfort. Classic hook-and-loop closure features metal hardware for a premium touch. Padded, mid-height collar adds comfortable and stability. Non-marking rubber outsole for traction and durability. More Details Embroidered details Foam midsole Variable width lacing system Round laces Perforations on the toe",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 47,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_e4257529-c95c-4813-a25e-7cc4c3f1001b.jpg?v=1790155646",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_f4fd3aa5-9832-4e0e-b31f-99103f980b92.jpg?v=1790155646",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_bd0105b7-eb11-4b7a-a642-6d96d99df0a2.jpg?v=1790155646",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_068489e4-86ba-49c7-b6f1-a3a48456b059.jpg?v=1790155646",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_475332e8-a7ec-4dcb-894a-a8d0e1d2eda0.jpg?v=1790155646"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "DJ9158-200-7",
          "size": "7",
          "stock": 7
        },
        {
          "sku": "DJ9158-200-8",
          "size": "8",
          "stock": 4
        },
        {
          "sku": "DJ9158-200-9",
          "size": "9",
          "stock": 7
        },
        {
          "sku": "DJ9158-200-10",
          "size": "10",
          "stock": 5
        },
        {
          "sku": "DJ9158-200-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Basketball Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "9428559331579",
    "waterResistance": "No",
    "shortDescription": "LEGENDARY AF1 STYLE. The Air Force 1 Mid '07 is everything you know best: crisp overlays, fresh accents, and the perfect details to let your shoe game shine. The padded, mid-height",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-air-force-1-mid-07-flax-wheat-gum-light-brown-black",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15408546578683",
    "mrp": 4869,
    "sku": "SU-IB7561-201-3.5",
    "use": "Slippers",
    "code": "SUPERKICKS-15408546578683",
    "name": "CALM 2.0  { MOON PARTICLE/MOON PARTICLE",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "3.5",
    "price": 3895,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "3.5",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_e28e8b70-ce64-4e17-a773-6eb6cf24e360.jpg?v=1791204202",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_5bb40674-33ad-4e76-8fd2-f4d71518213b.jpg?v=1791204202",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_be225614-41f9-46a3-aa0c-630f849bdf5f.jpg?v=1791204202",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_d62512cc-f348-43b5-960c-c920cda24110.jpg?v=1791204202",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_d62512cc-f348-43b5-960c-c920cda24110.jpg?v=1791204202"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Footwear",
      "Franchise: CALM SLIDE",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Nike",
      "Footwear",
      "Franchise: CALM SLIDE",
      "Gender - Women",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD",
      "Product Style: Slides & Clogs",
      "Season: FW26",
      "Slides and Sandals"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Think less. Feel more. The Calm Slide 2.0 uses an extra-forgiving solar foam for ultimate comfort while updated outsole cutouts provide more flexibility than the original. Textured footbed provides grip to help keep your foot in place. Outer shell is made from water-friendly foam that is easy to clean. Rubber outsole gives you optimal traction on slippery surfaces.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 57,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_d62512cc-f348-43b5-960c-c920cda24110.jpg?v=1791204202",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_be225614-41f9-46a3-aa0c-630f849bdf5f.jpg?v=1791204202",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_5bb40674-33ad-4e76-8fd2-f4d71518213b.jpg?v=1791204202",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_e28e8b70-ce64-4e17-a773-6eb6cf24e360.jpg?v=1791204202"
    ],
    "sizeInventory": {
      "3.5": [
        {
          "sku": "IB7561-201-3.5",
          "size": "3.5",
          "stock": 12
        },
        {
          "sku": "IB7561-201-4.5",
          "size": "4.5",
          "stock": 14
        },
        {
          "sku": "IB7561-201-5.5",
          "size": "5.5",
          "stock": 7
        },
        {
          "sku": "IB7561-201-6.5",
          "size": "6.5",
          "stock": 14
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15408546578683",
    "waterResistance": "No",
    "shortDescription": "Think less. Feel more. The Calm Slide 2.0 uses an extra-forgiving solar foam for ultimate comfort while updated outsole cutouts provide more flexibility than the original. Textured",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-calm-2-0-moon-particle-moon-particle",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15409038295291",
    "mrp": 18744,
    "sku": "SU-IV4311-101-4",
    "use": "Sneakers",
    "code": "SUPERKICKS-15409038295291",
    "name": "ZOOM VOMERO 5 { LT OREWOOD BRN/METALLIC GOLD-HEMP",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "4",
    "price": 14995,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "4",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/8_c61e59cf-4f3e-4d73-9016-17b54ec68b78.jpg?v=1791204786",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_b8f96b19-30b3-4991-949e-1405669e7927.jpg?v=1791204785",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_90c57d58-47f4-44e8-b0e1-360f92a846c0.jpg?v=1791204785",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_9cd6abfd-df60-4868-84aa-35269390c3d4.jpg?v=1791204786",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_69906697-f8c7-4b3d-8491-206abf17f180.jpg?v=1791204785"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Footwear",
      "Franchise: VOMERO 5",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Nike",
      "Footwear",
      "Franchise: VOMERO 5",
      "Gender - Women",
      "JORDAN-NIKE",
      "New Arrivals",
      "NO-COD",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "The Vomero 5 takes early 2000s running to modern heights. A combination of breathable and durable materials stands ready for the rigors of your day, while Air Zoom cushioning creates a smooth ride. Chrome accents take your favorite shoe to the next level. Leather and textile on the upper add durability. Air Zoom cushioning helps provide a quick-off-the-ground sensation. Plastic caging on the side adds support. Rubber outsole gives you durable traction. More Details Low-cut collar",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 36,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_69906697-f8c7-4b3d-8491-206abf17f180.jpg?v=1791204785",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_90c57d58-47f4-44e8-b0e1-360f92a846c0.jpg?v=1791204785",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_b8f96b19-30b3-4991-949e-1405669e7927.jpg?v=1791204785",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/8_c61e59cf-4f3e-4d73-9016-17b54ec68b78.jpg?v=1791204786",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_9cd6abfd-df60-4868-84aa-35269390c3d4.jpg?v=1791204786"
    ],
    "sizeInventory": {
      "4": [
        {
          "sku": "IV4311-101-4",
          "size": "4",
          "stock": 14
        },
        {
          "sku": "IV4311-101-5",
          "size": "5",
          "stock": 10
        },
        {
          "sku": "IV4311-101-6",
          "size": "6",
          "stock": 5
        },
        {
          "sku": "IV4311-101-7",
          "size": "7",
          "stock": 9
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15409038295291",
    "waterResistance": "No",
    "shortDescription": "The Vomero 5 takes early 2000s running to modern heights. A combination of breathable and durable materials stands ready for the rigors of your day, while Air Zoom cushioning creat",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-zoom-vomero-5-lt-orewood-brn-metallic-gold-hemp",
    "inventoryCountsAreExact": false
  },
  {
    "id": "redtape-9061099995326",
    "mrp": 12099,
    "sku": "RE-RWB0010B-36",
    "use": "Boots",
    "code": "REDTAPE-9061099995326",
    "name": "Women’s Brown Chelsea Boots",
    "sole": "Not specified",
    "brand": "RED TAPE",
    "color": "Cognac Tan",
    "price": 1936,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#78350f",
        "name": "Cognac Tan",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/4_f058d2d9-5966-46c6-8156-c1b133e506b3.jpg?v=1791280234",
          "back": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/3_e62809e0-773e-4760-b6c5-a24bd45b58c0.jpg?v=1791280235",
          "side": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/2_4d699d8a-2ca4-4780-8412-9e6072f75f22.jpg?v=1791280235",
          "sole": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/5_44de54e7-8545-4107-96d7-d220d6ddddf9.jpg?v=1791280235",
          "front": "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/1_d9bfcb51-ba86-4546-b832-1b969cbb6c60.jpg?v=1791280234"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Boots",
    "features": [
      "Leather Upper: Premium construction for durability and a refined finish.",
      "Chelsea Boot Design: Classic ankle-length silhouette for versatile styling.",
      "TPR Sole: Provides dependable grip, flexibility, and durable wear.",
      "Round Toe: Offers comfortable space for natural foot movement.",
      "1.5-Inch Heel: Adds subtle elevation while maintaining everyday comfort.",
      "Brown Colourway: Timeless shade for effortless casual styling."
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Boots",
      "Footwear",
      "Women"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Elevate your everyday style with the Red Tape women’s brown Chelsea boots, designed for refined casual wear and versatile styling. Crafted with a premium leather upper, these ankle-length boots offer a polished finish with dependable durability. The TPR sole provides reliable grip and flexibility, while the round toe supports comfortable foot movement. Finished with a 1.5-inch heel, these Chelsea boots add subtle elevation and pair effortlessly with jeans, trousers, skirts, and dresses. Features Leather Upper: Premium construction for durability and a refined finish. Chelsea Boot Design: Classic ankle-length silhouette for versatile styling. TPR Sole: Provides dependable grip, flexibility, and durable wear. Round Toe: Offers comfortable space for natural foot movement. 1.5-Inch Heel: Adds subtle elevation while maintaining everyday comfort. Brown Colourway: Timeless shade for effortless casual styling. Product Specification Material: Upper – Leather | Sole – TPR Design: Ankle-length Chelsea boot silhouette with a round toe for refined casual styling Heel: 1.5-inch heel adds subtle elevation with balanced support. Benefits: Leather upper and TPR sole combine durability, flexibility, and dependable grip. Utility: Ideal for casual outings, travel, dinners, weekend styling, and everyday wear.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "REDTAPE",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 120,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/1_d9bfcb51-ba86-4546-b832-1b969cbb6c60.jpg?v=1791280234",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/2_4d699d8a-2ca4-4780-8412-9e6072f75f22.jpg?v=1791280235",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/3_e62809e0-773e-4760-b6c5-a24bd45b58c0.jpg?v=1791280235",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/4_f058d2d9-5966-46c6-8156-c1b133e506b3.jpg?v=1791280234",
      "https://cdn.shopify.com/s/files/1/0642/7787/2830/files/5_44de54e7-8545-4107-96d7-d220d6ddddf9.jpg?v=1791280235"
    ],
    "sizeInventory": {
      "Cognac Tan": [
        {
          "sku": "RWB0010B-36",
          "size": "3",
          "stock": 6
        },
        {
          "sku": "RWB0010B-37",
          "size": "4",
          "stock": 15
        },
        {
          "sku": "RWB0010B-38",
          "size": "5",
          "stock": 8
        },
        {
          "sku": "RWB0010B-39",
          "size": "6",
          "stock": 7
        },
        {
          "sku": "RWB0010B-40",
          "size": "7",
          "stock": 4
        }
      ]
    },
    "sourceCategory": "Boots",
    "countryOfOrigin": "India",
    "discountPercent": 84,
    "sourceProductId": "9061099995326",
    "waterResistance": "Water Repellent",
    "shortDescription": "Elevate your everyday style with the Red Tape women’s brown Chelsea boots, designed for refined casual wear and versatile styling. Crafted with a premium leather upper, these ankle",
    "sourceProductUrl": "https://redtape.com/products/red-tape-womens-brown-chelsea-boots-leather-ankle-lengthboots-rwb0010b",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9692837183719",
    "mrp": 2874,
    "sku": "CA-ELAN-07-G-WHT-NAVY-6",
    "use": "Formal Shoes",
    "code": "CAMPUS-9692837183719",
    "name": "ELAN-07 White",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cloud White",
    "price": 2299,
    "sport": "Lifestyle",
    "upper": "Pu",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_WHT-NAVY_04.webp?v=1788435284",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_WHT-NAVY_03.webp?v=1788435284",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_WHT-NAVY_01.jpg?v=1788435284",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_WHT-NAVY_05.webp?v=1788435284",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_WHT-NAVY_02.webp?v=1788435284"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.9,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "emp0",
      "men"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "emp0",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Every Wardrobe Has One Non-Negotiable — A Piece Classic Enough To Anchor Everything Else, Distinctive Enough To Never Disappear Into It. The Campus Elan-07 Men'S Sneakers Make Their Case In A Crisp White Base, Layered With Cool Grey, Deep Navy, And A Flash Of Deep Red. Textured Overlays Lend The Smooth Pu Upper A Dimensional Finish, Sharpening The Silhouette Without Disrupting Its Clean, Considered Lines. Tpr Sole Grounds The Design, While A Latex & Pu Foam Die Cut Insole Brings A Soft, Deliberate Comfort Underfoot. Polished, Versatile, And Unmistakably Its Own — Exactly The Pair Your Wardrobe Keeps Clearing Space For. Occasion: Everyday Insole: Latex + Pu Foam Die Cut Upper Material: Pu Care Instructions: Wipe With A Damp Cloth And Mild Soapy Water, Then Pat Dry And Air Dry Naturally. Do Not Soak, Rinse Under Running Water, Or Expose To Direct Heat And Harsh Chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 32,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_WHT-NAVY_02.webp?v=1788435284",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_WHT-NAVY_01.jpg?v=1788435284",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_WHT-NAVY_03.webp?v=1788435284",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_WHT-NAVY_04.webp?v=1788435284",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_WHT-NAVY_05.webp?v=1788435284"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "ELAN-07-G-WHT-NAVY-6",
          "size": "6",
          "stock": 10
        },
        {
          "sku": "ELAN-07-G-WHT-NAVY-7",
          "size": "7",
          "stock": 0
        },
        {
          "sku": "ELAN-07-G-WHT-NAVY-8",
          "size": "8",
          "stock": 0
        },
        {
          "sku": "ELAN-07-G-WHT-NAVY-9",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "ELAN-07-G-WHT-NAVY-10",
          "size": "10",
          "stock": 0
        },
        {
          "sku": "ELAN-07-G-WHT-NAVY-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9692837183719",
    "waterResistance": "No",
    "shortDescription": "Every Wardrobe Has One Non-Negotiable — A Piece Classic Enough To Anchor Everything Else, Distinctive Enough To Never Disappear Into It. The Campus Elan-07 Men'S Sneakers Make Thei",
    "sourceProductUrl": "https://campusshoes.com/products/elan-07-wht-navy-mens-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9692837150951",
    "mrp": 2874,
    "sku": "CA-ELAN-07-G-IVORY-TAN-7",
    "use": "Casual Shoes",
    "code": "CAMPUS-9692837150951",
    "name": "ELAN-07 Off White",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Cloud White",
    "price": 2299,
    "sport": "Lifestyle",
    "upper": "Pu",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f4f1eb",
        "name": "Cloud White",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_IVORY-TAN_04.webp?v=1788435357",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_IVORY-TAN_03.webp?v=1788435357",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_IVORY-TAN_01.jpg?v=1788435357",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_IVORY-TAN_05.webp?v=1788435356",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_IVORY-TAN_02.webp?v=1788435357"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.9,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Casual Shoes",
    "features": [
      "bssfm",
      "cs",
      "elan",
      "emp0",
      "men"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "bssfm",
      "cs",
      "elan",
      "emp0",
      "men",
      "Men & Women Casual Shoes",
      "men casual shoes",
      "men shoes",
      "mss",
      "new",
      "payday",
      "shoes",
      "topseller",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Meet Campus Elan-07 Men'S Sneakers, Cast In An Earthy Ivory And Tan, Embodying That Clean, Refined Silhouette With The Quiet Assurance Of A Well-Edited Wardrobe. Textured Overlays Trace The Smooth Pu Upper With Subtle Dimension, While The Classic Shape Keeps Every Line Considered, Nothing Overstated. Underfoot, Tpr Sole And A Cushioned Latex & Pu Foam Die Cut Insole Take Comfort Up A Notch — Nothing Performative, Everything Intentional. Worn With Relaxed Trousers, A Crisp Shirt, Or Your Most Reliable Denim, This Is Quiet Luxury, Rendered One Step At A Time. Occasion: Everyday Insole: Latex + Pu Foam Die Cut Upper Material: Pu Care Instructions: Wipe With A Damp Cloth And Mild Soapy Water, Then Pat Dry And Air Dry Naturally. Do Not Soak, Rinse Under Running Water, Or Expose To Direct Heat And Harsh Chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 95,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_IVORY-TAN_02.webp?v=1788435357",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_IVORY-TAN_01.jpg?v=1788435357",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_IVORY-TAN_03.webp?v=1788435357",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_IVORY-TAN_04.webp?v=1788435357",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ELAN-07_ELAN-07_IVORY-TAN_05.webp?v=1788435356"
    ],
    "sizeInventory": {
      "Cloud White": [
        {
          "sku": "ELAN-07-G-IVORY-TAN-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "ELAN-07-G-IVORY-TAN-7",
          "size": "7",
          "stock": 12
        },
        {
          "sku": "ELAN-07-G-IVORY-TAN-8",
          "size": "8",
          "stock": 8
        },
        {
          "sku": "ELAN-07-G-IVORY-TAN-9",
          "size": "9",
          "stock": 9
        },
        {
          "sku": "ELAN-07-G-IVORY-TAN-10",
          "size": "10",
          "stock": 14
        },
        {
          "sku": "ELAN-07-G-IVORY-TAN-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Casual Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9692837150951",
    "waterResistance": "No",
    "shortDescription": "Meet Campus Elan-07 Men'S Sneakers, Cast In An Earthy Ivory And Tan, Embodying That Clean, Refined Silhouette With The Quiet Assurance Of A Well-Edited Wardrobe. Textured Overlays ",
    "sourceProductUrl": "https://campusshoes.com/products/elan-07-ivory-tan-mens-sneakers",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719074095335",
    "mrp": 1686,
    "sku": "CA-22C-185-C-NAVY-LSKY-2",
    "use": "Running",
    "code": "CAMPUS-9719074095335",
    "name": "ALLIAN-CH Navy",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Deep Navy",
    "price": 1349,
    "sport": "Running",
    "upper": "Mesh+Pvc+Buckle",
    "width": "Medium",
    "colors": [
      {
        "hex": "#1f2937",
        "name": "Deep Navy",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ALLIAN-CH_22C-185_NAVY-LSKY_04.webp?v=1789559856",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ALLIAN-CH_22C-185_NAVY-LSKY_03.webp?v=1789559855",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ALLIAN-CH_22C-185_NAVY-LSKY_02.jpg?v=1789559856",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ALLIAN-CH_22C-185_NAVY-LSKY_05.webp?v=1789559855",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ALLIAN-CH_22C-185_NAVY-LSKY_01.webp?v=1789559855"
        }
      }
    ],
    "gender": "Kids",
    "isSale": true,
    "rating": 4.8,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Running",
    "features": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "Kids",
      "Kids running shoes",
      "Kids shoes",
      "payday",
      "sale",
      "shshoes",
      "wyv"
    ],
    "collections": [
      "Running Collection",
      "Sale"
    ],
    "description": "Ready, Set, Zoom! Campus Allian-Ch Running Shoes Bring High-Energy Style To Everyday Action. The Upper Features Breathable Mesh With Sturdy Pvc, Striking Apt Balance Between Airy Comfort And Protective Support. The Eva Midsole Keeps Every Step Light And Flexible, While The Memory Insole Adds Adaptive Cushioning That Treats Their Feet To Personalised All-Day Comfort. The Navy Base Makes For A Sporty, Versatile Pick, While Light Sky And Red Accents Add A Bright, Playful Twist — Fun, Dynamic, And Full Of Personality. Occasion: Everyday Insole: Memory Insole Upper Material: Mesh+Pvc+Buckle Technology: Anti Slip Sole Design Care Instructions: Gently Scrub With A Soft Cloth Or Brush Using Mild Soap And Cold Water, Then Air Dry In The Shade. Avoid Bleach And Harsh Cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.6,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 39,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ALLIAN-CH_22C-185_NAVY-LSKY_01.webp?v=1789559855",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ALLIAN-CH_22C-185_NAVY-LSKY_02.jpg?v=1789559856",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ALLIAN-CH_22C-185_NAVY-LSKY_03.webp?v=1789559855",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ALLIAN-CH_22C-185_NAVY-LSKY_04.webp?v=1789559856",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/ALLIAN-CH_22C-185_NAVY-LSKY_05.webp?v=1789559855"
    ],
    "sizeInventory": {
      "Deep Navy": [
        {
          "sku": "22C-185-C-NAVY-LSKY-2",
          "size": "2",
          "stock": 6
        },
        {
          "sku": "22C-185-C-NAVY-LSKY-3",
          "size": "3",
          "stock": 13
        },
        {
          "sku": "22C-185-C-NAVY-LSKY-4",
          "size": "4",
          "stock": 4
        },
        {
          "sku": "22C-185-C-NAVY-LSKY-5",
          "size": "5",
          "stock": 10
        }
      ]
    },
    "sourceCategory": "Kids Running Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "9719074095335",
    "waterResistance": "No",
    "shortDescription": "Ready, Set, Zoom! Campus Allian-Ch Running Shoes Bring High-Energy Style To Everyday Action. The Upper Features Breathable Mesh With Sturdy Pvc, Striking Apt Balance Between Airy C",
    "sourceProductUrl": "https://campusshoes.com/products/allian-ch-navy-l-sky-child-running-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-9719073964263",
    "mrp": 899,
    "sku": "CA-3K-SD-055B-G-RUST-LBEIGE-6",
    "use": "Sandals",
    "code": "CAMPUS-9719073964263",
    "name": "3K-SD-055B Red",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Crimson Red",
    "price": 694,
    "sport": "Lifestyle",
    "upper": "Pvc+Printing+Lycra",
    "width": "Medium",
    "colors": [
      {
        "hex": "#dc2626",
        "name": "Crimson Red",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-055-G-RUST-LBEIGE-4.webp?v=1789560000",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-055-G-RUST-LBEIGE-3.webp?v=1789560001",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-055-G-RUST-LBEIGE-2.webp?v=1789560000",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-055-G-RUST-LBEIGE-5.webp?v=1789560000",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-055-G-RUST-LBEIGE-1.jpg?v=1789560001"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.4,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sandals",
    "features": [
      "cs",
      "emp0",
      "fs",
      "men",
      "men sandal casual"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "fs",
      "men",
      "men sandal casual",
      "men sandals & floaters",
      "men sandals & slippers",
      "mss",
      "nys",
      "payday",
      "s&s",
      "sss",
      "topseller"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Bright, Bold, And Beach-Day Ready. Campus 3K-Sd-055B Men’S Sandals Blend Comfort-Focused Lycra With Printed Pvc For A Look That’S Casual But Never Boring. Lightweight Eva & Tpr Sole And Anti-Slip Sole Design Ot Keep You Steady, This Pair Brings The Vibes—And The Versatility. Occasion: Everyday Upper Material: Pvc+Printing+Lycra Technology: Anti Slip Sole Design Care Instructions: Wipe With A Damp Cloth And Mild Soapy Water, Then Pat Dry And Air Dry Naturally. Do Not Soak, Rinse Under Running Water, Or Expose To Direct Heat And Harsh Chemicals. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Sandals",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 46,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-055-G-RUST-LBEIGE-1.jpg?v=1789560001",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-055-G-RUST-LBEIGE-2.webp?v=1789560000",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-055-G-RUST-LBEIGE-3.webp?v=1789560001",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-055-G-RUST-LBEIGE-4.webp?v=1789560000",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/3K-SD-055-G-RUST-LBEIGE-5.webp?v=1789560000"
    ],
    "sizeInventory": {
      "Crimson Red": [
        {
          "sku": "3K-SD-055B-G-RUST-LBEIGE-6",
          "size": "6",
          "stock": 7
        },
        {
          "sku": "3K-SD-055B-G-RUST-LBEIGE-7",
          "size": "7",
          "stock": 8
        },
        {
          "sku": "3K-SD-055B-G-RUST-LBEIGE-8",
          "size": "8",
          "stock": 4
        },
        {
          "sku": "3K-SD-055B-G-RUST-LBEIGE-9",
          "size": "9",
          "stock": 4
        },
        {
          "sku": "3K-SD-055B-G-RUST-LBEIGE-10",
          "size": "10",
          "stock": 15
        }
      ]
    },
    "sourceCategory": "Men Sandals & Floaters",
    "countryOfOrigin": "India",
    "discountPercent": 23,
    "sourceProductId": "9719073964263",
    "waterResistance": "No",
    "shortDescription": "Bright, Bold, And Beach-Day Ready. Campus 3K-Sd-055B Men’S Sandals Blend Comfort-Focused Lycra With Printed Pvc For A Look That’S Casual But Never Boring. Lightweight Eva & Tpr Sol",
    "sourceProductUrl": "https://campusshoes.com/products/3k-sd-055b-rust-l-beige-mens-sandal",
    "inventoryCountsAreExact": false
  },
  {
    "id": "campus-10335038505191",
    "mrp": 1874,
    "sku": "CA-22G-13531-G-BLK-FGRN-8",
    "use": "Walking",
    "code": "CAMPUS-10335038505191",
    "name": "SERVE CW Black",
    "sole": "Not specified",
    "brand": "CAMPUS",
    "color": "Core Black",
    "price": 1499,
    "sport": "Walking",
    "upper": "Knitting+Welding",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_BLK-FGRN_04.webp?v=1791178056",
          "back": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_BLK-FGRN_03.webp?v=1791178056",
          "side": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_BLK-FGRN_02.jpg?v=1791178056",
          "sole": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_BLK-FGRN_05.webp?v=1791178056",
          "front": "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_BLK-FGRN_01.webp?v=1791178056"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Walking",
    "features": [
      "cs",
      "emp0",
      "men",
      "men shoes",
      "men walking shoes"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "cs",
      "emp0",
      "men",
      "men shoes",
      "men walking shoes",
      "mss",
      "new",
      "payday",
      "sale",
      "shoes",
      "wyv"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "When less is more. The Campus SERVE CW Men's Walking Shoes keep things sharp with a deep Black base and barely-there hits of Forest Green. The clean knitted upper gives the slip-on silhouette a sleek, contemporary finish, making it an easy match for everything from joggers to chinos. A thick, lightweight EVA midsole brings a soft, cushioned feel, while the Memory Insole and PilloFoam add another level of underfoot comfort. Finished with a padded collar, this is the kind of pair that quietly becomes your most-worn. Occasion: Everyday Insole: Memory Insole Upper Material: Knitting+Welding Technology: Piillofoam Care Instructions: Gently scrub with a soft cloth or brush using mild soap and cold water, then air dry in the shade. Avoid bleach and harsh cleaners. Manufactured and Marketed by: Campus Activewear Ltd. D1, Udyog Nagar, Main Rohtak Road, New Delhi, Delhi,110041 Country of Origin: India Net Qty: 1 Pair of Shoes",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "CAMPUS",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 44,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_BLK-FGRN_01.webp?v=1791178056",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_BLK-FGRN_02.jpg?v=1791178056",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_BLK-FGRN_03.webp?v=1791178056",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_BLK-FGRN_04.webp?v=1791178056",
      "https://cdn.shopify.com/s/files/1/0607/6678/1671/files/SERVECW_22G-13531_BLK-FGRN_05.webp?v=1791178056"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "22G-13531-G-BLK-FGRN-6",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "22G-13531-G-BLK-FGRN-7",
          "size": "7",
          "stock": 0
        },
        {
          "sku": "22G-13531-G-BLK-FGRN-8",
          "size": "8",
          "stock": 13
        },
        {
          "sku": "22G-13531-G-BLK-FGRN-9",
          "size": "9",
          "stock": 13
        },
        {
          "sku": "22G-13531-G-BLK-FGRN-10",
          "size": "10",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Men Walking Shoes",
    "countryOfOrigin": "India",
    "discountPercent": 20,
    "sourceProductId": "10335038505191",
    "waterResistance": "No",
    "shortDescription": "When less is more. The Campus SERVE CW Men's Walking Shoes keep things sharp with a deep Black base and barely-there hits of Forest Green. The clean knitted upper gives the slip-on",
    "sourceProductUrl": "https://campusshoes.com/products/serve-cw-blk-f-grn-mens-walking-shoes",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-9346604990715",
    "mrp": 15295,
    "sku": "SU-IH2047-003-7",
    "use": "Training",
    "code": "SUPERKICKS-9346604990715",
    "name": "SIXTY PLUS LOW { BLACK/GYM RED-WHITE",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Core Black",
    "price": 13765,
    "sport": "Training",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_94132740-626a-419d-961b-8da33a3a84e9.jpg?v=1781615449",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_31dd3afc-ec61-4b9e-83bc-34b2484fbff9.jpg?v=1781615449",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_6328126a-051d-471f-8d94-c9add089cb05.jpg?v=1781615449",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_a031bbef-e446-4f04-9e34-6181eba8c6eb.jpg?v=1781615449",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_9063619a-0f33-442f-9228-a1309fb713f5.jpg?v=1781615449"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.3,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Training",
    "features": [
      "Footwear",
      "For Footwear",
      "Franchise: SIXTY PLUS",
      "free-delivery",
      "Fresh Arrivals"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Jordan",
      "Footwear",
      "For Footwear",
      "Franchise: SIXTY PLUS",
      "free-delivery",
      "Fresh Arrivals",
      "Gender - Men",
      "Jordan Footwear",
      "JORDAN-NIKE",
      "New Arrivals",
      "Newadss",
      "NO-COD",
      "Product Style: Iconic Classics",
      "season: SS26",
      "Sneakers",
      "trending footwear"
    ],
    "collections": [
      "Trending Now"
    ],
    "description": "The Sixty Plus is back in low-top form, combining the four classic Jordans that MJ wore during his five 60-plus point games. What you end up with is a sneaker that channels greatness through iconic details, celebrating the GOAT's legacy. Real and synthetic leather in the upper helps add durability and structure. Plush and comfortable, Max Air cushioning has just the right amount of support. Rubber in the outsole helps give you durable traction. More Details Not intended for use as Personal Protective Equipment (PPE)",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 92,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_9063619a-0f33-442f-9228-a1309fb713f5.jpg?v=1781615449",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_6328126a-051d-471f-8d94-c9add089cb05.jpg?v=1781615449",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_31dd3afc-ec61-4b9e-83bc-34b2484fbff9.jpg?v=1781615449",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_94132740-626a-419d-961b-8da33a3a84e9.jpg?v=1781615449",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/6_a031bbef-e446-4f04-9e34-6181eba8c6eb.jpg?v=1781615449"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "IH2047-003-7",
          "size": "7",
          "stock": 4
        },
        {
          "sku": "IH2047-003-8",
          "size": "8",
          "stock": 15
        },
        {
          "sku": "IH2047-003-9",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "IH2047-003-10",
          "size": "10",
          "stock": 0
        },
        {
          "sku": "IH2047-003-11",
          "size": "11",
          "stock": 6
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 10,
    "sourceProductId": "9346604990715",
    "waterResistance": "No",
    "shortDescription": "The Sixty Plus is back in low-top form, combining the four classic Jordans that MJ wore during his five 60-plus point games. What you end up with is a sneaker that channels greatne",
    "sourceProductUrl": "https://www.superkicks.in/products/jordan-sixty-plus-low-black-gym-red-white",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15396495753467",
    "mrp": 13749,
    "sku": "SU-LA6317-7",
    "use": "Basketball",
    "code": "SUPERKICKS-15396495753467",
    "name": "CRAZY ENERGY { CBLACK/CBLACK/IMPORA",
    "sole": "Not specified",
    "brand": "ADIDAS",
    "color": "7",
    "price": 10999,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6b7280",
        "name": "7",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_8fe00fd3-a400-4446-bdb9-008c31dedc65.jpg?v=1790683188",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_3f514781-4bd4-404b-a79a-1b6468db50cf.jpg?v=1790683188",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_4604824a-513c-407f-8737-a58f27a09ddf.jpg?v=1790683188",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_598bf240-a5be-4663-bf93-b979b91e258c.jpg?v=1790683188",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_f39c3c7a-28e7-4b48-b225-709206f05413.jpg?v=1790683188"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Basketball",
    "features": [
      "Basketball Sneakers",
      "Footwear",
      "Franchise - Crazy Energy",
      "New Arrivals",
      "NO-COD"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Basketball Sneakers",
      "Brand - Adidas",
      "Footwear",
      "Franchise - Crazy Energy",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "The adidas Crazy Energy trainer brings a breath of fresh air to your basketball game and your street style. With its dynamic design and low-top silhouette, you’ll be ready to shine both on the court and around town.The synthetic upper ensures a lightweight and flexible fit that gives you complete freedom of movement. The standard lacing keeps your foot securely in place, whilst the Crazy Energy technology gives you that extra boost for explosive moves. Whether you’re dunking or chilling with your mates, this shoe is your trusty companion. Get the adidas Crazy Energy trainers and experience how performance and style complement each other perfectly. Click ‘Add to basket’ now and take your basketball and streetwear collection to the next level.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 69,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_f39c3c7a-28e7-4b48-b225-709206f05413.jpg?v=1790683188",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_4604824a-513c-407f-8737-a58f27a09ddf.jpg?v=1790683188",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_3f514781-4bd4-404b-a79a-1b6468db50cf.jpg?v=1790683188",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_8fe00fd3-a400-4446-bdb9-008c31dedc65.jpg?v=1790683188",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_598bf240-a5be-4663-bf93-b979b91e258c.jpg?v=1790683188"
    ],
    "sizeInventory": {
      "7": [
        {
          "sku": "LA6317-7",
          "size": "7",
          "stock": 9
        },
        {
          "sku": "LA6317-8",
          "size": "8",
          "stock": 5
        },
        {
          "sku": "LA6317-9",
          "size": "9",
          "stock": 7
        },
        {
          "sku": "LA6317-10",
          "size": "10",
          "stock": 11
        },
        {
          "sku": "LA6317-11",
          "size": "11",
          "stock": 6
        },
        {
          "sku": "LA6317-12",
          "size": "12",
          "stock": 8
        }
      ]
    },
    "sourceCategory": "Basketball Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15396495753467",
    "waterResistance": "No",
    "shortDescription": "The adidas Crazy Energy trainer brings a breath of fresh air to your basketball game and your street style. With its dynamic design and low-top silhouette, you’ll be ready to shine",
    "sourceProductUrl": "https://www.superkicks.in/products/adidas-crazy-energy-cblack-cblack-impora",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15409939677435",
    "mrp": 7119,
    "sku": "SU-HV5060-008-7",
    "use": "Slippers",
    "code": "SUPERKICKS-15409939677435",
    "name": "REACT X REJUVEN8 { SMOKEY BLUE/BLACK",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Core Black",
    "price": 5695,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#141312",
        "name": "Core Black",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_9edb6d3c-22a6-42eb-9a27-cd7f0a903a91.jpg?v=1791269169",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_5eb5ec28-afe7-409d-8510-8351c238ab77.jpg?v=1791269169",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_cc179980-10aa-4694-93cc-7ab82c481c2e.jpg?v=1791269169",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_4df8c4b8-0751-429b-ba8a-6d98fadb2751.jpg?v=1791269169",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_441e4a2a-5fc1-46b4-9d46-243e11340cd6.jpg?v=1791269169"
        }
      }
    ],
    "gender": "Men",
    "isSale": true,
    "rating": 4.3,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Slippers",
    "features": [
      "Footwear",
      "Franchise : REJUVEN8",
      "New Arrivals",
      "NO-COD",
      "ship@250"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Nike",
      "Footwear",
      "Franchise : REJUVEN8",
      "Gender - Men",
      "New Arrivals",
      "NO-COD",
      "Season: FW26",
      "ship@250",
      "Slides & Sandals",
      "STAYVISTA15"
    ],
    "collections": [
      "Trending Now",
      "Sale"
    ],
    "description": "Give your feet a rest. Made with soft and responsive ReactX foam, the Rejuven8 uses some of our best tech to create a recovery shoe so comfortable you'll want to wear it every day. ReactX upper and midsole surround your feet in soft, responsive comfort. Sticky rubber outsole adds grip even on slick surfaces. Extra room at the forefoot helps accommodate various foot widths. Ventilation holes help allow for breathability.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 113,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_441e4a2a-5fc1-46b4-9d46-243e11340cd6.jpg?v=1791269169",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_cc179980-10aa-4694-93cc-7ab82c481c2e.jpg?v=1791269169",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_5eb5ec28-afe7-409d-8510-8351c238ab77.jpg?v=1791269169",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_9edb6d3c-22a6-42eb-9a27-cd7f0a903a91.jpg?v=1791269169",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/5_4df8c4b8-0751-429b-ba8a-6d98fadb2751.jpg?v=1791269169"
    ],
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "HV5060-008-7",
          "size": "7",
          "stock": 4
        },
        {
          "sku": "HV5060-008-8",
          "size": "8",
          "stock": 12
        },
        {
          "sku": "HV5060-008-9",
          "size": "9",
          "stock": 13
        },
        {
          "sku": "HV5060-008-10",
          "size": "10",
          "stock": 11
        },
        {
          "sku": "HV5060-008-11",
          "size": "11",
          "stock": 11
        }
      ]
    },
    "sourceCategory": "Slides & Clogs",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15409939677435",
    "waterResistance": "No",
    "shortDescription": "Give your feet a rest. Made with soft and responsive ReactX foam, the Rejuven8 uses some of our best tech to create a recovery shoe so comfortable you'll want to wear it every day.",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-react-x-rejuven8-smokey-blue-black",
    "inventoryCountsAreExact": false
  },
  {
    "id": "superkicks-15397711741179",
    "mrp": 14869,
    "sku": "SU-HM5737-004-4.5",
    "use": "Sneakers",
    "code": "SUPERKICKS-15397711741179",
    "name": "AIR RIFT { WOLF GREY/WOLF GREY-PURE PLATINUM",
    "sole": "Not specified",
    "brand": "NIKE",
    "color": "Concrete Grey",
    "price": 11895,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Medium",
    "colors": [
      {
        "hex": "#8a8885",
        "name": "Concrete Grey",
        "images": {
          "top": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_7a176585-0eaa-42c3-87c0-88ad911c1a63.jpg?v=1791205303",
          "back": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_2157510d-bedb-4631-a264-a23f64e60a45.jpg?v=1791205303",
          "side": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_ebda9cfc-e4c6-4c63-8cb3-fb981456a065.jpg?v=1791205303",
          "sole": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_54b869a5-f2b8-4b47-9479-bda133890107.jpg?v=1791205303",
          "front": "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_1_fa61f7fa-2b87-4b5c-8659-b80743a0c0b1.jpg?v=1791205303"
        }
      }
    ],
    "gender": "Women",
    "isSale": true,
    "rating": 4.6,
    "weight": "310g",
    "closure": "Not specified",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "features": [
      "Footwear",
      "Franchise: AIR RIFT",
      "JORDAN-NIKE",
      "New Arrivals",
      "Newadss"
    ],
    "occasion": "Athletic, Street & Everyday Wear",
    "warranty": "6 Months Manufacturer Warranty",
    "sizeSystem": "US",
    "sourceTags": [
      "Brand - Nike",
      "Footwear",
      "Franchise: AIR RIFT",
      "Gender - Women",
      "JORDAN-NIKE",
      "New Arrivals",
      "Newadss",
      "Season: FW26",
      "Sneakers"
    ],
    "collections": [
      "Trending Now",
      "Sale",
      "Streetwear"
    ],
    "description": "When you want to be barefoot but you need a shoe, go with the Air Rift. Adjustable straps let you easily slide in and customize the fit. The split-toe design, based on the '96 original, helps your feet feel like they're wearing nothing at all. Nike Air cushioning and a rubber sole provide comfort and traction wherever you go. Leather upper is smooth and durable. Hook-and-loop straps at the midfoot and heel give you a personalized fit. Nike Air unit in the heel combines with plush foam for a soft feel. Rubber detailing on the outsole features rugged tread for added durability and traction.",
    "recommended": "True to size. Order your standard shoe size.",
    "sourceStore": "SUPERKICKS",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 133,
    "isLimitedDrop": false,
    "productImages": [
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_1_fa61f7fa-2b87-4b5c-8659-b80743a0c0b1.jpg?v=1791205303",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/3_ebda9cfc-e4c6-4c63-8cb3-fb981456a065.jpg?v=1791205303",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/2_2157510d-bedb-4631-a264-a23f64e60a45.jpg?v=1791205303",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/4_7a176585-0eaa-42c3-87c0-88ad911c1a63.jpg?v=1791205303",
      "https://cdn.shopify.com/s/files/1/0659/0722/8923/files/1_54b869a5-f2b8-4b47-9479-bda133890107.jpg?v=1791205303"
    ],
    "sizeInventory": {
      "Concrete Grey": [
        {
          "sku": "HM5737-004-3.3",
          "size": "3.5",
          "stock": 0
        },
        {
          "sku": "HM5737-004-4.5",
          "size": "4.5",
          "stock": 13
        },
        {
          "sku": "HM5737-004-5.5",
          "size": "5.5",
          "stock": 10
        },
        {
          "sku": "HM5737-004-6.5",
          "size": "6.5",
          "stock": 11
        },
        {
          "sku": "HM5737-004-7.5",
          "size": "7.5",
          "stock": 0
        }
      ]
    },
    "sourceCategory": "Lifestyle Sneakers",
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "sourceProductId": "15397711741179",
    "waterResistance": "No",
    "shortDescription": "When you want to be barefoot but you need a shoe, go with the Air Rift. Adjustable straps let you easily slide in and customize the fit. The split-toe design, based on the '96 orig",
    "sourceProductUrl": "https://www.superkicks.in/products/nike-air-rift-wolf-grey-wolf-grey-pure-platinum",
    "inventoryCountsAreExact": false
  },
  {
    "id": "fl-i7278001",
    "mrp": 11083.57,
    "sku": "I7278001",
    "use": "Walking",
    "code": "I7278001",
    "name": "Nike Motiva 2",
    "sole": "ng-ready shoes feature Comfortgroove innovation on the outsole to absorb impacts and offer a smoother ride",
    "tags": [
      "NIKE",
      "Walking",
      "Women",
      "Walking"
    ],
    "brand": "NIKE",
    "model": "Nike Motiva 2",
    "price": 11083.57,
    "sport": "Walking",
    "upper": "mesh upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Pure Platinum/White/Black",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/I7278001_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/I7278001_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/I7278001_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/I7278001_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/I7278001_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/I7278001_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/I7278001_01"
        }
      }
    ],
    "gender": "Women",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Walking",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 115,
    "sourceUrl": "https://www.footlocker.com/product/~/I7278001.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Make every stride feel like a stroll on the clouds with the Nike Motiva. These walking-ready shoes feature Comfortgroove innovation on the outsole to absorb impacts and offer a smoother ride. Built with a layered mesh upper for maximum breathability and a roomier forefoot, these sneakers ensure you stay comfortable from your morning walk to your evening errands.Layered mesh upper enhances airflow and breathabilityComfortgroove outsole technology compresses to absorb bumpsCloud-like foam midsole delivers exceptional underfoot cushioningWider forefoot and arch area provide a comfortable and relaxed fitRound toe design and mid-vamp coverage support natural movementLace closure ensures a secure and adjustable fitNike logo details on the side and heel for authentic brand styleMaterial & CareFabric and synthetic upperFoam midsoleRubber outsoleSize & FitStandard toe widthAdded room in the foref",
    "recommended": "Not specified",
    "sourcePrice": 115,
    "sourceSizes": [
      "5.0",
      "5.5",
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Pure Platinum/White/Black": [
        {
          "sku": "I7278001",
          "size": "5.0",
          "stock": 0
        },
        {
          "sku": "I7278001",
          "size": "5.5",
          "stock": 0
        },
        {
          "sku": "I7278001",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "I7278001",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "I7278001",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "I7278001",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "I7278001",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "I7278001",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "I7278001",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "I7278001",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "I7278001",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "I7278001",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "I7278001",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "I7278001",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "I7278001",
          "size": "12.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/I7278001_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Motiva 2 - Women's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "480517"
  },
  {
    "id": "fl-pu418101",
    "mrp": 8674.1,
    "sku": "PU418101",
    "use": "Lifestyle",
    "code": "PU418101",
    "name": "PUMA Suede Classic",
    "sole": "Rubber midsole supplies cushioning designed to keep you moving in comfort",
    "tags": [
      "PUMA",
      "Sneakers",
      "Men",
      "Lifestyle"
    ],
    "brand": "PUMA",
    "model": "PUMA Suede Classic",
    "price": 8674.1,
    "sport": "Lifestyle",
    "upper": "Suede upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/White",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/PU418101_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/PU418101_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/PU418101_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/PU418101_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/PU418101_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/PU418101_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/PU418101_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Sneakers",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 90,
    "sourceUrl": "https://www.footlocker.com/product/~/PU418101.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Step into the most popular PUMA shoes of all-time with these men’s PUMA Suede Classic sneakers. From basketball to hip hop, these sneakers have earned their place as classic and recognizable. Featuring modern design enhancements with iconic old-school style these versatile shoes are perfect for everything from a casual day with friends to an eventful night out. Suede upper with rubber toe-box creates the classic PUMA look.Sockliner and padded collar provide the utmost comfort and support for all-day wear.Rubber midsole supplies cushioning designed to keep you moving in comfort.Rubber outsole enhances traction and durability.",
    "recommended": "Not specified",
    "sourcePrice": 90,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "13.0",
      "14.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/White": [
        {
          "sku": "PU418101",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "PU418101",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "PU418101",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "PU418101",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "PU418101",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "PU418101",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "PU418101",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "PU418101",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "PU418101",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "PU418101",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "PU418101",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "PU418101",
          "size": "14.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/PU418101_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "PUMA Suede Classic - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "201190"
  },
  {
    "id": "fl-hq8708",
    "mrp": 10601.67,
    "sku": "HQ8708",
    "use": "Lifestyle",
    "code": "HQ8708",
    "name": "adidas Originals Campus 00s",
    "sole": "Boasting an off-white midsole, the adidas Originals Campus 00s lets you rep the ever-evolving Campus legacy with pride",
    "tags": [
      "ADIDAS",
      "Sneakers",
      "Men",
      "Lifestyle"
    ],
    "brand": "ADIDAS",
    "model": "adidas Originals Campus 00s",
    "price": 10601.67,
    "sport": "Lifestyle",
    "upper": "leather upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Off White/Cloud White/Core Black",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/HQ8708_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/HQ8708_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/HQ8708_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/HQ8708_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/HQ8708_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/HQ8708_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/HQ8708_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Sneakers",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 110,
    "sourceUrl": "https://www.footlocker.com/product/~/HQ8708.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Take your sneaker game to new heights with the adidas Originals Campus 00s. Designed for the hardwood, the Campus shoes took no time to adapt and rule over the street-style scene. The iconic sneakers are back with modern materials, colors, and proportions to take you on a nostalgic journey elevated with contemporary charm. Featuring a premium leather upper lined with soft textile terry fabric, these sneakers turn everything you wear into a style statement. Boasting an off-white midsole, the adidas Originals Campus 00s lets you rep the ever-evolving Campus legacy with pride. adidas Originals Campus 00s features: Regular fit allows a relaxed and easy feel. Lace closure ensures a secure fit. Rubber outsole delivers superior traction and durability.",
    "recommended": "Not specified",
    "sourcePrice": 110,
    "sourceSizes": [
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "13.5",
      "14.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Off White/Cloud White/Core Black": [
        {
          "sku": "HQ8708",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "13.5",
          "stock": 0
        },
        {
          "sku": "HQ8708",
          "size": "14.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/HQ8708_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "adidas Originals Campus 00s - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "390171"
  },
  {
    "id": "fl-js1402",
    "mrp": 12529.25,
    "sku": "JS1402",
    "use": "Lifestyle",
    "code": "JS1402",
    "name": "adidas Originals Gazelle Indoor",
    "sole": "soft suede texture, heritage adidas details, and a gum outsole that keeps the finish clean and iconic",
    "tags": [
      "ADIDAS",
      "Sneakers",
      "Women",
      "Lifestyle"
    ],
    "brand": "ADIDAS",
    "model": "adidas Originals Gazelle Indoor",
    "price": 11565.46,
    "sport": "Lifestyle",
    "upper": "suede upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#f2f1eb",
        "name": "Better Scarlet/Cream White",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/JS1402_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/JS1402_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/JS1402_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/JS1402_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/JS1402_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/JS1402_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/JS1402_01"
        }
      }
    ],
    "gender": "Women",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Sneakers",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 130,
    "sourceUrl": "https://www.footlocker.com/product/~/JS1402.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Feel the classic street vibes with the adidas Gazelle Indoors. Featuring golden colour and clean design, these sneakers keep your look timeless, letting you be the showstopper in any setting. Hit the streets in style with the adidas Gazelle indoors. Regular fit provides comfort. Signature Gazelle branding offers an iconic look. Retro style gets an easy everyday update with the adidas Originals Gazelle Indoor, a low-profile classic that moves effortlessly from casual workdays to weekends out. Built for all-day wear, it delivers the timeless Gazelle look with soft suede texture, heritage adidas details, and a gum outsole that keeps the finish clean and iconic.Low-profile suede upper for a classic, premium feelSignature 3-Stripes and Gazelle branding for unmistakable adidas Originals styleGum rubber outsole adds grip and vintage appealLace-up closure helps dial in the fit",
    "recommended": "Not specified",
    "sourcePrice": 120,
    "sourceSizes": [
      "5.0",
      "5.5",
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Better Scarlet/Cream White": [
        {
          "sku": "JS1402",
          "size": "5.0",
          "stock": 0
        },
        {
          "sku": "JS1402",
          "size": "5.5",
          "stock": 0
        },
        {
          "sku": "JS1402",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "JS1402",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "JS1402",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "JS1402",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "JS1402",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "JS1402",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "JS1402",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "JS1402",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "JS1402",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "JS1402",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "JS1402",
          "size": "11.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/JS1402_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 8,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "adidas Originals Gazelle Indoor - Women's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "431076"
  },
  {
    "id": "fl-dv6434",
    "mrp": 8192.2,
    "sku": "DV6434",
    "use": "Lifestyle",
    "code": "DV6434",
    "name": "Reebok Club C 85 Vintage",
    "sole": "foam sockliner adds optimal comfort, while the rubber outsole provides fault-proof traction and durability",
    "tags": [
      "REEBOK",
      "Casual Shoes",
      "Men",
      "Lifestyle"
    ],
    "brand": "REEBOK",
    "model": "Reebok Club C 85 Vintage",
    "price": 8192.2,
    "sport": "Lifestyle",
    "upper": "leather upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#f2f1eb",
        "name": "White/Green",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/DV6434_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/DV6434_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/DV6434_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/DV6434_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/DV6434_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/DV6434_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/DV6434_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Casual Shoes",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 85,
    "sourceUrl": "https://www.footlocker.com/product/~/DV6434.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Bring heritage feels to your everyday rotation with the Reebok Club C 85 Vintage. Inspired by the ‘80s court classic, these sneakers are centered on simplicity, seamlessness, and style. Crafted with a leather upper, these shoes help you look sharp and ready no matter where you go. The removable EVA foam sockliner adds optimal comfort, while the rubber outsole provides fault-proof traction and durability. Get ready to slay the street-ready look with the Reebok Club C 85 Vintage. Lace closure ensures a snug fit. Die-cut EVA midsole brings superior cushioning.",
    "recommended": "Not specified",
    "sourcePrice": 85,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "13.0",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "White/Green": [
        {
          "sku": "DV6434",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "DV6434",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "DV6434",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "DV6434",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "DV6434",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "DV6434",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "DV6434",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "DV6434",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "DV6434",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "DV6434",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "DV6434",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "DV6434",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "DV6434",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/DV6434_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Reebok Club C 85 Vintage - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "378397"
  },
  {
    "id": "fl-31227101",
    "mrp": 12047.36,
    "sku": "31227101",
    "use": "Lifestyle",
    "code": "31227101",
    "name": "PUMA LaFrance RNR Solar",
    "sole": "100% rubber outsole delivers traction",
    "tags": [
      "PUMA",
      "Sneakers",
      "Men",
      "Lifestyle"
    ],
    "brand": "PUMA",
    "model": "PUMA LaFrance RNR Solar",
    "price": 5299.87,
    "sport": "Lifestyle",
    "upper": "synthetic upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#858991",
        "name": "Gray/Volt/Blue",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/31227101_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/31227101_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/31227101_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/31227101_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/31227101_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/31227101_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/31227101_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Sneakers",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 125,
    "sourceUrl": "https://www.footlocker.com/product/~/31227101.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "'Step into the future of fashion with the PUMA La France RNNR Reflection. A bold fusion of dystopian outdoor grit and urban street style, these sneakers are born from the electrifying collaboration between PUMA and LaFrancv©, Melo‚Äôs lifestyle brand. The solar colorway features a grey upper with electric details throughout the design, bringing you style that speaks louder than words. Straight from the vaults of the Museum of HEEM, the PUMA La France RNNR Reflection lets you not just follow the trends but set them. Layered air mesh and synthetic upper provides breathability. 100% rubber outsole delivers traction. Bring bold energy to your everyday rotation with a look that blends futuristic edge and street-ready style. Inspired by the world of LaFrancv©, the PUMA LaFrance RNR Solar delivers standout design with a light, comfortable feel that reviewers appreciate, making it a strong pick",
    "recommended": "Not specified",
    "sourcePrice": 54.99,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "13.5",
      "14.0",
      "15.0",
      "16.0",
      "17.0",
      "18.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Gray/Volt/Blue": [
        {
          "sku": "31227101",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "13.5",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "15.0",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "16.0",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "17.0",
          "stock": 0
        },
        {
          "sku": "31227101",
          "size": "18.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/31227101_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 56,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "PUMA LaFrance RNR Solar - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "454591"
  },
  {
    "id": "fl-hq988012",
    "mrp": 14938.72,
    "sku": "HQ988012",
    "use": "Lifestyle",
    "code": "HQ988012",
    "name": "Nike Shox R4",
    "sole": "Lightweight Phylon midsole cushions the forefoot",
    "tags": [
      "NIKE",
      "Sneakers",
      "Men",
      "Lifestyle"
    ],
    "brand": "NIKE",
    "model": "Nike Shox R4",
    "price": 14938.72,
    "sport": "Lifestyle",
    "upper": "synthetic upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#858991",
        "name": "Bright Crimson/Football Grey/New Slate",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/HQ988012_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/HQ988012_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/HQ988012_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/HQ988012_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/HQ988012_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/HQ988012_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/HQ988012_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Sneakers",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 155,
    "sourceUrl": "https://www.footlocker.com/product/~/HQ988012.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "The Nike Shox R4 Men's Shoe offers the ultimate in responsive cushioning with four columns of support under the heel. Its lightweight, synthetic upper is soft and durable, and perforations near the toes and around the ankle enhance breathability. Synthetic leather upper for durability. Lightweight Phylon midsole cushions the forefoot. Air-Sole unit under the forefoot offers flexible cushioning. Rubber waffle outsole provides great traction. Heritage running gets a bold second act in the Nike Shox R4, a silhouette that defined early 2000s sneaker culture and still turns heads at every turn. Four iconic Shox columns under the heel deliver that signature spring-loaded cushioning that fans have missed for years, while the sleek synthetic leather upper and iridescent paneling keep the look as sharp as ever. Reviewers consistently praise the all-day comfort, with wearers across healthcare, ret",
    "recommended": "Not specified",
    "sourcePrice": 155,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Bright Crimson/Football Grey/New Slate": [
        {
          "sku": "HQ988012",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "HQ988012",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "HQ988012",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "HQ988012",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "HQ988012",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "HQ988012",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "HQ988012",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "HQ988012",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "HQ988012",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "HQ988012",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "HQ988012",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "HQ988012",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "HQ988012",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "HQ988012",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/HQ988012_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Shox R4 - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "309923"
  },
  {
    "id": "fl-42647702",
    "mrp": 13493.04,
    "sku": "42647702",
    "use": "Training",
    "code": "42647702",
    "name": "New Balance FF Trainer",
    "sole": "Not specified",
    "tags": [
      "NEW BALANCE",
      "Training",
      "Men",
      "Training"
    ],
    "brand": "NEW BALANCE",
    "model": "New Balance FF Trainer",
    "price": 10118.82,
    "sport": "Training",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#d889a4",
        "name": "Pink/Tan",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/42647702_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/42647702_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/42647702_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/42647702_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/42647702_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/42647702_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/42647702_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Training",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 140,
    "sourceUrl": "https://www.footlocker.com/product/~/42647702.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Get a hard-to-beat combination of style, performance, and comfort with the New Balance FF Trainer. Designed for everyday wear, these FreshFoam sneakers with a new upper design will soon become your go-to for everything fun and challenging. Whether you’re going for a street-ready or sporty outfit, the New Balance FF Trainer morphs into the mix with ease. Updated and innovative upper design inspired by the brand’s running 2000’s archive brings a premium look and feel.",
    "recommended": "Not specified",
    "sourcePrice": 104.99,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "13.0",
      "14.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Pink/Tan": [
        {
          "sku": "42647702",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "42647702",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "42647702",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "42647702",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "42647702",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "42647702",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "42647702",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "42647702",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "42647702",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "42647702",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "42647702",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "42647702",
          "size": "14.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/42647702_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 25,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "New Balance FF Trainer - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "442632"
  },
  {
    "id": "fl-41019079",
    "mrp": 8192.2,
    "sku": "41019079",
    "use": "Lifestyle",
    "code": "41019079",
    "name": "Converse CTAS High Throwback",
    "sole": "Not specified",
    "tags": [
      "CONVERSE",
      "Sneakers",
      "Men",
      "Lifestyle"
    ],
    "brand": "CONVERSE",
    "model": "Converse CTAS High Throwback",
    "price": 8192.2,
    "sport": "Lifestyle",
    "upper": "canvas upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/White",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/41019079_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/41019079_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/41019079_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/41019079_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/41019079_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/41019079_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/41019079_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Sneakers",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 85,
    "sourceUrl": "https://www.footlocker.com/product/~/41019079.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "'Tap into pure pre-Y2K nostalgia with the Converse CTAS High Throwback. Inspired by the unmistakable energy of ‚Äò90s street style, this updated version of the iconic Chuck Taylor brings bold personality to an all-time classic. The durable canvas upper of these shoes keeps things timeless, while the oversized eyelets, wide laces, and saturated colours channel the unapologetic style you loved from that era. The stretched rubber tape, crooked branding, and exposed glue lines add that deconstructed, slightly offbeat edge that gives you an effortlessly cool ‚Äò90s look. Bring retro energy with a playful twist in the Converse CTAS High Throwback. Converse CTAS High Throwback features: Durable, heavyweight canvas upper offers a classic Chucks look and feel. OrthoLite cushioning provides optimal underfoot comfort. Iconic Chuck Taylor ankle patch and All Star license plate add brand rep. Retro a",
    "recommended": "Not specified",
    "sourcePrice": 85,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "14.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/White": [
        {
          "sku": "41019079",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "41019079",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "41019079",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "41019079",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "41019079",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "41019079",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "41019079",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "41019079",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "41019079",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "41019079",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "41019079",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "41019079",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "41019079",
          "size": "14.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/41019079_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Converse CTAS High Throwback - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "465691"
  },
  {
    "id": "fl-5130wblc",
    "mrp": 12047.36,
    "sku": "5130WBLC",
    "use": "Running",
    "code": "5130WBLC",
    "name": "HOKA Rincon 4",
    "sole": "Podular outsole design delivers advanced traction and durability",
    "tags": [
      "HOKA",
      "Running",
      "Men",
      "Running"
    ],
    "brand": "HOKA",
    "model": "HOKA Rincon 4",
    "price": 8673.13,
    "sport": "Running",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#f2f1eb",
        "name": "White/Marble",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/5130WBLC_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/5130WBLC_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/5130WBLC_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/5130WBLC_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/5130WBLC_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/5130WBLC_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/5130WBLC_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Running",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 125,
    "sourceUrl": "https://www.footlocker.com/product/~/5130WBLC.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "'Experience boundless comfort through the journey with the HOKA Rincon 4. Renowned for their startling cushion-to-weight ratio, these shoes are upgraded from top to bottom, ensuring uber-light softness that helps you chase miles. Built to last and ready to blast, the HOKA Rincon 4 offers you a more foot-hugging fit than ever before and makes sure every stride feels like a first. Upgraded foam provides better rebound and works together with rubberized EVA to increase longevity and offer a softer feel. Podular outsole design delivers advanced traction and durability. Long runs, daily miles, and busy days on your feet call for comfort that stays light from start to finish. The HOKA Rincon 4 is built to help you move smoothly with soft cushioning, an even lighter feel, and a more foot-hugging fit that keeps every stride feeling fresh. Updated from top to bottom, it balances plush comfort wit",
    "recommended": "Not specified",
    "sourcePrice": 89.99,
    "sourceSizes": [
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "14.0",
      "15.0",
      "16.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "White/Marble": [
        {
          "sku": "5130WBLC",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "5130WBLC",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "5130WBLC",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "5130WBLC",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "5130WBLC",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "5130WBLC",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "5130WBLC",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "5130WBLC",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "5130WBLC",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "5130WBLC",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "5130WBLC",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "5130WBLC",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "5130WBLC",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "5130WBLC",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "5130WBLC",
          "size": "15.0",
          "stock": 0
        },
        {
          "sku": "5130WBLC",
          "size": "16.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/5130WBLC_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 28,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "HOKA Rincon 4 - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "431549"
  },
  {
    "id": "fl-39770301",
    "mrp": 9637.89,
    "sku": "39770301",
    "use": "Running",
    "code": "39770301",
    "name": "PUMA Spirex Ultra Mentality",
    "sole": "A spiked outsole nods to classic track silhouettes, while the layered upper blends football and motorsport",
    "tags": [
      "PUMA",
      "Running",
      "Men",
      "Running"
    ],
    "brand": "PUMA",
    "model": "PUMA Spirex Ultra Mentality",
    "price": 9637.89,
    "sport": "Running",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Puma Red/Shadow Gray/Puma Black",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/39770301_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/39770301_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/39770301_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/39770301_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/39770301_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/39770301_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/39770301_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Running",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 100,
    "sourceUrl": "https://www.footlocker.com/product/~/39770301.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Push the pace with the PUMA Spirex Ultra Mentality. Built for bold streetwear style, these progressive runners channel PUMA’s Icons of Speed into a fresh, future-facing design. A spiked outsole nods to classic track silhouettes, while the layered upper blends football and motorsport influences for a look that’s fast, fearless, and full of edge. A textile base combines with synthetic leather overlays to deliver structure and style. Designed for motion and made to stand out, the PUMA Spirex Ultra Mentality brings bold energy to every step. Textile base with synthetic leather overlays provides structure, durability, and visual contrast.",
    "recommended": "Not specified",
    "sourcePrice": 100,
    "sourceSizes": [
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "11.0",
      "11.5",
      "12.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Puma Red/Shadow Gray/Puma Black": [
        {
          "sku": "39770301",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "39770301",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "39770301",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "39770301",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "39770301",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "39770301",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "39770301",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "39770301",
          "size": "12.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/39770301_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "PUMA Spirex Ultra Mentality - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "466102"
  },
  {
    "id": "fl-u90602jk",
    "mrp": 15420.62,
    "sku": "U90602JK",
    "use": "Lifestyle",
    "code": "U90602JK",
    "name": "New Balance 9060",
    "sole": "while the wavy lines and scaled-up proportions on the midsole bring both style and functionality",
    "tags": [
      "NEW BALANCE",
      "Casual Shoes",
      "Men",
      "Lifestyle"
    ],
    "brand": "NEW BALANCE",
    "model": "New Balance 9060",
    "price": 15420.62,
    "sport": "Lifestyle",
    "upper": "Mesh upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#806247",
        "name": "Stoneware/Thunder Brown",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/U90602JK_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/U90602JK_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/U90602JK_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/U90602JK_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/U90602JK_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/U90602JK_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/U90602JK_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Casual Shoes",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 160,
    "sourceUrl": "https://www.footlocker.com/product/~/U90602JK.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Step out in the refined style and innovation-led design of the New Balance 90/60. Inspired by the boastful futuristic and visible tech craft of the Y2K era, these shoes reinterpret familiar 99X elements with a striking twist to elevate your style. The sway bars taken from the 990 are expanded and utilised throughout the upper for a sense of visible motion, while the wavy lines and scaled-up proportions on the midsole bring both style and functionality. Shift everyone’s attention to your side with the unrivalled look of the New Balance 90/60. New Balance 90/60 features: Mesh upper with pigskin suede overlays offers comfort and bold style. Dual-density, sculpted pod midsole equipped with ABZORB and SBS offers cushioning. Tongue logo inspired by the original 991 lace jewel brings unique detail. Translucent CR device at the heel supports the feet. Diamond outsole pattern inspired by the clas",
    "recommended": "Not specified",
    "sourcePrice": 160,
    "sourceSizes": [
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "13.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Stoneware/Thunder Brown": [
        {
          "sku": "U90602JK",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "U90602JK",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "U90602JK",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "U90602JK",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "U90602JK",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "U90602JK",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "U90602JK",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "U90602JK",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "U90602JK",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "U90602JK",
          "size": "13.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/U90602JK_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "New Balance 9060 - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "391934"
  },
  {
    "id": "fl-28384111",
    "mrp": 11565.46,
    "sku": "28384111",
    "use": "Walking",
    "code": "28384111",
    "name": "Under Armour Phantom 1 Modern",
    "sole": "Full rubber outsole with knobbed texture improves traction and durability",
    "tags": [
      "UNDER ARMOUR",
      "Walking",
      "Men",
      "Walking"
    ],
    "brand": "UNDER ARMOUR",
    "model": "Under Armour Phantom 1 Modern",
    "price": 11565.46,
    "sport": "Walking",
    "upper": "knit upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#f2f1eb",
        "name": "White/White",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/28384111_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/28384111_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/28384111_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/28384111_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/28384111_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/28384111_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/28384111_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Walking",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 120,
    "sourceUrl": "https://www.footlocker.com/product/~/28384111.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "The Under Armour Phantom 1 Modern Men's is built for easy runs, walking, and everyday wear with responsive UA HOVR cushioning that helps reduce impact and return energy. A breathable soft knit upper creates a close, flexible feel, while the knit ankle collar and external heel counter balance bootie-like fit with stable support. From commute miles to recovery days, this silhouette pairs running-inspired comfort with durable rubber traction.Under Armour Phantom 1 Modern features:UA HOVR cushioning helps reduce impact and return energy.Soft knit upper delivers breathable, compression-like support.3D molded midfoot panel with laser perforations increases ventilation.SpeedForm 2.0 sockliner adds softer underfoot support.Full rubber outsole with knobbed texture improves traction and durability.",
    "recommended": "Not specified",
    "sourcePrice": 120,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "13.0",
      "14.0",
      "15.0",
      "16.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "White/White": [
        {
          "sku": "28384111",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "28384111",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "28384111",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "28384111",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "28384111",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "28384111",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "28384111",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "28384111",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "28384111",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "28384111",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "28384111",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "28384111",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "28384111",
          "size": "15.0",
          "stock": 0
        },
        {
          "sku": "28384111",
          "size": "16.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/28384111_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Under Armour Phantom 1 Modern - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "425020"
  },
  {
    "id": "fl-319npwmt",
    "mrp": 4818.94,
    "sku": "319NPWMT",
    "use": "Lifestyle",
    "code": "319NPWMT",
    "name": "Skechers Twinkle Sparks",
    "sole": "Plus, the leather flocking TPR midsole provides support and stability all day long, helping your little ones breeze through thei",
    "tags": [
      "SKECHERS",
      "Sneakers",
      "Women",
      "Lifestyle"
    ],
    "brand": "SKECHERS",
    "model": "Skechers Twinkle Sparks",
    "price": 4818.94,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#d889a4",
        "name": "Super Blossom/Multi",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/319NPWMT_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/319NPWMT_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/319NPWMT_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/319NPWMT_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/319NPWMT_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/319NPWMT_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/319NPWMT_01"
        }
      }
    ],
    "gender": "Women",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Sneakers",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 50,
    "sourceUrl": "https://www.footlocker.com/product/~/319NPWMT.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Twinkle, twinkle little feet! Help your baby girls sparkle and shine with every little step in the Skechers Twinkle Sparks. Designed for easy wear, these shoes feature a polyurethane cotton upper that's as durable as it is adorable. The round toe is adorned with pyramid crystal detailing and a feather bow tie at the side to add a touch of magic to your kiddos' look. Plus, the leather flocking TPR midsole provides support and stability all day long, helping your little ones breeze through their days. Watch your baby girls make every step a celebration with the Skechers Twinkle Sparks. Skechers Twinkle Sparks features: Lace closure with a hook-and-loop strap delivers a secure fit. Heel pull tab allows easy on and off. Polyester lining and removable insole add comfort. TPR outsole maximizes traction.",
    "recommended": "Not specified",
    "sourcePrice": 50,
    "sourceSizes": [
      "5.0",
      "6.0",
      "7.0",
      "8.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Super Blossom/Multi": [
        {
          "sku": "319NPWMT",
          "size": "5.0",
          "stock": 0
        },
        {
          "sku": "319NPWMT",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "319NPWMT",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "319NPWMT",
          "size": "8.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/319NPWMT_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Skechers Twinkle Sparks - Girls' Toddler",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "422250"
  },
  {
    "id": "fl-ji1118",
    "mrp": 8674.1,
    "sku": "JI1118",
    "use": "Football",
    "code": "JI1118",
    "name": "adidas Predator League FG/MG",
    "sole": "Controlplate outsole ensures traction on firm ground and artificial grass",
    "tags": [
      "ADIDAS",
      "Football",
      "Men",
      "Football"
    ],
    "brand": "ADIDAS",
    "model": "adidas Predator League FG/MG",
    "price": 8674.1,
    "sport": "Football",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/Carbon",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/JI1118_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/JI1118_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/JI1118_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/JI1118_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/JI1118_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/JI1118_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/JI1118_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Football",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 90,
    "sourceUrl": "https://www.footlocker.com/product/~/JI1118.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "For players who don’t just dream of goals—they score them! The adidas Predator League FG/MG is built to help you strike with power, precision, and purpose. Designed to boost your game, these boots feature a Hybridfeel upper with an all-over 3D texture that hugs your feet like a second skin. The innovative Strikescale fins grip the ball like never before, giving you unmatched control during every strike. Whether you’re making that last-moment game-changing shot or already commanding the field, the adidas Predator League FG/MG lets you dominate every play in style. adidas Predator League FG/MG features: Regular fit delivers a relaxed feel. Lace closure provides a secure fit. Textile lining adds breathability. Controlplate outsole ensures traction on firm ground and artificial grass.",
    "recommended": "Not specified",
    "sourcePrice": 90,
    "sourceSizes": [
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "13.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/Carbon": [
        {
          "sku": "JI1118",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "JI1118",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "JI1118",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "JI1118",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "JI1118",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "JI1118",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "JI1118",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "JI1118",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "JI1118",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "JI1118",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "JI1118",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "JI1118",
          "size": "13.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/JI1118_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "adidas Predator League FG/MG - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "459303"
  },
  {
    "id": "fl-q8314600",
    "mrp": 7228.41,
    "sku": "Q8314600",
    "use": "Football",
    "code": "Q8314600",
    "name": "Nike Superfly 10 Club FG/MG",
    "sole": "Not specified",
    "tags": [
      "NIKE",
      "Football",
      "Men",
      "Football"
    ],
    "brand": "NIKE",
    "model": "Nike Superfly 10 Club FG/MG",
    "price": 7228.41,
    "sport": "Football",
    "upper": "synthetic upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Magic Flamingo/Black/Total Crimson",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/Q8314600_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/Q8314600_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/Q8314600_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/Q8314600_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/Q8314600_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/Q8314600_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/Q8314600_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Football",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 75,
    "sourceUrl": "https://www.footlocker.com/product/~/Q8314600.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Stay quick on your feet and unstoppable in your mindset with the Nike Superfly 10 Club FG/MG. Designed to keep you comfortable and confident on the field, these cleats feature a molded, synthetic upper with a textured pattern for better ball control while dribbling at high speeds. The unique traction pattern provides supercharged traction and quick release, enabling you to make swift movements with ease. The fit is the same as its predecessor, offering a design that better simulates the foot. This was done using the data based on multiple wear tests conducted on hundreds of athletes, which resulted in a contoured toe box and a more secure feel in the heel. Move fast, think faster, and win big with the Nike Superfly 10 Club FG/MG. Cushioned insole provides step-in comfort. *For use on natural and synthetic surfaces.",
    "recommended": "Not specified",
    "sourcePrice": 75,
    "sourceSizes": [
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Magic Flamingo/Black/Total Crimson": [
        {
          "sku": "Q8314600",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "Q8314600",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "Q8314600",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "Q8314600",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "Q8314600",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "Q8314600",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "Q8314600",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "Q8314600",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "Q8314600",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "Q8314600",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "Q8314600",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "Q8314600",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "Q8314600",
          "size": "13.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/Q8314600_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Superfly 10 Club FG/MG - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "442670"
  },
  {
    "id": "fl-b3298101",
    "mrp": 13974.93,
    "sku": "B3298101",
    "use": "Training",
    "code": "B3298101",
    "name": "Nike Zoom Air Vapor Pro 1",
    "sole": "Not specified",
    "tags": [
      "NIKE",
      "Training",
      "Men",
      "Training"
    ],
    "brand": "NIKE",
    "model": "Nike Zoom Air Vapor Pro 1",
    "price": 13974.93,
    "sport": "Training",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "White/Black/Racer Blue",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/B3298101_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/B3298101_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/B3298101_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/B3298101_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/B3298101_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/B3298101_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/B3298101_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Training",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 145,
    "sourceUrl": "https://www.footlocker.com/product/~/B3298101.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Take your speed to the stratosphere with the Nike Zoom Air Vapor Pro 1. Featuring a forefoot Air Zoom unit stitched directly into the upper, these shoes offer exceptional responsiveness through every sudden cut and rapid sprint. Light as a feather but built tough, these shoes come with a Vapor plate that provides a rock-solid foundation and keeps your feet locked in. Get the edge you need to leave your opponents in the dust with the Nike Zoom Air Vapor Pro 1. Nike Zoom Air Vapor Pro 1 features: Mesh combines with an inner sleeve to provide a breathable, snug fit. Molded plastic around the heel offers stability for the ankle and Achilles. Wide stud placement ensures optimal multidirectional traction.",
    "recommended": "Not specified",
    "sourcePrice": 145,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "White/Black/Racer Blue": [
        {
          "sku": "B3298101",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "B3298101",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "B3298101",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "B3298101",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "B3298101",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "B3298101",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "B3298101",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "B3298101",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "B3298101",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "B3298101",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "B3298101",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "B3298101",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "B3298101",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "B3298101",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/B3298101_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Zoom Air Vapor Pro 1 - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "466456"
  },
  {
    "id": "fl-n9675002",
    "mrp": 3566.02,
    "sku": "N9675002",
    "use": "Lifestyle",
    "code": "N9675002",
    "name": "Nike Victori One Slides",
    "sole": "New patterned outsole delivers exceptional traction",
    "tags": [
      "NIKE",
      "Sandals",
      "Men",
      "Lifestyle"
    ],
    "brand": "NIKE",
    "model": "Nike Victori One Slides",
    "price": 3566.02,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/White/Black",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/N9675002_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/N9675002_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/N9675002_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/N9675002_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/N9675002_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/N9675002_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/N9675002_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Sandals",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 37,
    "sourceUrl": "https://www.footlocker.com/product/~/N9675002.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Soft and cushy, the Nike Victori One Slides are all about the ease you need during your leisure time. Featuring responsive foam and mechanical cushioning, these slides deliver unbelievable comfort and help you relax and rejuvenate without any distractions. The new padded strap feels as good as it looks, while the contoured grip pattern helps cradle and hold your foot in place. Whether you're heading to the beach or taking a casual walk on the streets, the Nike Victori One Slides are your perfect companions for it all. Nike Victori One Slides features: Rolled top edge of the strap and the thick padding add comfort. Bold \"NIKE\" and Swoosh on the strap rep the brand. New strap design adds additional space, accommodating more foot sizes. New patterned outsole delivers exceptional traction.",
    "recommended": "Not specified",
    "sourcePrice": 37,
    "sourceSizes": [
      "6.0",
      "7.0",
      "8.0",
      "9.0",
      "10.0",
      "11.0",
      "12.0",
      "13.0",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/White/Black": [
        {
          "sku": "N9675002",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "N9675002",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "N9675002",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "N9675002",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "N9675002",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "N9675002",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "N9675002",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "N9675002",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "N9675002",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "N9675002",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/N9675002_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Victori One Slides - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "340885"
  },
  {
    "id": "fl-99474050",
    "mrp": 18311.98,
    "sku": "99474050",
    "use": "Walking",
    "code": "99474050",
    "name": "Nike Air Max Goadome",
    "sole": "All-Trac outsole compound and lug pattern maximize traction and durability",
    "tags": [
      "NIKE",
      "Boots",
      "Men",
      "Walking"
    ],
    "brand": "NIKE",
    "model": "Nike Air Max Goadome",
    "price": 18311.98,
    "sport": "Walking",
    "upper": "leather upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/Black/Black",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/99474050_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/99474050_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/99474050_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/99474050_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/99474050_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/99474050_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/99474050_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Weight: 23",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Boots",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 190,
    "sourceUrl": "https://www.footlocker.com/product/~/99474050.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Whether it’s trekking through the mountains, walking down a rural back road, or just tackling tough city conditions, the Nike Air Max Goadome helps you handle it all in style. Featuring a waterproof, full-grain leather upper, these boots are so comfortable and stylish that no rough road or high hill will shake your will to explore. The full-length visible Air-Sole unit ensures a lightweight responsive feel, while the all-metal hardware elevates the look. Never stop; cut your own patch with the Nike Air Max Goadome. All-Trac outsole compound and lug pattern maximize traction and durability. Size: 9. Weight: 23.6 oz.",
    "recommended": "Not specified",
    "sourcePrice": 190,
    "sourceSizes": [
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "14.0",
      "15.0",
      "16.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/Black/Black": [
        {
          "sku": "99474050",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "15.0",
          "stock": 0
        },
        {
          "sku": "99474050",
          "size": "16.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/99474050_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Yes",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Air Max Goadome - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "25338"
  },
  {
    "id": "fl-d1391100",
    "mrp": 11565.46,
    "sku": "D1391100",
    "use": "Lifestyle",
    "code": "D1391100",
    "name": "Nike Dunk Low Retro",
    "sole": "y all-day comfort for everyday wear with a modern foam midsole and padded, low-cut collar",
    "tags": [
      "NIKE",
      "Sneakers",
      "Men",
      "Lifestyle"
    ],
    "brand": "NIKE",
    "model": "Nike Dunk Low Retro",
    "price": 9636.92,
    "sport": "Lifestyle",
    "upper": "leather upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "White/White/Black",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/D1391100_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/D1391100_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/D1391100_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/D1391100_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/D1391100_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/D1391100_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/D1391100_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Sneakers",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 120,
    "sourceUrl": "https://www.footlocker.com/product/~/D1391100.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Walk the streets in vintage ‘80s style and modern comfort with the Nike Dunk Low. Originally released to play ball on the court, these iconic kicks level up your street style. Lightweight, durable, and extremely comfortable, these shoes are revamped with sheened overlays and original colorways. Enjoy all-day comfort for everyday wear with a modern foam midsole and padded, low-cut collar. Nike Dunk Low features: Crisp leather upper brings slight sheen and durability with an old-school look. Foam midsole offers lightweight, responsive cushioning. A padded, low-top collar makes you feel comfortable. Bold color blockings deliver a classic look. Perforations on the toe add breathability. Rubber sole with classic hoops pivot circle provides durability and traction. From weekday errands to weekend plans, this low-profile classic brings easy comfort and throwback hoops style to your everyday rot",
    "recommended": "Not specified",
    "sourcePrice": 99.99,
    "sourceSizes": [
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "White/White/Black": [
        {
          "sku": "D1391100",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "D1391100",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/D1391100_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 17,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Dunk Low Retro - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "275513"
  },
  {
    "id": "fl-f35542mn",
    "mrp": 2409.47,
    "sku": "F35542MN",
    "use": "Lifestyle",
    "code": "F35542MN",
    "name": "adidas Adilette Boost Slides",
    "sole": "Full-length, energy-returning midsole for cushioned comfort",
    "tags": [
      "ADIDAS",
      "Sandals",
      "Men",
      "Lifestyle"
    ],
    "brand": "ADIDAS",
    "model": "adidas Adilette Boost Slides",
    "price": 2409.47,
    "sport": "Lifestyle",
    "upper": "Synthetic upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#f2f1eb",
        "name": "Dark Blue/White/Dark Blue",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/F35542MN_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/F35542MN_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/F35542MN_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/F35542MN_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/F35542MN_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/F35542MN_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/F35542MN_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Slip-on",
    "fitType": "Not specified",
    "category": "Sandals",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 25,
    "sourceUrl": "https://www.footlocker.com/product/~/F35542MN.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Slide into style with the adidas Adilette Boost. Full-length, energy-returning midsole for cushioned comfort. Full-length Boost feels plush and soft. Regular fit. Slip-on construction. Synthetic upper for durability and flexibility.",
    "recommended": "Not specified",
    "sourcePrice": 25,
    "sourceSizes": [
      "8.0",
      "9.0",
      "10.0",
      "11.0",
      "12.0",
      "13.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Dark Blue/White/Dark Blue": [
        {
          "sku": "F35542MN",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "F35542MN",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "F35542MN",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "F35542MN",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "F35542MN",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "F35542MN",
          "size": "13.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/F35542MN_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "adidas Adilette Boost Slides - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "327232"
  },
  {
    "id": "fl-b0183002",
    "mrp": 5300.84,
    "sku": "B0183002",
    "use": "Lifestyle",
    "code": "B0183002",
    "name": "Nike Calm Slides 2.0",
    "sole": "Rubber outsole offers excellent traction even on slippery surfaces",
    "tags": [
      "NIKE",
      "Sandals",
      "Men",
      "Lifestyle"
    ],
    "brand": "NIKE",
    "model": "Nike Calm Slides 2.0",
    "price": 5300.84,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/Medium Gum Brown/Black",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/B0183002_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/B0183002_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/B0183002_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/B0183002_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/B0183002_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/B0183002_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/B0183002_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Sandals",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 55,
    "sourceUrl": "https://www.footlocker.com/product/~/B0183002.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Slides that bring calm to chaotic days! Introducing the Nike Calm Slides 2.0—cool and comfy slides that give your feet a much-needed break. Your sanctuary in the storm, these slides with soft yet supportive foam keep you comfortable, no matter what life throws your way. The single piece of foam in a contoured design adapts to your every step, providing a smooth and seamless experience. The textured footbed keeps you sure-footed, while the outer shell made from water-friendly foam enables easy cleaning. The minimal design makes these slides easy to style, whether you wear socks or not—it’s your call. Slip into the Nike Calm Slides 2.0 to reset the day. Nike Calm Slides 2.0 features: Textured footbed provides grip. Eye-catching design elevates the look. Rubber outsole offers excellent traction even on slippery surfaces.",
    "recommended": "Not specified",
    "sourcePrice": 55,
    "sourceSizes": [
      "6.0",
      "7.0",
      "8.0",
      "9.0",
      "10.0",
      "11.0",
      "12.0",
      "13.0",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/Medium Gum Brown/Black": [
        {
          "sku": "B0183002",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "B0183002",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "B0183002",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "B0183002",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "B0183002",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "B0183002",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "B0183002",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "B0183002",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "B0183002",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "B0183002",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/B0183002_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Calm Slides 2.0 - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "460982"
  },
  {
    "id": "fl-n09qc6bt",
    "mrp": 7710.31,
    "sku": "N09QC6BT",
    "use": "Skateboarding",
    "code": "N09QC6BT",
    "name": "Vans Knu Skool",
    "sole": "Not specified",
    "tags": [
      "VANS",
      "Casual Shoes",
      "Men",
      "Skateboarding"
    ],
    "brand": "VANS",
    "model": "Vans Knu Skool",
    "price": 7710.31,
    "sport": "Skateboarding",
    "upper": "Suede upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "True White/Black",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/N09QC6BT_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/N09QC6BT_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/N09QC6BT_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/N09QC6BT_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/N09QC6BT_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/N09QC6BT_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/N09QC6BT_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Casual Shoes",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 80,
    "sourceUrl": "https://www.footlocker.com/product/~/N09QC6BT.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "The legend is back! Bolder and brighter than ever, the Vans Knu Skoolstages a grand comeback. Familiar but always fresh, these sneakers put a modern spin on what you love most about the ‘90s classic. Remastered to rewrite the narrative for trailblazers like you, these silhouettes come with a puffy 3D-molded Sidestripe, dramatic style details, and chunky laces. Straight from the past and into the future, these sneakers make you fall head over heels in love with old-school vibes. Durability at its finest, these silhouettes are a low-top version of a vintage delight, making them the perfect companions for your busy days and fun-filled nights. Powered by futuristic looks yet grounded with heritage design details, the Vans Knu Skool makes sure you never look out of place or style. Vans Knu Skool features: Suede upper provides long-lasting durability. Puffy tongue and ankle collar offer next-l",
    "recommended": "Not specified",
    "sourcePrice": 80,
    "sourceSizes": [
      "3.5",
      "4.0",
      "4.5",
      "5.0",
      "5.5",
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "13.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "True White/Black": [
        {
          "sku": "N09QC6BT",
          "size": "3.5",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "4.0",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "4.5",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "5.0",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "5.5",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "N09QC6BT",
          "size": "13.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/N09QC6BT_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Vans Knu Skool  - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "421808"
  },
  {
    "id": "fl-b75806",
    "mrp": 9637.89,
    "sku": "B75806",
    "use": "Lifestyle",
    "code": "B75806",
    "name": "adidas Originals Samba",
    "sole": "Gum rubber midsole gives lightweight cushioning and comfort",
    "tags": [
      "ADIDAS",
      "Sneakers",
      "Men",
      "Lifestyle"
    ],
    "brand": "ADIDAS",
    "model": "adidas Originals Samba",
    "price": 9637.89,
    "sport": "Lifestyle",
    "upper": "leather upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Clear Granite/Cloud White/Core Black",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/B75806_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/B75806_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/B75806_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/B75806_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/B75806_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/B75806_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/B75806_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Sneakers",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 100,
    "sourceUrl": "https://www.footlocker.com/product/~/B75806.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Born on the soccer field, the adidas Originals Samba is a timeless icon of street style. These shoes stay true to their legacy with a soft leather upper and suede overlays. adidas Originals Samba features: Regular fit gives an easy and relaxed feel. Full grain leather upper with gritty suede and gold foil details provides a sleek and premium look. Lace closure provides a snug and secure fit. Synthetic leather lining offers comfort and support. Gum rubber midsole gives lightweight cushioning and comfort. Gum rubber cupsole delivers traction and durability. Few silhouettes have crossed from the pitch to the pavement as effortlessly as the adidas Originals Samba. Originally designed for frozen soccer fields in the 1950s, this low-profile classic has earned its place as one of streetwear's most enduring icons, and it keeps earning that status with every wear. The Samba pairs a premium full-g",
    "recommended": "Not specified",
    "sourcePrice": 100,
    "sourceSizes": [
      "3.5",
      "4.0",
      "4.5",
      "5.0",
      "5.5",
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "13.5",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Clear Granite/Cloud White/Core Black": [
        {
          "sku": "B75806",
          "size": "3.5",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "4.0",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "4.5",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "5.0",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "5.5",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "13.5",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "B75806",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/B75806_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "adidas Originals Samba - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "129495"
  },
  {
    "id": "fl-w2288111",
    "mrp": 11083.57,
    "sku": "W2288111",
    "use": "Lifestyle",
    "code": "W2288111",
    "name": "Nike Air Force 1 '07",
    "sole": "k light and breathablePadded low-cut collar and sturdy rubber sole support all-day wear",
    "tags": [
      "NIKE",
      "Sneakers",
      "Men",
      "Lifestyle"
    ],
    "brand": "NIKE",
    "model": "Nike Air Force 1 '07",
    "price": 11083.57,
    "sport": "Lifestyle",
    "upper": "Leather upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#f2f1eb",
        "name": "White/White",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/W2288111_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/W2288111_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/W2288111_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/W2288111_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/W2288111_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/W2288111_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/W2288111_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Sneakers",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 115,
    "sourceUrl": "https://www.footlocker.com/product/~/W2288111.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Get the fresh style and classic looks you need with the Nike Air Force 1 '07. Premium leather with cracked detail looks classic. Contrasting colors and details for a fresh look. Paint details on the sole add stylish accents. Long days call for a sneaker that looks clean, feels comfortable, and works with almost anything in your closet. The Nike Air Force 1 '07 delivers that everyday versatility with a timeless low-cut shape, smooth leather panels, and the iconic details that keep this classic in constant rotation.Leather upper with classic stitched overlays for a clean, durable finishPerforations at the toe help keep the look light and breathablePadded low-cut collar and sturdy rubber sole support all-day wear",
    "recommended": "Not specified",
    "sourcePrice": 115,
    "sourceSizes": [
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "14.0",
      "15.0",
      "16.0",
      "17.0",
      "18.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "White/White": [
        {
          "sku": "W2288111",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "15.0",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "16.0",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "17.0",
          "stock": 0
        },
        {
          "sku": "W2288111",
          "size": "18.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/W2288111_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Air Force 1 '07 - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "333263"
  },
  {
    "id": "fl-d4328002",
    "mrp": 23130.92,
    "sku": "D4328002",
    "use": "Football",
    "code": "D4328002",
    "name": "Nike Legend 10 Elite FG",
    "sole": "Not specified",
    "tags": [
      "NIKE",
      "Football",
      "Men",
      "Football"
    ],
    "brand": "NIKE",
    "model": "Nike Legend 10 Elite FG",
    "price": 11564.5,
    "sport": "Football",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/Black/Deep Jungle",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/D4328002_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/D4328002_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/D4328002_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/D4328002_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/D4328002_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/D4328002_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/D4328002_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Football",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 240,
    "sourceUrl": "https://www.footlocker.com/product/~/D4328002.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Kick-off, clash, and conquer! The pitch is set, so get ready for an unforgettable soccer game with the Nike Legend 10 Elite. Crafted to improve your accuracy with the ball at your feet, these soccer cleats let you prowl the pitch like a predator. The plate combines different-shaped studs so you can make precision cuts when the stakes are high. Lighter, sleeker, and responsive, these cleats let you be a force of nature on the field. Your pick for skillful footwork and strategic play, these cleats are powered by microdots that amplify touch zones so you can shoot, dribble, and pass like the NFL champions. Offering excellent ground control and comfort on the move, these cleats keep you sure-footed on slightly wet and short-grass fields. Victory tastes sweeter on the soccer pitch, so lace up the Nike Legend 10 Elite to seize the winning moment. Nike Legend 10 Elite features: Engineered leath",
    "recommended": "Not specified",
    "sourcePrice": 119.99,
    "sourceSizes": [
      "4.0",
      "4.5",
      "5.0",
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/Black/Deep Jungle": [
        {
          "sku": "D4328002",
          "size": "4.0",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "4.5",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "5.0",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "D4328002",
          "size": "13.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/D4328002_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 50,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Legend 10 Elite FG - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "419109"
  },
  {
    "id": "fl-js0425",
    "mrp": 9637.89,
    "sku": "JS0425",
    "use": "Football",
    "code": "JS0425",
    "name": "adidas Predator League Folded Tongue FG/MG",
    "sole": "Controlplate firm/multi-ground outsole delivers grip and traction on a variety of surfaces",
    "tags": [
      "ADIDAS",
      "Football",
      "Men",
      "Football"
    ],
    "brand": "ADIDAS",
    "model": "adidas Predator League Folded Tongue FG/MG",
    "price": 9637.89,
    "sport": "Football",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Ftwr White/Core Black",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/JS0425_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/JS0425_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/JS0425_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/JS0425_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/JS0425_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/JS0425_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/JS0425_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Football",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 100,
    "sourceUrl": "https://www.footlocker.com/product/~/JS0425.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Step onto the pitch with the ultimate goal-scoring machine—the adidas Predator League Folded Tongue FG/MG! Designed to boost your game, these boots feature a Hybridfeel upper with an all-over 3D texture that hugs your feet like second skin. The innovative Strikescale fins grip the ball like never before, giving you unmatched control during every strike. The signature fold-over tongue adds a touch of style while enhancing your play with precision and power. Whether you’re making that last-moment game-changing shot or already commanding the field, the adidas Predator League Folded Tongue FG/MG lets you dominate every play in style. adidas Predator League Folded Tongue FG/MG features: Regular fit offers a relaxed feel. Lace closure ensures a snug fit. Controlplate firm/multi-ground outsole delivers grip and traction on a variety of surfaces.",
    "recommended": "Not specified",
    "sourcePrice": 100,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Ftwr White/Core Black": [
        {
          "sku": "JS0425",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "JS0425",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "JS0425",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "JS0425",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "JS0425",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "JS0425",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "JS0425",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "JS0425",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "JS0425",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "JS0425",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "JS0425",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "JS0425",
          "size": "13.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/JS0425_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "adidas Predator League Folded Tongue FG/MG - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "450378"
  },
  {
    "id": "fl-f2557400",
    "mrp": 5782.73,
    "sku": "F2557400",
    "use": "Football",
    "code": "F2557400",
    "name": "Nike Phantom GX II Club FG/MG",
    "sole": "Outsole plate has a broken-in feel to allow fast play and deliver reliable traction",
    "tags": [
      "NIKE",
      "Football",
      "Men",
      "Football"
    ],
    "brand": "NIKE",
    "model": "Nike Phantom GX II Club FG/MG",
    "price": 5782.73,
    "sport": "Football",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#f2f1eb",
        "name": "Blue Fury/White",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/F2557400_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/F2557400_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/F2557400_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/F2557400_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/F2557400_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/F2557400_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/F2557400_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Football",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 60,
    "sourceUrl": "https://www.footlocker.com/product/~/F2557400.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Unlock your dynamic moves on the field with the Nike Phantom GX II Club FG/MG. Created with goals in mind, these low-top soccer cleats feature synthetic leather on the upper to help you stand out as an MVP. The grippy texture covers the striking area of these cleats and stretches from the big toe side across the laces to the pinky toe, guiding your movements with unscripted agility. Whether you’re the starter or the finisher, the Nike Phantom GX II Club FG/MG puts you in a prime position through it all. Nike Phantom GX II Club FG/MG features: High-quality material adds comfort and durability. Cushioned insole delivers responsiveness. Outsole plate has a broken-in feel to allow fast play and deliver reliable traction. *For use on natural and synthetic surfaces.",
    "recommended": "Not specified",
    "sourcePrice": 60,
    "sourceSizes": [
      "5.5",
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "13.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Blue Fury/White": [
        {
          "sku": "F2557400",
          "size": "5.5",
          "stock": 0
        },
        {
          "sku": "F2557400",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "F2557400",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "F2557400",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "F2557400",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "F2557400",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "F2557400",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "F2557400",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "F2557400",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "F2557400",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "F2557400",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "F2557400",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "F2557400",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "F2557400",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "F2557400",
          "size": "13.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/F2557400_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Phantom GX II Club FG/MG - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "432608"
  },
  {
    "id": "fl-kh8537",
    "mrp": 12529.25,
    "sku": "KH8537",
    "use": "Basketball",
    "code": "KH8537",
    "name": "adidas Anthony Edwards 3",
    "sole": "Hyperboost midsole provides maximum cushioning for responsive comfortTextile and synthetic upper offers a se",
    "tags": [
      "ADIDAS",
      "Basketball",
      "Men",
      "Basketball"
    ],
    "brand": "ADIDAS",
    "model": "adidas Anthony Edwards 3",
    "price": 12529.25,
    "sport": "Basketball",
    "upper": "synthetic upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#b9bdc4",
        "name": "Blue/Silver/Grey",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/KH8537_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/KH8537_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/KH8537_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/KH8537_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/KH8537_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/KH8537_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/KH8537_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Basketball",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 130,
    "sourceUrl": "https://www.footlocker.com/product/~/KH8537.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Step onto the court with confidence in the adidas Anthony Edwards 3, built for players who thrive in the heat of competition. Blending performance-driven innovation with a rebellious spirit, these shoes deliver the cushioning and grip you need to dominate. Whether you're driving to the hoop or ruling the streets, they're ready to help you make your mark.Hyperboost midsole provides maximum cushioning for responsive comfortTextile and synthetic upper offers a secure, comfortable fitDurable rubber outsole delivers reliable grip and controlTextile lining and inlay sole add all-day comfortPerformance-driven design built for competitive basketballMaterial & CareUpper: Textile and synthetic; Lining and inlay sole: TextileRubber outsoleSize & FitRegular fit for a comfortable, true-to-size feelLow-top silhouette built for on-court agility",
    "recommended": "Not specified",
    "sourcePrice": 130,
    "sourceSizes": [
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "13.5",
      "14.0",
      "14.5",
      "15.0",
      "16.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Blue/Silver/Grey": [
        {
          "sku": "KH8537",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "13.5",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "14.5",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "15.0",
          "stock": 0
        },
        {
          "sku": "KH8537",
          "size": "16.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/KH8537_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "adidas Anthony Edwards 3 - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "473588"
  },
  {
    "id": "fl-1217401",
    "mrp": 11083.57,
    "sku": "1217401",
    "use": "Basketball",
    "code": "1217401",
    "name": "PUMA MB.04 Low",
    "sole": "the ‚ÄúNOT FROM HERE‚Äù & ‚ÄúRARE‚Äù markings turn the outsole into a cosmic canvas of Melo‚Äôs unique style",
    "tags": [
      "PUMA",
      "Basketball",
      "Men",
      "Basketball"
    ],
    "brand": "PUMA",
    "model": "PUMA MB.04 Low",
    "price": 6745.56,
    "sport": "Basketball",
    "upper": "textile upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/Dark Amethyst",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/1217401_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/1217401_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/1217401_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/1217401_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/1217401_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/1217401_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/1217401_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Basketball",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 115,
    "sourceUrl": "https://www.footlocker.com/product/~/1217401.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "'The PUMA MB.04 Low isn‚Äôt just a basketball shoe‚Äîit‚Äôs an intergalactic statement for those who defy gravity and convention. Inspired by LaMelo Ball‚Äôs extraterrestrial game, this low-cut beast features an all-over alien-textured textile upper and Melo‚Äôs signature Wings logo wrapping the heels like a badge of otherworldly authority. Equipped with NITROFOAM cushioning, these PUMA shoes launch you into every jump, cut, and drive with next-level responsiveness. The hovering spaceship design, flaming heel graphics, and the ‚ÄúNOT FROM HERE‚Äù & ‚ÄúRARE‚Äù markings turn the outsole into a cosmic canvas of Melo‚Äôs unique style. Grab the PUMA MB.04 Low and go extraterrestrial‚Äîbecause the MB.04 is here to take the game out of this world. PUMA MB.04 Low features: Lace closure secures the fit. Engineered mesh upper offers zoned breathability, support, and comfort. Textile lining enhance",
    "recommended": "Not specified",
    "sourcePrice": 69.99,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "13.0",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/Dark Amethyst": [
        {
          "sku": "1217401",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "1217401",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "1217401",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "1217401",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "1217401",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "1217401",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "1217401",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "1217401",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "1217401",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "1217401",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "1217401",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "1217401",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "1217401",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/1217401_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 39,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "PUMA MB.04 Low - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "448698"
  },
  {
    "id": "fl-h1118600",
    "mrp": 14938.72,
    "sku": "H1118600",
    "use": "Basketball",
    "code": "H1118600",
    "name": "Nike KD 19",
    "sole": "Not specified",
    "tags": [
      "NIKE",
      "Basketball",
      "Men",
      "Basketball"
    ],
    "brand": "NIKE",
    "model": "Nike KD 19",
    "price": 14938.72,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#557c5b",
        "name": "Hyper Pink/Stadium Green/University Gold",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/H1118600_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/H1118600_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/H1118600_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/H1118600_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/H1118600_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/H1118600_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/H1118600_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Basketball",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 155,
    "sourceUrl": "https://www.footlocker.com/product/~/H1118600.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Channel your inner killer on the court with the NIKE KD 19. Designed for explosive play, these signature sneakers feature a bold TPU support structure and double-layer construction for ultimate midfoot lockdown. Experience unmatched energy return with full-length Zoom Strobel cushioning and responsive Cushion 3.0 foam for a bouncy feel that keeps you ahead of the competition.Double-layer construction enhances midfoot stability and lockdownFull-length Zoom Strobel unit delivers explosive responsivenessCushion 3.0 foam and 3D insole provide maximum underfoot comfortTorsion-resistant plate strengthens flexibility and movementMesh tongue improves breathability for cool comfort during playMaterial & CareSynthetic and mesh upperRubber outsoleSize & FitLow-top silhouette for unrestricted ankle mobilityLace-up closure for a secure and personalized fitMid-vamp coverage offers balanced support",
    "recommended": "Not specified",
    "sourcePrice": 155,
    "sourceSizes": [
      "5.0",
      "5.5",
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "13.5",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Hyper Pink/Stadium Green/University Gold": [
        {
          "sku": "H1118600",
          "size": "5.0",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "5.5",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "13.5",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "H1118600",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/H1118600_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike KD 19 - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "470782"
  },
  {
    "id": "fl-u0779100",
    "mrp": 20239.56,
    "sku": "U0779100",
    "use": "Basketball",
    "code": "U0779100",
    "name": "Nike G.T. Cut 1",
    "sole": "gold tones hit the tongue, collar, and heelTranslucent outsole adds a modern, court-ready edgeTitan 22 collaboration honors Philippine basketball cultur",
    "tags": [
      "NIKE",
      "Basketball",
      "Men",
      "Basketball"
    ],
    "brand": "NIKE",
    "model": "Nike G.T. Cut 1",
    "price": 20239.56,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#f2f1eb",
        "name": "White/Chile Red/Blue",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/U0779100_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/U0779100_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/U0779100_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/U0779100_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/U0779100_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/U0779100_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/U0779100_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Basketball",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 210,
    "sourceUrl": "https://www.footlocker.com/product/~/U0779100.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Step onto the court with a story worth telling in the Nike GT Cut 1 x Titan 22. Debuted by rookie guard Dylan Harper during the Spurs' playoff run, this collaboration with the Philippines-based basketball retailer celebrates Harper's Filipino heritage and Titan 22's deep ties to hoops culture. A bold black base, metallic silver accents, and warm cashmere hits make this signature release a standout on and off the hardwood.Bold black base with metallic silver accents and orange detailsLarge iridescent Swoosh stretches across the side panelOrange and gold tones hit the tongue, collar, and heelTranslucent outsole adds a modern, court-ready edgeTitan 22 collaboration honors Philippine basketball cultureMaterial & CareTranslucent outsoleSize & FitLace-up closure ensures a secure, adjustable fitCourt-ready silhouette built for basketball performance",
    "recommended": "Not specified",
    "sourcePrice": 210,
    "sourceSizes": [
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "13.5",
      "14.0",
      "15.0",
      "16.0",
      "17.0",
      "18.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "White/Chile Red/Blue": [
        {
          "sku": "U0779100",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "13.5",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "15.0",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "16.0",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "17.0",
          "stock": 0
        },
        {
          "sku": "U0779100",
          "size": "18.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/U0779100_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike G.T. Cut 1 - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "474793"
  },
  {
    "id": "fl-h2881600",
    "mrp": 13011.15,
    "sku": "H2881600",
    "use": "Basketball",
    "code": "H2881600",
    "name": "Nike Sabrina 3",
    "sole": "These shoes feature an exceptionally powerful midsole with two types of foam: Cushlon 3",
    "tags": [
      "NIKE",
      "Basketball",
      "Men",
      "Basketball"
    ],
    "brand": "NIKE",
    "model": "Nike Sabrina 3",
    "price": 6745.56,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#b5363e",
        "name": "Pink Oxford/Coconut Milk/Red Stardust",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/H2881600_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/H2881600_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/H2881600_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/H2881600_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/H2881600_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/H2881600_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/H2881600_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Basketball",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 135,
    "sourceUrl": "https://www.footlocker.com/product/~/H2881600.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Sabrina Ionescu’s game is built on relentless drive, precision, and unshakable determination—a legacy forged through discipline and excellence. The Nike Sabrina 3 captures that same fierce mentality. Engineered to channel her lethal style of play, these shoes blend technology, power, and support to help you display your pro-level skills. The graphics of drawn-up plays and blueprint paper on the heel, the shoebox, and the tissue paper in the box serve as a reminder to aim for nothing but the net. These shoes feature an exceptionally powerful midsole with two types of foam: Cushlon 3.0 foam for a plush underfoot experience and a firmer Cushlon foam wrapped around it for optimum stability. Lace up the Nike Sabrina 3 and build your own path to greatness. Nike Sabrina 3 features: Lightweight, secure upper with cables offers comfort and support. Light blue design with precise white accents ref",
    "recommended": "Not specified",
    "sourcePrice": 69.99,
    "sourceSizes": [
      "3.5",
      "4.0",
      "4.5",
      "5.0",
      "5.5",
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "13.5",
      "14.0",
      "14.5",
      "15.0",
      "15.5",
      "16.0",
      "17.0",
      "18.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Pink Oxford/Coconut Milk/Red Stardust": [
        {
          "sku": "H2881600",
          "size": "3.5",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "4.0",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "4.5",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "5.0",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "5.5",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "13.5",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "14.5",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "15.0",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "15.5",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "16.0",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "17.0",
          "stock": 0
        },
        {
          "sku": "H2881600",
          "size": "18.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/H2881600_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 48,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Sabrina 3 - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "449751"
  },
  {
    "id": "fl-iv658590",
    "mrp": 19275.77,
    "sku": "IV658590",
    "use": "Basketball",
    "code": "IV658590",
    "name": "Nike Kobe IV Protro",
    "sole": "Not specified",
    "tags": [
      "NIKE",
      "Basketball",
      "Men",
      "Basketball"
    ],
    "brand": "NIKE",
    "model": "Nike Kobe IV Protro",
    "price": 19275.77,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#888888",
        "name": "Multi /Multi",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/IV658590_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/IV658590_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/IV658590_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/IV658590_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/IV658590_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/IV658590_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/IV658590_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Basketball",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 200,
    "sourceUrl": "https://www.footlocker.com/product/~/IV658590.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "An Updated Icon&nbsp;The Men&rsquo;s Nike Kobe IV Protro is Kobe Bryant&rsquo;s fourth signature basketball shoe, now updated to modern performance standards. Originally released in 2004, the signature line of kicks has been upgraded to ensure that it&rsquo;s still a formidable on-court contender today. By just looking at the Protro (&ldquo;Performance Retro&rdquo;), you'll see many of the original features along with a smooth, responsive feel underfoot. Simply put, the Kobe IV Protro offers the best of both worlds with a classic look and modern comfort.Always OG&nbsp;The Kobe IV Protro pays homage to the silhouette worn on court by the Black Mamba himself while ensuring you can compete on the hardwood. An essential for every Kobe Bryant sneaker fan, this kick is designed to bring it on the court. Whatever the colorway, you&rsquo;ll be rocking the latest take on one of the most classic N",
    "recommended": "Not specified",
    "sourcePrice": 200,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "13.0",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Multi /Multi": [
        {
          "sku": "IV658590",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "IV658590",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "IV658590",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "IV658590",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "IV658590",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "IV658590",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "IV658590",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "IV658590",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "IV658590",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "IV658590",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "IV658590",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "IV658590",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "IV658590",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/IV658590_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Kobe IV Protro - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "325001"
  },
  {
    "id": "fl-m4135001",
    "mrp": 12529.25,
    "sku": "M4135001",
    "use": "Basketball",
    "code": "M4135001",
    "name": "Nike JA 4",
    "sole": "idfoot for stability during quick shiftsDurable rubber outsole with logo traction pattern offers superior gripPersonalized typography molded into the ou",
    "tags": [
      "NIKE",
      "Basketball",
      "Men",
      "Basketball"
    ],
    "brand": "NIKE",
    "model": "Nike JA 4",
    "price": 12529.25,
    "sport": "Basketball",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/Metallic Silver/Cobalt Bliss",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/M4135001_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/M4135001_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/M4135001_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/M4135001_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/M4135001_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/M4135001_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/M4135001_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Basketball",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 130,
    "sourceUrl": "https://www.footlocker.com/product/~/M4135001.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Unguardable nightmares start here with the NIKE Ja 4. Built for rim-rattling verticals and sudden shifts, these basketball kicks feature the explosive lift of Cushion 3.0 foam paired with a stabilizing JA-frame. Take flight and land securely while Ja’s own words under every step remind you to stay fearless on the court.Textured haptic overlay adds dimension and durability to the upperCushion 3.0 foam provides explosive lift and soft landingsJA-frame wraps the midfoot for stability during quick shiftsDurable rubber outsole with logo traction pattern offers superior gripPersonalized typography molded into the outsole and JA-frameMaterial & CareFoam and textile upperRubber outsoleSize & FitLow-cut collarLace-up closure",
    "recommended": "Not specified",
    "sourcePrice": 130,
    "sourceSizes": [
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "13.5",
      "14.0",
      "15.0",
      "16.0",
      "17.0",
      "18.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/Metallic Silver/Cobalt Bliss": [
        {
          "sku": "M4135001",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "13.5",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "15.0",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "16.0",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "17.0",
          "stock": 0
        },
        {
          "sku": "M4135001",
          "size": "18.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/M4135001_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike JA 4 - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "475044"
  },
  {
    "id": "fl-10256319",
    "mrp": 8192.2,
    "sku": "10256319",
    "use": "Lifestyle",
    "code": "10256319",
    "name": "Reebok Workout Plus Suede",
    "sole": ", premium touch, while the signature H-strap and split outsole keep the look unmistakably Reebok",
    "tags": [
      "REEBOK",
      "Casual Shoes",
      "Men",
      "Lifestyle"
    ],
    "brand": "REEBOK",
    "model": "Reebok Workout Plus Suede",
    "price": 7709.34,
    "sport": "Lifestyle",
    "upper": "suede upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/Alabaster/Chalk",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/10256319_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/10256319_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/10256319_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/10256319_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/10256319_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/10256319_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/10256319_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Casual Shoes",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 85,
    "sourceUrl": "https://www.footlocker.com/product/~/10256319.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Step back into an era that defined effortless cool with the Reebok Workout Plus Suede. These shoes take an ‘80s icon and give it that smooth, everyday feel you’ll reach for without thinking. The full suede upper infuses a soft, premium touch, while the signature H-strap and split outsole keep the look unmistakably Reebok. The clean white stitching complemented by a milky translucent cupsole delivers a stylish look with a vintage twist. Soft on the step and easy on the eyes, the Reebok Workout Plus Suede fits seamlessly into your daily rotation. Reebok Workout Plus Suede features: Standard fit brings a comfortable feel. Lace closure ensures a secure fit. Textile lining provides all-day ease. Milky translucent rubber outsole offers reliable grip.",
    "recommended": "Not specified",
    "sourcePrice": 79.99,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/Alabaster/Chalk": [
        {
          "sku": "10256319",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "10256319",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "10256319",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "10256319",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "10256319",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "10256319",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "10256319",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "10256319",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "10256319",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "10256319",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "10256319",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "10256319",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "10256319",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "10256319",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/10256319_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 6,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Reebok Workout Plus Suede - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "468044"
  },
  {
    "id": "fl-hj875601",
    "mrp": 14938.72,
    "sku": "HJ875601",
    "use": "Training",
    "code": "HJ875601",
    "name": "Nike Metcon 10",
    "sole": "The updated midsole features lightweight ReactX foam for increased energy return, keeping transitions smooth",
    "tags": [
      "NIKE",
      "Training",
      "Men",
      "Training"
    ],
    "brand": "NIKE",
    "model": "Nike Metcon 10",
    "price": 14938.72,
    "sport": "Training",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#b5363e",
        "name": "Picante Red/Tough Red/Phantom",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/HJ875601_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/HJ875601_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/HJ875601_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/HJ875601_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/HJ875601_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/HJ875601_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/HJ875601_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Training",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 155,
    "sourceUrl": "https://www.footlocker.com/product/~/HJ875601.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Engineered for intensity, the Nike Metcon 10 delivers the perfect balance of power, precision, and performance. Designed to meet the demands of elite cross-training, these next-gen shoes refine stability, responsiveness, and grip to help you move with purpose and push past limits. A Hyperlift plate under the heel anchors your stance during heavy lifts, while a wider toe box gives your feet room to spread out and generate maximum force. The updated midsole features lightweight ReactX foam for increased energy return, keeping transitions smooth and responsive through every jump, sprint, and rep. Strategic grip zones at the midfoot and toe enhance traction where it matters most, while a new outsole pattern ensures a flat, sticky base for confident lifts—even in high-heat sessions. Updated with better energy return and lighter weight than Metcon 9, the Nike Metcon 10 is ready for whatever yo",
    "recommended": "Not specified",
    "sourcePrice": 155,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Picante Red/Tough Red/Phantom": [
        {
          "sku": "HJ875601",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "HJ875601",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "HJ875601",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "HJ875601",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "HJ875601",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "HJ875601",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "HJ875601",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "HJ875601",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "HJ875601",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "HJ875601",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "HJ875601",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "HJ875601",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "HJ875601",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "HJ875601",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/HJ875601_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Metcon 10 - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "466454"
  },
  {
    "id": "fl-i7406001",
    "mrp": 12047.36,
    "sku": "I7406001",
    "use": "Training",
    "code": "I7406001",
    "name": "Nike Free Metcon 7",
    "sole": "Free technology and paired with a supportive two-part midsole, these sneakers deliver the perfect balance of movement and stability for all types of tr",
    "tags": [
      "NIKE",
      "Training",
      "Women",
      "Training"
    ],
    "brand": "NIKE",
    "model": "Nike Free Metcon 7",
    "price": 12047.36,
    "sport": "Training",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/Black/Anthracite",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/I7406001_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/I7406001_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/I7406001_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/I7406001_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/I7406001_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/I7406001_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/I7406001_01"
        }
      }
    ],
    "gender": "Women",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Training",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 125,
    "sourceUrl": "https://www.footlocker.com/product/~/I7406001.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Light up every workout with next-level performance in the Nike Free Metcon 7. Constructed with the famed forefoot Nike Free technology and paired with a supportive two-part midsole, these sneakers deliver the perfect balance of movement and stability for all types of training. A full-length rubber outsole supports the foam for added durability, while an accommodating keyhole tongue makes slipping in fast and fuss-free. Midsole-connected webbing enhances the lacing system, securing the midfoot so you stay locked in and ready for more. Engineered for excellence, the Nike Free Metcon 7 ensures every step fuels your progress. Nike Free Metcon 7 features: Traditional lacing gives a customizable fit. Sturdy construction around the toe tip and the side of the shoe supports high-intensity workouts. Low-cut collar looks sleek and feels comfortable. Extra foam in the heel improves stability and en",
    "recommended": "Not specified",
    "sourcePrice": 125,
    "sourceSizes": [
      "5.0",
      "5.5",
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/Black/Anthracite": [
        {
          "sku": "I7406001",
          "size": "5.0",
          "stock": 0
        },
        {
          "sku": "I7406001",
          "size": "5.5",
          "stock": 0
        },
        {
          "sku": "I7406001",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "I7406001",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "I7406001",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "I7406001",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "I7406001",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "I7406001",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "I7406001",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "I7406001",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "I7406001",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "I7406001",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "I7406001",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "I7406001",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "I7406001",
          "size": "12.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/I7406001_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Free Metcon 7 - Women's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "471623"
  },
  {
    "id": "fl-mr530sg",
    "mrp": 10601.67,
    "sku": "MR530SG",
    "use": "Lifestyle",
    "code": "MR530SG",
    "name": "New Balance 530",
    "sole": "ith hints of retro flair, these shoes bring the ABZORB midsole to your daily runs to cushion every landing",
    "tags": [
      "NEW BALANCE",
      "Casual Shoes",
      "Women",
      "Lifestyle"
    ],
    "brand": "NEW BALANCE",
    "model": "New Balance 530",
    "price": 10601.67,
    "sport": "Lifestyle",
    "upper": "mesh upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#f2f1eb",
        "name": "White/Natural Indigo",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/MR530SG_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/MR530SG_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/MR530SG_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/MR530SG_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/MR530SG_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/MR530SG_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/MR530SG_01"
        }
      }
    ],
    "gender": "Women",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Casual Shoes",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 110,
    "sourceUrl": "https://www.footlocker.com/product/~/MR530SG.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Where heritage meets performance. New Balance's rich heritage in sports takes a fresh new step in the New Balance 530. With hints of retro flair, these shoes bring the ABZORB midsole to your daily runs to cushion every landing. Slip into the New Balance 530 and let it take you to new heights with every run. Modern tech ensures all-day comfort.Long days on your feet call for comfort that still looks polished. The New Balance 530 blends heritage running style with everyday wearability, pairing breathable mesh and layered overlays with ABZORB cushioning for a light, supportive ride from morning errands to weekend travel. ABZORB midsole helps cushion every step.Breathable mesh upper adds airflow and a lightweight feel.Layered synthetic overlays create a classic running-inspired look.Rubber outsole adds durable everyday traction.",
    "recommended": "Not specified",
    "sourcePrice": 110,
    "sourceSizes": [
      "5.0",
      "5.5",
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "White/Natural Indigo": [
        {
          "sku": "MR530SG",
          "size": "5.0",
          "stock": 0
        },
        {
          "sku": "MR530SG",
          "size": "5.5",
          "stock": 0
        },
        {
          "sku": "MR530SG",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "MR530SG",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "MR530SG",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "MR530SG",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "MR530SG",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "MR530SG",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "MR530SG",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "MR530SG",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "MR530SG",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "MR530SG",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "MR530SG",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "MR530SG",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "MR530SG",
          "size": "12.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/MR530SG_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "New Balance 530 - Women's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "237600"
  },
  {
    "id": "fl-nn429002",
    "mrp": 12047.36,
    "sku": "NN429002",
    "use": "Lifestyle",
    "code": "NN429002",
    "name": "Nike P-6000",
    "sole": "Rounded off with a foam midsole that provides lightweight cushioning, the Nike P6000 is engineered for every pace",
    "tags": [
      "NIKE",
      "Casual Shoes",
      "Men",
      "Lifestyle"
    ],
    "brand": "NIKE",
    "model": "Nike P-6000",
    "price": 12047.36,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#f2f1eb",
        "name": "Silver/Navy/White",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/NN429002_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/NN429002_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/NN429002_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/NN429002_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/NN429002_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/NN429002_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/NN429002_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Casual Shoes",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 125,
    "sourceUrl": "https://www.footlocker.com/product/~/NN429002.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Always stay future-forward with the Nike P6000. Refreshing the 2006 Air Pegasus with space-age details, these shoes ensure your strides become a journey of comfort and style. Decked out with an aesthetic that's out of this world, these breathable sneakers come with a metallic fabric in the upper that features horizontal and vertical overlays in chrome synthetic leather. Rounded off with a foam midsole that provides lightweight cushioning, the Nike P6000 is engineered for every pace. So, whatever's next, take it on in style! Reflective details enable visibility in low-light conditions. Rubber outsole provides a no-slip grip and traction and adds durability. *Not intended for use as Personal Protective Equipment.Long days on your feet call for a sneaker that looks sharp and stays easy underfoot. Inspired by early-2000s Nike running style, the Nike P-6000 blends breathable mesh, layered syn",
    "recommended": "Not specified",
    "sourcePrice": 125,
    "sourceSizes": [
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "13.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Silver/Navy/White": [
        {
          "sku": "NN429002",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "NN429002",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "NN429002",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "NN429002",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "NN429002",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "NN429002",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "NN429002",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "NN429002",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "NN429002",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "NN429002",
          "size": "13.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/NN429002_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike P-6000 - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "426685"
  },
  {
    "id": "fl-39338001",
    "mrp": 11565.46,
    "sku": "39338001",
    "use": "Lifestyle",
    "code": "39338001",
    "name": "PUMA RS-X T3ch Panthro",
    "sole": "The dynamic midsole design, which anchors the energetic colourways, cushions your journey, while the THUNDERC",
    "tags": [
      "PUMA",
      "Sneakers",
      "Men",
      "Lifestyle"
    ],
    "brand": "PUMA",
    "model": "PUMA RS-X T3ch Panthro",
    "price": 11565.46,
    "sport": "Lifestyle",
    "upper": "Textile upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#888888",
        "name": "Harbor Mist/Royal",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/39338001_a1",
          "back": "https://assets.footlocker.com/is/image/FLDM/39338001_a1",
          "side": "https://assets.footlocker.com/is/image/FLDM/39338001_a1",
          "sole": "https://assets.footlocker.com/is/image/FLDM/39338001_a1",
          "front": "https://assets.footlocker.com/is/image/FLDM/39338001_a1",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/39338001_a1",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/39338001_a1"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Sneakers",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 120,
    "sourceUrl": "https://www.footlocker.com/product/~/39338001.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Step into the PUMA RS-X T3ch Panthro and stay ahead of time. Modified with a futuristic take, these sneakers from the iconic RS-X line continue to resonate in the 21st century with the newest proportions and innovation-led design. Featuring open mesh on the toe and heel and a leather overlay on the lateral side, these shoes offer the right amount of comfort and breathability. Set apart by multi-coloured aglets and a co-branded sockliner featuring Puma x Thundercats x Alexander-John, these showstopping silhouettes turn heads wherever you go. The dynamic midsole design, which anchors the energetic colourways, cushions your journey, while the THUNDERCATS printed on the TPU heel pull locks your statement style. You’ll be ready to take on the future in style with the PUMA RS-X T3ch Panthro. PUMA RS-X T3ch Panthro features: Textile upper with leather overlays offers maximum comfort. Transparen",
    "recommended": "Not specified",
    "sourcePrice": 120,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "13.0",
      "14.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Harbor Mist/Royal": [
        {
          "sku": "39338001",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "39338001",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "39338001",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "39338001",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "39338001",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "39338001",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "39338001",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "39338001",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "39338001",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "39338001",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "39338001",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "39338001",
          "size": "14.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/39338001_a1",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "PUMA RS-X T3ch Panthro - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "417542"
  },
  {
    "id": "fl-gy7235",
    "mrp": 6264.63,
    "sku": "GY7235",
    "use": "Lifestyle",
    "code": "GY7235",
    "name": "Reebok CL Nylon",
    "sole": "Not specified",
    "tags": [
      "REEBOK",
      "Casual Shoes",
      "Men",
      "Lifestyle"
    ],
    "brand": "REEBOK",
    "model": "Reebok CL Nylon",
    "price": 6264.63,
    "sport": "Lifestyle",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#f2f1eb",
        "name": "White/White",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/GY7235_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/GY7235_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/GY7235_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/GY7235_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/GY7235_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/GY7235_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/GY7235_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Casual Shoes",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 65,
    "sourceUrl": "https://www.footlocker.com/product/~/GY7235.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "'Comfort, style, signature Reebok tech, you name it, and the Reebok CL Nylon has it. Taking design inspiration from the '90s, these classic everyday sneakers add a sophisticated touch to your look with a smooth nylon upper. The buttery-soft suede overlays add layers to the eye-catching design, while classic laces keep your feet locked in and ready. Timelessly authentic and tech-driven, the Reebok CL Nylon has levels to it. Suede and nylon upper adds style. Easygoing comfort and throwback style make this a pair you can wear on repeat, from workdays to weekends. The Reebok CL Nylon blends a lightweight feel with clean retro lines, pairing a smooth nylon upper with soft suede overlays for a classic look that works across your everyday rotation.Suede and nylon upper adds lightweight comfort and layered texture.Lace-up closure helps provide a secure, classic fit.Low-profile retro runner desig",
    "recommended": "Not specified",
    "sourcePrice": 65,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "White/White": [
        {
          "sku": "GY7235",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "GY7235",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "GY7235",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "GY7235",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "GY7235",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "GY7235",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "GY7235",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "GY7235",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "GY7235",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "GY7235",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "GY7235",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "GY7235",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "GY7235",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "GY7235",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/GY7235_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Reebok CL Nylon - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "393025"
  },
  {
    "id": "fl-q2593801",
    "mrp": 21203.35,
    "sku": "Q2593801",
    "use": "Running",
    "code": "Q2593801",
    "name": "Nike Pegasus Premium",
    "sole": "ed shoes are engineered with a sustainable ReactX foam midsole that surrounds the forefoot and provides an energised ride for everyday road running",
    "tags": [
      "NIKE",
      "Running",
      "Women",
      "Running"
    ],
    "brand": "NIKE",
    "model": "Nike Pegasus Premium",
    "price": 10600.71,
    "sport": "Running",
    "upper": "Not specified",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#888888",
        "name": "Pure Platinum/Guava Ice/Sail",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/Q2593801_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/Q2593801_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/Q2593801_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/Q2593801_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/Q2593801_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/Q2593801_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/Q2593801_01"
        }
      }
    ],
    "gender": "Women",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Running",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 220,
    "sourceUrl": "https://www.footlocker.com/product/~/Q2593801.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Run faster, go further! Lighter and more responsive than its predecessor, the Nike Pegasus Premium lets you take your running to new heights. Backed by a triple stack of the most powerful technologies, these shoes feature ZoomX foam, a sculpted Air Zoom unit, and ReactX foam to help you push boundaries and run beyond limits. The lighter-than-air upper decreases weight and increases breathability, so you can fly faster with ease. The full-length, superlight ZoomX foam provides springy cushioning, while the full-length Air Zoom unit helps you propel forward like never before. Crafted for performance and the planet, these cushioned shoes are engineered with a sustainable ReactX foam midsole that surrounds the forefoot and provides an energised ride for everyday road running. Fast, efficient, and always ahead of the curve, the Nike Pegasus Premium lets you rack up mile after mile in no time.",
    "recommended": "Not specified",
    "sourcePrice": 109.99,
    "sourceSizes": [
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Pure Platinum/Guava Ice/Sail": [
        {
          "sku": "Q2593801",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "Q2593801",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "Q2593801",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "Q2593801",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "Q2593801",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "Q2593801",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "Q2593801",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "Q2593801",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "Q2593801",
          "size": "10.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/Q2593801_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 50,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Pegasus Premium - Women's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "449723"
  },
  {
    "id": "fl-u740bm2",
    "mrp": 11083.57,
    "sku": "U740BM2",
    "use": "Lifestyle",
    "code": "U740BM2",
    "name": "New Balance 740",
    "sole": "The segmented midsole and streamlined design maintain the classic look of the early 2000s",
    "tags": [
      "NEW BALANCE",
      "Casual Shoes",
      "Men",
      "Lifestyle"
    ],
    "brand": "NEW BALANCE",
    "model": "New Balance 740",
    "price": 11083.57,
    "sport": "Lifestyle",
    "upper": "knit mesh upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/Silver",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/U740BM2_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/U740BM2_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/U740BM2_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/U740BM2_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/U740BM2_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/U740BM2_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/U740BM2_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Casual Shoes",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 115,
    "sourceUrl": "https://www.footlocker.com/product/~/U740BM2.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Versatile, timeless, and stylish, the New Balance 740 lets you unleash your potential with superior performance and an iconic look. Constructed with an open knit mesh upper, these sneakers offer enhanced breathability and a lightweight feel, perfect for all-day wear. The segmented midsole and streamlined design maintain the classic look of the early 2000s. Accented with a molded TPU 'N' logo and vibrant two-tone details, the New Balance 740 is as distinctive as it is familiar. New Balance 740 features: Mesh and angular overlays create a unique, distinctive look. Reflective accents enable low-light visibility. ABZORB midsole absorbs impact through cushioning and compression resistance. Long days on your feet demand a shoe that keeps up, and the New Balance 740 delivers that and then some. Rooted in early 2000s running heritage, this retro-inspired trainer pairs a clean, angular silhouette",
    "recommended": "Not specified",
    "sourcePrice": 115,
    "sourceSizes": [
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "13.0",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/Silver": [
        {
          "sku": "U740BM2",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "U740BM2",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "U740BM2",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "U740BM2",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "U740BM2",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "U740BM2",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "U740BM2",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "U740BM2",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "U740BM2",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "U740BM2",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "U740BM2",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "U740BM2",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/U740BM2_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "New Balance 740 - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "440854"
  },
  {
    "id": "fl-v9273001",
    "mrp": 10601.67,
    "sku": "V9273001",
    "use": "Running",
    "code": "V9273001",
    "name": "Nike Air Winflo 12",
    "sole": "A newly upgraded Cushlon foam midsole delivers a softer, more supportive ride, while the increased foam stack height ensures a",
    "tags": [
      "NIKE",
      "Running",
      "Women",
      "Running"
    ],
    "brand": "NIKE",
    "model": "Nike Air Winflo 12",
    "price": 10601.67,
    "sport": "Running",
    "upper": "mesh upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/Black",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/V9273001_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/V9273001_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/V9273001_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/V9273001_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/V9273001_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/V9273001_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/V9273001_01"
        }
      }
    ],
    "gender": "Women",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Running",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 110,
    "sourceUrl": "https://www.footlocker.com/product/~/V9273001.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Find your rhythm and push your pace with the Nike Air Winflo 12. Built for runners who crave reliable cushioning and day-long comfort, this updated version pairs Nike Air Zoom heel with a higher foam stack to keep you moving smoothly from the first stride to the last. Featuring an open-holed mesh upper and roomier toe box, these running shoes are ready for everything and anything. A newly upgraded Cushlon foam midsole delivers a softer, more supportive ride, while the increased foam stack height ensures a plush feel underfoot all day long. Unlock steady speed and cushioned support with the Nike Air Winflo 12. Nike Air Winflo 12 features: Open-holed mesh upper enhances breathability. Classic laces ensure a secure fit. Increased foam stack heights in the midsole deliver all-day comfort. Widened toe box offers enough room to move. Low-cut collar allows natural ankle movement. Top-loaded Air",
    "recommended": "Not specified",
    "sourcePrice": 110,
    "sourceSizes": [
      "5.0",
      "5.5",
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/Black": [
        {
          "sku": "V9273001",
          "size": "5.0",
          "stock": 0
        },
        {
          "sku": "V9273001",
          "size": "5.5",
          "stock": 0
        },
        {
          "sku": "V9273001",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "V9273001",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "V9273001",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "V9273001",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "V9273001",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "V9273001",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "V9273001",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "V9273001",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "V9273001",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "V9273001",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "V9273001",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "V9273001",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "V9273001",
          "size": "12.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/V9273001_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Air Winflo 12 - Women's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "471942"
  },
  {
    "id": "fl-2030bwht",
    "mrp": 14938.72,
    "sku": "2030BWHT",
    "use": "Running",
    "code": "2030BWHT",
    "name": "HOKA Clifton 10",
    "sole": "Featuring a fine-tuned midsole geometry and an improved forefoot fit, these silhouettes provide exceptional comfort and",
    "tags": [
      "HOKA",
      "Running",
      "Men",
      "Running"
    ],
    "brand": "HOKA",
    "model": "HOKA Clifton 10",
    "price": 11950.01,
    "sport": "Running",
    "upper": "knit upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "White/Black",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/2030BWHT_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/2030BWHT_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/2030BWHT_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/2030BWHT_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/2030BWHT_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/2030BWHT_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/2030BWHT_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Running",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 155,
    "sourceUrl": "https://www.footlocker.com/product/~/2030BWHT.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Unleash your full potential on the road or trail with the Hoka Clifton 10—where every step feels like running on clouds. Featuring a fine-tuned midsole geometry and an improved forefoot fit, these silhouettes provide exceptional comfort and support through every stride. The new double-lace lock system enables easy on and off, while the refined heel with an enhanced underfoot transition ensures a smooth and stable ride. Boasting a redefined rearfoot-focused Active Foot Frame, these shoes improve stability and support for a seamless running experience. Push your limits and experience peak performance in the Hoka Clifton 10. Hoka Clifton 10 features: Jacquard knit upper offers breathability and a snug fit. Molded EVA sockliner adds comfort and support. CMEVA midsole with Meta-Rocker technology delivers cushioning. Reflective upper details enhance low-light visibility. Inherently durable abr",
    "recommended": "Not specified",
    "sourcePrice": 123.99,
    "sourceSizes": [
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "White/Black": [
        {
          "sku": "2030BWHT",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "2030BWHT",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "2030BWHT",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "2030BWHT",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "2030BWHT",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "2030BWHT",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "2030BWHT",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "2030BWHT",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "2030BWHT",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "2030BWHT",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "2030BWHT",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "2030BWHT",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "2030BWHT",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "2030BWHT",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "2030BWHT",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/2030BWHT_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 20,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "HOKA Clifton 10 - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "440858"
  },
  {
    "id": "fl-l4249219",
    "mrp": 13974.93,
    "sku": "L4249219",
    "use": "Running",
    "code": "L4249219",
    "name": "Salomon XT-Whisper",
    "sole": "Textile midsole provides lightweight cushioning",
    "tags": [
      "SALOMON",
      "Running",
      "Men",
      "Running"
    ],
    "brand": "SALOMON",
    "model": "Salomon XT-Whisper",
    "price": 13974.93,
    "sport": "Running",
    "upper": "Synthetic upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#b9bdc4",
        "name": "Silver/Castlerock",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/L4249219_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/L4249219_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/L4249219_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/L4249219_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/L4249219_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/L4249219_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/L4249219_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Weight: 10",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Running",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 145,
    "sourceUrl": "https://www.footlocker.com/product/~/L4249219.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Own the night in the Salomon XT-Whisper. Designed to harness the quiet power of darkness, this reimagined silhouette comes alive under the flash of city lights. A sleek black-and-silver palette sets the tone, while reflective accents and ripstop details deliver a bold, urban edge that thrives after dark. Built for those who move when the city sleeps, the Salomon XT-Whisper blends rugged performance with street-ready style for a look that’s as mysterious as the night itself. Salomon XT-Whisper features: Textile/Synthetic upper adds durability and structure. Textile midsole provides lightweight cushioning. Rubber outsole offers durable traction. Weight: 10.23 oz.",
    "recommended": "Not specified",
    "sourcePrice": 145,
    "sourceSizes": [
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "13.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Silver/Castlerock": [
        {
          "sku": "L4249219",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "L4249219",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "L4249219",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "L4249219",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "L4249219",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "L4249219",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "L4249219",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "L4249219",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "L4249219",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "L4249219",
          "size": "13.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/L4249219_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Salomon XT-Whisper - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "467159"
  },
  {
    "id": "fl-d2723001",
    "mrp": 13974.93,
    "sku": "D2723001",
    "use": "Running",
    "code": "D2723001",
    "name": "Nike Air Zoom Pegasus 41",
    "sole": "Not specified",
    "tags": [
      "NIKE",
      "Running",
      "Women",
      "Running"
    ],
    "brand": "NIKE",
    "model": "Nike Air Zoom Pegasus 41",
    "price": 6986.5,
    "sport": "Running",
    "upper": "mesh upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/Black",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/D2723001_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/D2723001_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/D2723001_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/D2723001_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/D2723001_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/D2723001_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/D2723001_01"
        }
      }
    ],
    "gender": "Women",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Not specified",
    "fitType": "Not specified",
    "category": "Running",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 145,
    "sourceUrl": "https://www.footlocker.com/product/~/D2723001.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "'Faithful, reliable, and revolutionary, the Nike Air Zoom Pegasus 41 is unlike any other Peg that has ever been made before. Built with the same internal materials and padding as its predecessor, these running silhouettes are here to push the running world forward while still putting your wants and needs on top of the priority list. The two Zoom Air units combined with the Nike ReactX foam promise you a bouncy, springy sensation and an energised feel at toe-off. Interesting fact: the Nike ReactX foam is engineered to reduce carbon footprints by at least 43%, so you can take a stride towards a sustainable future. Whether you're logging long marathon miles or squeezing in a speed session before the sun goes down, you can put your faith in the Nike Air Zoom Pegasus 41‚Äîday after day, run after run. Nike Air Zoom Pegasus 41 features: Engineered mesh upper feels lightweight and breathable. B",
    "recommended": "Not specified",
    "sourcePrice": 72.49,
    "sourceSizes": [
      "5.0",
      "5.5",
      "6.0",
      "6.5",
      "7.0",
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/Black": [
        {
          "sku": "D2723001",
          "size": "5.0",
          "stock": 0
        },
        {
          "sku": "D2723001",
          "size": "5.5",
          "stock": 0
        },
        {
          "sku": "D2723001",
          "size": "6.0",
          "stock": 0
        },
        {
          "sku": "D2723001",
          "size": "6.5",
          "stock": 0
        },
        {
          "sku": "D2723001",
          "size": "7.0",
          "stock": 0
        },
        {
          "sku": "D2723001",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "D2723001",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "D2723001",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "D2723001",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "D2723001",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "D2723001",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "D2723001",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "D2723001",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "D2723001",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "D2723001",
          "size": "12.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/D2723001_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 50,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Air Zoom Pegasus 41 - Women's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "429341"
  },
  {
    "id": "fl-1906ros",
    "mrp": 14938.72,
    "sku": "1906ROS",
    "use": "Lifestyle",
    "code": "1906ROS",
    "name": "New Balance 1906R",
    "sole": "rovides breathability and durability, while the ABZORB midsole absorbs impact through cushioning and compression resistance",
    "tags": [
      "NEW BALANCE",
      "Casual Shoes",
      "Men",
      "Lifestyle"
    ],
    "brand": "NEW BALANCE",
    "model": "New Balance 1906R",
    "price": 14938.72,
    "sport": "Lifestyle",
    "upper": "leather and mesh upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/Silver",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/1906ROS_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/1906ROS_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/1906ROS_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/1906ROS_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/1906ROS_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/1906ROS_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/1906ROS_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Weight: 13 oz",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Casual Shoes",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 155,
    "sourceUrl": "https://www.footlocker.com/product/~/1906ROS.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Run better and farther with the New Balance 1906R. Inspired by the 2000s running style, these sneakers are comfortable, stylish, and an ideal go-to shoe option. The nubuck leather and mesh upper provides breathability and durability, while the ABZORB midsole absorbs impact through cushioning and compression resistance. Ensuring superior shock absorption and a smooth ride is the N-ergy outsole base of the shoe. Let the New Balance 1906R amp up your runs in style. Stability Web outsole technology provides added arch support. Lace-up closure offers a secure fit. Weight: 13 oz. Long days on your feet feel easier in a pair that blends running-inspired comfort with standout everyday style. The New Balance 1906R brings back early-2000s performance design with breathable support, cushioned impact protection, and a stable ride that works for walks, commutes, and daily rotation.Mesh upper with lay",
    "recommended": "Not specified",
    "sourcePrice": 155,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "13.0",
      "14.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/Silver": [
        {
          "sku": "1906ROS",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "1906ROS",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "1906ROS",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "1906ROS",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "1906ROS",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "1906ROS",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "1906ROS",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "1906ROS",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "1906ROS",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "1906ROS",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "1906ROS",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "1906ROS",
          "size": "14.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/1906ROS_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "New Balance 1906R - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "416969"
  },
  {
    "id": "fl-jp7149",
    "mrp": 14456.83,
    "sku": "JP7149",
    "use": "Running",
    "code": "JP7149",
    "name": "adidas Adizero Evo SL",
    "sole": "All-surface rubber outsole delivers grip and traction",
    "tags": [
      "ADIDAS",
      "Running",
      "Men",
      "Running"
    ],
    "brand": "ADIDAS",
    "model": "adidas Adizero Evo SL",
    "price": 14456.83,
    "sport": "Running",
    "upper": "textile upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black/White",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/JP7149_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/JP7149_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/JP7149_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/JP7149_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/JP7149_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/JP7149_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/JP7149_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Not specified",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Running",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 150,
    "sourceUrl": "https://www.footlocker.com/product/~/JP7149.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Experience unmatched speed and an energetic performance boost with the adidas adiZero Evo SL. Inspired by the record-breaking EVO 1, these shoes combine innovative technology with lightweight materials to help you push your limits in every run. The synthetic and textile upper ensures durability, breathability, and targeted support, while the Lightstrike Pro technology delivers super-light cushioning to keep you fast and agile on your feet. Constructed with at least 20% recycled content, the adidas adiZero Evo SL brings peak performance and sustainability, making every step count. adidas adiZero Evo SL features: Regular fit gives a relaxed feel. Lace closure provides a snug and customised fit. Textile lining maximises comfort. 3-Stripes add a bold, signature look. Small stiffening element ensures a little extra snap in each step. All-surface rubber outsole delivers grip and traction. *Des",
    "recommended": "Not specified",
    "sourcePrice": 150,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black/White": [
        {
          "sku": "JP7149",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "JP7149",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "JP7149",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "JP7149",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "JP7149",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "JP7149",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "JP7149",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "JP7149",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "JP7149",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "JP7149",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "JP7149",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "JP7149",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "JP7149",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "JP7149",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/JP7149_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 0,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "adidas Adizero Evo SL - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "445778"
  },
  {
    "id": "fl-42150702",
    "mrp": 17348.19,
    "sku": "42150702",
    "use": "Running",
    "code": "42150702",
    "name": "Nike Vomero Plus",
    "sole": "The high-abrasion rubber outsole offers a firm grip, delivering the optimum traction required for a safe and effective run",
    "tags": [
      "NIKE",
      "Running",
      "Men",
      "Running"
    ],
    "brand": "NIKE",
    "model": "Nike Vomero Plus",
    "price": 12528.29,
    "sport": "Running",
    "upper": "mesh upper",
    "width": "Not specified",
    "colors": [
      {
        "hex": "#171717",
        "name": "Black Spruce/Volt Tint/Lime Blast",
        "images": {
          "top": "https://assets.footlocker.com/is/image/FLDM/42150702_01",
          "back": "https://assets.footlocker.com/is/image/FLDM/42150702_01",
          "side": "https://assets.footlocker.com/is/image/FLDM/42150702_01",
          "sole": "https://assets.footlocker.com/is/image/FLDM/42150702_01",
          "front": "https://assets.footlocker.com/is/image/FLDM/42150702_01",
          "onFeet": "https://assets.footlocker.com/is/image/FLDM/42150702_01",
          "lifestyle": "https://assets.footlocker.com/is/image/FLDM/42150702_01"
        }
      }
    ],
    "gender": "Men",
    "rating": 0,
    "source": "Foot Locker",
    "weight": "Weight: Approximately 9",
    "closure": "Lace closure",
    "fitType": "Not specified",
    "category": "Running",
    "currency": "INR",
    "occasion": "Not specified",
    "warranty": "Not specified",
    "sourceMrp": 180,
    "sourceUrl": "https://www.footlocker.com/product/~/42150702.html",
    "verifiedAt": "2026-10-02T11:27:53.372Z",
    "collections": [],
    "description": "Your daily runs just became more enjoyable! Introducing the Nike Vomero Plus—everyday runners that take maximum cushioning to the next level. Featuring a mountainous stack of full-length ZoomX foam, the most responsive foam in the industry, these ultra-light sneakers let you zoom past your running goals in absolute comfort. The high-abrasion rubber outsole offers a firm grip, delivering the optimum traction required for a safe and effective run. It’s time to go the extra mile and redefine your limits with the Nike Vomero Plus! Nike Vomero Plus features: Engineered mesh upper offers soft breathability. Webbed lace loops provide an adjustable fit. Reflective hits along the toe and heel improve low-light visibility. Weight: Approximately 9.5 oz. Heel-to-toe drop: 10 mm.",
    "recommended": "Not specified",
    "sourcePrice": 129.99,
    "sourceSizes": [
      "7.5",
      "8.0",
      "8.5",
      "9.0",
      "9.5",
      "10.0",
      "10.5",
      "11.0",
      "11.5",
      "12.0",
      "12.5",
      "13.0",
      "14.0",
      "15.0"
    ],
    "comfortScore": null,
    "fitIndicator": "Not specified",
    "reviewsCount": 0,
    "sizeInventory": {
      "Black Spruce/Volt Tint/Lime Blast": [
        {
          "sku": "42150702",
          "size": "7.5",
          "stock": 0
        },
        {
          "sku": "42150702",
          "size": "8.0",
          "stock": 0
        },
        {
          "sku": "42150702",
          "size": "8.5",
          "stock": 0
        },
        {
          "sku": "42150702",
          "size": "9.0",
          "stock": 0
        },
        {
          "sku": "42150702",
          "size": "9.5",
          "stock": 0
        },
        {
          "sku": "42150702",
          "size": "10.0",
          "stock": 0
        },
        {
          "sku": "42150702",
          "size": "10.5",
          "stock": 0
        },
        {
          "sku": "42150702",
          "size": "11.0",
          "stock": 0
        },
        {
          "sku": "42150702",
          "size": "11.5",
          "stock": 0
        },
        {
          "sku": "42150702",
          "size": "12.0",
          "stock": 0
        },
        {
          "sku": "42150702",
          "size": "12.5",
          "stock": 0
        },
        {
          "sku": "42150702",
          "size": "13.0",
          "stock": 0
        },
        {
          "sku": "42150702",
          "size": "14.0",
          "stock": 0
        },
        {
          "sku": "42150702",
          "size": "15.0",
          "stock": 0
        }
      ]
    },
    "sourceCurrency": "USD",
    "sourceImageUrl": "https://assets.footlocker.com/is/image/FLDM/42150702_01",
    "countryOfOrigin": "Not specified",
    "discountPercent": 28,
    "waterResistance": "Not specified",
    "exchangeRateDate": "Fri, 02 Oct 2026 00:02:31 +0000",
    "sourceProductName": "Nike Vomero Plus - Men's",
    "sourceAvailability": "https://schema.org/InStock",
    "exchangeRateUSDToINR": 96.378852,
    "retailerProductGroupId": "449405"
  },
  {
    "id": "vn-shoe-10",
    "mrp": 105,
    "sku": "VANS-SK8-HI",
    "use": "Skate & Casual",
    "code": "VANS_SK8",
    "name": "Sk8-Hi Reissue LX Deconstruct",
    "sole": "Signature Rubber Waffle Outsole",
    "brand": "VANS",
    "price": 85,
    "sport": "Skateboarding",
    "upper": "Sturdy Canvas & Suede Upper with Padded Collars",
    "width": "Medium",
    "colors": [
      {
        "hex": "#ede7dd",
        "name": "Bone White Suede",
        "images": {
          "top": "/assets/images/blueprint_deconstruct_1788842375340.jpg",
          "back": "/assets/images/craft_heel_detail_1788842306184.jpg",
          "side": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "sole": "/assets/images/cream_runner_pedestal_1788842341279.jpg",
          "front": "/assets/images/taupe_runner_pedestal_1788842355799.jpg"
        }
      }
    ],
    "gender": "Kids",
    "rating": 4.6,
    "weight": "340g",
    "closure": "Lace Closure",
    "fitType": "Regular Fit",
    "category": "Casual Shoes",
    "occasion": "Skateboarding & Street Everyday",
    "warranty": "Standard Guarantee",
    "collections": [
      "Retro Collection",
      "Streetwear"
    ],
    "description": "Classic high-top silhouette with re-enforced toe caps to withstand repeated wear and padded collars for support and flexibility.",
    "recommended": "True to Size",
    "comfortScore": 4.5,
    "fitIndicator": "True to Size",
    "reviewsCount": 154,
    "sizeInventory": {
      "Bone White Suede": [
        {
          "sku": "VN-SK8-05",
          "size": "5",
          "stock": 12
        },
        {
          "sku": "VN-SK8-06",
          "size": "6",
          "stock": 18
        },
        {
          "sku": "VN-SK8-07",
          "size": "7",
          "stock": 14
        },
        {
          "sku": "VN-SK8-08",
          "size": "8",
          "stock": 9
        }
      ]
    },
    "countryOfOrigin": "China",
    "discountPercent": 19,
    "waterResistance": "No"
  },
  {
    "id": "vn-shoe-09",
    "mrp": 220,
    "sku": "PUMA-NITRO-DEV",
    "use": "Running & Training",
    "code": "PUM_NITRO",
    "name": "Deviate Nitro 3 Performance",
    "sole": "NITRO Elite Nitrogen-Infused Foam & INNOPLATE Carbon Plate",
    "brand": "PUMA",
    "price": 175,
    "sport": "Running",
    "upper": "PWRTAPE Reinforced Engineered Mesh",
    "width": "Medium",
    "colors": [
      {
        "hex": "#f5efe6",
        "name": "Cream & Electro Peach",
        "images": {
          "top": "/assets/images/blueprint_deconstruct_1788842375340.jpg",
          "back": "/assets/images/craft_heel_detail_1788842306184.jpg",
          "side": "/assets/images/hero_welt_macro_1788842274475.jpg",
          "sole": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "front": "/assets/images/cream_runner_pedestal_1788842341279.jpg"
        }
      }
    ],
    "gender": "Women",
    "rating": 4.7,
    "weight": "215g",
    "closure": "Lace-Up",
    "fitType": "Regular Fit",
    "category": "Running",
    "occasion": "Tempo Runs & Race Day",
    "warranty": "1-Year Warranty",
    "collections": [
      "Running Collection",
      "New Drops"
    ],
    "description": "Nitrogen-infused foam technology delivering maximum propulsion and featherweight velocity.",
    "recommended": "True to Size",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "reviewsCount": 112,
    "sizeInventory": {
      "Cream & Electro Peach": [
        {
          "sku": "PUM-NIT-05",
          "size": "5",
          "stock": 7
        },
        {
          "sku": "PUM-NIT-06",
          "size": "6",
          "stock": 11
        },
        {
          "sku": "PUM-NIT-07",
          "size": "7",
          "stock": 16
        },
        {
          "sku": "PUM-NIT-08",
          "size": "8",
          "stock": 14
        },
        {
          "sku": "PUM-NIT-09",
          "size": "9",
          "stock": 0
        }
      ]
    },
    "countryOfOrigin": "Vietnam",
    "discountPercent": 20,
    "waterResistance": "No"
  },
  {
    "id": "vn-shoe-08",
    "mrp": 120,
    "sku": "CON-CHUCK-70",
    "use": "Casual Lifestyle",
    "code": "CON_70",
    "name": "Chuck 70 Vintage Canvas High",
    "sole": "Vulcanized Rubber Foxing with Vintage Gloss Tape",
    "brand": "CONVERSE",
    "price": 95,
    "sport": "Basketball",
    "upper": "12oz Organic Heavy Cotton Duck Canvas",
    "width": "Medium",
    "colors": [
      {
        "hex": "#ded6c9",
        "name": "Parchment & Egret",
        "images": {
          "top": "/assets/images/blueprint_deconstruct_1788842375340.jpg",
          "back": "/assets/images/hero_welt_macro_1788842274475.jpg",
          "side": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "sole": "/assets/images/craft_heel_detail_1788842306184.jpg",
          "front": "/assets/images/cream_runner_pedestal_1788842341279.jpg"
        }
      },
      {
        "hex": "#141312",
        "name": "Classic Black",
        "images": {
          "top": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "back": "/assets/images/kinesis_zero_shoe_1788838347108.jpg",
          "side": "/assets/images/void_runner_heel_1788838329834.jpg",
          "sole": "/assets/images/blueprint_deconstruct_1788842375340.jpg",
          "front": "/assets/images/void_shadow_low_1788838363234.jpg"
        }
      }
    ],
    "gender": "Unisex",
    "rating": 4.6,
    "weight": "375g",
    "closure": "Flat Woven Cotton Laces",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "occasion": "Casual Daily, Skate & Creative Uniform",
    "warranty": "Standard Guarantee",
    "collections": [
      "Retro Collection",
      "Streetwear"
    ],
    "description": "The original 1970s court icon re-crafted with premium archival canvas, higher rubber sidewalls, and an OrthoLite footbed.",
    "recommended": "Runs large. We recommend ordering a half size down.",
    "comfortScore": 4.4,
    "fitIndicator": "Runs Large",
    "reviewsCount": 420,
    "sizeInventory": {
      "Classic Black": [
        {
          "sku": "CON-70-BLK-06",
          "size": "6",
          "stock": 14
        },
        {
          "sku": "CON-70-BLK-07",
          "size": "7",
          "stock": 20
        },
        {
          "sku": "CON-70-BLK-08",
          "size": "8",
          "stock": 25
        },
        {
          "sku": "CON-70-BLK-09",
          "size": "9",
          "stock": 21
        },
        {
          "sku": "CON-70-BLK-10",
          "size": "10",
          "stock": 16
        },
        {
          "sku": "CON-70-BLK-11",
          "size": "11",
          "stock": 12
        }
      ],
      "Parchment & Egret": [
        {
          "sku": "CON-70-PAR-05",
          "size": "5",
          "stock": 10
        },
        {
          "sku": "CON-70-PAR-06",
          "size": "6",
          "stock": 15
        },
        {
          "sku": "CON-70-PAR-07",
          "size": "7",
          "stock": 22
        },
        {
          "sku": "CON-70-PAR-08",
          "size": "8",
          "stock": 20
        },
        {
          "sku": "CON-70-PAR-09",
          "size": "9",
          "stock": 18
        },
        {
          "sku": "CON-70-PAR-10",
          "size": "10",
          "stock": 14
        },
        {
          "sku": "CON-70-PAR-11",
          "size": "11",
          "stock": 8
        }
      ]
    },
    "countryOfOrigin": "Vietnam",
    "discountPercent": 21,
    "waterResistance": "No"
  },
  {
    "id": "vn-shoe-07",
    "mrp": 275,
    "sku": "SAL-XT6-EXP",
    "use": "Trail Running & Harsh Weather",
    "code": "SAL_XT6",
    "name": "XT-6 Advanced Trail Chassis",
    "sole": "Mud Contagrip Outsole with ACS Agile Chassis System",
    "brand": "SALOMON",
    "price": 220,
    "sport": "Training",
    "upper": "Abrasion-Resistant TPU Film & Welded Textile",
    "width": "Narrow",
    "colors": [
      {
        "hex": "#232220",
        "name": "Phantom Black & Raw Ochre",
        "images": {
          "top": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "back": "/assets/images/void_shadow_low_1788838363234.jpg",
          "side": "/assets/images/kinesis_zero_shoe_1788838347108.jpg",
          "sole": "/assets/images/blueprint_deconstruct_1788842375340.jpg",
          "front": "/assets/images/void_runner_heel_1788838329834.jpg"
        }
      }
    ],
    "gender": "Unisex",
    "rating": 4.8,
    "weight": "365g",
    "closure": "Quicklace Minimalist Drawcord",
    "fitType": "Narrow Fit",
    "category": "Boots",
    "occasion": "Rugged Trail, Technical Urban & Wet Weather",
    "warranty": "2-Year Outdoor Warranty",
    "collections": [
      "Streetwear",
      "Trending Now",
      "Limited Edition"
    ],
    "description": "Legendary silhouette developed for ultra-distance races on severe terrain, adopted worldwide as the icon of functional streetwear.",
    "recommended": "Runs snug due to technical foot-wrap. Consider sizing up if between sizes.",
    "comfortScore": 4.6,
    "fitIndicator": "Runs Small",
    "reviewsCount": 164,
    "sizeInventory": {
      "Phantom Black & Raw Ochre": [
        {
          "sku": "SAL-XT6-07",
          "size": "7",
          "stock": 5
        },
        {
          "sku": "SAL-XT6-08",
          "size": "8",
          "stock": 8
        },
        {
          "sku": "SAL-XT6-09",
          "size": "9",
          "stock": 12
        },
        {
          "sku": "SAL-XT6-10",
          "size": "10",
          "stock": 7
        },
        {
          "sku": "SAL-XT6-11",
          "size": "11",
          "stock": 0
        }
      ]
    },
    "countryOfOrigin": "France / Vietnam",
    "discountPercent": 20,
    "waterResistance": "Yes"
  },
  {
    "id": "vn-shoe-06",
    "mrp": 290,
    "sku": "NB-990-V6",
    "use": "Daily Walking & Casual",
    "code": "NB_990_V6",
    "name": "990v6 Heritage Grey Edition",
    "sole": "FuelCell Foam Cushioning with ENCAP Midsole Stability Rim",
    "brand": "NEW BALANCE",
    "price": 240,
    "sport": "Lifestyle",
    "upper": "Pigskin Suede and Mesh Upper with Reflective Accents",
    "width": "Medium",
    "colors": [
      {
        "hex": "#6a6864",
        "name": "Castlerock Grey & Suede",
        "images": {
          "top": "/assets/images/blueprint_deconstruct_1788842375340.jpg",
          "back": "/assets/images/craft_heel_detail_1788842306184.jpg",
          "side": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "sole": "/assets/images/cream_runner_pedestal_1788842341279.jpg",
          "front": "/assets/images/taupe_runner_pedestal_1788842355799.jpg"
        }
      }
    ],
    "gender": "Unisex",
    "rating": 4.9,
    "weight": "360g",
    "closure": "Lace Closure",
    "fitType": "Regular Fit",
    "category": "Casual Shoes",
    "occasion": "Heritage Streetwear & Supreme All-Day Comfort",
    "warranty": "Standard Craft Guarantee",
    "collections": [
      "Retro Collection",
      "Premium Sneakers",
      "Streetwear"
    ],
    "description": "Made in USA craftsmanship. FuelCell foam provides a propulsive feel while ENCAP midsole cushioning delivers all-day support.",
    "recommended": "True to Size",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "reviewsCount": 198,
    "sizeInventory": {
      "Castlerock Grey & Suede": [
        {
          "sku": "NB-990-07",
          "size": "7",
          "stock": 10
        },
        {
          "sku": "NB-990-08",
          "size": "8",
          "stock": 14
        },
        {
          "sku": "NB-990-09",
          "size": "9",
          "stock": 22
        },
        {
          "sku": "NB-990-10",
          "size": "10",
          "stock": 18
        },
        {
          "sku": "NB-990-11",
          "size": "11",
          "stock": 9
        },
        {
          "sku": "NB-990-12",
          "size": "12",
          "stock": 5
        }
      ]
    },
    "countryOfOrigin": "USA",
    "discountPercent": 17,
    "waterResistance": "No"
  },
  {
    "id": "vn-shoe-05",
    "mrp": 260,
    "sku": "ADI-ULTRA-BOOST-25",
    "use": "Running & Street Lifestyle",
    "code": "ADI_BOOST_25",
    "name": "Ultraboost Light Carbon",
    "sole": "Light BOOST Midsole & Continental Better Rubber Outsole",
    "brand": "ADIDAS",
    "price": 210,
    "sport": "Running",
    "upper": "Primeknit+ Upper made in part with Parley Ocean Plastic",
    "width": "Medium",
    "colors": [
      {
        "hex": "#ede7dd",
        "name": "Chalk White & Sand",
        "images": {
          "top": "/assets/images/hero_welt_macro_1788842274475.jpg",
          "back": "/assets/images/craft_heel_detail_1788842306184.jpg",
          "side": "/assets/images/cream_runner_pedestal_1788842341279.jpg",
          "sole": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "front": "/assets/images/taupe_runner_pedestal_1788842355799.jpg"
        }
      },
      {
        "hex": "#1a1816",
        "name": "Core Black",
        "images": {
          "top": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "back": "/assets/images/kinesis_zero_shoe_1788838347108.jpg",
          "side": "/assets/images/void_runner_heel_1788838329834.jpg",
          "sole": "/assets/images/blueprint_deconstruct_1788842375340.jpg",
          "front": "/assets/images/void_shadow_low_1788838363234.jpg"
        }
      }
    ],
    "gender": "Women",
    "rating": 4.8,
    "weight": "260g",
    "closure": "Lace Closure",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "occasion": "Urban Daily & Recovery Runs",
    "warranty": "1-Year Brand Warranty",
    "collections": [
      "Running Collection",
      "Trending Now",
      "Streetwear"
    ],
    "description": "30% lighter BOOST material with instantaneous energy return and Continental rubber grip in wet and dry conditions.",
    "recommended": "Runs slightly small. We recommend ordering a half size up.",
    "comfortScore": 5,
    "fitIndicator": "Runs Small",
    "reviewsCount": 245,
    "sizeInventory": {
      "Core Black": [
        {
          "sku": "ADI-UB-BLK-05",
          "size": "5",
          "stock": 5
        },
        {
          "sku": "ADI-UB-BLK-06",
          "size": "6",
          "stock": 12
        },
        {
          "sku": "ADI-UB-BLK-07",
          "size": "7",
          "stock": 15
        },
        {
          "sku": "ADI-UB-BLK-08",
          "size": "8",
          "stock": 18
        },
        {
          "sku": "ADI-UB-BLK-09",
          "size": "9",
          "stock": 0
        }
      ],
      "Chalk White & Sand": [
        {
          "sku": "ADI-UB-WHT-05",
          "size": "5",
          "stock": 8
        },
        {
          "sku": "ADI-UB-WHT-06",
          "size": "6",
          "stock": 14
        },
        {
          "sku": "ADI-UB-WHT-07",
          "size": "7",
          "stock": 19
        },
        {
          "sku": "ADI-UB-WHT-08",
          "size": "8",
          "stock": 11
        },
        {
          "sku": "ADI-UB-WHT-09",
          "size": "9",
          "stock": 6
        }
      ]
    },
    "countryOfOrigin": "Indonesia",
    "discountPercent": 19,
    "waterResistance": "No"
  },
  {
    "id": "vn-shoe-04",
    "mrp": 260,
    "sku": "NIKE-AIR-RUN-X",
    "use": "Road Running",
    "code": "NK_AIR_01",
    "name": "Air Zoom Pulse Velocity",
    "sole": "ZoomX Responsive Foam with High-Abrasion Rubber Pods",
    "brand": "NIKE",
    "price": 195,
    "sport": "Running",
    "upper": "Engineered Flyknit Upper with Seamless Overlays",
    "width": "Medium",
    "colors": [
      {
        "hex": "#ded6c9",
        "name": "Wolf Grey & Pure White",
        "images": {
          "top": "/assets/images/blueprint_deconstruct_1788842375340.jpg",
          "back": "/assets/images/craft_heel_detail_1788842306184.jpg",
          "side": "/assets/images/hero_welt_macro_1788842274475.jpg",
          "sole": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "front": "/assets/images/cream_runner_pedestal_1788842341279.jpg"
        }
      },
      {
        "hex": "#1f1e1d",
        "name": "Triple Black",
        "images": {
          "top": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "back": "/assets/images/kinesis_zero_shoe_1788838347108.jpg",
          "side": "/assets/images/void_runner_heel_1788838329834.jpg",
          "sole": "/assets/images/blueprint_deconstruct_1788842375340.jpg",
          "front": "/assets/images/void_shadow_low_1788838363234.jpg"
        }
      }
    ],
    "gender": "Men",
    "rating": 4.7,
    "weight": "240g",
    "closure": "Flywire Adaptive Lacing System",
    "fitType": "Regular Fit",
    "category": "Running",
    "occasion": "Marathon & Long Distance Daily Mileage",
    "warranty": "1-Year Manufacturer Warranty",
    "collections": [
      "Running Collection",
      "Trending Now"
    ],
    "description": "Ultra-responsive marathon trainer combining ZoomX cushioning with full-length articulated rocker geometry for effortless forward propulsion.",
    "recommended": "True to Size",
    "comfortScore": 4.8,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 310,
    "sizeInventory": {
      "Triple Black": [
        {
          "sku": "NK-PUL-BLK-07",
          "size": "7",
          "stock": 15
        },
        {
          "sku": "NK-PUL-BLK-08",
          "size": "8",
          "stock": 25
        },
        {
          "sku": "NK-PUL-BLK-09",
          "size": "9",
          "stock": 19
        },
        {
          "sku": "NK-PUL-BLK-10",
          "size": "10",
          "stock": 16
        },
        {
          "sku": "NK-PUL-BLK-11",
          "size": "11",
          "stock": 10
        }
      ],
      "Wolf Grey & Pure White": [
        {
          "sku": "NK-PUL-GRY-06",
          "size": "6",
          "stock": 12
        },
        {
          "sku": "NK-PUL-GRY-07",
          "size": "7",
          "stock": 20
        },
        {
          "sku": "NK-PUL-GRY-08",
          "size": "8",
          "stock": 18
        },
        {
          "sku": "NK-PUL-GRY-09",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "NK-PUL-GRY-10",
          "size": "10",
          "stock": 14
        },
        {
          "sku": "NK-PUL-GRY-11",
          "size": "11",
          "stock": 8
        }
      ]
    },
    "countryOfOrigin": "Vietnam",
    "discountPercent": 25,
    "waterResistance": "No"
  },
  {
    "id": "vn-shoe-03",
    "mrp": 750,
    "sku": "VN-VOID-02",
    "use": "All-Terrain Movement",
    "code": "VOID_02",
    "name": "Void Runner Spec 02 Limited Drop",
    "sole": "Multi-Density Carbon Matrix Lug Sole",
    "brand": "VANTA ATELIER",
    "price": 590,
    "sport": "Lifestyle",
    "upper": "Ballistic Cordura 1000D & Sculpted Rubber Cage",
    "width": "Medium",
    "colors": [
      {
        "hex": "#0a0a09",
        "name": "Matte Vanta Obsidian",
        "images": {
          "top": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "back": "/assets/images/kinesis_zero_shoe_1788838347108.jpg",
          "side": "/assets/images/void_shadow_low_1788838363234.jpg",
          "sole": "/assets/images/blueprint_deconstruct_1788842375340.jpg",
          "front": "/assets/images/void_runner_heel_1788838329834.jpg"
        }
      }
    ],
    "gender": "Unisex",
    "rating": 5,
    "weight": "315g",
    "closure": "Speed-Draw Cinch System",
    "fitType": "Regular Fit",
    "category": "Sneakers",
    "occasion": "High Demand Archival Release",
    "warranty": "Lifetime Architectural Shell Guarantee",
    "collections": [
      "New Drops",
      "Limited Edition",
      "Trending Now"
    ],
    "description": "Numbered release limited strictly to 500 units globally. Cryptographically authenticated NFC stasis chip embedded in the tongue pull.",
    "recommended": "True to Size. Exact specification sizing.",
    "comfortScore": 5,
    "fitIndicator": "True to Size",
    "reviewsCount": 52,
    "isLimitedDrop": true,
    "sizeInventory": {
      "Matte Vanta Obsidian": [
        {
          "sku": "VN-VOID-07",
          "size": "7",
          "stock": 3
        },
        {
          "sku": "VN-VOID-08",
          "size": "8",
          "stock": 5
        },
        {
          "sku": "VN-VOID-09",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "VN-VOID-10",
          "size": "10",
          "stock": 4
        },
        {
          "sku": "VN-VOID-11",
          "size": "11",
          "stock": 2
        }
      ]
    },
    "countryOfOrigin": "Berlin Atelier, Germany",
    "discountPercent": 21,
    "waterResistance": "Yes",
    "dropTimeLeftSeconds": 12430
  },
  {
    "id": "vn-shoe-02",
    "mrp": 680,
    "sku": "VN-DER-02",
    "use": "Formal & Urban Walking",
    "code": "DERBY_02",
    "name": "Slate Performance Hybrid Derby",
    "sole": "Vibram Commando Lugged Rubber Unit",
    "brand": "VANTA ATELIER",
    "price": 540,
    "sport": "Lifestyle",
    "upper": "Box Calf Leather with Aniline Finish",
    "width": "Medium",
    "colors": [
      {
        "hex": "#3a3836",
        "name": "Slate Grey & Noir",
        "images": {
          "top": "/assets/images/blueprint_deconstruct_1788842375340.jpg",
          "back": "/assets/images/hero_welt_macro_1788842274475.jpg",
          "side": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "sole": "/assets/images/cream_runner_pedestal_1788842341279.jpg",
          "front": "/assets/images/craft_heel_detail_1788842306184.jpg",
          "lifestyle": "/assets/images/overcoat_model_1788842290581.jpg"
        }
      },
      {
        "hex": "#1a1816",
        "name": "Polished Basalt Noir",
        "images": {
          "top": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "back": "/assets/images/kinesis_zero_shoe_1788838347108.jpg",
          "side": "/assets/images/void_runner_heel_1788838329834.jpg",
          "sole": "/assets/images/cream_runner_pedestal_1788842341279.jpg",
          "front": "/assets/images/void_shadow_low_1788838363234.jpg"
        }
      }
    ],
    "gender": "Men",
    "isSale": false,
    "rating": 4.8,
    "weight": "390g",
    "closure": "Blind Eyelet Lacing",
    "fitType": "Regular Fit",
    "category": "Formal Shoes",
    "occasion": "Formal, Sartorial & Architectural Wear",
    "warranty": "3-Year Upper & Welt Guarantee",
    "collections": [
      "Premium Sneakers",
      "Streetwear"
    ],
    "description": "Hybrid formal silhouette fusing classic British derby geometry with extreme architectural lug tooling. Unlined forefoot for unmatched contouring.",
    "recommended": "True to Size",
    "comfortScore": 4.7,
    "fitIndicator": "True to Size",
    "isNewArrival": false,
    "reviewsCount": 88,
    "sizeInventory": {
      "Slate Grey & Noir": [
        {
          "sku": "VN-DER-SLT-07",
          "size": "7",
          "stock": 4
        },
        {
          "sku": "VN-DER-SLT-08",
          "size": "8",
          "stock": 12
        },
        {
          "sku": "VN-DER-SLT-09",
          "size": "9",
          "stock": 9
        },
        {
          "sku": "VN-DER-SLT-10",
          "size": "10",
          "stock": 0
        },
        {
          "sku": "VN-DER-SLT-11",
          "size": "11",
          "stock": 5
        }
      ],
      "Polished Basalt Noir": [
        {
          "sku": "VN-DER-BLK-07",
          "size": "7",
          "stock": 6
        },
        {
          "sku": "VN-DER-BLK-08",
          "size": "8",
          "stock": 8
        },
        {
          "sku": "VN-DER-BLK-09",
          "size": "9",
          "stock": 11
        },
        {
          "sku": "VN-DER-BLK-10",
          "size": "10",
          "stock": 7
        },
        {
          "sku": "VN-DER-BLK-11",
          "size": "11",
          "stock": 2
        }
      ]
    },
    "countryOfOrigin": "Civitanova Marche, Italy",
    "discountPercent": 20,
    "waterResistance": "Yes"
  },
  {
    "id": "vn-shoe-01",
    "mrp": 640,
    "sku": "VN-X01-RUN",
    "use": "Running / High Velocity Strides",
    "code": "RUNNER_01",
    "name": "X-01 Architectural Runner",
    "sole": "Dual-Density Basalt EVA & Hand-Welted Natural Hevea Crepe",
    "brand": "VANTA ATELIER",
    "price": 480,
    "sport": "Running",
    "upper": "Vegetable-Tanned Tuscan Calfskin & Monofilament Mesh",
    "width": "Medium",
    "colors": [
      {
        "hex": "#e4ddcf",
        "name": "Travertine Cream & Natural Crepe",
        "images": {
          "top": "/assets/images/blueprint_deconstruct_1788842375340.jpg",
          "back": "/assets/images/craft_heel_detail_1788842306184.jpg",
          "side": "/assets/images/hero_welt_macro_1788842274475.jpg",
          "sole": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "front": "/assets/images/cream_runner_pedestal_1788842341279.jpg",
          "onFeet": "/assets/images/ss25_monolith_model_1788838295128.jpg",
          "lifestyle": "/assets/images/travertine_model_1788842319956.jpg"
        }
      },
      {
        "hex": "#141312",
        "name": "Obsidian Black",
        "images": {
          "top": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "back": "/assets/images/kinesis_zero_shoe_1788838347108.jpg",
          "side": "/assets/images/void_shadow_low_1788838363234.jpg",
          "sole": "/assets/images/blueprint_deconstruct_1788842375340.jpg",
          "front": "/assets/images/void_runner_heel_1788838329834.jpg",
          "lifestyle": "/assets/images/brutalist_hoodie_model_1788838400495.jpg"
        }
      },
      {
        "hex": "#8e8474",
        "name": "Mineral Taupe",
        "images": {
          "top": "/assets/images/hero_welt_macro_1788842274475.jpg",
          "back": "/assets/images/cream_runner_pedestal_1788842341279.jpg",
          "side": "/assets/images/craft_heel_detail_1788842306184.jpg",
          "sole": "/assets/images/core_silhouettes_shoe_1788838314612.jpg",
          "front": "/assets/images/taupe_runner_pedestal_1788842355799.jpg"
        }
      }
    ],
    "gender": "Men",
    "rating": 4.9,
    "weight": "280g",
    "closure": "Waxed Cotton Lace-Up with Titanium Aglets",
    "fitType": "Regular Fit",
    "category": "Running",
    "occasion": "Performance Running & Daily Urban Exploration",
    "warranty": "2-Year Hardware & Sole Craft Warranty",
    "collections": [
      "New Drops",
      "Premium Sneakers",
      "Running Collection",
      "Trending Now"
    ],
    "description": "Engineered through mathematical reduction and Italian craftsmanship. Features a 1.2mm carbon fiber integrated midsole plate that dynamically responds to cadence shifts.",
    "recommended": "True to Size. Order standard athletic shoe size.",
    "comfortScore": 4.9,
    "fitIndicator": "True to Size",
    "isNewArrival": true,
    "reviewsCount": 142,
    "isLimitedDrop": false,
    "sizeInventory": {
      "Mineral Taupe": [
        {
          "sku": "VN-X01-TAU-07",
          "size": "7",
          "stock": 5
        },
        {
          "sku": "VN-X01-TAU-08",
          "size": "8",
          "stock": 9
        },
        {
          "sku": "VN-X01-TAU-09",
          "size": "9",
          "stock": 8
        },
        {
          "sku": "VN-X01-TAU-10",
          "size": "10",
          "stock": 0
        },
        {
          "sku": "VN-X01-TAU-11",
          "size": "11",
          "stock": 4
        }
      ],
      "Obsidian Black": [
        {
          "sku": "VN-X01-BLK-06",
          "size": "6",
          "stock": 4
        },
        {
          "sku": "VN-X01-BLK-07",
          "size": "7",
          "stock": 10
        },
        {
          "sku": "VN-X01-BLK-08",
          "size": "8",
          "stock": 18
        },
        {
          "sku": "VN-X01-BLK-09",
          "size": "9",
          "stock": 14
        },
        {
          "sku": "VN-X01-BLK-10",
          "size": "10",
          "stock": 9
        },
        {
          "sku": "VN-X01-BLK-11",
          "size": "11",
          "stock": 0
        },
        {
          "sku": "VN-X01-BLK-12",
          "size": "12",
          "stock": 3
        }
      ],
      "Travertine Cream & Natural Crepe": [
        {
          "sku": "VN-X01-CRM-06",
          "size": "6",
          "stock": 0
        },
        {
          "sku": "VN-X01-CRM-07",
          "size": "7",
          "stock": 8
        },
        {
          "sku": "VN-X01-CRM-08",
          "size": "8",
          "stock": 15
        },
        {
          "sku": "VN-X01-CRM-09",
          "size": "9",
          "stock": 0
        },
        {
          "sku": "VN-X01-CRM-10",
          "size": "10",
          "stock": 12
        },
        {
          "sku": "VN-X01-CRM-11",
          "size": "11",
          "stock": 6
        },
        {
          "sku": "VN-X01-CRM-12",
          "size": "12",
          "stock": 2
        }
      ]
    },
    "countryOfOrigin": "Montebelluna, Italy",
    "discountPercent": 25,
    "waterResistance": "Water Repellent"
  }
];

export const INITIAL_DROPS: SneakerDrop[] = [
  {
    id: 'drop-01',
    productId: 'vn-shoe-03',
    productName: 'Void Runner Spec 02 Limited Drop',
    brand: 'VANTA ATELIER',
    edition: 'STASIS PROTOCOL // 500 UNITS GLOBALLY',
    image: '/assets/images/void_runner_heel_1788838329834.jpg',
    price: 590,
    mrp: 750,
    launchDate: '2026-09-10',
    launchTime: '10:00 AM UTC',
    stock: 24,
    status: 'Scheduled',
    targetTimestamp: Date.now() + (2 * 24 * 3600 + 14 * 3600 + 35 * 60) * 1000,
    notifySubscribers: ['collector@vanta.de', 'vip.member@client.vault'],
  },
  {
    id: 'drop-02',
    productId: 'vn-shoe-01',
    productName: 'X-01 Carbon Basalt Monochrome',
    brand: 'VANTA ATELIER',
    edition: 'SPECIAL TI-01 HARDWARE EDITION',
    image: '/assets/images/cream_runner_pedestal_1788842341279.jpg',
    price: 520,
    mrp: 650,
    launchDate: '2026-09-18',
    launchTime: '12:00 PM UTC',
    stock: 50,
    status: 'Scheduled',
    targetTimestamp: Date.now() + (10 * 24 * 3600 + 8 * 3600) * 1000,
    notifySubscribers: ['artisan@atelier.it'],
  },
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'SH10245',
    date: '2026-09-06',
    items: [
      {
        productId: 'vn-shoe-01',
        sku: 'VN-X01-CRM-08',
        name: 'X-01 Architectural Runner',
        brand: 'VANTA ATELIER',
        color: 'Travertine Cream & Natural Crepe',
        size: '8',
        price: 480,
        quantity: 1,
        image: '/assets/images/cream_runner_pedestal_1788842341279.jpg',
      },
    ],
    subtotal: 480,
    discount: 0,
    shipping: 0,
    total: 480,
    shippingAddress: {
      id: 'addr-default',
      name: 'TANUJ D.',
      isPrimary: true,
      line1: 'VANTA ARCHIVE RESIDENCE, 450 West 14th St',
      line2: 'Suite 804',
      city: 'New York',
      state: 'NY',
      postalCode: '10014',
      country: 'United States',
      phone: '+1 (212) 902-8400',
    },
    paymentMethod: 'Credit Card (•••• 4242)',
    paymentStatus: 'PAID',
    orderStatus: 'Shipped',
    expectedDelivery: '24 August',
    trackingNumber: 'VN-DHL-992014-EX',
    carrier: 'DHL Carbon Priority Freight',
    timeline: [
      {
        status: 'Order Placed',
        date: '06 Sep 2026',
        time: '14:20 EST',
        description: 'Order placed cryptographically on vault ledger.',
        completed: true,
        current: false,
      },
      {
        status: 'Confirmed',
        date: '06 Sep 2026',
        time: '14:25 EST',
        description: 'Allocation verified & inventory locked.',
        completed: true,
        current: false,
      },
      {
        status: 'Packed',
        date: '07 Sep 2026',
        time: '09:15 EST',
        description: 'Hand-inspected, serialized in wooden stasis archive crate.',
        completed: true,
        current: false,
      },
      {
        status: 'Shipped',
        date: '07 Sep 2026',
        time: '16:40 EST',
        description: 'En route with armored courier dispatch.',
        completed: true,
        current: true,
      },
      {
        status: 'Out for Delivery',
        date: 'Pending',
        time: '--:--',
        description: 'Local courier dispatch to private address.',
        completed: false,
        current: false,
      },
      {
        status: 'Delivered',
        date: 'Pending',
        time: '--:--',
        description: 'Signature verified and sealed at delivery.',
        completed: false,
        current: false,
      },
    ],
  },
];

export const INITIAL_EXCHANGES: ExchangeReturnRequest[] = [
  {
    id: 'EX-901',
    orderId: 'SH10245',
    type: 'EXCHANGE',
    productId: 'vn-shoe-01',
    productName: 'X-01 Architectural Runner',
    productImage: '/assets/images/cream_runner_pedestal_1788842341279.jpg',
    currentSize: '8',
    requestedSize: '9',
    reason: 'Size too small. Require half size larger for running stride.',
    date: '2026-09-07',
    status: 'Pending',
    adminNotes: 'Awaiting size 9 restock in warehouse vault.',
  },
];

export const INITIAL_COUPONS: Coupon[] = [
  {
    code: 'VANTA10',
    discountPercent: 10,
    minOrderValue: 100,
    description: '10% privilege discount on all archival footwear',
    isActive: true,
  },
  {
    code: 'ARCHIVE20',
    discountPercent: 20,
    minOrderValue: 400,
    description: '20% off high-tier stasis allocations',
    isActive: true,
  },
  {
    code: 'VIPFIRST',
    discountPercent: 15,
    minOrderValue: 200,
    description: '15% off first client dispatch',
    isActive: true,
  },
];

export const INITIAL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-01',
    productId: 'vn-shoe-01',
    author: 'Julian V. // Architect',
    rating: 5,
    verifiedBuyer: true,
    date: '28 Aug 2026',
    title: 'The architectural precision is unparalleled in footwear',
    comment:
      'The vegetable-tanned calfskin molded to my foot after just three wears. The carbon plate provides immense torsional rigidity without feeling artificial. Truly brutalist luxury at its peak.',
    fitFeedback: 'True to Size',
    comfortRating: 5,
    fitRating: 5,
    qualityRating: 5,
    designRating: 5,
    photos: [
      '/assets/images/cream_runner_pedestal_1788842341279.jpg',
      '/assets/images/hero_welt_macro_1788842274475.jpg',
    ],
    helpfulCount: 38,
  },
  {
    id: 'rev-02',
    productId: 'vn-shoe-01',
    author: 'Elena M. // Industrial Designer',
    rating: 5,
    verifiedBuyer: true,
    date: '15 Aug 2026',
    title: 'Zero compromise. The natural crepe feels phenomenal',
    comment:
      'I was hesitant about natural crepe on an athletic runner, but the density dampens footsteps completely. Clean minimalist silhouette that matches both tailored trousers and techwear.',
    fitFeedback: 'True to Size',
    comfortRating: 5,
    fitRating: 4,
    qualityRating: 5,
    designRating: 5,
    photos: ['/assets/images/craft_heel_detail_1788842306184.jpg'],
    helpfulCount: 24,
  },
  {
    id: 'rev-03',
    productId: 'vn-shoe-02',
    author: 'Marcus K.',
    rating: 5,
    verifiedBuyer: true,
    date: '02 Sep 2026',
    title: 'The ultimate hybrid formal shoe',
    comment:
      'Wore these for 14 hours straight during Paris fashion week. The Vibram commando sole handles cobblestone without any foot fatigue.',
    fitFeedback: 'True to Size',
    comfortRating: 5,
    fitRating: 5,
    qualityRating: 5,
    designRating: 5,
    helpfulCount: 19,
  },
];

export const SIZE_CHART = [
  { us: '5', uk: '4.5', eu: '37.5', cm: '23.5', in: '9.25' },
  { us: '6', uk: '5', eu: '38.5', cm: '24.0', in: '9.5' },
  { us: '7', uk: '6', eu: '40', cm: '25.0', in: '9.8' },
  { us: '8', uk: '7', eu: '41', cm: '26.0', in: '10.2' },
  { us: '9', uk: '8', eu: '42.5', cm: '27.0', in: '10.6' },
  { us: '10', uk: '9', eu: '44', cm: '28.0', in: '11.0' },
  { us: '11', uk: '10', eu: '45', cm: '29.0', in: '11.4' },
  { us: '12', uk: '11', eu: '46', cm: '30.0', in: '11.8' },
];

export const INITIAL_FOOTWEAR_CATALOG = INITIAL_PRODUCTS;
