import React, { useContext } from 'react'
import { ByDaysContext } from '../../../../components/context/weeksByDays/byDaysContext'
import './listOfDayTargets.css'

export const ListOfDayTargets=(dayFullEng)=>{
    const byDaysContext=useContext(ByDaysContext)

    const clickedLi=(e)=>{//повесить обработчтк на ли
    }
    
     const doneFunction=(e)=>{
        e.target.parentNode.parentNode.style.color="gray"
        e.target.parentNode.parentNode.style.textDecoration="line-through"
        const doneLiText= e.target.parentNode.parentNode.parentNode.id
        //меняем с стейте состояние задачи
        const weeksTargetDone= byDaysContext.numberOfTrackingWeek

        byDaysContext.doneTarget(doneLiText,weeksTargetDone,dayFullEng)
        console.log('Сделано'+byDaysContext.weeksArray)
    }
    const doneStyle={
        color: 'gray',
        textDecoration:"line-through"
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
        <ul  className="list-group listOfDayTargets">
        {
            byDaysContext.weeksArray[byDaysContext.numberOfTrackingWeek].weekDay.map(element=>{
                if(element.id==dayFullEng.dayFullEng){
                    if(element.targets!==undefined){
                        const tgs=element.targets.map(t=>{
                            //по нажатию на добавить заметку, открывается инпут, для заметки, и 
                                    //при ее генерации, появится блок с заметкой спава на экране
                                return([
                                    <div id={t.name}>
                                        <li key={t.name}
                                            id={t.name}
                                            style={t.done?doneStyle:undefined}
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
                    
                        
                }
                
            })  
        }
    </ul>
    )
}