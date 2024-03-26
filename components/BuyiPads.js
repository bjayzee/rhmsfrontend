"use client";

import Link from "next/link";

import { useState, useEffect, useRef, useContext } from "react";
import { CartContent } from "@/app/(home)/context/AppContext";
import axios from "axios";
import ProductCard from "./ProductCard";
import ImageSlider from "./ImageSlider";

const BuyAirPods = () => {
  const [selectedModel, setSelectedModel] = useState(null);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [addToCartButton, setAddToCartButton] = useState(false);
  const [removeItem, setRemoveItem] = useState(true);
  const [modelIndex, setModelIndex] = useState(0);
  const [iphoneModel, setIphoneModel] = useState("");
  const [availableModels, setAvailableModels] = useState([]);
  const [grade, setGrade] = useState([null]);
  const [price, setPrice] = useState(0);
  const [pickItems, setPickItems] = useState([]);
  const [showHeader, setShowHeader] = useState(true);
  const priceRef = useRef(null);

  const { addToCart } = useContext(CartContent);

  useEffect(() => {
    getModelsAvailable();
  }, []);
  const getModelsAvailable = async () => {
    setFetchingModel(true);
    try {
      const response = await axios
        .get("/api/products/search?category=iPad", {
          validateStatus: (status) => status < 400,
        })
        .then((res) => res.data);

      const ipadModels = response.data;
      setAvailableModels(ipadModels);
    } catch (error) {
      console.error("Error fetching available models:", error);
    } finally {
      setFetchingModel(false);
    }
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

  const getUniqueValues = (items, spec) =>
    Array.from(new Set(items.map((iphone) => iphone.specification[spec])));

  const [proceed, setProceed] = useState(0);

  const models = [
    {
      name: "iPad",
    },
    {
      name: "iPad Pro",
    },
    {
      name: "iPad Mini",
    },
    {
      name: "iPad Air",
    },
    {
      name: "Magic Keyboard - iPad Pro",
    },
  ];

  return (
    <div className="overflow-x-hidden py-5 px-5">
      {showHeader && (
        <div className="flex-column mb-4">
          <h2 className="font-bold">Behind the iPad</h2>
          <p>More power More performance</p>
        </div>
      )}

      {fetchingModel && <p>fetching available iPad</p>}

      {selectedModel !== modelIndex && !fetchingModel && (
        <div className="flex flex-wrap shadow-lg border-[#D9D9D9] border-t-4 border-l-4 rounded-[20px]">
          {models.map((model, index) => {
            const modelExists = availableModels.some(
              (ipad) =>
                ipad.name.trim().toLowerCase() ===
                model.name.trim().toLowerCase()
            );

            return (
              <div
                key={index}
                className={`w-1/2 p-4 font-semibold text-xl ${
                  !modelExists ? " opacity-20 cursor-not-allowed" : ""
                }`}
                onClick={() => {
                  if (modelExists) {
                    setShowHeader(false);
                    const itemPicked = availableModels.filter(
                      (ipad) =>
                        ipad.name.trim().toLowerCase() ===
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
                setPrice(model.price.toLocaleString());
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
          <div className="px-3">
            {removeItem !== false && (
              <div className="px-4">
                <div className="productInfo py-4">
                  <p className="font-bold">{iphoneModel?.name}</p>
                  <p className="flex font-bold">
                    Price: ₦{iphoneModel?.price.toLocaleString()}
                  </p>
                </div>
                <div className="mb-3">
                  <p className="font-bold">Product Description:</p>
                  <p>{iphoneModel?.description}</p>
                </div>
                <div className="">
                  <p className="font-extrabold">Specification:</p>
                </div>
                <div className="productInfo">
                  <p className="w-[70%] font-semibold">Condition:</p>
                  <div className="text-[gray] w-[30%]">
                    {iphoneModel.specification.grade.toUpperCase()}
                  </div>
                </div>
                <div className="productInfo">
                  <p className="w-[70%] font-semibold">Connectivity:</p>
                  <div className="text-[gray] w-[30%]">
                    {iphoneModel.specification.carrier.toUpperCase()}
                  </div>
                </div>
                <div className="productInfo">
                  <p className="w-[70%] font-semibold">Storage:</p>
                  <div className="text-[gray] w-[30%]">
                    {iphoneModel.specification.capacity.toUpperCase()}
                  </div>
                </div>
              </div>
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
};

export default BuyAirPods;
