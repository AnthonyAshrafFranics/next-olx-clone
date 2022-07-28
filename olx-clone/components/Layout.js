import Head from "next/head";
import React from "react";
import { Header } from "./Header";

export const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - olx" : "olx"}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>
          {" "}
          <Header />{" "}
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
      </div>
    </>
  );
};
