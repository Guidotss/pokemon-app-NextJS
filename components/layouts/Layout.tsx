import React,{ FC } from 'react';
import Head from "next/head"
import { Navbar } from '../ui';
import { useRouter } from 'next/router';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}


const origin = (typeof window === 'undefined') ? '': window.location.origin;

export const Layout:FC<LayoutProps> = ({ children, title }) => {


  return (
    <>

        <Head>

            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="Guido Olguin"/>
            <meta name="description" content={`Informacion sobre el pokemon ${ title }`}/>
            <meta name="keywords" content={`${ title },pokemon, pokedex, pokemon app`}/>
            <meta property="og:title" content={`Infomacion sobre  ${ title }`} />
            <meta property="og:description" content={`Esta es la pagina sobre el pokemon ${ title }`} />
            <meta property="og:image" content={`${origin}/images/banner.png`} />

        </Head>

        <Navbar/>

        <main style={{
          padding: '0px 20px'
        }} >
            { children }
        </main>

    </>
  )
}