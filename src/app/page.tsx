import { Footer, Navbar } from "@/components";

export const metadata = {
  title: 'Home',
  description: 'Pagina Home',
};

const pageData = {
  name: 'Home',
  description: 'Pagina Home',
}

export default function HomePage() {

  return (

    <>

      {/* Contenedor principal */}
      <div className={`flex flex-col h-screen `}>

        {/* SECCION: Header */}
        <div className={`flex-none`}>

          <Navbar/>

        </div>

        {/* SECCION: Body */}
        <div className={`flex-1 flex flex-col text-neutral-400 items-center overflow-y-auto `}>

          <h1 className={`my-auto text-3xl text-neutral-400 font-bold opacity-60`}>{pageData.name}
          <small className={`text-amber-600 `}> page</small></h1>

        </div>

        {/* SECCION: Footer */}
        <div className={`flex-none`}>

          <Footer/>

        </div>

      </div>

    </>
  );
}