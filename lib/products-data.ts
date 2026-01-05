export interface Product {
  id: string
  name: string
  brand: string
  category: string
  price: number
  color: string
  inverterType?: string
  phaseSupport?: string
  powerRating?: string
  warranty: string
  rating: number
  image: string
  description?: string
  features?: string[]
  specifications?: { label: string; value: string }[]
  stock: {
    Sydney: number
    Brisbane: number
    Melbourne: number
  }
}

export const products: Product[] = [
  {
    id: "1",
    name: "Voslar Premium 450W Solar Panel",
    brand: "Voslar",
    category: "Solar Panels",
    price: 285,
    color: "Black",
    warranty: "10 Years",
    rating: 4.8,
    image: "/solar-panel-module.jpg",
    description: "High-efficiency monocrystalline solar panel with advanced PERC technology for maximum energy output.",
    features: [
      "450W power output",
      "21.5% efficiency rating",
      "PERC technology",
      "Resistant to harsh weather conditions",
      "IP68 rated junction box",
    ],
    specifications: [
      { label: "Power Output", value: "450W" },
      { label: "Efficiency", value: "21.5%" },
      { label: "Dimensions", value: "2094 x 1038 x 35mm" },
      { label: "Weight", value: "22.5kg" },
      { label: "Cell Type", value: "Monocrystalline PERC" },
    ],
    stock: { Sydney: 150, Brisbane: 80, Melbourne: 120 },
  },
  {
    id: "2",
    name: "Solis 5kW Single Phase Inverter",
    brand: "Solis",
    category: "Inverters",
    price: 1499,
    color: "Silver",
    inverterType: "DC",
    phaseSupport: "Single Phase",
    powerRating: "5kW",
    warranty: "10 Years",
    rating: 4.9,
    image: "/solar-inverter-product.jpg",
    stock: { Sydney: 45, Brisbane: 30, Melbourne: 55 },
  },
  {
    id: "3",
    name: "Growatt 8kW Hybrid Inverter",
    brand: "Growatt",
    category: "Inverters",
    price: 2299,
    color: "Grey",
    inverterType: "DC",
    phaseSupport: "Single Phase",
    powerRating: "8kW",
    warranty: "10 Years",
    rating: 4.7,
    image: "/residential-inverter.jpg",
    stock: { Sydney: 35, Brisbane: 20, Melbourne: 40 },
  },
  {
    id: "4",
    name: "JE Group Energy Storage 10kWh",
    brand: "JE Group",
    category: "Energy Storage",
    price: 8500,
    color: "White",
    warranty: "10 Years",
    rating: 4.8,
    image: "/home-battery-storage.jpg",
    stock: { Sydney: 25, Brisbane: 15, Melbourne: 30 },
  },
  {
    id: "5",
    name: "Hager EV Charger 7kW",
    brand: "Hager",
    category: "Electricals",
    price: 1200,
    color: "White",
    warranty: "1 Year",
    rating: 4.6,
    image: "/battery-energy-storage-system.jpg",
    stock: { Sydney: 60, Brisbane: 40, Melbourne: 50 },
  },
  {
    id: "6",
    name: "ZJ BENY DC Isolator",
    brand: "ZJ BENY",
    category: "Electricals",
    price: 85,
    color: "Grey",
    warranty: "1 Year",
    rating: 4.5,
    image: "/modern-solar-inverter.png",
    stock: { Sydney: 200, Brisbane: 150, Melbourne: 180 },
  },
  {
    id: "7",
    name: "Tonglin Rail Mounting System",
    brand: "Tonglin",
    category: "Mounting",
    price: 450,
    color: "Silver",
    warranty: "10 Years",
    rating: 4.7,
    image: "/commercial-building-solar.png",
    stock: { Sydney: 100, Brisbane: 70, Melbourne: 90 },
  },
  {
    id: "8",
    name: "Tigo Smart Module Optimizer",
    brand: "Tigo",
    category: "Electricals",
    price: 95,
    color: "Black",
    warranty: "10 Years",
    rating: 4.8,
    image: "/solar-inverter-product.jpg",
    stock: { Sydney: 180, Brisbane: 120, Melbourne: 160 },
  },
  {
    id: "9",
    name: "Growatt 10kW Three Phase Inverter",
    brand: "Growatt",
    category: "Inverters",
    price: 2899,
    color: "Grey",
    inverterType: "DC",
    phaseSupport: "Single Phase",
    powerRating: "10kW",
    warranty: "10 Years",
    rating: 4.8,
    image: "/residential-inverter.jpg",
    stock: { Sydney: 28, Brisbane: 18, Melbourne: 32 },
  },
  {
    id: "10",
    name: "Xinhongye Heat Pump 12kW",
    brand: "Xinhongye",
    category: "Heat Pumps",
    price: 3500,
    color: "White",
    warranty: "10 Years",
    rating: 4.6,
    image: "/home-battery-storage.jpg",
    stock: { Sydney: 15, Brisbane: 10, Melbourne: 20 },
  },
  {
    id: "11",
    name: "Voslar Bifacial 550W Panel",
    brand: "Voslar",
    category: "Solar Panels",
    price: 345,
    color: "Silver",
    warranty: "10 Years",
    rating: 4.9,
    image: "/solar-panel-module.jpg",
    stock: { Sydney: 120, Brisbane: 60, Melbourne: 100 },
  },
  {
    id: "12",
    name: "Solis 6kW Single Phase Inverter",
    brand: "Solis",
    category: "Inverters",
    price: 1699,
    color: "Silver",
    inverterType: "DC",
    phaseSupport: "Single Phase",
    powerRating: "6kW",
    warranty: "10 Years",
    rating: 4.8,
    image: "/solar-inverter-product.jpg",
    stock: { Sydney: 40, Brisbane: 25, Melbourne: 45 },
  },
]

export const brands = [
  "Voslar",
  "JE Group",
  "Hager",
  "Solis",
  "Growatt",
  "ZJ BENY",
  "Tonglin",
  "Xinhongye",
  "Reliable Building Materials",
  "Unreal Solaer",
  "Tigo",
  "TMAC",
]

export const categories = ["Solar Panels", "Inverters", "Energy Storage", "Heat Pumps", "Electricals", "Mounting"]

export const colors = ["Silver", "Black", "Grey", "White", "Yellow", "Dark Brown", "Clear"]

export const inverterTypes = ["DC"]

export const phaseSupports = ["Single Phase"]

export const powerRatings = ["5kW", "6kW", "8kW", "10kW"]

export const warranties = ["1 Year", "10 Years"]

export const searchSuggestions = [
  "Solar Panel",
  "Inverter",
  "Battery",
  "Solar System",
  "Solar Inverter",
  "Battery Storage",
  "Solar Battery",
  "Power Inverter",
  "Solar Power",
  "Energy Storage",
]
