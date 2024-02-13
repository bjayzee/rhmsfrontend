"use client";
import { CartContent } from "@/app/context/AppContext";
import { useContext } from "react";
import CheckoutCartCard from "./CheckoutCartCard";
import { TbCurrencyNaira } from "react-icons/tb";
import { PaystackButton } from "react-paystack";
import { useRouter } from "next/navigation";

const OrderReviewPage = () => {
  const { cartItems, clearCartAndLocalStorage } = useContext(CartContent);

  const router = useRouter();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
  const formattedDate = oneWeekLater.toLocaleDateString(undefined, options);

  const email = "bjayzee@gmail.com";
  const componentProps = {
    email: email,
    amount: totalPrice * 100,
    metadata: {
      phone: "08034717043",
    },
    publicKey,
    text: "MAKE PAYMENT",
    onSuccess: () => {
      clearCartAndLocalStorage();
      router.push("/delivery-order-successfully-completed");
    },

    onClose: () => {
      alert("Wait! Don't leave :(");
    },
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
      <div className="px-4">
        <p className="font-bold">Sales Terms:</p>
        <p>Payment after delivery</p>
      </div>

      <hr className="my-5" />

      <div className="flex-row justify-between m-5 ">
        <p className="font-bold text-lg">Delivery Detail:</p>
        <p>Adekunle Adefokun</p>
        <p>72, Adebisi Popoola Lekki phase 1</p>
        <p></p>
        <p>Lagos</p>
      </div>

      <hr />

      <div className="m-5">
        <h2 className="font-bold text-lg">Order Summary:</h2>
        <div className="flex justify-between">
          <div>
            <p>Items({cartItems.length})</p>
          </div>
          <div className=" flex flex-row">
            <TbCurrencyNaira className="w-5 h-6" />{" "}
            <span>{totalPrice?.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="m-5 pl-10 font-bold">
        <PaystackButton
          className="paystack-button bg-rh-blue text-[white] px-8 py-2 rounded-full"
          {...componentProps}
        />
      </div>

      <div className="flex mt-10">
        <p style={{ color: "#187EB4" }}>Terms and Conditions</p>
        <p className="mx-1">Applied</p>
      </div>
    </div>
  );
};

export default OrderReviewPage;
