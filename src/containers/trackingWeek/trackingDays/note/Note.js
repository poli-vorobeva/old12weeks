import React, { useContext, useEffect, useState } from 'react'
import { ByDaysContext } from '../../../../components/context/weeksByDays/byDaysContext'
import { AxiosContext } from '../../../../components/context/axiosContext/axiosContext'
import axios from 'axios'
import {Button} from '../../../../components/Button'

export const Note=()=>{
    //передать нотс в notesreducer
    const divStyle= {
        position: 'fixed',
        top:0,
        right:0
    }
    const deg= Math.floor(Math.random()*20)
    
    const divElStyle={
        backgroundColor: `rgba(154, 39, 189, 0.5)`,
        transform: `rotate(10deg)`,
        width: '200px',
        height: '50px',
        marginTop:'5px'
    }
    const byDaysContext = useContext(ByDaysContext)
    const axiosContext= useContext(AxiosContext)
    const noteDay= byDaysContext.weeksArray[byDaysContext.numberOfTrackingWeek].weekDay
    //console.log(noteDay)
    //если нет массива с нотс новый не создается 
    const newA= noteDay.forEach(element=>{
        if(element.targets!==undefined){
            console.log('нотсов нет')
            if(element.notes==false){
               element.notes=[]
            }
        }
    })
    const addNote=async()=>{
        //если авторизован, то изменяем запись(добавляем нотс)
        const plans= byDaysContext.weeksArray
        console.log(plans, 'планы')
        const key= axiosContext.key
        try{
            await axios.patch(`https://weeks-2ade6.firebaseio.com/targets/${key}.json`, {
                userId: axiosContext.localId,userPlans: plans
                
            })
            .then((response) => {
                axiosContext.plansArr(plans)
               
            })
            
            
        }catch(e){
            console.log(e)
        }
        
    }
    useEffect(()=>{
        addNote()
    },[noteDay])
    //здесь массив получает нотс
    //надо диспатчить перезапись массива userPlans
    const removeNote=(e)=>{
       const txt= e.currentTarget.id
        byDaysContext.removeNote(txt)
    }
    return(
        <div style={ divStyle} className='col-md-4 Note'>
            
            { 
            noteDay.map(el=>{
                if(el.notes!==false &&el.notes!==undefined){
                    return(el.notes.map(e=>{
                        if(e!==undefined){
                            if(e.day==byDaysContext.nameEngTrackingDay){//только задачи одного дня

                                return <div style={divElStyle} className={'pWrapper'}> 
                                <p>{e.text} <Button id={e.text} callback={e=>removeNote(e)} text={<i className="fas fa-check"/>}/>
                                </p>
                                
                                </div>
                            } 
                        }
                    })
                     )
                }else{
                    return null
                }
                
             })               
            }     
        </div>
        )
}