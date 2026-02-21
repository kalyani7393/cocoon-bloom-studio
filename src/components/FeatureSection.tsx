import { cn } from "@/lib/utils";

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  className?: string;
}

const FeatureSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  imagePosition = "left",
  className,
}: FeatureSectionProps) => {
  return (
    <section className={cn("py-5 md:py-8 px-6", className)}>
      <div
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 items-center ${
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
