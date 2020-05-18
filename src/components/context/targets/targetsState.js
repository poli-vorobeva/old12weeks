import React, { useReducer } from 'react'
import axios from 'axios'
import { targetsReducer } from './targetsReducer'
import { ADD_TARGET, 
    SUBTARGETS_SCREEN, 
    GET_CLICKED_TEXT, 
    PUSH_SUBTARGET_LIST_TO_TARGET,
    DROP_TARGETS_TO_WEEKS } from '../types'
import {TargetsContext} from './targetsContext'


export const TargetsState = ({children})=>{
    const initialState = {
        targets:{'первая задача':{
                         суп: false, 
                         кура: false  
                    }, 
                     'вторая задача':{
                       спорт: false, 
                        бег: false }, 
                    
                    'третяя задача':{
                         
                        жизнь: false }
                },
        loading: false,
        targetsReady: false,
        readyALllList: false,
        toggleElement: false,
        clickItem:'',
        subTargetsBlockVisible: false,
        arrayFromTargets:''
    }

    const [state,dispatch] = useReducer(targetsReducer, initialState)
    
   
    const addTarget = async value =>{
        const target = {
            value
        }
        try{
            dispatch({
                type: ADD_TARGET,
                payload: value,
            })
        }       
         catch(e){
        throw new Error(e.message)}

    }

    const addList= async ()=>{
        try{
            dispatch({
                type: SUBTARGETS_SCREEN,
                 
            })
        }catch(e){
            throw new Error(e.message)}
        }


    const readyTargetsList = async()=>{
        try{
            dispatch({
                type: DROP_TARGETS_TO_WEEKS,
               /*  payload: {
                    array:arrayFromTargets
                } */
            })
        }catch(e){
            throw new Error(e.message)
        }
        }


    const getClickedElement= async (text)=>{
        try{ 

            dispatch({
                type: GET_CLICKED_TEXT,
                payload:{
                    text 
                }
            })
        }catch(e){
            throw new Error(e.message)
        }
        }
    
    
    const addListOfTargets = async listOfTargets =>{
               
               try{ 
                console.log('ничего')
                   /*  const res = await axios.post(`${url}/targets.json`, state.targets)
                console.log(res.data) */
            }catch(e){
                console.log(e)
            }
            }
        
    const pushSubListToTarget= (key,att)=>{
        try{         
            dispatch({
                    type: PUSH_SUBTARGET_LIST_TO_TARGET,
                    payload:{
                     text:key,
                     att:att
                    }
                })              
        }catch(e){
            throw new Error(e.message)
        }
    }
    return(
    <TargetsContext.Provider value={{addTarget, addList, 
        getClickedElement,pushSubListToTarget, addListOfTargets, readyTargetsList,
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