import React from 'react';
import Input from './input';
import Button from "./button";
const LoginPage=(props)=>{

    return(
        <div className="card log-in">
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">Log In</p>
                    </div>
                </div>
                <Input 
                    inputType={'email'}
                    placeholder={'email'}
                    onChange={props.setEmail}
                    value={props.email}
                    label={'User Name'}
                />
                <Input 
                    inputType={'password'}
                    placeholder={'Password'}
                    onChange={props.setPassword}
                    value={props.password}
                    label={'Password'}
                />
                <Button 
                    className="button is-success"
                    onClick={props.onSubmit}
                />
             </div>  
        </div>
    )
}

export default LoginPage;