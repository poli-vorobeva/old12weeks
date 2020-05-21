 import React, { useReducer } from 'react'
import { ByDaysContext } from './byDaysContext'
import { byDaysReducer } from './byDaysReducer'
import { PUSH_WEEKS_ARRAY, ACTUAL_WEEK, ACTUAL_TARGET, PUT_INTO_DAY,ACTUAL_DAY, DELETE_CLICKED_TARGET } from './types'

 export const ByDaysState=({children})=>{
     const initialState={
        weeksArray:[],
        actualWeekName:'',
        actualDayName:'',
        clickedTarget:''
     }
    const [state,dispatch] = useReducer(byDaysReducer, initialState)

    const pushWeeksArray=(forPush)=>{
       console.log(forPush)
        dispatch({
            type: PUSH_WEEKS_ARRAY,
            payload:{
             forPush
            }
        })   
    }
    const actualWeek=(actW)=>{
        dispatch({
            type: ACTUAL_WEEK,
            payload:{actW}
            
        })  
    }
    const actualTarget=(clkTarg)=>{
        dispatch({
            type: ACTUAL_TARGET,
            payload:{clkTarg}
            
        }) 
    }
    const actualDay=(clDayId)=>{
        dispatch({
            type: ACTUAL_DAY,
            payload:{clDayId}
            
        }) 
    }
    const putIntoDay=(objForPut,clDayId,indexDay)=>{
        //задачи нужного дня 
        //создаем копию нужного объектаю в Нее пихаем задачу, и уже это в редюсер
       
        const indexD= indexDay
        console.log(indexD)
        //put[state.actualWeekName-1].targets.push(objForPut)
        // put.push(objForPut)
         //console.log(state.weeksArray.weeks[state.actualWeekName-1].weekDay)
        dispatch({
            type: PUT_INTO_DAY,
            payload:{objForPut,indexD}
            
        }) 
    }
    const deleteClickedTarget=()=>{
        dispatch({
            type:DELETE_CLICKED_TARGET
        })
    }
     return(
         <ByDaysContext.Provider value={{ pushWeeksArray,actualWeek,actualTarget, putIntoDay,actualDay,deleteClickedTarget,
            weeksArray: state.weeksArray,
            actualWeekName:state.actualWeekName,
            clickedTarget:state.clickedTarget,
            actualDayName:state.actualDayName
         }}>
             {children}
        </ByDaysContext.Provider>   
     )
 }