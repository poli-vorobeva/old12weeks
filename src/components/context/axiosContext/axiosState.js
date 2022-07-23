import React, { useReducer} from 'react'
import { AxiosContext } from './axiosContext'
import { axiosReducer } from './axiosReducer'
import { USER_ID } from '../weeksByDays/types'
import { USER_KEY, PLANS_ARRAY, SERVER_PLANS_ARRAY, CLEAR_AXIOS_CONTEXT } from './types'

export const AxiosState=({children})=>{

    const initialState={
        userId:'',
        isLogin:false,
        key:'',
        userPlans:[]
    }
    
    
    const [state,dispatch] = useReducer(axiosReducer, initialState)

    const setUserId=(userId,plans)=>dispatch({type: USER_ID, payload:{userId,plans}})
    const setKey=(key)=>dispatch({type: USER_KEY, payload:{key}})
    const plansArr=(userArray)=>{
       //console.log('!!!!!', userArray)
       dispatch({type: PLANS_ARRAY, payload:{userArray}})
   }
    const serverPlansArray=(userWeekArray,key)=>{
        dispatch({type: SERVER_PLANS_ARRAY, payload:{userWeekArray,key}})
    }
   const clearState=()=> dispatch({type: CLEAR_AXIOS_CONTEXT})
    return(
        <AxiosContext.Provider value={{ setUserId,setKey,plansArr,serverPlansArray,clearState,
            userId:state.userId,
            isLogin:state.isLogin,
            key:state.key,
            userPlans:state.userPlans
        }}>
            {children}
        </AxiosContext.Provider>
    )
}