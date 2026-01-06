
import React from 'react';
import CheckerDivider from './CheckerDivider';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFF8E1]">
      <CheckerDivider />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-4">
             <div className="flex items-center justify-center md:justify-start gap-4">
                <div 
                  className="w-16 h-16 bg-[#D64045] rounded-full flex items-center justify-center text-white text-2xl font-bungee shadow-lg cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  PN
                </div>
                <div>
                  <h2 className="text-3xl font-bungee text-[#2D5A27]">PIZZA NOSTRA</h2>
                  <p className="text-[#D64045] font-bold tracking-widest text-xs uppercase">Tradição desde 1999</p>
                </div>
             </div>
             <p className="max-w-xs text-[#2D5A27]/70 font-medium">
               A melhor pizza artesanal da região, levando tradição e sabor à sua mesa há mais de duas décadas com ingredientes selecionados.
             </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div>
              <h4 className="font-bungee text-[#2D5A27] mb-6 text-sm">Navegação</h4>
              <ul className="space-y-3 text-[#2D5A27]/80 font-bold text-base">
                <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#D64045] transition-colors">Início</button></li>
                <li><button onClick={() => document.getElementById('cardápio')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#D64045] transition-colors">Cardápio</button></li>
                <li><button onClick={() => document.getElementById('delivery')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#D64045] transition-colors">Delivery</button></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bungee text-[#2D5A27] text-sm mb-6">Peça Agora</h4>
              <a 
                href={CONTACT_INFO.ifood} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#EA1D2C] text-white px-8 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-md active:scale-95"
              >
                iFood
              </a>
              <a 
                href={`https://wa.me/${CONTACT_INFO.phone}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-md active:scale-95"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#2D5A27]/10 flex flex-col items-center gap-6">
          <div className="text-[#2D5A27]/50 font-bold text-center">
            <p>© {new Date().getFullYear()} Pizzaria Nostra. Todos os direitos reservados.</p>
            <p className="text-xs mt-1 uppercase tracking-widest opacity-60">Rua da Tradição, 1999 - São Paulo - SP</p>
          </div>
          
          <div className="bg-white px-8 py-3 rounded-full border border-[#2D5A27]/10 shadow-sm hover:shadow-md transition-shadow group">
            <p className="text-[#2D5A27] text-sm font-medium">
              Desenvolvido por{' '}
              <a 
                href={CONTACT_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bungee text-[#D64045] group-hover:text-[#2D5A27] transition-colors tracking-tight underline decoration-[#D64045]/20 underline-offset-4 decoration-2"
              >
                Flaviana Lopes
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
