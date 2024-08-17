import { DashboardComponent } from '@/components/dashboard';
import { FaTools } from 'react-icons/fa';
import { GoNumber } from 'react-icons/go';
import { IoLogoElectron, IoHome } from 'react-icons/io5';
import { LuListTodo } from 'react-icons/lu';
import { MdCatchingPokemon } from 'react-icons/md';
import { TbLayoutDashboardFilled } from 'react-icons/tb';

const layoutName = 'Personal'

const user = {
  name: 'Carlos Jiménez',
  email: 'cjhirashi@gmail.com',
  position: '',
}

const controls = [
  {
    path: '/',
    name: 'home',
    icon: <IoHome size={30} />
  },
  {
    path: '/dashboard/main',
    name: 'dash0',
    icon: <TbLayoutDashboardFilled size={30} />,
    inver: true,
  },
  {
    path: '/dashboard1/main',
    name: 'dash1',
    icon: <TbLayoutDashboardFilled size={30} />,
    inver: false,
  },
  {
    path: '/dashboard2/main',
    name: 'dash2',
    icon: <TbLayoutDashboardFilled size={30} />,
    inver: true,
  },
]

const menu = [
  {
    name: 'Main',
    path: '/dashboard1/main',
    icon: <IoLogoElectron size={40} />,
    title: 'Dashboard',
    subtitle: ''
  },
  {
    name: 'Pokemon',
    path: '/dashboard1/pokemons',
    icon: <MdCatchingPokemon size={40} />,
    title: 'Pokemon',
    subtitle: 'Listado de Pokemons'
  },
  {
    name: 'Favoritos',
    path: '/dashboard1/favoritos',
    icon: <MdCatchingPokemon size={40} />,
    title: 'Favoritos',
    subtitle: 'Lista de Pokemons favoritos'
  },
  {
    name: 'Couter',
    path: '/dashboard1/counter',
    icon: <GoNumber size={40} />,
    title: 'Contador',
    subtitle: 'Contador de valores'
  },
  {
    name: 'Herramientas',
    path: '/dashboard1/herramientas',
    icon: <FaTools size={40} />,
    title: 'Herramientas',
    subtitle: 'Página de herramientas varias'
  },
  {
    name: 'Tareas',
    path: '/dashboard1/todos',
    icon: <LuListTodo size={40} />,
    title: 'Tareas',
    subtitle: 'Página de tareas'
  },
]

export default function PersonalDashboardLayout({ children }: { children: React.ReactNode; }) {

  return (

    <>

      {/* Contenedor principal */}
      <div className={`flex h-screen w-screen`}>

        {/* SECCION: Sidebar */}
        <div className={`flex-none h-screen`}>

          <DashboardComponent name={layoutName} controls={controls} user={user} menu={menu} />

        </div>

        {/* SECCION: Página */}
        <div className={`flex-1 h-screen overflow-y-auto`}>

          { children }

        </div>

      </div>

    </>

  );
}