import "./localizacao.css";
import CAPSI from '../assets/localizacao/capsiv.png'

import CAPSII from '../assets/localizacao/capsii.png'

import CAPSIII from '../assets/localizacao/capsadolescer.png'

import CAPSAD from '../assets/localizacao/capsad.png'

import CAPS from '../assets/localizacao/caps.png'

import instagram from "../assets/instagram.png";
import email from "../assets/email.png";


function Localizacao() {
  return (
    <>
      <div className="title">
        <a className="title" href="./">
          <h1>CAPS - Centro de Apoio Psicossocial</h1>
        </a>
      </div>
      <div className="container-titulo">
        <h1>ENDEREÇOS</h1>
        <br />
        <h3>Aqui estão os endereços do CAPS na região de Cuiabá-MT</h3>
        <br />
        <br />
        </div>
      <table>
        <tr>
          <td className="table-imagem">
            <img src={CAPSI} />
          </td>
          <td className="table-texto">
            <div className="box">
              <h1>NOME: CAPS I</h1>
              <br />
              ENDERECO: RUA 82 - Morada da Serra, Cuiaba-MT
              <br />
              CEP:78052-530
            </div>
          </td>
        </tr>

        <tr>
          <td className="table-texto2">
            <div className="box2">
              NOME: CAPS II
              <br />
              <br />
              ENDERECO: RUA MAURICIO CARDOSO, 735, CIDADE ALTA, CUIABA-MT
              <br />
              <br />
              CEP: 78030-425
            </div>
          </td>
          <td className="table-imagem2">
            <img src={CAPSII} />
          </td>
        </tr>

        <tr>
          <td className="table-imagem3">
            <img src={CAPSAD} />
          </td>
          <td className="table-texto3">
            <div className="box3">
              NOME: CAPS AD INFANTO JUVENIL
              <br />
              <br />
              ENDERECO: RUA ROMÊNIA, JARDIM EUROPA, CUIABA-MT
              <br />
              <br />
              CEP: 78065-395
            </div>
          </td>
        </tr>

        <tr>
          <td className="table-texto4">
            <div className="box4">
              NOME: CAPSIII ADOLESCER
              <br />
              <br />
              ENDERECO: RUA CEILÃO, 304, JARDIM SHANGRI-LÁ, CUIABA-MT
              <br />
              <br />
              CEP: 78070-150
            </div>
          </td>
          <td className="table-imagem4">
            <img src={CAPSIII} />
          </td>
        </tr>

        <tr>
          <td className="table-imagem5">
            <img src={CAPS} />
          </td>
          <td className="table-texto5">
            <div className="box5">
              NOME: CAPS
              <br />
              <br />
              ENDERECO: RUA ADAUTLO BOTELHO - COOPHEMA, CUIABA-MT
              <br />
              <br />
              CEP: 78085-200
              <br />
           
            </div>
          </td>
        </tr>
      </table>
      <br/>
      <br/>
      <br/>
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
              <li>Ana Luisa</li>
              <li>Luis Eduardo</li>
              <li>Caio Augusto</li>
              <li>Lucas Martins</li>
              <li>Gustavo Waltrick</li>
              <li>Gustavo Felipe</li>
              <li>Wagner Franco</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Localizacao;