
import Link from 'next/link';
import React from 'react'
import { IconLinkInterface } from './interfaces/iconLink';


export const IconLink = ({path, icon}:IconLinkInterface) => {

  return (
    <>
        <Link href={path} className={`hover:text-amber-600 transition-all duration-300 `}>{icon}</Link>
    </>
  )
}
