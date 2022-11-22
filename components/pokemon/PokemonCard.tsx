import { Card, Grid, Row, Text } from '@nextui-org/react';
import { FC } from 'react';
import { SmallPokemon } from '../../interfaces'; 


interface Props{
    pokemon: SmallPokemon;
}

export const PokemonCard:FC<Props> = ({ pokemon }) => {
  return (
            <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
                    <Card hoverable clickable>
                        <Card.Body css={{p:1}}>
                        <Card.Image
                            src={pokemon.img}
                            width="100%"
                            height="140px"
                        />
                        </Card.Body>
                        <Card.Footer>
                            <Row justify="space-between">
                                <Text transform="capitalize" h5>{pokemon.name}</Text>
                                <Text h5>{pokemon.id}</Text>
                            </Row>
                        </Card.Footer>
                    </Card>
            </Grid>
        )
}