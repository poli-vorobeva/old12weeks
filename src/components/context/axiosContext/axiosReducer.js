import { USER_ID } from "../weeksByDays/types"
import { USER_KEY, PLANS_ARRAY, SERVER_PLANS_ARRAY, CLEAR_AXIOS_CONTEXT} from "./types"

const handlers={
    [USER_ID]:(state,{payload})=>({...state, userId: payload.userId,isLogin:true,userPlans:[...payload.plans]}),
    [USER_KEY]:(state,{payload})=>({...state, key:payload.key}),
    [PLANS_ARRAY]:(state,{payload})=>({...state, userPlans:payload.userArray}),
    [SERVER_PLANS_ARRAY]:(state,{payload})=>({...state, userPlans:payload.userWeekArray,key:payload.key,isLogin:true}),
    [CLEAR_AXIOS_CONTEXT]:(state)=>({
        ...state,
        userId:'',
        isLogin:false,
        key:'',
        userPlans:[]
    }),
    DEFAULT:state=> state
}


export const axiosReducer=(state,action)=>{
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}