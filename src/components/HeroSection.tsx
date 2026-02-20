import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-landscape.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Landscape view of mountains and clouds during sunset"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay/30" />
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-light tracking-[0.3em] text-primary-foreground mb-8">
          COCOON
        </h1>
        <p className="text-primary-foreground/85 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10 font-body">
          Cocoon is a nurturing grandma many women wish for in their lives. She shares generational wisdom about traditional remedies that fit your routine, supporting steadier health and resilience over time.
        </p>
        <Link
          to="/coming-soon"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm tracking-wider font-body hover:opacity-90 transition-opacity"
        >
          Download
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
