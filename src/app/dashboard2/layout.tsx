import { DashboardComponent } from '@/components/dashboard';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { IoLogoElectron, IoHome } from 'react-icons/io5';
import { TbLayoutDashboardFilled } from 'react-icons/tb';

const layoutName = 'Laboral'

const user = {
  name: 'Carlos Jiménez',
  email: 'cjimenez@atomcontroles.com',
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
    inver: true,
  },
  {
    path: '/dashboard2/main',
    name: 'dash2',
    icon: <TbLayoutDashboardFilled size={30} />,
    inver: false,
  },
]

const menu = [
  {
    name: 'Main',
    path: '/dashboard2/main',
    icon: <IoLogoElectron size={40} />,
    title: 'Dashboard',
    subtitle: ''
  },
  {
    name: 'Cotizador',
    path: '/dashboard2/cotizador',
    icon: <FaFileInvoiceDollar size={40} />,
    title: 'Cotizador',
    subtitle: 'Cotizador de servicios'
  },
]

export default function LaboralDashboardLayout({ children }: { children: React.ReactNode; }) {

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