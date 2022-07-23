import React from 'react'

export const Button =({id,text,key, callback,dis,style})=>{
    return(
        
        <button 
        id={id}
        className="btn btn-primary ml-2" 
        type="submit"
        onClick={callback}
        key={key}
        disabled={dis||false}
        style={{style}}
        
        
        >{text}
        </button>
    )
}