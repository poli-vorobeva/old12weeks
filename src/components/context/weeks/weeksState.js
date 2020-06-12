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
                        },{
                            name: 'теспипи5',
                            parentTarget: 'el',
                        },{
                            name: 'всампитроьл',
                            parentTarget: 'el',
                        }
                    ],
                weekDay:[ 
                         { id:'Monday',
                             targets:[],
                            notes:[]
                        },
                            {id:'Tuesday',
                            targets:[],
                            notes:[]},
                            {id:'Wednesday',
                            targets:[],
                            notes:[]},
                            {id:'Thursday',
                            targets:[],
                            notes:[]},
                            {id:'Friday',
                            targets:[],
                            notes:[]},
                            {id:'Saturday',
                            targets:[],
                            notes:[]},
                            {id:'Sunday',
                            targets:[],
                            notes:[]}
                        ]},
                {id:2,
                weekTarget:[],
                weekDay: [ 
                    { id:'Monday',
                        targets:[],
                       notes:[]
                   },
                       {id:'Tuesday',
                       targets:[],
                       notes:[]},
                       {id:'Wednesday',
                       targets:[],
                       notes:[]},
                       {id:'Thursday',
                       targets:[],
                       notes:[]},
                       {id:'Friday',
                       targets:[],
                       notes:[]},
                       {id:'Saturday',
                       targets:[],
                       notes:[]},
                       {id:'Sunday',
                       targets:[],
                       notes:[]}
                   ]},
                {id:3,
                weekTarget:[],
                weekDay:[ 
                    { id:'Monday',
                        targets:[],
                       notes:[]
                   },
                       {id:'Tuesday',
                       targets:[],
                       notes:[]},
                       {id:'Wednesday',
                       targets:[],
                       notes:[]},
                       {id:'Thursday',
                       targets:[],
                       notes:[]},
                       {id:'Friday',
                       targets:[],
                       notes:[]},
                       {id:'Saturday',
                       targets:[],
                       notes:[]},
                       {id:'Sunday',
                       targets:[],
                       notes:[]}
                   ]},
                {id:4,
                weekTarget:[],
                weekDay:[ 
                    { id:'Monday',
                        targets:[],
                       notes:[]
                   },
                       {id:'Tuesday',
                       targets:[],
                       notes:[]},
                       {id:'Wednesday',
                       targets:[],
                       notes:[]},
                       {id:'Thursday',
                       targets:[],
                       notes:[]},
                       {id:'Friday',
                       targets:[],
                       notes:[]},
                       {id:'Saturday',
                       targets:[],
                       notes:[]},
                       {id:'Sunday',
                       targets:[],
                       notes:[]}
                   ]},
                {id:5,
                weekTarget:[],
                weekDay:[ 
                    { id:'Monday',
                        targets:[],
                       notes:[]
                   },
                       {id:'Tuesday',
                       targets:[],
                       notes:[]},
                       {id:'Wednesday',
                       targets:[],
                       notes:[]},
                       {id:'Thursday',
                       targets:[],
                       notes:[]},
                       {id:'Friday',
                       targets:[],
                       notes:[]},
                       {id:'Saturday',
                       targets:[],
                       notes:[]},
                       {id:'Sunday',
                       targets:[],
                       notes:[]}
                   ]},
                {id:6,
                weekTarget:[],
                weekDay:[ 
                    { id:'Monday',
                        targets:[]},
                       {id:'Tuesday',
                       targets:[]},
                       {id:'Wednesday',
                       targets:[]},
                       {id:'Thursday',
                       targets:[]},
                       {id:'Friday',
                       targets:[]},
                       {id:'Saturday',
                       targets:[]},
                       {id:'Sunday',
                       targets:[]}
                   ]},
                {id:7,
                weekTarget:[],
                weekDay:[ 
                    { id:'Monday',
                        targets:[],
                       notes:[]
                   },
                       {id:'Tuesday',
                       targets:[],
                       notes:[]},
                       {id:'Wednesday',
                       targets:[],
                       notes:[]},
                       {id:'Thursday',
                       targets:[],
                       notes:[]},
                       {id:'Friday',
                       targets:[],
                       notes:[]},
                       {id:'Saturday',
                       targets:[],
                       notes:[]},
                       {id:'Sunday',
                       targets:[],
                       notes:[]}
                   ]},
                {id:8,
                weekTarget:[],
                weekDay:[ 
                    { id:'Monday',
                        targets:[],
                       notes:[]
                   },
                       {id:'Tuesday',
                       targets:[],
                       notes:[]},
                       {id:'Wednesday',
                       targets:[],
                       notes:[]},
                       {id:'Thursday',
                       targets:[],
                       notes:[]},
                       {id:'Friday',
                       targets:[],
                       notes:[]},
                       {id:'Saturday',
                       targets:[],
                       notes:[]},
                       {id:'Sunday',
                       targets:[],
                       notes:[]}
                   ]},
                {id:9,
                weekTarget:[],
                weekDay:[ 
                    { id:'Monday',
                        targets:[],
                       notes:[]
                   },
                       {id:'Tuesday',
                       targets:[],
                       notes:[]},
                       {id:'Wednesday',
                       targets:[],
                       notes:[]},
                       {id:'Thursday',
                       targets:[],
                       notes:[]},
                       {id:'Friday',
                       targets:[],
                       notes:[]},
                       {id:'Saturday',
                       targets:[],
                       notes:[]},
                       {id:'Sunday',
                       targets:[],
                       notes:[]}
                   ]},
                {id:10,
                weekTarget:[],
                weekDay:[ 
                    { id:'Monday',
                        targets:[],
                       notes:[]
                   },
                       {id:'Tuesday',
                       targets:[],
                       notes:[]},
                       {id:'Wednesday',
                       targets:[],
                       notes:[]},
                       {id:'Thursday',
                       targets:[],
                       notes:[]},
                       {id:'Friday',
                       targets:[],
                       notes:[]},
                       {id:'Saturday',
                       targets:[],
                       notes:[]},
                       {id:'Sunday',
                       targets:[],
                       notes:[]}
                   ]},
                {id:11,
                weekTarget:[],
                weekDay:[ 
                    { id:'Monday',
                        targets:[],
                       notes:[]
                   },
                       {id:'Tuesday',
                       targets:[],
                       notes:[]},
                       {id:'Wednesday',
                       targets:[],
                       notes:[]},
                       {id:'Thursday',
                       targets:[],
                       notes:[]},
                       {id:'Friday',
                       targets:[],
                       notes:[]},
                       {id:'Saturday',
                       targets:[],
                       notes:[]},
                       {id:'Sunday',
                       targets:[],
                       notes:[]}
                   ]},
                {id:12,
                weekTarget:[],
                weekDay:[ 
                    { id:'Monday',
                        targets:[],
                       notes:[]
                   },
                       {id:'Tuesday',
                       targets:[],
                       notes:[]},
                       {id:'Wednesday',
                       targets:[],
                       notes:[]},
                       {id:'Thursday',
                       targets:[],
                       notes:[]},
                       {id:'Friday',
                       targets:[],
                       notes:[]},
                       {id:'Saturday',
                       targets:[],
                       notes:[]},
                       {id:'Sunday',
                       targets:[],
                       notes:[]}
                   ]}
            
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