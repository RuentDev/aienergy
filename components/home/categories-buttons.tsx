import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animated-section";
import CustomIcon from "../custom-icon";
import Image from "next/image";

type Category = {
  heading: string;
  slug: string;
  icon_name: string;
  custom_icon: {
    url: string;
    alternativeText: string;
    name: string;
  };
};
interface CategoriesButtonsProps {
  heading?: string;
  sub_heading?: string;
  categories?: Category[];
  __typename?: string;
  id?: string;
}

export function CategoriesButtons(props: CategoriesButtonsProps) {
  const { heading, sub_heading, categories } = props;

  return (
    <AnimatedSection animation="fade-up" delay={100}>
      <section id="products" className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-balance">
              {heading}
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
              {sub_heading}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
            {categories?.map?.((category, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="mb-2 md:mb-3 group-hover:scale-110 transition-transform flex justify-center items-center text-center">
                    {category.custom_icon ? (
                      <Image
                        src={category.custom_icon.url}
                        alt={category.custom_icon.alternativeText}
                        width={50}
                        height={50}
                        className="w-12 h-12"
                      />
                    ) : (
                      <CustomIcon
                        name={category.icon_name}
                        width={50}
                        height={50}
                        className="group-hover:text-accent"
                      />
                    )}
                  </div>
                  <h3 className="font-semibold text-sm md:text-base mb-1">
                    {category.heading}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    {/* {category.count} */}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
