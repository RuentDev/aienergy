import { Badge } from "@/components/ui/badge";
import { SlidersHorizontal } from "lucide-react";
import Filter from "./filter";

interface DesktopFilterProps {
  activeFiltersCount: number;
  selectedCategory: string[];
  toggleCategory: (category: string) => void;
  selectedBrand: string[];
  toggleBrand: (brand: string) => void;
  selectedColor: string[];
  toggleColor: (color: string) => void;
  selectedInverterType: string[];
  toggleInverterType: (inverterType: string) => void;
  selectedPhaseSupport: string[];
  togglePhaseSupport: (phaseSupport: string) => void;
  selectedPowerRating: string[];
  togglePowerRating: (powerRating: string) => void;
  selectedWarranty: string[];
  toggleWarranty: (warranty: string) => void;
  clearAllFilters: () => void;
}
const DesktopFilter = (props: DesktopFilterProps) => {
  const {
    activeFiltersCount,
    selectedCategory,
    toggleCategory,
    selectedBrand,
    toggleBrand,
    selectedColor,
    toggleColor,
    selectedInverterType,
    toggleInverterType,
    selectedPhaseSupport,
    togglePhaseSupport,
    selectedPowerRating,
    togglePowerRating,
    selectedWarranty,
    toggleWarranty,
    clearAllFilters,
  } = props;
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-accent" />
            Filters
          </h2>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="bg-accent/10 text-accent">
              {activeFiltersCount}
            </Badge>
          )}
        </div>
        <Filter
          selectedCategory={selectedCategory}
          toggleCategory={toggleCategory}
          selectedBrand={selectedBrand}
          toggleBrand={toggleBrand}
          selectedColor={selectedColor}
          toggleColor={toggleColor}
          selectedInverterType={selectedInverterType}
          toggleInverterType={toggleInverterType}
          selectedPhaseSupport={selectedPhaseSupport}
          togglePhaseSupport={togglePhaseSupport}
          selectedPowerRating={selectedPowerRating}
          togglePowerRating={togglePowerRating}
          selectedWarranty={selectedWarranty}
          toggleWarranty={toggleWarranty}
          clearAllFilters={clearAllFilters}
          activeFiltersCount={activeFiltersCount}
        />
      </div>
    </aside>
  );
};

export default DesktopFilter;
