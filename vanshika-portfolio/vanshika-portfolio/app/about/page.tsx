import Link from "next/link";

const education = [
  {
    school: "HEC Paris",
    degree: "Master in Marketing",
    period: "2024 – 2025",
    detail: "GPA 3.89 / 4.0 · Ranked #1 globally",
    courses: [
      "Digital Strategy",
      "Performance Marketing",
      "Data Analytics",
      "Agile Product Management",
      "Product Marketing",
    ],
  },
  {
    school: "Maharaja Agrasen Institute of Management Studies",
    degree: "Bachelor of Business Administration",
    period: "2019 – 2023",
    detail: "CGPA 8.79 / 10 · New Delhi, India",
    courses: [],
  },
];

const values = [
  {
    icon: "◈",
    title: "Data-First Thinking",
    desc: "Every marketing decision I make is grounded in data. I use GA4, Power BI, and Salesforce to translate numbers into strategy.",
  },
  {
    icon: "◈",
    title: "Full-Funnel Vision",
    desc: "From awareness to conversion, I understand the entire customer journey — not just isolated campaigns.",
  },
  {
    icon: "◈",
    title: "Entrepreneurial Drive",
    desc: "Having founded Fit Nirvana and built campaigns independently, I bring ownership and accountability to every project.",
  },
  {
    icon: "◈",
    title: "International Perspective",
    desc: "I've operated across India, the US, and France — bringing cultural fluency to global brand and marketing strategy.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-b border-warm-grey">
        <span className="section-label">
          <span className="gold-line" />
          About
        </span>
        <div className="grid md:grid-cols-2 gap-16 mt-8">
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight">
            Strategist. Analyst. <em className="text-gold not-italic">Builder.</em>
          </h1>
          <div className="space-y-4 text-charcoal/60 font-light leading-relaxed self-end">
            <p>
              I'm Vanshika Walia — a data-driven marketing professional based in
              Paris, France. Currently completing my Master in Marketing at HEC
              Paris, I specialise in performance marketing, brand strategy, and
              e-commerce growth.
            </p>
            <p>
              My career spans three continents: I've worked with US fast-fashion
              e-commerce brands, founded a D2C lifestyle brand in India, and now
              work on strategic marketing projects for luxury and FMCG clients
              at one of the world's top business schools.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
        <span className="section-label">
          <span className="gold-line" />
          What Drives Me
        </span>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 mt-12">
          {values.map((v) => (
            <div key={v.title} className="border-l-2 border-gold/30 pl-6">
              <span className="text-gold text-lg">{v.icon}</span>
              <h3 className="font-display text-xl font-light mt-2 mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-charcoal/60 font-light leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="bg-charcoal py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <span className="section-label text-gold/80">
            <span
              className="inline-block w-10 h-px bg-gold/40 align-middle mr-3"
            />
            Education
          </span>
          <h2 className="font-display text-4xl font-light text-ivory mt-4 mb-12">
            Academic Foundation
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((e) => (
              <div
                key={e.school}
                className="border border-ivory/10 p-8 hover:border-gold/40 transition-colors duration-300"
              >
                <p className="text-xs tracking-widest uppercase text-gold mb-4">
                  {e.period}
                </p>
                <h3 className="font-display text-2xl font-light text-ivory">
                  {e.school}
                </h3>
                <p className="text-ivory/60 mt-2 font-light">{e.degree}</p>
                <p className="text-gold/70 text-sm mt-1">{e.detail}</p>
                {e.courses.length > 0 && (
                  <div className="mt-6">
                    <p className="text-xs tracking-widest uppercase text-ivory/30 mb-3">
                      Key Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {e.courses.map((c) => (
                        <span
                          key={c}
                          className="text-xs border border-ivory/10 text-ivory/60 px-3 py-1"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-t border-warm-grey">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div>
            <span className="section-label">
              <span className="gold-line" />
              Certification
            </span>
            <h3 className="font-display text-2xl font-light mt-3">
              Digital Marketing Mastery
            </h3>
            <p className="text-mid-grey text-sm mt-1">
              IIT Delhi · Google Ads + SEO
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-charcoal text-ivory text-xs tracking-widest uppercase px-8 py-4 hover:bg-gold transition-colors duration-300 whitespace-nowrap"
          >
            Let's Connect
          </Link>
        </div>
      </section>
    </div>
  );
}
