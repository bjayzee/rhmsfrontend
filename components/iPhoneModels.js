"use client"; 

import React, { useState } from 'react';

const iPhoneModel = ({ name, pictures, price }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="p-4 border-color-gray divide-x divide-gray-600 shadow-lg rounded-lg m-5">
      <div className="flex justify-between">
        <div className="w-full font-bold">
          <p
            className="text-sm my-custom-font font-bold cursor-pointer"
            onClick={() => setShowDetails(!showDetails)}
          >
            {name}
          </p>
        </div>
      </div>

      {showDetails && (
        <div>
          <div className="flex justify-between">
            <div>
              {pictures.map((picture, index) => (
                <img key={index} src={picture} alt={name} />
              ))}
              <div>
                <button>Next</button>
              </div>
            </div>
            <div>
              <p>{name}</p>
              <p>Price: {price}</p>
              <div>
                <label>
                  <input type="radio" name={`condition-${name}`} value="brand-new" />
                  Brand New
                </label>
                <label>
                  <input type="radio" name={`condition-${name}`} value="used" />
                  Used
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function iPhoneModels() {
  const models = [
    {
      name: 'iPhone 8',
      pictures: ['iphone8-pic1.jpg', 'iphone8-pic2.jpg'],
      price: '$599',
    },
    {
        name: 'iPhone x',
        pictures: ['iphone8-pic1.jpg', 'iphone8-pic2.jpg'],
        price: '$599',
      },
    // Add more iPhone models here
  ];

  return (
    <div>
      {models.map((model, index) => (
        // <iPhoneModel key={index} {...model} />
        <div key={index} >{...model} </div>
      ))}
      hello
    </div>
  );
}
