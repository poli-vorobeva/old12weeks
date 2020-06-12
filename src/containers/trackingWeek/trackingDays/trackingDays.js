import React, { useContext } from 'react'
import { ByDaysContext } from '../../../components/context/weeksByDays/byDaysContext'
import { Note } from './note/Note'
import { NoteInput } from '../../../components/NoteInput'
import { ListOfDayTargets } from './ListOfDayTargets/ListOfDayTargets'

export const TrackingDays=()=>{
    const byDaysContext= useContext(ByDaysContext)
    const day = {
            'Пн':'Понедельник',
            'Вт':'Вторник', 
            'Ср':'Среда',
            'Чт':'Четверг',
            'Пт':'Пятница',
            'Сб':'Суббота', 
            'Вс':'Воскресение'}
    const week={
            'Monday': 'Пн',
            'Tuesday':'Вт',
            'Wednesday':'Ср',
            'Thursday':'Чт',
            'Friday':'Пт',
            'Saturday':'Сб',
            'Sunday': 'Вс'
            } 

    let dayFull=''//полное название на русском
    let dayFullEng=''
    Object.entries(day).map(el=>{
            if(el[0]==byDaysContext.numberOfTrackingDay){
                dayFull = el[1]
            }
        })
    Object.entries(week).map(el=>{
        if(el[1]==byDaysContext.numberOfTrackingDay){
            dayFullEng=el[0]

        } 
    })
    let count=0
    let targetsLenght=0
    //процент выполненных задач
    let percents=0
    byDaysContext.weeksArray[byDaysContext.numberOfTrackingWeek].weekDay.map(el=>{
            
        if(el.id == dayFullEng){
              el.targets.map(t=>{
                 targetsLenght = targetsLenght + 1
                    t.done && count++
                    percents= Math.floor(count/targetsLenght * 100) 
                } )
            } 
    }) 
    //console.log(percents) 
    
    return(
        <div className= "col-md-5">
            <div>
                <div>
                    <h1>{dayFull}</h1>
                </div>
                <ListOfDayTargets dayFullEng={dayFullEng}/>
                {byDaysContext.divNotes&&
                    <NoteInput />
                }
                <p>Сделано:  {percents} %</p> 
            </div>
           
        </div>   
    )
}