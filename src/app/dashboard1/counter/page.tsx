import { DashbordHeader } from '@/components/dashboard'
import { CartCounter } from '@/shopping-cart';

export const metadata = {
  title: 'DP1 - Contador',
  description: 'Página de prueba de un contador',
   };

const encabezado = {
  titulo: 'Contador',
  subtitulo: '',
  description: 'Página de prueba de un contador',
}

export default function ContadorDashboard1Page() {
  return (
    <>

      <div className={`flex flex-col h-full`}>

        <div className={`flex-none`}>
          <DashbordHeader {...encabezado} />
        </div>

        <div className={`flex flex-col items-center justify-center w-full h-full`}>
           <span>Productos en el carrito</span>
           <CartCounter value={ 20 } />
         </div>

      </div>

    </>
  );
}

// export default function ContadorDashboarPage() {
//   return (
//     <>

//       <div className={`flex flex-col h-full`}>

//         <div className={`flex-none`}>
//           <DashbordHeader {...encabezado} />
//         </div>

//         <div className={`flex flex-col items-center justify-center w-full h-full`}>
//           <span>Productos en el carrito</span>
//           <CartCounter value={ 20 } />
//         </div>

//       </div>

//     </>
//   );
// }

