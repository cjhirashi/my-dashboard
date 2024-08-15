'use client'

import React from 'react'
import { Provider } from 'react-redux';
import { store } from './';

export interface ProvidersInterface {
  children: React.ReactNode;
}

export const ProvidersComponent = ({children}:ProvidersInterface) => {

  return (
    <>
      <Provider store={store}>

        {children}

      </Provider>
    </>
  )
}