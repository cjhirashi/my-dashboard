
import { IoBrowsersOutline, IoCalculator, IoCaretForwardCircleSharp, IoBriefcaseSharp, IoLogoElectron, IoHome, IoLogOut, IoPerson } from 'react-icons/io5';
import { DashboarMenuItem } from './DashboardMenuItem';
import { IconLink } from '../icons-components/IconLink';

const objetName = 'dashboard'
const dataObjet = {
    name: 'principal',
    bacgronund: 'neutral-900',
    color: 'neutral-400',
    colorSoft: 'green-400',
    colorPrimary: 'red-600'
}

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subTitle: 'Visualización'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subTitle: 'Contador Client Side'
  },
  {
    path: '/dashboard/herramientas',
    icon: <IoCaretForwardCircleSharp size={40} />,
    title: 'Herramientas',
    subTitle: 'Herramientas de Carlos'
  },
  {
    path: '/dashboard/cotizador',
    icon: <IoBriefcaseSharp size={40} />,
    title: 'Cotizador',
    subTitle: 'Cotizador de proyectos y servicios de control'
  },
  {
    path: '/dashboard/pokemon',
    icon: <IoBriefcaseSharp size={40} />,
    title: 'Pokemon',
    subTitle: 'Catalogo de Pokemons'
  },
]

const controlesIcon = [
  {
    path: '/',
    name: 'home',
    icon: <IoHome size={30} />
  },
  {
    path: '/',
    name: 'log-out',
    icon: <IoLogOut size={30} />
  },
]

export const Dashboard = () => {
  return (

    <div id={`${objetName}-${dataObjet.name}`} 
      className={`flex flex-col h-screen bg-neutral-900 shadow-lg shadow-black pt-4`} >

      <div id={`${objetName}-${dataObjet.name}-title`}
        className={`flex gap-1 px-4 items-center`}>

          <IoLogoElectron size={40} className={`text-amber-600`} />

          <div className={`flex flex-col font-bold text-lg text-neutral-400`}>

            <h1 className={`border-b-2 border-amber-600`}>
              Carlos 
              <span className={`text-amber-600`}> Jiménez Hirashi</span>
            </h1>

            <h2 className={`text-base font-bold italic`}>
              Dashboard
              <span className={`uppercase text-amber-600`}> - {dataObjet.name} </span>
            </h2>

          </div>
        
      </div>

      <div id={`${objetName}-${dataObjet.name}-controls`} 
        className={`flex gap-4 items-center text-neutral-400 p-4 border-b border-neutral-400/30`}>
          {
            controlesIcon.map( icono =>(
              <IconLink key={`dasboard-prin-cntr-${icono.name}`} {...icono} />
            ))
          }
      </div>

      <div id={`${objetName}-${dataObjet.name}-user`} 
        className={`flex-none p-4 border-b border-neutral-400/30`}>

        <p className={`text-neutral-400 text-base`}>Bienvenido de vuelta...</p>

        <div className={`flex gap-1 w-full items-center text-neutral-400`}>

            <IoPerson size={40} className='text-amber-600'/>

            <div className={`flex flex-col  w-full`}>

              <h1 className={`text-base border-b-2 border-amber-600`}>
                Carlos Jiménez Hirashi 
              </h1>

              <h2 className={`text-sm font-bold  text-neutral-400`}>
                Director Gerneral
              </h2>

            </div>
        
        </div>

      </div>

      <div key={`${objetName}-${dataObjet.name}-menu`} 
        className='flex-1 flex flex-col overflow-y-auto border-b border-neutral-400/30'>

        {
          menuItems.map( item => (
              <DashboarMenuItem  key={ item.path } {...item} />
          ))
        }

      </div>

      <div className='flex-none flex items-center h-10 px-4 text-neutral-400'>
        <h3>auth: <span className={`text-amber-600 font-bold italic`}>@cjhirashi</span></h3>
      </div>

    </div>
  )
}