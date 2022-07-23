import React, { useContext } from 'react'
import { TargetsContext } from '../../../components/context/targets/targetsContext'

export const ListOfSubTargets=(text)=>{
    const targetsContext= useContext(TargetsContext)
    const clText=text.text
    //console.log('--------------',clText)
    return(
        <div>
            <ul className="list-group list-group-flush">
    <li className="list-group-item"><h1>Цель - {clText}</h1></li>
             {
                 Object.keys(targetsContext.targets).map(element=>{
                    if(element=== clText)
                        {
                            const liSub = Object.keys(targetsContext.targets[element]).map(
                                e=>{
                                    return([
                                        <li class="list-group-item">{e}</li>
                                    ])
                                })
                                return liSub
                    }
                    //return element
                 })
             }
            </ul>
        </div>
    )
}