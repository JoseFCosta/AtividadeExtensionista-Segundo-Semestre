import { useState } from "react";

import "./homePage.css";

import alcolismo from "../assets/homePage/icons/banned.png";
import bullying from "../assets/homePage/icons/bullying.png";
import cyberbullying from "../assets/homePage/icons/cyberbullying.png";
import desigualdade_social from "../assets/homePage/icons/desigualdade_social.png";
import discriminacao from "../assets/homePage/icons/discriminacao.png";
import exercicio from "../assets/homePage/icons/exercicio.png";
import humanizacao from "../assets/homePage/icons/humanizacao.png";
import trauma from "../assets/homePage/icons/trauma.png";


import imagemInicio from "../assets/homePage/Imagem2.svg";
import imagemInicio2 from "../assets/homePage/grupo_de_pessoas.png";
import mulher_falando from "../assets/homePage/mulher_falando.png";

import instagram from "../assets/instagram.png";
import email from "../assets/email.png";

function HomePage() {
  return (
    <>
      <div className="menu">
        <ul>
          <li>
            <a src="/">
              <b>CAPS - Centro de Apoio Psicossocial</b>
            </a>
          </li>
        </ul>
      </div>
      <div className="container-titulo">
        <h1>CAPS - O que é isso? </h1>
        <br />
      </div>

      <div className="container">
        <table>
          <tbody>
            <tr>
              <td className="td-direita">
                <div className="apresentacao">
                  <h1>Basicamente...</h1>
                  <br />
                  <p>
                    O Centro de Atenção Psicossocial (CAPS) é uma unidade de
                    saúde pública destinada ao atendimento de pessoas com
                    transtornos mentais e necessidades de acompanhamento
                    psicossocial. Os CAPS fazem parte do Sistema Único de Saúde
                    (SUS) e têm como objetivo proporcionar cuidado contínuo,
                    promover a reabilitação psicossocial e evitar internações
                    hospitalares desnecessárias. Eles oferecem serviços que
                    incluem consultas psiquiátricas, atendimento psicológico,
                    atividades terapêuticas, oficinas de trabalho e exercicios
                    em grupo. O CAPS atende tanto pessoas com transtornos
                    mentais graves e persistentes quanto aquelas que necessitam
                    de acompanhamento regular, como consultas mensais com
                    psicólogos, sem estarem em situação de extremo risco.
                  </p>
                </div>
              </td>
              <td className="td-esquerda">
                <img src={imagemInicio2} />
              </td>
            </tr>
            <td className="td-direita">
              <img src={imagemInicio} />
            </td>
            <td className="td-esquerda">
              <div className="apresentacao-y">
                <h1>E por que é importante?</h1>
                <br />
                <p>
                  O CAPS é fundamental para a comunidade, pois oferece suporte
                  essencial para pessoas com transtornos mentais, ajudando a
                  melhorar a qualidade de vida desses indivíduos e de suas
                  famílias. Os CAPS promovem a inclusão social e a cidadania,
                  oferecendo um espaço de acolhimento e tratamento humanizado.
                  Eles são importantes porque evitam a institucionalização,
                  permitindo que os pacientes permaneçam em suas comunidades, e
                  proporcionam atendimento multidisciplinar, garantindo uma
                  abordagem abrangente para o tratamento de transtornos mentais.
                </p>
              </div>
            </td>
            <tr>
              <td className="td-direita">
                <div className="apresentacao-r">
                  <h1>E como surgiu isso ai?</h1>
                  <br />
                  <p>
                    O CAPS surgiu como parte da reforma psiquiátrica no Brasil,
                    que foi impulsionada após a criação do SUS em 1988. Essa
                    reforma visava substituir o modelo manicomial por um modelo
                    de cuidado mais humanizado e inclusivo. A partir dos anos
                    1990, houve um movimento para desinstitucionalizar o
                    atendimento psiquiátrico, promovendo a criação de serviços
                    comunitários de saúde mental, como os CAPS. Essa mudança foi
                    motivada pela necessidade de tratar pacientes com respeito e
                    dignidade, focando na reabilitação psicossocial e na
                    reintegração dos indivíduos na sociedade
                  </p>
                  <br />
                </div>
              </td>
              <td className="td-esquerda">
                <img src={mulher_falando} />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
      </div>
      <div className="container-titulo">
        <h1>Blogs</h1>
        <br />
        <h3>Outros assuntos importantes e aprofundamento sobre os temas</h3>
        <br />
        <br />
      </div>
      <div className="container-blog">
        <div className="margem-blog">
          <div className="menu-opcoes">
            <div className="blog-item">
              <a href="blog1">
                <img src={bullying} />
                <p>Bullying</p>
              </a>
            </div>
            <div className="blog-item">
              <a href="blog2">
                <img src={alcolismo} />
                <p>Alcolismo</p>
              </a>
            </div>
            <div className="blog-item">
              <a href="blog3">
                <img src={exercicio} />
                <p>Exercicio</p>
              </a>
            </div>
            <div className="blog-item">
              <a href="blog4">
                <img src={humanizacao} />
                <p>Humanizacao</p>
              </a>
            </div>
            <div className="blog-item">
              <a href="blog5">
                <img src={trauma} />
                <p>Trauma</p>
              </a>
            </div>
            <div className="blog-item">
              <a href="blog6">
                <img src={discriminacao} />
                <p>Discriminação</p>
              </a>
            </div>
            <div className="blog-item">
              <a href="blog7">
                <img src={desigualdade_social} />
                <p>Desigualdade</p>
              </a>
            </div>
            <div className="blog-item">
              <a href="blog8">
                <img src={cyberbullying} />
                <p>CyberBullying</p>
              </a>
            </div>
          </div>
          <br />
          <br />
        </div>
      </div>

      <div className="container-titulo">
        <h1>Endereço e Contato</h1>
        <br />
        <h3>
          Clique no botão e confira os endereços e mais informações dos CAPS na
          região de Cuiabá
        </h3>
        <br />
      </div>
      <div className="endereco-item">
        <a href="/localizacao">
          <h2>CLIQUE AQUI E VERIFIQUE OS ENDERECOS</h2>
        </a>
      </div>
      <br />
      <br />
      <br />
      <div className="rodape">
        <div className="margem-rodape">
          <br />
          <div className="rodape-sobre-nos">
            <a href="sobrenos">
              <h2>SOBRE NÓS</h2>
            </a>
            <ul>
              <li>
                Somos uma equipe dedicada em contribuir e informar a população,
                sobre o CAPS, uma instituição que ajuda a população menos
                privilegiada a ter acesso a atendimento psicologico
              </li>
            </ul>
          </div>
          <div className="rodape-contatos">
            <h2>CONTATOS</h2>
            <ul>
              <li>
                <a href="https://www.instagram.com/fasipe_grupo_caps/">
                  Nosso instagram
                  <img src={instagram} />
                </a>
              </li>
              <li>
                <a href="https://www.gmail.com">
                  Nosso email
                  <img src={email} />
                </a>
              </li>
            </ul>
          </div>
          <div className="rodape-nossa-equipe">
            <h2>NOSSA EQUIPE</h2>
            <ul>
              <li>José Fernando</li>
              <li>Ana Sobrenome</li>
              <li>Luis Sobrenome</li>
              <li>Caio Sobrenome</li>
              <li>Lucas Gustavo</li>
              <li>Gustavo Waltric</li>
              <li>Mais Gustavo</li>
              <li>Gustavo 4</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
