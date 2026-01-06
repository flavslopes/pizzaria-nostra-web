
import React, { useState, useEffect } from 'react';
import { PIZZAS } from '../constants';
import { Pizza } from '../types';

interface MenuProps {
  onAddToCart: (pizza: Pizza) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [showToast, setShowToast] = useState(false);
  const [addedItem, setAddedItem] = useState('');

  const handleAdd = (pizza: Pizza) => {
    setAddedItem(pizza.name);
    setShowToast(true);
    onAddToCart(pizza);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <section id="cardápio" className="py-24 bg-[#FFF8E1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bungee text-[#2D5A27] mb-4">NOSSO CARDÁPIO</h2>
          <div className="w-24 h-2 bg-[#D64045] mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-[#2D5A27] font-semibold">Artesanais, saborosas e feitas com paixão.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PIZZAS.map((pizza) => (
            <div key={pizza.id} className="flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border-4 border-transparent hover:border-[#F4B41A]">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pizza.image} 
                  alt={pizza.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#D64045] text-white px-3 py-1 rounded-full font-bold text-sm shadow-md">
                  -{(100 - (pizza.newPrice / pizza.oldPrice * 100)).toFixed(0)}% OFF
                </div>
              </div>
              <div className="p-6 flex-grow text-center flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bungee text-[#2D5A27] mb-2">{pizza.name}</h3>
                  <p className="text-[#2D5A27]/70 text-sm mb-4 min-h-[40px] leading-relaxed">
                    {pizza.description}
                  </p>
                </div>
                <div>
                  <div className="flex flex-col items-center justify-center gap-1 mb-6">
                    <span className="text-[#D64045] line-through text-lg font-bold">DE R$ {pizza.oldPrice.toFixed(2).replace('.', ',')}</span>
                    <span className="text-3xl text-[#2D5A27] font-bungee">POR R$ {pizza.newPrice.toFixed(2).replace('.', ',')}</span>
                  </div>
                  <button 
                    onClick={() => handleAdd(pizza)}
                    className="w-full bg-[#F4B41A] text-[#2D5A27] py-4 rounded-2xl font-bold hover:bg-[#2D5A27] hover:text-white transition-all flex items-center justify-center gap-2 transform active:scale-95 shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Adicionar ao pedido
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`fixed top-24 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="bg-[#2D5A27] text-white px-8 py-4 rounded-full shadow-2xl border-2 border-[#F4B41A] flex items-center gap-4">
          <div className="w-6 h-6 rounded-full bg-[#F4B41A] flex items-center justify-center">
            <svg className="w-4 h-4 text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="font-bold text-sm uppercase tracking-widest">
            <span className="text-[#F4B41A]">{addedItem}</span> ADICIONADA!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
