import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import Filters from "../components/Filters";
import Names from "../components/Names";

const Home: NextPage = () => {
  const [gender, setGender] = useState<string | null>(null);
  const [letter, setLetter] = useState<string | null>("Qualquer letra");
  const [query, setQuery] = useState<string | null>("");

  return (
    <div>
      <Head>
        <title>Nome do bebê</title>
        <meta name="description" content="Escolha o nome do seu bebê" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="container mx-auto flex flex-col justify-center
      lg:flex-row lg:gap-8 lg:pt-4"
      >
        <div className="lg:basis-1/3">
          <Filters
            gender={gender}
            setGender={setGender}
            letter={letter}
            setLetter={setLetter}
            setQuery={setQuery}
          />
        </div>
        <div className="px-4 lg:basis-2/3 lg:px-8">
          <Names gender={gender} letter={letter} query={query} />
        </div>
      </div>
    </div>
  );
};

export default Home;
