import Pricing from "@/components/pricing/Pricing";
import { getListPage } from "@/lib/contentParser";
import CallToAction from "@/partials/CallToAction";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";

export type PriceCardData = {
  name: string;
  content: string;
  currency: string;
  monthly_price: string;
  yearly_price: string;
  featured: string;
  button_label: string;
  button_link: string;
  services: string[];
};

export interface PricingData {
  title: string;
  description: string;
  offer: string;
  monthly_yearly_toggle: string;
  billing: {
    monthly: string;
    annually: string;
  };
  pricing_card: Array<PriceCardData>;
}

function Page() {
  const pricing = getListPage("/pricing/_index.md");
  const { frontmatter }: { frontmatter: PricingData } = pricing;

  return (
    <>
      <SeoMeta
        title={pricing.frontmatter.title}
        meta_title={pricing.frontmatter.title}
        description={pricing.frontmatter.description}
      />
      <PageHeader title={pricing.frontmatter.title} />
      <Pricing data={frontmatter} />
      <CallToAction />
    </>
  );
}

export default Page;
