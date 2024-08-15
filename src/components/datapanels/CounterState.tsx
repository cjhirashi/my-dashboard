import Link from 'next/link';
import React from 'react'
import { IoAccessibility } from 'react-icons/io5'

export interface CounterStateInterface {
  count: number;
  icon: React.ReactNode;
  path: string;
}

export const CounterStateComponent = ({count,icon,path}:CounterStateInterface) => {

  return (
    <>
      <div className={`flex-none flex flex-col text-center px-4 py-2 bg-neutral-900 w-72 h-40 rounded-xl overflow-hidden`}>

        <div className='flex-1 flex items-center justify-center  font-bold '>
            <h3>Contador</h3>
        </div>

        <div className='flex-1 flex gap-4 items-center justify-center text-amber-600 pb-4 border-b border-neutral-400/50'>
            {icon}
        <div className='flex flex-col items-start text-neutral-400'>
            <h1 className='text-3xl font-semibold '>{count}</h1>
            <h2>Contador de prueba</h2>
        </div>
        </div>


        <div className='flex-none flex items-center justify-end '>
          <Link href={path} className='hover:text-amber-600' >
            más
          </Link>
        </div>

      </div>
    </>
  )
}