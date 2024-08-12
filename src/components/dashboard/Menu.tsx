'use client';

import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";

const objectName = 'MenuDashboard'

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
      
      <Link key={`${ objectName }-${ name }`}
        href={ path } 
        className={`
          w-full px-4 inline-flex space-x-2 items-center text-neutral-400 hover:text-white border-b border-neutral-400/30 py-3 hover:bg-neutral-400/30 transition ease-linear duration-200
          ${ currentPath === path ? 'text-white bg-amber-600/70 hover:bg-amber-600/30 ': '' }`}>

        <div key={`${ objectName }-${ name }-icon`}>

          { icon }

        </div>

        <div key={`${ objectName }-${ name }-data`}
          className={`flex flex-col`}>
        
          <span className={`text-lg ${ currentPath === path ? 'text-neutral-300': 'text-amber-600' } font-bold leading-5`}>{ title }</span>
          <span className={`text-sm opacity-80 hidden md:block`}>{ subtitle }</span>
        
        </div>

    </Link>

    </>
  )
}
