"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Percent, Calendar } from "lucide-react"

const discounts = [
  {
    id: 1,
    code: "SOLAR20",
    description: "20% off solar panels",
    discount: "20%",
    type: "Percentage",
    status: "Active",
    validUntil: "2024-03-31",
    uses: 145,
  },
  {
    id: 2,
    code: "WINTER50",
    description: "$50 off orders over $500",
    discount: "$50",
    type: "Fixed",
    status: "Active",
    validUntil: "2024-02-28",
    uses: 89,
  },
  {
    id: 3,
    code: "FIRSTORDER",
    description: "15% off first purchase",
    discount: "15%",
    type: "Percentage",
    status: "Active",
    validUntil: "2024-12-31",
    uses: 234,
  },
  {
    id: 4,
    code: "BLACKFRIDAY",
    description: "Black Friday 30% off",
    discount: "30%",
    type: "Percentage",
    status: "Expired",
    validUntil: "2023-11-30",
    uses: 567,
  },
]

export default function DiscountsPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-2">Discounts</h1>
          <p className="text-sm text-muted-foreground">Manage promotional codes and offers</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90 gap-2">
          <Plus className="h-4 w-4" />
          Create Discount
        </Button>
      </div>

      {/* Discounts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {discounts.map((discount, index) => (
          <Card
            key={discount.id}
            className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Percent className="h-6 w-6 text-accent" />
                </div>
                <Badge variant={discount.status === "Active" ? "default" : "secondary"}>{discount.status}</Badge>
              </div>
              <h3 className="text-2xl font-bold mb-1">{discount.code}</h3>
              <p className="text-sm text-muted-foreground mb-4">{discount.description}</p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="font-semibold text-accent text-lg">{discount.discount}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Type</span>
                  <Badge variant="outline">{discount.type}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Uses</span>
                  <span className="font-semibold">{discount.uses}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2 border-t border-border">
                  <Calendar className="h-4 w-4" />
                  <span>Valid until {discount.validUntil}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 hover:bg-accent hover:text-accent-foreground bg-transparent"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
