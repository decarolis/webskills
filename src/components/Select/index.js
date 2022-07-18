import React from 'react';
import './styles.css';

function Select({ options, handleOnChange, value }) {
  return (
    <div className="Select">
      <select onChange={handleOnChange} value={value}>
        {value === 'Select Level' ? <option>{value}</option> : ''}
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
