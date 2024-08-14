import { DashboardComponent } from "@/components/dashboard";
import { FaBloggerB } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoHome, IoLogoElectron, IoLogOut, IoPerson } from "react-icons/io5";
import { TbLayoutDashboardFilled } from "react-icons/tb";

const layoutName = 'Admin'

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
    subtitle: ''
  },
  {
    name: 'Users',
    path: '/dashboard/users',
    icon: <IoPerson size={40} />,
    title: 'Usuarios',
    subtitle: 'Administración de usuarios del sistema'
  },
  {
    name: 'Pages',
    path: '/dashboard/pages',
    icon: <GiSettingsKnobs size={40} />,
    title: 'Páginas',
    subtitle: 'Administrador de páginas públicas'
  },
  {
    name: 'Blog',
    path: '/dashboard/blog',
    icon: <FaBloggerB size={40} />,
    title: 'Blog',
    subtitle: 'Administrador de páginas públicas'
  },
]

export default function AdminDashboardLayout({ children }: { children: React.ReactNode; }) {

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