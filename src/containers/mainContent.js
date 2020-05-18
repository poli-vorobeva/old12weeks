import React, { useContext} from 'react'
import { TargetsContext } from '../components/context/targets/targetsContext'
import { SubTargets } from './subtargets/SubTargets'
import { Content } from './content/targets/Content'
import DroppTargetsToWeeks from './targetsToWeeks/DroppTargetsToWeeks'
import { WeeksContext } from '../components/context/weeks/weeksContext'
import WeeksByDays from './weeksByDays/WeeksByDays'

export const MainContent = ()=>{
    const targetsContext= useContext(TargetsContext)
    const weeksContext= useContext(WeeksContext)
   /* const ScreenContent= async ()=>{
       if(targetsContext.targetsReady){
       
                if(targetsContext.readyALllList){
                    return(<DroppTargetsToWeeks/>)
                }else{
                return(<SubTargets/>)
                }
        }else{
        return(<Content/>)
       }
   } */

    return(
        <div>
            {
                weeksContext.byWeeks? <WeeksByDays/>:
                    targetsContext.readyALllList?<DroppTargetsToWeeks/>:
                        targetsContext.targetsReady?<SubTargets/>
                        : <Content/>
                  }
        </div>
           
        
       
        
    )
}
