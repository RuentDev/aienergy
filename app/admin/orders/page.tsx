"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Download, Eye, CheckCircle2, XCircle, Clock, Package, Truck, MapPin } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const orders = [
  {
    id: "#ORD-2024-001",
    customer: "John Smith",
    email: "john@example.com",
    paymentStatus: "Paid",
    fulfilled: true,
    items: 3,
    total: "$1,234.50",
    shippingMethod: "Express Delivery",
    pickup: false,
    date: "2024-01-15",
    address: "123 Solar St, Sydney NSW 2000",
  },
  {
    id: "#ORD-2024-002",
    customer: "Sarah Johnson",
    email: "sarah@example.com",
    paymentStatus: "Pending",
    fulfilled: false,
    items: 2,
    total: "$987.00",
    shippingMethod: "Standard Delivery",
    pickup: false,
    date: "2024-01-14",
    address: "456 Energy Ave, Melbourne VIC 3000",
  },
  {
    id: "#ORD-2024-003",
    customer: "Mike Brown",
    email: "mike@example.com",
    paymentStatus: "Paid",
    fulfilled: false,
    items: 5,
    total: "$2,156.75",
    shippingMethod: "Pickup",
    pickup: true,
    date: "2024-01-14",
    address: "Warehouse - 789 Power Rd, Brisbane QLD 4000",
  },
  {
    id: "#ORD-2024-004",
    customer: "Emma Wilson",
    email: "emma@example.com",
    paymentStatus: "Paid",
    fulfilled: true,
    items: 1,
    total: "$756.25",
    shippingMethod: "Express Delivery",
    pickup: false,
    date: "2024-01-13",
    address: "321 Renewable Dr, Perth WA 6000",
  },
  {
    id: "#ORD-2024-005",
    customer: "David Lee",
    email: "david@example.com",
    paymentStatus: "Failed",
    fulfilled: false,
    items: 4,
    total: "$1,543.00",
    shippingMethod: "Standard Delivery",
    pickup: false,
    date: "2024-01-13",
    address: "654 Green Ln, Adelaide SA 5000",
  },
]

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState<(typeof orders)[0] | null>(null)

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "paid" && order.paymentStatus === "Paid") ||
      (statusFilter === "pending" && order.paymentStatus === "Pending") ||
      (statusFilter === "failed" && order.paymentStatus === "Failed")
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Orders Management</h1>
          <p className="text-sm text-muted-foreground">Manage and track all customer orders in one place</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 gap-2">
          <Download className="h-4 w-4" />
          Export Orders
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search orders, customers, emails..."
            className="pl-9 bg-card border-border"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px] bg-card border-border">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Payment Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Orders Table */}
      <Card className="border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/50 border-b border-border">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Order
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Fulfilled
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Items
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Total
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Shipping
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredOrders.map((order, index) => (
                <tr
                  key={order.id}
                  className="hover:bg-secondary/30 transition-colors"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <td className="px-4 py-4">
                    <div className="font-semibold text-sm">{order.id}</div>
                    <div className="text-xs text-muted-foreground">{order.date}</div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="font-medium text-sm">{order.customer}</div>
                    <div className="text-xs text-muted-foreground">{order.email}</div>
                  </td>
                  <td className="px-4 py-4">
                    <Badge
                      variant={
                        order.paymentStatus === "Paid"
                          ? "default"
                          : order.paymentStatus === "Pending"
                            ? "secondary"
                            : "destructive"
                      }
                      className="flex items-center gap-1 w-fit"
                    >
                      {order.paymentStatus === "Paid" && <CheckCircle2 className="h-3 w-3" />}
                      {order.paymentStatus === "Pending" && <Clock className="h-3 w-3" />}
                      {order.paymentStatus === "Failed" && <XCircle className="h-3 w-3" />}
                      {order.paymentStatus}
                    </Badge>
                  </td>
                  <td className="px-4 py-4">
                    <Badge variant={order.fulfilled ? "default" : "outline"} className="flex items-center gap-1 w-fit">
                      <Package className="h-3 w-3" />
                      {order.fulfilled ? "Yes" : "No"}
                    </Badge>
                  </td>
                  <td className="px-4 py-4 text-sm">{order.items}</td>
                  <td className="px-4 py-4 text-sm font-semibold">{order.total}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-1 text-sm">
                      {order.pickup ? <MapPin className="h-3 w-3" /> : <Truck className="h-3 w-3" />}
                      <span className="text-xs">{order.shippingMethod}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedOrder(order)}
                      className="hover:bg-accent hover:text-accent-foreground"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Order Detail Dialog */}
      <Dialog open={!!selectedOrder} onOpenChange={() => setSelectedOrder(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
            <DialogDescription>Complete information about order {selectedOrder?.id}</DialogDescription>
          </DialogHeader>
          {selectedOrder && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Customer</p>
                  <p className="text-sm">{selectedOrder.customer}</p>
                  <p className="text-xs text-muted-foreground">{selectedOrder.email}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Order Date</p>
                  <p className="text-sm">{selectedOrder.date}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Payment Status</p>
                  <Badge
                    variant={
                      selectedOrder.paymentStatus === "Paid"
                        ? "default"
                        : selectedOrder.paymentStatus === "Pending"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {selectedOrder.paymentStatus}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Fulfillment</p>
                  <Badge variant={selectedOrder.fulfilled ? "default" : "outline"}>
                    {selectedOrder.fulfilled ? "Fulfilled" : "Not Fulfilled"}
                  </Badge>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Shipping Method</p>
                <div className="flex items-center gap-2 text-sm">
                  {selectedOrder.pickup ? <MapPin className="h-4 w-4" /> : <Truck className="h-4 w-4" />}
                  {selectedOrder.shippingMethod}
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-1">Delivery Address</p>
                <p className="text-sm">{selectedOrder.address}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Items</p>
                  <p className="text-2xl font-bold">{selectedOrder.items}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Total Amount</p>
                  <p className="text-2xl font-bold text-accent">{selectedOrder.total}</p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
