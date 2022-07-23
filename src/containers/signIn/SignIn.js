import React, { useState, useContext } from 'react'
import axios from 'axios'
import { Button } from '../../components/Button'
import { RegisterForm } from '../../components/RegisterForm/RegisterForm'
import { AxiosContext } from '../../components/context/axiosContext/axiosContext'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'
import './SingIn.css'

export const SignIn=()=>{
    const axiosContext= useContext(AxiosContext)
    const byDaysContext=useContext(ByDaysContext)

   
    const [signIn, setSignIn]= useState(false)
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('') 
    //если форма сибмин и прошла авторизация, то устанавливаем стейт userPlans ->открываем список со всеми неделями
    const closeFunction=()=>{
        setSignIn(!signIn)
    }
    
    const signInSubmit=async (e)=>{
            e.preventDefault()
           const serverData=async(userLocalId)=>{//получаем массив дел- нужного пользователя 
                const userTargets= await axios.get('https://weeks-2ade6.firebaseio.com/targets.json')
                    
                const arrayUsers= userTargets.data
                let userWeekArray=[]
                Object.keys(arrayUsers).map(el=>{
                    if(arrayUsers[el].userId===userLocalId){
                        //массив задач Юзера
                        userWeekArray=JSON.parse(JSON.stringify(arrayUsers[el].userPlans))
                      
                        const key= el
                        axiosContext.serverPlansArray(userWeekArray,key)
                        byDaysContext.buttonForTracking()
                        byDaysContext.servershowAllWeeks(userWeekArray)
                        }
                        return
                }
                )
           } 
           const authData={
                    email:email,
                    password: password,
                    returnSecureToken:true
                }
                    try{
                        const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDKly-GpWJcL6Sh1np3rYUY8PyfD8xKvoU', authData)
                        const userLocalId=response.data.localId

                        serverData(userLocalId)

                    }
                    catch(e){
                        console.log(e)
                    }
        } 
        const buttonSignIn=(e)=>{
            setSignIn(!signIn)
        
        } 
    return (
        <div>
            <Button
            text='Войти'
            callback={e=> buttonSignIn(e)}/>
            {
                signIn&& 
                <RegisterForm
                formSubmit={e=>signInSubmit(e)}
                spanText='войти'
                emailInput={e=>setEmail(e.target.value)}
                passwordInput={e=> setPassword(e.target.value)}
                buttonText='войти'
                closeX={()=>closeFunction()}
                />
            }   
        </div>
        
    )
}