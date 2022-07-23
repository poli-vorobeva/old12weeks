import React, { useContext} from 'react'
import { Button } from '../Button'
import { AxiosContext } from '../context/axiosContext/axiosContext'
import { ByDaysContext } from '../context/weeksByDays/byDaysContext'
import { SignIn } from '../../containers/signIn/SignIn'
import './Navbar.css'

export const Navbar = ()=>{
    const byDaysContext= useContext(ByDaysContext)
    const axiosContext= useContext(AxiosContext)
    
    const logOut=()=>{
        byDaysContext.clearState()
        axiosContext.clearState()
    }
    const test=()=>{
        byDaysContext.makeTestMode()
       }
    return(
        <nav className="Navbar" >
            <h1 className="display-8">Ваши цели на 6 недель</h1>
        {
            axiosContext.isLogin? 
            <Button text="Выйти" callback={logOut}/>
            : <SignIn/>
        }
        <Button text="Тестовый режим" callback={test}/>
            
        </nav>
    )
}