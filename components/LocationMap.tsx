
import React from 'react';

const LocationMap: React.FC = () => {
  return (
    <section className="py-24 bg-[#FFF8E1] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#2D5A27]/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bungee text-[#2D5A27] leading-tight">
                ONDE A MAGIA <br/><span className="text-[#D64045]">ACONTECE</span>
              </h2>
              <div className="w-24 h-2 bg-[#F4B41A] rounded-full"></div>
            </div>

            <div className="space-y-6 text-[#2D5A27]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#D64045] shadow-md border-2 border-[#D64045]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bungee text-xl">NOSSO ENDEREÇO</h4>
                  <p className="text-lg font-medium opacity-80">Rua da Tradição, 1999 - Bairro do Sabor</p>
                  <p className="text-lg font-medium opacity-80">São Paulo - SP, 01234-567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#2D5A27] shadow-md border-2 border-[#2D5A27]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bungee text-xl">HORÁRIO DE ATENDIMENTO</h4>
                  <p className="text-lg font-medium opacity-80">Terça a Domingo: 18h às 23:30h</p>
                  <p className="text-lg font-medium opacity-80 text-[#D64045] font-bold uppercase tracking-tight">Sexta e Sábado até 00:30h</p>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => window.open('https://maps.google.com', '_blank')}
                  className="bg-[#2D5A27] text-white px-8 py-4 rounded-2xl font-bungee text-lg shadow-xl hover:bg-[#1e3d1a] transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7l5-2.5 5.553 2.776a1 1 0 01.447.894v10.764a1 1 0 01-1.447.894L15 17l-6 3z" />
                  </svg>
                  ABRIR NO GOOGLE MAPS
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative p-4 bg-white rounded-[3rem] shadow-[0_30px_60px_rgba(45,90,39,0.15)] transition-transform duration-700 border-4 border-[#F4B41A]">
              <div className="overflow-hidden rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-1000">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197361313661!2d-46.658823923764!3d-23.56134916184841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da173297%3A0x62804f9f46487e50!2sAvenida%20Paulista!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Pizzaria Nostra"
                ></iframe>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F4B41A] rounded-full border-4 border-dashed border-[#2D5A27] flex items-center justify-center rotate-12 flex-col p-2 text-center shadow-lg">
                <span className="font-bungee text-[10px] text-[#2D5A27]">AUTÊNTICA</span>
                <span className="font-bungee text-sm text-[#2D5A27]">PIZZA</span>
                <span className="font-bungee text-[10px] text-[#2D5A27]">EST. 1999</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationMap;
