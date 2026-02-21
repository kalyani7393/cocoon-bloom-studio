import { Link } from "react-router-dom";
import heroCloudsFallback from "@/assets/hero-clouds.png";
import heroVideo from "@/assets/hero-clouds.mp4";
import grandmaAvatar from "@/assets/grandma-avatar.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[85vh] md:h-[calc(85vh-48px)] lg:h-[calc(85vh-96px)] flex flex-col items-center justify-start overflow-hidden">
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
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-16 md:pt-4 lg:pt-4 flex flex-col items-start">
        {/* Top group: avatar + title + subheading */}
        <div>
          <img
            src={grandmaAvatar}
            alt="Grandma avatar illustration"
            className="w-20 h-20 md:w-16 md:h-16 lg:w-16 lg:h-16 object-contain drop-shadow-xl -mb-1"
          />
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-display font-bold tracking-normal text-warm-brown mb-1">
            mygrammie
          </h1>
          <p className="text-foreground text-base md:text-sm lg:text-sm font-display font-light tracking-wide italic">
            Prevent symptoms, don't just fix them
          </p>
        </div>

        {/* Bottom group: paragraph + CTA */}
        <div className="mt-[288px] md:mt-36 lg:mt-28">
          <p className="text-pure-white text-sm sm:text-base leading-relaxed max-w-md font-body">
            Mygrammie guides women on adding traditional healing remedies safely to their daily routines. She brings generational wisdom that our ancestors had, but was lost over time.
          </p>
          <div className="mt-10">
            <Link
              to="/coming-soon"
              className="inline-block px-7 py-3 text-xs md:px-8 md:py-3 md:text-xs lg:px-10 lg:py-4 lg:text-sm bg-primary text-pure-white tracking-[0.15em] font-body uppercase hover:opacity-90 transition-opacity rounded"
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
