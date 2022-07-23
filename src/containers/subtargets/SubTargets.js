import React, { useContext, useState, useEffect} from 'react'
import { Button } from '../../components/Button'
import { SubTargetsForm } from './SubTargetsFrom'
import { TargetsContext } from '../../components/context/targets/targetsContext'
import { WeeksContext } from '../../components/context/weeks/weeksContext'
import './SubTargets.css'
import { CSSTransition } from 'react-transition-group'

export const SubTargets = ()=>{
    const [visibleBlock, setVisibleBlock]=useState(false)
    
    const [text, setText] = useState('')
    const targetsContext= useContext(TargetsContext)
    const weeksContext = useContext(WeeksContext)
    useEffect(()=>{
        targetsContext.subTargetsBlockVisible?setVisibleBlock(true):setVisibleBlock(false)
        console.log(visibleBlock,'vgbgfbghbnhnh!!!!!!!!!!!!')

            },[targetsContext.subTargetsBlockVisible])
    const getClickedElement=(e)=>{      
        //тескт Цели для которой сохдаются подзадачи
        e.preventDefault()
        setText(e.target.parentNode.firstChild.innerHTML)
        targetsContext.getClickedElement(text)
        
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
        weeksContext.addArray(arrayWithoutEmptyTargets)
        console.log(arrayFromTargets)
        targetsContext.readyTargetsList()
       
    } 
    //анимация для блока
    /* let vis=targetsContext.subTargetsBlockVisible



    vis?setVisibleBlock(true):setVisibleBlock(false)
    console.log(vis,'!!!!!!!!!!!!!') */



    return(
        <div className="row subtargetsStyle">
            <div className="col-md-6">
                {
                    
                    Object.keys(targetsContext.targets).map(k=>{
                        return(  
                            <div className="list-group-item" key={k} id={k}>
                                <div className="panel-body" >
                                    <span>{k}</span>
                                   
                                <Button text="+"
                                    callback={e=>getClickedElement(e)}
                                    id="buttonAdd"
                                    dis={targetsContext.subTargetsBlockVisible?true:''}
                                    />  
                                </div>
                            </div>
                              
                        )
                    })
                }
                <Button text="ВСЕ ГОТОВО" id="buttonReady"
                callback={readyList}/>
            </div>
                {targetsContext.subTargetsBlockVisible
                ?
                <CSSTransition
                in={visibleBlock}
                timeout={300}
                classNames={'stWr'}
                unmountOnExit
                mountOnEnter
                >
                <div className="col-md-6">                  
                            <div className="card" id="SubTargetsFormWrapper"> 
                                <div className="card-body">
                                   
                                    <SubTargetsForm text={text}  />
                                  
                                    
                                  
                                </div>
                        </div>
                    </div>
                    </CSSTransition>
                : null
                }
             
        </div>
        )
            }