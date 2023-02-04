import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import type { Gender } from "@prisma/client";

import Filters from "../components/Filters";
import Names from "../components/Names";

const Home: NextPage = () => {
  const [gender, setGender] = useState<Gender | null>(null);
  const [letter, setLetter] = useState<string | null>("Qualquer letra");

  return (
    <div>
      <Head>
        <title>Nome de bebê</title>
        <meta name="description" content="Escolha o nome do seu bebê" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="container mx-auto flex flex-col justify-center
      lg:flex-row lg:gap-32 lg:pt-16"
      >
        <div className="lg:basis-1/3">
          <Filters
            gender={gender}
            setGender={setGender}
            letter={letter}
            setLetter={setLetter}
          />
        </div>
        <div className="lg:basis-2/3">
          <Names gender={gender} letter={letter} />
        </div>
      </div>
    </div>
  );
};

export default Home;
