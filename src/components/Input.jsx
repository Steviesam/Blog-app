import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref) {
    const id = useId();

    // Enhanced styling options with more flexible configuration
    const baseClass = "px-3 py-2 rounded-lg bg-white text-black outline-none border border-gray-200 w-full";
    const focusClass = "focus:bg-gray-50 focus:border-blue-500 duration-200"; // Blue border on focus for better visibility

    return (
        <div className='w-full mb-4'> {/* Added margin-bottom for spacing between form elements */}
            {label && (
                <label htmlFor={id} className='block text-gray-700 text-sm font-bold mb-2 pl-1'>
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`${baseClass} ${focusClass} ${className}`}
                ref={ref}
                id={id}
                {...props}
            />
        </div>
    );
});

export default Input;
