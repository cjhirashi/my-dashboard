
import Link from 'next/link';
import React from 'react'

interface Props {
  path: string;
  icon: JSX.Element;
}

export const IconLink = ({path, icon}:Props) => {

  return (
    <>
        <Link href={path} className={`hover:text-amber-600 `}>{icon}</Link>
    </>
  )
}
