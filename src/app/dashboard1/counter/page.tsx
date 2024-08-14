import { CartCounter } from "@/components/shopping-cart";

export const metadata = {
  title: 'Dash-1 | Contador',
  description: 'Prueba de objeto contador',
};

const pageData = {
  name: 'Contador',
  description: 'Prueba de objeto contador',
  fatherName: '',
  path: '',
  dashboard: 'Dash-1'
}

export default function ContadorDash1Page() {

  return (

    <>

      {/* Contenedor principal */}
      <div className={`flex flex-col h-full`}>

        {/* SECCION: Header */}
        <div className={`flex-none`}>



        </div>

        {/* SECCION: Body */}
        <div className={`flex-1 flex flex-col text-neutral-400 items-center overflow-y-auto`}>

          <CartCounter value={ 0 } />

        </div>

        {/* SECCION: Footer */}
        <div className={`flex-none`}>



        </div>

      </div>

    </>
  );
}