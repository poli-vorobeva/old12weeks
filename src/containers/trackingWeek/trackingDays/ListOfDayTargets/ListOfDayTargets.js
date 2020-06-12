import React, { useContext, useState } from 'react'
import { ByDaysContext } from '../../../../components/context/weeksByDays/byDaysContext'

export const ListOfDayTargets=(dayFullEng)=>{
    const byDaysContext=useContext(ByDaysContext)
    const [clkLiTxt,setClkLiTxt]=useState('')
    //let clkLiTxt=''

    const clickedLi=(e)=>{//повесить обработчтк на ли
        /*   console.log(" clicked li")
         console.log(e.target)
         console.log(e.currentTarget.id)
         const liTxt=e.currentTarget.id
        setClkLiTxt(liTxt)
         byDaysContext.clkLi(liTxt)
         console.log('^^^^^'+clkLiTxt) */
     }
     console.log(clkLiTxt)
     const doneFunction=(e)=>{
        e.target.parentNode.parentNode.style.color="gray"
        e.target.parentNode.parentNode.style.textDecoration="line-through"
        const doneLiText= e.target.parentNode.parentNode.parentNode.id
        //меняем с стейте состояние задачи
        const weeksTargetDone= byDaysContext.numberOfTrackingWeek

        byDaysContext.doneTarget(doneLiText,weeksTargetDone,dayFullEng)
        console.log('Сделано'+byDaysContext.weeksArray)
    }
    const importantFunction=(e)=>{
        e.target.parentNode.parentNode.style.color="red"
        e.target.parentNode.parentNode.style.fontWeight="bold"
}
//создаем заметки
    const noteFunction=(e)=>{
        const targN = e.target.parentNode.innerText
        const noteDay = dayFullEng//день недели
        byDaysContext.notesInput(noteDay, targN)
        
    } 

    return(
        <ul  className="list-group">
        {
            byDaysContext.weeksArray[byDaysContext.numberOfTrackingWeek].weekDay.map(element=>{
               
                
                if(element.id==dayFullEng.dayFullEng){
                  
                        const tgs=element.targets.map(t=>{
                        //по нажатию на добавить заметку, открывается инпут, для заметки, и 
                                //при ее генерации, появится блок с заметкой спава на экране
                            return([
                                <div id={t.name}>
                                    <li key={t.name}
                                    id={t.name}
                                    onClick={e=>clickedLi(e)}
                                        className="list-group-item d-flex justify-content-between align-items-center  liTargetsButtons"
                                        >{t.name}
                                        <div>
                                            <button 
                                            id={t.name}
                                            className="btn btn-primary ml-2 done" 
                                            onClick={e=> doneFunction(e)}>
                                            <i className="fas fa-check"/>
                                            </button>
                                            <button className="btn btn-primary ml-2" 
                                                onClick={e=> importantFunction(e)}>
                                            <i className="fas fa-exclamation"/>
                                            </button>
                                            <button className="btn btn-primary ml-2" 
                                                onClick={e=> noteFunction(e)}>
                                            <i className="far fa-sticky-note"/>
                                        </button>
                                        </div>
                                    </li> 
                                    
                                    </div>                              
                            ])
                        })   
                        return tgs
                    }
            })  
        }
    </ul>
    )
}