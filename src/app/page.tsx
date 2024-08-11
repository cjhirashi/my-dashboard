
import { TitlePage } from "@/components/section";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'Carlos Jiménez',
  description: 'Página personal',
 };

export default function HomePage() {

  // redirect('/dashboard/main')

   const fondoTono = '300'

  return (
    <>
      <TitlePage name="Home" />
    </>
  );
}

