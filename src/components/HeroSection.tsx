import { Link } from "react-router-dom";
import heroCloudsFallback from "@/assets/hero-clouds.png";
import heroVideo from "@/assets/hero-clouds.mp4";
import grandmaAvatar from "@/assets/grandma-avatar.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-background pt-6">
      <div className="relative mx-auto w-full px-4 lg:px-6 xl:px-10">
        {/* Rounded hero container */}
        <div className="relative h-[clamp(520px,70vh,760px)] lg:h-[clamp(620px,85vh,820px)] min-h-[640px] rounded-[28px] overflow-hidden">
          {/* Video background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={heroCloudsFallback}
            className="absolute inset-0 w-full h-full object-cover object-[50%_20%]"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full w-full">
            <div className="h-full w-full max-w-6xl mx-auto px-6 py-10 flex flex-col justify-between items-center text-center lg:-translate-y-24 lg:pt-16">
              {/* Top group */}
              <div className="flex flex-col items-center md:mt-12 md:scale-[1.2] md:origin-top lg:translate-y-[58px]">
                <img
                  src={grandmaAvatar}
                  alt="Grandma avatar illustration"
                  className="w-16 h-16 object-contain drop-shadow-xl -mb-1"
                />

                <h1 className="font-display font-bold tracking-normal text-warm-brown mb-2 text-[clamp(48px,5vw,72px)] leading-[0.95]">
                  mygrammie
                </h1>

                <p className="text-foreground font-display font-light tracking-wide italic text-[clamp(14px,1.4vw,18px)]">
                  The remedies that worked for generations, now personalised for you.
                </p>
              </div>

              {/* Bottom group */}
              <div className="w-full pb-12 md:-translate-y-6 lg:translate-y-[48px]">
                <p className="text-pure-white text-sm md:text-[18px] leading-relaxed md:leading-snug max-w-md md:max-w-[480px] lg:max-w-[580px] mx-auto font-body text-center">
                  Mygrammie guides you through your symptoms with traditional remedies backed by research and the lived experience of women who've been exactly where you are.
                </p>

                <div className="mt-10 flex justify-center">
                  <Link
                    to="/coming-soon"
                    className="inline-block px-7 py-3 text-xs md:px-8 md:py-3 md:text-xs lg:px-10 lg:py-4 lg:text-sm bg-primary text-pure-white tracking-[0.15em] font-body uppercase hover:opacity-90 transition-opacity rounded"
                  >
                    Download
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end rounded hero */}
      </div>
    </section>
  );
};

export default HeroSection;