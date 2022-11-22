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
  
  
  return(
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map(pokemon => (
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>
          ))
        }
      </Grid.Container>
      
    </Layout>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151'); 
  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
      const id = index + 1;
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return { 
        ...pokemon, id, img
      }
  });
  

  


  

  
  

  
  return {
    props: {
      pokemons
    }
  }
}

export default HomePage; 
