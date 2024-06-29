import React from 'react';
import './sobrenos.css';
import instagram from '../assets/instagram.png'
import email from '../assets/email.png'

function SobreNos() {
  return (
    <>
      <div className="title" >
        <a className="title" href="./">
        <h1>CAPS - Centro de Apoio Psicossocial</h1>

        </a>
      </div>
      <section className="about-us">
        <div className="container-titulo">
          <h1>Sobre Nós</h1>
          <br />
          <h3>Quem somos e nossos objetivos</h3>
        </div>

        <div className="apresentacao-1">
          <h1>Quem somos:</h1>
          <br />
          <p>
            Somos estudantes do 2º semestre de Análise de Desenvolvimento de
            Sistemas da FASIP dedicados a compartilhar a importância dos Centros
            de Atenção Psicossocial (CAPS). Nosso site visa informar sobre os
            serviços do CAPS, direitos dos usuários e como acessar o atendimento,
            promovendo a compreensão e empatia em relação à saúde mental.
          </p>
        </div>

        <div className="apresentacao-2">
          <h1>O que é Projeto Extensionista:</h1>
          <p className="about-text-2">
          O projeto de extensionista na Fasipe tem como objetivo contribuir para a comunidade por meio de iniciativas relacionadas à tecnologia. Divulgando serviços públicos, compartilhando informações e desenvolvendo novas ideias com o intuito de melhorar a qualidade de vida da população e promover a inclusão digital.
          </p>
        </div>
        <br />

        <div className="apresentacao-3">
          <h1>Nossos Objetivos:</h1>
          <br />
          <p className="about-text-3">
            O objetivo do site é oferecer informações sobre CAPS, seus serviços e
            direitos dos usuários, além de orientar sobre como acessar atendimento.
            A intenção é disseminar conhecimento sobre saúde mental, combater
            estigmas e promover empatia em relação às questões psicossociais.
          </p>
        </div>

        <div className="apresentacao-4">
          <h1 className="about-caps">Sobre o CAPS:</h1>
          <p className="about-text-4">
            O CAPS é crucial para cuidar da saúde mental na comunidade, oferecendo
            atendimento completo e humano para desafios emocionais. Vai além do
            tratamento, incluindo inclusão social, fortalecimento de vínculos
            familiares e autonomia dos usuários.
          </p>
        </div>
      </section>
      <div className="rodape">
        <div className="margem-rodape">
          <br />
          <div className="rodape-sobre-nos">
            <h2>SOBRE NÓS</h2>
            <ul>
              <li>
                Somos uma equipe dedicada em contribuir e informar a população,
                sobre o CAPS, uma instituição que ajuda a população menos
                privilegiada a ter acesso a atendimento psicologico.
              </li>
            </ul>
          </div>
          <div className="rodape-contatos">
            <h2>CONTATOS</h2>
            <ul>
              <li>
                <a href="https://www.instagram.com/fasipe_grupo_caps/">
                  Nosso instagram
                  <img src={instagram} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.gmail.com">
                  Nosso email
                  <img src={email} alt="Email" />
                </a>
              </li>
            </ul>
          </div>
          <div className="rodape-nossa-equipe">
            <h2>NOSSA EQUIPE</h2>
            <ul>
              <li>José Fernando</li>
              <li>Ana Luiza</li>
              <li>Luis Eduardo</li>
              <li>Caio Augusto</li>
              <li>Lucas</li>
              <li>Gustavo Waltric</li>
              <li>Gustavo Felipe</li>
              <li>Wagner Franco</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default SobreNos;
