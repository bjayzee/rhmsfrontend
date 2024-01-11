
import React from 'react';

const ModelList = ({ models, availableModels, onModelSelect }) => {
    return (
        <div className="flex flex-wrap shadow-lg border-[#D9D9D9] border-l-8 border-t-8 rounded-[20px]">
            {models.map((model, index) => (
                <ModelListItem
                    key={index}
                    model={model}
                    availableModels={availableModels}
                    onModelSelect={() => onModelSelect(model, index)}
                />
            ))}
        </div>
    );
};

const ModelListItem = ({ model, availableModels, onModelSelect }) => {
    const modelExists = availableModels.some(
        (iphoneModel) =>
            iphoneModel.name.trim().toLowerCase() === model.name.trim().toLowerCase()
    );

    const modelClass = `w-1/2 p-4 font-semibold text-xl ${!modelExists ? 'text-[gray] opacity-50 cursor-not-allowed' : ''
        }`;

    return (
        <div className={modelClass} onClick={onModelSelect}>
            <div className="flex justify-between">
                <span className="text-sm font-bold">{model.name}</span>
            </div>
        </div>
    );
};

export default ModelList;
