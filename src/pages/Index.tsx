import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import QuoteSection from "@/components/QuoteSection";
import culturalWisdom from "@/assets/cultural-wisdom.jpg";
import trustedRoots from "@/assets/trusted-roots.jpg";
import lifelongFriend from "@/assets/lifelong-friend.jpg";

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />

      <FeatureSection
        title="CULTURAL WISDOM"
        description="Use practices curated from different heritages daily to feel your best: Ayurveda, Traditional Chinese Medicine and more."
        imageSrc={culturalWisdom}
        imageAlt="An open book with a flower stem on it"
        imagePosition="left"
      />

      <FeatureSection
        title="TRUSTED ROOTS"
        description="The support you get is grounded in real-world experiences and credible data."
        imageSrc={trustedRoots}
        imageAlt="A woman sitting in a yoga pose"
        imagePosition="right"
      />

      <FeatureSection
        title="LIFELONG FRIEND"
        description="You'll be guided through every season of life, from your teen years to menopause and beyond."
        imageSrc={lifelongFriend}
        imageAlt="A path in a forest covered with flowers on both sides"
        imagePosition="left"
      />

      <QuoteSection />
    </main>
  );
};

export default Index;
