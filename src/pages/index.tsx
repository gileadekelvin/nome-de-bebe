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
      <div className="container mx-auto flex items-center justify-center gap-32 py-32 md:flex-row">
        <div className="basis-1/3">
          <Filters />
        </div>
        <div className="basis-2/3">
          <Names />
        </div>
      </div>
    </div>
  );
};

export default Home;
