
import React from 'react';

const RadioSelection = ({ title, name, options, onChange }) => {
    return (
        <div className="flex flex-col space-y-3 text-lg my-5">
            <span className="font-bold">{title}</span>

            <div className="flex space-x-3">
                {options.map((option, index) => (
                    <label key={index} className="flex items-center space-x-1">
                        <input
                            type="radio"
                            name={name}
                            value={option}
                            onChange={() => onChange(option)}
                        />
                        <span>{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default RadioSelection;
