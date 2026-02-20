interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

const FeatureSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "left",
}: FeatureSectionProps) => {
  return (
    <section className="py-20 md:py-32 px-6">
      <div
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center ${
          imagePosition === "right" ? "md:[direction:rtl]" : ""
        }`}
      >
        <div className={imagePosition === "right" ? "md:[direction:ltr]" : ""}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-[400px] md:h-[550px] object-cover rounded-xl"
            loading="lazy"
          />
        </div>
        <div className={`space-y-6 ${imagePosition === "right" ? "md:[direction:ltr]" : ""}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-[0.15em] text-foreground">
            {title}
          </h2>
          <div className="w-16 h-[2px] bg-accent" />
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
