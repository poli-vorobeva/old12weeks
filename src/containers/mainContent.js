import React, { useContext} from 'react'
import { TargetsContext } from '../components/context/targets/targetsContext'
import { SubTargets } from './subtargets/SubTargets'
import { Content } from './content/targets/Content'
import DroppTargetsToWeeks from './targetsToWeeks/DroppTargetsToWeeks'
import { WeeksContext } from '../components/context/weeks/weeksContext'
import WeeksByDays from './weeksByDays/WeeksByDays'
import { ShowAllTargets } from './allTargets/allTargets'
import { ByDaysContext } from '../components/context/weeksByDays/byDaysContext'
import { TrackingWeek } from './trackingWeek/trackingWeek'

export const MainContent = ()=>{
    const targetsContext= useContext(TargetsContext)
    const weeksContext= useContext(WeeksContext)
    const byDaysContext = useContext(ByDaysContext)


    return(
        <div>
            { 
            byDaysContext.trackWeek?<TrackingWeek/>:
                
                    byDaysContext.showAllTargetsW? <ShowAllTargets/>:
                        weeksContext.byWeeks? <WeeksByDays/>:
                            targetsContext.readyALllList?<DroppTargetsToWeeks/>:
                                targetsContext.targetsReady?<SubTargets/>
                                : <Content/>
                  }
        </div>
           
        
       
        
    )
}
