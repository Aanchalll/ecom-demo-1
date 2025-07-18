export const featuredProducts = [
  {
    id: "1",
    name: "Personalized Name Plate",
    price: 1499,
    image: "/images/products/name-plate.png",
    category: "Home Decor",
    isCustomizable: true,
    isBestseller: true,
  },
  {
    id: "2",
    name: "Wedding Gift Hamper",
    price: 3999,
    image: "/images/products/wedding-hamper.png",
    category: "Wedding Gifts",
    isCustomizable: true,
  },
  {
    id: "3",
    name: "Handcrafted Photo Frame",
    price: 1299,
    image: "/images/products/photo-frame.png",
    category: "Photo Frames",
    isNew: true,
  },
  {
    id: "4",
    name: "Festive Decor Set",
    price: 2499,
    image: "/images/products/festive-decor.png",
    category: "Festive Decor",
    isBestseller: true,
  },
]

export const allProducts = [
  ...featuredProducts,
  {
    id: "5",
    name: "Custom Wall Art",
    price: 1899,
    image: "/images/products/wall-art.png",
    category: "Wall Art",
    isCustomizable: true,
  },
  {
    id: "6",
    name: "Anniversary Gift Box",
    price: 2999,
    image: "/images/products/gift-box.png",
    category: "Gift Boxes",
    isCustomizable: true,
  },
  {
    id: "7",
    name: "Decorative Table Centerpiece",
    price: 1799,
    image: "/images/products/centerpiece.png",
    category: "Table Decor",
    isNew: true,
  },
  {
    id: "8",
    name: "Personalized Cushion Set",
    price: 1299,
    image: "/images/products/cushion-set.png",
    category: "Home Textiles",
    isCustomizable: true,
  },
  {
    id: "9",
    name: "Handcrafted Jewelry Box",
    price: 1599,
    image: "/images/products/jewelry-box.png",
    category: "Storage",
    isBestseller: true,
  },
  {
    id: "10",
    name: "Custom Name Neon Sign",
    price: 3499,
    image: "/images/products/neon-sign.png",
    category: "Lighting",
    isCustomizable: true,
    isNew: true,
  },
  {
    id: "11",
    name: "Wedding Welcome Board",
    price: 2299,
    image: "/images/products/welcome-board.png",
    category: "Wedding Decor",
    isCustomizable: true,
  },
  {
    id: "12",
    name: "Personalized Calendar",
    price: 999,
    image: "/images/products/calendar.png",
    category: "Stationery",
    isCustomizable: true,
  },
]

export const categories = [
  {
    id: "festive",
    name: "Festive Gifts",
    description: "Celebrate special occasions with our festive collection",
    image: "/images/festive-gifts.png",
  },
  {
    id: "wedding",
    name: "Wedding Collection",
    description: "Elegant gifts and decor for the perfect wedding",
    image: "/images/wedding-collection.png",
  },
  {
    id: "custom",
    name: "Custom Orders",
    description: "Personalized gifts crafted to your specifications",
    image: "/images/custom-orders.png",
  },
  {
    id: "home-decor",
    name: "Home Decor",
    description: "Beautiful pieces to elevate your living space",
    image: "/images/products/name-plate.png",
  },
  {
    id: "photo-frames",
    name: "Photo Frames",
    description: "Preserve your precious memories in style",
    image: "/images/products/photo-frame.png",
  },
  {
    id: "gift-boxes",
    name: "Gift Boxes",
    description: "Curated gift boxes for every occasion",
    image: "/images/products/gift-box.png",
  },
]
