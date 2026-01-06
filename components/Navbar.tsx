
import React, { useState } from 'react';

interface NavbarProps {
  onLoginClick: () => void;
  onLogoClick: () => void;
  onCartClick: () => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick, onLogoClick, onCartClick, cartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    onLogoClick(); 
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8E1]/90 backdrop-blur-md border-b border-[#2D5A27]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => {
              onLogoClick();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-12 h-12 bg-[#D64045] rounded-full flex items-center justify-center text-white font-bungee group-hover:scale-110 transition-transform shadow-md">
              PN
            </div>
            <div>
              <span className="block text-[10px] text-[#D64045] font-bold tracking-[0.3em] -mb-1">SINCE 1999</span>
              <span className="text-xl font-bungee text-[#2D5A27] tracking-tight">PIZZA NOSTRA</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Início', 'Cardápio', 'Delivery'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item === 'Início' ? 'home' : item.toLowerCase())}
                className="text-base font-bold text-[#2D5A27] hover:text-[#D64045] transition-colors uppercase tracking-wider"
              >
                {item}
              </button>
            ))}
            
            <div className="w-px h-8 bg-[#2D5A27]/10 mx-2" />

            <button 
              onClick={onLoginClick}
              className="text-base font-bold text-[#2D5A27] hover:text-[#D64045] transition-colors uppercase tracking-wider"
            >
              Login
            </button>

            <button 
              onClick={onCartClick}
              className="relative p-2.5 bg-[#2D5A27] text-white rounded-2xl hover:bg-[#1e3d1a] transition-all shadow-lg active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#F4B41A] text-[#2D5A27] text-[10px] font-bungee w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#FFF8E1]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={onCartClick}
              className="relative p-2 bg-[#2D5A27] text-white rounded-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#F4B41A] text-[#2D5A27] text-[9px] font-bungee w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#2D5A27]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#FFF8E1] border-b border-[#2D5A27]/10 p-8 space-y-6">
          {['Início', 'Cardápio', 'Delivery'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item === 'Início' ? 'home' : item.toLowerCase())}
              className="block text-2xl font-bold text-[#2D5A27]"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => { onLoginClick(); setIsOpen(false); }}
            className="block text-2xl font-bold text-[#D64045]"
          >
            Acessar Conta
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;