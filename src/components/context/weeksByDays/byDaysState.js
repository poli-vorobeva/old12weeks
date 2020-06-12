 import React, { useReducer } from 'react'
import { ByDaysContext } from './byDaysContext'
import { byDaysReducer } from './byDaysReducer'
import { PUSH_WEEKS_ARRAY, ACTUAL_WEEK, ACTUAL_TARGET, PUT_INTO_DAY,ACTUAL_DAY, 
    DELETE_CLICKED_TARGET, SHOW_ALL_TARGETS, TRACK_WEEK, NUMBER_OF_TRACKING_DAY,
    NUMBER_OF_TRACKING_WEEK, DONE_TARGET, AREA_FOR_NOTE, SHOW_ALL_NOTES, CLICKED_LI,
    AUTH_FORM, 
    USER_ID} from './types'

 export const ByDaysState=({children})=>{
     const initialState={
        weeksArray:[],
        actualWeekName:'',
        actualDayName:'',
        clickedTarget:'',
        visibleDiv: false,
        showAllTargetsW: false,
        trackWeek:false,
        numberOfTrackingWeek:'0',
        numberOfTrackingDay:'',
        nameEngTrackingDay:'',
        divNotes:false,
        allNotes:false,
        targetNote:'',
        authForm:false,
        userId:''
     }
     const week={
        'Monday': 'Пн',
        'Tuesday':'Вт',
        'Wednesday':'Ср',
        'Thursday':'Чт',
        'Friday':'Пт',
        'Saturday':'Сб',
        'Sunday': 'Вс'
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
        dispatch({
            type: PUT_INTO_DAY,
            payload:{objForPut,indexD}
            
        }) 
    }
    const deleteClickedTarget=()=>dispatch({type:DELETE_CLICKED_TARGET})
    
    const trackingWeekA=(userWeekArray)=>{
        console.log(userWeekArray)
        dispatch({type:TRACK_WEEK,payload:{userWeekArray}})
    }

    const showAllWeeks=()=>dispatch({type:SHOW_ALL_TARGETS})

    const numberOfDay=(numberStr, fullEng)=>{
        console.log(numberStr+'!!!!!!!')
        dispatch({type:NUMBER_OF_TRACKING_DAY,payload:{numberStr, fullEng}})
    }
    const numberOfWeek=(numbWeek)=>dispatch({type:NUMBER_OF_TRACKING_WEEK,payload:{numbWeek}})
    const doneTarget=(doneLiText,weeksTargetDone,dayFullEng)=>{
        dispatch(
        {type:DONE_TARGET,payload:{weeksTargetDone,doneLiText,dayFullEng: dayFullEng.dayFullEng}})
    }
    const notesInput=(noteDay,targN)=>dispatch ({type:AREA_FOR_NOTE,payload:{noteDay,targN}})
    
    const allNotesList=(noteText,parT)=>dispatch ({type:SHOW_ALL_NOTES, payload:{noteText,parT}})
    const clkLi=(liTxt)=>dispatch ({type:CLICKED_LI, payload:{clkLi:liTxt}})
    const authF=()=>dispatch ({type:AUTH_FORM})
    const usersId=(id)=>dispatch ({type:USER_ID, payload:{id}})
    
    return(
         <ByDaysContext.Provider value={{ pushWeeksArray,actualWeek,actualTarget, putIntoDay,actualDay,
            deleteClickedTarget,showAllWeeks, trackingWeekA,numberOfDay,numberOfWeek,doneTarget,notesInput,
            allNotesList,clkLi,authF,usersId,
            weeksArray: state.weeksArray,
            actualWeekName:state.actualWeekName,
            clickedTarget:state.clickedTarget,
            actualDayName:state.actualDayName,
            visibleDiv: state.visibleDiv,
            showAllTargetsW: state.showAllTargetsW,
            trackWeek:state.trackWeek,
            numberOfTrackingDay:state.numberOfTrackingDay,
            numberOfTrackingWeek:state.numberOfTrackingWeek,
            week: state.week,
            divNotes: state.divNotes,
            allNotes:state.allNotes,
            nameEngTrackingDay:state.nameEngTrackingDay,
            targetNote:state.targetNote,
            authForm: state.authForm,
            userId:state.userId
         }}>
             {children}
        </ByDaysContext.Provider>   
     )
 }