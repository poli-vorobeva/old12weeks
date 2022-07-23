import React, { useContext, useEffect } from 'react'
import { WeeksContext } from '../../components/context/weeks/weeksContext'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'
import { ButtonsTargetsByDays } from './weeksByDaysButtons'
import { TargetsByDays } from './TargetsByDays'
import './weeksByDays.css'
const WeeksByDays=()=>{
    const fromWeeksContext= useContext(WeeksContext)
    const byDaysContext= useContext(ByDaysContext)

    useEffect(()=>{
        //при загрузке страницы передаем массив с данными в новый стт
        const forPush= JSON.parse(JSON.stringify(fromWeeksContext.weeks))
         byDaysContext.pushWeeksArray(forPush)

    }, [])
    
    return(
        <div className="row weeksByDays">
               <ButtonsTargetsByDays/>
               <TargetsByDays/>           
        </div>
    )
}
export default WeeksByDays