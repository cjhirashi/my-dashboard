import { DashbordHeader } from '@/components/dashboard'
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: 'DP1 - Pokemons',
  description: 'Catálogo de Pokemons existentes',
   };

const encabezado = {
  titulo: 'Pokemons',
  subtitulo: '',
  description: 'Catálogo de Pokemons existentes',
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

export default async function PokemonsDashboard1Page() {

  const pokemons = await getPokemons(80);

  return (
    <>

      <div className={`flex flex-col h-full`}>

        <div className={`flex-none`}>
          <DashbordHeader {...encabezado} />
        </div>

        <div className="flex-1 flex flex-col text-neutral-400 overflow-y-auto">
          
          <div className="items-center justify-center pt-4 o">
            <PokemonGrid pokemons={ pokemons } />
          </div>

        </div>

      </div>

    </>
  );
}

// import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

// export const metadata = {
//   title: 'Pokemos',
//   description: 'Catálogo de pokemons',
//  };

// const getPokemons = async( limit = 20, offset = 0 ):Promise<SimplePokemon[]> => {
//     const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`)
//         .then( res => res.json() );

//         const pokemons = data.results.map( pokemon => ({
//           id: pokemon.url.split('/').at(-2)!,
//           name: pokemon.name,
//         }))

//         return pokemons;
// }

// export default async function Pokemon() {

//     const pokemons = await getPokemons(80);

//     return (
      // <div className="flex flex-col text-neutral-400">
      //   <h1 className="text-5xl text-center my-4">Listado de Pokemos <small className="text-amber-600">estático</small></h1>
      //   <div className="items-center justify-center">
      //     <PokemonGrid pokemons={ pokemons } />
      //   </div>
      // </div>
//     );
//   }