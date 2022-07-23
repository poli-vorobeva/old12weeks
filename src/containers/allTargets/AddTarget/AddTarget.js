import React, { Fragment, useContext, useState } from 'react'
import { WeeksContext } from '../../../components/context/weeks/weeksContext'
import './AddTarget.css'
import { Button } from '../../../components/Button'
import { ByDaysContext } from '../../../components/context/weeksByDays/byDaysContext'
import { AxiosContext } from '../../../components/context/axiosContext/axiosContext'
import axios from 'axios'

export const AddTarget=()=>{
    const byDaysContext= useContext(ByDaysContext)
    const weeksContext= useContext(WeeksContext)
    const axiosContext = useContext(AxiosContext)
    const weekDay={
        'Пн':'Monday' ,
        'Вт':'Tuesday',
        'Ср':'Wednesday',
        'Чт':'Thursday',
        'Пт': 'Friday',
        'Сб': 'Saturday',
        'Вс': 'Sunday'
    }
    const [weekCh, setWeekCh]=useState('')
    const [weekDayCh, setWeekDayCh]= useState('')
    const [addNewTarget, setAddNewTarget]= useState('')
    
    const addTarget=async()=>{
        //если авторизован, то изменяем запись(добавляем нотс)
        const plans= byDaysContext.weeksArray
        console.log(plans, 'планы')
        const key= axiosContext.key
        try{
            await axios.patch(`https://weeks-2ade6.firebaseio.com/targets/${key}.json`, {
                userId: axiosContext.localId,userPlans: plans
                
            })
            .then(() => {
                axiosContext.plansArr(plans)
               
            })
            
            
        }catch(e){
            console.log(e)
        }
        
    }
    const addTargetSubmit=(e)=>{
        e.preventDefault()
        const tgtForPut={
            name:addNewTarget,
            done:false,
            important:false,
            adds:''
        }
        byDaysContext.weeksArray!==undefined&&byDaysContext.addMoreTargetReady(weekCh,weekDayCh,tgtForPut)
        setAddNewTarget('')
        setWeekCh('')
        setWeekCh('')
        byDaysContext.closeNewTargetF()
        addTarget()
        console.log(byDaysContext.weeksArray)
    }

    const closeAddTargetForm=()=>{
        byDaysContext.closeNewTargetF()
    }
    return(
        <div className="screenGray">
                
            <div className='addFormWrapper'>
                <h1> Новая задача</h1>
                <h3 className='closeAddNote' onClick={closeAddTargetForm}>X</h3>
                 <hr/>
                <form onSubmit={e=>addTargetSubmit(e)} >
                    <div className={"weeksCheckbox"}>
                        
                    <div>Выберите неделю</div>
                    <div>

                        {
                            weeksContext.weeks.map(element => {
                            const number= weeksContext.weeks.indexOf(element)+1
                                const i= `${number}`
                                return(
                                    <div className="form-check" key={i}>
                                        <input className="form-check-input" 
                                                type="radio" 
                                                id={i} 
                                                value={i} 
                                                name="formWeek"
                                                onChange={e=>setWeekCh(e.target.id)}/>
                                        <label className="form-check-label" for={i}>
                                            {number}
                                        </label>
                                    </div>
                                    )
                            })
                        }
                    </div>
                    </div>
                    <hr/>
                <div className={"weekDays"}>
                    <div>Выберите день</div>
                    <div>
                    {
                        Object.entries(weekDay).map(el=>{
                            return(
                                <div class="form-check" key={el[1]}>
                                    <input className="form-check-input" 
                                            type="radio" 
                                            id={el[1]}
                                            value={el[1]} 
                                            name="formWeekDays"
                                            onChange={e=>setWeekDayCh(e.target.id)}/>
                                    <label className="form-check-label" for={el[1]}>
                                        {el[0]}
                                    </label>
                                </div>
                                )
                        })
                    }
                    </div>
                    
                </div>
                <hr/>
                <div>

                    <div class="form-check">
                        <input 
                                type="text" 
                                className="form-control"
                                placeholder="Введите название заметки"
                                value={addNewTarget}
                                onChange={e=>setAddNewTarget(e.target.value)}/>
                                        
                    </div>
                
                </div>
                <Button
                text={'Готово'}/>
                </form>
            </div>
        </div>
    )
}