import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  brands,
  categories,
  colors,
  inverterTypes,
  phaseSupports,
  powerRatings,
  warranties,
} from "@/lib/products-data";
import { Button } from "@/components/ui/button";

interface FilterProps {
  activeFiltersCount: number;
  clearAllFilters: () => void;

  selectedCategory: string[];
  toggleCategory: (category: string) => void;
  selectedBrand: string[];
  toggleBrand: (brand: string) => void;
  selectedColor: string[];
  toggleColor: (color: string) => void;
  selectedInverterType: string[];
  toggleInverterType: (type: string) => void;
  selectedPhaseSupport: string[];
  togglePhaseSupport: (phase: string) => void;
  selectedPowerRating: string[];
  togglePowerRating: (rating: string) => void;
  selectedWarranty: string[];
  toggleWarranty: (warranty: string) => void;
}

interface FilterSectionProps {
  title: string;
  options: string[];
  selectedValues: string[];
  onToggle: (value: string) => void;
}

const FilterSection = ({
  title,
  options,
  selectedValues,
  onToggle,
}: FilterSectionProps) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger className="text-sm font-semibold p-3">
        {title}
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-2 p-5">
          {options.map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <Checkbox
                id={`${title}-${option}`}
                checked={selectedValues.includes(option)}
                onCheckedChange={() => onToggle(option)}
              />
              <Label
                htmlFor={`${title}-${option}`}
                className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {option}
                {/* Optional: Add count if available later */}
              </Label>
            </div>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

const Filter = (props: FilterProps) => {
  const {
    activeFiltersCount,
    clearAllFilters,
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
  } = props;

  return (
    <div className="w-full">
      {activeFiltersCount > 0 && (
        <div className="mb-4">
          <Button
            variant="ghost"
            onClick={clearAllFilters}
            className="w-full h-8 px-2 text-xs text-muted-foreground hover:text-foreground"
          >
            Clear All Filters ({activeFiltersCount})
          </Button>
        </div>
      )}

      <ScrollArea className="h-[calc(100vh-200px)] pr-4">
        <Accordion
          type="multiple"
          className="w-full"
          defaultValue={[
            "Product Type",
            "Brand",
            "Colour",
            "Inverter Type",
            "Phase Support",
            "Power Rating",
            "Product Warranty",
          ]}
        >
          <FilterSection
            title="Product Type"
            options={categories}
            selectedValues={selectedCategory}
            onToggle={toggleCategory}
          />
          <FilterSection
            title="Brand"
            options={brands}
            selectedValues={selectedBrand}
            onToggle={toggleBrand}
          />
          <FilterSection
            title="Colour"
            options={colors}
            selectedValues={selectedColor}
            onToggle={toggleColor}
          />
          <FilterSection
            title="Inverter Type"
            options={inverterTypes}
            selectedValues={selectedInverterType}
            onToggle={toggleInverterType}
          />
          <FilterSection
            title="Phase Support"
            options={phaseSupports}
            selectedValues={selectedPhaseSupport}
            onToggle={togglePhaseSupport}
          />
          <FilterSection
            title="Power Rating"
            options={powerRatings}
            selectedValues={selectedPowerRating}
            onToggle={togglePowerRating}
          />
          <FilterSection
            title="Product Warranty"
            options={warranties}
            selectedValues={selectedWarranty}
            onToggle={toggleWarranty}
          />
        </Accordion>
      </ScrollArea>
    </div>
  );
};

export default Filter;
