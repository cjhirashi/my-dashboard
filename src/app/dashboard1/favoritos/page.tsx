import { HeaderDashboardComponent } from "@/components/dashboard/Header";

export const metadata = {
  title: 'Dash-1 | Favoritos',
  description: 'Página de Pokemons Favoritos',
};

const pageData = {
  name: 'Favoritos',
  description: 'Página de Pokemons Favoritos',
  father: '',
  path: '',
  dashboard: 'Dash-1'
}

export default function FavoritosDash1Page() {

  return (

    <>

      {/* Contenedor principal */}
      <div className={`flex flex-col h-full`}>

        {/* SECCION: Header */}
        <div className={`flex-none`}>

            <HeaderDashboardComponent {...pageData} />

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