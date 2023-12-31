import { Grid, Card } from "@nextui-org/react"
import { FC } from "react"
import { FavoriteCardPokemon } from "."

interface Props {
    pokemons: number[]
}

export const FavoritePokemons: FC<Props> = ({pokemons}: Props) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
      {
        pokemons.map(id => (
            <FavoriteCardPokemon key={id} id={id}/>
        ))
      }
    </Grid.Container>
  )
}
