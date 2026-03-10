const skillGroups = [
  {
    category: "Performance Marketing",
    skills: [
      { name: "Google Ads", level: 92 },
      { name: "Meta Ads", level: 95 },
      { name: "SEO", level: 78 },
      { name: "A/B Testing", level: 88 },
      { name: "Campaign Optimisation", level: 90 },
    ],
  },
  {
    category: "Analytics & Data",
    skills: [
      { name: "Google Analytics (GA4)", level: 88 },
      { name: "Power BI", level: 75 },
      { name: "Excel / Data Modelling", level: 85 },
      { name: "Attribution Modelling", level: 80 },
    ],
  },
  {
    category: "CRM & Automation",
    skills: [
      { name: "Salesforce", level: 82 },
      { name: "HubSpot", level: 78 },
      { name: "Mailchimp", level: 80 },
      { name: "Marketo", level: 72 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Shopify", level: 90 },
      { name: "Figma", level: 72 },
      { name: "Canva", level: 88 },
      { name: "Notion", level: 85 },
    ],
  },
];

const competencies = [
  "Performance Marketing Strategy",
  "Full-Funnel Campaign Management",
  "Brand Strategy & Positioning",
  "E-commerce & D2C Growth",
  "Consumer Insights & Segmentation",
  "Go-to-Market Planning",
  "Paid Social & Paid Search",
  "Marketing Analytics & Reporting",
  "CRM & Marketing Automation",
  "Agile Project Management",
  "International Market Strategy",
  "Creative & Copy Direction",
];

export default function SkillsPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-b border-warm-grey">
        <span className="section-label">
          <span className="gold-line" />
          Skills
        </span>
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight">
            The tools. <br />
            <em className="text-gold not-italic">The expertise.</em>
          </h1>
          <p className="text-charcoal/60 font-light leading-relaxed self-end">
            A curated overview of the technical and strategic skills I bring to
            every marketing role — from paid media execution to brand strategy
            and data analytics.
          </p>
        </div>
      </section>

      {/* Skill Bars */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <div className="grid md:grid-cols-2 gap-16">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="text-xs tracking-widest uppercase text-gold mb-8">
                {group.category}
              </p>
              <div className="space-y-6">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-light">{skill.name}</span>
                      <span className="text-xs text-mid-grey">{skill.level}%</span>
                    </div>
                    <div className="h-px bg-warm-grey relative overflow-hidden">
                      <div
                        className="h-px bg-gold absolute left-0 top-0"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Competencies */}
      <section className="bg-charcoal py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <span
            className="section-label text-gold/80"
            style={{ "--gold": "#B8A170" } as React.CSSProperties}
          >
            <span className="inline-block w-10 h-px bg-gold/40 align-middle mr-3" />
            Core Competencies
          </span>
          <h2 className="font-display text-4xl font-light text-ivory mt-4 mb-12">
            What I deliver
          </h2>
          <div className="flex flex-wrap gap-3">
            {competencies.map((c) => (
              <span
                key={c}
                className="border border-ivory/10 text-ivory/70 text-xs tracking-wide px-4 py-2 hover:border-gold hover:text-gold transition-all duration-200"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-t border-warm-grey">
        <span className="section-label">
          <span className="gold-line" />
          Languages
        </span>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mt-10">
          {[
            { lang: "English", level: "Fluent" },
            { lang: "French", level: "Intermediate" },
            { lang: "Hindi", level: "Native" },
          ].map(({ lang, level }) => (
            <div key={lang} className="border border-warm-grey p-6 text-center">
              <p className="font-display text-xl font-light">{lang}</p>
              <p className="text-xs tracking-widest uppercase text-mid-grey mt-1">
                {level}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
