const projects = [
  {
    id: "dior",
    tag: "Brand Strategy · Luxury",
    client: "Dior Parfums",
    title: "Gen Z Fragrance Go-to-Market Strategy",
    context: "HEC Paris Business Project commissioned in collaboration with Dior Parfums, one of LVMH's flagship luxury brands.",
    challenge:
      "Dior Parfums needed a comprehensive strategy to revitalise an existing fragrance franchise for the Gen Z consumer segment — a demographic that demands authenticity, digital-first storytelling, and values alignment.",
    approach: [
      "Conducted deep consumer research into Gen Z fragrance purchasing behaviour and digital touchpoints",
      "Analysed competitive positioning across luxury fragrance competitors",
      "Designed a 360° go-to-market plan spanning digital channels, influencer strategy, experiential marketing, and retail activation",
      "Developed a brand narrative framework tailored to Gen Z values (sustainability, identity, self-expression)",
      "Built channel-specific activation plans for TikTok, Instagram, and DTC e-commerce",
    ],
    results: [
      { metric: "360°", label: "Go-to-Market Plan" },
      { metric: "5+", label: "Channels Mapped" },
      { metric: "Gen Z", label: "Target Audience" },
    ],
    tags: ["Brand Strategy", "Luxury Marketing", "Consumer Insights", "GTM"],
  },
  {
    id: "loreal",
    tag: "E-commerce · Innovation",
    client: "L'Oréal Paris",
    title: "K-Beauty E-commerce Skincare Innovation",
    context: "L'Oréal Paris Bootcamp — a competitive marketing challenge for top students across European business schools.",
    challenge:
      "L'Oréal Paris needed an e-commerce-first innovation strategy to capture the fast-growing K-beauty-influenced skincare consumer in Europe, without cannibalising existing product lines.",
    approach: [
      "Analysed K-beauty market trends and European consumer adoption patterns",
      "Mapped digital purchase journey and e-commerce conversion behaviours for skincare",
      "Identified white space in L'Oréal's digital product portfolio",
      "Designed an innovation concept with packaging, formulation direction, and pricing strategy",
      "Built a full digital acquisition and retention strategy centred on D2C e-commerce",
    ],
    results: [
      { metric: "E-comm", label: "First Strategy" },
      { metric: "D2C", label: "Channel Focus" },
      { metric: "K-Beauty", label: "Consumer Insight" },
    ],
    tags: ["E-commerce", "FMCG", "Innovation", "Digital Strategy"],
  },
  {
    id: "fit-nirvana",
    tag: "D2C · Entrepreneurship",
    client: "Fit Nirvana",
    title: "Launching a D2C Lifestyle Brand Across 3 Markets",
    context:
      "Personal venture — founded and led a Shopify-based D2C lifestyle brand from ideation to international operations.",
    challenge:
      "Build a profitable D2C lifestyle brand with limited resources, testing product-market fit across multiple geographies simultaneously while managing all marketing and operations independently.",
    approach: [
      "Conducted product research and identified high-margin lifestyle categories with strong D2C potential",
      "Negotiated with international suppliers to secure quality products at competitive margins",
      "Built brand identity, website, and full Shopify e-commerce infrastructure",
      "Designed and executed performance marketing strategy (Meta Ads, Google Shopping) for each market",
      "Ran international market tests across India, the US, and a third geography — iterating based on conversion data",
    ],
    results: [
      { metric: "3", label: "Markets Launched" },
      { metric: "Shopify", label: "Full Stack Build" },
      { metric: "100%", label: "End-to-End Ownership" },
    ],
    tags: ["D2C", "E-commerce", "Performance Marketing", "Entrepreneurship"],
  },
  {
    id: "stars-vogue",
    tag: "Performance Marketing",
    client: "Stars & Vogue",
    title: "Paid Media Optimisation for US Fast-Fashion E-commerce",
    context:
      "Freelance engagement with a US-based fast-fashion e-commerce brand seeking to improve the efficiency and returns of their paid media investment.",
    challenge:
      "The brand's Google and Meta Ads campaigns were underperforming relative to spend — driven by untested creatives, broad audience targeting, and poor attribution visibility.",
    approach: [
      "Audited existing campaign structure across Google Ads and Meta Ads",
      "Restructured audience targeting using first-party data and lookalike modelling",
      "Designed and ran A/B testing framework for ad creatives, copy, and CTAs",
      "Rebuilt conversion tracking and attribution for full-funnel visibility",
      "Implemented ongoing performance reporting cadence with weekly optimisation cycles",
    ],
    results: [
      { metric: "+40%", label: "ROI Improvement" },
      { metric: "2×", label: "Engagement Growth" },
      { metric: "+20%", label: "CTR Uplift" },
    ],
    tags: ["Google Ads", "Meta Ads", "A/B Testing", "ROI Optimisation"],
  },
  {
    id: "cma-cgm",
    tag: "B2B · Digital Strategy",
    client: "CMA CGM",
    title: "B2B Digital Platform Monetisation & Acquisition",
    context:
      "Ongoing HEC Paris strategy project with CMA CGM, one of the world's largest logistics and shipping groups.",
    challenge:
      "CMA CGM's digital B2B platform needed a clearer acquisition funnel, improved behavioural segmentation, and a redesigned media strategy to drive platform adoption among enterprise clients.",
    approach: [
      "Mapped current B2B user acquisition and onboarding funnel",
      "Developed behavioural segmentation framework based on user journey data",
      "Redesigned acquisition media strategy with a focus on paid B2B channels (LinkedIn, programmatic)",
      "Built monetisation model scenarios for the platform",
      "Presented strategic recommendations to senior CMA CGM stakeholders",
    ],
    results: [
      { metric: "B2B", label: "Platform Focus" },
      { metric: "3+", label: "Monetisation Models" },
      { metric: "C-Suite", label: "Presentation Level" },
    ],
    tags: ["B2B Marketing", "Acquisition Strategy", "Segmentation", "Media Strategy"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-b border-warm-grey">
        <span className="section-label">
          <span className="gold-line" />
          Projects
        </span>
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight">
            Strategy in action. Results on record.
          </h1>
          <p className="text-charcoal/60 font-light leading-relaxed self-end">
            A curated selection of marketing projects — from luxury brand
            strategy at HEC Paris to paid media optimisation and D2C brand
            building.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 space-y-24">
        {projects.map((p, i) => (
          <article
            id={p.id}
            key={p.id}
            className="scroll-mt-24 border border-warm-grey hover:border-gold/20 transition-colors duration-300"
          >
            {/* Top bar */}
            <div className="border-b border-warm-grey px-8 md:px-12 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-xs tracking-widest uppercase text-gold">
                  {p.tag}
                </p>
                <h2 className="font-display text-2xl md:text-3xl font-light mt-1">
                  {p.client}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs border border-charcoal/10 text-charcoal/50 px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-8 md:px-12 py-10">
              {/* Title */}
              <h3 className="font-display text-xl md:text-2xl font-light text-gold mb-8">
                {p.title}
              </h3>

              {/* 3-col grid for context / challenge / approach */}
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                <div>
                  <p className="text-xs tracking-widest uppercase text-mid-grey mb-3">
                    Context
                  </p>
                  <p className="text-sm text-charcoal/60 font-light leading-relaxed">
                    {p.context}
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-mid-grey mb-3">
                    Challenge
                  </p>
                  <p className="text-sm text-charcoal/60 font-light leading-relaxed">
                    {p.challenge}
                  </p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-mid-grey mb-3">
                    Approach
                  </p>
                  <ul className="space-y-2">
                    {p.approach.map((a) => (
                      <li
                        key={a}
                        className="text-sm text-charcoal/60 font-light flex items-start gap-2"
                      >
                        <span className="text-gold flex-shrink-0 mt-0.5">—</span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div className="bg-charcoal grid grid-cols-3 divide-x divide-ivory/10">
                {p.results.map((r) => (
                  <div key={r.label} className="px-8 py-6">
                    <p className="font-display text-3xl font-light text-ivory">
                      {r.metric}
                    </p>
                    <p className="text-xs tracking-widest uppercase text-ivory/40 mt-1">
                      {r.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
