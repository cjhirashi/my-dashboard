
import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IconLink } from '../icons-components/IconLink';

const sotialNetworks = [
    { 
        path: '/#', 
        icon: <FaFacebookF size={20}/>, 
    },
    { 
        path: '/#', 
        icon: <FaLinkedinIn size={20}/>, 
    },
    { 
        path: '/#', 
        icon: <FaGithub size={20}/>, 
    },
    { 
        path: '/#', 
        icon: <FaWhatsapp size={20}/>, 
    },

]

export const Footer = () => {
  return (
    <div className='flex bg-neutral-800 text-neutral-400 px-4 py-8 mt-4 min-h-10'>
        <div className='flex-1 flex gap-4 items-center '>
            {
                sotialNetworks.map( icon => (

                    <IconLink {...icon}/>

                ))
            }
        </div>
        <div className='flex-1 text-right'>auth: <span className='text-amber-600'>@cjhirashi</span></div>
    </div>
  )
}
