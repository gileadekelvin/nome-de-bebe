import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import bg from "../../public/star.jpeg";
import Navbar from "../components/Layout/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nome de bebê</title>
        <meta name="description" content="Escolha o nome do seu bebê" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex h-screen flex-col items-center justify-center">
        <div className="fixed z-[-1] h-screen w-screen overflow-hidden">
          <Image
            src={bg}
            alt="baby background"
            placeholder="blur"
            fill
            quality={100}
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="container z-10 flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            Nome de bebê
          </h1>
        </div>
      </main>
    </>
  );
};

export default Home;
