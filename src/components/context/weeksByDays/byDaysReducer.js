import React from 'react'

const handlers={
    DEFAULT: state=>state
}
export const ByDaysReducer=(state,action)=>{
    const handle= handlers[action.type]||handlers.DEFAULT
    return handle(state,action)
}