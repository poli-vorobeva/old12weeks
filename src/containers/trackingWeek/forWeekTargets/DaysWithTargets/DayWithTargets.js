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
                if(el[1]==numberStr){
                    return fullEng=el[0]}
            })
        byDaysContext.numberOfDay(numberStr,fullEng)
        console.log(fullEng)
    }
    const byDaysContext=useContext(ByDaysContext)
    return(//Выводим дни недели, что бы день-количество задач в этот день
        <div>
            {Object.entries(week).map(element=>{
                        //console.log('1')
                    return <ul  className="list-group">
                        {
                        byDaysContext. weeksArray[byDaysContext.numberOfTrackingWeek].weekDay.map(el=>{
                            //выбираем нужный день
                          //console.log(el.id)
                                if([el.id]==element[0]&&[el.id]){
                                        //console.log('попали')
                                        //console.log(el.targets.lenght)
                                        let count=0
                                        el.targets.map(t=>{
                                            count= count+1;
                                            console.log('счетчик задач'+count)
                                        })
                                        return <li
                                         className="list-group-item d-flex justify-content-between align-items-center"
                                         onClick={(e)=>number(e)}
                                         >{element[1]}<span class="badge badge-primary badge-pill">{count}</span></li>
                                }
                            })
                        }
                    </ul>
                    })
                }
        </div>
                   
    )
}