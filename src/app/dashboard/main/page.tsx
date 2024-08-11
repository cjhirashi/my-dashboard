import { DashbordHeader } from "@/components/dashboard";

const encabezado = {
  titulo: 'Principal',
  subtitulo: '/Secuandaria',
  description: 'Esta es una descripción de la página',
 
}

export default function MainPage() {
    return (
      <>
      
        <div>
          <DashbordHeader  {...encabezado} />
        </div>

        <div>
          CONTENIDO
        </div>

      </>
    );
  }