"use client";
import DealODayCard from "./DealODayCard";
import { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import { CartContent } from "@/app/context/AppContext";
import ImageSlider from "./ImageSlider";
import Link from "next/link";
import MoonLoader from "react-spinners/MoonLoader";

const DealOfTheDay = () => {
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
  const [proceed, setProceed] = useState(0);
  const priceRef = useRef(null);

  const { addToCart } = useContext(CartContent);
  const [availableForDeals, setAvailableForDeals] = useState([]);
  const [fetchingModel, setFetchingModel] = useState(true);

  const getModelsAvailable = async () => {
    setFetchingModel(true);
    try {
      const response = await axios
        .get("/api/products/search?dealOfTheDay=" + true, {
          validateStatus: (status) => status < 400,
        })
        .then((res) => res.data)
        .then((res) => res.data);


      setAvailableForDeals(response);
      console.log({response})
    } catch (error) {
      console.error("Error fetching available models:", error);
    } finally {
      setFetchingModel(false);
    }
  };

  useEffect(() => {
    getModelsAvailable();
  }, []);

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

  return (
    <div className="grid justify-items-center">
      {fetchingModel && <div className="my-10">fetching deals of the day</div>}

      {availableForDeals?.length > 0 ? (
        <h1 className="font-black text-center my-5 text-lg">
          DEALS OF THE DAY
        </h1>
      ) : (
        ""
      )}

      <div className="grid grid-cols-2 justify-between gap-6">
        {availableForDeals.length > 0 &&
          availableForDeals.map((deal, index) => (
            <Link key={index} href={`/deal/${deal._id}`}>
              <div>
                <DealODayCard param={deal} />
              </div>
            </Link>

            // <DealODayCard
            //   key={index}
            //   param={deal}
            //   onClick={() => {
            //     console.log({ deal });
            //     setProceed(2);
            //     setIphoneModel({...deal});
            //     setAddToCartButton(true);
            //     setPrice(deal.price);
            //   }}
            // />
          ))}
        {fetchingModel && (
          <div className="my-10 flex flex-col items-center gap-3">
            <MoonLoader />
            Fetching deals of the day
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:w-[70%] mx-auto gap-10">
        {!fetchingModel &&
          availableForDeals.length !== 0 &&
          availableForDeals.map((deal, index) => <DealODayCard param={deal} />)}
      </div>
    </div>
  );
};

export default DealOfTheDay;
