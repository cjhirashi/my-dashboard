import React from 'react'
import { Pokemon } from '../interfaces/pokemon'

const objectName = 'PokemonInfo'

export interface PokemonInfoInterface {
    fatherName: string;
    pokemon?: Pokemon
}

export const PokemonInfoComponent = ({fatherName}:PokemonInfoInterface) => {

    const keyName = `${fatherName}-${objectName}`

  return (
    <>
      <div key={`${ keyName }`}>
        { objectName }
      </div>
    </>
  )
}