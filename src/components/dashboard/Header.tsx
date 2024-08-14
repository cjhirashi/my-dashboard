import Link from 'next/link';
import React from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'

export interface HeaderDashboardInterface {
  name: string;
  description: string;
  father: string;
  path: string;
}

export const HeaderDashboardComponent = ({name,description,father,path,}:HeaderDashboardInterface) => {

  return (
    <>

        {/* Contenedor principal */}
        <div className={`flex w-full items-center text-neutral-400 bg-neutral-900`}>

            <div className={`flex-none w-4 h-16 bg-amber-600 shadow-inner shadow-black`}>

                
            </div>

            {/* SECCION: Icono */}
            <div className={`text-amber-600 pl-2 ${ path === '' ? 'hidden' :'' }`}>

                 <Link href={path}>

                    <IoChevronBackOutline size={40}/>
                        
                </Link>


            </div>

            {/* SECCION: Datos */}
            <div className={`flex-1 flex flex-col px-4`}>

                {/* SUBSECCION: Titulo de página */}
                <div className={`flex gap-2 italic`}>

                    <h1 className={`text-2xl text-amber-600 font-bold ${ father === '' ? 'hidden' :'' }`}>
                        {father} / </h1>

                    <h1 className={`text-2xl font-bold`}>{name}</h1>

                </div>

                {/* SUBSECCION: Descripción de la página */}
                <h2>{description}</h2>

            </div>

        </div>
    </>
  )
}