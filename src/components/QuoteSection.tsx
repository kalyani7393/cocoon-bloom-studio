import { Link } from "react-router-dom";

const QuoteSection = () => {
  return (
    <section className="py-24 md:py-36 px-6 bg-primary">
      <div className="max-w-3xl mx-auto text-center space-y-10">
        <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-light leading-relaxed text-primary-foreground italic">
          "Warm and supportive care is central to our well being. Mygrammie brings it back home to you."
        </blockquote>
        <Link
          to="/coming-soon"
          className="inline-block px-8 py-3 bg-primary-foreground text-primary text-sm tracking-wider font-body hover:opacity-90 transition-opacity rounded"
        >
          Download
        </Link>

      </div>
    </section>
  );
};

export default QuoteSection;
