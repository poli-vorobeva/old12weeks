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
    const weekArr= Object.keys(week)
    console.log("/////////",weekArr.indexOf("Monday"))


    const weeksDay= (e)=>{
    //ПИХАЕМ ЗАДАЧУ В ДЕНЬ
    const clDayId= e.target.id
    //Monday. по индексу 
       /*  byDaysContext.weeksArray[byDaysContext.actualWeekName].weekDay.forEach(e=>{
            //console.log(e)
            if(e.id===clDayId){
                return indexDay = byDaysContext.weeksArray[byDaysContext.actualWeekName].weekDay.indexOf(e)
            }
        }) */
    
        //console.log('!!!!Индекс дня',indexDay)    
    //создаем объект, для пихания в день нужной недели
    const objForPut={
        name:byDaysContext.clickedTarget,
        done:false,
        important:false,
        adds:''
    }
    //УДАЛЯЕМ КЛИКНУТУЮ ЗАДАЧУ
    byDaysContext.actualDay(clDayId)
    byDaysContext.putIntoDay(objForPut, clDayId)
    byDaysContext.deleteClickedTarget()
    }

     
return(
        <div className= "buttonsDaysOfWeek">
            {
                Object.keys(week).map(el=><Button 
                    text={week[el]} 
                    id={weekArr.indexOf(el)} 
                    key={el} 
                    callback={(e)=> weeksDay(e)}
                    />
                )
            }
        </div>
    )
}