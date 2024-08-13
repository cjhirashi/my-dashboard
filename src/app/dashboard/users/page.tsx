import { DashbordHeader, FooterDashboardComponent } from '@/components/dashboard'

const dashboardName = 'Dashboar0'

export const metadata = {
  title: 'DP0 - Users',
  description: 'Administración de usuarios del sistema',
   };

const encabezado = {
  titulo: 'Usuarios',
  subtitulo: '',
  description: 'Administración de usuarios del sistema',
}

export default function UsersDasboard0Page() {
  return (

    <>

      <div key={`${ dashboardName }-${ encabezado.titulo }`}
        className={`flex flex-col h-full`}>

        <div key={`${ dashboardName }-${ encabezado.titulo }-header`}
          className={`flex-none`}>

          <DashbordHeader {...encabezado} />

        </div>

        <div key={`${ dashboardName }-${ encabezado.titulo }-content`}
          className={`flex-1 flex justify-center overflow-y-auto`}>

          <h1 className={`my-auto text-3xl text-neutral-400 font-bold opacity-60`}>{ encabezado.titulo }
            <small className={`text-amber-600 `}> Dasboard Page</small></h1>

        </div>

        <div key={`${ dashboardName }-${ encabezado.titulo }-footer`}
          className={`flex-none`}>

          <FooterDashboardComponent name={ encabezado.titulo } />

        </div>

      </div>

    </>

  );
}