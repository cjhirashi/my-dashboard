import React from 'react'
import { IoLogoElectron } from 'react-icons/io5'

const objectName = 'LogoDashboard'

export interface LogoDashboardInterface {
  name: string
}

export const LogoDashboardComponent = ({name}:LogoDashboardInterface) => {

  return (
    <>
      <div key={`${ objectName }-${ name }`}
        className='flex items-center gap-1'>
      
<IoLogoElectron size={40} className={`text-amber-600`} />

<div className={`hidden sm:flex flex-col font-bold text-lg text-neutral-400`}>

  <h1 className={`border-b-2 border-amber-600`}>
    Carlos 
    <span className={`text-amber-600`}> Jiménez Hirashi</span>
  </h1>

  <h2 className={`text-base font-bold italic`}>
    Dashboard
    <span className={`uppercase text-amber-600`}> - {name} </span>
  </h2>

</div>
      </div>
    </>
  )
}
