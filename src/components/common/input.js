import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const {
    mainClass,
    labelClass,
    inputContainerClass,
    inputClass,
    placeholder,
    inputType,
    label,
    onChange,
    value,
    message,
    messageClass,
    ...rest
  } = props;
  return (
    <div className={mainClass}>
      <label className={labelClass} htmlFor={inputClass}>
        {label}
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
      </label>
      {message && <p className={`help ${messageClass}`}>{message}</p>}
    </div>
  );
};

Input.defaultProps = {
  mainClass: 'field',
  labelClass: 'label',
  inputContainerClass: 'control',
  inputClass: 'input',
  placeholder: '',
  inputType: 'text',
  label: 'Email',
  onChange: () => null,
  value: '',
  message: '',
  messageClass: ''
};

Input.propTypes = {
  mainClass: PropTypes.string,
  labelClass: PropTypes.string,
  inputContainerClass: PropTypes.string,
  inputClass: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  message: PropTypes.string,
  messageClass: PropTypes.string
};

export default Input;
