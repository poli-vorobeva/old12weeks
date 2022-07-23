import React, { useState, useContext, Fragment } from 'react'
import { Button } from '../../components/Button'
import { TargetsContext } from '../../components/context/targets/targetsContext'
import { ListOfSubTargets } from './ListOfSubtargets/ListOfSubTargets'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './SubTargetsForm.css'

export const SubTargetsForm = (text)=>{
    const clText = text.text
    const [value,setValue]= useState('')
    const [subtargetsArray, setSubtargetsArray]= useState({})
    const subtargetsInput = useContext(TargetsContext)
    //Сабмит формы
    const submitHandler=(event)=>{
        event.preventDefault()
        if(value.trim()!==''){
            setSubtargetsArray({
                ...subtargetsArray,
                [value]: false
            });
            
        }setValue('')
        
    }
    //клик на кнопку готово---
    const getSubTargetsList=(e)=>{
        e.preventDefault()
        const key = clText
        const att= subtargetsArray
      
        subtargetsInput.pushSubListToTarget(key, att)
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
            <TransitionGroup component={'ul'} className='subtargetsList'> 
                    {   
                        Object.keys(subtargetsArray).map(el=>{
                            return <CSSTransition
                            key={el}
                            classNames={'subtargets'}
                            timeout={500}
                            >
                                        <li>{el}</li>
                                    </CSSTransition>
                        })
                    }
            </TransitionGroup>
            <Button            
                text ="Добавить" 
                callback={e=>getSubTargetsList(e)}
                />
            <ListOfSubTargets text={clText}/>
        </Fragment>
        

    )
   
}