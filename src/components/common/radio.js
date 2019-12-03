import React from 'react';

const RadioButton = props => {
  const { handleOnchange, value, isSelected, label, id } = props;
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="radio">
      <input
        id={id}
        onChange={handleOnchange}
        value={value}
        type="radio"
        checked={isSelected}
      />
      {label}
    </label>
  );
};

export default RadioButton;
