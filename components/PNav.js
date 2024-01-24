'use client'

import { CartContent } from "@/app/context/AppContext";
import { cartDetails } from "@/server/utils/CartData";
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react";

const PNav = () => {

    const { cartItems } = useContext(CartContent);


    const badgeClasses = 'bg-red-500 text-white rounded-full px-2';
    return (
        <div className="text-center flex flex-row items-center justify-between p-3 mb-3">
            <Link href="/">
                <Image
                    src="/rhmstechlogo.png"
                    alt="logo"
                    width={41} height={40}
                />

            </Link>
            <div className="flex items-center gap-2 flex-row">
                <p className="p-0 font-bold">Login/Register</p>
                <div>
                    <div className="relative mr-3">
                        <Link href='/checkoutPage'>
                            <Image
                                src="/cart.png"
                                alt="cart image"
                                width={20}
                                height={21}
                            />
                        </Link>
                        

                        {!!cartItems.length > 0 && (
                            <span className=" bg-rh-blue text-[white] rounded-full px-1 absolute bottom-2 left-3">
                                {cartItems.length}
                            </span>
                        )}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PNav