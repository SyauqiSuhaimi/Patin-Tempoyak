import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { useLanguage } from "../context/LanguageContext";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { language, setLanguage, t } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navalinks = [
    { name: t.nav.links.story, href: "#story" },
    { name: t.nav.links.menu, href: "#menu" },
    { name: t.nav.links.gallery, href: "#gallery" },
    { name: t.nav.links.reviews, href: "#reviews" },
    { name: t.nav.links.contact, href: "#contact" },
  ];

  const LanguageButtons = () => (
    <div className="flex items-center gap-2 text-white text-xs tracking-wide uppercase">
      <div className="flex rounded-md overflow-hidden border border-white/30">
        <button
          className={`px-2 py-1 transition-colors ${language === "en" ? "bg-accent text-primary" : "bg-transparent text-white hover:bg-white/10"}`}
          onClick={() => setLanguage("en")}
          type="button"
          aria-label="Switch to English"
        >
          <span className="fi fi-us mr-1 inline-block" aria-hidden="true" />
          EN
        </button>
        <button
          className={`px-2 py-1 transition-colors ${language === "ms" ? "bg-accent text-primary" : "bg-transparent text-white hover:bg-white/10"}`}
          onClick={() => setLanguage("ms")}
          type="button"
          aria-label="Tukar ke Bahasa Melayu"
        >
          <span className="fi fi-my mr-1 inline-block" aria-hidden="true" />
          BM
        </button>
      </div>
    </div>
  );

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-white font-serif text-2xl font-bold tracking-wider"
        >
          PATIN<span className="text-accent">TEMPOYAK</span> KAK ZEE
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navalinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-accent transition-colors font-medium text-sm tracking-wide"
            >
              {link.name.toUpperCase()}
            </a>
          ))}
          <LanguageButtons />
          <Button
            variant="primary"
            onClick={() =>
              window.open("https://maps.app.goo.gl/JqjBsm1FAiMQbZqGA", "_blank")
            }
          >
            {t.nav.visitUs}
          </Button>
        </div>

        <button
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-t border-white/10 p-6 flex flex-col gap-4 shadow-xl">
          {navalinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-accent transition-colors text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <LanguageButtons />
          <Button
            className="w-full"
            onClick={() =>
              window.open("https://maps.app.goo.gl/JqjBsm1FAiMQbZqGA", "_blank")
            }
          >
            {t.nav.visitUs}
          </Button>
        </div>
      )}
    </nav>
  );
};
