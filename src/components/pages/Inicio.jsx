import React from "react";
import './inicio.css';
import dogImg from '../../dog1.png';

export const Inicio = () => {
  return (
    <section className="bg-[#E84C3D] text-white relative overflow-hidden">

      <div className="relative w-full h-full">

        <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">

            <div className="animal-card">

              <div className="animal-info">
                <h1><strong>Nosso objetivo é mostrar a realidade dos animais e darmos um novo significado nas vida de cada um.</strong> </h1>
                <p><strong>Cada animal é encontrado pelo nosso time e catalogado aqui, para disponibilidade geral.</strong></p>

                <button className="contact-us-btn" onClick={() => window.location.href = '/contato'}>Entre em contato</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
