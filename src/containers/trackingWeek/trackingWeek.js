import React, { useContext } from 'react'
import { ForWeekTargets } from './forWeekTargets/forWeekTargets'
import { TrackingDays } from './trackingDays/trackingDays'
import { Note } from './trackingDays/note/Note'
import './trackingWeek.css'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'

export const TrackingWeek=()=>{
  const byDaysContext= useContext(ByDaysContext)
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@') 
  console.log(JSON.stringify(byDaysContext.weeksArray))
  return(
      <div className="jumbotron jumbotron-fluid row trackingWeek">
        <ForWeekTargets/>
        <TrackingDays/>
        <Note/>
      </div>
    
  )
}