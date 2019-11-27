import React from 'react';

const Input =(props)=>{
    const {mainClass,labelClass,inputContainerClass, inputClass, placeholder, inputType, label, onChange, value,message,messageClass, ...rest}=props;
    return(
        <div className={mainClass}>
            <label className={labelClass}>
                {label}
            </label>
            <div className={inputContainerClass}>
                <input 
                    className={inputClass} 
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    {...rest}
                />
                {message && <p className={`help ${messageClass}`}>{message}</p>}
            </div>
        </div>
    )
}

Input.defaultProps={
    mainClass: 'field',
    labelClass: 'label',
    inputContainerClass:'control',
    inputClass: 'input',
    placeholder: '',
    inputType: 'text',
    label: 'Email',
    onChange:()=>null,
    value: '',
    message:'',
    messageClass:''
}

export default Input;