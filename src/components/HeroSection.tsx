import { Link } from "react-router-dom";
import heroCloudsFallback from "@/assets/hero-clouds.png";
import heroVideo from "@/assets/hero-clouds.mp4";
import grandmaAvatar from "@/assets/grandma-avatar.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroCloudsFallback}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay/25" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
        {/* Title row: text left + avatar right */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full">
          {/* Left: title + subheading + description */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-light tracking-[0.2em] text-primary-foreground mb-3">
              mygrammie
            </h1>
            <p className="text-primary-foreground/90 text-lg sm:text-xl md:text-2xl font-display font-light tracking-wide mb-6 italic">
              Prevent symptoms, don't just fix them
            </p>
            <p className="text-primary-foreground/80 text-sm sm:text-base leading-relaxed max-w-md font-body">
              Cocoon is a nurturing grandma many women wish for in their lives. She shares generational wisdom about traditional remedies that fit your routine, supporting steadier health and resilience over time.
            </p>
          </div>

          {/* Right: grandma avatar */}
          <div className="flex-shrink-0">
            <img
              src={grandmaAvatar}
              alt="Grandma avatar illustration"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* CTA button box */}
        <div className="mt-12 w-full flex justify-center md:justify-start">
          <Link
            to="/coming-soon"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground text-sm tracking-[0.15em] font-body uppercase hover:opacity-90 transition-opacity rounded"
          >
            Download
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
