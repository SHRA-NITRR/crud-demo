import React from 'react';
import PropTypes from "prop-types";

const RadioButton = (props) => {    
    return (
        <label className="radio">
             <input 
                id={props.id} 
                onChange={props.handleOnchange}
                value={props.value} 
                type="radio" 
                checked={props.isSelected} 
            />
            {props.label}
        </label>

    );
}

export default RadioButton;
