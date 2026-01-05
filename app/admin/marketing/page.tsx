"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Users, Eye, MousePointer, TrendingUp } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const campaignData = [
  { name: "Email Campaign 1", opens: 1245, clicks: 456, conversions: 89 },
  { name: "Email Campaign 2", opens: 980, clicks: 312, conversions: 67 },
  { name: "Social Media Ads", opens: 2340, clicks: 890, conversions: 145 },
  { name: "Google Ads", opens: 1890, clicks: 678, conversions: 123 },
]

export default function MarketingPage() {
  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold mb-2">Marketing</h1>
        <p className="text-sm text-muted-foreground">Manage campaigns and track performance</p>
      </div>

      {/* Marketing Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Mail className="h-8 w-8 text-blue-500" />
              <TrendingUp className="h-5 w-5 text-green-500" />
            </div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Email Subscribers</h3>
            <p className="text-2xl font-bold">12,458</p>
          </CardContent>
        </Card>

        <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Eye className="h-8 w-8 text-purple-500" />
              <Badge variant="secondary">+15%</Badge>
            </div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Total Impressions</h3>
            <p className="text-2xl font-bold">45,231</p>
          </CardContent>
        </Card>

        <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <MousePointer className="h-8 w-8 text-accent" />
              <Badge variant="secondary">+22%</Badge>
            </div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Click-through Rate</h3>
            <p className="text-2xl font-bold">3.8%</p>
          </CardContent>
        </Card>

        <Card className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-green-500" />
              <Badge variant="secondary">+18%</Badge>
            </div>
            <h3 className="text-sm font-medium text-muted-foreground mb-1">Conversions</h3>
            <p className="text-2xl font-bold">424</p>
          </CardContent>
        </Card>
      </div>

      {/* Campaign Performance */}
      <Card className="border-border">
        <CardHeader>
          <CardTitle>Campaign Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={campaignData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="opens" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="clicks" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              <Bar dataKey="conversions" fill="hsl(var(--accent))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Active Campaigns */}
      <Card className="border-border">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Active Campaigns</CardTitle>
            <Button className="bg-accent hover:bg-accent/90">Create Campaign</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaignData.map((campaign, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/30 transition-colors"
              >
                <div>
                  <h3 className="font-semibold mb-1">{campaign.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{campaign.opens} opens</span>
                    <span>{campaign.clicks} clicks</span>
                    <span>{campaign.conversions} conversions</span>
                  </div>
                </div>
                <Badge>Active</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
