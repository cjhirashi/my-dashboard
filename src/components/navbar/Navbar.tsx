
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'
import { IoLogInOutline, IoLogoElectron } from 'react-icons/io5'
import { IconLink } from '../icons-components/IconLink'

const navItems = [
  { path: '/about', text: 'Acerca de' },
  { path: '/blog', text: 'Blog' },
  { path: '/contact', text: 'Contacto' },
  { path: '/pruebas', text: 'Pruebas' },
]

const icons = [
  { 
      path: '/dashboard/main', 
      icon: <IoLogInOutline size={30}/>, 
  },
]

export const Navbar = () => {
  return (
    <nav className='flex h-20 p-4 items-center bg-neutral-800 text-neutral-400'>

        <div className='flex flex-none'>
        <IoLogoElectron size={30} className='text-amber-600'/>
        <Link href="/" className='text-2xl font-bold '>
          Carlos <span className='text-amber-600'>Jiménez Hirashi</span>
        </Link>
        </div>

        <div className='flex flex-1 justify-end '>
        {
            navItems.map( navItem => (
              <ActiveLink { ...navItem }/>
            ))
          }
        </div>

        <div>

        </div>

        {/* <div className='flex gap-4'>
          {
            navItems.map( navItem => (
              <ActiveLink { ...navItem }/>
            ))
          }
          {
            icons.map( icon => (
              <IconLink {...icon}/>
            ))
          }
        </div> */}

    </nav>
  )
}
