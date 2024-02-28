"use client";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FaPlay } from "react-icons/fa";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import RadioSelection from "./RadioSelectionButton";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { useRouter } from "next/navigation";
import 'react-toastify/dist/ReactToastify.css';



export default function Repair() {

  const router = useRouter();

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
  const [showSummary, setShowSummary] = useState(false);
  const [otherIssues, setOtherIssues] = useState("");
  const [faceId, setFaceId] = useState("");
  const [trueTone, setTrueTone] = useState("");
  const [phoneOpenedBefore, setPhoneOpenedBefore] = useState("");
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const[foundUs, setFoundUs] = useState("");
  const [total, setTotal] = useState(0);

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
    onEventScheduled: (e) => {
      console.log(e.data.payload);
      const requestData = {
        repairItem: selectedOption.name,
        repairType: values,
        otherIssues: otherIssues || "Nil",
        repairCenter: selectedRepairCenter._id,
        status: selectedOption.status,
        customerDetail: {
          name: name,
          email: email,
          howDidYouFoundUs: foundUs,
        },
        faceId: faceId,
        trueTone: trueTone,
        phoneOpenedBefore: phoneOpenedBefore,
        repairReport: " ",
        repairClinicTagNum: " ",
      };

      axios
        .post("/api/repair", requestData)
        .then((response) => {
          toast.success("Your repair request has been scheduled successfully");
          router.push("/");
          console.log("Response data:", response.data);
        })
        .catch((error) => {
          // Handle error: log the error message
          console.error("Error:", error.message);
        });

      toast.success({
        message: "accessory deleted successfully",
      });
    },
  });

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  const handleCenterOptionSelect = (option) => {
    setSelectedRepairCenter(option);
    setShowSelectedRepairCenter(false);
    setShowSummary(true);
  };

  const handleSelectClick = () => {
    setShowDropdown(true);
  };

  const handleSelectCenter = () => {
    setShowSelectedRepairCenter((prevState) => !prevState);
  };

  const handleChange = () => {};

  const repairOptions = [
    { name: "Screen Replacement", value: " " },
    { name: "Back Glass Replacement", value: "" },
    { name: "Battery Replacement", value: "" },
  ];
  return (
    <div className="m-5 px-3">
      <ToastContainer />
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
            {selectedOption ? selectedOption.name : "Select your device"}
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
              What's wrong with your device?
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

                  const existingItemIndex = values.findIndex(
                    (value) => value.name === item.name
                  );
                  if (existingItemIndex !== -1) {
                    setValues((prevValues) => [
                      ...prevValues.slice(0, existingItemIndex),
                      { ...prevValues[existingItemIndex], value: option },
                      ...prevValues.slice(existingItemIndex + 1),
                    ]);
                  } else {
                    setValues((prevValues) => [
                      ...prevValues,
                      { name: item.name, value: option },
                    ]);
                  }
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
          title={"Has your device been opened before?"}
          name={"lock"}
          options={["Yes", "No", "I don't know"]}
          onChange={(option) => {
            setProceedToFaceId(true);
            setPhoneOpenedBefore(option);
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
            setFaceId(option);
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
            setTrueTone(option);
          }}
        />
      ) : (
        ""
      )}

      {proceedToAnyOtherIssues ? (
        <div>
          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-xl">
              Any other issues with the device?
            </h4>
            <span className="text-sm opacity-[50]">
              Write in the box below or put ‘Nil’ if there is none.
            </span>
          </div>
          <input
            className="text-xs outline-none border-2 border-rh-blue w-full h-[50px] px-3 mt-3"
            onChange={(e) => {
              setOtherIssues(e.target.value);
            }}
          />

          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-xl">Name:</h4>
          </div>
          <input
            className="text-xs outline-none border-2 border-rh-blue w-full h-[50px] px-3 mt-3"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-xl">Email:</h4>
          </div>
          <input
            className="text-xs outline-none border-2 border-rh-blue w-full h-[50px] px-3 mt-3"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <div className="flex flex-col justify-center">
            <h4 className="font-semibold text-xl">How do you know about us:</h4>
          </div>
          <input
            className="text-xs outline-none border-2 border-rh-blue w-full h-[50px] px-3 mt-3"
            onChange={(e) => {
              setFoundUs(e.target.value);
            }}
          />

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
              {repairCenters?.map((option, key) => (
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
        <div className="py-4">
          <h1 className="font-bold  mb-3">Summary: </h1>

          <div>
            <div className="mb-3">
              <h2 className="font-bold ">Device Detail:</h2>
              <p>{selectedOption?.name}</p>
            </div>
          </div>

          <div className="mb-3">
            <div className="flex justify-between font-bold">
              <h2 className="w-[80%]">Repair Detail:</h2>
              <p className="w-[20%]">Cost</p>
            </div>

            <div>
              {values.map((item, key) => {
                const optionKey =
                  item.name === "Screen Replacement"
                    ? "screenReplacement"
                    : item.name === "Battery Replacement"
                    ? "batteryReplacement"
                    : item.name === "Back Glass Replacement"
                    ? "backGlassReplacement"
                    : null;
                return (
                  <div className="my-2 flex" key={key}>
                    <div className="w-[80%]">
                      {item.name} - {item.value}
                    </div>
                    <div className="w-[20%]">
                      {optionKey &&
                        (item.value.toLowerCase() === "premium"
                          ? selectedOption[optionKey]?.premiumCost
                          : selectedOption[optionKey]?.economyCost)}
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="font-bold my-3">
              Total: ₦
              {values?.reduce((sum, item) => {
                console.log({item})
                const price =
                  item.value.toLowerCase() === "premium"
                    ? selectedOption.premiumCost
                    : selectedOption.economyCost;

                    console.log({price})
                return sum + price;
              }, 0)}
            </p>
          </div>

          <div>
            <div className="mb-3">
              <h2 className="font-bold">Other issues with the phone:</h2>
              <p>{otherIssues}</p>
            </div>
          </div>

          <div className="my-2">
            <h1 className="text-l font-bold mb-3">
              Repair Center Information:{" "}
            </h1>
            <span className="font-bold">Contact Address:</span>
            {"   "}
            {selectedRepairCenter?.address}
          </div>
          <div className="my-2">
            <span className="font-bold">Email:</span>{" "}
            {selectedRepairCenter?.email}
          </div>
          <div className="my-3">
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
              Walk in
            </button>
            <button
              className="p-3 rounded-xl border-[#D9D9D9] border-2"
              onClick={() => {}}
            >
              Pick Up
            </button>
          </div>
        </div>
      ) : (
        " "
      )}

      {showCalendar && (
        <InlineWidget
          prefill={{ email: email, name: name }}
          url="https://calendly.com/bjayzee/book-repair-visit"
        />
      )}
    </div>
  );
}
