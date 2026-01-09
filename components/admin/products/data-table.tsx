"use client";

import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery, useMutation } from "@apollo/client/react";
import PRODUCTS_OPERATIONS from "@/graphql/products";
import { GetAdminProductsQuery } from "@/lib/gql/graphql";
import { columns } from "./columns";
import { Trash2, FileText, UploadCloud, Loader2 } from "lucide-react";

const QUERIES = {
  ...PRODUCTS_OPERATIONS.Query,
};

const MUTATIONS = {
  ...PRODUCTS_OPERATIONS.Mutation,
};

export default function DataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 50,
  });
  const [isBulkOperating, setIsBulkOperating] = useState(false);
  const [progress, setProgress] = useState(0);

  const { data, loading, error, refetch } = useQuery<GetAdminProductsQuery>(
    QUERIES.adminProducts,
    {
      variables: {
        pagination: {
          page: pagination.pageIndex + 1,
          pageSize: pagination.pageSize,
        },
      },
    }
  );

  const [deleteProduct, { loading: deleteLoading }] = useMutation(
    MUTATIONS.deleteProduct
  );
  const [updateProduct, { loading: updateLoading }] = useMutation(
    MUTATIONS.updateProduct
  );

  const handleBulkDelete = async (selectedIds: string[]) => {
    setIsBulkOperating(true);
    setProgress(0);
    let completed = 0;

    // Iterate and delete
    await Promise.all(
      selectedIds.map(async (id) => {
        try {
          await deleteProduct({
            variables: {
              documentId: id,
            },
            update(cache) {
              cache.evict({
                id: cache.identify({ __typename: "Product", documentId: id }),
              });
              cache.gc();
            },
          });
        } catch (err) {
          console.error(`Failed to delete product ${id}:`, err);
        } finally {
          completed++;
          setProgress((completed / selectedIds.length) * 100);
        }
      })
    );

    setTimeout(() => {
      setIsBulkOperating(false);
      setProgress(0);
      setRowSelection({});
    }, 500);
  };

  const handleBulkStatus = async (
    selectedIds: string[],
    status: "draft" | "published"
  ) => {
    setIsBulkOperating(true);
    setProgress(0);
    let completed = 0;
    const releasedAt = status === "published" ? new Date().toISOString() : null;

    await Promise.all(
      selectedIds.map(async (id) => {
        try {
          await updateProduct({
            variables: {
              documentId: id,
              data: {
                releasedAt,
              },
            },
          });
        } catch (err) {
          console.error(`Failed to update product ${id}:`, err);
        } finally {
          completed++;
          setProgress((completed / selectedIds.length) * 100);
        }
      })
    );

    setTimeout(() => {
      setIsBulkOperating(false);
      setProgress(0);
      setRowSelection({});
    }, 500);
  };

  const products = data?.products || [];
  const pageCount = -1; // Unknown page count for now

  const table = useReactTable({
    data: products as any[],
    columns,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(), // Not needed for server-side
    manualPagination: true,
    pageCount, // -1 means unknown, allows next page until we hit the end
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    onRowSelectionChange: setRowSelection,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      pagination,
      rowSelection,
    },
    getRowId: (row) => row.documentId, // Important for row selection to accept ID
  });

  return (
    <div className="space-y-4">
      {Object.keys(rowSelection).length > 0 ? (
        <div className="flex items-center justify-between bg-muted/40 p-2 px-4 rounded-md border border-border">
          <span className="text-sm font-medium text-muted-foreground">
            {Object.keys(rowSelection).length} selected
          </span>
          <div className="flex items-center gap-2">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="sm" variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Set as Draft
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to set as draft?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    By setting the selected products as draft, they will not be
                    visible to users.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() =>
                      handleBulkStatus(Object.keys(rowSelection), "draft")
                    }
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="sm" variant="outline">
                  <UploadCloud className="mr-2 h-4 w-4" />
                  Publish
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to publish?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    By publishing the selected products, they will be visible to
                    users.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() =>
                      handleBulkStatus(Object.keys(rowSelection), "published")
                    }
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Publish
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button size="sm" variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    the selected products.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={() => handleBulkDelete(Object.keys(rowSelection))}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      ) : null}

      {isBulkOperating && (
        <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center justify-between text-xs font-medium text-muted-foreground px-1">
            <span className="flex items-center gap-2">
              <Loader2 className="h-3 w-3 animate-spin text-accent" />
              Processing products...
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          {/* <Progress
            value={progress}
            className="h-2 shadow-[0_0_10px_rgba(var(--accent),0.2)]"
          /> */}
        </div>
      )}
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="hover:bg-transparent border-border"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell
                    colSpan={columns.length}
                    className="h-16 text-center"
                  >
                    <Skeleton className="h-12 w-full" />
                  </TableCell>
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-accent/5 transition-colors border-border"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* PAGINATION */}
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={products.length < pagination.pageSize}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
