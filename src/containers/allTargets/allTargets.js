import React, { useContext, Fragment } from'react'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'
import {Button} from '../../components/Button'
import './allTargets.css'
import { TableTargets } from './TableTargets/TableTargets'
import axios from 'axios'
import { Auth } from '../auth/Auth'

export const ShowAllTargets=()=>{
    const byDaysContext= useContext(ByDaysContext)
    
    const trackingWeek=async (e)=>{
        /* try{
            const response= await axios.post('https://weeks-2ade6.firebaseio.com/targets1.json', byDaysContext.weeksArray)
            console.log(response.data)
        }
        catch(e){
            console.log(e)
        } */
        
        console.log('trackingWeek')
        byDaysContext.authF()
        //byDaysContext.trackingWeekA()
    }
    return(
        <Fragment>
        <div>
            <h1>Итог:</h1>
        </div>
            <TableTargets/>
            <Button text={'Сохранить и начать'} callback={e=>trackingWeek(e)}/>
            {
                byDaysContext.authForm?<Auth />:null
            }
          </Fragment>
       
    )
}