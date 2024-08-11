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
    className={ `hover:text-amber-400 ${ ( pathName === path ) && 'text-amber-600' } font-bold` } 
    href={ path }>
        { text }
        </a>

    </div>
  )
}
