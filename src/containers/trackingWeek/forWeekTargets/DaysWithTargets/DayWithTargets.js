import React, { useContext } from 'react'
import { ByDaysContext } from '../../../../components/context/weeksByDays/byDaysContext'

export const DayWithTargets=()=>{
    const week={
        'Monday': 'Пн',
        'Tuesday':'Вт',
        'Wednesday':'Ср',
        'Thursday':'Чт',
        'Friday':'Пт',
        'Saturday':'Сб',
        'Sunday': 'Вс'
    }
    const number=(e)=>{
        const number= e.target.textContent
        let arLet= number.split('')
        arLet.splice(2)
        let numberStr= arLet.join('')
        //пн
        let fullEng= ''
            Object.entries(week).map(el=>{
                if(el[1]===numberStr){
                    return fullEng=el[0]
                }
                return el
            })
        byDaysContext.numberOfDay(numberStr,fullEng)
    }
    const byDaysContext=useContext(ByDaysContext)
    return(//Выводим дни недели, что бы день-количество задач в этот день
        <div>
            {Object.entries(week).map(element=>{
                      
                    return (
                    <ul  className="list-group" className="dayWithTargets">
                        {
                        byDaysContext.weeksArray[byDaysContext.numberOfTrackingWeek].weekDay.map(el=>{
                            //выбираем нужный день
                                if([el.id]==element[0]&&[el.id]){
                                        let count=0
                                        if(el.targets!==undefined){
                                            el.targets.map(t=>{
                                            count= count+1;
                                           })
                                    }
                                        return <li
                                         className="list-group-item d-flex justify-content-between align-items-center"
                                         onClick={(e)=>number(e)}
                                         >{element[1]}<span class="badge badge-primary badge-pill">{count}</span></li>
                                }
                            })
                        }
                    </ul>
                    )
                    })
                }
        </div>
                   
    )
}