
import Link from 'next/link';
import React from 'react'

export interface IconLinkInterface {
  path: string;
  icon: JSX.Element;
  inver: boolean;
}

export const IconLink = ({path, icon, inver=true}:IconLinkInterface) => {

  return (
    <>
        <Link href={path} className={`${ inver ? 'text-neutral-400 hover:text-amber-600' : 'text-amber-600 hover:text-neutral-400' } transition-all duration-300 `}>{icon}</Link>
    </>
  )
}
