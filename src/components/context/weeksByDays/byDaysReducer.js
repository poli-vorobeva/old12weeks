import React from 'react'
import { PUSH_WEEKS_ARRAY, ACTUAL_WEEK, ACTUAL_TARGET, PUT_INTO_DAY, ACTUAL_DAY, DELETE_CLICKED_TARGET, 
    SHOW_ALL_TARGETS, TRACK_WEEK, NUMBER_OF_TRACKING_DAY, NUMBER_OF_TRACKING_WEEK, DONE_TARGET, AREA_FOR_NOTE, SHOW_ALL_NOTES, CLICKED_LI, DONE_TARGETS_OF_WEEK, AUTH_FORM, USER_ID } from './types'

const handlers={
    [PUSH_WEEKS_ARRAY]: (state, {payload})=>({
        ...state,
            weeksArray: payload.forPush
    }),
    [ACTUAL_WEEK]: (state,{payload})=>({
        ...state,
        actualWeekName: payload.actW,
        visibleDiv: true
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
                //надо получит ьнужную неделю
                    
                    if(state.weeksArray.indexOf(el) ==state.actualWeekName-1){//попали в неделю
                        return{...el,
                            [el.weekDay]: el.weekDay.forEach(e=>{
                                if(el.weekDay.indexOf(e) == payload.indexD){
                                   return {...e.targets}, e.targets.push(payload.objForPut)
                                }return {...e}
                            })
                        }                       
                    }
                    return{...el}
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
    }),
    [SHOW_ALL_TARGETS]:(state)=>({...state,showAllTargetsW:true}),
    [TRACK_WEEK]:(state,{payload})=>({
        ...state,
       weeksArray:payload.userWeekArray,
        trackWeek:true}),
    [NUMBER_OF_TRACKING_DAY]:(state,{payload})=>({
        ...state, 
        numberOfTrackingDay:payload.numberStr,
        nameEngTrackingDay: payload.fullEng
    }) ,
    [NUMBER_OF_TRACKING_WEEK]:(state,{payload})=>({...state, numberOfTrackingWeek: payload.numbWeek}),
    [DONE_TARGET]: (state,{payload})=>({
        ...state,
        weeksArray: state.weeksArray.map(element=>{//неделя
            if(element.id==payload.weeksTargetDone+1){
                
                return {...element,//тогда верни элемент у него
                    weekDay: element.weekDay.map(el=>{
                        console.log('-----------------')
                        if(el.id==payload.dayFullEng){
                            console.log('**********')
                             return{...el,
                                targets:[...el.targets.map(t=>{
                                    console.log('+++++++++')
                                    console.log(state.targetNote)
                                    console.log(payload.doneLiText)
                                    console.log(t.name)
                                        if(t.name==payload.doneLiText){
                                            console.log('#####')
                                            return {...t, 
                                                done:true} 
                                        }return {...t}
                                    })
                                ]
                            } 
                        }
                        return {...el}
                    })
                } 
            } return {...element}
        }
                 
            )
    }),
    [AREA_FOR_NOTE]: (state,{payload})=>({
        ...state,
        divNotes:!state.divNotes,
        //targetNote: payload.targN
    }),
    [CLICKED_LI]: (state,{payload})=>({...state, targetNote: payload.clkLi}),
    [SHOW_ALL_NOTES]: (state, {payload})=>({
        ...state,
            weeksArray:state.weeksArray.map(element=>{
               if(element.id== state.numberOfTrackingWeek+1){
                    return {...element,
                        weekDay:element.weekDay.map(e=>{
                       if(e.id== state.nameEngTrackingDay){
                           return{
                                ...e,
                                notes:[...e.notes, {
                                    'parent': state.targetNote,
                                    'day': state.nameEngTrackingDay,
                                    'text': payload.noteText
                                }]
                            }
                        }return {...e}
                    })
                }
            }
                return {...element}
            }),
        allNotes:true//надо заметку добавить в нотс дня нужной недели с заголовком нужной задачи
    }),
    [AUTH_FORM]:(state)=>({...state, authForm:true}),
    [USER_ID]:(state,{payload})=>({...state, userId:payload.id}),
    DEFAULT: state=>state
    }
export const byDaysReducer=(state,action)=>{
    const handle= handlers[action.type]||handlers.DEFAULT
    return handle(state,action)
}