import React, { useState, useContext } from 'react'
import { Button } from '../../../../components/Button'
import { TargetsContext } from '../../../../components/context/targets/targetsContext'
import { RegisterForm } from '../../../../components/RegisterForm/RegisterForm'

export const Form=()=>{
    const [val,setVal]= useState('')
    const targetsContext = useContext(TargetsContext)

const submitHandler=(event)=>{
        event.preventDefault()
        const value= val.trim()
        value!==''&& targetsContext.addTarget(value)
        setVal('')
    }
  
  
    return(
        <div>
        <form 
            className="input-group input-group-lg form"
            onSubmit={submitHandler}>                
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Введите название заметки"
                        value={val}
                        onChange={e=>setVal(e.target.value) } 
                        />
                 <Button text='+' type="submit"/>
                </div>          
        </form>
           {
            !targetsContext.targetsReady && JSON.stringify(targetsContext.targets)[2] && <Button text ="Список готов" callback={targetsContext.addList}/>
           }
         
        </div>
       
    )
}