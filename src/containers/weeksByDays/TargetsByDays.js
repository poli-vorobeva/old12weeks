import React, { useContext } from 'react'
import { ActualWeekTargets } from './actualWeekTargets'
import { ButtonsDaysOfWeek } from './buttonsDaysOfWeek'
import { Button } from '../../components/Button'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'

export const TargetsByDays=()=>{
    const byDaysContext= useContext(ByDaysContext)
    const divStyle={visibility: byDaysContext.visibleDiv? "visible": "hidden"}
    return(
        <div className="col-6"  style={divStyle}>
            <ActualWeekTargets/>
            <ButtonsDaysOfWeek/>
            </div>
    )
}