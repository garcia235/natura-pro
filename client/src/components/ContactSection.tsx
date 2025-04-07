import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Instagram, Facebook, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { fadeIn, staggerContainer } from "@/lib/motion";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor, insira um endereço de e-mail válido" }),
  phone: z.string().min(10, { message: "Por favor, insira um número de telefone válido" }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres" }),
});


type FormValues = z.infer<typeof formSchema>;

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await apiRequest("POST", "/api/contact", data);
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong.");
      }
  
      const result = await response.json();
  
      toast({
        title: "Success!",
        description: result.message,
        duration: 5000,
      });
  
      reset();
    } catch (error) {
      let errorMessage = "Something went wrong. Please try again.";
  
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (error instanceof Response) {
        try {
          const errorData = await error.json();
          errorMessage = errorData.message || errorMessage;
        } catch {
          errorMessage = "Failed to parse error response.";
        }
      }
  
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };  

  return (
    <section id="contact" className="py-16 bg-[#F8F0FA] bg-opacity-30 relative">
      <motion.div
        className="container mx-auto px-4 relative z-10"
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft overflow-hidden"
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-primary p-8 text-white">
            <h2 className="font-serif font-bold text-2xl md:text-3xl mb-6">Entre em Contato</h2>
            <p className="mb-8">Tem dúvidas sobre os produtos da Natura ou precisa de recomendações personalizadas? Estou aqui para ajudar!</p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-[#E79EC1] mr-4 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                  <h3 className="font-bold text-lg">Localização</h3>
                  <p className="text-white text-opacity-80">São Paulo, Brasil</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#E79EC1] mr-4 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">WhatsApp</h3>
                    <p className="text-white text-opacity-80">+55 11 98765-4321</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-[#E79EC1] mr-4 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-white text-opacity-80">consultant@naturabeauty.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
              <h3 className="font-bold text-lg mb-4">Siga-me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                    <Instagram className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                    <Facebook className="h-5 w-5 text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-all">
                    <ExternalLink className="h-5 w-5 text-white" />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:w-3/5 p-8">
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-primary mb-6">Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">Seu nome</label>
                  <Input
                    id="name"
                    {...register("name")}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Digite seu nome"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Digite seu email"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-600 text-sm font-medium mb-2">Número de telefone (WhatsApp)</label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Digite seu número de telefone"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-600 text-sm font-medium mb-2">Sua mensagem</label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Me conte quais produtos você gostaria de saber mais"
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105"
                >
                  {isSubmitting ? "Enviando..." : "Mensagem Enviada"}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}