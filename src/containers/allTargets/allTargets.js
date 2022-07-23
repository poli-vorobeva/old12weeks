import React, { useContext, Fragment } from'react'
import { ByDaysContext } from '../../components/context/weeksByDays/byDaysContext'
import {Button} from '../../components/Button'
import './allTargets.css'
import { TableTargets } from './TableTargets/TableTargets'
import { Auth } from '../auth/Auth'
import { AxiosContext } from '../../components/context/axiosContext/axiosContext'
import { AddTarget } from './AddTarget/AddTarget'

export const ShowAllTargets=()=>{
    const byDaysContext= useContext(ByDaysContext)
    const axiosContext= useContext(AxiosContext)
    const trackingWeek=(e)=>byDaysContext.authF()
    const serverTrackingWeek=(e)=>{
        byDaysContext.trkWeek()
    }
    const pushNewTarget=()=>{
        byDaysContext.pushNewTarget()
    }
    //если массив с задачами не пуст
    return(
        <div className='showAllTargets'>
            <div className='allTargetsButtons'>
                {
                    byDaysContext.buttonForTrack
                    ?<Button text={'Начать'} callback={e=>serverTrackingWeek(e)}/>
                    :<Button text={'Сохранить и начать'} callback={e=>trackingWeek(e)}/>
                }
                <Button text={'Добавить задачу'} callback={pushNewTarget}/>
            </div>
            {
                byDaysContext.authForm&&!axiosContext.isLogin?<Auth />:null
            }
            {
                byDaysContext.addNewTarget&& <AddTarget/>
            }
            <TableTargets/>
          </div>
       
    )
}