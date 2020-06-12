import React, { Fragment, useContext } from 'react'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'

export const ActualWeekTargets=()=>{
    const byDaysContext = useContext(ByDaysContext)
    
    //получить вложенное свойство 
    const el= {...byDaysContext.weeksArray[byDaysContext.actualWeekName-1]}
    const e=  {...el.weekTarget}     
   
    const clkTarg=(e)=>{
        const clkTarg=e.target.innerText
        byDaysContext.actualTarget(clkTarg)
    }
    
    return(

        <Fragment>
        <h1 class="display-4">Неделя {byDaysContext.actualWeekName}</h1>
            <p class="lead">все задачи на этой неделе:</p>
            <hr class="my-4"/>
            <ul class="list-group">
                {  
                 Object.keys(e).map(t=>{
                     console.log(e[t].name)
                     return (
                        <li class="list-group-item d-flex justify-content-between align-items-center" key = {e[t].name} onClick={(e)=>clkTarg(e)}>
                            {e[t].name}
                        </li>
                     )
                })
                 
                }
        </ul>
        </Fragment>
            
       
    )
}