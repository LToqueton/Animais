import React from 'react';
import './contato.css';

export const Contato = () => {
  return (
    <section className="contato-section">
      <h2>Gostou de algum animal?</h2>
      <p className="contato-desc">
        Tem dúvidas, sugestões ou quer adotar um amigo? Preencha o formulário abaixo ou fale conosco pelo WhatsApp!
      </p>
      <form className="contato-form">
        <input type="text" placeholder="Seu nome" required />
        <input type="email" placeholder="Seu e-mail" required />
        <textarea placeholder="Sua mensagem" rows={5} required />
        <button type="submit">Enviar</button>
      </form>
      <div className="contato-extra">
        <span>Ou fale direto pelo WhatsApp:</span>
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="contato-whatsapp"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
};
