import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { fadeIn, slideIn, staggerContainer } from "@/lib/motion";

export default function AboutNatura() {
  const features = [
    {
      title: "Origem Sustentável",
      description: "Ingredientes colhidos de forma ética na floresta amazônica para preservar a biodiversidade"
    },
    {
      title: "Livre de Crueldade",
      description: "Nenhum teste em animais no desenvolvimento ou produção de produtos da Natura"
    },
    {
      title: "Carbono Neutro",
      description: "Comprometida em reduzir e compensar as emissões de carbono em toda a cadeia de suprimentos"
    }
  ];


  return (
    <section id="about" className="py-16 bg-white relative">
      <div className="absolute top-40 right-0 w-64 h-64 bg-[#F8F0FA] rounded-full opacity-30 -mr-20"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            variants={slideIn('left', 'tween', 0.2, 1)}
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#E79EC1] opacity-20 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#7EB86C] opacity-20 rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1542728928-1413d1894ed1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Natural ingredients used in Natura products"
                className="rounded-2xl shadow-soft w-full h-auto z-10 relative"
              />
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            variants={fadeIn('left', 'tween', 0.2, 1)}
          >
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-primary mb-6">
              A <span className="text-[#7EB86C]">Diferença</span> Natura
            </h2>
            <p className="text-gray-600 mb-6">
              Fundada em 1969, a Natura se tornou a principal empresa de cosméticos do Brasil ao aproveitar o poder da biodiversidade da Amazônia, promovendo o desenvolvimento sustentável e práticas de comércio justo.
            </p>


            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  variants={fadeIn('left', 'tween', 0.2 + (index * 0.1), 1)}
                >
                  <div className="text-[#7EB86C] mr-4 mt-1">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
              <span>Saiba mais sobre a história da Natura</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
