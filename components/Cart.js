"use client";
import { useContext } from "react";
import { CartContent } from "@/app/(home)/context/AppContext";
import CartCard from "./CartCard";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  const {
    cartItems,
    removeFromCart,
    swapItem,
    setSwapItem,
    clearCartAndLocalStorage,
  } = useContext(CartContent);

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

  const swapValue = swapItem?.reduce((sum, item) => sum + item.price, 0);

  const price = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalPrice = price - swapValue;

  return (
    <div className="container mt-5 lg:my-12 lg:w-[80%] mx-auto">
      <h2 className="text-xl  text-center font-bold mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 ml-5">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col items-center">
          <div className="lg:w-3/4">
            {cartItems.map((phone, index) => (
              <CartCard
                key={index}
                phone={phone}
                onRemove={() => removeFromCart(index)}
              />
            ))}

            <p className="flex justify-end pt-3 px-5 mt-5">
              <span className="font-bold font pr-3">Subtotal:</span>₦
              {price?.toLocaleString()}
            </p>

            {swapValue > 1 ? (
              <p className="flex justify-end pt-3 px-5">
                <span className="font-bold font pr-3">Swap Item Value:</span>₦
                {swapValue?.toLocaleString()}
              </p>
            ) : (
              ""
            )}

            {totalPrice > 0 && (
              <p className="flex justify-end pt-3 px-5">
                <span className="font-bold font pr-3">Total Payable:</span>₦
                {totalPrice?.toLocaleString()}
              </p>
            )}

            {totalPrice < 0 && (
              <p className="flex justify-end pt-3 px-5">
                <span className="font-bold font pr-3">Cash Back:</span>₦
                {Math.abs(totalPrice)?.toLocaleString()}
              </p>
            )}
          </div>

          <div className="flex justify-center my-4 lg:mt-10 ">
            <button
              className="text-[red] text-sm px-4 py-2 mr-2 rounded-md"
              disabled={cartItems.length === 0}
              onClick={() => {
                clearCartAndLocalStorage();
                setSwapItem(null);
              }}
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
      )}
    </div>
  );
};

export default Cart;
