"use client";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import ProductCard from "./ProductCard";
import AccessoryCard from "./AccessoryCard";
import ImageSlider from "./ImageSlider";
import { TbCurrencyNaira } from "react-icons/tb";

const BuyAccessories = () => {
  const [showIphone, setShowIphone] = useState(false);
  const [showIpad, setShowIpad] = useState(false);
  const [showMac, setShowMac] = useState(false);
  const [showIWatch, setShowIWatch] = useState(false);
  const [showFeature, setShowFeature] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [accessories, setAccessories] = useState([]);
  const [proceed, setProceed] = useState(0);
  const [searchData, setSearchData] = useState([]);
  const [model, setModel] = useState("");
  const [removeItem, setRemoveItem] = useState(true);
  const [addToCartButton, setAddToCartButton] = useState(false);
  const [price, setPrice] = useState(0);

  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const priceRef = useRef(null);

  useEffect(() => {
    const fetchAccessories = async () => {
      try {
        const accessoriesData = await axios
          .get("/api/accessories", {
            validateStatus: (status) => status < 400,
          })
          .then((res) => res.data)
          .then((res) => res.data);
        setAccessories(accessoriesData);

      } catch (error) {
        console.error("error fetching accessories", error);
      }
    };

    fetchAccessories();
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

  const iPadData = accessories?.filter((data) => data.category === "ipad");

  const macData = accessories?.filter((data) => data.category === "mac");

  const iWatchData = accessories?.filter(
    (data) => data.category === "iwatch"
  );

  const featuredData = accessories?.filter((data) => data.featured === true);
  console.log({ featuredData });

   const iPhonedata = accessories?.filter((data) => data.category === "iphone");

  const handleIphoneClick = () => {
    setShowFeature(false);
    setShowIphone(true);
    setShowIpad(false);
    setShowIWatch(false);
    setShowMac(false);
    setShowSearch(false);
  };
  const handleIpadClick = () => {
    setShowFeature(false);
    setShowIpad(true);
    setShowIWatch(false);
    setShowMac(false);
    setShowIphone(false);
    setShowSearch(false);
  };
  const handleIWatchClick = () => {
    setShowFeature(false);
    setShowIWatch(true);
    setShowMac(false);
    setShowIphone(false);
    setShowIpad(false);
    setShowSearch(false);
  };
  const handleMacClick = () => {
    setShowFeature(false);
    setShowMac(true);
    setShowIphone(false);
    setShowIpad(false);
    setShowIWatch(false);
    setShowSearch(false);
  };
  const handleSearchChange = (searchParams) =>{
      const search = accessories.filter((data) =>
        data.name
          .trim()
          .toLowerCase()
          .includes(searchParams.trim().toLowerCase())
      );

      setSearchData(search);
      setShowSearch(true)
      setShowFeature(false);
      setShowMac(false);
      setShowIphone(false);
      setShowIpad(false);
      setShowIWatch(false);
  } 
  
  
  return (
    <div>
      <div>
        <p className=" text-xl font-bold m-5">
          A fresh approach to accessories
        </p>

        <div className="relative">
          <input
            type="text"
            onChange={(e) => handleSearchChange(e.target.value)}
            className="text-xs border h-6 border-rh-blue rounded-xl ml-5 pl-10 py-4 w-[320px]"
            placeholder="Find the accessories you are looking for"
          />
          <IoIosSearch className="absolute top-1/4 left-7 " />
        </div>

        <p className="font-bold m-5">Select accessory by category</p>

        <div className="flex ml-5 gap-10">
          <div className="flex flex-col gap-2">
            <p onClick={handleIphoneClick} className="hover:font-bold">
              iPhone
            </p>
            <p onClick={handleIWatchClick} className="hover:font-bold">
              Apple watch
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p onClick={handleMacClick} className="hover:font-bold">
              Mac
            </p>
            <p onClick={handleIpadClick} className="hover:font-bold">
              iPad
            </p>
          </div>
        </div>

        <div className="px-3">
          {showSearch && (
            <>
              <p className="font-bold mt-4">Search Results</p>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                {searchData?.length !== 0 ? (
                  searchData.map((model, index) => (
                    <AccessoryCard
                      key={index}
                      onClick={() => {
                        setProceed(2);
                        setModel({ ...model });
                        setAddToCartButton(true);
                        setPrice(model.price);
                      }}
                      model={model}
                    />
                  ))
                ) : (
                  <div>search accessories not available at this time</div>
                )}
              </div>
            </>
          )}

          {showIphone && (
            <>
              <p className="font-bold mt-4">iPhone Accessories</p>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                {iPhonedata?.length !== 0 ? (
                  iPhonedata.map((model, index) => (
                    <AccessoryCard
                      key={index}
                      onClick={() => {
                        setProceed(2);
                        setIphoneModel({ ...model });
                        setAddToCartButton(true);
                        setPrice(model.price);
                      }}
                      model={model}
                    />
                  ))
                ) : (
                  <div>No iphone accessories at this time</div>
                )}
              </div>
            </>
          )}
          {showIWatch && (
            <>
              <p className="font-bold mt-4">iWatch Accessories</p>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {iWatchData?.length !== 0 ? (
                  iWatchData?.map((model, index) => (
                    <AccessoryCard
                      key={index}
                      onClick={() => {
                        setProceed(2);
                        setIphoneModel({ ...model });
                        setAddToCartButton(true);
                        setPrice(model.price);
                      }}
                      model={model}
                    />
                  ))
                ) : (
                  <div>No iwatch accessories at this time</div>
                )}
              </div>
            </>
          )}

          {showIpad && (
            <>
              <p className="font-bold mt-4">iPad Accessories</p>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {iPadData?.length !== 0 ? (
                  iPadData?.map((model, index) => (
                    <AccessoryCard
                      key={index}
                      onClick={() => {
                        setProceed(2);
                        setIphoneModel({ ...model });
                        setAddToCartButton(true);
                        setPrice(model.price);
                      }}
                      model={model}
                    />
                  ))
                ) : (
                  <div>No ipad accessories at this time</div>
                )}
              </div>
            </>
          )}

          {showMac && (
            <>
              <p className="font-bold mt-4">Mac Accessories</p>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {macData?.length !== 0 ? (
                  macData?.map((model, index) => (
                    <AccessoryCard
                      key={index}
                      onClick={() => {
                        setProceed(2);
                        setIphoneModel({ ...model });
                        setAddToCartButton(true);
                        setPrice(model.price);
                      }}
                      model={model}
                    />
                  ))
                ) : (
                  <div>No mac accessories at this time</div>
                )}
              </div>
            </>
          )}

          {showFeature && (
            <>
              <p className="font-bold mt-4">Featured Accessories</p>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                {featuredData?.length !== 0 ? (
                  featuredData?.map((model, index) => (
                    <AccessoryCard
                      key={index}
                      onClick={() => {
                        setProceed(2);
                        setIphoneModel({ ...model });
                        setAddToCartButton(true);
                        setPrice(model.price);
                      }}
                      model={model}
                    />
                  ))
                ) : (
                  <div>No featured product at this time</div>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {proceed === 2 && (
        <div ref={priceRef}>
          <ImageSlider
            images={model?.images}
            currentPictureIndex={currentPictureIndex}
            showPrevImage={showPrevImage}
            showNextImage={showNextImage}
          />
          <div className="px-5">
            {removeItem !== false && (
              <>
                <div className="flex justify-between py-4">
                  <b>{model?.name}</b>
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
                      {model.color},
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p>Condition:</p>
                  <div className="text-[gray]">
                    New
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
              onClick={() => addToCart(model)}
            >
              Add to Cart
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BuyAccessories;
