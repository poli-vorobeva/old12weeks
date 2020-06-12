import React, { useState, useContext, Fragment } from 'react'
import { Button } from '../../components/Button'
import { TargetsContext } from '../../components/context/targets/targetsContext'

export const SubTargetsForm = (text)=>{
    const clText = text.text
    const [value,setValue]= useState('')
    const [subtargetsArray, setSubtargetsArray]= useState({})
    const subtargetsInput = useContext(TargetsContext)

    //Сабмит формы
    const submitHandler=async (event)=>{
        event.preventDefault()

        setSubtargetsArray({
            ...subtargetsArray,
            [value]: false
        });
        setValue('')
    }
    //клик на кнопку готово---
    const getSubTargetsList=(e)=>{
        e.preventDefault()
        const key = subtargetsInput.clickItem
        const att= subtargetsArray
      
        subtargetsInput.pushSubListToTarget(key, att)
       // setSubtargetsArray({})
        

        
    console.log(subtargetsInput.targets)
    }
    
    return(
        <Fragment>
            <form 
                className="input-group input-group-lg form"
                onSubmit={submitHandler}>                
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="разбейте цель на маленькие задачи"
                        value={value}
                        onChange={e=>setValue(e.target.value) } 
                        />
                   
                <Button text='+' type="submit"/>
                </div>          
            </form>
            <ul> 
                    {   
                        Object.keys(subtargetsArray).map(el=>{
                            return<li key={el}>{el}</li>
                        })
                    }
            </ul>
            <Button            
                text ="Готово" 
                callback={e=>getSubTargetsList(e)}
                />
        </Fragment>
        

    )
   
}