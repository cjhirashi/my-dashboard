
export const metadata = {
  title: 'Dash-1 | Herramientas',
  description: 'Página de herramientas varias',
};

const pageData = {
  name: 'Herramientas',
  description: 'Página de herramientas varias',
  fatherName: '',
  path: '',
  dashboard: 'Dash-1'
}

export default function HerramientasDash1Page() {

  return (

    <>

      {/* Contenedor principal */}
      <div className={`flex flex-col h-full`}>

        {/* SECCION: Header */}
        <div className={`flex-none`}>



        </div>

        {/* SECCION: Body */}
        <div className={`flex-1 flex flex-col text-neutral-400 items-center overflow-y-auto`}>

          <h1 className={`my-auto text-3xl text-neutral-400 font-bold opacity-60`}>{pageData.name}
           <small className={`text-amber-600 `}> {pageData.dashboard} page</small></h1>

        </div>

        {/* SECCION: Footer */}
        <div className={`flex-none`}>



        </div>

      </div>

    </>
  );
}