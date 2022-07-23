import React, { useContext } from 'react'
import { ActualWeekTargets } from './actualWeekTargets'
import { ButtonsDaysOfWeek } from './buttonsDaysOfWeek'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'

export const TargetsByDays=()=>{
    //задачи одной недели и кнопки с днями недели(этой недели)
    const byDaysContext= useContext(ByDaysContext)
    const divStyle={
        visibility: byDaysContext.visibleDiv? "visible": "hidden",
        color:'black'
    }
    return(
        <div className="col-6"  style={divStyle}>
            <ActualWeekTargets/>
            <ButtonsDaysOfWeek/>
            </div>
    )
}