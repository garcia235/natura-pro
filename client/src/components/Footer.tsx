import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <a href="#" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary">
                <span className="font-bold">N</span>
              </div>
              <span className="ml-2 font-bold text-white">Natura Beauty</span>
            </a>
            <p className="mt-4 max-w-xs text-white text-opacity-80">
              Consultora autorizada da Natura trazendo o melhor da beleza e bem-estar do Brasil.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Produtos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Perfumaria</a></li>
                <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Cuidados com a pele</a></li>
                <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Maquiagem</a></li>
                <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Cuidados corporais</a></li>
                <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Cuidados masculinos</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Informações</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Sobre a Natura</a></li>
                <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Sustentabilidade</a></li>
                <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Ingredientes</a></li>
                <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Perguntas Frequentes</a></li>
                <li><a href="#" className="text-white text-opacity-80 hover:text-opacity-100 transition-colors">Informações de entrega</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="font-bold text-lg mb-4">Inscreva-se</h3>
              <p className="text-white text-opacity-80 mb-4">Fique por dentro dos lançamentos e ofertas exclusivas</p>
              <form className="flex">
                <Input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-4 py-2 rounded-l-lg focus:outline-none w-full"
                />
                <Button type="submit" className="bg-[#E79EC1] hover:bg-opacity-90 text-white px-4 py-2 rounded-r-lg transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-opacity-60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Consultora Natura Beauty. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition-colors">Política de Privacidade</a>
            <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition-colors">Termos de Serviço</a>
            <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition-colors">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
