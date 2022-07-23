import React, { useContext, } from 'react'
import TargetsToWeeks from './TargetsToWeeks'
import { WeeksButtons } from './weeksButtons'
import { WeeksContext } from '../../components/context/weeks/weeksContext'
import { Button } from '../../components/Button'
import './DroppTargetsToWeeks.css'
const DroppTargetsToWeeks = ()=>{
    const weeksContext= useContext(WeeksContext)
    
        
            return(
            <div className="container DroppTargetsToWeeks">
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