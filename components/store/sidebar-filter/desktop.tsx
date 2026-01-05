import { Badge } from "@/components/ui/badge";
import { SlidersHorizontal } from "lucide-react";
import Filter from "./filter";

interface DesktopFilterProps {
  activeFiltersCount: number;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedInverterType: string;
  setSelectedInverterType: (inverterType: string) => void;
  selectedPhaseSupport: string;
  setSelectedPhaseSupport: (phaseSupport: string) => void;
  selectedPowerRating: string;
  setSelectedPowerRating: (powerRating: string) => void;
  selectedWarranty: string;
  setSelectedWarranty: (warranty: string) => void;
  clearAllFilters: () => void;
}
const DesktopFilter = (props: DesktopFilterProps) => {
  const {
    activeFiltersCount,
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
          clearAllFilters={clearAllFilters}
          activeFiltersCount={activeFiltersCount}
        />
      </div>
    </aside>
  );
};

export default DesktopFilter;
