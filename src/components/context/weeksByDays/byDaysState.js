 import React, { useReducer } from 'react'
import { ByDaysContext } from './byDaysContext'
import { byDaysReducer } from './byDaysReducer'
import { PUSH_WEEKS_ARRAY, ACTUAL_WEEK, ACTUAL_TARGET, PUT_INTO_DAY,ACTUAL_DAY, 
    DELETE_CLICKED_TARGET, SHOW_ALL_TARGETS, TRACK_WEEK, NUMBER_OF_TRACKING_DAY,
    NUMBER_OF_TRACKING_WEEK, DONE_TARGET, AREA_FOR_NOTE, SHOW_ALL_NOTES, CLICKED_LI,
    AUTH_FORM, 
    USER_ID,
    SHOW_ALL_WEEKS,
    BUTTON_FOR_TRACK,
    TRK_WEEK,
    CLEAR_BY_DAYS_CONTEXT,
    TRACK_WEEK_FROM_TABLE,
    BUTTON_SHOW_WEEKS,
    PUSH_NEW_TARGET,
    CLOSE_NEW_TARGET_FORM,
    ADD_MORE_TARGET_READY,
    REMOVE_NOTE,
    MAKE_TEST_MODE} from './types'

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
        allNotes:true,
        targetNote:'',
        authForm:false,
        userId:'',
        buttonForTrack:false,
        addNewTarget:false,
        testMode: false

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
    const putIntoDay=(objForPut,clDayId)=>{
        //задачи нужного дня 
        //создаем копию нужного объектаю в Нее пихаем задачу, и уже это в редюсер
       
        dispatch({
            type: PUT_INTO_DAY,
            payload:{objForPut,clDayId}
            
        }) 
    }
    const deleteClickedTarget=()=>dispatch({type:DELETE_CLICKED_TARGET})
    
    const trackingWeekA=(userWeekArray)=>{
        dispatch({type:TRACK_WEEK,payload:{userWeekArray}})
    }
    const trackWeekFromTable=(weekNumber,dayOfWeek)=> dispatch({type:TRACK_WEEK_FROM_TABLE,payload:{weekNumber,dayOfWeek}})
    const trkWeek=()=>dispatch({type:TRK_WEEK})
    const showAllWeeks=()=>dispatch({type:SHOW_ALL_TARGETS})
    const buttonWeeksShow=()=>dispatch({type:BUTTON_SHOW_WEEKS})
    const servershowAllWeeks=(userWeekArray)=>dispatch({type:SHOW_ALL_WEEKS,payload:{userWeekArray}})
    const numberOfDay=(numberStr, fullEng)=>{
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
    const buttonForTracking=()=>dispatch ({type:BUTTON_FOR_TRACK})
    const clearState=()=> dispatch({type: CLEAR_BY_DAYS_CONTEXT})
    const pushNewTarget=()=> dispatch({type: PUSH_NEW_TARGET})
    const closeNewTargetF=()=>dispatch({type:CLOSE_NEW_TARGET_FORM})
    const addMoreTargetReady=(week,day,value)=>{
        console.log('!!!!!!!', value )
        dispatch({type:ADD_MORE_TARGET_READY, payload:{week,day,value}})
    }
    const removeNote=(txt)=>dispatch({type:REMOVE_NOTE, payload:{txt}})
    const makeTestMode=()=>{
        dispatch({type: MAKE_TEST_MODE})
    }
    return(
         <ByDaysContext.Provider value={{ pushWeeksArray,actualWeek,actualTarget, putIntoDay,actualDay,
            deleteClickedTarget,showAllWeeks, trackingWeekA,numberOfDay,numberOfWeek,doneTarget,notesInput, 
            allNotesList, clkLi,authF,usersId, servershowAllWeeks,buttonForTracking,trkWeek,clearState,
            trackWeekFromTable,buttonWeeksShow,pushNewTarget,closeNewTargetF,removeNote,makeTestMode,
            addMoreTargetReady,
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
            userId:state.userId,
            buttonForTrack:state.buttonForTrack,
            addNewTarget:state.addNewTarget,
            testMode:state.testMode
         }}>
             {children}
        </ByDaysContext.Provider>   
     )
 }