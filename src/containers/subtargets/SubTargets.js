import React, { useContext, useState, useEffect} from 'react'

import { Button } from '../../components/Button'
import { SubTargetsForm } from './SubTargetsFrom'
import { TargetsContext } from '../../components/context/targets/targetsContext'
import { WeeksContext } from '../../components/context/weeks/weeksContext'

export const SubTargets = ()=>{
    const buttons= document.querySelectorAll('#buttonAdd')

    const [text, setText] = useState('')

    const targetsContext= useContext(TargetsContext)
    const weeksContext = useContext(WeeksContext)

    const getClickedElement= async (e)=>{      
        e.preventDefault()
        const text = e.target.parentNode.firstChild.innerHTML
        targetsContext.getClickedElement(text)
        console.log(targetsContext.targets[text])
        
    }
       
        //проверить есть ли у  элемента в массиве targets
        // с именем Клика что-то, если есть, то выводим его

    const readyList=()=>{
        const arrayFromTargets = JSON.parse(JSON.stringify(targetsContext.targets))
        const arrayWithoutEmptyTargets= {}
        for (let key in arrayFromTargets){
            if (JSON.stringify(arrayFromTargets[key])!=='{}'){
                arrayWithoutEmptyTargets[key]=arrayFromTargets[key]

            }
        } 
        //console.log(Object.keys(arrayWithoutEmptyTargets))
        //targetsContext.addList()           
        weeksContext.addArray(arrayWithoutEmptyTargets)
        console.log(arrayFromTargets)
        targetsContext.readyTargetsList()
    } 

    return(
        <div className="row">
            <div className="col-md-6">
                {
                    
                    Object.keys(targetsContext.targets).map(k=>{
                        return(  
                            <div className="list-group-item" key={k}>
                                <div className="panel-body">
                                    <span>{k}</span>
                                   
                                <Button text="+"
                                    callback={e=>getClickedElement(e)}
                                    id="buttonAdd"
                                    />  
                                </div>
                            </div>
                              
                        )
                    })
                }
                <Button text="ВСЕ ГОТОВО"
                callback={readyList}/>
            </div>
                {targetsContext.subTargetsBlockVisible
                ? <div className="col-md-6">                  
                            <div className="card"> 
                                <div className="card-body">
                                    <SubTargetsForm text={text}/>
                                  
                                </div>
                        </div>
                    </div>
                : null
                }
             
        </div>
        )
            }