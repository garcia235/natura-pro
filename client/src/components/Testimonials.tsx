import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { testimonials } from "@/lib/data";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { Search } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const scrollToTestimonial = (index: number) => {
    if (sliderRef.current) {
      const testimonialElements = sliderRef.current.querySelectorAll('.testimonial-slide');
      if (testimonialElements[index]) {
        testimonialElements[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
        setActiveIndex(index);
      }
    }
  };

  const openLightbox = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Handle scroll events to update active dot
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const testimonialElements = Array.from(sliderRef.current.querySelectorAll('.testimonial-slide'));
        const containerLeft = sliderRef.current.getBoundingClientRect().left;
        
        let closestIndex = 0;
        let minDistance = Infinity;
        
        testimonialElements.forEach((el, index) => {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.left - containerLeft);
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        });
        
        setActiveIndex(closestIndex);
      }
    };
    
    const sliderElement = sliderRef.current;
    if (sliderElement) {
      sliderElement.addEventListener('scroll', handleScroll);
      return () => sliderElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-white relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F8F0FA] organic-shape-alt opacity-20"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Experiências reais de pessoas que amam os produtos da Natura</p>
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={fadeIn('up', 'tween', 0.3, 1)}
        >
          <div 
            className="testimonial-slider flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide"
            ref={sliderRef}
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-slide flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-4"
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="bg-white rounded-xl shadow-soft p-6 h-full border border-gray-100">
                  <div className="flex text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-6">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 rounded-full overflow-hidden mr-4 relative cursor-pointer group"
                      onClick={() => openLightbox(testimonial.image, testimonial.name)}
                    >
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-full">
                        <div className="scale-0 group-hover:scale-100 transition-transform duration-200">
                          <Search className="h-4 w-4 text-white" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">Loyal customer for {testimonial.loyaltyYears} {testimonial.loyaltyYears === 1 ? 'year' : 'years'}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="hidden md:flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => scrollToTestimonial(index)}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Image Lightbox */}
      {selectedImage && (
        <ImageLightbox
          src={selectedImage.src}
          alt={selectedImage.alt}
          isOpen={!!selectedImage}
          onClose={closeLightbox}
        />
      )}
    </section>
  );
}
