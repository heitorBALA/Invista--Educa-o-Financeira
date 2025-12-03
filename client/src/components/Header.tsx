import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";
import logoImg from "../assets/logo-invistai.png";

export default function Header() {
  const [, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <button
          onClick={() => setLocation("/")}


          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          <img 
            src={logoImg} 
            alt="Invistaí" 
            className="h-20 w-auto"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#sobre" className="text-foreground hover:text-primary font-medium transition">
            Sobre
          </a>
          <a href="#como-funciona" className="text-foreground hover:text-primary font-medium transition">
            Como Funciona
          </a>
          <a href="#planos" className="text-foreground hover:text-primary font-medium transition">
            Planos
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
            Entrar
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Começar Grátis
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container py-4 flex flex-col gap-4">
            <a href="#sobre" className="text-foreground hover:text-primary font-medium">
              Sobre
            </a>
            <a href="#como-funciona" className="text-foreground hover:text-primary font-medium">
              Como Funciona
            </a>
            <a href="#planos" className="text-foreground hover:text-primary font-medium">
              Planos
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" className="w-full border-primary text-primary">
                Entrar
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Começar Grátis
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
