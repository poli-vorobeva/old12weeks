import React, {useContext} from 'react'
import { WeeksContext } from '../../components/context/weeks/weeksContext'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './TargetsToWeeks.css'
import Radium from 'radium'

const TargetsToWeeks=()=>{
    const weeksContext = useContext(WeeksContext)
    
    
    
    const getClickedItem=(e, elem)=>{
        e.target.style.backgroundColor="rgba(75, 15, 216, 0.842)"
        e.target.style.color="white"

        const text = e.target.innerHTML
        const parentTarget = elem
        const newTarget= {
            name: text,
            parentTarget: elem
        }
        
        weeksContext.clickedItem(text,parentTarget,newTarget)
       
    }
    const style={
        ':hover':{
            backgroundColor: 'rgba(75, 15, 216, 0.158)',
            color:'white'
        }
    }
     return(
        
         <div className=" weeks row">

            {

                Object.keys(weeksContext.arrayFromTargets)
                        .filter(el=>el!==weeksContext.ulTargetForDelete)//все элементы, которые не равны удаляемой задаче
                        .map(el=>{
                       if(JSON.stringify(weeksContext.arrayFromTargets[el]) !== '{}'){// если элемент не равен пустому объ
                                return(
                                    <div className="card  col-md-3" style={{width: '18rem'}} key = {el}>
                                          
                                          
                                            <div className="targetsToWeekHeader">
                                                {el}
                                            </div>
                                        <TransitionGroup component={'ul'} className="list-group list-group-flush">
                                            {Object.keys(weeksContext.arrayFromTargets[el]).map(item=>{
                                                return(
                                                    <CSSTransition
                                                    timeout={500}
                                                    key={item}
                                                    classNames={'itemSubTarget'}
                                                    >
                                                        <li  style={style} key={item} className="list-group-item targetsToWeekListItem" 
                                                        onClick={e=>getClickedItem(e, el)}
                                                        >
                                                        <div className='listItemDiv'>
                                                            {item}

                                                        </div>
                                                        </li >
                                                        
                                                    </CSSTransition> /* название задачи */)
                                                })
                                            }       
                                        </TransitionGroup>
                               
                                    </div> 
                                )
                            }
                            return

                })


            }  
            
       
         </div>

    )
}

export default Radium(TargetsToWeeks)

        