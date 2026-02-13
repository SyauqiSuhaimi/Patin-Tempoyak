import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Visit Us</h2>
              <p className="text-gray-300 max-w-md leading-relaxed">
                Experience the authentic taste of Pahang in a cozy, welcoming environment. We look forward to serving you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  22, Jalan Tebedu, Pekan Sabak, <br />
                  45200 Sabak, Selangor
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="text-accent flex-shrink-0" />
                <div className="flex items-center gap-3">
                  <p className="text-gray-300">+60 19-209 5833</p>
                  <a 
                    href="https://api.whatsapp.com/send?phone=60192095833" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full transition-colors cursor-pointer"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-accent mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="mb-1"><span className="text-white font-medium">Mon - Sat:</span> 11:00 AM - 04:30 PM</p>
                  <p><span className="text-white font-medium">Sun:</span> Closed</p>
                </div>
              </div>
            </div>

            <Button 
              className="w-full md:w-auto"
              onClick={() => window.open('https://maps.app.goo.gl/JqjBsm1FAiMQbZqGA', '_blank')}
            >
              Get Directions
            </Button>
          </div>

          {/* Map */}
          <div className="h-[400px] rounded-xl overflow-hidden shadow-2xl border-4 border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.1947950793274!2d100.98063169999999!3d3.7677471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cb5df62a10f985%3A0x738141d138bae81c!2sPatin%20Tempoyak%20Kak%20Zee!5e0!3m2!1sen!2smy!4v1743740024002!5m2!1sen!2smy" 
              className="w-full h-full border-0" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Patin Tempoyak Kak Zee. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors cursor-pointer">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors cursor-pointer">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
