import React, { useId } from 'react';

const Select = React.forwardRef((
  { options, label, className, ...props }, ref) => {
    const id = useId(); // Generates a unique ID for associating label to the select

    return (
      <div className='w-full mb-4'>
        {label && (
          <label htmlFor={id} className='block text-gray-700 text-sm font-bold mb-2'>
            {label} {/* Ensure the label is visible and styled appropriately */}
          </label>
        )}
        <select
          {...props}
          id={id}
          ref={ref}
          className={`block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${className}`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
