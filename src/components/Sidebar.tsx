import Image from 'next/image';
import { IoBrowsersOutline, IoCalculator, IoLogoReact, IoCaretForwardCircleSharp, IoBriefcaseSharp, IoLogoElectron } from 'react-icons/io5';
import { SidebarMenuItem } from './SidebarMenuItem';


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


export const Sidebar = () => {
  return (

    <div id="menu" 
      style={{ width: '400px' }}
      className="bg-neutral-900 min-h-max z-10 text-neutral-400 w-64 left-0 pb-8 ">


      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center  text-lg md:text-2xl  text-neutro-400">
          <IoLogoElectron className='text-amber-600' />
           Dash
          <span className="text-amber-600">board</span>
        </h1>
        <p className="text-neutro-700 text-sm">Herramienta de trabajo</p>
      </div>


      <div id="profile" className="px-6 py-10">
        <p className="text-neutral-500">Bienvenido de vuelta,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image className="rounded-full w-8 h-8" 
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" 
              alt="User avatar" 
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Carlos Jiménez
          </span>
        </a>
      </div>


      <div id="nav" className="w-full px-6">
      
        {
          menuItems.map( item => (
              <SidebarMenuItem  key={ item.path } {...item} />
          ))
        }

{/* 
        <a href="#" className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg text-slate-300 font-bold leading-5">Counter</span>
            <span className="text-sm text-slate-500 hidden md:block">Estado local</span>
          </div>
        </a> */}



      </div>
    </div>
  )
}