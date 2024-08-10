import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata = {
  title: 'Pokemos',
  description: 'Catálogo de pokemons',
 };

const getPokemons = async( limit = 20, offset = 0 ):Promise<SimplePokemon[]> => {
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`)
        .then( res => res.json() );

        const pokemons = data.results.map( pokemon => ({
          id: pokemon.url.split('/').at(-2)!,
          name: pokemon.name,
        }))

        return pokemons;
}



export default async function Pokemon() {

    const pokemons = await getPokemons(160);

    return (
      <div className="flex flex-col">
        <span className="text-5xl my-2">Listado de Pokemos <small>estático</small></span>
        <div className="flex flex-wrap gap-10 items-center justify-center">
          <PokemonGrid pokemons={ pokemons } />
        </div>
      </div>
    );
  }