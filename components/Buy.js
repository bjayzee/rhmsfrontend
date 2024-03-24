"use client";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect, useRef, useContext, CSSProperties } from "react";
import RadioSelection from "./RadioSelectionButton";
import { models } from "@/server/utils/iPhonedata";
import ImageSlider from "./ImageSlider";
import { CartContent } from "@/app/(home)/context/AppContext";
import PropagateLoader from "react-spinners/PropagateLoader";
import { TbCurrencyNaira } from "react-icons/tb";

export default function Buy() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [selectedCondition, setSelectedCondition] = useState(null);
  const [lockState, setLockState] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [showAddToCart, setShowAddToCart] = useState(false);
  const [addToCartButton, setAddToCartButton] = useState(false);
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
  const [simTypes, setSimTypes] = useState([]);
  const [selectedSimOption, setSelectedSimOption] = useState(null);
  const [phoneBasedOnSimType, setPhoneBasedOnSimType] = useState([]);
  const [price, setPrice] = useState(0);
  const [pickItems, setPickItems] = useState([]);
  const priceRef = useRef(null);

  const { addToCart } = useContext(CartContent);

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

  function isConditionAvailable(condition) {
    return grade.includes(condition);
  }

  const handleNewOrUsedChange = (iphoneState) => {
    const filteredItems = filterItemsBySpec(pickItems, "grade", iphoneState);
    const carriers = getUniqueValues(filteredItems, "carrier");

    if (priceRef.current) {
      priceRef.current.focus();
      setTimeout(() => {
        const elementRect = priceRef.current.getBoundingClientRect();

        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const targetY = elementRect.top + scrollTop;

        window.scrollTo({
          top: targetY,
          behavior: "smooth",
        });
      }, 100);
    }
    setPhoneBasedOnCarrier(filteredItems);
    setAvailableCarrier(carriers);
    setSelectedCondition((iphoneState) => !iphoneState);
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

    const sims = getUniqueValues(filteredItems, "sim");

    setPhoneBasedOnSimType(filteredItems);
    setLockState(iphoneLockState);
    setSimTypes(sims);
    setSelectedColor(null);
    setSelectedStorage(null);
    setShowAddToCart(false);
  };
  const handleSimType = (simOption) => {
    const filteredItems = filterItemsBySpec(
      phoneBasedOnSimType,
      "sim",
      simOption
    );

    const capacities = getUniqueValues(filteredItems, "capacity");
    setPhoneBasedOnStorage(filteredItems);
    setSelectedSimOption(simOption);
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

      {fetchingModel && <p className="margin-auto">fetching phones</p>}

      {selectedModel !== modelIndex && !fetchingModel && (
        <div className="flex flex-wrap shadow-lg border-[#D9D9D9] border-t-4 border-l-4 rounded-[20px]">
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
                    : "cursor-pointer"
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
      {selectedModel !== null && (
        <div className="my-3 text-xl">
          <p className="font-bold py-3">Phone Condition:</p>

          <div className="border border-[#187EB4] px-8 rounded-xl">
            <div className="grid grid-cols-1">
              <div
                className={`flex items-center ${
                  isConditionAvailable("New")
                    ? ""
                    : "opacity-50 cursor-not-allowed"
                }`}
                onClick={() =>
                  isConditionAvailable("New") && handleNewOrUsedChange("New")
                }
              >
                <input
                  type="radio"
                  name="radio1"
                  className="w-4 h-8 mt-1"
                  disabled={!isConditionAvailable("New")}
                />
                <span className={`p-2 ml-2 font-semibold ${isConditionAvailable? 'cursor-pointer' : 'cursor-not-available'}`}>Brand New</span>
              </div>
              <div className="pl-4 ml-4">
                <p className="pb-3 text-[16px]">
                  Phone still in factory original packaging, Must come with box
                  and all accessories sealed/untounched
                </p>
              </div>

              <hr />

              <div
                className={`flex items-center ${
                  isConditionAvailable("Flawless")
                    ? ""
                    : "opacity-50 cursor-not-allowed"
                }`}
                onClick={() =>
                  isConditionAvailable("Flawless") &&
                  handleNewOrUsedChange("Flawless")
                }
              >
                <input
                  type="radio"
                  name="radio1"
                  className="w-4 h-8 mt-1"
                  disabled={!isConditionAvailable("Flawless")}
                />
                <span className="p-2  ml-2 font-semibold">Flawless</span>
              </div>
              <div className="pl-4 ml-4">
                <p className="pb-3 text-[16px]">
                  Has absolutely no scratches, scuffs or other marks looks brand
                  new
                </p>
              </div>

              <hr />

              <div
                className={`flex items-center ${
                  isConditionAvailable("Used")
                    ? ""
                    : "opacity-50 cursor-not-allowed"
                }`}
                onClick={() =>
                  isConditionAvailable("Used") && handleNewOrUsedChange("Used")
                }
              >
                <input
                  type="radio"
                  name="radio1"
                  className="w-4 h-8 mt-1"
                  disabled={!isConditionAvailable("Used")}
                />
                <span className="p-2 ml-2 font-semibold">Good</span>
              </div>
              <div className="pl-4 ml-4">
                <p className="pb-3 text-[16px]">
                  Shows light to moderate sign of wear. Contatains few light
                  scratches and/or dents.
                </p>
              </div>

              <hr />

              <div
                className={`flex items-center ${
                  isConditionAvailable("Flawless")
                    ? ""
                    : "opacity-50 cursor-not-allowed"
                }`}
                onClick={() =>
                  isConditionAvailable("Flawless") &&
                  handleNewOrUsedChange("Flawless")
                }
              >
                <input
                  type="radio"
                  name="radio1"
                  className="w-4 h-8 mt-1"
                  disabled={!isConditionAvailable("Flawless")}
                />
                <span className="p-2 ml-2 font-semibold">Fair</span>
              </div>
              <div className="pl-4 ml-4">
                <p className="pb-3 text-[16px]">
                  Shows moderate to excessive signs of wear. Contains excessive
                  scratching, major dents, and/or mild housing damage such as a
                  slightly bent frame.
                </p>
              </div>

              <hr />

              <div
                className={`flex items-center ${
                  isConditionAvailable("Flawless")
                    ? ""
                    : "opacity-50 cursor-not-allowed"
                }`}
                onClick={() =>
                  isConditionAvailable("Flawless") &&
                  handleNewOrUsedChange("Flawless")
                }
              >
                <input
                  type="radio"
                  name="radio1"
                  className="w-4 h-8 mt-1"
                  disabled={!isConditionAvailable("Flawless")}
                />
                <span className="p-2 ml-2 font-semibold">Broken </span>
              </div>
              <div className="pl-4 ml-4">
                <p className="pb-3 text-[16px]">
                  Cracks (regardless of size) or broken parts on either screen
                  or body the item.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedCondition != null && (
        <div ref={priceRef}>
          <RadioSelection
            title={"Carrier/Lock Status"}
            name={"lock"}
            options={availableCarrier}
            onChange={(selectedOption) =>
              handleLockedOrUnlockedChange(selectedOption)
            }
          />
        </div>
      )}
      {lockState != null && (
        <RadioSelection
          title={"Sim Type"}
          name={"sim"}
          options={simTypes}
          onChange={(selectedOption) => handleSimType(selectedOption)}
        />
      )}

      {selectedSimOption !== null && (
        <RadioSelection
          title={"Select from available storages"}
          options={storageList}
          name={"storage"}
          onChange={(selectedOption) => handleStorageSelection(selectedOption)}
        />
      )}

      {selectedStorage !== null && (
        <RadioSelection
          title={"Select from available colors"}
          name={"color"}
          options={colorList}
          onChange={(selectedOption) => handleColorChange(selectedOption)}
        />
      )}

      {addToCartButton && (
        <div className="lg:flex lg:flex-row gap-10">
          <ImageSlider
            images={iphoneModel?.images}
            currentPictureIndex={currentPictureIndex}
            showPrevImage={showPrevImage}
            showNextImage={showNextImage}
          />
          <div className="px-5">
            <div className="flex justify-between py-4">
              <b>{iphoneModel?.name}</b>
              <b className="flex">Price: ₦{price?.toLocaleString()}</b>
            </div>
          </div>
        </div>
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
    </div>
  );
}
