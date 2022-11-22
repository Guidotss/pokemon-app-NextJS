import React,{ FC } from 'react';

import Head from "next/head"

export const Layout:FC<{children:React.ReactNode}> = ({ children }) => {
  return (
    <>

        <Head>
            <title>Pokemon App</title>
            <meta name="author" content="Guido Olguin"/>
            <meta name="description" content="Informacion sobre el pokemon XXXX"/>
            <meta name="keywords" content="XXX,pokemon, pokedex, pokemon app"/>
        </Head>

        {/* Navbar */}

        <main>
            { children }
        </main>

    </>
  )
}