import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { fadeIn, slideIn, staggerContainer } from "@/lib/motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="pt-24 md:pt-28 pb-16 md:pb-20 bg-gradient-to-br from-[#F8F0FA] to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FEF6ED] rounded-full opacity-30 -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F8F0FA] rounded-full opacity-40 -ml-40 -mb-40"></div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            variants={fadeIn('right', 'tween', 0.2, 1)}
          >
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
              Beleza Natural, <br />
              <span className="text-[#7EB86C]">Resultados Extraordinários</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-lg">
              Descubra o poder da natureza com os produtos exclusivos da Natura. Feitos com ingredientes sustentáveis e naturais para realçar sua beleza natural.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-primary hover:bg-opacity-90 text-white px-6 py-6 rounded-full font-medium transition-all transform hover:scale-105 inline-flex items-center"
                onClick={() => {
                  const productsSection = document.getElementById('products');
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>Explorar Produtos</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-6 rounded-full font-medium transition-colors"
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Sobre a Natura
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            variants={slideIn('right', 'tween', 0.2, 1)}
          >
            <div className="organic-shape bg-[#FEF6ED] p-6 relative">
              <div className="absolute -top-10 -right-10 w-20 h-20 text-[#E79EC1] opacity-50">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-20 h-20">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 text-[#7EB86C] opacity-40">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-16 h-16">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18L12 6 8 18m8-12h.01M8 6h.01" />
                </svg>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Produtos de beleza Natura em exibição" 
                className="rounded-2xl w-full h-auto object-cover shadow-soft"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center mt-16"
          variants={fadeIn('up', 'tween', 0.4, 1)}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white p-6 rounded-xl shadow-soft max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18L12 6 8 18m8-12h.01M8 6h.01" />
                </svg>
              </div>
              <h3 className="font-medium text-sm md:text-base">Ingredientes Naturais</h3>
            </div>
            <div className="text-center">
              <div className="text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
              </div>
              <h3 className="font-medium text-sm md:text-base">Sem Testes em Animais</h3>
            </div>
            <div className="text-center">
              <div className="text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="font-medium text-sm md:text-base">Eco-Friendly</h3>
            </div>
            <div className="text-center">
              <div className="text-primary mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-medium text-sm md:text-base">Premiado Internacionalmente</h3>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
