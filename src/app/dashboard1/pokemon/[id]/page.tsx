import { DashbordHeader, FooterDashboardComponent } from '@/components/dashboard'
import { Pokemon } from '@/pokemons';
import { PokemonInfoComponent } from '@/pokemons/components/PokemonInfo';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const dashboardName = 'Dashboar1'

const encabezado = {
  titulo: 'Pokemons',
  subtitulo: '/Pokemon',
  description: 'Página, detalles sobre Pokemon seleccionado',
}

interface Props {
  params: { id: string };
}

export async function generateMetadata({params}:Props): Promise<Metadata> {

  try {
    
    const { id, name } = await getPokemon(params.id);
  
    return {
      title: `DP1 - ${id} - ${name.toUpperCase()}`,
      description: `Información de Pokemón ${name.toUpperCase()}`,
    }

  } catch (error) {

    return {
      title: 'sin Pokemón',
      description: 'Pokemón no encontrado'
    }
    
  }


}

const getPokemon = async(id:string): Promise<Pokemon> => {

  try {
    
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`,{
      cache: 'force-cache'
      // next:{
      //   revalidate : 60 * 60 * 24 * 31
      // }
    }).then( resp => resp.json() );
  
    return pokemon

  } catch (error) {
    
    notFound();

  }
}


export default async function PokemonDasboard1Page({params}:Props) {

  const pokemon = await getPokemon(params.id);

  return (

    <>

      <div key={`${ dashboardName }-${ encabezado.titulo }`}
        className={`flex flex-col h-full`}>

        <div key={`${ dashboardName }-${ encabezado.titulo }-header`}
          className={`flex-none`}>

          <DashbordHeader titulo={encabezado.titulo} subtitulo={`/Pokemon - ${pokemon.name}`} description={encabezado.description} />

        </div>

        <div key={`${ dashboardName }-${ encabezado.titulo }-body`}
          className={`flex-1 flex justify-center overflow-y-auto`}>

          <div>
            <PokemonInfoComponent fatherName='Página Pokemon'/>
          </div>

        </div>

        <div key={`${ dashboardName }-${ encabezado.titulo }-footer`}
          className={`flex-none`}>

          <FooterDashboardComponent name={ encabezado.titulo } />

        </div>

      </div>

    </>

  );
}