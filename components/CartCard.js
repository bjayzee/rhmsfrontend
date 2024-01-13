import React from 'react';

const CartCard = ({ phone }) => {
    return (
        <div className="border border-gray-300 p-4 mb-4 rounded-md">
            <div className="flex items-center justify-between mb-2">
                <img
                    src={phone.image}  // Replace with the actual image URL from your data
                    alt={phone.name}
                    className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div className="flex flex-col">
                    <p className="text-lg font-semibold">{phone.name}</p>
                    <p className="text-sm text-gray-500">{phone.condition}</p>
                </div>
            </div>

            <div className="flex items-center mb-2">
                <span className="text-gray-600">Storage:</span>
                <span className="ml-2 font-semibold">{phone.storage}</span>
            </div>

            <div className="flex items-center mb-2">
                <span className="text-gray-600">Color:</span>
                <span className="ml-2 font-semibold capitalize">{phone.color}</span>
            </div>

            <div className="flex items-center mb-2">
                <span className="text-gray-600">Condition:</span>
                <span className="ml-2 font-semibold capitalize">{phone.condition}</span>
            </div>

            <div className="flex items-center mb-2">
                <span className="text-gray-600">Price:</span>
                <span className="ml-2 font-semibold">{phone.price}</span>
            </div>

            <div className="flex items-center">
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md">Increment</button>
            </div>
        </div>
    );
};

export default CartCard;
