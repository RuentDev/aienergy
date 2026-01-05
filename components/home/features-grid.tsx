import { Shield, Truck, Users, Star } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import CustomIcon from "../custom-icon";
import Image from "next/image";

export type Feature = {
  heading: string;
  sub_heading: string;
  icon_name: string;
  custom_icon: {
    url: string;
  };
};

interface FeaturesGridProps {
  features: Feature[];
  id: string;
  __typename: string;
}

export function FeaturesGrid(props: FeaturesGridProps) {
  const { features } = props;
  return (
    <AnimatedSection animation="fade-in">
      <section className="bg-card border-y border-border py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {features?.map?.((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 md:gap-4 justify-center"
              >
                {feature?.custom_icon ? (
                  <Image
                    src={feature?.custom_icon?.url}
                    alt={feature?.heading}
                    width={24}
                    height={24}
                    className="w-6 h-6 md:w-8 md:h-8"
                  />
                ) : (
                  <CustomIcon
                    name={feature?.icon_name}
                    className="w-6 h-6 md:w-8 md:h-8 text-accent"
                  />
                )}
                <div>
                  <div className="font-bold text-sm md:text-base text-foreground">
                    {feature?.heading}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {feature?.sub_heading}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
