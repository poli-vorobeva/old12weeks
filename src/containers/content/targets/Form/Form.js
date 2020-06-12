import React, { useState, useContext } from 'react'
import { Button } from '../../../../components/Button'
import { TargetsContext } from '../../../../components/context/targets/targetsContext'
import { RegisterForm } from '../../../../components/RegisterForm/RegisterForm'

export const Form=()=>{
    const [value,setValue]= useState('')
    const targetsContext = useContext(TargetsContext)

const submitHandler=(event)=>{
        event.preventDefault()
        targetsContext.addTarget(value)
        setValue('')
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
                        value={value}
                        onChange={e=>setValue(e.target.value) } 
                        />
                 <Button text='+' type="submit"/>
                </div>          
        </form>
           {
            !targetsContext.targetsReady && <Button text ="Список готов" callback={targetsContext.addList}/>
           }
         
        </div>
       
    )
}