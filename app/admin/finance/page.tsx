"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, TrendingUp, TrendingDown, CreditCard, Wallet } from "lucide-react"

const transactions = [
  {
    id: 1,
    type: "Income",
    description: "Order #ORD-2024-001",
    amount: "+$1,234.50",
    date: "2024-01-15",
    status: "Completed",
  },
  {
    id: 2,
    type: "Income",
    description: "Order #ORD-2024-002",
    amount: "+$987.00",
    date: "2024-01-14",
    status: "Pending",
  },
  {
    id: 3,
    type: "Expense",
    description: "Supplier Payment",
    amount: "-$5,400.00",
    date: "2024-01-14",
    status: "Completed",
  },
  {
    id: 4,
    type: "Income",
    description: "Order #ORD-2024-003",
    amount: "+$2,156.75",
    date: "2024-01-14",
    status: "Completed",
  },
  {
    id: 5,
    type: "Expense",
    description: "Marketing Campaign",
    amount: "-$850.00",
    date: "2024-01-13",
    status: "Completed",
  },
]

export default function FinancePage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold mb-2">Finance</h1>
        <p className="text-sm text-muted-foreground">Monitor your financial performance</p>
      </div>

      {/* Financial Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="h-8 w-8 text-green-500" />
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Revenue</h3>
            <p className="text-2xl font-bold">$156,234.50</p>
          </CardContent>
        </Card>

        <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <CreditCard className="h-8 w-8 text-red-500" />
              <TrendingDown className="h-5 w-5 text-red-500" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Expenses</h3>
            <p className="text-2xl font-bold">$42,150.00</p>
          </CardContent>
        </Card>

        <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Wallet className="h-8 w-8 text-accent" />
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Net Profit</h3>
            <p className="text-2xl font-bold">$114,084.50</p>
          </CardContent>
        </Card>

        <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="h-8 w-8 text-blue-500" />
              <Badge variant="secondary">+12.5%</Badge>
            </div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Profit Margin</h3>
            <p className="text-2xl font-bold">73%</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      transaction.type === "Income" ? "bg-green-500/10" : "bg-red-500/10"
                    }`}
                  >
                    {transaction.type === "Income" ? (
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    ) : (
                      <TrendingDown className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <p className="text-sm text-muted-foreground">{transaction.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p
                    className={`text-lg font-bold ${transaction.type === "Income" ? "text-green-500" : "text-red-500"}`}
                  >
                    {transaction.amount}
                  </p>
                  <Badge variant={transaction.status === "Completed" ? "default" : "secondary"}>
                    {transaction.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
