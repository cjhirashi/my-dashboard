
import { Footer, Navbar } from "@/components";
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
      <div className="sticky top-0">
        <Navbar/>
      </div>

      <TitlePage name="Home" />

      <div>
        <Footer/>
      </div>

    </>
  );
}

