import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/999.jpg" 
          alt={t.hero.imageAlt}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-secondary font-accent italic text-xl md:text-2xl tracking-widest uppercase block mb-4">
            {t.hero.since}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-tight mb-6">
            {t.hero.titleLine1} <br />
            <span className="text-accent italic">{t.hero.titleAccent}</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            className="bg-accent text-primary px-8 py-4 text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
             onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t.hero.viewMenu}
          </Button>
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg transition-all duration-300"
            onClick={() => window.open('https://maps.app.goo.gl/JqjBsm1FAiMQbZqGA', '_blank')}
          >
            {t.hero.findUs}
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white cursor-pointer"
        onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs tracking-[0.2em] font-light block mb-2 text-center uppercase">{t.hero.scroll}</span>
        <ChevronDown size={32} className="mx-auto text-accent" />
      </motion.div>
    </section>
  );
};
