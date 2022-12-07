import { FC } from "react"
import { FavoritesCardPokemon } from "./FavoritesCardPokemon"



interface Props {
    FavoritesListId:number[]
}


export const FavoritesListPokemons:FC<Props> = ({FavoritesListId}) => {
    return(
       <>
         {
            FavoritesListId.map(pokemonId => (
                <FavoritesCardPokemon key={pokemonId} pokemonId={pokemonId}/>
            ))
         }
       </>
    )
}