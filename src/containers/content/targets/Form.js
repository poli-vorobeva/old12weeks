import React, { useState, useContext } from 'react'
import { Button } from '../../../components/Button'
import { TargetsContext } from '../../../components/context/targets/targetsContext'

export const Form=()=>{
    const [value,setValue]= useState('')
    const targetsInput = useContext(TargetsContext)

const submitHandler=(event)=>{

        event.preventDefault()
        targetsInput.addTarget(value)
        //console.log(`вэлью-${value}`)
       //console.log(targetsInput)
        setValue('')
    }
    
    return(
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
    )
}