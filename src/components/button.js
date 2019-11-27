import React from 'react';

const Button =(props)=>{
    const {mainClass, label, onClick, buttonClass, ...rest}=props;
    return(
        <div className={mainClass}>
            <button 
                className={buttonClass}
                onClick={props.onClick}
                {...rest}
            >
                {label}
            </button>
        </div>

    )
}

Button.defaultProps={
    mainClass: "control",
    onClick:()=>null,
    label: 'Submit',
    buttonClass: 'button is-success'
}

export default Button;