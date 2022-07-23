import React, { useContext, useState } from 'react'
import { Button } from '../Button'
import { ByDaysContext } from '../context/weeksByDays/byDaysContext'
import axios from 'axios'
import { AxiosContext } from '../context/axiosContext/axiosContext'

export const NoteInput=()=>{
    const byDaysContext= useContext(ByDaysContext)
    const axiosContext= useContext(AxiosContext)
    const [value,setValue]= useState('')
  
    const submitNote= async (e)=>{
        e.preventDefault()
        const noteText= value
        byDaysContext.allNotesList(noteText)
        byDaysContext.notesInput()
        try{//добавляем новую Учетную запись только если еще она не слеоана, т.е. нет массива с планами, если он есть то
           //в Note
                const key= axiosContext.key
                if(key===undefined){
                    console.log('создаем запись')
                    await axios.post('https://weeks-2ade6.firebaseio.com/targets/.json', 
                    {userId: axiosContext.localId,userPlans:byDaysContext.weeksArray})
                }
        }catch(e){
            console.log(e)
        }
    }
    return(
        <form className="formNote" onSubmit={e=>submitNote(e)}>                
            <div className='divNote'>
             
                <div className="inputNote">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Введите название заметки"
                    value={value}
                    onChange={e=>setValue(e.target.value)}
                    />
             <Button text='+' type="submit"/>
                </div>
              
            </div>          
        </form>
    )
}