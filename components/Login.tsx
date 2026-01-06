
import React, { useState } from 'react';

interface LoginProps {
  onBack: () => void;
  onRegisterClick: () => void;
}

const Login: React.FC<LoginProps> = ({ onBack, onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Tentativa de login para: ${email}\nEm breve você terá acesso à sua conta!`);
  };

  return (
    <section className="min-h-screen pt-32 pb-24 bg-[#FFF8E1] relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-md px-4 relative z-10">
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(45,90,39,0.15)] border-4 border-[#2D5A27] transition-all duration-500">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-[#D64045] rounded-full flex items-center justify-center text-white text-2xl font-bungee mx-auto mb-4 shadow-lg">
              PN
            </div>
            <h2 className="text-4xl font-bungee text-[#2D5A27] leading-tight">ENTRAR NA NOSTRA</h2>
            <p className="text-[#2D5A27]/60 font-bold uppercase tracking-widest text-sm mt-2">Bem-vindo de volta!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#2D5A27] font-bungee text-sm mb-2 px-2">EMAIL</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-6 py-4 bg-[#FFF8E1] border-3 border-[#2D5A27]/20 rounded-2xl focus:border-[#D64045] focus:outline-none font-semibold text-[#2D5A27] placeholder-[#2D5A27]/30 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#2D5A27] font-bungee text-sm mb-2 px-2">SENHA</label>
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-6 py-4 bg-[#FFF8E1] border-3 border-[#2D5A27]/20 rounded-2xl focus:border-[#D64045] focus:outline-none font-semibold text-[#2D5A27] placeholder-[#2D5A27]/30 transition-colors"
              />
            </div>

            <div className="flex justify-end">
              <button type="button" className="text-[#D64045] font-bold text-sm hover:underline">Esqueceu a senha?</button>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#D64045] text-white py-5 rounded-2xl font-bungee text-xl shadow-xl hover:bg-[#b53439] hover:scale-[1.01] active:scale-95 transition-all"
            >
              ENTRAR
            </button>
          </form>

          <div className="mt-8 text-center space-y-4">
            <p className="text-[#2D5A27]/70 font-bold">
              Não tem uma conta? <button onClick={onRegisterClick} className="text-[#F4B41A] hover:underline">Cadastre-se</button>
            </p>
            <button 
              onClick={onBack}
              className="flex items-center justify-center gap-2 w-full text-[#2D5A27]/50 font-bold hover:text-[#2D5A27] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Voltar para o site
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
