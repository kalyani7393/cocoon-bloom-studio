import { Link } from "react-router-dom";
import heroCloudsFallback from "@/assets/hero-clouds.png";
import heroVideo from "@/assets/hero-clouds.mp4";
import grandmaAvatar from "@/assets/grandma-avatar.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[85vh] flex flex-col items-center justify-start overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroCloudsFallback}
        className="absolute inset-0 w-full h-full object-cover object-top"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay/10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-16 sm:pt-20 flex flex-col items-start">
        {/* Grandma avatar above title */}
        <img
          src={grandmaAvatar}
          alt="Grandma avatar illustration"
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-xl -mb-1"
        />

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-normal text-warm-brown mb-1">
          mygrammie
        </h1>

        {/* Subheading */}
        <p className="text-warm-brown text-sm sm:text-base md:text-lg font-display font-light tracking-wide italic mb-10">
          Prevent symptoms, don't just fix them
        </p>

        {/* Description */}
        <p className="text-pure-white text-sm sm:text-base leading-relaxed max-w-md font-body">
          Mygrammie guides women on adding traditional healing remedies safely to their daily routines. She brings generational wisdom that our ancestors had, but was lost over time.
        </p>

        {/* CTA button */}
        <div className="mt-10">
          <Link
            to="/coming-soon"
            className="inline-block px-10 py-4 bg-primary text-pure-white text-sm tracking-[0.15em] font-body uppercase hover:opacity-90 transition-opacity rounded"
          >
            Download
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
