import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "King Ghaz",
    source: "Google Reviews",
    text: "Nice and affordable. The Patin Tempoyak is authentic and the flavor is spot on.",
    rating: 5,
  },
  {
    id: 2,
    name: "Fairul Fauzi",
    source: "Google Reviews",
    text: "Best food experience here, calm atmosphere. Highly recommended for family dining.",
    rating: 5,
  },
  {
    id: 3,
    name: "Hazwan Jaafar",
    source: "Google Reviews",
    text: "If u starving this is a right place for food hunters ..halal n delicious...bon appetit",
    rating: 5,
  },
  {
    id: 4,
    name: "Sarah Lim",
    source: "Google Reviews",
    text: "The Ayam Penyet is a must-try! Crispy, juicy, and the sambal kicks!",
    rating: 5,
  }
];

export const Reviews = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="reviews" className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-primary mb-4">
          Voice of Guests
        </h2>
      </div>

      <div ref={containerRef} className="cursor-grab active:cursor-grabbing">
        <motion.div 
          drag="x"
          dragConstraints={containerRef}
          className="flex gap-8 px-6 min-w-max"
        >
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="w-[300px] md:w-[450px] bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between select-none"
            >
              <div>
                <Quote className="text-accent mb-4 w-10 h-10 opacity-50" />
                <p className="text-gray-600 italic text-lg mb-6 leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div>
                  <h4 className="font-bold text-primary font-serif text-lg">{review.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{review.source}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
          {/* Duplicate for length */}
           {reviews.map((review) => (
            <div 
              key={`${review.id}-dup`}
              className="w-[300px] md:w-[450px] bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between select-none"
            >
               <div>
                <Quote className="text-accent mb-4 w-10 h-10 opacity-50" />
                <p className="text-gray-600 italic text-lg mb-6 leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div>
                  <h4 className="font-bold text-primary font-serif text-lg">{review.name}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{review.source}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
