import { Link } from "react-router-dom";
import heroCloudsFallback from "@/assets/hero-clouds.png";
import heroVideo from "@/assets/hero-clouds.mp4";
import grandmaAvatar from "@/assets/grandma-avatar.png";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[75vh] flex flex-col items-center overflow-hidden">
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
      <div className="absolute inset-0 bg-hero-overlay/25" />

      {/* Top content: avatar, title, subheading - centered */}
      <div className="relative z-10 w-full flex flex-col items-center text-center mt-8 sm:mt-12">
        <img
          src={grandmaAvatar}
          alt="Grandma avatar illustration"
          className="w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-xl mb-3"
        />
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold tracking-[0.2em] mb-1" style={{ color: '#857a6a' }}>
          mygrammie
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-display font-bold tracking-wide italic" style={{ color: '#857a6a' }}>
          Prevent symptoms, don't just fix them
        </p>
      </div>

      {/* Bottom content: paragraph + CTA - centered in cloud area */}
      <div className="relative z-10 w-full flex flex-col items-center text-center mt-auto mb-16 px-6">
        <p className="text-pure-white text-sm sm:text-base leading-relaxed max-w-md font-body font-bold">
          Mygrammie is a guide for women to add traditional healing remedies safely to their daily routines. She brings generational wisdom that our ancestors had, but was lost over time.
        </p>
        <div className="mt-8">
          <Link
            to="/coming-soon"
            className="inline-block px-10 py-4 bg-primary text-pure-white text-sm tracking-[0.15em] font-body font-bold uppercase hover:opacity-90 transition-opacity rounded"
          >
            Download
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
