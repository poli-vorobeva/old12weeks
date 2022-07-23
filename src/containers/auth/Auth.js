import React, { useContext, useState } from 'react'
import './Auth.css'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'
import axios from 'axios'
import { RegisterForm } from '../../components/RegisterForm/RegisterForm'
import { AxiosContext } from '../../components/context/axiosContext/axiosContext'

export const Auth=()=>{
   const byDaysContext= useContext(ByDaysContext)
   const axiosContext= useContext(AxiosContext)
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
                //данные с авторизацией
                const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDKly-GpWJcL6Sh1np3rYUY8PyfD8xKvoU', authData)
                
                console.log(response.data)
                
                const plans= byDaysContext.weeksArray
                axiosContext.setUserId(response.data.localId, plans)

                setLocalId(response.data.localId)
                //отправляем массив с планами
                await axios.post('https://weeks-2ade6.firebaseio.com/targets.json', 
                    {userId: response.data.localId,userPlans:plans})
                
                //получаем индекс элемента в массиве в БД
                const userTargets= await axios.get('https://weeks-2ade6.firebaseio.com/targets.json')
                
                const arrayUsers= userTargets.data
                let userWeekArray=[]

                Object.keys(arrayUsers).map(el=>{
                    if(arrayUsers[el].userId==response.data.localId){
                        userWeekArray=JSON.parse(JSON.stringify(byDaysContext.weeksArray))
                        console.log(el)
                        axiosContext.setKey(el)
                        byDaysContext.trackingWeekA(userWeekArray)
                    }
                  
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