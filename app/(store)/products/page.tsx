"use client";
import { useState, useMemo } from "react";
import { useCart } from "@/lib/cart-context";

import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useWarehouse } from "@/lib/warehouse-context";

import { products, categories } from "@/lib/products-data";
import Mobile from "@/components/store/sidebar-filter/mobile";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Breadcrumbs from "@/components/store/breadcrumbs";
import DesktopFilters from "@/components/store/sidebar-filter/desktop";
import ProductsGrid from "@/components/store/products-grid/products-grid";

export default function ProductsPage() {
  const { warehouse } = useWarehouse();
  const { addToCart } = useCart();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Categories");
  const [selectedBrand, setSelectedBrand] = useState<string>("All Brands");
  const [selectedColor, setSelectedColor] = useState<string>("All Colours");
  const [selectedInverterType, setSelectedInverterType] =
    useState<string>("All Types");
  const [selectedPhaseSupport, setSelectedPhaseSupport] =
    useState<string>("All Phases");
  const [selectedPowerRating, setSelectedPowerRating] =
    useState<string>("All Ratings");
  const [selectedWarranty, setSelectedWarranty] =
    useState<string>("All Warranties");
  const [sortBy, setSortBy] = useState<string>("featured");

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (selectedBrand !== "All Brands") {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }

    if (selectedColor !== "All Colours") {
      filtered = filtered.filter((product) => product.color === selectedColor);
    }

    if (selectedInverterType !== "All Types") {
      filtered = filtered.filter(
        (product) => product.inverterType === selectedInverterType
      );
    }

    if (selectedPhaseSupport !== "All Phases") {
      filtered = filtered.filter(
        (product) => product.phaseSupport === selectedPhaseSupport
      );
    }

    if (selectedPowerRating !== "All Ratings") {
      filtered = filtered.filter(
        (product) => product.powerRating === selectedPowerRating
      );
    }

    if (selectedWarranty !== "All Warranties") {
      filtered = filtered.filter(
        (product) => product.warranty === selectedWarranty
      );
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [
    searchQuery,
    selectedCategory,
    selectedBrand,
    selectedColor,
    selectedInverterType,
    selectedPhaseSupport,
    selectedPowerRating,
    selectedWarranty,
    sortBy,
  ]);

  const clearAllFilters = () => {
    setSelectedCategory("All Categories");
    setSelectedBrand("All Brands");
    setSelectedColor("All Colours");
    setSelectedInverterType("All Types");
    setSelectedPhaseSupport("All Phases");
    setSelectedPowerRating("All Ratings");
    setSelectedWarranty("All Warranties");
  };

  const activeFiltersCount =
    (selectedCategory !== "All Categories" ? 1 : 0) +
    (selectedBrand !== "All Brands" ? 1 : 0) +
    (selectedColor !== "All Colours" ? 1 : 0) +
    (selectedInverterType !== "All Types" ? 1 : 0) +
    (selectedPhaseSupport !== "All Phases" ? 1 : 0) +
    (selectedPowerRating !== "All Ratings" ? 1 : 0) +
    (selectedWarranty !== "All Warranties" ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      <Breadcrumbs searchQuery={searchQuery} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Desktop Filters */}
          <DesktopFilters
            activeFiltersCount={activeFiltersCount}
            clearAllFilters={clearAllFilters}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedInverterType={selectedInverterType}
            setSelectedInverterType={setSelectedInverterType}
            selectedPhaseSupport={selectedPhaseSupport}
            setSelectedPhaseSupport={setSelectedPhaseSupport}
            selectedPowerRating={selectedPowerRating}
            setSelectedPowerRating={setSelectedPowerRating}
            selectedWarranty={selectedWarranty}
            setSelectedWarranty={setSelectedWarranty}
          />
          {/* Main Content */}
          <main>
            {/* Header with Mobile Filter & Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  {searchQuery
                    ? `Search Results for "${searchQuery}"`
                    : "All Products"}
                </h1>
                <p className="text-sm text-muted-foreground">
                  Showing {filteredProducts.length} products from {warehouse}{" "}
                  warehouse
                </p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                {/* Mobile Filter */}
                <Mobile activeFiltersCount={activeFiltersCount} />

                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="name">Name: A to Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Category Chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() =>
                    setSelectedCategory(
                      category === selectedCategory
                        ? "All Categories"
                        : category
                    )
                  }
                  className={
                    selectedCategory === category
                      ? "bg-accent hover:bg-accent/90 text-white"
                      : "hover:border-accent hover:bg-accent hover:text-white dark:hover:text-black transition-all duration-200"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            <ProductsGrid products={filteredProducts} warehouse={warehouse} />
          </main>
        </div>
      </div>
    </div>
  );
}
