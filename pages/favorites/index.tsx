import { useEffect, useState } from 'react';
import { Text, Container, Image, Grid, Card } from '@nextui-org/react';
import { NextPage } from "next"
import { Layout } from "../../components/layouts"
import { NoFavorites } from '../../components/ui/NoFavorites';
import { localFavorites } from '../../utils';
import { FavoritesListPokemons } from '../../components/pokemon';

const Favorites: NextPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([])
  
  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons()); 
  },[]); 
  
  
  
  return (
    <Layout>
      {
        favoritesPokemons.length === 0 
        ? (<NoFavorites/>)
        : (
            <Grid.Container gap={2} direction='row' justify='flex-start'>
              <FavoritesListPokemons FavoritesListId={favoritesPokemons}/>
            </Grid.Container>
          )

      }
    </Layout>
  )
}

export default Favorites