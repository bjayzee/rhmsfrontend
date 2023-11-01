"use client"; 


import React, { useState } from 'react';

export default function Buy() {
  const models = [
    {
      name: 'iPhone 8',
      pictures: ['iphoneS.png', 'basket.png'],
      price: '$599',
    },
    {
      name: 'iPhone X',
      pictures: ['iphoneS.png'],
      price: '$859',
    },
    {
      name: 'iPhone 8',
      pictures: ['iphoneS.png'],
      price: '$1599',
    },
    {
      name: 'iPhone X',
      pictures: ['iphoneS.png'],
      price: '$900',
    },
    {
      name: 'iPhone 8',
      pictures: ['iphoneS.png'],
      price: '$750',
    },
    {
      name: 'iPhone X',
      pictures: ['basket.png', 'iphoneS.png'],
      price: '$770',
    },
    // Add more iPhone models here
  ];

  const [selectedModel, setSelectedModel] = useState(null);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [lockState, setLockState] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [showAddToCart, setShowAddToCart] = useState(false); // State for showing "Add to Cart" button
  const [showStorageOptions, setShowStorageOptions] = useState(false); // State for showing storage options
  const [showDetails, setShowDetails] = useState(false); // State for showing model details

  const showNextPicture = () => {
    setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % models[selectedModel].pictures.length);
  };

  // Function to handle storage selection
  const handleStorageSelection = (storage) => {
    setShowDetails(true); 
    setSelectedStorage(storage);
    setShowAddToCart(true); // Show the "Add to Cart" button when storage is selected
  };

  return (
    <div>
      <div className="text-2xl font-bold mt-10 my-custom-font m-5">
        The iPhone connection - connecting you to the world
      </div>

      <div className="flex flex-wrap justify-center shadow-lg border-color-gray">
        {models.map((model, index) => (
          <div
            key={index}
            className={`w-1/2 p-4 rounded-lg ${
              selectedModel !== null && selectedModel !== index ? 'hidden' : ''
            }`}
            onClick={() => {
              setSelectedModel(index);
              setCurrentPictureIndex(0);
            }}
          >
            <div className="flex justify-between">
              <div>
                <p className="text-sm my-custom-font font-bold">{model.name}</p>
              </div>
            </div>
            {selectedModel === index && (
              <div>
                <div className="flex justify-between">
                  <div>
                    <img
                      src={model.pictures[currentPictureIndex]}
                      alt={model.name}
                      width={800}
                      height={800}
                    />
                    <button onClick={showNextPicture}>Next</button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between p-1">
                    <p>{model.name}</p>
                    <p>Price: {model.price}</p>
                  </div>
                  <div>
                    <div className="font-bold">
                      <p>Pick your preference</p>
                    </div>
                    <label>
                      Brand New
                      <input
                        type="radio"
                        name={`condition-${model.name}`}
                        value="brand-new"
                        onChange={() => {
                          setSelectedCondition('brand-new');
                          setLockState(null);
                          setSelectedColor(null);
                          setSelectedStorage(null);
                          setShowAddToCart(false); // Hide "Add to Cart" when conditions change
                        }}
                      />
                    </label>
                    <label>
                      Used
                      <input
                        type="radio"
                        name={`condition-${model.name}`}
                        value="used"
                        onChange={() => {
                          setSelectedCondition('used');
                          setLockState(null);
                          setSelectedColor(null);
                          setSelectedStorage(null);
                          setShowAddToCart(false); // Hide "Add to Cart" when conditions change
                          setShowStorageOptions(false); // Hide storage options
                        }}
                      />
                    </label>
                  </div>
                  {selectedCondition === 'brand-new' && (
                    <div>
                      <div className="font-bold">
                        <p>Phone Status</p>
                      </div>
                      <label>
                        Locked
                        <input
                          type="radio"
                          name={`status-${model.name}`}
                          value="locked"
                          onChange={() => {
                            setLockState('locked');
                            setSelectedColor(null);
                            setSelectedStorage(null);
                            setShowAddToCart(false); // Hide "Add to Cart" when status changes
                          }}
                        />
                      </label>
                      <label>
                        Unlocked
                        <input
                          type="radio"
                          name={`status-${model.name}`}
                          value="unlocked"
                          onChange={() => {
                            setLockState('unlocked');
                            setSelectedColor(null);
                            setSelectedStorage(null);
                            setShowAddToCart(false); // Hide "Add to Cart" when status changes
                            setShowStorageOptions(false); // Hide storage options
                          }}
                        />
                      </label>
                      {lockState !== null && (
                        <div>
                          <div className="font-bold">
                            <p>Select from available Colors</p>
                          </div>
                          <label>
                            Red
                            <input
                              type="radio"
                              name={`color-${model.name}`}
                              value="red"
                              onChange={() => {
                                setSelectedColor('red');
                                setSelectedStorage(null);
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                setShowStorageOptions(true); // Show storage options
                              }}
                            />
                          </label>
                          <label>
                            Blue
                            <input
                              type="radio"
                              name={`color-${model.name}`}
                              value="blue"
                              onChange={() => {
                                setSelectedColor('blue');
                                setSelectedStorage(null);
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                setShowStorageOptions(true); // Show storage options
                              }}
                            />
                          </label>
                          <label>
                            Black
                            <input
                              type="radio"
                              name={`color-${model.name}`}
                              value="black"
                              onChange={() => {
                                setSelectedColor('black');
                                setSelectedStorage(null);
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                setShowStorageOptions(true); // Show storage options
                              }}
                            />
                          </label>
                          <label>
                            Green
                            <input
                              type="radio"
                              name={`color-${model.name}`}
                              value="green"
                              onChange={() => {
                                setSelectedColor('green');
                                setSelectedStorage(null);
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                setShowStorageOptions(true); // Show storage options
                              }}
                            />
                          </label>
                          <label>
                            Pink
                            <input
                        
                              type="radio"
                              name={`color-${model.name}`}
                              value="pink"
                              onChange={() => {
                                setSelectedColor('pink');
                                setSelectedStorage(null);
                                setShowAddToCart(false); // Hide "Add to Cart" when color changes
                                setShowStorageOptions(true); // Show storage options
                              }}
                            />
                          </label>
                          {showStorageOptions && (
                            <div>
                              <div className="font-bold">
                                <p>Select Storage Capacity</p>
                              </div>
                              <label>
                                128GB
                                <input
                                  type="radio"
                                  name={`storage-${model.name}`}
                                  value="128GB"
                                  onChange={() => handleStorageSelection('128GB')}
                                />
                              </label>
                              <label>
                                256GB
                                <input
                                  type="radio"
                                  name={`storage-${model.name}`}
                                  value="256GB"
                                  onChange={() => handleStorageSelection('256GB')}
                                />
                              </label>
                              <label>
                                512GB
                                <input
                                  type="radio"
                                  name={`storage-${model.name}`}
                                  value="512GB"
                                  onChange={() => handleStorageSelection('512GB')}
                                />
                              </label>
                              {showAddToCart && (
                                <div>
                                  <button  style={{ backgroundColor: 'blue', color: 'white' }}>Add to Cart</button>
                                </div>
                              )}


                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}








