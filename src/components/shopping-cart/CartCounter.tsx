'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initCounterState, resetCount, substractOne } from '@/store/counter/counterSlice';
import { useEffect, useState } from 'react';

interface Props {
  value?: number;
}

export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async():Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then( res => res.json());

  return data
}

export const CartCounter = ({  value = 0 }: Props) => {

  const count = useAppSelector( state => state.counter.count );
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch( initCounterState(value) );
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter()
     .then( ({count}) => dispatch( initCounterState(count) ));
  }, [dispatch]);

  // const [count, setCount] = useState(value);

  return (
    <>

      <div className='flex flex-col items-center my-auto'>

        <h1 className='text-2xl'>Contador de prueba</h1>

        <div className='flex justify-center p-4 m-4'>
          <h1 className="text-9xl"> {count} </h1>
        </div>

        <div className="flex">
          <button
            onClick={() => dispatch(substractOne())}
            className="flex items-center justify-center p-2 rounded-xl bg-neutral-800 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
             -1
          </button>

          <button
            onClick={() => dispatch(addOne())}
            className="flex items-center justify-center p-2 rounded-xl bg-neutral-800 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
            +1
          </button>
        </div>

      </div>

    </>
  )
}