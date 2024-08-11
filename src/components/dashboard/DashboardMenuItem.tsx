'use client';


import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}



export const DashboarMenuItem = ({ path, icon, title, subTitle }: Props) => {

  const currentPath = usePathname();

  return (
    <Link href={ path } 
      className={`
        w-full px-4 inline-flex space-x-2 items-center text-neutral-400 hover:text-white border-b border-neutral-400/30 py-3 hover:bg-neutral-400/30 transition ease-linear duration-200
        ${ currentPath === path ? 'text-white bg-amber-600/70 hover:bg-amber-600/30': '' }`}>

      <div>

        <div>
          { icon }
        </div>

      </div>

      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 ">{ title }</span>
        <span className="text-sm opacity-80 hidden md:block">{ subTitle }</span>
      </div>

    </Link>
  )
}