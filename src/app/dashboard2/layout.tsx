import { Dashboard } from '@/components/dashboard';
import { IoBrowsersOutline, IoHome, IoLogoElectron } from 'react-icons/io5';
import { TbLayoutDashboardFilled } from 'react-icons/tb';

const nameLayout = 'Laboral'

const user = {
  name: 'Carlos Jiménez Hirashi',
  email: 'cjimenez@atomcontroles.com',
  position: 'Director General',
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
    subtitle: 'Visualización'
  },
]

export default function LaboralDashboardLayout({ children }: { children: React.ReactNode; }) {

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