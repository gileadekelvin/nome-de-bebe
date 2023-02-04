import { type NextPage } from "next";
import Head from "next/head";

import Filters from "../components/Filters";
import Names from "../components/Names";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nome de bebê</title>
        <meta name="description" content="Escolha o nome do seu bebê" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="container mx-auto flex flex-col items-center justify-center
      gap-32 md:flex-row md:py-32"
      >
        <div className="md:basis-1/3">
          <Filters />
        </div>
        <div className="md:basis-2/3">
          <Names />
        </div>
      </div>
    </div>
  );
};

export default Home;
