import React from 'react';

const Hero: React.FC = () => {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('cardápio');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-[#1a3016]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2000&auto=format&fit=crop" 
          alt="Pizza Forno a Lenha" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a3016] via-[#1a3016]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a3016] via-transparent to-transparent opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="max-w-4xl space-y-10 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-[#F4B41A] px-5 py-2.5 rounded-full shadow-xl transform -rotate-1">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D64045] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D64045]"></span>
            </span>
            <span className="text-[#2D5A27] font-bold text-sm uppercase tracking-widest">Forno a lenha ligado</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl xl:text-9xl font-bungee text-white leading-[0.85] tracking-tighter drop-shadow-2xl">
              TRADIÇÃO <br/>
              QUE SE <br/>
              <span className="text-[#F4B41A]">SABOREIA.</span>
            </h1>
            
            <p className="text-xl md:text-3xl text-white/90 max-w-2xl font-medium leading-relaxed drop-shadow-lg">
              Massa de fermentação natural maturada por <span className="text-[#F4B41A]">72 horas</span>. 
              Leveza, crocância e o verdadeiro molho pomodoro.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-6">
            <button 
              onClick={scrollToMenu}
              className="group bg-[#D64045] text-white px-14 py-6 rounded-[2rem] text-2xl font-bungee shadow-[0_20px_40px_rgba(214,64,69,0.4)] hover:bg-[#b53439] hover:-translate-y-2 transition-all flex items-center gap-4 active:translate-y-0"
            >
              VER CARDÁPIO
              <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;