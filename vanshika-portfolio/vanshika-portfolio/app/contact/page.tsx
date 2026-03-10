"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // In production, connect to Resend, Formspree, or similar
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 border-b border-warm-grey">
        <span className="section-label">
          <span className="gold-line" />
          Contact
        </span>
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <h1 className="font-display text-5xl md:text-6xl font-light leading-tight">
            Let's build something great together.
          </h1>
          <p className="text-charcoal/60 font-light leading-relaxed self-end">
            Open to brand marketing, performance marketing, digital strategy,
            and e-commerce roles across Europe. Available for full-time
            positions from summer 2025.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-20">
        {/* Contact info */}
        <div className="space-y-10">
          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-4">
              Direct Contact
            </p>
            <a
              href="mailto:vanshika.walia@hec.edu"
              className="font-display text-2xl font-light hover:text-gold transition-colors duration-200"
            >
              vanshika.walia@hec.edu
            </a>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-4">
              LinkedIn
            </p>
            <a
              href="https://linkedin.com/in/vanshika-walia"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xl font-light hover:text-gold transition-colors duration-200 hover-underline"
            >
              linkedin.com/in/vanshika-walia
            </a>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-4">
              Location
            </p>
            <p className="font-display text-xl font-light">
              Paris, France
            </p>
            <p className="text-sm text-mid-grey mt-1">
              Available for roles across Europe
            </p>
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase text-gold mb-4">
              Currently Open To
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Brand Marketing",
                "Performance Marketing",
                "Digital Strategy",
                "E-commerce",
                "Growth Marketing",
              ].map((role) => (
                <span
                  key={role}
                  className="text-xs border border-charcoal/15 text-charcoal/60 px-3 py-1.5"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          {submitted ? (
            <div className="border border-gold/30 bg-gold/5 p-10 text-center">
              <p className="font-display text-2xl font-light mb-3">
                Thank you for reaching out.
              </p>
              <p className="text-sm text-charcoal/60 font-light">
                I'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <p className="text-xs tracking-widest uppercase text-mid-grey mb-6">
                Send a Message
              </p>

              {[
                { label: "Your Name", name: "name", type: "text" },
                { label: "Email Address", name: "email", type: "email" },
                { label: "Company / Organisation", name: "company", type: "text" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs tracking-widest uppercase text-mid-grey mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={(formState as Record<string, string>)[field.name]}
                    onChange={handleChange}
                    className="w-full border border-warm-grey bg-transparent px-4 py-3 text-sm font-light focus:outline-none focus:border-gold transition-colors duration-200"
                    placeholder=""
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs tracking-widest uppercase text-mid-grey mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border border-warm-grey bg-transparent px-4 py-3 text-sm font-light focus:outline-none focus:border-gold transition-colors duration-200 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-charcoal text-ivory text-xs tracking-widest uppercase py-4 hover:bg-gold transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
