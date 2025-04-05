import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { categories } from "@/lib/data";
import { ImageLightbox } from "@/components/ui/image-lightbox";

export default function ProductCategories() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openLightbox = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="products" className="py-16 bg-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FEF6ED] organic-shape opacity-30"></div>

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
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-4">Coleções Premium</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Conheça nossa seleção especial dos produtos mais amados da Natura, de fragrâncias a cuidados com a pele</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              className="relative bg-white rounded-xl shadow-soft overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              variants={fadeIn('up', 'tween', 0.1 * index, 0.5)}
            >
              <div
                className="aspect-w-3 aspect-h-4 overflow-hidden cursor-pointer relative"
                onClick={() => openLightbox(category.image, category.name)}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300">
                  <div className="bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <Search className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <a
                  href={`https://minhaloja.natura.com/?consultoria=pinheirodany#${category.link}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  <span>Ver Coleção</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
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
