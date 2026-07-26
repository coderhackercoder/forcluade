import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import CategoryRow from "@/components/CategoryRow";
import FeatureCards from "@/components/FeatureCards";
import ProductSlider from "@/components/ProductSlider";
import ComparisonChart from "@/components/ComparisonChart";
import StandardPreview from "@/components/StandardPreview";
import MissionSection from "@/components/MissionSection";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <CategoryRow />
      <FeatureCards />
      <ProductSlider products={products.slice(0, 5)} />
      <ComparisonChart />
      <StandardPreview />
      <MissionSection />
    </>
  );
}
