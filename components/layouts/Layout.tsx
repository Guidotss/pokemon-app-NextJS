import React,{ FC } from 'react';
import Head from "next/head"
import { Navbar } from '../ui';

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

export const Layout:FC<LayoutProps> = ({ children, title }) => {
  return (
    <>

        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name="author" content="Guido Olguin"/>
            <meta name="description" content={`Informacion sobre el pokemon ${ title }`}/>
            <meta name="keywords" content={`${ title },pokemon, pokedex, pokemon app`}/>
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