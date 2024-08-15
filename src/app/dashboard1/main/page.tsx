import { GridStateComponent } from '@/components/datapanels';
import { CounterStateComponent } from '../../../components/datapanels/CounterState';

export const metadata = {
  title: 'Dash-1 | Principal',
  description: 'Dashboard personal',
};

const pageData = {
  name: 'Principal',
  description: 'Dashboard personal',
  fatherName: '',
  path: '',
  dashboard: 'Dash-1'
}

export default function PrincipalDash1Page() {

  return (

    <>

      {/* Contenedor principal */}
      <div className={`flex flex-col h-full`}>

        {/* SECCION: Header */}
        <div className={`flex-none`}>



        </div>

        {/* SECCION: Body */}
        <div className={`flex-1 p-4 text-neutral-400 bg-neutral-700 overflow-y-auto`}>

           <GridStateComponent />

        </div>

        {/* SECCION: Footer */}
        <div className={`flex-none`}>



        </div>

      </div>

    </>
  );
}