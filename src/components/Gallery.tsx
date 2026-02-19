import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const images = [
  { src: "/1.jpg", span: "md:col-span-2 md:row-span-2" },
  { src: "/3.jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/2.jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/4.jpg", span: "md:col-span-1 md:row-span-1" },
  { src: "/0.jpg", span: "md:col-span-2 md:row-span-1" },
];

export const Gallery = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-accent text-xl tracking-widest uppercase block mb-4">
            {t.gallery.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            {t.gallery.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 h-[1200px] md:h-[800px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-lg shadow-lg group ${img.span}`}
            >
              <img
                src={img.src}
                alt={`${t.gallery.imageAltPrefix} ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
