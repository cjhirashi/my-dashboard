
import Link from 'next/link'


export default function NotFound() {
  return (

    <>
      <div className={`flex flex-col items-center justify-center text-neutral-400 bg-black`}>
        <h1 className='text-5xl text-amber-600'>404</h1>
        <h3 className='text-2xl'>Pokemon no encontrado</h3>

      </div>
    </>
  )
}