import React, { useReducer} from 'react'
import { WeeksContext } from './weeksContext'
import weeksReducer from './weeksReducer'
import { SELECT_TERGET, ADD_ARRAY, PUT_INTO_WEEK, DELETE_ITEM, CLICKED_WEEK, NEW_LIST_OF_ITEMS} from './types'
import { UNMOUNT_UL, PUSHED_ARRAY, BY_WEEKS } from '../types'

export const WeeksState = ({children}) =>{
    const initialState={
        targets: '',
        weeks:[
                {id:1,
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

    const addArray=(arrayFromTargets)=>dispatch({type:ADD_ARRAY,payload: {arrayFromTargets}})
    
    const clickedItem=(text,parentTarget,newTarget)=>{
       dispatch({
                type: SELECT_TERGET,
                payload:{
                    text, parentTarget,newTarget
                }
            })
    }
    const clickedWeek =(weekCl)=>{
            dispatch({
                type: CLICKED_WEEK,
                payload:{
                    text: weekCl
                }
            })
        }

    const putIntoWeek=(weekCl, nTarget)=>{
       dispatch({
                type:PUT_INTO_WEEK,
                payload:{
                    week: weekCl,
                    target: nTarget
                }
               
            })
    }

    const deleteItem=(parentTarget, copyObjectWithout)=>{
       dispatch({
                type:DELETE_ITEM,
                payload:{ 
                    parentTarget, copyObjectWithout
                }
            }) 
    }
    const pushedArrayF=(forReduserArray)=>{
        dispatch({
            type: PUSHED_ARRAY,
            payload: {pushedArray:forReduserArray}
        })
    }
    const unmountEmpty= (forReduserArray)=>{
        dispatch({
                type:UNMOUNT_UL,
                payload:{ 
                    forReduserArray
                }
            }) 
        }
    const byWeeksF=()=>dispatch({type:BY_WEEKS})

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