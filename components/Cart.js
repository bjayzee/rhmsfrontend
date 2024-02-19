"use client";
import { useContext } from "react";
import { CartContent } from "@/app/context/AppContext";
import CartCard from "./CartCard";
import Link from "next/link";
import { TbCurrencyNaira } from "react-icons/tb";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  const { cartItems, removeFromCart, swapValue, clearCartAndLocalStorage } =
    useContext(CartContent);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (sessionStatus === "unauthenticated") {
      router.push("/login");
    } else if (sessionStatus === "loading") {
      return <div>loading....</div>;
    } else if (sessionStatus === "authenticated") {
      router.push("order-review-page");
    }
  };

    const price = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalPrice = price - swapValue;

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-xl  text-center font-bold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 ml-5">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((phone, index) => (
            <CartCard
              key={index}
              phone={phone}
              onRemove={() => removeFromCart(index)}
            />
          ))}
        </div>
      )}

      <p className="flex justify-end pt-3 px-5">
        <span className="font-bold font pr-3">Subtotal:</span>{" "}
        <TbCurrencyNaira className="w-5 h-6" /> {price?.toLocaleString()}
      </p>

      {swapValue > 1 ? (
        <p className="flex justify-end pt-3 px-5">
          <span className="font-bold font pr-3">Swap Item Value:</span>{" "}
          <TbCurrencyNaira className="w-5 h-6" /> {swapValue?.toLocaleString()}
        </p>
      ) : (
        ""
      )}

        {swapValue > 1 ? (
          <p className="flex justify-end pt-3 px-5">
            <span className="font-bold font pr-3">Swap Item Value:</span>{" "}
            <TbCurrencyNaira className="w-5 h-6" />{" "}
            {swapValue?.toLocaleString()}
          </p>
        ) : (
          ""
        )}

        <p className="flex justify-end pt-3 px-5">
          <span className="font-bold font pr-3">Total Payable:</span>{" "}
          <TbCurrencyNaira className="w-5 h-6" /> {totalPrice?.toLocaleString()}
        </p>
        <div className="flex justify-center my-4 ">
            <button
              className="text-[red] text-sm px-4 py-2 mr-2 rounded-md"
              disabled={cartItems.length === 0}
              onClick={clearCartAndLocalStorage}
            >
              Clear Cart
            </button>
          <Link href="/" passHref>
            <button
              className="text-rh-blue text-sm px-4 py-2 mr-2 rounded-md"
              disabled={cartItems.length === 0}
            >
              Add More Items
            </button>
          </Link>


<Link>
          <button
            className="text-rh-blue text-sm px-4 py-2 mr-2 rounded-md"
            disabled={cartItems.length === 0}
          >
            Add More Items
          </button>
        </Link>

        <button
          className={`bg-rh-blue text-[white] px-4 py-2 rounded-md ${
            cartItems.length === 0 ? "opacity-30 cursor-not-allowed" : ""
          }`}
          onClick={(e) => handleCheckout(e)}
          disabled={cartItems.length === 0}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
