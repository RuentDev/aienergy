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

  // State for filters (Array of strings)
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState<string[]>([]);
  const [selectedInverterType, setSelectedInverterType] = useState<string[]>(
    []
  );
  const [selectedPhaseSupport, setSelectedPhaseSupport] = useState<string[]>(
    []
  );
  const [selectedPowerRating, setSelectedPowerRating] = useState<string[]>([]);
  const [selectedWarranty, setSelectedWarranty] = useState<string[]>([]);

  const [sortBy, setSortBy] = useState<string>("featured");

  // Toggle Helper
  const toggleFilter = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

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

    // Category Filter
    if (selectedCategory.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategory.includes(product.category)
      );
    }

    // Brand Filter
    if (selectedBrand.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrand.includes(product.brand)
      );
    }

    // Color Filter
    if (selectedColor.length > 0) {
      filtered = filtered.filter((product) =>
        selectedColor.includes(product.color)
      );
    }

    // Inverter Type Filter
    if (selectedInverterType.length > 0) {
      filtered = filtered.filter(
        (product) =>
          product.inverterType &&
          selectedInverterType.includes(product.inverterType)
      );
    }

    // Phase Support Filter
    if (selectedPhaseSupport.length > 0) {
      filtered = filtered.filter(
        (product) =>
          product.phaseSupport &&
          selectedPhaseSupport.includes(product.phaseSupport)
      );
    }

    // Power Rating Filter
    if (selectedPowerRating.length > 0) {
      filtered = filtered.filter(
        (product) =>
          product.powerRating &&
          selectedPowerRating.includes(product.powerRating)
      );
    }

    // Warranty Filter
    if (selectedWarranty.length > 0) {
      filtered = filtered.filter((product) =>
        selectedWarranty.includes(product.warranty)
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
    setSelectedCategory([]);
    setSelectedBrand([]);
    setSelectedColor([]);
    setSelectedInverterType([]);
    setSelectedPhaseSupport([]);
    setSelectedPowerRating([]);
    setSelectedWarranty([]);
  };

  const activeFiltersCount =
    selectedCategory.length +
    selectedBrand.length +
    selectedColor.length +
    selectedInverterType.length +
    selectedPhaseSupport.length +
    selectedPowerRating.length +
    selectedWarranty.length;

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
            toggleCategory={(val) => toggleFilter(val, setSelectedCategory)}
            selectedBrand={selectedBrand}
            toggleBrand={(val) => toggleFilter(val, setSelectedBrand)}
            selectedColor={selectedColor}
            toggleColor={(val) => toggleFilter(val, setSelectedColor)}
            selectedInverterType={selectedInverterType}
            toggleInverterType={(val) =>
              toggleFilter(val, setSelectedInverterType)
            }
            selectedPhaseSupport={selectedPhaseSupport}
            togglePhaseSupport={(val) =>
              toggleFilter(val, setSelectedPhaseSupport)
            }
            selectedPowerRating={selectedPowerRating}
            togglePowerRating={(val) =>
              toggleFilter(val, setSelectedPowerRating)
            }
            selectedWarranty={selectedWarranty}
            toggleWarranty={(val) => toggleFilter(val, setSelectedWarranty)}
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
                <Mobile
                  activeFiltersCount={activeFiltersCount}
                  clearAllFilters={clearAllFilters}
                  selectedCategory={selectedCategory}
                  toggleCategory={(val) =>
                    toggleFilter(val, setSelectedCategory)
                  }
                  selectedBrand={selectedBrand}
                  toggleBrand={(val) => toggleFilter(val, setSelectedBrand)}
                  selectedColor={selectedColor}
                  toggleColor={(val) => toggleFilter(val, setSelectedColor)}
                  selectedInverterType={selectedInverterType}
                  toggleInverterType={(val) =>
                    toggleFilter(val, setSelectedInverterType)
                  }
                  selectedPhaseSupport={selectedPhaseSupport}
                  togglePhaseSupport={(val) =>
                    toggleFilter(val, setSelectedPhaseSupport)
                  }
                  selectedPowerRating={selectedPowerRating}
                  togglePowerRating={(val) =>
                    toggleFilter(val, setSelectedPowerRating)
                  }
                  selectedWarranty={selectedWarranty}
                  toggleWarranty={(val) =>
                    toggleFilter(val, setSelectedWarranty)
                  }
                />

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

            {/* Category Chips - Optional: Keep or Remove? Keeping for now but updating logic */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory.includes(category) ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => toggleFilter(category, setSelectedCategory)}
                  className={
                    selectedCategory.includes(category)
                      ? "bg-accent hover:bg-accent/90 text-white"
                      : "hover:border-accent hover:bg-accent hover:text-white dark:hover:text-black transition-all duration-200"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            <ProductsGrid
              products={filteredProducts}
              warehouse={warehouse}
              addToCart={(product) => addToCart(product)}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
