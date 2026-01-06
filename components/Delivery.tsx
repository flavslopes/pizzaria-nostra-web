import React, { useState, useEffect } from 'react';
import { CONTACT_INFO } from '../constants';

const Delivery: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowToast(true);
    
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent('Olá! Gostaria de fazer um pedido.')}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <section id="delivery" className="py-24 bg-[#FFF8E1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-16">
          <span className="bg-[#F4B41A] text-[#2D5A27] px-4 py-1 rounded-full font-bold text-sm mb-4 inline-block uppercase tracking-widest">
            Peça no conforto de casa
          </span>
          <h2 className="text-6xl md:text-8xl font-bungee text-[#D64045] leading-none">
            PEDE NO<br/><span className="text-[#2D5A27]">DELIVERY</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 w-full max-w-2xl">
          <a 
            href={CONTACT_INFO.ifood}
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-[#EA1D2C] p-8 rounded-[2.5rem] shadow-[0_15px_30px_rgba(234,29,44,0.3)] hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(234,29,44,0.4)] transition-all duration-300 flex flex-col items-center justify-center gap-6 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
              <img 
                src="https://logodownload.org/wp-content/uploads/2017/05/ifood-logo-0.png" 
                alt="iFood" 
                className="w-16 h-auto"
              />
            </div>
            <div className="text-center">
              <span className="text-white font-bungee text-2xl block">iFood</span>
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">O preferido</span>
            </div>
          </a>

          <button 
            onClick={handleWhatsAppOrder}
            className="group relative bg-[#25D366] p-8 rounded-[2.5rem] shadow-[0_15px_30px_rgba(37,211,102,0.3)] hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(37,211,102,0.4)] transition-all duration-300 flex flex-col items-center justify-center gap-6 overflow-hidden w-full"
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
              <svg className="w-14 h-14 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="text-center">
              <span className="text-white font-bungee text-2xl block">WhatsApp</span>
              <span className="text-white/80 text-xs font-bold uppercase tracking-widest">Pedido Direto</span>
            </div>
          </button>
        </div>

        <div className="relative w-full max-w-2xl h-64 md:h-80 flex justify-center">
           <div className="relative flex gap-8 animate-float">
              <div className="w-44 h-44 bg-white shadow-2xl rotate-12 flex flex-col items-center justify-center p-6 border-b-[12px] border-[#D64045] rounded-xl transform hover:rotate-0 transition-transform duration-500">
                 <div className="w-12 h-12 bg-[#D64045] rounded-full mb-3 flex items-center justify-center text-white text-xs font-bungee shadow-md">PN</div>
                 <div className="h-1 w-16 bg-[#2D5A27]/20 rounded-full mb-2"></div>
                 <span className="font-bungee text-[#2D5A27] text-center text-[10px] tracking-widest">PIZZA NOSTRA</span>
              </div>
              <div className="w-44 h-44 bg-white shadow-2xl -rotate-6 flex flex-col items-center justify-center p-6 border-b-[12px] border-[#2D5A27] rounded-xl translate-y-8 transform hover:rotate-0 transition-transform duration-500">
                 <div className="w-12 h-12 bg-[#2D5A27] rounded-full mb-3 flex items-center justify-center text-white text-xs font-bungee shadow-md">PN</div>
                 <div className="h-1 w-16 bg-[#D64045]/20 rounded-full mb-2"></div>
                 <span className="font-bungee text-[#D64045] text-center text-[10px] tracking-widest">ENTREGA QUENTE</span>
              </div>
           </div>
        </div>
      </div>

      <div className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className="bg-[#2D5A27] text-white px-8 py-4 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[#F4B41A] flex items-center gap-4">
          <div className="bg-[#F4B41A] rounded-full p-2">
            <svg className="w-6 h-6 text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="font-bungee text-sm tracking-wide">MENSAGEM ENVIADA!</p>
            <p className="text-xs font-bold opacity-80 uppercase">Redirecionando para o WhatsApp...</p>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Delivery;