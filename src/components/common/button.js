import React from 'react';
import PropTypes from "prop-types";

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

Button.propTypes = {
    mainClass: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string,
    buttonClass: PropTypes.string,
};

export default Button;