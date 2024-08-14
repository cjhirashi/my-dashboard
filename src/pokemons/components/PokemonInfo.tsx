import React from 'react'
import { Pokemon } from '../interfaces/pokemon'
import Image from 'next/image';

export interface PokemonInfoInterface {
  pokemon: Pokemon;
}

export const PokemonInfoComponent = ({pokemon}:PokemonInfoInterface) => {

  return (
    <>

      {/* Contenedor principal */}
      <div className='flex h-full w-full  '>

        {/* SECCCION: Tarjeta de información */}
        <div className='flex-1 flex flex-col items-center w-full m-4 bg-neutral-900 rounded-2xl'>

          {/* SECCION: Título */}
          <div className='flex flex-col p-4 '>

            <h1 className='text-2xl text-amber-600 font-bold'>{pokemon.id} | <span className='text-neutral-400 capitalize'>{pokemon.name}</span></h1>
            
          </div>

          {/* SECCION: Imagen */}
          <div className='flex justify-center my-4 py-4 w-full bg-amber-600 shadow-inner shadow-black'>

          <Image
                src={pokemon.sprites.other?.dream_world.front_default ?? ''}
                width={300}
                height={300}
                alt={`Imagen del pokemon ${pokemon.name}`}
                className="mb-5"
              />

          </div>

          <h1 className='text-2xl py-4 font-bold'>{pokemon.moves.length} Habilidades</h1>

          {/* SECCION: Habilidades */}
          <div className='flex flex-wrap gap-4 justify-center'>

            {
              pokemon.moves.map(move => (
                <p key={move.move.name} className="p-2 capitalize text-white bg-amber-600 rounded-2xl">{move.move.name}</p>
              ))
            }

          </div>

        </div>


      </div>
    </>
  )
}