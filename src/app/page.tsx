import { Navbar } from "@/components";
import { TitlePage } from "@/components/section";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function HomePage() {

  // redirect('/dashboard/main')

   const fondoTono = '300'

  return (
    <>
      <TitlePage name="Home" />
    </>
  );
}

