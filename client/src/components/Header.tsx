import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [, navigate] = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { name: "Início", id: "home" },
    { name: "Produtos", id: "products" },
    { name: "Depoimentos", id: "testimonials" },
    { name: "Sobre a Natura", id: "about" },
    { name: "Contato", id: "contact" }
  ];

  return (
    <header className={`fixed w-full bg-white z-50 transition-all ${isScrolled ? 'bg-opacity-95 shadow-md' : 'bg-opacity-90'} bg-blur`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a 
          href="#home" 
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
            <span className="font-bold">N</span>
          </div>
          <span className="ml-2 font-bold text-primary">Natura Beauty</span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="default" 
            className="hidden md:flex bg-primary hover:bg-opacity-90 text-white rounded-full transition-all transform hover:scale-105"
            onClick={() => scrollToSection("contact")}
          >
            Fale comigo
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-primary">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    className="py-2 text-lg font-medium hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                      document.querySelector("[data-state='open']")?.setAttribute("data-state", "closed");
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
