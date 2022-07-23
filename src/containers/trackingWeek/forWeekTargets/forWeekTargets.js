import React, { useContext} from 'react'
import { ByDaysContext } from '../../../components/context/weeksByDays/byDaysContext'
import { Button } from '../../../components/Button'
import { ButtonsWeeks } from './ButtonsWeeks/ButtonsWeeks'
import {DayWithTargets} from './DaysWithTargets/DayWithTargets'
import { DonePercents } from './DonePercents/DonePercents'
import './forWeekTargets.css'
export const ForWeekTargets=()=>{
    const byDaysContext= useContext(ByDaysContext)
    
    const allWeeks=()=>{
    byDaysContext.buttonWeeksShow()
   }
    return (
        <div className='col-md-4 forWeekTargets'>
            <div>Недели {/* {numberOfWeek} */}</div>
            <ButtonsWeeks/> {/* кнопки с неделями */}
            <hr/>
            {/* <div style={{textDecoration:"uppercase"}}>все задачи:</div> */}
            <DayWithTargets/> {/* Дни недели с количеством задач в них */}
            <DonePercents/>
            <Button callback={allWeeks} text={'Показать все недели'}/>
    </div>
    )
}