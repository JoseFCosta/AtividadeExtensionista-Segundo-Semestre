import "./blog.css";
import blog8 from "../assets/blogs/blog8.webp";

function Blog8() {
  return (
    <>
      <head></head>
      <header>
        <div className="rodape_blog">
          <div className="home">
            <a href="index.html">CAPS - Centro de Apoio Psicossocial</a>
          </div>
        </div>
      </header>
      <div className="titulo">
        <h1>Cyberbullying</h1>
      </div>
      <div className="imagem">
        <img src={blog8} />
      </div>
      <div className="bloco1">
        <div className="subtitulo">
          <h2>Como a Tecnologia Está Transformando o Comportamento Social</h2>
        </div>
        <div className="conteudo">
          <p>
            A tecnologia está moldando o comportamento social de maneiras
            profundas e inesperadas. Com a ascensão das redes sociais,
            aplicativos de mensagens e plataformas digitais, estamos mais
            conectados do que nunca, podendo manter contato com amigos e
            familiares em qualquer lugar do mundo. No entanto, essa
            conectividade também traz desafios novos. A dependência da
            comunicação virtual pode reduzir a qualidade das interações face a
            face e criar uma sensação de isolamento, apesar de estarmos
            constantemente online. A tecnologia facilita a comunicação, mas
            também pode mudar como nos relacionamos e como percebemos a nós
            mesmos e aos outros.
          </p>
        </div>
      </div>
      <div className="bloco2">
        <div className="subtitulo">
          <h2>Efeitos da Tecnologia na Saúde Mental</h2>
        </div>
        <div className="conteudo">
          <p>
            Os impactos da tecnologia na saúde mental são complexos e
            multifacetados. Por um lado, a tecnologia oferece acesso a
            informações, apoio e recursos que podem ser benéficos. Por outro
            lado, o uso excessivo pode levar a problemas como ansiedade e
            depressão. A pressão para estar sempre disponível, a comparação
            constante com os outros nas redes sociais e a exposição a notícias
            negativas podem desgastar nosso bem-estar emocional. Além disso, a
            presença de cyberbullying e invasão de privacidade são preocupações
            sérias que afetam a saúde mental de muitos usuários, especialmente
            os mais jovens.
          </p>
        </div>
      </div>
      <div className="bloco3">
        <div className="subtitulo">
          <h2>Mudanças nas Dinâmicas de Relacionamento</h2>
        </div>
        <div className="conteudo">
          <p>
            A tecnologia tem mudado as dinâmicas dos relacionamentos, tanto
            positivos quanto negativos. Por um lado, facilita a manutenção de
            conexões com amigos e familiares distantes, permitindo comunicação
            rápida e eficiente. Por outro lado, a comunicação mediada por telas
            pode ser superficial e impedir o desenvolvimento de laços profundos.
            A dependência de aplicativos de namoro e redes sociais para formar e
            manter relacionamentos pode influenciar a forma como as pessoas
            percebem e valorizam as interações humanas, potencialmente levando a
            relacionamentos menos satisfatórios e duradouros.
          </p>
        </div>
      </div>
      <div className="bloco4">
        <div className="subtitulo">
          <h2>Construção de Ambientes Seguros e Inclusivos</h2>
        </div>
        <div className="conteudo">
          <p>
            As relações interpessoais também estão sendo transformadas pela
            tecnologia. Enquanto as plataformas digitais facilitam a conexão com
            amigos e familiares distantes, essas interações podem ser menos
            profundas do que os encontros pessoais. A dependência de aplicativos
            de namoro e redes sociais para formar e manter relacionamentos pode
            alterar a forma como percebemos e valorizamos essas conexões. Em
            muitos casos, a comunicação mediada por tecnologia pode levar a
            mal-entendidos e diminuir a qualidade das relações humanas,
            resultando em uma sensação de conexão superficial.
          </p>
        </div>
      </div>
    </>
  );
}

export default Blog8;
