import React, { useReducer, useContext, Fragment } from 'react'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'
import { byDaysReducer } from '../../components/context/weeksByDays/byDaysReducer'
import { ForWeekTargets } from './forWeekTargets/forWeekTargets'
import { TrackingDays } from './trackingDays/trackingDays'
import { Note } from './trackingDays/note/Note'
import { NoteInput } from '../../components/NoteInput'

export const TrackingWeek=()=>{
   const byDaysContext= useContext(ByDaysContext)
return(
  <Fragment>
    <div className="jumbotron jumbotron-fluid row">
      <ForWeekTargets/>
      <TrackingDays/>
      {byDaysContext.allNotes&&<Note/>}
    </div>
  
  </Fragment>
   
)
}