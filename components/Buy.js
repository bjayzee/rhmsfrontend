"use client";

import axios from 'axios';

import useSWR from 'swr';

import Link from 'next/link';

import { useState, useEffect } from 'react';

import { GoDot, GoDotFill } from "react-icons/go";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import { models } from '@/server/utils/iPhonedata';
import RadioSelection from './RadioSelectionButton';


export default function Buy() {





  const [selectedModel, setSelectedModel] = useState(null);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [lockState, setLockState] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [showStorageOptions, setShowStorageOptions] = useState(false);
  const [addToCartButton, setAddToCartButton] = useState(false);
  const [removeItem, setRemoveItem] = useState(true);
  const [checkoutButton, setCheckoutButton] = useState(false);
  const [modelIndex, setModelIndex] = useState(0);
  const [iphoneModel, setIphoneModel] = useState("");


  const [availableModels, setAvailableModels] = useState([]);
  const [pending, setPending] = useState(false);
  const [pickItems, setPickItems] = useState([]);
  const [grade, setGrade] = useState([]);
  const [colorVariant, setColorVariant] = useState([]);
  const [availableCarrier, setAvailableCarrier] = useState([]);

  const [phoneBasedOnCarrier, setPhoneBasedOnCarrier] = useState([]);
  const [storageList, setStorageList] = useState([]);

  const [phoneBasedOnStorage, setPhoneBasedOnStorage] = useState([]);
  const [colorList, setColorList] = useState([]);

  const [phoneBasedOnColor, setPhoneBasedOnColor] = useState([]);
  const [phoneColorValue, setPhoneColorValue] = useState(null);






  const showCartDetails = () => {
    setShowAddToCart(true);
    setRemoveItem(false);
    setCheckoutButton(true);
    setAddToCartButton(false)
  }




  const handleNewOrUsedChange = (iphoneState) => {
    console.log(pickItems)

    const filteredItems = pickItems.filter(
      (iphoneModel) => iphoneModel.specification.grade.trim().toLowerCase() === iphoneState.trim().toLowerCase()
    );
    console.log(filteredItems);

    const carriers = filteredItems.map((iphoneModel) => iphoneModel.specification.carrier);

    const carriersSet = new Set(carriers);

    console.log(carriers);


    setPhoneBasedOnCarrier(filteredItems);
    setAvailableCarrier(Array.from(carriersSet))
    setSelectedCondition(iphoneState);
    setLockState(null);
    setSelectedColor(null);
    setSelectedStorage(null);
    setShowAddToCart(false); // Hide "Add to Cart" when conditions change
    setShowStorageOptions(false);
  };

  const handleLockedOrUnlockedChange = (iphoneLockState) => {

    console.log(phoneBasedOnCarrier)

    const filteredItems = phoneBasedOnCarrier.filter(
      (iphoneModel) => iphoneModel.specification.carrier.trim().toLowerCase() === iphoneLockState.trim().toLowerCase()
    );
    console.log(filteredItems);

    const capacities = filteredItems.map((iphoneModel) => iphoneModel.specification.capacity);

    const capacitiesSet = new Set(capacities);

    console.log(capacities);


    setPhoneBasedOnStorage(filteredItems);
    setLockState(iphoneLockState);
    setStorageList(Array.from(capacitiesSet))
    setSelectedColor(null);
    setSelectedStorage(null);
    setShowAddToCart(false); // Hide "Add to Cart" when status changes
  };

  // Function to handle storage selection
  const handleStorageSelection = (storage) => {

    console.log(phoneBasedOnStorage)

    const filteredItems = phoneBasedOnStorage.filter(
      (iphoneModel) => iphoneModel.specification.capacity.trim().toLowerCase() === storage.trim().toLowerCase()
    );
    console.log(filteredItems);

    const colors = filteredItems.map((iphoneModel) => iphoneModel.specification.color);

    const colorSets = new Set(colors);

    console.log(colorSets);


    setPhoneBasedOnColor(filteredItems);
    setColorList(Array.from(colorSets));
    setSelectedStorage(storage);
    setShowAddToCart(false); // Show the "Add to Cart" button when storage is selected
    setAddToCartButton(true)
  };



  const handleColorChange = (iphoneColor) => {

    console.log(phoneBasedOnColor)

    const filteredItems = phoneBasedOnColor.filter(
      (iphoneModel) => iphoneModel.specification.color.trim().toLowerCase() === iphoneColor.trim().toLowerCase()
    );
    console.log(filteredItems);


    setSelectedColor(iphoneColor);
    setShowAddToCart(true);
  };



  const showNextImage = () => {
    setCurrentPictureIndex((index) => {
      if (index === iphoneModel?.pictures?.length - 1) return 0;
      return index + 1;
    });
  }

  const showPrevImage = () => {
    setCurrentPictureIndex((index) => {
      if (index === 0) return iphoneModel?.pictures?.length - 1;
      return index - 1;
    });
  }




  const getModelsAvailable = async () => {
    try {
      const response = await axios.get('/api/products/search?category=iPhone', {
        validateStatus: function (status) {
          return status < 400;
        }
      }).then(res => res.data);
      const iphoneModels = response.data;
      setAvailableModels(iphoneModels);
    } catch (error) {
      console.error('Error fetching available models:', error);
    }
  }

  useEffect(() => {
    getModelsAvailable();
  }, []);

  let phoneStatus;

  return (
    <div className="overflow-x-hidden py-5 px-5">
      <p className="text-xl py-3 font-semi-bold">
        The iPhone connection - connecting you to the world
      </p>

      {selectedModel !== modelIndex ? (
        <div className="flex flex-wrap shadow-lg  border-[#D9D9D9] border-l-8 border-t-8 rounded-[20px]">
          {models.map((model, index) => {

            let iphoneModel;

            const modelExists = availableModels.some(
              (iphoneModel) =>
                iphoneModel.name.trim().toLowerCase() === model.name.trim().toLowerCase()
            );

            return (
              <div
                key={index}
                className={`w-1/2 p-4 font-semibold text-xl ${!modelExists ? 'text-[gray] opacity-50 cursor-not-allowed' : ''
                  }`}
                onClick={() => {
                  if (modelExists) {
                    const itemPicked = availableModels.filter(
                      (iphoneModel) =>
                        iphoneModel.name.trim().toLowerCase() === model.name.trim().toLowerCase()
                    );

                    const grades = itemPicked.map((iphoneModel) => iphoneModel.specification.grade)
                    const uniqueGradesSet = new Set(grades);


                    setPickItems(itemPicked);
                    setGrade(Array.from(uniqueGradesSet))
                    setModelIndex(index);
                    setIphoneModel(itemPicked[0]);
                    setSelectedModel(index);
                    setCurrentPictureIndex(0);

                  }
                }}
              >
                <div className="flex justify-between">
                  <span className="text-sm font-bold">{model.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}




      {selectedModel === modelIndex ? (
        <>
          <div className="relative flex items-center justify-center bg-white rounded-[30px] shadow-xl px-16 py-10 my-5 border-[#D9D9D9] border-r-8 border-b-8">

            <img
              src={iphoneModel?.images[currentPictureIndex]}
              className="w-full h-64 object-cover"
              alt={`${iphoneModel.name} image`}
            />
            <BiLeftArrow className="absolute left-5 text-2xl" onClick={showPrevImage} />
            <BiRightArrow className="absolute right-5 text-2xl" onClick={showNextImage} />
            <div className="absolute bottom-2 flex space-x-1">
              {iphoneModel?.images.map((_, index) => (
                <span
                  className="text-lg text-center"
                  key={index}
                  aria-label={`View Image ${index + 1}`}
                  onClick={() => setCurrentPictureIndex(index)}
                >
                  {index === currentPictureIndex ? (
                    <GoDotFill className="text-[#000000]" aria-hidden />
                  ) : (
                    <GoDot className="text-[#D9D9D9]" aria-hidden />
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="px-5">
            {removeItem !== false ? (
              <div className="flex justify-between py-4">
                <b>{iphoneModel?.name}</b>
                <b>Price: {iphoneModel?.price}</b>
              </div>
            ) : null}

            {removeItem !== false && (
              <RadioSelection
                title={'Pick your preference'}
                name={`condition-${iphoneModel?.name}`}
                options={grade}
                onChange={(selectedOption) => handleNewOrUsedChange(selectedOption)}
              />
            )}

            {selectedCondition != null ? (
              <>
                {removeItem !== false ? (
                  <RadioSelection
                    title={'Carrier/Lock Status'}
                    name={`condition-${iphoneModel?.name}`}
                    options={availableCarrier}
                    onChange={(selectedOption) => handleLockedOrUnlockedChange(selectedOption)}
                  />
                ) : null}

                {lockState !== null ? (
                  <>
                    {removeItem !== false ? (
                      <RadioSelection
                        title={'Select from available storages'}
                        name={`condition-${iphoneModel?.name}`}
                        options={storageList}
                        onChange={(selectedOption) => handleStorageSelection(selectedOption)}
                      />
                    ) : null}

                    {selectedStorage !== null ? (
                      <>
                        {removeItem !== false ? (
                          <RadioSelection
                            title={'Select from available colors'}
                            name={`condition-${iphoneModel?.name}`}
                            options={colorList}
                            onChange={(selectedOption) => handleColorChange(selectedOption)}
                          />
                        ) : null}

                      </>
                    ) : null}


                    {showAddToCart && selectedModel !== null ? (
                      <div className="text-lg">
                        <div className="flex justify-between items-center">
                          <div className="flex font-bold capitalize my-5">
                            <span>1 {selectedCondition}</span>
                            <span>{models[selectedModel].name}</span>
                          </div>
                          <div className="flex space-x-2 capitalize">
                            <span>{selectedStorage}</span>
                            <span>{lockState}</span>
                            <span>{selectedColor}</span>
                          </div>
                        </div>

                        <div className="flex justify-between font-semibold">
                          <span>Price</span>
                          <span className="capitalize">{models[selectedModel].price}</span>
                        </div>

                        <div className="flex justify-end my-2">
                          <span
                            className="text-[#187EB4] mt-10 text-right my-10 font-extrabold"
                            onClick={() => setShowAddToCart(false)}
                          >
                            Remove
                          </span>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}

                    {addToCartButton ? (
                      <div className="flex justify-center items-center">
                        <button
                          className="bg-[#187EB4] px-16 py-4 mt-5 rounded-full text-[#FFFFFF]"
                          onClick={showCartDetails}
                        >
                          Add to Cart
                        </button>
                      </div>
                    ) : null}

                    {checkoutButton ? (
                      <div className="flex justify-center">
                        <div className="flex items-center flex-col space-y-2">
                          <Link
                            className="bg-[#187EB4] px-16 py-4 mt-3 rounded-full text-[#FFFFFF]"
                            href="/howToCheckOut"

                          >
                            Checkout
                          </Link>
                          <span className="text-[#187EB4] text-center">
                            Add more items
                          </span>
                        </div>
                      </div>
                    ) : null}
                  </>
                ) : null}
              </>
            ) : null}
          </div>
        </>
      ) : ""}

    </div>
  );
}