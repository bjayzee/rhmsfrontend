"use client";
import { CartContent } from "@/app/context/AppContext";
import { useContext, useState } from "react";
import CheckoutCartCard from "./CheckoutCartCard";
import { PaystackButton } from "react-paystack";
import { useRouter } from "next/navigation";
import RadioSelection from "./RadioSelectionButton";
import { TiInfoLarge } from "react-icons/ti";
import {
  howDidYouHearData,
  locationDeliveryPrice,
  states,
} from "@/server/utils/iPhonedata";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

const OrderReviewPage = () => {

  const [salesTerm, setSalesTerm] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    streetAddress: "",
    city: "",
    state: "",
    accountNumber: "",
    shippingLocation: "",
    howDidYouHear: "",
  });

  console.log({ formData });

  const { cartItems, clearCartAndLocalStorage, swapItem } =
    useContext(CartContent);

  const router = useRouter();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const selectedLocation = formData?.shippingLocation;
  let location = locationDeliveryPrice.find(
    (location) => location.name === selectedLocation
  );

  const locationPrice = location ? location.value : 0;

  const totalPayable = totalPrice - (swapItem?.price || 0) + locationPrice;

  const finalPrice =
    salesTerm === "Payment after delivery" ? locationPrice : totalPayable;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleHowDidYouHearChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      howDidYouHear: event,
    }));
  };

  const handleSalesTerm = (option) => {
    setSalesTerm(option);
  };
  const publicKey = "pk_test_e6a2faffaa725830254d3779b2aeb589c625f487";

  const currentDate = new Date();
  const oneWeekLater = new Date(currentDate);
  oneWeekLater.setDate(oneWeekLater.getDate() + 7);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = oneWeekLater.toLocaleDateString(undefined, options);

  const email = formData?.email;
  const paymentMade = finalPrice < 0 ? locationPrice || 0 : finalPrice;
  const phoneNumber = formData?.phoneNumber;

  const componentProps = {
    email: email,
    amount: paymentMade * 100,
    metadata: {
      phone: phoneNumber,
    },
    publicKey,
    text: "MAKE PAYMENT " + `(${paymentMade.toLocaleString()})`,
    onSuccess: () => {           

      const requestData = {
        orderItems: cartItems.map((item) => item._id),
        shippingAddress: {
          streetAddress: formData?.streetAddress,
          city: formData?.city,
          state: formData?.state,
          shippingLocation: formData?.shippingLocation,
        },
        deliveryFee: locationPrice,
        phoneNumber: formData?.phoneNumber,
        status: "Pending",
        customerInformation: {
          firstName: formData?.firstName,
          lastName: formData?.lastName,
          email: email,
        },
        totalPrice: finalPrice,
        paymentStatus: true,
        howDidYouFindUs: formData?.howDidYouHear,
        salesTerm: salesTerm,
      };

      axios
        .post("/api/order", requestData)
        .then((response) => {
          console.log("Response data:", response.data);

           toast.success("Order submitted successfully");
           clearCartAndLocalStorage();
           router.push("/");
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    },

    onClose: () => {
      alert("Wait! Don't leave :(");
    },
  };
  };

  return (
    <div>
      <div className="font-bold m-5">
        <h1>Ready to place your order?</h1>
        <h1>Here are the details for your order</h1>
      </div>

      <div className="font-bold m-5">
        <h3>Pick up to be completed before: {formattedDate}</h3>
      </div>

      <div
        className={`flex justify-between w-fit border border-[gray] p-4 m-2 rounded-xl ${
          cartItems?.length === 0 ? "hidden" : ""
        }`}
      >
        {cartItems?.length > 0 && (
          <div>
            {cartItems?.map((phone, index) => (
              <CheckoutCartCard key={index} phone={phone} />
            ))}
          </div>
        )}
      </div>

      {swapItem?.price > 0 ? (
        <div className="my-5 mx-2">
          <p className="font-bold my-3">Items to be swapped:</p>
          <div className="flex flex-row items-center justify-between border border-[gray] p-4 rounded-xl">
            <img
              src="/5631.jpg"
              alt="swap-image"
              className="w-10 h-20 object-cover rounded-md mr-4"
            />
            <div className="flex flex-col mx-2">
              <p className="text-sm font-bold">{swapItem?.name}</p>
              <p className="text-sm text-[gray]">
                <span>Condition: </span>
                {swapItem?.condition}
              </p>
              <p className="text-sm text-[gray]">
                <span>Storage: </span>
                {swapItem?.storage}
              </p>
              <p className="text-sm text-[gray]">
                <span>Grade: </span>
                {swapItem?.grade}
              </p>
            </div>
            <div className="flex items-center mb-2">
              <span className="ml-2 font-semibold w-fit">
                ₦{swapItem?.price?.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}

      <div className="flex-row justify-between m-5 ">
        <p className="font-bold text-lg">Customer's Information:</p>
        <div className="flex">
          <TiInfoLarge className="text-xs text-[gray]" />{" "}
          <p className="text-xs text-[gray]">
            Please ensure that you have the right email and phone Number for
            seamless transaction
          </p>
        </div>
        <form className="w-full max-w-lg my-3">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="firstName"
                type="text"
                placeholder="Jane"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            {/* Last Name */}
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lastName"
                type="text"
                placeholder="Doe"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* Phone Number */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="phoneNumber"
                type="text"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* Street Address */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="streetAddress"
              >
                Shipping Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="streetAddress"
                type="text"
                placeholder="Street Address"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* City */}
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="city"
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          {/* State */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="state"
              >
                State
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  {states.map((state) => (
                    <option key={state}>{state}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {swapItem?.price > 0 && (
              <div className="w-full md:w-1/3 px-3 md:mb-0">
                <label
                  htmlFor="accountNumber"
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                >
                  Account Number
                </label>
                <input
                  id="accountNumber"
                  name="accountNumber"
                  type="text"
                  value={""}
                  onChange={() => {}}
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            )}

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="shippingLocation"
              >
                Choose your shipping location
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="shippingLocation"
                  onChange={handleChange}
                  required
                >
                  {locationDeliveryPrice?.map((item, index) => (
                    <option key={index}>{item.name}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-full md:w-1/3 px-3 md:mb-0">
                <RadioSelection
                  title={"How did you hear about us"}
                  name={"howDidYouHear"}
                  options={howDidYouHearData}
                  onChange={handleHowDidYouHearChange}
                  required
                />
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="px-4">
        <RadioSelection
          title={"Sales Terms:"}
          name={"sales-term"}
          options={["Payment after delivery", "Payment before delivery"]}
          onChange={handleSalesTerm}
        />
        <div className="flex">
          <TiInfoLarge className="text-xs text-[gray]" />{" "}
          <p className="text-xs text-[gray]">
            Please note that delivery payment must be paid on checkout
          </p>
        </div>

      <div className="m-5">
        <h2 className="font-bold text-lg mb-3">Order Summary:</h2>
        <div className="flex justify-between mb-3">
          <div>
            <p>Items({cartItems.length})</p>
          </div>
          <div className=" flex flex-row">
            ₦ <span> {totalPrice?.toLocaleString()}</span>
          </div>
        </div>
        <div className="flex justify-between mb-3">
          <div>
            <p>Shipping fee:</p>
          </div>
          <div className=" flex flex-row">
            ₦ <span> {locationPrice?.toLocaleString()}</span>
          </div>
        </div>

        {swapItem?.price > 0 && (
          <div className="flex justify-between mb-3">
            <div>
              <p>Swap Item Value:</p>
            </div>
            <div className=" flex flex-row">
              ₦ <span> {swapItem?.price.toLocaleString()}</span>
            </div>
          </div>
        )}

        {totalPayable > 0 ? (
          <div className="flex justify-between font-bold mb-3">
            <div>
              <p className="">Sub-Total:</p>
            </div>
            <div className=" flex flex-row">
              ₦<span> {totalPayable?.toLocaleString()}</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-between font-bold mb-3">
            <div>
              <p className="">Total CashBack:</p>
            </div>
            <div className=" flex flex-row">
              ₦<span> {Math.abs(totalPayable)?.toLocaleString()}</span>
            </div>
          </div>
        )}

        {finalPrice > -1 ? (
          <div className="flex justify-between font-extrabold">
            <div>
              <p className="">TotalPayable:</p>
            </div>
            <div className=" flex flex-row">
              ₦<span> {finalPrice?.toLocaleString()}</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-between font-extrabold">
            <div>
              <p className="">Money Get Back:</p>
            </div>
            <div className=" flex flex-row">
              ₦<span> {Math.abs(finalPrice)?.toLocaleString()}</span>
            </div>
          </div>
        )}
      </div>

      <div className="m-5 pl-10 font-bold">
        <PaystackButton
          className="paystack-button bg-rh-blue text-[white] px-8 py-2 rounded-full"
          {...componentProps}
        />
      </div>
      <div className="flex justify-center">
        <Link href="/checkoutPage" passHref>
          <button
            className="text-rh-blue text-sm px-4 rounded-md"
            disabled={cartItems.length === 0}
          >
            Return to Cart
          </button>
        </Link>
      </div>

      <div className="flex mt-10">
        <p style={{ color: "#187EB4" }}>Terms and Conditions</p>
        <p className="mx-1">Applied</p>
      </div>
    </div>
    </div>
  );
};

export default OrderReviewPage;
