
import React from 'react';

const Navbar: React.FC = () => {
  const whatsappNumber = "258873581829";
  const customMessage = encodeURIComponent("Olá! Gostaria de tirar uma dúvida sobre as aulas de inglês.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${customMessage}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-black text-2xl tracking-tighter text-slate-900">KOONKA</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-600">
          <a href="#beneficios" className="hover:text-blue-600 transition-colors">Benefícios</a>
          <a href="#aulas" className="hover:text-blue-600 transition-colors">O que aprender</a>
          <a href="#depoimentos" className="hover:text-blue-600 transition-colors">Depoimentos</a>
        </div>
        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full flex items-center space-x-2 transition-all"
        >
          <i className="fa-brands fa-whatsapp text-lg"></i>
          <span className="hidden sm:inline">Suporte</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
