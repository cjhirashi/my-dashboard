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
    <Link 
    className={ `text-neutral-500 ${ ( pathName === path ) && 'text-indigo-600' }` } 
    href={ path }>
        { text }
        </Link>
  )
}
