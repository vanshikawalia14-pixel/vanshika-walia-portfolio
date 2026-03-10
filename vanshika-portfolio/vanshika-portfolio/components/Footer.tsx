import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-warm-grey bg-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg font-light">Vanshika Walia</p>
          <p className="text-xs text-mid-grey tracking-wide mt-1">
            Master in Marketing · HEC Paris
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="mailto:vanshika.walia@hec.edu"
            className="text-xs tracking-widest uppercase text-mid-grey hover:text-gold transition-colors duration-200"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/vanshika-walia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-mid-grey hover:text-gold transition-colors duration-200"
          >
            LinkedIn
          </a>
          <Link
            href="/contact"
            className="text-xs tracking-widest uppercase text-mid-grey hover:text-gold transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        <p className="text-xs text-mid-grey/60">
          © {new Date().getFullYear()} Vanshika Walia
        </p>
      </div>
    </footer>
  );
}
