import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Invistaí</h3>
            <p className="text-white/70 text-sm">
              Educação financeira simples, prática e divertida para todos.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-white/70 hover:text-white transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold">Produto</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition">Recursos</a></li>
              <li><a href="#" className="hover:text-white transition">Planos</a></li>
              <li><a href="#" className="hover:text-white transition">Comunidade</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold">Empresa</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition">Sobre nós</a></li>
              <li><a href="#" className="hover:text-white transition">Carreiras</a></li>
              <li><a href="#" className="hover:text-white transition">Contato</a></li>
              <li><a href="#" className="hover:text-white transition">Imprensa</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition">Termos</a></li>
              <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition">Segurança</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>&copy; 2025 Invistaí. Todos os direitos reservados.</p>
            <p>Educação Financeira para Iniciantes</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
