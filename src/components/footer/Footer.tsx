
import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IconLink } from '../icons-components/IconLink';

const sotialNetworks = [
    { 
        path: '/#', 
        name: 'facebook',
        icon: <FaFacebookF size={20}/>, 
    },
    { 
        path: '/#', 
        name: 'linkedin',
        icon: <FaLinkedinIn size={20}/>, 
    },
    { 
        path: '/#', 
        name: 'github',
        icon: <FaGithub size={20}/>, 
    },
    { 
        path: '/#', 
        name: 'whatsapp',
        icon: <FaWhatsapp size={20}/>, 
    },

]

export const Footer = () => {
  return (
    <div className='flex bg-neutral-800 text-neutral-400 px-4 py-8 mt-4 min-h-10'>
        <div className='flex-1 flex gap-4 items-center '>
            {
                sotialNetworks.map( icon => (

                    <IconLink key={`social-${icon.name}`} {...icon}/>

                ))
            }
        </div>
        <div className='flex-1 text-right'>auth: <span className='text-amber-600 font-bold italic'>@cjhirashi</span></div>
    </div>
  )
}
