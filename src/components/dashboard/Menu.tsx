'use client';

import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface MenuDashboardInterface {
  name: string;
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle: string;
}

export const MenuDashboardComponent = ({name,path,icon,title,subtitle}:MenuDashboardInterface) => {

  const currentPath = usePathname();

  return (
    <>

      {/* Contenedor principal */}
      <div>

        <Link 
         href={ path } 
         className={`
          w-full px-4 flex gap-2 items-center text-neutral-400 hover:text-white hover:bg-neutral-400/30 border-b border-neutral-400/30 hover:border-amber-600 py-3 transition ease-linear duration-200
          ${ currentPath === path ? 'text-white bg-amber-600/70 hover:bg-amber-600 shadow-inner shadow-black': '' }`}>

          {/* SECCION: Icono */}
          <div>

            { icon }

          </div>

          {/* SECCION: Titulo */}
          <div className={`hidden sm:flex flex-col`}>
        
            <span className={`text-lg ${ currentPath === path ? 'text-white': 'text-amber-600' } font-bold leading-5`}>{ title }</span>
            <span className={`text-sm opacity-80 hidden md:block`}>{ subtitle }</span>
        
          </div>

    </Link>

      </div>
    </>
  )
}