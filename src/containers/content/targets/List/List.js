import React, { useContext } from 'react'
import { TargetsContext } from '../../../../components/context/targets/targetsContext'
import {TransitionGroup, CSSTransition} from 'react-transition-group'
import './List.css'
export const List = ()=>{
    const targetsList = useContext(TargetsContext)
    const tList= targetsList.targets
    return(
        
    <TransitionGroup component="ul" className="list-group">
           { 
               
               Object.keys(tList).map(targ=>{
                
                   return(
                    <CSSTransition
                    key={targ}
                    classNames={'target'}
                    timeout={1000}
                    mountOnEnter
                    >
                        <li 
                        className="list-group-item"
                       
                        >
                            {targ}
                        </li>
                    </CSSTransition>
                    )
               })
           }
            
        </TransitionGroup>
       
       
    )
}