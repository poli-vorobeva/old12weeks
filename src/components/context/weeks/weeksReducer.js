import { SELECT_TERGET, ADD_ARRAY, PUT_INTO_WEEK, CLICKED_WEEK,
     DELETE_ITEM} from "./types"
import { UNMOUNT_UL, PUSHED_ARRAY, BY_WEEKS} from "../types";

const handlers = {
    [ADD_ARRAY]:(state, {payload})=>(
                    {...state,
                    targets:payload.arrayFromTargets,
                    arrayFromTargets: payload.arrayFromTargets}
    ),
    [SELECT_TERGET]: (state, {payload})=> (
        {...state, 
        clickedItemText: payload.text,
        newTarget: payload.newTarget,
        itemsTarget: payload.parentTarget}),

    [CLICKED_WEEK]: (state, {payload})=> ({...state, pushedWeek: payload.text}) ,                
    
   [PUT_INTO_WEEK]:(state, {payload})=> ({
                        ...state ,
                            weeks: state.weeks.map(item=>{
                                if(item.id==payload.week){
                                    
                                return{
                                    ...item,
                                    weekTarget: (Object.keys(item.weekTarget).length==0?[payload.target]:[...item.weekTarget, payload.target])
                                  
                                  }}return item;
                                }),
                        newTarget:{},
                    }),

   
    [DELETE_ITEM]:(state, {payload})=>(
        { ...state,
                    arrayFromTargets: {...state.arrayFromTargets, 
                            [payload.parentTarget]: {...payload.copyObjectWithout}}
             }),
    [PUSHED_ARRAY]:(state,{payload})=>({
        ...state,
        pushedArray: {...payload.pushedArray}
    }), 
    [UNMOUNT_UL]:(state,{payload})=>(
      { ...state,
            arrayFromTargets: {...state.pushedArray}
     }), 
    [BY_WEEKS]:(state)=>({...state, byWeeks:true}),
    DEFAULT: state=>state

}
const weeksReducer = (state, action)=>{
const handle = handlers[action.type]|| handlers.DEFAULT
    return handle(state,action)
}

export default weeksReducer