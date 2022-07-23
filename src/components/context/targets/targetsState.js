import React, { useReducer } from 'react'
import { targetsReducer } from './targetsReducer'
import { ADD_TARGET, 
    SUBTARGETS_SCREEN, 
    GET_CLICKED_TEXT, 
    PUSH_SUBTARGET_LIST_TO_TARGET,
    DROP_TARGETS_TO_WEEKS } from '../types'
import {TargetsContext} from './targetsContext'


export const TargetsState = ({children})=>{
    const initialState = {
        targets:{},
        loading: false,
        targetsReady: false,
        readyALllList: false,
        toggleElement: false,
        clickItem:'',
        subTargetsBlockVisible: false,
        arrayFromTargets:''
    }

    const [state,dispatch] = useReducer(targetsReducer, initialState)
   
    const addTarget = value =>dispatch({type: ADD_TARGET,payload: value})

    const addList=()=>dispatch({type: SUBTARGETS_SCREEN})

    const readyTargetsList =()=>dispatch({type: DROP_TARGETS_TO_WEEKS})
    
    const getClickedElement=text=>dispatch({type: GET_CLICKED_TEXT,payload:{text}})
        
    const pushSubListToTarget= (key,att)=>{        
            dispatch({
                    type: PUSH_SUBTARGET_LIST_TO_TARGET,
                    payload:{
                     text:key,
                     att:att
                    }
                })              
    }
    return(
    <TargetsContext.Provider value={{addTarget, addList, 
        getClickedElement,pushSubListToTarget, readyTargetsList,
        targets: state.targets,
        targetsReady: state.targetsReady,
        toggleElement: state.toggleElement,
        subTargetsBlockVisible: state.subTargetsBlockVisible,
        clickItem: state.clickItem,
        readyALllList: state.readyALllList,
        arrayFromTargets: state.arrayFromTargets
    }}>
          
            {children}
    </TargetsContext.Provider>
    )
}