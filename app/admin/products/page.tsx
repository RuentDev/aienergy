import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, FilePlus2, Upload } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import DataTable from "@/components/admin/products/data-table";
import Link from "next/link";
import FileUpload from "@/components/admin/products/products-upload";

export default async function ProductsPage() {
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
        <div className="flex gap-2">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="gap-2">
                <FilePlus2 className="h-4 w-4" />
                Import
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Bulk Import</AlertDialogTitle>
                <AlertDialogDescription>
                  Supported file formats: .csv
                </AlertDialogDescription>
              </AlertDialogHeader>
              <FileUpload />
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                  Import
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Link href="/admin/products/add">
            <Button className="bg-accent hover:bg-accent/90 gap-2">
              <Plus className="h-4 w-4" />
              Add Product
            </Button>
          </Link>
        </div>
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
