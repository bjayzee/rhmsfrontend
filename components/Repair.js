"use client";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import RadioSelection from "./RadioSelectionButton";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

export default function Repair() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [proceedToOpen, setProceedToOpen] = useState(false);
  const [proceedToFaceId, setProceedToFaceId] = useState(false);
  const [proceedToTrueTone, setProceedToTrueTone] = useState(false);
  const [proceedToAnyOtherIssues, setProceedToAnyOtherIssues] = useState(false);
  const [repairCenters, setRepairCenters] = useState([]);
  const [repairItems, setRepairItems] = useState([]);
  const [selectedRepairCenter, setSelectedRepairCenter] = useState(null);
  const [showSelectedRepairCenter, setShowSelectedRepairCenter] =
    useState(false);
  const [showSelectCenterButton, setShowSelectCenterButton] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showSummary, setShowSummary] = useState(true);

  useEffect(() => {
    const fetchRepairCenters = async () => {
      try {
        const centers = await axios
          .get("/api/repair-center", {
            validateStatus: (status) => status < 400,
          })
          .then((res) => res.data)
          .then((res) => res.data);
        setRepairCenters(centers);
      } catch (error) {
        console.error("error fetching repair centers", error);
      }
    };

    const fetchRepairItems = async () => {
      try {
        const items = await axios
          .get("/api/repair-items", {
            validateStatus: (status) => status < 400,
          })
          .then((res) => res.data)
          .then((res) => res.data);
        setRepairItems(items);
      } catch (error) {
        console.error("error fetching repair items", error);
      }
    };

    fetchRepairCenters();
    fetchRepairItems();
  }, []);

  let [values, setValues] = useState([]);
  console.log({ selectedOption });
  console.log({ values });

  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  const handleCenterOptionSelect = (option) => {
    setSelectedRepairCenter(option);
    setShowSelectedRepairCenter(false);   
    setShowSummary((prevState) => !prevState);
 
  };


  const handleSelectClick = () => {
    setShowDropdown(true);
  };
  const handleSelectCenter = () => {
    setShowSelectedRepairCenter((prevState) => !prevState);
    setShowSummary((prevState) => !prevState);

  };

  const handleChange = () => {};
  const repairOptions = [
    { name: "Screen Replacement", value: " " },
    { name: "Back Glass Replacement", value: "" },
    { name: "Battery Replacement", value: "" },
  ];
  return (
    <div className="m-5 px-3">
      <p className="text-xl font-bold">We fix it right, the Apple way.</p>
      <p className="text-l font-bold my-2">Make your iPhone new again.</p>
      <div className="flex justify-between">
        <blockquote className="w-[65%] text-xs font-semibold">
          Apple-certified repairs are performed by trusted experts who use
          genuine Apple parts. We are certified repairers. You'll get your
          product back working exactly the way it should.
        </blockquote>
        <div className="w-[30%]">
          <img src="/repairImg.png" alt="Image" />
        </div>
      </div>

      <div className="flex items-center py-5 justify-between text-[16px]">
        <span className="text-sm font-semibold">Perform a Repair:</span>
        <button
          className="p-3 rounded-xl flex items-center justify-around border-[#D9D9D9] border-2 w-[60%]"
          onClick={handleSelectClick}
        >
          <div className="leading-5">
            {selectedOption ? selectedOption.name : "Select your phone"}
          </div>

          <FaPlay className="text-[18px] text-rh-blue ml-1" />
        </button>
      </div>

      {showDropdown ? (
        <div className="p-2 font-semibold text-sm flex flex-wrap shadow-lg border-[#D9D9D9] border-t-4 border-l-4 rounded-[20px]">
          {repairItems?.map((option, key) => (
            <div
              key={key}
              className="w-1/2 cursor-pointer p-2 hover-bg-gray-100"
              onClick={() => handleOptionSelect(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}

      {selectedOption && (
        <div className="">
          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-lg">
              What's wrong with your iPhone?
            </h4>
            <span>You can select multiple if applicable</span>
          </div>

          <div className="py-4 flex flex-col">
            {repairOptions.map((item, index) => (
              <RadioSelection
                key={index}
                title={item.name}
                name={item.name}
                options={["Premium", "Economy"]}
                onChange={(option) => {
                  setShowContinueButton(true);
                  const temp = values;

                  temp.push({ name: item.name, value: option });
                  setValues(temp);
                }}
              />
            ))}
          </div>
          {showContinueButton ? (
            <div className="flex justify-center">
              <button
                onClick={() => {
                  setShowContinueButton(false);
                  setProceedToOpen(true);
                }}
                className="bg-rh-blue px-16 py-2 rounded-full text-[#FFFFFF]"
              >
                Continue
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
      {proceedToOpen ? (
        <RadioSelection
          title={"Has your phone been opened before?"}
          name={"lock"}
          options={["Yes", "No", "I don't know"]}
          onChange={(option) => {
            setProceedToFaceId(true);
          }}
        />
      ) : (
        ""
      )}

      {proceedToFaceId ? (
        <RadioSelection
          title={"Face ID"}
          name={"face"}
          options={["Yes", "No", "I don't know"]}
          onChange={(option) => {
            setProceedToTrueTone(true);
          }}
        />
      ) : (
        ""
      )}

      {proceedToTrueTone ? (
        <RadioSelection
          title={"True Tone"}
          name={"tone"}
          options={["Yes", "No", "I don't know"]}
          onChange={(option) => {
            setProceedToAnyOtherIssues(true);
          }}
        />
      ) : (
        ""
      )}

      {proceedToAnyOtherIssues ? (
        <div>
          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-xl">
              Any other issues with the phone?
            </h4>
            <span className="text-sm opacity-[50]">
              Write in the box below or put ‘Nil’ if there is none.
            </span>
          </div>
          <input className="text-xs outline-none border-2 border-rh-blue w-full h-[50px] px-3 mt-3" />

          {showSelectCenterButton && (
            <button
              className="p-3 rounded-xl flex items-center justify-around border-[#D9D9D9] border-2 w-full my-3"
              onClick={handleSelectCenter}
            >
              <div className="leading-5">Select a Repair Center</div>
              <IoIosArrowDropdownCircle className="text-[18px] text-rh-blue ml-1" />
            </button>
          )}

          {showSelectedRepairCenter ? (
            <div className="p-2 font-semibold text-sm flex flex-wrap shadow-lg border-[#D9D9D9] border-t-4 border-l-4 rounded-[20px]">
              {repairCenters.map((option, key) => (
                <div
                  key={key}
                  className="cursor-pointer p-2 hover-bg-gray-100"
                  onClick={() => handleCenterOptionSelect(option)}
                >
                  <div className="flex flex- gap-2">
                    <p>{option.address}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      {showSummary ? (
        " "
      ) : (
        <div className="py-4">
          <h1 className="font-bold">Summary: </h1>

          <div>
            <div>
              <h2 className="font-bold">Phone Detail:</h2>
              <p>{selectedOption?.name}</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between mr-10 font-bold">
              <h2>Repair Detail:</h2>
              <p>Cost</p>
            </div>

            <div>
              {/* {values?.map((item, index) => { 
                <>
                  <h2>{item.name}</h2>
                  <p>{item.value === "Premium" ? }</p>
                </>;
              })} */}

              {values.find((item) => item.name === "Screen Replacement")
                ? values.find((item) => item.name === "Screen Replacement")
                    ?.value === "Economy"
                  ? selectedOption.screenReplacement.economyCost
                  : selectedOption.screenReplacement.premiumCost
                : ""}
            </div>

            <p>Total: </p>
          </div>

          <div>
            <div>
              <h2 className="font-bold">Other issues with the phone:</h2>
              <p>Name</p>
            </div>
          </div>

          <div className="my-2">
            <h1 className="font-bold">Repair Center Information: </h1>
            <span className="font-bold">Contact Address:</span>
            {"   "}
            {selectedRepairCenter?.address}
          </div>
          <div className="my-2">
            <span className="font-bold">Email:</span>{" "}
            {selectedRepairCenter?.email}
          </div>
          <div className="my-2">
            <span className="font-bold">Phone Numbers:</span>
            {"   "}
            <div>
              {selectedRepairCenter?.phoneNumbers.map((phoneNumber, index) => (
                <div key={index}>{phoneNumber}</div>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <button
              className="p-3 rounded-xl border-[#D9D9D9] border-2"
              onClick={() => setShowCalendar(true)}
            >
              Book Appointment
            </button>
            <button
              className="p-3 rounded-xl border-[#D9D9D9] border-2"
              onClick={() => {}}
            >
              Walk in
            </button>
          </div>
        </div>
      )}

      {showCalendar && (
        <InlineWidget url="https://calendly.com/bjayzee/book-repair-visit" />
      )}
    </div>
  );
}
