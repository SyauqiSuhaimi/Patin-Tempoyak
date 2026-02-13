import { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navalinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-white font-serif text-2xl font-bold tracking-wider">
          PATIN<span className="text-accent">TEMPOYAK</span> KAK ZEE
        </a>

        {/* Desktop Menu */}
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
          <Button variant="primary" onClick={() => window.open('https://maps.app.goo.gl/JqjBsm1FAiMQbZqGA', '_blank')}>
            Visit Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-accent transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
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
          <Button className="w-full" onClick={() => window.open('https://maps.app.goo.gl/JqjBsm1FAiMQbZqGA', '_blank')}>
            Visit Us
          </Button>
        </div>
      )}
    </nav>
  );
};
