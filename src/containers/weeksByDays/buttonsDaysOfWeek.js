import React, { useContext } from 'react'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'
import {Button} from '../../components/Button'
export const ButtonsDaysOfWeek=()=>{

    const byDaysContext = useContext(ByDaysContext)
const week={
    'Monday': 'Пн',
    'Tuesday':'Вт',
    'Wednesday':'Ср',
    'Trursday':'Чт',
    'Friday':'Пт',
    'Saturday':'Сб',
    'Sunday': 'Вс'
}

const weeksDay= (e)=>{
    //ПИХАЕМ ЗАДАЧУ В ДЕНЬ
    const clDayId= e.target.id

    let indexDay= ''//индекс дня в массиве
        byDaysContext.weeksArray[byDaysContext.actualWeekName].weekDay.forEach(e=>{
            if(e.id==clDayId){
                return indexDay = byDaysContext.weeksArray[byDaysContext.actualWeekName].weekDay.indexOf(e)
            }
        })

    //создаем объект, для пихания в день нужной недели
    const objForPut={
        name:byDaysContext.clickedTarget,
        done:false,
        important:false,
        adds:''
    }
    //УДАЛЯЕМ КЛИКНУТУЮ ЗАДАЧУ
    byDaysContext.actualDay(clDayId)
    byDaysContext.putIntoDay(objForPut, clDayId, indexDay)
    byDaysContext.deleteClickedTarget()
    }

    
return(
        <div>
            {
                Object.keys(week).map(el=>{
                   //console.log(week[el])
                   return <Button text={week[el]} id={el} key={el} callback={(e)=> weeksDay(e)}/>
                })
            }
    </div>
    )
}