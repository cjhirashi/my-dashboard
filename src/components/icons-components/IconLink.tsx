'use client';

import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';

interface Props {
  path: string;
  icon: JSX.Element;
}

export const IconLink = ({path, icon}:Props) => {

  const pathName = usePathname();

  return (
    <>
        <Link href={path} className={`hover:text-amber-600 ${ ( pathName === path ) && 'text-amber-600' } `}>{icon}</Link>
    </>
  )
}
