
import React, { useState } from 'react';

interface RegisterProps {
  onBack: () => void;
  onLoginClick: () => void;
}

const Register: React.FC<RegisterProps> = ({ onBack, onLoginClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    alert(`Cadastro realizado para: ${formData.name}\nBem-vindo à família Nostra!`);
  };

  return (
    <section className="min-h-screen pt-32 pb-24 bg-[#FFF8E1] relative overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-xl px-4 relative z-10">
        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(45,90,39,0.15)] border-4 border-[#F4B41A] transition-all duration-500">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-[#2D5A27] rounded-full flex items-center justify-center text-white text-2xl font-bungee mx-auto mb-4 shadow-lg">
              PN
            </div>
            <h2 className="text-4xl font-bungee text-[#2D5A27] leading-tight">CRIAR CONTA NOSTRA</h2>
            <p className="text-[#D64045] font-bold uppercase tracking-widest text-sm mt-2">Junte-se à nossa tradição!</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-[#2D5A27] font-bungee text-xs mb-2 px-2 uppercase tracking-widest">Nome Completo</label>
              <input 
                type="text" 
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: João Silva"
                className="w-full px-6 py-4 bg-[#FFF8E1] border-3 border-[#2D5A27]/20 rounded-2xl focus:border-[#F4B41A] focus:outline-none font-semibold text-[#2D5A27] placeholder-[#2D5A27]/30 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#2D5A27] font-bungee text-xs mb-2 px-2 uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                className="w-full px-6 py-4 bg-[#FFF8E1] border-3 border-[#2D5A27]/20 rounded-2xl focus:border-[#F4B41A] focus:outline-none font-semibold text-[#2D5A27] placeholder-[#2D5A27]/30 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#2D5A27] font-bungee text-xs mb-2 px-2 uppercase tracking-widest">Telefone</label>
              <input 
                type="tel" 
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                className="w-full px-6 py-4 bg-[#FFF8E1] border-3 border-[#2D5A27]/20 rounded-2xl focus:border-[#F4B41A] focus:outline-none font-semibold text-[#2D5A27] placeholder-[#2D5A27]/30 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#2D5A27] font-bungee text-xs mb-2 px-2 uppercase tracking-widest">Senha</label>
              <input 
                type="password" 
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-6 py-4 bg-[#FFF8E1] border-3 border-[#2D5A27]/20 rounded-2xl focus:border-[#F4B41A] focus:outline-none font-semibold text-[#2D5A27] placeholder-[#2D5A27]/30 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#2D5A27] font-bungee text-xs mb-2 px-2 uppercase tracking-widest">Confirmar Senha</label>
              <input 
                type="password" 
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-6 py-4 bg-[#FFF8E1] border-3 border-[#2D5A27]/20 rounded-2xl focus:border-[#F4B41A] focus:outline-none font-semibold text-[#2D5A27] placeholder-[#2D5A27]/30 transition-colors"
              />
            </div>

            <div className="md:col-span-2 pt-4">
              <button 
                type="submit"
                className="w-full bg-[#2D5A27] text-white py-5 rounded-2xl font-bungee text-xl shadow-xl hover:bg-[#1e3d1a] hover:scale-[1.01] active:scale-95 transition-all"
              >
                CRIAR MINHA CONTA
              </button>
            </div>
          </form>

          <div className="mt-8 text-center space-y-4">
            <p className="text-[#2D5A27]/70 font-bold">
              Já faz parte da família? <button onClick={onLoginClick} className="text-[#D64045] hover:underline">Entre agora</button>
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

export default Register;
