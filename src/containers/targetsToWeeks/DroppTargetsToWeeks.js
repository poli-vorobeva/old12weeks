import React, { useContext, useEffect } from 'react'
import { TargetsContext } from '../../components/context/targets/targetsContext'
import { TargetsToWeeks } from './TargetsToWeeks'
import { WeeksButtons } from './weeksButtons'
import { WeeksContext } from '../../components/context/weeks/weeksContext'
import { Button } from '../../components/Button'

const DroppTargetsToWeeks = ()=>{
    const targetsContext= useContext(TargetsContext)
    const weeksContext= useContext(WeeksContext)

    useEffect(()=>{
        const arrayTargets= targetsContext.arrayFromTargets        
        const arrayFromTargets = JSON.parse(JSON.stringify(arrayTargets))

        //weeksContext.addArray(arrayFromTargets)
    }, [])
return(
    <div className="container">
        <div >
                <h1 className="display-10">Распределите задачи по неделям</h1>
                <p className="lead">
                    нажмите на задачу, а затем на неделю, в которую вы хотите ее выполнить
                </p>
                <hr/>
                <WeeksButtons/>
                <hr/>
        </div>
       
        <TargetsToWeeks/>
        <Button
            callback={weeksContext.byWeeksF}
            text={'Дальше...'}
        />
        
    </div>
       
    
)




}
export default DroppTargetsToWeeks