import { HeroSection } from "@/components/home/hero-section";
import { FeaturesGrid } from "@/components/home/features-grid";
import { CategoriesButtons } from "@/components/home/categories-buttons";
import { FeaturedProductsSection } from "@/components/home/featured-products/featured-products";
import { AboutSection } from "@/components/home/about-section";
import { NewsletterSection } from "@/components/home/newsletter-section";
import { GetPageQuery } from "@/lib/gql/graphql";

interface DynamicSectionsProps {
  data: GetPageQuery | null | undefined;
}

const DynamicSections: React.FC<DynamicSectionsProps> = ({ data }) => {
  const componentMap: Record<string, (section: any) => React.ReactNode> = {
    ComponentSectionsImageSlider: (section) => {
      return <HeroSection {...section} />;
    },
    ComponentSectionsStoreFeatureGrid: (section) => (
      <FeaturesGrid {...section} />
    ),
    ComponentSectionsCategoryButtonSection: (section) => (
      <CategoriesButtons {...section} />
    ),
    ComponentSectionsFeaturedProducts: (section) => (
      <FeaturedProductsSection {...section} />
    ),
    // ComponentSectionsAbout: (section) => <AboutSection data={section.data} />,
    // ComponentSectionsContactUs: (section) => (
    //   <ContactusSection data={section.data} />
    // ),
    // ComponentFormNewsletter: (section) => (
    //   <NewsletterSection data={section.data} />
    // ),
    // ComponentSectionsContactDetails: (section) => (
    //   <ContactDetails data={section.data} />
    // ),
    // ComponentSectionsWarehouseLocations: (section) => (
    //   <WarehouseSection data={section.data} />
    // ),
    // ComponentFormInquiry: (section) => <InquerySection data={section.data} />,
  };

  return (
    <>
      {data?.getPage?.sections?.map((section, index) => {
        if (!section || !section.__typename) {
          return null;
        }
        const DynamicSection = componentMap[section.__typename];

        if (!DynamicSection) {
          return null;
        }

        return <DynamicSection key={index} {...section} />;
      })}
      <AboutSection />
      <NewsletterSection />
    </>
  );
};

export default DynamicSections;
