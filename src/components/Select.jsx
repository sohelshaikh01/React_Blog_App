import React, {useId} from 'react';

// Here function syntax may create problem
const Select = ({
    options,
    label,
    className,
    ...props
}, ref ) => {

    const id = useId();

  return (
      <div className="w-full">
        {label && <label htmlFor={id} className="" > </label>}
        <select {...props} id={id} ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration border border-gray-200 w-full ${className}`} >
            
            {/* check option have value or not */}
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>

      </div>
  )
}

export default React.forwardRef(Select);
