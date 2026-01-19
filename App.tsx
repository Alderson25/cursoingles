
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LeadForm from './components/LeadForm';
import ThankYouPage from './components/ThankYouPage';
import { LESSONS, TESTIMONIALS } from './constants';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const handleRegisterSuccess = () => setIsRegistered(true);

  if (isRegistered) {
    return <ThankYouPage />;
  }

  return (
    <div className="min-h-screen pt-16 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-24 md:pb-32 bg-slate-50">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <span>🇲🇿 100% Adaptado para Moçambique</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Aprenda Inglês do Zero e Comece a Falar com <span className="text-blue-600">Confiança</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Participe de 3 aulas 100% gratuitas e descubra o método simples e prático que já está ajudando moçambicanos a falar inglês para trabalho, estudos e oportunidades internacionais.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={openModal}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-5 rounded-xl shadow-xl shadow-blue-200 transition-all flex items-center justify-center space-x-3 group text-lg"
                >
                  <span>🚀 QUERO AS 3 AULAS GRATUITAS AGORA</span>
                  <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
              <p className="mt-6 text-sm text-slate-400 flex items-center justify-center lg:justify-start space-x-2">
                <i className="fa-solid fa-clock text-blue-500"></i>
                <span>Vagas limitadas • Sem cartão de crédito</span>
              </p>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-blue-100 ring-8 ring-white bg-white">
                <div className="grid grid-cols-2 h-64 md:h-80 lg:h-96">
                  {/* Mozambique Flag inspired visual */}
                  <div className="bg-[#009739] flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    <span className="text-6xl md:text-8xl mb-4 transform group-hover:scale-110 transition-transform duration-500">🇲🇿</span>
                    <span className="text-white font-black text-sm tracking-widest">MOZAMBIQUE</span>
                  </div>
                  {/* UK Flag inspired visual */}
                  <div className="bg-[#D21034] flex flex-col items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                    <span className="text-6xl md:text-8xl mb-4 transform group-hover:scale-110 transition-transform duration-500">🇬🇧</span>
                    <span className="text-white font-black text-sm tracking-widest">ENGLISH</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-2xl z-20">
                    <i className="fa-solid fa-link text-slate-800 text-2xl md:text-4xl"></i>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-mz-yellow rounded-full flex items-center justify-center border-4 border-white shadow-lg hidden md:flex z-30">
                <i className="fa-solid fa-star text-slate-900 text-3xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Por que aprender inglês agora?</h2>
            <p className="text-lg text-slate-600 mb-12">
              Todos os dias, moçambicanos perdem oportunidades reais por causa do inglês. Não deixe sua chance passar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'fa-graduation-cap', label: 'Bolsas de Estudo', color: 'bg-red-50 text-red-600' },
              { icon: 'fa-briefcase', label: 'Empregos Melhores', color: 'bg-blue-50 text-blue-600' },
              { icon: 'fa-plane', label: 'Oportunidades Globais', color: 'bg-green-50 text-green-600' }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all text-center">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl`}>
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">❌ Perda de {item.label}</h3>
                <p className="text-slate-500">Muitos param aqui por medo do idioma.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lessons Section */}
      <section id="aulas" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">O que você vai aprender</h2>
            <p className="text-slate-600">3 aulas diretas ao ponto para transformar seu inglês</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {LESSONS.map((lesson) => (
              <div key={lesson.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 -translate-y-12 translate-x-12 rounded-full group-hover:scale-150 transition-transform"></div>
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-6 relative z-10">
                  <i className={lesson.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{lesson.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">{lesson.description}</p>
                <div className="mt-6 flex items-center text-blue-600 font-bold text-xs uppercase tracking-widest">
                  <span>Conteúdo Gratuito</span>
                  <div className="ml-2 h-px flex-1 bg-slate-100"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={openModal}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-xl"
            >
              📘 RESERVAR MINHA VAGA GRATUITA
            </button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">O que dizem nossos alunos</h2>
            <div className="flex items-center justify-center space-x-1 text-mz-yellow">
              {[1, 2, 3, 4, 5].map(i => <i key={i} className="fa-solid fa-star"></i>)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.role} • {t.location}, Moçambique</p>
                  </div>
                </div>
                <p className="text-lg text-slate-700 italic leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">O Inglês Pode Mudar o Seu Futuro.</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Não deixe para amanhã a decisão que pode abrir portas para sua carreira e estudos internacionais ainda este ano.
          </p>
          
          <button 
            onClick={openModal}
            className="w-full sm:w-auto bg-white text-blue-600 hover:bg-slate-100 font-extrabold px-12 py-6 rounded-2xl text-xl transition-all shadow-2xl shadow-blue-900/40"
          >
            🇺🇸 GARANTIR MINHAS 3 AULAS GRATUITAS
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800 text-slate-500">
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center justify-center md:justify-start mb-4">
                <span className="font-black text-2xl tracking-tighter text-white">KOONKA</span>
              </div>
              <p className="text-sm">© 2024 Mozambique English Academy. Todos os direitos reservados.</p>
            </div>
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#" className="hover:text-white transition-colors">Suporte</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-100 z-40">
        <button 
          onClick={openModal}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all text-sm uppercase tracking-wide"
        >
          🔓 Inscrição Gratuita - Começar Agora
        </button>
      </div>

      <LeadForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onRegisterSuccess={handleRegisterSuccess}
      />
    </div>
  );
};

export default App;
