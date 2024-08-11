'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';


interface Props {
    path: string;
    text: string;
}


export const ActiveLink = ({ path, text }: Props) => {

    const pathName = usePathname();

  return (
    <div>
    <a
    className={ `hover:text-amber-400 hover:font-bold ${ ( pathName === path ) && 'text-amber-600' } font-normal transition-all duration-300` } 
    href={ path }>
        { text }
        </a>

    </div>
  )
}
