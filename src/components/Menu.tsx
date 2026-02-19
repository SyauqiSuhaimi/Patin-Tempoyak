import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const dishImages = ['/0.jpg', '/00.jpg'];

export const Menu = () => {
  const { t } = useLanguage();
  const dishes = t.menu.dishes.map((dish, index) => ({
    ...dish,
    image: dishImages[index],
  }));

  return (
    <section id="menu" className="py-24 bg-primary text-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-accent text-xl tracking-widest uppercase block mb-4">
            {t.menu.eyebrow}
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            {t.menu.title}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative h-[500px] rounded-xl overflow-hidden cursor-pointer shadow-2xl"
            >
              {/* Background Image */}
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end mb-4 border-b border-white/20 pb-4">
                  <h3 className="text-3xl font-serif font-bold text-white group-hover:text-accent transition-colors">
                    {dish.name}
                  </h3> 
                </div>
                
                <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2 md:line-clamp-none">
                  {dish.description}
                </p>

                <div className="flex gap-2">
                  {dish.tags.map(tag => (
                    <span key={tag} className="text-xs uppercase tracking-wider px-3 py-1 border border-white/30 rounded-full text-white/80">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
