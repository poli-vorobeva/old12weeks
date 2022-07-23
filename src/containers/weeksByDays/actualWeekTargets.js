import React, { Fragment, useContext } from 'react'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'

export const ActualWeekTargets=()=>{
    const byDaysContext = useContext(ByDaysContext)
    
    //получить вложенное свойство 
    const el= {...byDaysContext.weeksArray[byDaysContext.actualWeekName-1]}
    const e=  {...el.weekTarget}     
    console.log(el,e)
    const clkTarg=(e)=>{
        const clkTarg=e.target.innerText
        byDaysContext.actualTarget(clkTarg)
    }
    
    return(

        <Fragment>
        <h1 className="display-4 actualWeekWhite">Неделя {byDaysContext.actualWeekName}</h1>
            <p className="lead actualWeekWhite">все задачи на этой неделе:</p>
            <hr className="my-4"/>
            <ul className="list-group">
                {  
                 Object.keys(e).map(t=>{
                    console.log(e[t].name)
                     if(e[t].name!==undefined){

                        console.log(e[t].name)
                        return (
                           <li className="list-group-item d-flex justify-content-between align-items-center actualWeekTargets" key = {e[t].name} onClick={(e)=>clkTarg(e)}>
                               {e[t].name}
                           </li>
                        )
                     }
                     return
                })
                 
                }
        </ul>
        </Fragment>
            
       
    )
}