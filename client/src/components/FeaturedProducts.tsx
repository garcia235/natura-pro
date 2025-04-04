import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { featuredProducts } from "@/lib/data";

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-[#F8F0FA] bg-opacity-30 relative">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FEF6ED] rounded-full opacity-30 -ml-40 -mb-40"></div>
      
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
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-4">Mais Vendidos</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Os produtos favoritos dos nossos clientes que entregam resultados excepcionais
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-soft overflow-hidden group"
              variants={fadeIn('up', 'tween', 0.1 * index, 0.5)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute top-3 right-3 bg-${product.isNew ? '[#7EB86C]' : 'primary'} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {product.isNew ? 'Novo' : 'Mais vendido'}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <span className="font-bold text-primary">R${product.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex text-amber-400 mb-4">
                  {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  {product.rating % 1 !== 0 && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )}
                  <span className="text-gray-600 text-sm ml-2">
                    {product.rating} ({product.reviewCount} avaliações)
                  </span>
                </div>
                <Button className="w-full text-center bg-primary hover:bg-opacity-90 text-white rounded-full font-medium transition-all transform hover:scale-105">
                  Compre agora
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          variants={fadeIn('up', 'tween', 0.6, 1)}
        >
          <Button
            variant="outline"
            className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-6 rounded-full font-medium transition-colors"
          >
            <span>Veja todos os produtos</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}