import { DashbordHeader } from '@/components/dashboard'

export const metadata = {
  title: 'DP1 - Main',
  description: 'Página principal de dashboard',
   };

const encabezado = {
  titulo: 'Main',
  subtitulo: '',
  description: 'Página principal de dashboard',
}

export default function MainDasboard1Page() {
  return (
    <>

      <div className={`flex flex-col h-full`}>

        <div className={`flex-none`}>
          <DashbordHeader {...encabezado} />
        </div>

        <div className={`flex-1 flex justify-center `}>
          <h1 className={`my-auto text-3xl text-neutral-400 font-bold opacity-60`}>Main
            <small className={`text-amber-600 `}> Dasboard Page</small></h1>
        </div>

      </div>

    </>
  );
}