import React, { useContext } from 'react'
import { ByDaysContext } from '../../../components/context/weeksByDays/byDaysContext'

export const TableTargets=()=>{
    const week={
        'Monday': 'Пн',
        'Tuesday':'Вт',
        'Wednesday':'Ср',
        'Thursday':'Чт',
        'Friday':'Пт',
        'Saturday':'Сб',
        'Sunday': 'Вс'
    }
    const byDaysContext= useContext(ByDaysContext)
    return(
        <div class="table table-striped">
            <table class="table">
            <thead>
                <tr>
                    <th scope="col">Недели:</th>
                    {byDaysContext.weeksArray.map(el=><th scope="col">{el.id}</th>)}
                </tr>
                </thead>
                <tbody >
                {
                    Object.entries(week).map(entry=>{
                       
                        return(
                            <tr>
                                <th scope='col'> {entry[1]}</th>
                                {
                                    byDaysContext.weeksArray.map(el=>{
                                      return(
                                        <td className="wordWrap">
                                            {
                                                 el.weekDay.map(d=>{
                                                     const names=d.targets.map(t=>{
                                                         return([
                                                                <li key={t.name}>{t.name}</li>,
                                                          
                                                         ])
                                                     })
                                                   return d.id== entry[0] && d.id== entry[0] && names
                                                })
                                            }
                                        </td>
                                                    
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>  
            </div>
    )
}