import { useState } from "react";
const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxMLF4QV7UqT4123rUn0oYlggcVkDSpIxDAnrBQkyx8ZhkvCRjmPPkGplt7MahAc9J3pw/exec";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const cleanedEmail = email.trim();
  if (!cleanedEmail) return;

  setLoading(true);
  try {
    const params = new URLSearchParams();
    params.set("email", cleanedEmail);
   const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      body: params,
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.ok === false) {
      throw new Error(data?.error || `Request failed: ${res.status}`);
    }

    setSubmitted(true);
    setEmail("");
  } catch (err) {
    console.error(err);
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};
  return (
    <main className="min-h-screen">
      <section className="min-h-[50vh] bg-primary flex items-end pb-16 px-6 md:px-16">
        <div className="max-w-xl space-y-6">
          <span className="inline-block px-3 py-1 border border-accent text-accent text-xs tracking-widest font-body uppercase">
            Coming Soon
          </span>
          <p className="text-primary-foreground/85 text-base sm:text-lg leading-relaxed font-body">
            We're working on making Cocoon available in your region. Please sign up with your email below to know when she's here.
          </p>
          {submitted ? (
            <p className="text-accent text-sm font-body">Thank you! We'll be in touch.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
             <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email address"
  required
  disabled={loading}
  className="px-4 py-2.5 bg-primary-foreground text-primary text-sm font-body placeholder:text-muted-foreground flex-1 max-w-sm outline-none disabled:opacity-60 disabled:cursor-not-allowed"
/>
             <button
  type="submit"
  disabled={loading}
  className="px-6 py-2.5 border border-accent text-accent text-sm tracking-wider font-body hover:bg-accent hover:text-accent-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
>
  {loading ? "Submitting..." : "Submit"}
</button>
            </form>
          )}
        </div>
      </section>
      <section className="min-h-[50vh] bg-background" />
    </main>
  );
};

export default ComingSoon;
