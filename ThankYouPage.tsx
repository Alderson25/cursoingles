
import React, { useEffect } from 'react';

const ThankYouPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappNumber = "258873581829";
  const customMessage = encodeURIComponent("Olá! Acabei de me inscrever na Landing Page e quero entrar no grupo VIP para receber os materiais das 3 aulas gratuitas.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${customMessage}`;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden text-center">
        <div className="bg-blue-600 py-12 px-6">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
            <i className="fa-solid fa-check text-5xl text-white"></i>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">QUASE LÁ!</h1>
          <p className="text-blue-100 text-lg">Sua vaga está pré-garantida.</p>
        </div>
        
        <div className="p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Agora, o passo <span className="text-red-600 uppercase underline">Mais Importante</span>:
          </h2>
          
          <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-bold text-green-800 text-lg mb-4 flex items-center">
              <i className="fa-solid fa-circle-exclamation mr-2"></i>
              Instruções Importantes:
            </h3>
            <ul className="space-y-4 text-slate-700 font-medium">
              <li className="flex items-start">
                <span className="bg-green-200 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 shrink-0">1</span>
                <span>Clique no botão abaixo para nos enviar uma mensagem no WhatsApp.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-200 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 shrink-0">2</span>
                <span>Você será adicionado ao <strong>Grupo VIP de Alunos</strong>.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-200 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 shrink-0">3</span>
                <span>Lá você receberá os <strong>PDFs de apoio</strong> e os links das aulas.</span>
              </li>
            </ul>
          </div>

          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-extrabold text-xl py-6 rounded-2xl shadow-xl shadow-green-100 transition-all flex items-center justify-center space-x-3 transform hover:scale-[1.02]"
          >
            <i className="fa-brands fa-whatsapp text-3xl"></i>
            <span>ENTRAR NO GRUPO VIP AGORA</span>
          </a>
          
          <p className="mt-8 text-slate-500 text-sm italic">
            "A fluência no inglês é a chave que abre as portas do mundo para Moçambique." 🇲🇿
          </p>

          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-center space-x-6 text-slate-400">
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-file-pdf text-2xl mb-1"></i>
              <span className="text-[10px] font-bold uppercase">PDFs</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-video text-2xl mb-1"></i>
              <span className="text-[10px] font-bold uppercase">Vídeos</span>
            </div>
            <div className="flex flex-col items-center">
              <i className="fa-solid fa-headset text-2xl mb-1"></i>
              <span className="text-[10px] font-bold uppercase">Suporte</span>
            </div>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-slate-400 text-xs">
        © 2024 Mozambique English Academy • Seu futuro começa aqui.
      </p>
    </div>
  );
};

export default ThankYouPage;
