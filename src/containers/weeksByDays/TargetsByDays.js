import React from 'react'
import { ActualWeekTargets } from './actualWeekTargets'
import { ButtonsDaysOfWeek } from './buttonsDaysOfWeek'
import { Button } from '../../components/Button'

export const TargetsByDays=()=>{
    return(
        <div className="col-6">
            <ActualWeekTargets/>
            <ButtonsDaysOfWeek/>
            </div>
    )
}