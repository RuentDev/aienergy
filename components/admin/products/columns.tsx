"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { Product } from "@/lib/gql/graphql"; // Or wherever the generated types are located
import Image from "next/image";
import Link from "next/link";

// Helper to calculate total stock
const calculateTotalStock = (inventory: any) => {
  if (!inventory) return 0;
  return (
    (inventory.melbourne || 0) +
    (inventory.sydney || 0) +
    (inventory.brisbane || 0)
  );
};

// Helper to get price
const getPrice = (priceLists: any[]) => {
  if (!priceLists || priceLists.length === 0) return "N/A";
  // Assuming we want the first price list or a specific logic.
  // For now, let's take the first one's price.
  const price = priceLists[0]?.price;
  return price !== undefined && price !== null
    ? new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)
    : "N/A";
};

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export const columns: ColumnDef<Product>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "images",
    header: "Image",
    cell: ({ row }) => {
      const images = row.original.images;
      const imageUrl = images && images.length > 0 ? images[0]?.url : "";
      return (
        <div className="relative h-12 w-12 rounded-md overflow-hidden bg-secondary">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={row.original.name || "Product Image"}
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "odoo_id",
    header: "Odoo ID",
    cell: ({ row }) => {
      const ID = row.original.odoo_product_id;
      return (
        <div className="flex items-center gap-2 text-sm">
          <span>{ID}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "product_type",
    header: "Category",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-xs">
        {row.original.product_type || "N/A"}
      </Badge>
    ),
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: ({ row }) => (
      <Badge variant="outline" className="text-xs">
        {row.original.brand?.name || "N/A"}
      </Badge>
    ),
  },
  {
    id: "status",
    header: "Status",
    cell: ({ row }) => {
      let status = "Draft";
      let variant: "secondary" | "outline" | "default" | "destructive" =
        "secondary";

      if (row.original.releasedAt) {
        status = "Published";
        variant = "secondary";
      } else {
        status = "Draft";
        variant = "outline";
      }

      return (
        <Badge
          variant={variant}
          className={cn(
            "text-xs",
            variant === "secondary" && "bg-accent text-accent-foreground"
          )}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      return (
        <Badge variant="outline" className="text-xs">
          {new Date(row.original.createdAt).toLocaleString()}
        </Badge>
      );
    },
  },
  {
    id: "createdBy",
    header: "Created By",
    cell: ({ row }) => {
      return (
        <Badge variant="outline" className="text-xs">
          {row.original?.madeBy?.name || "N/A"}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex justify-end gap-2">
          <Link href={`/admin/products/${row.original.documentId}`}>
            <Button
              size="icon"
              variant="ghost"
              className="hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
            >
              <Edit className="h-4 w-4" />
            </Button>
          </Link>

          {/* <Button
            size="sm"
            variant="ghost"
            className="hover:bg-destructive hover:text-destructive-foreground h-8 w-8 p-0"
          >
            <Trash2 className="h-4 w-4" />
          </Button> */}
        </div>
      );
    },
  },
];
