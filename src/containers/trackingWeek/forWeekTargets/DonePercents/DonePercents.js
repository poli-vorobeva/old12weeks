import React, { useContext} from 'react'
import { ByDaysContext } from '../../../../components/context/weeksByDays/byDaysContext'

export const DonePercents=()=>{
    const byDaysContext = useContext(ByDaysContext)
    //const allWeekTargets=
    const doneTargets={}
    let count=0

//общее количество задач
    byDaysContext.weeksArray[byDaysContext.numberOfTrackingWeek].weekDay.map(el=>{
                    if(el.targets!==undefined){el.targets.map(t=>{
                        return count= count+1;
                    })
                    return count
                }
                return el
                })

        //получаем нужную неделю- день- таргетс-перебираем таргетс если там дон тру...
    byDaysContext.weeksArray
                .map(element=>{//нед
                    element.id=== byDaysContext.actualWeekName && //если это нужная неделя
                        element.weekDay.map(el=>{//перебираем у нее каждый день
                           el.targets.map(e=>{//заходим в его задачи
                               if(e.done){
                                return doneTargets[e.name]='done'
                               } 
                               return e
                            })
                        return el
                        })
                return  element      
                })
    return(
        <div>
        Сделано {Object.keys(doneTargets).length}/{count}
        </div>
    )
}