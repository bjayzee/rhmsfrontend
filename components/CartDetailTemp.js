{
    showAddToCart && selectedModel !== null && (
        <div className="text-lg">
            <div className="flex justify-between items-center">
                <div className="flex font-bold capitalize my-5">
                    <span>1 {selectedCondition}</span>
                    <span>{models[selectedModel].name}</span>
                </div>
                <div className="flex space-x-2 capitalize">
                    <span>{selectedStorage}</span>
                    <span>{lockState}</span>
                    <span>{selectedColor}</span>
                </div>
            </div>

            <div className="flex justify-between font-semibold">
                <span>Price</span>
                <span className="capitalize">{"N" + price}</span>
            </div>

            <div className="flex justify-end my-2">
                <span
                    className="text-[#187EB4] mt-10 text-right my-10 font-extrabold"
                    onClick={() => setShowAddToCart(false)}
                >
                    Remove
                </span>
            </div>
        </div>
    )
}

{
    checkoutButton && (
        <div className="flex justify-center">
            <div className="flex items-center flex-col space-y-2">
                <Link
                    className="bg-[#187EB4] px-16 py-4 mt-3 rounded-full text-[#FFFFFF]"
                    href="/howToCheckOut"
                >
                    Checkout
                </Link>
                <span className="text-[#187EB4] text-center">
                    Add more items
                </span>
            </div>
        </div>
    )
}