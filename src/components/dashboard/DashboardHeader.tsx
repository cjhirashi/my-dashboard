
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
            <div className={`flex items-center p-4 text-neutral-400 bg-neutral-800`}>

                <div className={`flex-1 flex flex-col`}>
                    <h1 className={`text-xl uppercase italic`}><small className={`text-amber-600 font-bold`}>titulo </small>{titulo}{subtitulo}</h1>
                    <h2 className={`text-base `}>{description}</h2>
                </div>

                <div className={`flex-none`}>
                    
                </div>
                
            </div>
        </>
    )
}