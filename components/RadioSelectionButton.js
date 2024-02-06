
import React from 'react';

const RadioSelection = ({ title, name, options, onChange }) => {
    return (
        <div className="flex flex-col text-lg my-2">
            <span className="font-bold">{title}</span>

            <div className="flex space-x-3">
                {options?.map((option, index) => (
                    <label key={index} className="flex items-center space-x-1">
                        <input
                            type="radio"
                            value={option}
                            onChange={() => onChange(option)}
                            name={name}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default RadioSelection;
