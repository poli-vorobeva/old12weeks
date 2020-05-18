 import React from 'react'
 import ByDaysContext from './byDaysContext'

 export const ByDaysState=({children})=>{
     const initialState={}

    const [state,dispatch] = useReducer(targetsReducer, initialState)

     return(
         <ByDaysContext.Provider>
             {children}
        </ByDaysContext.Provider>   
     )
 }