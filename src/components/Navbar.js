import React, { useContext } from 'react'
import { Button } from './Button'
import { TargetsContext } from '../components/context/targets/targetsContext'

export const Navbar = ()=>{
    const targetsContext = useContext(TargetsContext)
    


return(
    <nav className="navbar navbar-light" style={{backgroundColor: '#e3f2fd'}}>
        <h1 className="display-8">Ваши цели на 12 недель</h1>
        <Button text ="Список готов"
            callback={targetsContext.addList}/>
    </nav>
)
}