
import React from 'react'

interface Props {
  name: string;

}

export const TitlePage = ({name}:Props) => {
  return (
    <>
        <div className='flex items-center text-4xl text-neutral-400 h-screen py-10'>
          <h1 className='flex-1 text-center font-bold '> {name} <small className='text-amber-600 '>page</small></h1>
        </div>
    </>
  )
}
