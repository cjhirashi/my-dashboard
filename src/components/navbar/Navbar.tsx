
import Link from 'next/link'
import React from 'react'
import { ActiveLink } from '../active-link/ActiveLink'

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/blog', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]

export const Navbar = () => {
  return (
    <nav className='flex p-4 bg-neutral-800 '>

        <Link href="/" className='text-2xl font-bold text-neutral-400'>
          Carlos <span className='text-indigo-500'>Jiménez Hirashi</span>
        </Link>

        <div className='flex flex-1'>
          
        </div>

        {
          navItems.map( navItem => (
            <ActiveLink key={navItem.path} { ...navItem }/>
          ))
        }
        
    </nav>
  )
}
