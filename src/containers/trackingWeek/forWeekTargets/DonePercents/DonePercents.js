import React, { useContext, useState } from 'react'
import { ByDaysContext } from '../../../../components/context/weeksByDays/byDaysContext'

export const DonePercents=()=>{
    const byDaysContext = useContext(ByDaysContext)
    //const allWeekTargets=
    const doneTargets={}
    let count=0

//общее количество задач
    byDaysContext. weeksArray[byDaysContext.numberOfTrackingWeek].weekDay.map(el=>{
                    el.targets.map(t=>{
                        count= count+1;
                    })
                })

        console.log(count)
        //получаем нужную неделю- день- таргетс-перебираем таргетс если там дон тру...
    byDaysContext.weeksArray
                .map(element=>//нед
                    element.id== byDaysContext.actualWeekName && //если это нужная неделя
                        element.weekDay.map(el=>//перебираем у нее каждый день
                           el.targets.map(e=>{//заходим в его задачи
                               if(e.done){
                                return doneTargets[e.name]='done'
                               } 
                            })
                        )
                    )
    return(
        <div>
        Сделано {Object.keys(doneTargets).length}/{count}
        </div>
    )
}