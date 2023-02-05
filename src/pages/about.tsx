import { type NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sobre</title>
        <meta name="description" content="Sobre o site Nome de Bebê" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto mt-8 flex max-w-4xl flex-col justify-center px-8">
        <h1 className="text-5xl">Sobre</h1>
        <section className="mt-8 flex flex-col gap-2">
          <p>
            Esse projeto busca auxiliar a busca de nomes mais comuns no Brasil
            para futuras mamães e papais.
          </p>
          <p>
            Minha inspiração para fazer esse projeto veio dos meus filhos Pedro
            e Joaquim &#128155;.
          </p>
        </section>
        <section className="mt-8 flex flex-col gap-2">
          <h2 className="text-2xl">Sobre os dados</h2>
          <p>
            Os dados foram extraídos do{" "}
            <a
              href="https://brasil.io/dataset/genero-nomes/nomes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600"
            >
              Brasil.io
            </a>{" "}
            e se referem a classificação de gênero em nomes brasileiros, com
            base em dados do CENSO de 2010.
          </p>
        </section>
        <section className="mt-8 flex flex-col gap-2">
          <h2 className="text-2xl">Sobre o código</h2>
          <p>
            Todo o código está presente no{" "}
            <a
              href="https://github.com/gileadekelvin/nome-de-bebe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600"
            >
              github
            </a>
            . Sinta-se a vontade para contribuir!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
