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
  <div className="w-full max-w-[420px] mx-auto md:max-w-none rounded-xl overflow-hidden">
    <div className="relative w-full aspect-[3.5/4]">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-[50%_60%]"
        loading="lazy"
      />
    </div>
  </div>
</div>
        <div
  className={cn(
    "space-y-6 w-full max-w-[420px] mx-auto md:max-w-none md:mx-0",
    imagePosition === "right" ? "md:[direction:ltr]" : ""
  )}
>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-light tracking-wide text-foreground">
            {title}
          </h2>
          <div className="w-16 h-[2px] bg-accent" />
         <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
