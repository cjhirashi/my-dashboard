import { SectionTitle, TitlePage } from "@/components/section";
import Image from "next/image";

const lista = [1,2,3,4,5,6]

export default function PruebasPage() {

    const fondoTono = '300'
 
   return (
     <>
 
      <TitlePage name="Pruebas" />
        {/* <h1 className="text-4xl text-center font-bold text-neutral-400 py-4">Pruebas <small className="text-amber-600">Page</small></h1> */}
        
        {/* <section className="text-neutral-400 mb-4 border-b-4 border-neutral-800">
        <SectionTitle name="Flex" description="Prueba de vista de galería de fotos con información" />
        <p className="p-4">Cartas en contenedor Flex, y Flex-wrap, para que distribulla los objetos en multiples línes por si la pantalla no es lo suficientemente amplia</p>
        <div className="flex flex-wrap gap-8 p-4 justify-center">
          {
            lista.map( card => (
              <div className="flex-none text-center  bg-neutral-800 w-[200px] h-[100px] rounded-lg">
                Card - {card}
              </div>
            ))
          }
          
        </div>
        </section> */}

     </>
   );
 }
 
 