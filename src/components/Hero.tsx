import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/999.jpg" 
          alt="Authentic Malaysian Cuisine" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-secondary font-accent italic text-xl md:text-2xl tracking-widest uppercase block mb-4">
            Since 2020
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-tight mb-6">
            The Authentic Taste <br />
            <span className="text-accent italic">of Pahang</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Experience the legendary Patin Tempoyak, crafted with fermented durian and traditional spices. A culinary journey like no other.
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
            View Our Menu
          </Button>
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg transition-all duration-300"
            onClick={() => window.open('https://maps.app.goo.gl/JqjBsm1FAiMQbZqGA', '_blank')}
          >
            Find Us
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs tracking-[0.2em] font-light block mb-2 text-center uppercase">Scroll</span>
        <ChevronDown size={32} className="mx-auto text-accent" />
      </motion.div>
    </section>
  );
};
