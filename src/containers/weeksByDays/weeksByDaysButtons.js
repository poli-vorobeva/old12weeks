import React, { useContext } from 'react'
import { Button } from '../../components/Button'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'

export const ButtonsTargetsByDays=()=>{
    const byDaysContext = useContext(ByDaysContext)
 
    const actWeek=(el)=>{
        const actW= el.id        
        byDaysContext.actualWeek(actW)
        
}
    const showAllWeeks=()=>{
        console.log('Показать все недели')
        byDaysContext.showAllWeeks()
    }   
   
    return(
        <div className="col-4 " >
            <div className="btn-group-vertical">
                <p>Недели</p>
                {
                   byDaysContext.weeksArray.map(el=>{
                       //если неделя пустая, то кновка становится disabled, серого цвета=>  и открывается след неделя

                        if(byDaysContext.weeksArray[el.id-1].weekTarget.length===0){
                            return(
                                <Button text={el.id}
                                key={el.id}
                                callback={(e)=> actWeek(el)}
                                dis={true}
                                style={'opacity:0.1'}
                                />
                            )
                        }else{
                            return(
                                <Button text={el.id}
                                key={el.id}
                                callback={(e)=> actWeek(el)}
                            />
                            )
                               
                        }
                    
                   }) 
                }
                <Button text= {'Дальше->'} callback={e=>showAllWeeks()}/>
            </div>
        </div>
       
    )
}