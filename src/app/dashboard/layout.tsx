import { Dashboard } from "@/components/dashboard";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoHome, IoLogoElectron, IoLogOut, IoSettings } from "react-icons/io5";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const nameLayout = 'Page'

const user = {
  name: 'Carlos Jiménez Hirashi',
  email: 'cjhirashi@gmail.com',
  position: 'Director General'
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
    inver: false,
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
    inver: true,
  },
  {
    path: '/',
    name: 'log-out',
    icon: <IoLogOut size={30} />
  },
]

const menu = [
  {
    name: 'Main',
    path: '/dashboard/main',
    icon: <IoLogoElectron size={40} />,
    title: 'Dashboard',
    subtitle: 'Visualización'
  },
  {
    name: 'Home',
    path: '/dashboard/home',
    icon: <GiSettingsKnobs size={40} />,
    title: 'Inicio',
    subtitle: 'Controlador de página Inicio'
  },
  {
    name: 'About',
    path: '/dashboard/about',
    icon: <GiSettingsKnobs size={40} />,
    title: 'Acerca de',
    subtitle: 'Controlador de página Acerca de'
  },
  {
    name: 'Blog',
    path: '/dashboard/blog',
    icon: <GiSettingsKnobs size={40} />,
    title: 'Blog',
    subtitle: 'Controlador de página Blog'
  },
  {
    name: 'Contact',
    path: '/dashboard/contact',
    icon: <GiSettingsKnobs size={40} />,
    title: 'Contacto',
    subtitle: 'Controlador de página Contacto'
  },
  {
    name: 'Tester',
    path: '/dashboard/tester',
    icon: <GiSettingsKnobs size={40} />,
    title: 'Probador',
    subtitle: 'Controlador de página Probador'
  },
]

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {

  return (

    <div key={`DashboaurLayout-${nameLayout}`}
      className={`flex h-screen w-screen`}>

      <div key={`DashboaurLayout-${nameLayout}-dashboard`}
        className={`flex-none h-screen`}>

          <Dashboard name={nameLayout} user={user} controls={controls} menu={menu} />

      </div>
            
      <div key={`DashboaurLayout-${nameLayout}-content`}
        className={`flex-1 h-screen overflow-y-auto`}>

        { children }

      </div>
  
    </div>

  );
}