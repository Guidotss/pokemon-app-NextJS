import { NextPage,GetStaticProps } from "next";
import { Button, Text } from '@nextui-org/react'; 
import { Layout } from '../components/layouts'
import { pokeApi } from '../api';
import { PokemonListResponse } from "../interfaces";
import { SmallPokemon } from '../interfaces/pokemon-list';
import Image from "next/image";


interface Props{
  pokemons: SmallPokemon[]; 
}

const HomePage:NextPage<Props> = ({ pokemons }) =>{
  
  
  return(
    <Layout title="Listado de Pokemons">
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
        {
          pokemons.map(pokemon => (
             <div key={pokemon.id}>
                <Image src={pokemon.img} alt={pokemon.name} width={100} height={100} />
                <Text h2>{pokemon.id}# {pokemon.name}</Text>
             </div>
          ))
        }
      </div>
      
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
