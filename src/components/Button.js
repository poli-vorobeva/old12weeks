import React from 'react'

export const Button =({id,text,key, callback})=>{
    return(
        
        <button 
        id={id}
        className="btn btn-primary ml-2" 
        type="submit"
        onClick={callback}
        key={key}
        
        
        >{text}
        </button>
    )
}