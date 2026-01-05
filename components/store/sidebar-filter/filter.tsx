import { Separator } from "@/components/ui/separator";
import {
  brands,
  categories,
  colors,
  inverterTypes,
  phaseSupports,
  powerRatings,
  warranties,
} from "@/lib/products-data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Package } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FilterProps {
  activeFiltersCount: number;
  clearAllFilters: () => void;

  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedInverterType: string;
  setSelectedInverterType: (type: string) => void;
  selectedPhaseSupport: string;
  setSelectedPhaseSupport: (phase: string) => void;
  selectedPowerRating: string;
  setSelectedPowerRating: (rating: string) => void;
  selectedWarranty: string;
  setSelectedWarranty: (warranty: string) => void;
}

const Filter = (props: FilterProps) => {
  const {
    activeFiltersCount,
    clearAllFilters,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    selectedColor,
    setSelectedColor,
    selectedInverterType,
    setSelectedInverterType,
    selectedPhaseSupport,
    setSelectedPhaseSupport,
    selectedPowerRating,
    setSelectedPowerRating,
    selectedWarranty,
    setSelectedWarranty,
  } = props;
  return (
    <div className="space-y-4">
      {/* Category Filter */}
      <div>
        <h3 className="font-semibold mb-2 text-sm flex items-center gap-2">
          <Package className="w-4 h-4 text-accent" />
          Product Type
        </h3>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Categories">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Brand Filter */}
      <div>
        <h3 className="font-semibold mb-2 text-sm">Brand</h3>
        <Select value={selectedBrand} onValueChange={setSelectedBrand}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Brands">All Brands</SelectItem>
            {brands.map((brand) => (
              <SelectItem key={brand} value={brand}>
                {brand}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Color Filter */}
      <div>
        <h3 className="font-semibold mb-2 text-sm">Colour</h3>
        <Select value={selectedColor} onValueChange={setSelectedColor}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Colours">All Colours</SelectItem>
            {colors.map((color) => (
              <SelectItem key={color} value={color}>
                {color}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Inverter Type Filter */}
      <div>
        <h3 className="font-semibold mb-2 text-sm">Inverter Type</h3>
        <Select
          value={selectedInverterType}
          onValueChange={setSelectedInverterType}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Types">All Types</SelectItem>
            {inverterTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Phase Support Filter */}
      <div>
        <h3 className="font-semibold mb-2 text-sm">Phase Support</h3>
        <Select
          value={selectedPhaseSupport}
          onValueChange={setSelectedPhaseSupport}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Phases">All Phases</SelectItem>
            {phaseSupports.map((phase) => (
              <SelectItem key={phase} value={phase}>
                {phase}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Power Rating Filter */}
      <div>
        <h3 className="font-semibold mb-2 text-sm">Power Rating</h3>
        <Select
          value={selectedPowerRating}
          onValueChange={setSelectedPowerRating}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Ratings">All Ratings</SelectItem>
            {powerRatings.map((rating) => (
              <SelectItem key={rating} value={rating}>
                {rating}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Warranty Filter */}
      <div>
        <h3 className="font-semibold mb-2 text-sm">Product Warranty</h3>
        <Select value={selectedWarranty} onValueChange={setSelectedWarranty}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Warranties">All Warranties</SelectItem>
            {warranties.map((warranty) => (
              <SelectItem key={warranty} value={warranty}>
                {warranty}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {activeFiltersCount > 0 && (
        <>
          <Separator />
          <Button
            variant="outline"
            onClick={clearAllFilters}
            className="w-full bg-transparent"
          >
            Clear All Filters
          </Button>
        </>
      )}
    </div>
  );
};

export default Filter;
