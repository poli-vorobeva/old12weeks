import React, { useContext, useState } from 'react'
import { ByDaysContext } from '../../../components/context/weeksByDays/byDaysContext'
import { Button } from '../../../components/Button'
import { ButtonsWeeks } from './ButtonsWeeks/ButtonsWeeks'
import {DayWithTargets} from './DaysWithTargets/DayWithTargets'
import { DonePercents } from './DonePercents/DonePercents'

export const ForWeekTargets=()=>{
    const byDaysContext= useContext(ByDaysContext)
    const numberOfWeek = byDaysContext.weeksArray[byDaysContext.numberOfTrackingWeek].id  
   
   
    return (
        <div className='col-md-4'>
            <ButtonsWeeks/> {/* кнопки с неделями */}
            <div>Неделя {numberOfWeek}</div>
            <div>все задачи:</div>
            <DayWithTargets/> {/* Дни недели с количеством задач в них */}
            <DonePercents/>
    </div>
    )
}