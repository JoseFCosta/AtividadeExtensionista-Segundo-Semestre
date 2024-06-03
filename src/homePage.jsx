import { useState } from 'react'
import banned from './assets/banned2.png'
import imagemInicio from './assets/Imagem2.svg'
import instagram from './assets/instagram.png'
import email from './assets/email.png'
import "./index.css"

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
      <br />
      <br />
      <h1>Titulo inicial</h1>
      <br />
      <h3>Ainda não sei se vou deixar isso aqui</h3>
    </div>

    <div className="container">
      <table>
        <tbody>
            
        <tr>
          <td className="td-direita">
            <div className="apresentacao">
              <h1>O que são os CAPS?</h1>
              <br />
              <p>
                Os Centros de Apoio Psicossocial (CAPS) desempenham um papel
                crucial na promoção da saúde mental e no suporte às comunidades.
                Eles são fundamentais para a desinstitucionalização do
                tratamento psiquiátrico, oferecendo uma alternativa ao
                internamento hospitalar. Os CAPS proporcionam um ambiente
                acolhedor e humanizado, onde os pacientes podem receber
                tratamento contínuo e integrado. Além disso, os CAPS trabalham
                para combater o estigma associado às doenças mentais, promovendo
                a inclusão social e o fortalecimento dos vínculos familiares e
                comunitários
              </p>
              <br />
              <h1>E qual é a sua importância?</h1>
              <br />
              <p>
                Os Centros de Apoio Psicossocial (CAPS) desempenham um papel
                crucial na promoção da saúde mental e no suporte às comunidades.
                Eles são fundamentais para a desinstitucionalização do
                tratamento psiquiátrico, oferecendo uma alternativa ao
                internamento hospitalar. Os CAPS proporcionam um ambiente
                acolhedor e humanizado, onde os pacientes podem receber
                tratamento contínuo e integrado. Além disso, os CAPS trabalham
                para combater o estigma associado às doenças mentais, promovendo
                a inclusão social e o fortalecimento dos vínculos familiares e
                comunitários
              </p>
              <br />
            </div>
          </td>
          <td className="td-esquerda"><img src={imagemInicio} /></td>
        </tr>
        </tbody>
      </table>
      <br />
      <br />
    </div>
    <div className="container-titulo">
      <h1>Blogs</h1>
      <br />
      <h3>Falta escrever algum texto maneiro aqui</h3>
      <br />
      <br />
    </div>
    <div className="container-blog">
      <div className="margem-blog">
        <div className="menu-opcoes">
          <div className="blog-item">
            <a href="blogalcoolismo">
              <img src={banned} />
              <p>ALCOLISMO</p>
            </a>
          </div>
          <div className="blog-item">
            <a href="blogalcoolismo">
              <img src={banned} />
              <p>ALCOLISMO</p>
            </a>
          </div>
          <div className="blog-item">
            <a href="blogalcoolismo">
              <img src={banned} />
              <p>ALCOLISMO</p>
            </a>
          </div>
          <div className="blog-item">
            <a href="blogalcoolismo">
              <img src={banned} />
              <p>ALCOLISMO</p>
            </a>
          </div>
          <div className="blog-item">
            <a href="blogalcoolismo">
              <img src={banned} />
              <p>ALCOLISMO</p>
            </a>
          </div>
          <div className="blog-item">
            <a href="blogalcoolismo">
              <img src={banned} />
              <p>ALCOLISMO</p>
            </a>
          </div>
          <div className="blog-item">
            <a href="blogalcoolismo">
              <img src={banned} />
              <p>ALCOLISMO</p>
            </a>
          </div>
          <div className="blog-item">
            <a href="blogalcoolismo">
              <img src={banned} />
              <p>ALCOLISMO</p>
            </a>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>

    <div className="container-titulo">
      <h1>Endereços</h1>
      <br />
      <h3>
        Clicando nos icones você poderá ver mais informações sobre cada
        instalção??
      </h3>
      <br />
      <br />
    </div>

 
    <div className="rodape">
      <div className="margem-rodape">
        <br />
        <div className="rodape-sobre-nos">
          <h2>SOBRE NÓS</h2>
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
                Nosso instagram<img src={instagram}
              /></a>
            </li>
            <li>
              <a href="https://www.gmail.com">
                Nosso email<img src={email}
              /></a>
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
  )
}

export default HomePage
