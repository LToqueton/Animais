import React from 'react'
import './adotar.css';

export const QueroAdotar = () => {
  return (
    <section className="new-animals">
      <h3>Novos amigos disponíveis</h3>
      <p>
        Esses animais estão aguardando para receber cuidado e encontrar um novo lar. Confira e venha conhecer!
      </p>

      <div className="animal-card">
        <img src="Animais/dog1.jpg" alt="Cachorro" />
        <div className="animal-info">
          <p><strong>Nome:</strong> Bidu</p>
          <p><strong>Situação:</strong> Animal SRD, sem apresentar comportamentos raivosos e sem machucados aparentes.</p>
          <p><strong>Local onde foi encontrado:</strong> Av. Francisco Rodrigues Filho, Mogi Das Cruzes.</p>
          <button className="contact-us-btn" onClick={() => window.location.href = '/contato'}>Entre em Contato</button>
        </div>
      </div>

      <div className="animal-card">
        <img src="Animais/dog2.jpeg" alt="Cachorro" />
        <div className="animal-info">
          <p><strong>Nome:</strong> Zeus</p>
          <p><strong>Situação:</strong> Animal SRD, apresentando comportamento raivoso e pata traseira esquerda machucada.</p>
          <p><strong>Local onde foi encontrado:</strong> Av. José Maria de Albuquerque Freitas, Mogi Das Cruzes.</p>
          <button className="contact-us-btn" onClick={() => window.location.href = '/contato'}>Entre em Contato</button>
        </div>
      </div>

      <div className="animal-card">
        <img src="Animais/dog3.jpeg" alt="Cachorro" />
        <div className="animal-info">
          <p><strong>Nome:</strong> Caramelo</p>
          <p><strong>Situação:</strong> Animal SRD, muito dócil e sem machucados aparentes.</p>
          <p><strong>Local onde foi encontrado:</strong> R. Joaquina Maria de Jesus, Mogi Das Cruzes.</p>
          <button className="contact-us-btn" onClick={() => window.location.href = '/contato'}>Entre em Contato</button>
        </div>
      </div>

      <div className="animal-card">
        <img src="Animais/dog4.jpeg" alt="Cachorro" />
        <div className="animal-info">
          <p><strong>Nome:</strong> Otávio</p>
          <p><strong>Situação:</strong> Animal SRD, amigável, porém necessita de alimentação e água.</p>
          <p><strong>Local onde foi encontrado:</strong> Av. Dr. Cândido X. de Almeida e Souza, Mogi Das Cruzes.</p>
          <button className="contact-us-btn" onClick={() => window.location.href = '/contato'}>Entre em Contato</button>
        </div>
      </div>

      <div className="animal-card">
        <img src="Animais/cat1.jpeg" alt="Gato" />
        <div className="animal-info">
          <p><strong>Nome:</strong> Não definido</p>
          <p><strong>Situação:</strong> Sexo desconhecido, animal arisco e sem machucados aparentes.</p>
          <p><strong>Local onde foi encontrado:</strong> R. Antônio Cândido Viêira, Mogi Das Cruzes.</p>
          <button className="contact-us-btn" onClick={() => window.location.href = '/contato'}>Entre em Contato</button>
        </div>
      </div>
    </section>
  )
}
