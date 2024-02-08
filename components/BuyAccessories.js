'use client';
import { useState } from "react";
import { IoIosSearch } from "react-icons/io"

const BuyAccessories = () => {

    const [showIphone, setShowIphone] = useState(false);
    const [showIpad, setShowIpad] = useState(false);
    const [showMac, setShowMac] = useState(false);
    const [showIWatch, setShowIWatch] = useState(false);
    const [showFeature, setShowFeature] = useState(true);

    const handleIphoneClick = ()=>{
        console.log("iphone clicked")
        setShowFeature(false);
        setShowIphone(true);
        setShowIpad(false);
        setShowIWatch(false);
        setShowMac(false);
    }
    const handleIpadClick = () => {
        setShowFeature(false);
        setShowIpad(true);
        setShowIWatch(false);
        setShowMac(false);
        setShowIphone(false);
    };
    const handleIWatchClick = () => {
        setShowFeature(false);
        setShowIWatch(true);
        setShowMac(false);
        setShowIphone(false);
        setShowIpad(false);
    };
    const handleMacClick = () => {
        setShowFeature(false);
        setShowMac(true);
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

        {showIphone && <div>iPhone Accessories</div>}
        {showIWatch && <div>iWatch Accessories</div>}
        {showIpad && <div>iPad Accessories</div>}
        {showMac && <div>Mac Accessories</div>}

        {showFeature && (
          <>
            <p className="font-bold m-5">Featured Accessories</p>
            <div className="flex ">
              <div className="m-5 border-color-gray shadow ">
                <div className="flex justify-center mt-3">
                  <img src="watch.png" width={100} height={100} />
                </div>

                <div className="m-5">
                  <p className="font-bold">Apple Watch</p>
                  <p className="pl-5">$604</p>
                  <button
                    style={{
                      paddingRight: "5px ",
                      background: "#187EB4",
                      color: "white",
                      borderRadius: "5px",
                      margin: "6px",
                      padding: "4px",
                    }}
                  >
                    BUY NOW
                  </button>
                  <p className="pl-3">See details</p>
                </div>
              </div>

              <div className="m-5 border-color-gray shadow ">
                <div className="flex justify-center mt-3">
                  <img src="watch.png" width={100} height={100} />
                </div>

                <div className="m-5">
                  <p className="font-bold ">Apple Watch</p>
                  <p className="pl-5">$604</p>
                  <button
                    style={{
                      paddingRight: "5px ",
                      background: "#187EB4",
                      color: "white",
                      borderRadius: "5px",
                      margin: "6px",
                      padding: "4px",
                    }}
                  >
                    BUY NOW
                  </button>
                  <p className="pl-3">See details</p>
                </div>
              </div>
            </div>

            <div className="flex ">
              <div className="m-5 border-color-gray shadow ">
                <div className="flex justify-center mt-3">
                  <img src="Mac Card.png" width={100} height={100} />
                </div>

                <div className="m-5">
                  <p className="font-bold">Mac mini case</p>
                  <p className="pl-5">$604</p>
                  <button
                    style={{
                      paddingRight: "5px ",
                      background: "#187EB4",
                      color: "white",
                      borderRadius: "5px",
                      margin: "6px",
                      padding: "4px",
                    }}
                  >
                    BUY NOW
                  </button>
                  <p className="pl-3">See details</p>
                </div>
              </div>

              <div className="m-5 border-color-gray shadow ">
                <div className="flex justify-center mt-3">
                  <img src="iwatchy.png" width={100} height={100} />
                </div>

                <div className="m-5">
                  <p className="font-bold">Apple Watch</p>
                  <p className="pl-5">$604</p>
                  <button
                    style={{
                      paddingRight: "5px ",
                      background: "#187EB4",
                      color: "white",
                      borderRadius: "5px",
                      margin: "6px",
                      padding: "4px",
                    }}
                  >
                    BUY NOW
                  </button>
                  <p className="pl-3">See details</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BuyAccessories