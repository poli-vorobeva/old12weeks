import React, { useContext, useState } from 'react'
import { Button } from './Button'
import { ByDaysContext } from './context/weeksByDays/byDaysContext'
import axios from 'axios'

export const NoteInput=()=>{
    const byDaysContext= useContext(ByDaysContext)
    const [value,setValue]= useState('')
    //console.log('----------Принятый прос'+targetNote)
    const submitNote= async (e)=>{
        console.log(e.target)
        e.preventDefault()
        const noteText= value
        byDaysContext.allNotesList(noteText)
        byDaysContext.notesInput()
        try{
            await axios.post('https://weeks-2ade6.firebaseio.com/targets1.json', 
                {userPlans:byDaysContext.weeksArray})

            const userNotes= await axios.get('https://weeks-2ade6.firebaseio.com/targets1.json')
                console.log("с заметками " + userNotes)
        }catch(e){
            console.log(e)
        }
        //console.log(byDaysContext.weeksArray)

    }

    return(
        <form className="formNote" onSubmit={e=>submitNote(e)}>                
            <div className='divNote'>
                <div>
                    <p>{value}</p>
                </div>
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