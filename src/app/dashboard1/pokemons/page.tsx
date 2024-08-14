import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';
import { HeaderDashboardComponent } from '../../../components/dashboard/Header';

export const metadata = {
  title: 'Dash-1 | Pokemons',
  description: 'Catálogo de pókemons',
};

const pageData = {
  name: 'Pokemons',
  description: 'Catálogo de pókemons',
  father: '',
  path: '',
  dashboard: 'Dash-1'
}

const getPokemons = async( limit = 20, offset = 0 ):Promise<SimplePokemon[]> => {
  const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`)
      .then( res => res.json() );

      const pokemons = data.results.map( pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
      }))

      return pokemons;
}

export default async function PokemonsDash1Page() {

  const pokemons = await getPokemons(80);

  return (

    <>

      {/* Contenedor principal */}
      <div className={`flex flex-col h-full`}>

        {/* SECCION: Header */}
        <div className={`flex-none`}>

          <HeaderDashboardComponent name={`${pageData.name}`} description={`${pageData.description}`} father={`${pageData.father}`} path={`${pageData.path}`} />

        </div>

        {/* SECCION: Body */}
        <div className={`flex-1 flex flex-col text-neutral-400 items-center overflow-y-auto`}>

          <div className="items-center justify-center pt-4 o">
            <PokemonGrid pokemons={ pokemons } />
          </div>

        </div>

        {/* SECCION: Footer */}
        <div className={`flex-none`}>



        </div>

      </div>

    </>
  );
}