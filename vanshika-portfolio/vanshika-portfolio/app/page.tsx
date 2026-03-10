import Link from "next/link";

const stats = [
  { value: "40%", label: "ROI Improvement" },
  { value: "10×", label: "Meta Ads ROAS" },
  { value: "3", label: "International Markets" },
  { value: "#1", label: "Global MBA Ranking" },
];

const featured = [
  {
    tag: "Brand Strategy",
    title: "Dior Parfums",
    sub: "Gen Z Go-to-Market",
    desc: "Designed a 360° product launch strategy for a fragrance franchise targeting Gen Z consumers at HEC Paris.",
    href: "/projects#dior",
  },
  {
    tag: "Performance Marketing",
    title: "Stars & Vogue",
    sub: "Paid Media Optimisation",
    desc: "Managed Google and Meta Ads campaigns achieving 40% ROI improvement and 2× engagement growth.",
    href: "/projects#stars-vogue",
  },
  {
    tag: "D2C / E-commerce",
    title: "Fit Nirvana",
    sub: "Brand Founder",
    desc: "Founded and scaled a Shopify-based lifestyle brand across 3 international markets from product to acquisition.",
    href: "/projects#fit-nirvana",
  },
];

const logos = [
  "L'Oréal", "LVMH", "Dior", "Danone", "Nestlé", "Pernod Ricard",
];

export default function HomePage() {
  return (
    <div className="grain">
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 md:px-10 max-w-6xl mx-auto">
        {/* Decorative top */}
        <div className="mb-16">
          <span className="section-label">
            <span className="gold-line" />
            Marketing Portfolio
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight max-w-4xl animate-fade-up opacity-0 delay-100">
          Data-driven marketing at the intersection of{" "}
          <em className="text-gold not-italic">brand</em>,{" "}
          performance, and digital growth.
        </h1>

        {/* Sub */}
        <p className="mt-8 text-base md:text-lg text-charcoal/60 font-light max-w-xl leading-relaxed animate-fade-up opacity-0 delay-300">
          Master in Marketing at HEC Paris · Performance marketing, brand
          strategy &amp; e-commerce across India, the US, and France.
        </p>

        {/* CTA row */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-up opacity-0 delay-400">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-charcoal text-ivory text-xs tracking-widest uppercase px-8 py-4 hover:bg-gold transition-colors duration-300"
          >
            View Projects
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a
            href="mailto:vanshika.walia@hec.edu"
            className="inline-flex items-center gap-3 border border-charcoal/20 text-xs tracking-widest uppercase px-8 py-4 hover:border-gold hover:text-gold transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex items-center gap-3 animate-fade-up opacity-0 delay-600">
          <div className="w-px h-12 bg-gold/40" />
          <span className="text-xs tracking-widest uppercase text-mid-grey">Scroll</span>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────── */}
      <section className="border-t border-b border-warm-grey bg-charcoal">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-ivory/10">
          {stats.map(({ value, label }) => (
            <div key={label} className="md:px-10 first:pl-0 last:pr-0">
              <p className="font-display text-4xl md:text-5xl font-light text-ivory">
                {value}
              </p>
              <p className="mt-2 text-xs tracking-widest uppercase text-ivory/40 font-light">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-24">
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="section-label">
              <span className="gold-line" />
              Selected Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-3">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden md:inline-flex text-xs tracking-widest uppercase hover-underline text-mid-grey hover:text-gold transition-colors duration-200"
          >
            All Projects →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group block border border-warm-grey p-8 card-lift"
            >
              <p className="text-xs tracking-widest uppercase text-gold mb-6">
                {p.tag}
              </p>
              <h3 className="font-display text-2xl font-light">{p.title}</h3>
              <p className="text-sm text-mid-grey mt-1 mb-4">{p.sub}</p>
              <p className="text-sm text-charcoal/60 leading-relaxed font-light">
                {p.desc}
              </p>
              <div className="mt-8 flex items-center gap-2 text-xs tracking-widest uppercase text-charcoal/40 group-hover:text-gold transition-colors duration-200">
                Read Case Study
                <svg width="12" height="12" fill="none" viewBox="0 0 14 14">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CREDIBILITY LOGOS ────────────────────────── */}
      <section className="border-t border-warm-grey bg-warm-grey/30">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14">
          <p className="text-xs tracking-widest uppercase text-mid-grey mb-8 text-center">
            Projects &amp; Experience with
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {logos.map((l) => (
              <span
                key={l}
                className="font-display text-lg font-light text-charcoal/30 hover:text-gold transition-colors duration-300"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ─────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="section-label">
            <span className="gold-line" />
            About
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light mt-4 leading-tight">
            A marketeer who thinks in funnels, not just campaigns.
          </h2>
        </div>
        <div className="space-y-5 text-charcoal/60 font-light leading-relaxed">
          <p>
            I'm Vanshika — a performance and brand marketer currently completing
            my Master in Marketing at HEC Paris (GPA 3.89/4.0). My work spans
            paid media, brand strategy, D2C e-commerce, and growth marketing
            across three continents.
          </p>
          <p>
            I have a track record of driving measurable impact: 40% ROI
            improvements, ROAS above 10×, and 60% gains in campaign attribution
            efficiency. I combine analytical rigour with creative strategy to
            build marketing systems that grow brands.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold hover-underline mt-4"
          >
            More About Me →
          </Link>
        </div>
      </section>
    </div>
  );
}
