import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

interface BreadcrumbsProps {
  searchQuery: string;
}

const breadcrumbs = ({ searchQuery }: BreadcrumbsProps) => {
  return (
    <div className="bg-muted/20 border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-2 text-sm">
          <Link
            href="/"
            className="hover:text-accent transition-colors flex items-center gap-1"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Products</span>
          {searchQuery && (
            <>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                Search: {searchQuery}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default breadcrumbs;
