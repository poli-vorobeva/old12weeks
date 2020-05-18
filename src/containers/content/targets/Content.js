import React from 'react'
import { Form } from './Form'
import { List } from './List'

export const Content = ()=>{
 
    
    return(
        <div className="jumbotron jumbotron-fluid">
            <div className="container targets">
                <List/>
                <Form/>
            </div>
        </div> 
    )
}