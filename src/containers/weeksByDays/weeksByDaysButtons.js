import React, { useContext } from 'react'
import { Button } from '../../components/Button'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'

export const ButtonsTargetsByDays=()=>{
    const byDaysContext = useContext(ByDaysContext)
 
    const actWeek=async (el)=>{
        const actW= el.id        
        byDaysContext.actualWeek(actW)
        
}
   
    return(
        <div className="col-4" >
            <div className="btn-group-vertical">
                <p>Недели</p>
                {
                   byDaysContext.weeksArray.map(el=>{
                    return <Button text={el.id}
                            key={el.id}
                            callback={(e)=> actWeek(el)}
                            />
                   }) 
                }
            </div>
        </div>
       
    )
}