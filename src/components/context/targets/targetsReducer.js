import { ADD_TARGET, SUBTARGETS_SCREEN, 
    GET_CLICKED_TEXT, PUSH_SUBTARGET_LIST_TO_TARGET, 
    ADD_TO_SUBTERGETS_ARR, DROP_TARGETS_TO_WEEKS} from "../types"

const handlers = {
    
    [ADD_TARGET]:(state, payload)=> ({
       ...state, targets:{ ...state.targets,[payload.payload]:{}}
    }),
    [GET_CLICKED_TEXT]: (state, {payload})=>({
        ...state, clickItem: payload.text, 
                    subTargetsBlockVisible: true }),

    [SUBTARGETS_SCREEN]: state => ({...state,targetsReady: true}),

     [DROP_TARGETS_TO_WEEKS]: (state)=>({...state, readyALllList: true}),
 
    [PUSH_SUBTARGET_LIST_TO_TARGET]:(state, {payload})=> ({
                    ...state,                
                        targets:{
                            ...state.targets,
                           [payload.text]:{...state.targets[payload.text],...payload.att}
                        },
                        subTargetsBlockVisible: false, 
            }) ,
    DEFAULT: state=>state
}

export const targetsReducer=(state,action)=>{
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state,action)
}