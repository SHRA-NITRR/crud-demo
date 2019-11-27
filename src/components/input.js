import React from 'react';

const Input =(props)=>{
    const {mainClass,labelClass,inputContainerClass, inputClass, placeholder, inputType, label, onChange, value, ...rest}=props;
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
    value: ''
}

export default Input;