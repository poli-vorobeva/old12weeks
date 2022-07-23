import React from 'react'
import { Form } from './Form/Form'
import { List } from './List/List'
import './Content.css'


export const Content = ()=>{
   
    return(
        <div className="mainContainer">
            <div className="container targets">
                <List/> {/* список целей */}
                <Form/> {/* инпут для создания новой задачи */}
              
            </div>
        </div> 
    )
}