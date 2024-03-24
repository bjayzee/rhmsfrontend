"use client";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect, useRef, useContext, CSSProperties } from "react";
import RadioSelection from "./RadioSelectionButton";
import { models } from "@/server/utils/iPhonedata";
import ImageSlider from "./ImageSlider";
import { CartContent } from "@/app/(home)/context/AppContext";
import { TbCurrencyNaira } from "react-icons/tb";
import ProductCard from "./ProductCard";

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
        .get("/api/products/search?category=MacBook", {
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

  const [proceed, setProceed] = useState(0);

  const models = [
    {
      name: "MacBook Air",
      pictures: ["Mac Card.png", "basket.png"],
      price: "$599",
    },
    {
      name: "Mac Mini",
      pictures: ["Mac Card.png"],
      price: "$859",
    },
    {
      name: "MacBook Pro",
      pictures: ["Mac Card.png"],
      price: "$1599",
    },
    {
      name: "IMac",
      pictures: ["Mac Card.png"],
      price: "$900",
    },
    {
      name: "MacBook",
      pictures: ["Mac Card.png"],
      price: "$900",
    },
  ];
  console.log({ availableModels });

  return (
    <div className="overflow-x-hidden py-5 px-5">
      <div className="flex-column mb-4">
        <h2 className="font-bold">Behind the Mac</h2>
        <p>More power More performance</p>
        <p className="font-semi-bold">Select the Mac that is right for you</p>
      </div>

      {fetchingModel && <p>fetching available Mac</p>}

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
                    setProceed(1);
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

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
        {proceed === 1 &&
          availableModels?.map((model, index) => (
            <ProductCard
              key={index}
              onClick={() => {
                setProceed(2);
                setIphoneModel({ ...model });
                setAddToCartButton(true);
                setPrice(model.price);
              }}
              model={model}
            />
          ))}
      </div>

      {proceed === 2 && (
        <div ref={priceRef}>
          <ImageSlider
            images={iphoneModel?.images}
            currentPictureIndex={currentPictureIndex}
            showPrevImage={showPrevImage}
            showNextImage={showNextImage}
          />
          <div className="px-5">
            {removeItem !== false && (
              <>
                <div className="flex justify-between py-4">
                  <b>{iphoneModel?.name}</b>
                  <b className="flex">
                    Price: <TbCurrencyNaira className="h-6 mr-1" />
                    {price}
                  </b>
                </div>
                <div className="flex justify-between">
                  <p>Specification:</p>
                  <div className="flex-column">
                    <span></span>
                    <span>
                      {iphoneModel.specification.color},
                      {iphoneModel.specification.batteryHealth}
                    </span>
                    <span>{iphoneModel.specification.model}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p>Condition:</p>
                  <div className="text-[gray]">
                    {iphoneModel.specification.grade}
                  </div>
                </div>
              </>
            )}
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
