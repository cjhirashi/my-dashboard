
import React from 'react'

const object = 'DashbordHeader'

interface Props {
    titulo: string;
    subtitulo: string;
    description: string;
}

export const DashbordHeader = ({titulo,subtitulo='',description=''}:Props) => {

    return (
        <>
            <div className={`flex items-center px-4 py-2 text-neutral-400 bg-neutral-800 shadow-xl shadow-black`}>

                <div className={`flex-1 flex flex-col`}>
                    <h1 className={`text-xl uppercase `}><small className={`text-amber-600 font-bold italic`}>titulo </small>{titulo}{subtitulo}</h1>
                    <h2 className={`text-base `}>{description}</h2>
                </div>

                <div className={`flex-none`}>
                    
                </div>
                
            </div>
        </>
    )
}