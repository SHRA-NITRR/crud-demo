/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-onchange */
import React from 'react';
import PropTypes from 'prop-types';

const Select = props => {
  const {
    label,
    selectClass,
    selectedValue,
    selectPlaceholder,
    messageClass,
    message,
    selectOptions
  } = props;
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <div className={selectClass}>
          <select
            onChange={e => props.handleSelect(e.target.value)}
            value={selectedValue}
          >
            <option value="">{selectPlaceholder}</option>

            {selectOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.displayName}
              </option>
            ))}
          </select>
          {message && <p className={`help ${messageClass}`}>{message}</p>}
        </div>
      </div>
    </div>
  );
};
Select.defaultProps = {
  selectPlaceholder: '---Please Select---',
  label: '',
  selectClass: 'select'
};

Select.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  selectedValue: PropTypes.any,
  selectPlaceholder: PropTypes.string,
  label: PropTypes.string,
  selectClass: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  selectOptions: PropTypes.array
};

export default Select;
