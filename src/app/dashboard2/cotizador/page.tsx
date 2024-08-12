import { DashbordHeader } from '@/components/dashboard'

export const metadata = {
  title: 'DP - Cotizador',
  description: 'Herramienta para elaborar presupuestos',
   };

const encabezado = {
  titulo: 'Cotizador',
  subtitulo: '',
  description: 'Herramienta para elaborar presupuestos',
}

export default function CotizadorDashboardPage() {
  return (
    <>

      <div className={`flex flex-col h-full`}>

        <div className={`flex-none`}>
          <DashbordHeader {...encabezado} />
        </div>

        <div className={`flex-1 flex justify-center `}>
          <h1 className={`my-auto text-3xl text-neutral-400 font-bold opacity-60`}>Cotizador
            <small className={`text-amber-600 `}> Dasboard Page</small></h1>
        </div>

      </div>

    </>
  );
}