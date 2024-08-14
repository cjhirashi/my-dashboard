
export const metadata = {
  title: 'Dash-2 | Cotizador',
  description: 'Cotizador de servicios',
};

const pageData = {
  name: 'Cotizador',
  description: 'Cotizador de servicios',
  fatherName: '',
  path: '',
  dashboard: 'Dash-2'
}

export default function CotizadorDash2Page() {

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