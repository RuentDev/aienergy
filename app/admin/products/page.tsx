import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";

import DataTable from "@/components/admin/products/data-table";

// const products = [
//   {
//     id: 1,
//     name: "SolarEdge SE10K Inverter",
//     category: "Inverters",
//     stock: 45,
//     price: "$2,499.00",
//     status: "In Stock",
//     image: "/solar-inverter-product.jpg",
//   },
//   {
//     id: 2,
//     name: "Tesla Powerwall 2",
//     category: "Battery Storage",
//     stock: 12,
//     price: "$14,500.00",
//     status: "Low Stock",
//     image: "/home-battery-storage.jpg",
//   },
//   {
//     id: 3,
//     name: "Trina Solar 450W Panel",
//     category: "Solar Panels",
//     stock: 156,
//     price: "$285.00",
//     status: "In Stock",
//     image: "/solar-panel-module.jpg",
//   },
//   {
//     id: 4,
//     name: "Fronius Primo 8.2 Inverter",
//     category: "Inverters",
//     stock: 0,
//     price: "$2,150.00",
//     status: "Out of Stock",
//     image: "/residential-inverter.jpg",
//   },
//   {
//     id: 5,
//     name: "Enphase IQ8+ Microinverter",
//     category: "Inverters",
//     stock: 89,
//     price: "$349.00",
//     status: "In Stock",
//     image: "/modern-solar-inverter.png",
//   },
//   {
//     id: 6,
//     name: "LG Chem RESU 10H",
//     category: "Battery Storage",
//     stock: 8,
//     price: "$9,200.00",
//     status: "Low Stock",
//     image: "/battery-energy-storage-system.jpg",
//   },
// ];

export default async function ProductsPage() {
  // const [searchTerm, setSearchTerm] = useState("");

  // const filteredProducts = products.filter(
  //   (product) =>
  //     product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     product.category.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const { data } = await getAdminProducts();

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Products</h1>
          <p className="text-sm text-muted-foreground">
            Manage your product inventory
          </p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 gap-2">
          <Plus className="h-4 w-4" />
          Add Product
        </Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search products..."
          className="pl-9 bg-card border-border"
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <DataTable />
    </div>
  );
}
