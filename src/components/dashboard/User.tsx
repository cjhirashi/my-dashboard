import React from 'react'
import { IoPerson } from 'react-icons/io5';

const objectName = 'UserDashboard'

export interface UserDashboardInterface {
  name: string;
  email: string;
  position: string;
}

export const UserDashboardComponent = ({name,email,position}:UserDashboardInterface) => {

  return (
    <>
      <div key={`${ objectName }-${ name }`}
        className={`flex flex-col gap-2`}>

        <p key={`${ objectName }-${ name }-intro`}
            className={`hidden sm:block text-neutral-400 text-base`}>Bienvenido de vuelta...</p>

        <div key={`${ objectName }-${ name }-data`}
            className={`flex gap-1 w-full items-center text-neutral-400`}>

            <IoPerson key={`${ objectName }-${ name }-icon`}
                size={40} className='text-amber-600'/>

            <div key={`${ objectName }-${ name }-user`}
                className={`hidden sm:flex flex-col  w-full`}>

                <h1 className={`text-base border-b-2 border-amber-600`}>
                    { name } 
                </h1>

                <h2 className={`text-xs font-bold italic text-amber-600`}>
                    { position }
                </h2>

                <h3 className={`text-xs  text-neutral-400`}>
                    { email }
                </h3>

            </div>
        
        </div>
      </div>
    </>
  )
}