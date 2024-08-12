import React from 'react'

const objectName = 'FooterDashboard'

export interface FooterDashboardInterface {
  name: string;
  messege?: string;
  controls?: JSX.Element[];
}

export const FooterDashboardComponent = ({name,messege,controls}:FooterDashboardInterface) => {

  return (
    <>
      <div key={`${ objectName }-${ name }`}
        className={`flex p-4 gap-4 items-center text-neutral-400 bg-neutral-800`}>
        
        <div key={`${ objectName }-${ name }-state`}
            className={`flex-1 py-2 px-4 bg-black rounded-full border border-neutral-400/40`}>

            <h3><span className={`text-neutral-400/70`}>Ms: </span> { messege }</h3>

        </div>

        <div key={`${ objectName }-${ name }-controls`}
            className={`flex-none `}>
            
            CONTROLES
            
        </div>

      </div>
    </>
  )
}