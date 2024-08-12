import { DashbordHeader } from '@/components/dashboard'

export const metadata = {
  title: 'DP - Herramientas',
  description: 'Herramientas varias',
   };

const encabezado = {
  titulo: 'Herramientas',
  subtitulo: '',
  description: 'Herramientas varias',
}

export default function HerramientasDashboardPage() {
  return (
    <>

      <div className={`flex flex-col h-full`}>

        <div className={`flex-none`}>
          <DashbordHeader {...encabezado} />
        </div>

        <div className={`flex-1 flex justify-center `}>
          <h1 className={`my-auto text-3xl text-neutral-400 font-bold opacity-60`}>Herramientas
            <small className={`text-amber-600 `}> Dasboard Page</small></h1>
        </div>

      </div>

    </>
  );
}