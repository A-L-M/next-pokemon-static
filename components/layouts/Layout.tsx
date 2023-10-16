import Head from "next/head"
import { Navbar } from "../ui"

interface LayoutProps {
  children: JSX.Element,
  title: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout = ({children, title}: LayoutProps) => {
  
  return (
    <>
        <Head>
            <title>{title ?? 'Pokemon App'}</title>
            <meta name="author" content="Andres Lopez"/>
            <meta name="description" content={`Información sobre el pokémon ${title}`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>

            <meta property="og:title" content={`Información sobre ${title}`}></meta>
            <meta property="og:description" content={`Esta es la página sobre ${title}`}></meta>
            <meta property="og:image" content={`${origin}/img/banner.jpg`}></meta>
        </Head>

        <Navbar/>

        <main style={{
          padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
