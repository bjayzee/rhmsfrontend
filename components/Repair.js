"use client";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import axios from "axios";
import { FaPlay } from "react-icons/fa";
import RadioSelection from "./RadioSelectionButton";
import { models } from "@/server/utils/iPhonedata";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button
} from "@nextui-org/react";


export default function Repair() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showContinueButton, setShowContinueButton] = useState(true);
  const [proceedToOpen, setProceedToOpen] = useState(false);
  const [proceedToFaceId, setProceedToFaceId] = useState(false);
  const [proceedToTrueTone, setProceedToTrueTone] = useState(false);
  const [proceedToAnyOtherIssues, setProceedToAnyOtherIssues] = useState(false);
  const [repairCenters, setRepairCenters] = useState([]);


  const [selectedKeys, setSelectedKeys] = useState(new Set(["text"]));

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  useEffect(() => {
    const fetchRepairCenters = async () => {
      try {
        const centers = await axios
          .get("/api/accessories", {
            validateStatus: (status) => status < 400,
          })
          .then((res) => res.data)
          .then((res) => res.data);
        setRepairCenters(centers);
      } catch (error) {
        console.error("error fetching repair centers", error);
      }
    };

    fetchRepairCenters();
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };
  const handleSelectClick = () => {
    setShowDropdown(true);
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
          {models.map((option, key) => (
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
                title={item.name}
                name={item.name}
                options={["Premium", "Economy"]}
                onChange={() => {}}
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

          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered" className="capitalize">
                {selectedValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Single selection example"
              variant="flat"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownItem key="text">Text</DropdownItem>
              <DropdownItem key="number">Number</DropdownItem>
              <DropdownItem key="date">Date</DropdownItem>
              <DropdownItem key="single_date">Single Date</DropdownItem>
              <DropdownItem key="iteration">Iteration</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      ) : (
        ""
      )}

      {/* {true && (
        <div className="mt-4 px-4">
          {Object.keys(selectedRepair).map((repairType) => {
            const repairInfo = selectedRepair[repairType];
            return (
              <div key={repairType}>
                <div className="py-4">
                  <p>
                    You have chosen {repairType} for your {selectedOption}. Visit
                    any of the addresses below to complete your repairs.
                  </p>
                  <p>Cost for the Economy option: {repairInfo.economyCost}</p>
                  <p>Cost for the Premium option: {repairInfo.premiumCost}</p>
                </div>

                <b className="my-10 text-xl">Available repair center:</b>

                <div className="flex flex-col space-y-2">
                  <b>Contact address:</b>
                  <p>
                    {repairInfo.address ||
                      "267 Herbert Macaulay way, Sabo, Yaba"}
                  </p>
                </div>
                <div className="flex justify-between py-3">
                  <b>Email:</b>
                  <b>Phone Numbers:</b>
                </div>
                <div className="flex justify-between">
                  <p>{repairInfo.email || "repair@gmail.com"}</p>
                  <p> {repairInfo.phone || "09087654321"}</p>
                </div>
              </div>
            );
          })} */}
      {/* </div> */}
      {/* // )} */}
    </div>
  );
}
