import React, { useReducer, useContext, useEffect } from 'react'
import { Button } from '../../components/Button'
import { WeeksContext } from '../../components/context/weeks/weeksContext'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'
import { ButtonsTargetsByDays } from './weeksByDaysButtons'
import { ActualWeekTargets } from './actualWeekTargets'
import { ButtonsDaysOfWeek } from './buttonsDaysOfWeek'
import { TargetsByDays } from './TargetsByDays'

const WeeksByDays=()=>{
    const fromWeeksContext= useContext(WeeksContext)
    const byDaysContext= useContext(ByDaysContext)

    useEffect(()=>{
        const forPush= JSON.parse(JSON.stringify(fromWeeksContext.weeks))
        // console.log(forPush)    
         byDaysContext.pushWeeksArray(forPush)

        //weeksContext.addArray(arrayFromTargets)
    }, [])

    return(
        <div className="row">
               <ButtonsTargetsByDays/>
               <TargetsByDays/>           
        </div>
    )
}
export default WeeksByDays