"use client";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect, useRef, useContext, CSSProperties } from "react";
import RadioSelection from "./RadioSelectionButton";
import { models } from "@/server/utils/iPhonedata";
import ImageSlider from "./ImageSlider";
import { CartContent } from "@/app/context/AppContext";
import { TbCurrencyNaira } from "react-icons/tb";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function Buy() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [lockState, setLockState] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [addToCartButton, setAddToCartButton] = useState(false);
  const [removeItem, setRemoveItem] = useState(true);
  const [checkoutButton, setCheckoutButton] = useState(false);
  const [modelIndex, setModelIndex] = useState(0);
  const [iphoneModel, setIphoneModel] = useState("");
  const [availableModels, setAvailableModels] = useState([]);
  const [availableCarrier, setAvailableCarrier] = useState([]);
  const [phoneBasedOnCarrier, setPhoneBasedOnCarrier] = useState([]);
  const [storageList, setStorageList] = useState([]);
  const [phoneBasedOnStorage, setPhoneBasedOnStorage] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [phoneBasedOnColor, setPhoneBasedOnColor] = useState([]);
  const [grade, setGrade] = useState([null]);
  const [price, setPrice] = useState(0);
  const [pickItems, setPickItems] = useState([]);
  const priceRef = useRef(null);

  const { cartItems, setCartItems, addToCart } = useContext(CartContent);

  useEffect(() => {
    getModelsAvailable();
  }, []);
  const getModelsAvailable = async () => {
    setFetchingModel(true);
    try {
      const response = await axios
        .get("/api/products/search?category=iPhone", {
          validateStatus: (status) => status < 400,
        })
        .then((res) => res.data);

      const iphoneModels = response.data;
      setAvailableModels(iphoneModels);
    } catch (error) {
      console.error("Error fetching available models:", error);
    } finally {
      setFetchingModel(false);
    }
  };

  const handleNewOrUsedChange = (iphoneState) => {
    const filteredItems = filterItemsBySpec(pickItems, "grade", iphoneState);
    const carriers = getUniqueValues(filteredItems, "carrier");
    setPhoneBasedOnCarrier(filteredItems);
    setAvailableCarrier(carriers);
    setSelectedCondition(iphoneState);
    setLockState(null);
    setSelectedColor(null);
    setSelectedStorage(null);
    setShowAddToCart(false);
  };

  const handleLockedOrUnlockedChange = (iphoneLockState) => {
    const filteredItems = filterItemsBySpec(
      phoneBasedOnCarrier,
      "carrier",
      iphoneLockState
    );
    const capacities = getUniqueValues(filteredItems, "capacity");
    setPhoneBasedOnStorage(filteredItems);
    setLockState(iphoneLockState);
    setStorageList(capacities);
    setSelectedColor(null);
    setSelectedStorage(null);
    setShowAddToCart(false);
  };

  const handleStorageSelection = (storage) => {
    const filteredItems = filterItemsBySpec(
      phoneBasedOnStorage,
      "capacity",
      storage
    );
    const colors = getUniqueValues(filteredItems, "color");
    setPhoneBasedOnColor(filteredItems);
    setColorList(colors);
    setSelectedStorage(storage);
    setShowAddToCart(false);
    setAddToCartButton(false);
    setSelectedColor(null);
  };

  const handleColorChange = (iphoneColor) => {
    const filteredItems = filterItemsBySpec(
      phoneBasedOnColor,
      "color",
      iphoneColor
    );
    setSelectedColor(iphoneColor);
    setPrice(filteredItems[0].price);
    setIphoneModel(filteredItems[0]);

    if (priceRef.current) {
      priceRef.current.focus();
      window.scrollTo({
        top: priceRef.current.offsetTop,
        behavior: "smooth",
      });
    }

    setCurrentPictureIndex(0);
    setAddToCartButton(true);
  };

  const showNextImage = () => {
    setCurrentPictureIndex((index) =>
      index === iphoneModel?.images?.length - 1 ? 0 : index + 1
    );
  };

  const showPrevImage = () => {
    setCurrentPictureIndex((index) =>
      index === 0 ? iphoneModel?.images?.length - 1 : index - 1
    );
  };

  const [fetchingModel, setFetchingModel] = useState(true);

  const filterItemsBySpec = (items, spec, value) =>
    items.filter(
      (iphone) =>
        iphone.specification[spec].trim().toLowerCase() ===
        value.trim().toLowerCase()
    );

  const getUniqueValues = (items, spec) =>
    Array.from(new Set(items.map((iphone) => iphone.specification[spec])));

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "green",
  };
  return (
    <div className="overflow-x-hidden py-5 px-5 lg:w-[80%] mx-auto lg:my-10">
      <p className="text-xl py-3 font-semi-bold">
        The iPhone connection - connecting you to the world
      </p>

      {
        fetchingModel && <p>fetching phones</p>
        // <PropagateLoader
        //   color= {"green"}
        //   loading={fetchingModel}
        //   cssOverride={override}
        //   size={20}
        //   aria-label="Loading Spinner"
        //   data-testid="loader"
        //  />
      }

      {selectedModel !== modelIndex && !fetchingModel && (
        <div className="flex flex-wrap shadow-lg border-[#D9D9D9] border-l-8 border-t-8 rounded-[20px]">
          {models.map((model, index) => {
            const modelExists = availableModels.some(
              (iphone) =>
                iphone.name.trim().toLowerCase() ===
                model.name.trim().toLowerCase()
            );

            return (
              <div
                key={index}
                className={`w-1/2 p-4 font-semibold text-xl ${
                  !modelExists
                    ? "text-[gray] opacity-50 cursor-not-allowed"
                    : ""
                }`}
                onClick={() => {
                  if (modelExists) {
                    const itemPicked = availableModels.filter(
                      (iphone) =>
                        iphone.name.trim().toLowerCase() ===
                        model.name.trim().toLowerCase()
                    );

                    const grades = getUniqueValues(itemPicked, "grade");

                    setPickItems(itemPicked);
                    setGrade(grades);
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
      )}

      {selectedModel === modelIndex && (
        <div ref={priceRef} className="lg:flex lg:flex-row gap-10">
          <ImageSlider
            images={iphoneModel?.images}
            currentPictureIndex={currentPictureIndex}
            showPrevImage={showPrevImage}
            showNextImage={showNextImage}
          />
          <div className="px-5">
            {removeItem !== false && (
              <div className="flex justify-between py-4">
                <b>{iphoneModel?.name}</b>
                <b className="flex">
                  Price: <TbCurrencyNaira className="h-6 mr-1" />
                  {price?.toLocaleString()}
                </b>
              </div>
            )}

            {removeItem !== false && (
              <RadioSelection
                title={"Pick your preference"}
                name={"preference"}
                options={grade}
                onChange={(selectedOption) =>
                  handleNewOrUsedChange(selectedOption)
                }
              />
            )}

            {selectedCondition != null && (
              <>
                {removeItem !== false && (
                  <RadioSelection
                    title={"Carrier/Lock Status"}
                    name={"lock"}
                    options={availableCarrier}
                    onChange={(selectedOption) =>
                      handleLockedOrUnlockedChange(selectedOption)
                    }
                  />
                )}

                {lockState !== null && (
                  <>
                    {removeItem !== false && (
                      <RadioSelection
                        title={"Select from available storages"}
                        options={storageList}
                        name={"storage"}
                        onChange={(selectedOption) =>
                          handleStorageSelection(selectedOption)
                        }
                      />
                    )}

                    {selectedStorage !== null && (
                      <>
                        {removeItem !== false && (
                          <RadioSelection
                            title={"Select from available colors"}
                            name={"color"}
                            options={colorList}
                            onChange={(selectedOption) =>
                              handleColorChange(selectedOption)
                            }
                          />
                        )}
                      </>
                    )}

                    {addToCartButton && (
                      <div className="flex justify-center items-center">
                        <Link href="/checkoutPage">
                          <button
                            className="bg-[#187EB4] px-16 py-4 mt-5 rounded-full text-[#FFFFFF]"
                            onClick={() => addToCart(iphoneModel)}
                          >
                            Add to Cart
                          </button>
                        </Link>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
