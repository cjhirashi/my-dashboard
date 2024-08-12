
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'
import { IoLogIn, IoLogInOutline, IoLogoElectron } from 'react-icons/io5'
import { IconLink } from '../icons-components/IconLink'
import { TbLayoutDashboardFilled } from 'react-icons/tb'

const navItems = [
  { path: '/about', text: 'Acerca de' },
  { path: '/blog', text: 'Blog' },
  { path: '/contact', text: 'Contacto' },
  { path: '/pruebas', text: 'Pruebas' },
]

const icons = [
  { 
      path: '/dashboard/main', 
      icon: <TbLayoutDashboardFilled size={30}/>, 
      inver: true,
  },
  { 
    path: '/dashboard1/main', 
    icon: <TbLayoutDashboardFilled size={30}/>, 
    inver: true,
  },
  { 
    path: '/dashboard2/main', 
    icon: <TbLayoutDashboardFilled size={30}/>, 
    inver: true,
  },
]

export const Navbar = () => {
  return (
    <nav className='flex gap-4 h-20 p-4 items-center bg-neutral-800 text-neutral-400 shadow-2xl shadow-neutral-black'>

        <div className='flex flex-none'>
        <IoLogoElectron size={30} className='text-amber-600'/>
        <Link href="/" className='text-2xl font-bold '>
          Carlos <span className='text-amber-600'>Jiménez Hirashi</span>
        </Link>
        </div>

        <div className='flex flex-1 gap-4 justify-end '>
        {
            navItems.map( navItem => (
              <ActiveLink key={ `navbar-${navItem.path}` } { ...navItem }/>
            ))
          }
        </div>

        <div className='flex flex-none gap-4'>
          {
            icons.map( icon => (
              <IconLink key={ `navbar-${icon.path}` } {...icon}/>
            ))
          }
        </div>


    </nav>
  )
}
