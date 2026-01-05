"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { ShoppingCart, Menu, X, Zap, MapPin, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWarehouse } from "@/lib/warehouse-context";
import { useCart } from "@/lib/cart-context";
import { EnhancedSearchBar } from "@/components/enhanced-search-bar";
import { CartSheet } from "@/components/cart-sheet";
import Link from "next/link";
import Logo from "./logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { warehouse, setWarehouse } = useWarehouse();
  const { cartItemsCount } = useCart();
  const [cartOpen, setCartOpen] = useState(false);

  const warehouses = ["Sydney", "Brisbane", "Melbourne"] as const;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="hidden lg:grid lg:grid-cols-[auto_1fr_auto] items-center gap-6 h-20">
          {/* Logo - Left */}
          <Logo />

          {/* Center - Search & Navigation */}
          <div className="flex flex-col items-center justify-center gap-2 max-w-3xl mx-auto w-full">
            {/* Search Bar - Centered with proper width */}
            <div className="w-full">
              <EnhancedSearchBar />
            </div>

            {/* Navigation Links - Centered below search */}
            <nav className="flex items-center justify-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium hover:text-accent transition-colors relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/products"
                className="text-sm font-medium hover:text-accent transition-colors relative group"
              >
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-accent transition-colors relative group"
              >
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-accent transition-colors relative group"
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/downloads"
                className="text-sm font-medium hover:text-accent transition-colors relative group"
              >
                Downloads
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/stc-trading"
                className="text-sm font-medium hover:text-accent transition-colors relative group"
              >
                STC Trading
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/shift-trade"
                className="text-sm font-medium hover:text-accent transition-colors relative group"
              >
                Shift Trade
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full"></span>
              </Link>
            </nav>
          </div>

          {/* Right Actions - Warehouse, Theme, Cart */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Warehouse Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 hover:border-accent bg-transparent"
                >
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">{warehouse}</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {warehouses.map((wh) => (
                  <DropdownMenuItem
                    key={wh}
                    onClick={() => setWarehouse(wh)}
                    className={
                      wh === warehouse
                        ? "bg-accent/10 text-accent font-medium"
                        : ""
                    }
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {wh}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-accent/10 hover:text-accent transition-all"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center animate-scale-in font-medium">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between h-16 md:h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-accent rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
              <Zap className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-base md:text-lg">
                AI Energy Shop
              </span>
              <span className="text-xs text-muted-foreground">
                Australian Wholesale
              </span>
            </div>
          </Link>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Warehouse Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 hidden md:flex hover:border-accent bg-transparent"
                >
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm">{warehouse}</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {warehouses.map((wh) => (
                  <DropdownMenuItem
                    key={wh}
                    onClick={() => setWarehouse(wh)}
                    className={
                      wh === warehouse ? "bg-accent/10 text-accent" : ""
                    }
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    {wh}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="relative hover:bg-accent/10 hover:text-accent"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center animate-scale-in">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-4">
          <EnhancedSearchBar />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background animate-slide-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {/* Mobile Warehouse Selector */}
            <div className="pb-4 border-b border-border">
              <p className="text-xs text-muted-foreground mb-2">
                Select Warehouse
              </p>
              <div className="flex gap-2">
                {warehouses.map((wh) => (
                  <Button
                    key={wh}
                    size="sm"
                    variant={wh === warehouse ? "default" : "outline"}
                    onClick={() => setWarehouse(wh)}
                    className={
                      wh === warehouse
                        ? "bg-accent hover:bg-accent/90 text-white"
                        : ""
                    }
                  >
                    {wh}
                  </Button>
                ))}
              </div>
            </div>

            <Link
              href="/"
              className="text-sm font-medium hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/downloads"
              className="text-sm font-medium hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Downloads
            </Link>
            <Link
              href="/stc-trading"
              className="text-sm font-medium hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              STC Trading
            </Link>
            <Link
              href="/shift-trade"
              className="text-sm font-medium hover:text-accent transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shift Trade
            </Link>
          </nav>
        </div>
      )}

      <CartSheet open={cartOpen} onOpenChange={setCartOpen} />
    </header>
  );
}
