import React, { useContext } from 'react'
import { ByDaysContext } from '../../../../components/context/weeksByDays/byDaysContext'

export const ButtonsWeeks=()=>{
    const byDaysContext= useContext(ByDaysContext)
    
    const trackingWeek=(el)=>{
        //setOpenWeek(el.id-1)
        byDaysContext.numberOfWeek(el.id-1)
    }
    return(
        <div>
                {
                    byDaysContext.weeksArray.map(el=>{
                        return <button onClick={e=>trackingWeek(el)} >{el.id}</button>
                    })
                }
            </div>
    )
}