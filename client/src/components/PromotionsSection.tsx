import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { HoverButton } from "@/components/ui/hover-button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { Search } from "lucide-react";

export interface Promotion {
  id: number;
  title: string;
  description: string;
  code: string;
  expiryDate: string;
  discount: string;
  image: string;
}

const promotions: Promotion[] = [
  {
    id: 1,
    title: "Especial de Verão",
    description: "20% de desconto em todos os produtos corporais Ekos",
    code: "EKOS20",
    expiryDate: "2023-08-31",
    discount: "20%",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Novo Cliente",
    description: "15% de desconto na sua primeira compra",
    code: "WELCOME15",
    expiryDate: "2023-12-31",
    discount: "15%",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Coleção de Fragrâncias",
    description: "Compre 2 fragrâncias e ganhe 1 grátis",
    code: "SCENT3FOR2",
    expiryDate: "2023-09-15",
    discount: "Leve 3, Pague 2",
    image: "https://plus.unsplash.com/premium_photo-1670445045282-36648e89af6b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function PromotionsSection() {
  const [email, setEmail] = useState("");
  const [selectedCoupon, setSelectedCoupon] = useState<Promotion | null>(null);
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inscrição realizada com sucesso!",
      description: "Você receberá nossas promoções diretamente no seu e-mail.",
    });
    setEmail("");
  };

  const handleCouponClick = (promotion: Promotion) => {
    setSelectedCoupon(promotion);
    navigator.clipboard.writeText(promotion.code);
    toast({
      title: "Código do cupom copiado!",
      description: `${promotion.code} foi copiado para a área de transferência.`,
    });
  };

  const openLightbox = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  return (
    <section className="py-32 bg-gradient-to-r from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-12 text-center"
        >
          <motion.h2 
            variants={fadeIn('up', 'tween', 0.1, 0.7)}
            className="text-3xl md:text-4xl font-bold mb-4 text-green-800"
          >
            Promoções Exclusivas
          </motion.h2>
          <motion.p 
            variants={fadeIn('up', 'tween', 0.2, 0.7)}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Descubra ofertas especiais e códigos promocionais de produtos Natura. Inscreva-se para receber as últimas promoções diretamente no seu e-mail.
          </motion.p>
        </motion.div>

        {/* Formulário de Captura de Leads */}
        <motion.div 
          variants={fadeIn('up', 'tween', 0.3, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-md mx-auto mb-16 p-6 bg-white rounded-lg shadow-md"
        >
          <h3 className="text-xl font-semibold mb-4 text-green-700">Inscreva-se para Ofertas Exclusivas</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Seu endereço de e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <HoverButton
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Inscrever-se agora
            </HoverButton>
          </form>
        </motion.div>

        {/* Grid de Promoções */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <motion.div
              key={promo.id}
              variants={fadeIn('up', 'tween', 0.4 + promo.id * 0.1, 0.7)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl"
            >
              <div 
                className="h-48 overflow-hidden relative cursor-pointer"
                onClick={() => openLightbox(promo.image, promo.title)}
              >
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300">
                  <div className="bg-white p-2 rounded-full opacity-0 hover:opacity-100 transform scale-50 hover:scale-100 transition-all duration-300">
                    <Search className="h-5 w-5 text-green-800" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-green-800">{promo.title}</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                    {promo.discount}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center mb-4">
                  <code className="font-mono text-sm font-bold text-green-700">{promo.code}</code>
                  <span className="text-xs text-gray-500">Expira em: {new Date(promo.expiryDate).toLocaleDateString()}</span>
                </div>
                <HoverButton
                  onClick={() => handleCouponClick(promo)}
                  variant="outline"
                  className="w-full border-green-600 text-green-700 hover:bg-green-50"
                >
                  Copiar Código
                </HoverButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
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