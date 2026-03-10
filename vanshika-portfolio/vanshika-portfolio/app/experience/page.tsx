const experiences = [
  {
    title: "Freelance Performance Marketer",
    company: "Stars & Vogue",
    location: "United States",
    period: "2023 – 2024",
    type: "E-commerce · Paid Media",
    description:
      "Managed end-to-end Google Ads and Meta Ads campaigns for a US-based fast-fashion e-commerce brand. Conducted rigorous A/B testing and funnel optimisation to drive measurable performance gains.",
    results: [
      { metric: "+40%", label: "ROI Improvement" },
      { metric: "2×", label: "Engagement Growth" },
      { metric: "+20%", label: "CTR Uplift" },
    ],
    bullets: [
      "Led Google Ads and Meta Ads campaign strategy and execution",
      "Conducted structured A/B tests on ad creatives, copy, and audiences",
      "Optimised targeting parameters and acquisition funnels",
      "Delivered weekly performance reporting with actionable insights",
    ],
  },
  {
    title: "Founder",
    company: "Fit Nirvana",
    location: "India / International",
    period: "2022 – 2023",
    type: "D2C · E-commerce · Entrepreneurship",
    description:
      "Founded and scaled a Shopify-based D2C lifestyle brand from ideation to live operations. Managed all aspects of the business including product development, supplier negotiations, and multi-market digital marketing.",
    results: [
      { metric: "3", label: "Markets Launched" },
      { metric: "Shopify", label: "Platform Built" },
      { metric: "360°", label: "Marketing Ownership" },
    ],
    bullets: [
      "Led product research, sourcing, and supplier negotiations",
      "Designed and executed brand positioning and digital marketing strategy",
      "Built and managed full e-commerce operations on Shopify",
      "Tested international market viability across India, US, and a third market",
    ],
  },
  {
    title: "Digital Marketing Executive",
    company: "Twin Consulting",
    location: "India",
    period: "2022",
    type: "Agency · Performance Marketing",
    description:
      "Drove paid social performance and marketing analytics for SMB consumer brands. Owned Meta Ads strategy end-to-end and presented performance insights to senior leadership.",
    results: [
      { metric: ">10×", label: "Meta Ads ROAS" },
      { metric: "+60%", label: "Attribution Efficiency" },
    ],
    bullets: [
      "Designed and managed Meta Ads campaigns for multiple consumer brands",
      "Achieved consistent ROAS above 10× across campaigns",
      "Rebuilt campaign attribution models, improving efficiency by 60%",
      "Developed go-to-market strategies and presented to leadership teams",
    ],
  },
  {
    title: "Learning Consultant",
    company: "Great Learning",
    location: "India",
    period: "2021 – 2022",
    type: "EdTech · Sales · CRM",
    description:
      "Drove B2C sales in a consultative environment within one of India's leading EdTech platforms. Managed a large pipeline in Salesforce and consistently exceeded monthly revenue targets.",
    results: [
      { metric: "300+", label: "Prospects Managed" },
      { metric: "25%", label: "Close Rate" },
      { metric: "$12K", label: "Monthly Revenue" },
      { metric: "+40%", label: "Salesforce Efficiency" },
    ],
    bullets: [
      "Managed 300+ prospects through the full B2C sales funnel",
      "Maintained a 25% close rate, consistently above team average",
      "Generated $10K–$12K in monthly revenue",
      "Redesigned Salesforce workflows, improving CRM efficiency by 40%",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-b border-warm-grey">
        <span className="section-label">
          <span className="gold-line" />
          Experience
        </span>
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight">
            Measurable impact across every role.
          </h1>
          <p className="text-charcoal/60 font-light leading-relaxed self-end">
            My career is defined by results: ROI improvements, ROAS records,
            and efficiency gains. Below is a structured account of the roles
            that have shaped my marketing expertise.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-warm-grey" />

          <div className="space-y-20">
            {experiences.map((exp, i) => (
              <div key={i} className="md:pl-16 relative">
                {/* Dot */}
                <div className="hidden md:block absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full border-2 border-gold bg-ivory" />

                {/* Period badge */}
                <div className="hidden md:block absolute left-[-80px] top-0 text-right">
                  <p className="text-xs tracking-widest uppercase text-mid-grey whitespace-nowrap">
                    {exp.period}
                  </p>
                </div>

                <div className="border border-warm-grey hover:border-gold/30 transition-colors duration-300 p-8 md:p-10">
                  {/* Mobile period */}
                  <p className="md:hidden text-xs tracking-widest uppercase text-gold mb-3">
                    {exp.period}
                  </p>

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-gold mb-2">
                        {exp.type}
                      </p>
                      <h2 className="font-display text-2xl md:text-3xl font-light">
                        {exp.title}
                      </h2>
                      <p className="text-mid-grey mt-1">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-charcoal/60 font-light leading-relaxed mb-8">
                    {exp.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 bg-warm-grey/30 p-6">
                    {exp.results.map((r) => (
                      <div key={r.label}>
                        <p className="font-display text-2xl md:text-3xl font-light text-charcoal">
                          {r.metric}
                        </p>
                        <p className="text-xs tracking-wide uppercase text-mid-grey mt-1">
                          {r.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="text-sm text-charcoal/60 font-light flex items-start gap-3"
                      >
                        <span className="text-gold mt-1 flex-shrink-0">—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
