import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

import { api } from "../utils/api";

import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={(montserrat.className, "min-h-screen bg-[#fafafa]")}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
