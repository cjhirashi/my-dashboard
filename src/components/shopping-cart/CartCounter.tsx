'use client';

import { useState } from 'react';

interface Props {
  value?: number;
}



export const CartCounter = ({  value = 0 }: Props) => {

  const [count, setCount] = useState(value);

  return (
    <>

      <div className='flex flex-col items-center my-auto'>

        <h1 className='text-2xl'>Contador de prueba</h1>

        <div className='flex justify-center p-4 m-4'>
          <h1 className="text-9xl"> {count} </h1>
        </div>

        <div className="flex">
          <button
            onClick={() => setCount(count - 1)}
            className="flex items-center justify-center p-2 rounded-xl bg-neutral-800 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
             -1
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="flex items-center justify-center p-2 rounded-xl bg-neutral-800 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
            +1
          </button>
        </div>

      </div>

    </>
  )
}