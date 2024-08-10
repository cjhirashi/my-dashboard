
import React from 'react'

interface Props {
  name: string;
  description: string;
}

export const SectionTitle = ({name, description=''}:Props) => {
  return (
    <>
        <div className='bg-neutral-800 text-neutral-400 p-4'>
          <h2 className='text-2xl'> <small className='text-amber-600 font-bold'>Prueba - </small>{name}</h2>
          <h3> {description} </h3>
        </div>
    </>
  )
}
