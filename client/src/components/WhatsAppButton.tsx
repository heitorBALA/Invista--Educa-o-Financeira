import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "5585999999999"; // Número do WhatsApp (com código do país)
  const message = "Olá! Gostaria de saber mais sobre o Invistaí e como começar minha jornada de investimentos.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
      title="Suporte via WhatsApp"
    >
      <MessageCircle size={24} />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 bg-foreground text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Suporte via WhatsApp
        <div className="absolute top-full right-2 w-2 h-2 bg-foreground transform rotate-45"></div>
      </div>
    </a>
  );
}
