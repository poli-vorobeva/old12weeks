import React, { useContext } from 'react'
import { TargetsContext } from '../../../components/context/targets/targetsContext'

export const List = ()=>{
    const targetsList = useContext(TargetsContext)
    const tList= targetsList.targets
    targetsList.addListOfTargets(tList)
    return(
        <ul className="list-group">
           {
               Object.keys(tList).map(targ=>{
                   return(
                    <li 
                    className="list-group-item"
                    key={targ}
                    >
                         {targ}
                    </li>
                    )
               })
           }
            
        </ul>
    )
}