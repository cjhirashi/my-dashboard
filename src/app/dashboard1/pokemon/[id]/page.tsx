import { HeaderDashboardComponent } from "@/components/dashboard/Header";
import { Pokemon } from "@/pokemons";
import { PokemonInfoComponent } from '@/pokemons/components/PokemonInfo';
import { Metadata } from "next";
import { notFound } from "next/navigation";

const pageData = {
  name: 'Pokemon',
  description: 'Información de Pokemon',
  father: 'Pokemons',
  path: '/dashboard1/pokemons',
  dashboard: 'Dash-1'
}

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }:Props): Promise<Metadata> {

  try {
    const { id, name } = await getPokemon(params.id);
  
    return {
      title: `D1 | ${ name.toUpperCase() }`,
      description: `Página del pokémon ${ name }`
    }
    
  } catch (error) {
    return {
      title: 'Página del pokémon',
      description: 'Culpa cupidatat ipsum magna reprehenderit ex tempor sint ad minim reprehenderit consequat sit.'
    }
  }
}

const getPokemon = async(id: string): Promise<Pokemon> => {


  try {
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`,{
      cache: 'force-cache'// TODO: cambiar esto en un futuro
      // next: {
      //   revalidate: 60 * 60 * 30 * 6
      // }
    }).then( resp => resp.json() );
  
    return pokemon;
    
  } catch (error) {
    notFound();
  }

}

export default async function PokemonDash1Page({params}:Props) {

  const pokemon = await getPokemon(params.id);

  return (

    <>

      {/* Contenedor principal */}
      <div className={`flex flex-col h-full`}>

        {/* SECCION: Header */}
        <div className={`flex-none`}>

          <HeaderDashboardComponent {...pageData} />

        </div>

        {/* SECCION: Body */}
        <div className={`flex-1 flex flex-col text-neutral-400 items-center overflow-y-auto`}>

          <PokemonInfoComponent pokemon={pokemon} />

        </div>

        {/* SECCION: Footer */}
        <div className={`flex-none`}>



        </div>

      </div>

    </>
  );
}