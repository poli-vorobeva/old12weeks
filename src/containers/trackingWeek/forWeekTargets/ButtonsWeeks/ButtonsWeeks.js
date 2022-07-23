import React, { useContext } from 'react'
import { ByDaysContext } from '../../../../components/context/weeksByDays/byDaysContext'
import { Button } from '../../../../components/Button'

export const ButtonsWeeks=()=>{
    const byDaysContext= useContext(ByDaysContext)
    
    const trackingWeek=(e,el)=>{
        //setOpenWeek(el.id-1)
        byDaysContext.numberOfWeek(el.id-1)
        
    }
    return(
        <div>
                {
                    byDaysContext.weeksArray.map(el=>{
                        return <Button key={el.id} callback={e=>trackingWeek(e,el)} text={el.id}/>
                    })
                }
            </div>
    )
}