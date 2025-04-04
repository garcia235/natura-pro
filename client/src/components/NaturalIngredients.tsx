import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { ingredients } from "@/lib/data";

export default function NaturalIngredients() {
  return (
    <section className="py-16 bg-[#FEF6ED] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      
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
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-4">O Poder da Biodiversidade Brasileira</h2>
          <p className="text-gray-600 max-w-xl mx-auto">Descubra os ingredientes únicos que tornam os produtos da Natura eficazes e sustentáveis</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={ingredient.name}
              className="bg-white rounded-xl shadow-soft p-6 text-center hover:shadow-lg transition-all"
              variants={fadeIn('up', 'tween', 0.1 * index, 0.5)}
            >
              <div className="w-20 h-20 bg-[#F8F0FA] rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src={ingredient.image} 
                  alt={ingredient.name} 
                  className="w-12 h-12 object-fit cover rounded-full"
                />
              </div>
              <h3 className="font-bold text-lg mb-2">{ingredient.name}</h3>
              <p className="text-gray-600 text-sm">{ingredient.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
