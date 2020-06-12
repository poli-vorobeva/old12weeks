import React from 'react'
import './RegisterForm.css'

export const  RegisterForm=({formSubmit,spanText,emailInput,passwordInput,buttonText})=>{

    return(
        <div className="whiteScreen">
            <div className="formWrapper">
                        <div className="AuthForm">
                            <form onSubmit={formSubmit}>
                                <span>{spanText}</span>
                                <hr/>
                                <div className="formInput">
                                    <input  
                                    type="email" 
                                    className="emailInput" 
                                    placeholder="example@gmail.com" 
                                    id="email"
                                    onChange={emailInput}/>
                                    <input 
                                    type="password" 
                                    className="passwordInput"  
                                    placeholder="Введите пароль" 
                                    id="pwd"
                                    onChange={passwordInput}
                                    />
                                </div>
                                <button className="">{buttonText}</button>
                            </form>
                        </div>
                        
                    </div>
        </div>
    )
}