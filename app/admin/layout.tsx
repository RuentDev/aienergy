"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Settings,
  DollarSign,
  CheckSquare,
  BarChart3,
  Megaphone,
  Percent,
  Menu,
  X,
  Bell,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Suspense } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { icon: LayoutDashboard, label: "Home", href: "/admin" },
  { icon: ShoppingCart, label: "Orders", href: "/admin/orders", badge: 12 },
  { icon: Package, label: "Products", href: "/admin/products" },
  { icon: Users, label: "Users", href: "/admin/users", notification: 5 },
  { icon: DollarSign, label: "Finance", href: "/admin/finance" },
  { icon: CheckSquare, label: "Tasks & Reminders", href: "/admin/tasks" },
  { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
  { icon: Megaphone, label: "Marketing", href: "/admin/marketing" },
  { icon: Percent, label: "Discounts", href: "/admin/discounts" },
  { icon: Settings, label: "Account Settings", href: "/admin/settings" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="h-screen flex flex-col bg-background overflow-hidden">
        {/* Mobile Header - Fixed */}
        <header className="lg:hidden sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shrink-0">
          <div className="flex h-16 items-center justify-between px-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-foreground"
            >
              {sidebarOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
            <h1 className="text-lg font-bold">Admin Panel</h1>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-destructive">
                  3
                </Badge>
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar - Fixed, Scrollable Content */}
          <aside
            className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-border bg-card transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:z-0 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Overlay for mobile */}
            {sidebarOpen && (
              <div
                className="fixed inset-0 bg-background/80 backdrop-blur-sm lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            <div className="relative h-full flex flex-col">
              {/* Logo - Fixed */}
              <div className="h-16 flex items-center justify-between px-6 border-b border-border shrink-0">
                <h1 className="text-xl font-bold bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                  AI Energy Admin
                </h1>
              </div>

              {/* Search - Fixed */}
              <div className="p-4 border-b border-border shrink-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search..."
                    className="pl-9 bg-background"
                  />
                </div>
              </div>

              {/* Navigation - Scrollable */}
              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                        isActive
                          ? "bg-accent text-accent-foreground shadow-sm"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon
                          className={`h-5 w-5 ${
                            isActive
                              ? ""
                              : "group-hover:scale-110 transition-transform"
                          }`}
                        />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <Badge className="bg-destructive text-destructive-foreground">
                            {item.badge}
                          </Badge>
                        )}
                        {item.notification && (
                          <div className="relative">
                            <Bell className="h-4 w-4" />
                            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-destructive flex items-center justify-center text-[8px] font-bold">
                              {item.notification}
                            </span>
                          </div>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </nav>

              {/* User Profile - Fixed */}
              <div className="p-4 border-t border-border shrink-0">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
                  <Avatar className="h-10 w-10 ring-2 ring-accent/20">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      AD
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold truncate">Admin User</p>
                    <p className="text-xs text-muted-foreground truncate">
                      admin@aienergy.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content - Scrollable */}
          <main className="flex-1 flex flex-col overflow-hidden">
            {/* Desktop Header - Fixed */}
            <header className="hidden lg:block border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 shrink-0">
              <div className="flex h-16 items-center justify-between px-8">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-semibold">
                    {navItems.find((item) => item.href === pathname)?.label ||
                      "Dashboard"}
                  </h2>
                </div>
                <div className="flex items-center gap-4">
                  <ThemeToggle />
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-destructive">
                      3
                    </Badge>
                  </Button>
                  <Avatar className="h-9 w-9 ring-2 ring-accent/20 cursor-pointer">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      AD
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </header>

            {/* Page Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-4 lg:p-8">{children}</div>
          </main>
        </div>
      </div>
    </Suspense>
  );
}
