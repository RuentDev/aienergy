import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import Filter from "./filter";

interface MobileProps {
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

const Mobile = (props: MobileProps) => {
  const { activeFiltersCount } = props;
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="lg:hidden flex-1 sm:flex-none relative bg-transparent"
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filters
          {activeFiltersCount > 0 && (
            <Badge
              variant="secondary"
              className="ml-2 bg-accent text-white h-5 w-5 p-0 flex items-center justify-center"
            >
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <Filter {...props} />
      </SheetContent>
    </Sheet>
  );
};

export default Mobile;
