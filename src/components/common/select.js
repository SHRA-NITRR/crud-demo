import React from 'react';
import PropTypes from 'prop-types';

const Select = (props) => (
    <div className="field">
        <label className="label">{props.label}</label>
        <div className="control">
            <div className={props.selectClass}>
                <select
                    onChange={(e) => props.handleSelect(e.target.value)}
                    value={props.selectedValue}
                >
                    <option
                        value={''}
                    >
                        {props.selectPlaceholder}
                    </option>

                    {props.selectOptions.map((option) =>

                        (<option
                            key={option.value}
                            value={option.value}
                        >
                            {option.displayName}
                        </option>)

                    )}
                </select>
                {props.message && <p className={`help ${props.messageClass}`}>{props.message}</p>}
            </div>
        </div>
    </div>
);
Select.defaultProps={
    selectPlaceholder:'---Please Select---',
    label: '',
    selectClass:'select'
}

Select.propTypes = {
    handleSelect: PropTypes.func,
    selectedValue: PropTypes.any,
    selectPlaceholder: PropTypes.string,
    label:PropTypes.string,
    selectClass:PropTypes.string,
    selectOptions: PropTypes.array
};

export default Select;