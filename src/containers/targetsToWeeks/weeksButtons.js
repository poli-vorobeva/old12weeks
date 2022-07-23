import React, { useContext} from 'react'
import { Button } from '../../components/Button'
import { WeeksContext } from '../../components/context/weeks/weeksContext'

export const WeeksButtons=()=>{
    const weeksContext= useContext(WeeksContext)

    const clickedButton=(e)=>{

        const weekCl= e.target.innerText        
        const nTarget= weeksContext.newTarget
        const parentTarget= weeksContext.itemsTarget
        const clickedLi= weeksContext.clickedItemText//нажатый текст
        const copy=JSON.parse(JSON.stringify(weeksContext.arrayFromTargets))

        //возвращаем все элементы без нажатого
        if(copy[parentTarget]!==undefined){
            const copyArrayWithout = Object.keys(copy[parentTarget]).filter(el=>{
                return el !== clickedLi
            })        
            const copyObjectWithout={}  //подзадачи -большой задачи, без удаленной подзадачи
            
            copyArrayWithout.forEach(el=>{
                return copyObjectWithout[el]=false
            })

        //проверяем Большой массив на пустоту           
            if(JSON.stringify(copyObjectWithout)[2] === undefined){//если список подзадач-пуст, удаляем его
                const copyForUl= JSON.parse(JSON.stringify(weeksContext.arrayFromTargets))
                const withoutTarget= Object.keys(copyForUl)//пихаем все не пустые элементы
                                        .filter(el=>JSON.stringify(copyForUl[el])!=='{}')
                                                .filter(el=>el!==weeksContext.itemsTarget)
                        
                const newArrayFromTargets={}
                withoutTarget.forEach(el=>{
                        newArrayFromTargets[el] = copyForUl[el]
                })
                const forReduserArray= newArrayFromTargets

                weeksContext.pushedArrayF(forReduserArray)
                weeksContext.unmountEmpty(forReduserArray)//объект Задач-без пустой задачи
            }
        
        weeksContext.clickedWeek(weekCl)
        weeksContext.deleteItem(parentTarget,copyObjectWithout)
        weeksContext.putIntoWeek(weekCl, nTarget)
                        
        }
          
}
    //проверяем если все подзадачи распределены, то автоматом переключаемся на следующую задачу
    const emptyTargets= Object.keys(weeksContext.arrayFromTargets).some(target=>{
        return JSON.stringify(weeksContext.arrayFromTargets[target])[2]
        })
        if(!emptyTargets){weeksContext.byWeeksF()}


    return(
        <div>
            <span>НЕДЕЛЯ:</span>
            {
                weeksContext.weeks.map(element => {
                   const number= weeksContext.weeks.indexOf(element)+1
                    return(
                        <Button 
                            text = {number}
                            key = {number}
                            callback={(e)=> clickedButton(e)} />
                        )
                })
            }
        </div>
    )
}