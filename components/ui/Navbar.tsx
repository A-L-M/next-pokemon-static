import { Spacer, Text, useTheme, Link as NextUiLink } from "@nextui-org/react"

import Image from 'next/image';

export const Navbar = () => {

  const {theme} = useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        backgroundColor: theme?.colors.gray900.value,
    }}>
      <Image 
        src ="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Icono de la app"
        width={70}
        height={70}/>
      <NextUiLink href="/">
        <Text color="white" h2>P</Text>
        <Text color="white" h3>okémon</Text>
      </NextUiLink>
      <Spacer css={{flex: 1}}/>
      <NextUiLink href='/favorites' css={{marginRight:'10px'}}>
        <Text color="white" h3>Favoritos</Text>
      </NextUiLink>
    </div>
  )
}
