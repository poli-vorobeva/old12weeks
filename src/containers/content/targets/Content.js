import React from 'react'
import { Form } from './Form/Form'
import { List } from './List/List'

export const Content = ()=>{
 
    
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container targets">
                <List/> {/* список целей */}
                <Form/> {/* инпут для создания новой задачи */}
            </div>
        </div> 
    )
}