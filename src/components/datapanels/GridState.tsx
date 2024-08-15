'use client'

import React from 'react'
import { CounterStateComponent } from './CounterState';
import { useAppSelector } from '@/store';
import { FaCartShopping } from 'react-icons/fa6';

export interface GridStateInterface {
  name?: string
}

export const GridStateComponent = ({name}:GridStateInterface) => {

    const count = useAppSelector( state => state.counter.count );

  return (
    <>
      <div className={`flex flex-wrap gap-4 justify-start`} >

        <CounterStateComponent count={count} icon={<FaCartShopping size={40}/>} path='/dashboard1/counter' />

      </div>
    </>
  )
}