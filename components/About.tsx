
import React from 'react';
import { TESTIMONIALS } from '../constants';

const About: React.FC = () => {
  const secrets = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'A MASSA MÃE',
      desc: 'Nada de fermento químico. Nossa massa descansa por 72h em maturação lenta, resultando em uma leveza única.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'O POMODORO',
      desc: 'Usamos apenas tomates San Marzano, selecionados e processados para preservar a doçura natural e o frescor.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14l.879 2.121z" />
        </svg>
      ),
      title: 'O BRASEIRO',
      desc: 'Nosso forno é alimentado por lenha selecionada, mantendo 450°C constantes para a selagem perfeita do sabor.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'A CURADORIA',
      desc: 'Do azeite extra virgem à mussarela de búfala: cada ingrediente passa por um rigoroso controle de qualidade familiar.',
    }
  ];

  return (
    <section id="contato" className="bg-[#2D5A27] grid-bg py-24 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-[#F4B41A] font-bold tracking-[0.3em] uppercase text-sm">Desde 1999 mantendo a tradição</span>
              <h2 className="text-6xl md:text-7xl font-bungee leading-tight">
                NOSSA <span className="text-[#F4B41A]">FILOSOFIA</span>
              </h2>
              <p className="text-xl text-white/80 font-medium leading-relaxed italic border-l-4 border-[#F4B41A] pl-6 py-2">
                "Honramos a memória de nossos antepassados através da excelência gastronômica e do prazer de servir."
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 relative">
              {secrets.map((secret, index) => (
                <div 
                  key={index} 
                  className="flex gap-6 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="shrink-0 w-16 h-16 bg-[#F4B41A] rounded-2xl flex items-center justify-center text-[#2D5A27] shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform">
                    {secret.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bungee text-[#F4B41A] mb-1">{secret.title}</h3>
                    <p className="text-white/70 font-medium leading-snug">
                      {secret.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative pt-10 lg:pt-0">
             <div className="bg-[#FFF8E1] p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative border-b-[16px] border-[#D64045]">
                <div className="text-center mb-10">
                  <h2 className="text-5xl font-bungee text-[#2D5A27] mb-2 uppercase">Vozes da Mesa</h2>
                  <p className="text-[#D64045] font-bold tracking-widest text-xs">FEEDBACK DE NOSSOS CLIENTES</p>
                </div>

                <div className="space-y-6">
                  {TESTIMONIALS.map((t, i) => (
                    <div 
                      key={i} 
                      className="group bg-white p-5 rounded-3xl hover:bg-[#F4B41A]/10 transition-all border-2 border-[#2D5A27]/5 relative shadow-sm"
                    >
                      <div className="flex items-center gap-1 mb-2">
                        {Array.from({ length: t.stars }).map((_, starIdx) => (
                          <svg key={starIdx} className="w-4 h-4 text-[#F4B41A] fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-[#2D5A27] font-medium italic mb-3 leading-tight">
                        "{t.comment}"
                      </p>
                      <div className="flex items-center gap-3">
                         <div className="w-8 h-8 bg-[#2D5A27] rounded-full flex items-center justify-center text-white text-[10px] font-bold uppercase">
                           {t.name.charAt(0)}
                         </div>
                         <span className="text-[#2D5A27] font-bungee text-sm">{t.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
