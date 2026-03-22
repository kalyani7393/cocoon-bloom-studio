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
        description="Women across cultures have managed their health for centuries. Mygrammie draws on that collective knowledge, from Ayurveda to Traditional Chinese Medicine, and brings it to your daily life."
        imageSrc={culturalWisdom}
        imageAlt="An open book with a flower stem on it"
        imagePosition="left"
        className="mt-10 md:mt-12"
      />

      <FeatureSection
        title="TRUSTED ROOTS"
        description="Every recommendation is backed by a combination of research, ancestral tradition, and the real experiences of women who have been through the same thing."
        imageSrc={trustedRoots}
        imageAlt="A woman sitting in a yoga pose"
        imagePosition="right"
        className="mt-3 md:mt-3"
      />

      <FeatureSection
        title="LIFELONG FRIEND"
        description="Your body changes, and so does what it needs. Mygrammie stays with you through every stage, from your first cycle to perimenopause and beyond."
        imageSrc={lifelongFriend}
        imageAlt="A path in a forest covered with flowers on both sides"
        imagePosition="left"
        className="mt-3 md:mt-3"
      />

      <div className="mt-10 md:mt-12">
        <QuoteSection />
      </div>
    </main>
  );
};

export default Index;
