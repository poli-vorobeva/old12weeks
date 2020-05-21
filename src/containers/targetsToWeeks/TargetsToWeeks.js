import React, { useReducer, useContext, useState } from 'react'
import { WeeksContext } from '../../components/context/weeks/weeksContext'
import { Button } from '../../components/Button'

export const TargetsToWeeks=()=>{
    const weeksContext = useContext(WeeksContext)
    
    
    
    const getClickedItem= async(e, elem)=>{
        const text = e.target.innerHTML
        console.log(JSON.stringify(weeksContext.arrayFromTargets['первая задача'][2]))
        const parentTarget = elem
        const newTarget= {
            name: text,
            parentTarget: elem
        }
        
        weeksContext.clickedItem(text,parentTarget,newTarget)

     /*    
        const clickedItemInArray = weeksContext.arrayFromTargets[el][text]
        const itemsTarget = el
        weeksContext.clickedItem(text, clickedItemInArray, itemsTarget) */
        //получаем кликнутый элемент в массиве
       
    }
   
     return(
        
         <div className=" weeks row">

            {

                Object.keys(weeksContext.arrayFromTargets)
                        .filter(el=>el!==weeksContext.ulTargetForDelete)//все элементы, которые не равны удаляемой задаче
                        .map(el=>{
                       if(JSON.stringify(weeksContext.arrayFromTargets[el]) !== '{}'){// если элемент не равен пустому объ
                                return(
                                    <div className="card  col-md-2" style={{width: '18rem'}} key = {el}>
                                          
                                          
                                            <div className="card-header">
                                                {el}
                                            </div>
                                        <ul className="list-group list-group-flush">
                                            {Object.keys(weeksContext.arrayFromTargets[el]).map(item=>{
                                                return(
                                                <li className="list-group-item" 
                                                    key={item}
                                                    onClick={e=>getClickedItem(e, el)}
                                                    >{item}
                                                    </li > /* название задачи */)
                                                })
                                            }       
                                        </ul>
                               
                                    </div> 
                                )
                            }

                })


            }  
            
       
         </div>

    )
}



        