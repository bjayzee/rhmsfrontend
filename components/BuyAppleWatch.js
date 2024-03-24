"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import axios from "axios";
import ImageSlider from "./ImageSlider";
import RadioSelection from "./RadioSelectionButton";
import { CartContent } from "@/app/(home)/context/AppContext";
import Link from "next/link";

const BuyAppleWatch = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [fetchingModel, setFetchingModel] = useState(false);
  const [availableWatches, setAvailableWatches] = useState([]);
  const [availableAirpods, setAvailableAirpods] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [grade, setGrade] = useState([null]);
  const [price, setPrice] = useState(0);
  const [pickItems, setPickItems] = useState([]);

  const [itemBasedOnCarrier, setItemBasedOnCarrier] = useState([]);
  const [availableCarrier, setAvailableCarrier] = useState([]);

  const [itemsBasedOnStorage, setItemsBasedOnStorage] = useState([]);
  const [availableStorage, setAvailableStorage] = useState([]);

  const [itemsBasedOnCaseMaterial, setItemBasedOnCaseMaterial] = useState([]);
  const [availableCases, setAvailableCases] = useState([]);

  const [availableBands, setAvailableBands] = useState([]);
  const [bandType, setBandType] = useState("");
  const [itemsBasedOnBandType, setItemsBaseOnBandType] = useState([]);

  const [removeItem, setRemoveItem] = useState(true);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [selectedCondition, setSelectedCondition] = useState(null);

  const priceRef = useRef(null);

  const [showAddToCart, setShowAddToCart] = useState(false);
  const [iwatchModel, setIwatchModel] = useState("");

  const { addToCart } = useContext(CartContent);

  useEffect(() => {
    const getAvailableAirpods = async () => {
      setFetchingModel(true);
      try {
        const response = await axios
          .get("/api/products/search?category=Airpods", {
            validateStatus: (status) => status < 400,
          })
          .then((res) => res.data)
          .then((res) => res.data);

        setAvailableAirpods(response);
      } catch (error) {
        console.error("Error fetching available airpods:", error);
      } finally {
        setFetchingModel(false);
      }
    };

    const getAvailableIwatch = async () => {
      setFetchingModel(true);
      try {
        const response = await axios
          .get("/api/products/search?category=iWatch", {
            validateStatus: (status) => status < 400,
          })
          .then((res) => res.data)
          .then((res) => res.data);

        setAvailableWatches(response);
      } catch (error) {
        console.error("Error fetching available watches:", error);
      } finally {
        setFetchingModel(false);
      }
    };

    getAvailableAirpods();
    getAvailableIwatch();
  }, []);

  const uniqueWatchValues = Array.from(
    new Set(availableWatches?.map((item) => item.name))
  );

  const uniqueAirpodsValues = Array.from(
    new Set(availableAirpods?.map((item) => item.name))
  );

  const showNextImage = () => {
    setCurrentPictureIndex((index) => {
      if (index === iwatchModel?.images?.length - 1) return 0;
      return index + 1;
    });
  };

  const showPrevImage = () => {
    setCurrentPictureIndex((index) => {
      if (index === 0) return iwatchModel?.images?.length - 1;
      return index - 1;
    });
  };

  const handleNewOrUsedChange = (itemState) => {
    const filteredItems = filterItemsBySpec(pickItems, "grade", itemState);

    const carriers = getUniqueValues(filteredItems, "carrier");

    setItemBasedOnCarrier(filteredItems);
    setAvailableCarrier(carriers);
    setSelectedCondition(itemState);
  };

  const handleConnectionType = (option) => {
    const filteredItems = filterItemsBySpec(
      itemBasedOnCarrier,
      "carrier",
      option
    );

    const capacities = getUniqueValues(filteredItems, "capacity");

    setAvailableStorage(capacities);
    setItemsBasedOnStorage(filteredItems);
  };

  const handleSize = (option) => {
    const filteredItems = filterItemsBySpec(
      itemsBasedOnStorage,
      "capacity",
      option
    );
    const uniqueCaseMaterial = getUniqueValues(filteredItems, "caseMaterial");

    setAvailableCases(uniqueCaseMaterial);

    setItemBasedOnCaseMaterial(filteredItems);
  };

  const handleCaseMaterial = (material) => {
    const filteredItems = filterItemsBySpec(
      itemsBasedOnCaseMaterial,
      "caseMaterial",
      material
    );
    const availableBands = getUniqueValues(filteredItems, "bandType");

    setAvailableBands(availableBands);
    setItemsBaseOnBandType(filteredItems);
  };

  const handleBandType = (band) => {
    setBandType(band);
    setPrice(itemsBasedOnBandType[0].price);
    setIwatchModel(itemsBasedOnBandType[0]);

    if (priceRef.current) {
      priceRef.current.focus();
      window.scrollTo({
        top: priceRef.current.offsetTop,
        behavior: "smooth",
      });
    }

    setCurrentPictureIndex(0);
    setShowAddToCart(true);
  };

  const filterItemsBySpec = (items, spec, value) =>
    items.filter(
      (item) =>
        item.specification[spec].trim().toLowerCase() ===
        value.trim().toLowerCase()
    );

  const getUniqueValues = (items, spec) =>
    Array.from(new Set(items.map((item) => item.specification[spec])));

  const optionsToChoose = ["Airpods", "iWatch"];

  return (
    <div className="overflow-x-hidden py-5 px-5">
      <p className="text-xl font-bold">Wear something smart and stylish</p>

      <div className="flex items-center py-2 justify-between text-[16px]">
        <span className="text-sm font-semibold">Let's get you going:</span>
        <button
          className="p-3 rounded-xl flex items-center justify-around border-[#D9D9D9] border-2 w-[60%]"
          onClick={() => {
            setShowBox((prev) => !prev);
            setShowDropdown(false);
          }}
        >
          <div className="leading-5">{"choose an option"}</div>

          <FaPlay
            className={`text-[20px] text-rh-blue mx-2  ${
              showBox ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>

      {showBox ? (
        <div className="w-fit mb-3 gap-1 font-semibold text-lg flex flex-col ">
          {optionsToChoose?.map((option, key) => (
            <div
              key={key}
              className="cursor-pointer hover-bg-gray-100"
              onClick={() => {
                setSelectedOption(option);
                setShowDropdown(true);
              }}
            >
              <div className="hover:font-bold">{option}</div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

      {showDropdown && (
        <div className="p-2 font-semibold text-lg flex flex-wrap shadow-lg border-[#D9D9D9] border-t-4 border-l-4 rounded-[20px]">
          {selectedOption === "Airpods"
            ? uniqueAirpodsValues?.map((option, key) => (
                <div
                  key={key}
                  className="w-1/2 cursor-pointer p-2 hover-bg-gray-100"
                >
                  {option}
                </div>
              ))
            : uniqueWatchValues?.map((option, key) => (
                <div
                  key={key}
                  className="w-1/2 cursor-pointer p-2 hover-bg-gray-100"
                  onClick={() => {
                    const itemPicked = availableWatches.filter(
                      (item) =>
                        item.name.trim().toLowerCase() ===
                        option.trim().toLowerCase()
                    );

                    const grades = getUniqueValues(itemPicked, "grade");

                    setGrade(grades);
                    setPickItems(itemPicked);
                    setIwatchModel(itemPicked[0]);
                    setCurrentPictureIndex(0);
                  }}
                >
                  {option}
                </div>
              ))}
        </div>
      )}

      {iwatchModel && (
        <div ref={priceRef}>
          <ImageSlider
            images={iwatchModel?.images}
            currentPictureIndex={currentPictureIndex}
            showPrevImage={showPrevImage}
            showNextImage={showNextImage}
          />

          <div className="px-5">
            {removeItem !== false ? (
              <div className="flex justify-between py-4">
                <b>{iwatchModel?.name}</b>
                <b>Price: ₦ {price.toLocaleString()}</b>
              </div>
            ) : null}

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

            {availableCarrier?.length > 0 && (
              <RadioSelection
                title={"Connection type"}
                name={"connection"}
                options={availableCarrier}
                onChange={(selectedOption) =>
                  handleConnectionType(selectedOption)
                }
              />
            )}

            {availableStorage?.length > 0 && (
              <RadioSelection
                title={"Size"}
                name={"size"}
                options={availableStorage}
                onChange={(selectedOption) => handleSize(selectedOption)}
              />
            )}

            {availableCases?.length > 0 && (
              <RadioSelection
                title={"Case Material"}
                name={"case"}
                options={availableCases}
                onChange={(selectedOption) =>
                  handleCaseMaterial(selectedOption)
                }
              />
            )}

            {availableBands?.length > 0 && (
              <RadioSelection
                title={"Band Type"}
                name={"band"}
                options={availableBands}
                onChange={(selectedOption) => handleBandType(selectedOption)}
              />
            )}

            {showAddToCart && (
              <div className="flex justify-center items-center">
                <Link href="/checkoutPage">
                  <button
                    className="bg-[#187EB4] px-16 py-4 mt-5 rounded-full text-[#FFFFFF]"
                    onClick={() => addToCart(iwatchModel)}
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyAppleWatch;
