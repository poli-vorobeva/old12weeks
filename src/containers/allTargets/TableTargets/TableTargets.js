import React, { useContext } from 'react'
import { ByDaysContext } from '../../../components/context/weeksByDays/byDaysContext'
import './TableTargets.css'

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
    const clickedTarget=(e)=>{
        const weekNumber=e.currentTarget.id-1
        const dayOfWeek=e.target.parentNode.id
        byDaysContext.trackWeekFromTable(weekNumber,dayOfWeek)
       
    }
    
    return(
        <div className="table table-striped">
            <table className="table">
            <thead>
                <tr>
                    <th scope="col"> </th>
                    
                    {
                    byDaysContext.weeksArray.map(el=><th scope="col" key={el.id}>НЕДЕЛЯ {el.id}:</th>)
                    }
                </tr>
            </thead>
                <tbody >
                {
                    Object.entries(week).map(entry=>{
                       return(
                            <tr key={entry} id={entry[0]}>

                                <th scope='col'> {entry[1]}</th>
                                {
                                    
                                    byDaysContext.weeksArray.map(el=>{
                                      return(
                                        <td className="wordWrap" key={el.id} id={el.id} onClick={e=>clickedTarget(e)}>
                                            <ul id={el.id} className="tableUl">
                                            {
                                                 el.weekDay.map(d=>{
                                                     {
                                                         //условие
                                                        if (d.targets!==undefined){

                                                            const names=d.targets.map(t=>{
                                                                if(t!==undefined){
                                                                    console.log('!!!!!!!!!!',t)
                                                                    //если сделано то зеленым цветом в таблице

                                                                    return([
                                                                        t.done===true?<li style={{backgroundColor:'rgba(146,242,0,0.2)'}} key={t.name}>{t.name}</li>:
                                                                        <li key={t.name} style={{backgroundColor:'rgba(196,52,45,0.2)'}}>{t.name}</li>,
                                                                  
                                                                 ])
                                                                }
                                                               
                                                            })
                                                            if(names!==undefined && d.id== entry[0]){
                                                                return names}
                                                        }
                                                     }
                                                     
                                                   
                                                })
                                            }
                                            </ul>
                                            
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