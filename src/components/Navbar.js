import React, { useContext, useState } from 'react'
import { Button } from './Button'
import { TargetsContext } from '../components/context/targets/targetsContext'
import { RegisterForm } from './RegisterForm/RegisterForm'
import axios from 'axios'

export const Navbar = ()=>{

const [signIn, setSignIn]= useState(false)
const [email,setEmail]=useState('')
const [password,setPassword]=useState('') 

const signInSubmit=async (e)=>{
        e.preventDefault()
       const authData={
                email:email,
                password: password,
                returnSecureToken:true
            }
                try{
                    const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDKly-GpWJcL6Sh1np3rYUY8PyfD8xKvoU', authData)
                    console.log(response.data.localId)
                }
                catch(e){
                    console.log(e)
                }
    } 
    const buttonSignIn=(e)=>{
        console.log(e)
        setSignIn(!signIn)
        console.log(signIn)
    
    } 
    return(
        <nav className="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
            <h1 className="display-8">Ваши цели на 12 недель</h1>
        
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
                    />
                }   
        </nav>
    )
}