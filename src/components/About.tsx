import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="story" className="py-24 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl transform rotate-[-2deg] border-4 border-white">
              <img 
                src="/1.jpg" 
                alt={t.about.imageAlt1}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute top-10 -right-10 z-0 rounded-lg overflow-hidden shadow-xl transform rotate-[5deg] w-2/3 border-4 border-accent hidden md:block">
              <img 
                src="/2.jpg" 
                alt={t.about.imageAlt2}
                className="w-full h-[300px] object-cover"
              />
            </div>
            {/* Texture or pattern overlay */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-accent" />
              <span className="text-primary font-accent text-xl tracking-widest uppercase">{t.about.eyebrow}</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary leading-tight">
              {t.about.titleLine1} <br />
              <span className="italic text-accent">{t.about.titleAccent}</span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              {t.about.paragraph1}
            </p>
            
            <p className="text-gray-600 leading-relaxed font-light text-lg">
              {t.about.paragraph2}
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 border-accent pl-6 italic font-serif text-xl text-primary/80">
                "{t.about.quote}"
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
