import { NextPage} from "next"
import { useEffect, useState } from "react";

import { Card, Grid } from "@nextui-org/react";

import { Layout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui/NoFavorites";
import { localFavorites } from "@/utils";
import { FavoritePokemons } from "@/components/ui";

const FavoritesPage: NextPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, [])
  

  return (
    <Layout title="Pokémons - Favoritos">
      {
        favoritePokemons.length === 0
          ? <NoFavorites/>
          : (
            <FavoritePokemons pokemons={favoritePokemons}/>
          )
      }
        
    </Layout>
  )
}

export default FavoritesPage;