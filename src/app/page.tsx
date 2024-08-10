import { Navbar } from "@/components";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function HomePage() {

  // redirect('/dashboard/main')

   const fondoTono = '300'

  return (
    <>
      <div className="p-4 bg-neutral-800">
        <h1 className="text-4xl font-bold text-neutral-400">Carlos Jiménez <small className="text-indigo-400">Page</small></h1>
        <Link href={'/dashboard/main'}> Dashboard </Link>
      </div>
      <div className="w-1/4 h-40 rounded-lg m-4 p-4 bg-neutral-700 text-center">Caja</div>
    </>
  );
}

