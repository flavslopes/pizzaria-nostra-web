
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Delivery from './components/Delivery';
import About from './components/About';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';
import CheckerDivider from './components/CheckerDivider';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import { CartItem, Pizza } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'login' | 'register'>('landing');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const showLogin = () => setView('login');
  const showRegister = () => setView('register');
  const showLanding = () => setView('landing');

  const addToCart = (pizza: Pizza) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === pizza.id);
      if (existing) {
        return prev.map(item => 
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...pizza, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen selection:bg-[#D64045] selection:text-white bg-[#FFF8E1]">
      <Navbar 
        onLoginClick={showLogin} 
        onLogoClick={showLanding} 
        onCartClick={() => setIsCartOpen(true)}
        cartCount={totalItems}
      />
      
      <main>
        {view === 'landing' && (
          <>
            <Hero />
            <CheckerDivider />
            <Menu onAddToCart={addToCart} />
            <CheckerDivider />
            <Delivery />
            <About />
            <LocationMap />
            
            <section className="bg-[#2D5A27] py-32 text-center relative grid-bg overflow-hidden border-t-8 border-[#F4B41A]">
              <div className="absolute top-10 left-10 text-[#F4B41A]/20 animate-pulse">
                 <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
              </div>
              <div className="absolute bottom-10 right-10 text-[#F4B41A]/20 animate-pulse delay-500">
                 <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/></svg>
              </div>
              
              <div className="relative z-10 px-4">
                <span className="text-[#F4B41A] font-bungee text-2xl md:text-4xl block mb-4 drop-shadow-lg uppercase tracking-widest">Grazie Mille!</span>
                <h2 className="text-7xl md:text-9xl font-bungee text-white leading-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                  BUON<br/>APPETITO!
                </h2>
                <p className="mt-8 text-white/60 font-bold uppercase tracking-[0.4em] text-sm italic">Esperamos você na nossa mesa</p>
              </div>
            </section>
          </>
        )}

        {view === 'login' && (
          <Login onBack={showLanding} onRegisterClick={showRegister} />
        )}

        {view === 'register' && (
          <Register onBack={showLanding} onLoginClick={showLogin} />
        )}
      </main>

      <Cart 
        items={cartItems} 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
