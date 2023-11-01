"use client"; 
import React, { useState } from 'react';

const iPhoneDetails = ({ model, price, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [condition, setCondition] = useState('new'); // Default to 'new'

  const nextImage = () => {
    // Implement logic to show the next image
    // You can update the currentImageIndex state to change the displayed image
  };

  return (
    <div className="p-4 border-color-gray divide-x divide-gray-600 shadow-lg rounded-lg m-5">
      <div className="flex justify-between">
        <div className="w-full font-bold">
          <p className="text-sm my-custom-font font-bold" onClick={nextImage}>
            {model}
          </p>
        </div>

        <div className="w-full font-bold">
          <p className="text-sm my-custom-font">{price}</p>
          <div>
            <input
              type="radio"
              id="new"
              name="condition"
              value="new"
              checked={condition === 'new'}
              onChange={() => setCondition('new')}
            />
            <label htmlFor="new">Brand New</label>
          </div>
          <div>
            <input
              type="radio"
              id="used"
              name="condition"
              value="used"
              checked={condition === 'used'}
              onChange={() => setCondition('used')}
            />
            <label htmlFor="used">Used</label>
          </div>
        </div>
      </div>

      <div>
        {/* Display the current image from images[currentImageIndex] */}
        <img src={images[currentImageIndex]} alt={model} />
        <button onClick={nextImage}>Next Image</button>
      </div>
    </div>
  );
};

export default iPhoneDetails;
