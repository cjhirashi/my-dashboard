
import { MenuDashboardComponent, MenuDashboardInterface } from './Menu';
import { LogoDashboardComponent } from './Logo';
import { IconLink } from '../icons-components/IconLink';
import { UserDashboardComponent } from './User';
import { IoLogoElectron } from 'react-icons/io5';


const objetName = 'Dashboard'


export interface DashboardInterface {
    name: string;
    user: DashboardUser;
    controls: DashboardControlsInterface[];
    menu: MenuDashboardInterface[];
}

export interface DashboardControlsInterface {
    path: string;
    name: string;
    icon: JSX.Element;
  }

export interface DashboardUser {
  name: string;
  email: string;
  position: string;
}

export const Dashboard = ({name='name', user, controls, menu}:DashboardInterface) => {
  return (

    <div id={`${objetName}-${name}`} 
      className={`flex flex-col h-screen  w-72 bg-neutral-900 shadow-lg shadow-black pt-4`} >

      <div id={`${objetName}-${name}-logo`}
        className={`flex gap-1 px-4 items-center`}>

        <LogoDashboardComponent name={name} />
        
      </div>

      <div id={`${objetName}-${name}-controls`} 
        className={`flex gap-4 items-center text-neutral-400 p-4 border-b border-neutral-400/30`}>
          {
            controls.map( icono =>(
              <IconLink key={`dasboard-prin-cntr-${icono.name}`} {...icono} />
            ))
          }
      </div>

      <div id={`${objetName}-${name}-user`} 
        className={`flex-none p-4 border-b border-neutral-400/30`}>

        <UserDashboardComponent {...user} />

      </div>

      <div key={`${objetName}-${name}-menu`} 
        className='flex-1 flex flex-col overflow-y-auto border-b border-neutral-400/30'>

        {
          menu.map( item => (
              <MenuDashboardComponent  key={`${objetName}-${name}-menu-boton-${item.path}`} {...item} />
          ))
        }

      </div>

      <div className='flex-none flex items-center h-10 px-4 text-neutral-400'>
        <h3>auth: <span className={`text-amber-600 font-bold italic`}>@cjhirashi</span></h3>
      </div>

    </div>
  )
}