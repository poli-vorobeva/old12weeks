import React, { useContext, useState } from 'react'
import { Button } from '../../components/Button'
import { WeeksContext } from '../../components/context/weeks/weeksContext'

export const WeeksButtons=()=>{
    const weeksContext= useContext(WeeksContext)
    //const [arrItems, setArrItems] = useState({})

    const clickedButton=async (e)=>{

        const weekCl= e.target.innerText        
        const nTarget= weeksContext.newTarget
        const parentTarget= weeksContext.itemsTarget

        const clickedLi= weeksContext.clickedItemText
        const copy=JSON.parse(JSON.stringify(weeksContext.arrayFromTargets))
        const copyArrayWithout = Object.keys(copy[parentTarget]).filter(el=>{
            return el !== clickedLi
        })        
        const copyObjectWithout={}  
        
        copyArrayWithout.forEach(el=>{
            return copyObjectWithout[el]=false
        })
        console.log(copyObjectWithout)//подзадачи -большой задачи, без удаленной подзадачи
        //проверяем Большой массив на пустоту
       
        
    
        if(JSON.stringify(copyObjectWithout)[2] == undefined){//если список подзадач-пуст, удаляем его
            //const ulTargetForDelete = parentTarget
            const copyForUl= JSON.parse(JSON.stringify(weeksContext.arrayFromTargets))
            const withoutTarget= Object.keys(copyForUl)
            .filter(el=>JSON.stringify(copyForUl[el])!=='{}')
                    .filter(el=>el!==weeksContext.itemsTarget)
                    
          
            const newArrayFromTargets={}
            withoutTarget.forEach(el=>{
                //if(JSON.stringify(copyForUl[el])!=='{}'){
                    
                console.log('элемент Не пуст'+ el)
                    newArrayFromTargets[el] = copyForUl[el]
                //}
                
            })
            const forReduserArray= newArrayFromTargets

//проверка задачи на пустоту
            weeksContext.pushedArrayF(forReduserArray)
            weeksContext.unmountEmpty(forReduserArray)//объект Задач-без пустой задачи
        }
console.log('------------')

        weeksContext.clickedWeek(weekCl)
        
        weeksContext.deleteItem(parentTarget,copyObjectWithout)
        weeksContext.putIntoWeek(weekCl, nTarget)
        //weeksContext.createnewItems(copy)
        
        
}
    return(
        <div>
            <span>НЕДЕЛЯ:</span>
            {
                weeksContext.weeks.map(element => {
                   
                    return(
                        <Button 
                            text = {weeksContext.weeks.indexOf(element)+1}
                            key = {weeksContext.weeks.indexOf(element)+1}
                            callback={(e)=> clickedButton(e)} />
                        )
                })
            }
        </div>
    )
}