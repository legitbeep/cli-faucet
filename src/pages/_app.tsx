import { useState } from "react";
import Head from "next/head";
import Router from "next/router";
import type { AppProps } from "next/app";
// import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import NProgress from "nprogress";
import "@fontsource/poppins";

import defaultSeoConfig from "../../next-seo.config";
import Layout from "components/layout";
import Web3ContextProvider from 'context';

import "nprogress/nprogress.css";
import "styles/globals.css";

// show spinner while route is loading
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

NProgress.configure({ showSpinner: false });

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, maximum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <ThemeProvider defaultTheme="system" attribute="class">
        <DefaultSeo {...defaultSeoConfig} />
        {/* <SessionProvider> */}
        <Web3ContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Web3ContextProvider>
        {/* </SessionProvider> */}
      </ThemeProvider>
    </>
  );
};

export default MyApp;
