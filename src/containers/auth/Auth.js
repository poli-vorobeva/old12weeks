import React, { useContext, useState } from 'react'
import './Auth.css'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'
import axios from 'axios'
import { RegisterForm } from '../../components/RegisterForm/RegisterForm'

export const Auth=()=>{
   const byDaysContext= useContext(ByDaysContext)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [localId,setLocalId]=useState('')

    const registerSubmit=async (e)=>{
        e.preventDefault()
        byDaysContext.usersId(localId)
        const authData={
            email:email,
            password: password,
            returnSecureToken:true
        }
            try{ 
                const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDKly-GpWJcL6Sh1np3rYUY8PyfD8xKvoU', authData)
                console.log(response.data.localId)
                setLocalId(response.data.localId)
                await axios.post('https://weeks-2ade6.firebaseio.com/targets1.json', 
                {userId: response.data.localId,userPlans:byDaysContext.weeksArray})

                
                const userTargets= await axios.get('https://weeks-2ade6.firebaseio.com/targets1.json')
                const arrayUsers= userTargets.data
                let userWeekArray=[]
                //JSON.parse(JSON.stringify(byDaysContext.weeksArray))
                Object.keys(arrayUsers).map(el=>{
                    if(arrayUsers[el].userId==response.data.localId){
                        userWeekArray=JSON.parse(JSON.stringify(byDaysContext.weeksArray))
                        console.log(userWeekArray)
                        byDaysContext.trackingWeekA(userWeekArray)
                    }
                    console.log(userWeekArray)
                    
                    
                })
            }
            catch(e){
                console.log(e)
            }
    }

    return (
        <RegisterForm
        formSubmit={e=>registerSubmit(e)}
        spanText='регистрация'
        emailInput={e=>setEmail(e.target.value)}
        passwordInput={e=> setPassword(e.target.value)}
        buttonText='Готово'
        />       
    )
}