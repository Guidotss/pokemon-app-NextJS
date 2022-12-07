import { NextPage,GetStaticProps } from "next";
import { Button, Card, Grid, Row, Text } from '@nextui-org/react'; 
import { Layout } from '../components/layouts'
import { pokeApi } from '../api';
import { PokemonListResponse } from "../interfaces";
import { SmallPokemon } from '../interfaces/pokemon-list';
import Image from "next/image";
import { PokemonCard } from "../components/pokemon";


interface Props{
  pokemons: SmallPokemon[]; 
}

const HomePage:NextPage<Props> = ({ pokemons }) =>{
  console.log(pokemons);
  
  
  
  return(
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify='flex-start'>
      </Grid.Container>
      
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) =>{

  /* const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151'); 
  const dataJSON = await data.json();
  console.log(dataJSON); */


  const { data } = await pokeApi.get<PokemonListResponse>('pokemon?limit=1');
  console.log(data);
  

  return {
    props: {
      pokemons: []
    }
  }
}

export default HomePage; 
