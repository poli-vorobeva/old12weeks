import React, { useReducer, useContext, useEffect } from 'react'
import { WeeksContext } from './weeksContext'
import weeksReducer from './weeksReducer'
import { TargetsContext } from '../targets/targetsContext'
import { SELECT_TERGET, ADD_ARRAY, PUT_INTO_WEEK, DELETE_ITEM, CLICKED_WEEK, NEW_LIST_OF_ITEMS} from './types'
import { UNMOUNT_UL, UL_TARGET_FOR_DELETE, IS_TARGET_EMPTY, PUSHED_ARRAY, BY_WEEKS } from '../types'

export const WeeksState = ({children}) =>{
    const initialState={
        targets: '',
        weeks:[
                {id:1,
                weekTarget:[{
                            name: 'тест1',
                            parentTarget: 'пав',
                            done: false,
                            important: false,
                            adds:''
                        },{
                            name: 'теспипи5',
                            parentTarget: 'el',
                            done: false,
                            important: false,
                            adds:''
                        },{
                            name: 'всампитроьл',
                            parentTarget: 'el',
                            done: false,
                            important: false,
                            adds:''
                        }
                    ]
               
                },
                {id:2,
                weekTarget:{}},
                {id:3,
                weekTarget:{}},
                {id:4,
                weekTarget:{}},
                {id:5,
                weekTarget:{}},
                {id:6,
                weekTarget:{}},
                {id:7,
                weekTarget:{}},
                {id:8,
                weekTarget:{}},
                {id:9,
                weekTarget:{}},
                {id:10,
                weekTarget:{}},
                {id:11,
                weekTarget:{}},
                {id:12,
                weekTarget:{}}
            ],
        clickedItemText:'',
        pushedWeek:'',
        newTarget:{},
        itemsTarget:'',
        arrayFromTargets:'',
        newItemsArr:{},
        ulTargetForDelete:'',
        pushedArray:{},
        byWeeks: false

    }
    const [state,dispatch] = useReducer(weeksReducer,initialState)

    const addArray= async (arrayFromTargets)=>{
        console.log(arrayFromTargets)
        try{
            dispatch({
                type:ADD_ARRAY,
                payload: {arrayFromTargets}
            })
        }catch(e){
            console.log(e)
        }
    }
    const clickedItem=async (text,parentTarget,newTarget)=>{
        try{
            
            dispatch({
                type: SELECT_TERGET,
                payload:{
                    text, parentTarget,newTarget
                }
            })
        }catch(e){
            console.log(e)
        }
    }
    const clickedWeek = async(weekCl)=>{
        try{
            dispatch({
                type: CLICKED_WEEK,
                payload:{
                    text: weekCl
                }
            })
        }catch(e){
            console.log(e)
        }
    }

    const putIntoWeek=async (weekCl, nTarget)=>{
       
        try{
            dispatch({
                type:PUT_INTO_WEEK,
                payload:{
                    week: weekCl,
                    target: nTarget
                }
               
            }) 

         }catch(e){
             console.log(e)
         }
    }

    const deleteItem=async (parentTarget, copyObjectWithout)=>{
        try{
            dispatch({
                type:DELETE_ITEM,
                payload:{ 
                    parentTarget, copyObjectWithout
                }
            }) 

         }catch(e){
             console.log(e)
         }

    }
    const pushedArrayF=(forReduserArray)=>{
        console.log(Object.keys(state.arrayFromTargets).length)
        dispatch({
            type: PUSHED_ARRAY,
            payload: {pushedArray:forReduserArray}
        })
    }
    const unmountEmpty= (forReduserArray)=>{
        
        //console.log("Объект для подстановки "+{...forReduserArray})
            dispatch({
                type:UNMOUNT_UL,
                payload:{ 
                    forReduserArray
                }
            }) }
    const byWeeksF=()=>{
        dispatch({
            type:BY_WEEKS
        })
    }
    return(
        <WeeksContext.Provider value={{clickedItem, clickedWeek,addArray, putIntoWeek,unmountEmpty, 
            deleteItem,pushedArrayF,byWeeksF,
        targets:state.targets,
        arrayFromTargets:state.arrayFromTargets,
        weeks: state.weeks,
        pushedWeek: state.pushedWeek,
        newTarget:state.newTarget,
        clickedItemText: state.clickedItemText,
        newItemsArr: state.newItemsArr,
        itemsTarget: state.itemsTarget,
        ulTargetForDelete:state.ulTargetForDelete,
        pushedArray: state.pushedArray,
        byWeeks: state.byWeeks
        }}>
            {children}
        </WeeksContext.Provider>
    )
}