import React, { useContext } from 'react'
import { ByDaysContext } from '../../../../components/context/weeksByDays/byDaysContext'

export const Note=()=>{
    const divStyle= {
       // height:'100vh',
       // backgroundColor:'olive',
        position: 'fixed',
        top:0,
        right:0
    }
    const deg= Math.floor(Math.random()*20)
    const divElStyle={
        backgroundColor:'olive',
        transform: `rotate(20deg)`,
        width: '200px',
        height: '100px',
    }
    //console.log(deg)
    const byDaysContext = useContext(ByDaysContext)

    const noteDay= byDaysContext.weeksArray[byDaysContext.numberOfTrackingWeek].weekDay
    
    //console.log(noteDay)
    return(
        <div style={ divStyle} className='col-md-2'>
            
            { noteDay.map(el=>{
                return(el.notes.map(e=>{
                    if(e.day==byDaysContext.nameEngTrackingDay){//только задачи одного дня
                        return <div style={divElStyle}>
                        <hr/>
                        <p>{e.text}</p>
                        </div>
                    }
                })
                 )
             })               
            }     
        </div>
        )
}