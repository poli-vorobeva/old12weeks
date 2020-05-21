import React from 'react'
import { PUSH_WEEKS_ARRAY, ACTUAL_WEEK, ACTUAL_TARGET, PUT_INTO_DAY, ACTUAL_DAY, DELETE_CLICKED_TARGET } from './types'

const handlers={
    [PUSH_WEEKS_ARRAY]: (state, {payload})=>({
        ...state,
            weeksArray: payload.forPush
    }),
    [ACTUAL_WEEK]: (state,{payload})=>({
        ...state,
        actualWeekName: payload.actW
    }),
    [ACTUAL_TARGET]: (state,{payload})=>({
        ...state,
        clickedTarget: payload.clkTarg
    }),
    [ACTUAL_DAY]:(state,{payload})=>({
        ...state,
        actualDayName: payload.clDayId
    }),
    [PUT_INTO_DAY]:(state, {payload})=>({
        ...state,
            weeksArray: [...state.weeksArray], ...state.weeksArray.forEach(el=>{
               
                el.weekDay.forEach(e=>{
                     if(el.weekDay.indexOf(e) == payload.indexD){
                        return {...e.targets}, e.targets.push(payload.objForPut)
                       
                    } 
                })
        }) 
    }),
    [DELETE_CLICKED_TARGET]:(state)=>({
         ...state,
            weeksArray:state.weeksArray.map(el=> {
                const id= el.id
                if(id == state.actualWeekName){
                     return {...el,
                        weekTarget: [...el.weekTarget.filter(e=> e.name!==state.clickedTarget)]
                        //el.weekTarget.filter(e=> e!==state.clickedTarget)
                    }   
                }
                return {...el}
            }),

            actualWeekName: state.weeksArray[state.actualWeekName-1].weeksTarget=={}?'': state.actualWeekName,
            actualDayName:'',
            clickedTarget:''
            
               

                /* ...state.weeksArray.map(el=>{
                const id= el.id
                if(id == state.actualWeekName){

                    console.log('@@@!!!!!'+el)// попали
                    console.log('задачи-'+el.weekTarget)
                    console.log('Передаваемый массив'+copyArrTargets)
                    return{...el,
                        weekTarget: [...el.weekTarget.filter(e=> e.name !== state.clickedTarget
                        )
                        ]
                    }
                }
                return el
            }) */
     
    }),
    DEFAULT: state=>state
    }
export const byDaysReducer=(state,action)=>{
    const handle= handlers[action.type]||handlers.DEFAULT
    return handle(state,action)
}