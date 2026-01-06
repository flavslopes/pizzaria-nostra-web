
import React from 'react';
import { CartItem } from '../types';
import { CONTACT_INFO } from '../constants';

interface CartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ items, isOpen, onClose, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((acc, item) => acc + item.newPrice * item.quantity, 0);
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleCheckout = () => {
    if (items.length === 0) return;

    let message = `*PIZZARIA NOSTRA - NOVO PEDIDO*\n\n`;
    items.forEach(item => {
      message += `• ${item.quantity}x ${item.name} - R$ ${(item.newPrice * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*TOTAL: R$ ${total.toFixed(2)}*\n\n`;
    message += `Por favor, gostaria de confirmar este pedido.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${CONTACT_INFO.phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <aside className={`fixed top-0 right-0 h-full w-full max-w-md bg-[#FFF8E1] z-[70] shadow-[-10px_0_30px_rgba(0,0,0,0.2)] transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col border-l-8 border-[#2D5A27]`}>
        
        <div className="p-6 bg-[#2D5A27] text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F4B41A] rounded-xl flex items-center justify-center text-[#2D5A27]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bungee">SEU PEDIDO</h2>
              <p className="text-xs font-bold opacity-70 uppercase tracking-widest">{itemCount} itens selecionados</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
              <svg className="w-20 h-20 text-[#2D5A27]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="font-bungee text-xl text-[#2D5A27]">CARRINHO VAZIO</p>
              <button 
                onClick={onClose}
                className="text-[#D64045] font-bold underline decoration-2 underline-offset-4 uppercase tracking-widest text-xs"
              >
                Explorar o cardápio
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-3xl shadow-sm border-2 border-[#2D5A27]/5 flex gap-4 animate-fade-in">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-2xl object-cover border-2 border-[#F4B41A]" />
                <div className="flex-grow">
                  <h3 className="font-bungee text-[#2D5A27] leading-none mb-1">{item.name}</h3>
                  <p className="text-[#D64045] font-bold text-sm mb-2">R$ {item.newPrice.toFixed(2)}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center bg-[#FFF8E1] rounded-xl border border-[#2D5A27]/10 p-1">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-8 h-8 flex items-center justify-center text-[#2D5A27] font-bold hover:bg-white rounded-lg transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-bold text-[#2D5A27]">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-8 h-8 flex items-center justify-center text-[#2D5A27] font-bold hover:bg-white rounded-lg transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-gray-400 hover:text-[#D64045] p-2 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 bg-white border-t-4 border-[#F4B41A] space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-bungee text-[#2D5A27] text-lg">TOTAL</span>
              <span className="font-bungee text-[#D64045] text-2xl">R$ {total.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#2D5A27] text-white py-5 rounded-2xl font-bungee text-xl shadow-xl hover:bg-[#1e3d1a] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              FINALIZAR PEDIDO
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default Cart;
