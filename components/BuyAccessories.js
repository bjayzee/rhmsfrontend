"use client";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import AccessoryCard from "./AccessoryCard";
import { CartContent } from "@/app/(home)/context/AppContext";

const BuyAccessories = () => {
  const [showIphone, setShowIphone] = useState(false);
  const [showIpad, setShowIpad] = useState(false);
  const [showMac, setShowMac] = useState(false);
  const [showIWatch, setShowIWatch] = useState(false);
  const [showFeature, setShowFeature] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [accessories, setAccessories] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const { addToCart } = useContext(CartContent);

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

  const iPadData = accessories?.filter((data) => data.category === "ipad");

  const macData = accessories?.filter((data) => data.category === "mac");

  const iWatchData = accessories?.filter((data) => data.category === "iwatch");

  const featuredData = accessories?.filter((data) => data.featured === true);

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
  const handleSearchChange = (searchParams) => {
    const search = accessories.filter((data) =>
      data.name.trim().toLowerCase().includes(searchParams.trim().toLowerCase())
    );

    setSearchData(search);
    setShowSearch(true);
    setShowFeature(false);
    setShowMac(false);
    setShowIphone(false);
    setShowIpad(false);
    setShowIWatch(false);
  };

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
                        addToCart({
                          ...model,
                          specification: {
                            grade: "New",
                            capacity: "",
                            color: model.color,
                          },
                        });
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
                        addToCart({
                          ...model,
                          specification: {
                            grade: "New",
                            capacity: "",
                            color: model.color,
                          },
                        });
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
                        addToCart({
                          ...model,
                          specification: {
                            grade: "New",
                            capacity: "",
                            color: model.color,
                          },
                        });
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
                        addToCart({
                          ...model,
                          specification: {
                            grade: "New",
                            capacity: "",
                            color: model.color,
                          },
                        });
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
                        addToCart({
                          ...model,
                          specification: {
                            grade: "New",
                            capacity: "",
                            color: model.color,
                          },
                        });
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
                        addToCart({
                          ...model,
                          specification: {
                            grade: "New",
                            capacity: "",
                            color: model.color,
                          },
                        });
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
    </div>
  );
};

export default BuyAccessories;
