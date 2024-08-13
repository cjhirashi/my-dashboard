import { Dashboard } from '@/components/dashboard';
import { GoNumber } from 'react-icons/go';
import { IoHome, IoLogoElectron } from 'react-icons/io5';
import { MdCatchingPokemon } from 'react-icons/md';
import { SiPokemon } from 'react-icons/si';
import { TbLayoutDashboardFilled } from 'react-icons/tb';

const nameLayout = 'Personal'

const user = {
  name: 'Carlos Jiménez Hirashi',
  email: 'cjhirashi@gmail.com',
  position: 'Cientifico de Datos',
}

const controls = [
  {
    path: '/',
    name: 'home',
    icon: <IoHome size={30} />,
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
    subtitle: 'Visualización'
  },
  {
    name: 'Pokemon',
    path: '/dashboard1/pokemons',
    icon: <MdCatchingPokemon size={40} />,
    title: 'Pokemon',
    subtitle: 'Listado de Pokemons'
  },
  {
    name: 'Couter',
    path: '/dashboard1/counter',
    icon: <GoNumber size={40} />,
    title: 'Contador',
    subtitle: 'Contador de valores'
  },
]

export default function PersonalDashboardLayout({ children }: { children: React.ReactNode; }) {

  return (

    <div key={`DashboaurLayout-${ nameLayout }`}
      className={`flex h-screen w-screen`}>

      <div key={`DashboaurLayout-${ nameLayout }-dashboard`}
        className={`flex-none h-screen`}>

        <Dashboard name={ nameLayout } user={ user } controls={ controls } menu={ menu } />

      </div>

      <div key={`DashboaurLayout-${ nameLayout }-content`}
        className={`flex-1 h-screen overflow-y-auto`}>

        { children }

      </div>

    </div>

  );
}