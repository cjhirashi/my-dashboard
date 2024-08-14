import React from 'react'
import { UserDashboardComponent, UserDashboardInterface } from './User';
import { MenuDashboardComponent, MenuDashboardInterface } from './Menu';
import { LogoDashboardComponent } from './Logo';
import { IconLink } from '../icons-components';

export interface DashboardInterface {
    name: string;
    controls?: DashboardControlsInterface[];
    user: UserDashboardInterface;
    menu?: MenuDashboardInterface[];
}

interface DashboardControlsInterface {
    path: string;
    name: string;
    icon: JSX.Element;
  }

export const DashboardComponent = ({name='name', controls, user, menu}:DashboardInterface) => {

  return (
    <>

        {/* Contenedor principal */}
        <div className={`flex flex-col h-screen w-[70px] sm:w-72 bg-neutral-900 shadow-lg shadow-black pt-4 transition-all duration-700`}>

            {/* SECCION: Logo */}
            <div className={`flex gap-1 px-4 items-center`}>

                <LogoDashboardComponent name={name} />
        
            </div>

            {/* SECCION: Controles */}
            <div className={`flex flex-col sm:flex-row gap-2 sm:gap-4 items-center text-neutral-400 p-4 border-b border-neutral-400/30`}>
          
                {
                
                    controls ?
                    controls.map( icono =>(
                        <IconLink key={`dasboard-prin-cntr-${icono.name}`} {...icono} />
                    ))
                    : <div></div>
          
                }
      
            </div>

            {/* SECCION: Usuario */}
            <div className={`flex-none p-4 border-b border-neutral-400/30`}>

                <UserDashboardComponent {...user} />

            </div>

            {/* SECCION: Menú */}
            <div className='flex-1 flex flex-col overflow-y-auto overflow-x-hidden border-b border-neutral-400/30'>

                {

                    menu ?
                    menu.map( item => (
                        <MenuDashboardComponent  key={`DB-${name}-BT-${item.path}`} {...item} />
                    ))
                    : <div></div>

                }

            </div>

            {/* SECCION: Autor */}
            <div className='flex-none flex items-center h-10 px-4 text-neutral-400'>
        
                <h3>auth: <span className={`text-amber-600 font-bold italic`}>@cjhirashi</span></h3>
            
            </div>

        </div>
    
    </>

  )
}