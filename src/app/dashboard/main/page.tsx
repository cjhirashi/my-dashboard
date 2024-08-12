import { DashbordHeader, FooterDashboardComponent } from '@/components/dashboard'

const dashboardName = 'Dashboar0'

export const metadata = {
  title: 'DP - Main',
  description: 'Herramientas diversas',
   };

const encabezado = {
  titulo: 'Principal',
  subtitulo: '',
  description: 'Herramientas diversas',
}

export default function MainDashboard0Page() {
  return (
    <>

      <div key={`${dashboardName}-${encabezado.titulo}`}
        className={`flex flex-col h-full`}>

        <div key={`${dashboardName}-${encabezado.titulo}-header`}
          className={`flex-none`}>

          <DashbordHeader {...encabezado} />

        </div>

        <div key={`${dashboardName}-${encabezado.titulo}-body`}
          className={`flex-1 flex flex-col text-neutral-400 items-center overflow-y-auto`}>

          <div key={`${dashboardName}-${encabezado.titulo}-Contenedor-Home`}
            className='w-full p-4 '>

            <h1 className='ml-4 text-amber-600'>Inicio</h1>

            <div key={`${dashboardName}-${encabezado.titulo}-Contenedor-Home-contenido`}
              className='p-4 bg-neutral-900 rounded-xl'>

              CONTENIDO

            </div>

          </div>

          <div key={`${dashboardName}-${encabezado.titulo}-Contenedor-About`}
            className='w-full p-4 '>

            <h1 className='ml-4 text-amber-600'>Acerca de</h1>

            <div key={`${dashboardName}-${encabezado.titulo}-Contenedor-About-contenido`}
              className='p-4 bg-neutral-900 rounded-xl'>

              CONTENIDO

            </div>

          </div>

          <div key={`${dashboardName}-${encabezado.titulo}-Contenedor-Blog`}
            className='w-full p-4 '>

            <h1 className='ml-4 text-amber-600'>Blog</h1>

            <div key={`${dashboardName}-${encabezado.titulo}-Contenedor-Blog-contenido`}
              className='p-4 bg-neutral-900 rounded-xl'>

              CONTENIDO

            </div>

          </div>

          <div key={`${dashboardName}-${encabezado.titulo}-Contenedor-Contact`}
            className='w-full p-4 '>

              <h1 className='ml-4 text-amber-600'>Contacto</h1>

            <div key={`${dashboardName}-${encabezado.titulo}-Contenedor-Contact-contenido`}
              className='p-4 bg-neutral-900 rounded-xl'>

              CONTENIDO

            </div>

          </div>

          <div key={`${dashboardName}-${encabezado.titulo}-Contenedor-Tester`}
            className='w-full p-4 '>

              <h1 className='ml-4 text-amber-600'>Probador</h1>

            <div key={`${dashboardName}-${encabezado.titulo}-Contenedor-Tester-contenido`}
              className='p-4 bg-neutral-900 rounded-xl'>

              CONTENIDO

            </div>

          </div>

          {/* <h1 className={`my-auto text-3xl text-neutral-400 font-bold opacity-60`}>{encabezado.titulo}
            <small className={`text-amber-600 `}> Dasboard Page</small></h1> */}

        </div>

        <div key={`${dashboardName}-${encabezado.titulo}-footer`}
          className={`flex-none`}>

          {/* <FooterDashboardComponent name={encabezado.titulo} /> */}

        </div>

      </div>

    </>
  );
}