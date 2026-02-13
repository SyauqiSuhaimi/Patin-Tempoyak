import { motion } from 'framer-motion';
import { Moon, Calendar, Clock } from 'lucide-react';

export const RamadhanPromo = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary text-white relative overflow-hidden">
      {/* Decorative localized Islamic-style pattern vibe using CSS shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-accent text-sm font-bold uppercase tracking-wider mb-2">
              <Moon size={16} className="fill-accent" />
              Ramadhan Special
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Berbuka with <br />
              <span className="text-accent italic">Authentic Flavors</span>
            </h2>
            
            <p className="text-gray-300 text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
              Experience the comfort of heavy, delicious Patin Tempoyak for your Iftar. 
              We are open exclusively for <strong>Takeaway</strong> during this holy month.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
               <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center md:items-start border border-white/10">
                 <Clock className="text-accent mb-2" size={24} />
                 <span className="text-xs text-gray-400 uppercase">Hours</span>
                 <span className="font-bold text-lg">4PM - 7:30PM</span>
               </div>
               <div className="bg-white/5 p-4 rounded-lg flex flex-col items-center md:items-start border border-white/10">
                 <Calendar className="text-accent mb-2" size={24} />
                 <span className="text-xs text-gray-400 uppercase">Availability</span>
                 <span className="font-bold text-lg">Takeaway Only</span>
               </div>
            </div>

          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 relative"
          >
             {/* Abstract representation of a lantern or just a nice food shot frame */}
             <div className="relative rounded-t-full rounded-b-lg overflow-hidden border-4 border-accent shadow-2xl mx-auto w-full max-w-sm aspect-[3/4]">
               <img 
                 src="/0.jpg" 
                 alt="Patin Tempoyak Iftar" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center pb-8">
                 <p className="font-serif text-2xl italic text-white">Perfect for Iftar</p>
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
