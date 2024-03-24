"use client";

import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CartContent } from "@/app/(home)/context/AppContext";
import ImageSlider from "@/components/ImageSlider";
import Link from "next/link";

const DealDetailsPage = ({ params }) => {
  const { id } = params;
  const [dealDetails, setDealDetails] = useState(null);
  const [fetchingDetails, setFetchingDetails] = useState(true);
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const [removeItem, setRemoveItem] = useState(true);
  const { addToCart } = useContext(CartContent);

  useEffect(() => {
    const fetchDealDetails = async () => {
      try {
        const response = await axios
          .get(`/api/products/${id}`, {
            validateStatus: (status) => status < 400,
          })
          .then((res) => res.data);
        setDealDetails(response.data);
      } catch (error) {
        console.error("Error fetching deal details:", error);
      } finally {
        setFetchingDetails(false);
      }
    };

    if (id) {
      fetchDealDetails();
    }
  }, [id]);

  const showNextImage = () => {
    setCurrentPictureIndex((index) =>
      index === dealDetails?.images?.length - 1 ? 0 : index + 1
    );
  };

  const showPrevImage = () => {
    setCurrentPictureIndex((index) =>
      index === 0 ? dealDetails?.images?.length - 1 : index - 1
    );
  };

  return (
    <div className="container p-4">
      {fetchingDetails ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1 className="font-bold my-3">{dealDetails?.name}</h1>
          <p className="font-bold">Product Description:</p>
          <p>{dealDetails?.description}</p>
          <ImageSlider
            images={dealDetails?.images}
            currentPictureIndex={currentPictureIndex}
            showPrevImage={showPrevImage}
            showNextImage={showNextImage}
          />
          <div className="px-5">
            {removeItem !== false && (
              <>
                <div className="flex justify-between py-4">
                  <b>{dealDetails?.name}</b>
                  <b className="flex">
                    Price: ₦{dealDetails?.price.toLocaleString()}
                  </b>
                </div>
                <div className="font-bold">
                  <p>Specification:</p>
                </div>
                <div className="flex justify-between">
                  <p>Condition:</p>
                  <div className="text-[gray]">
                    {dealDetails.specification.grade}
                  </div>
                </div>
                <div className="flex justify-between">
                  <p>Color:</p>
                  <div className="text-[gray]">
                    {dealDetails.specification.color}
                  </div>
                </div>
                <div className="flex justify-between">
                  <p>Battery Health:</p>
                  <div className="text-[gray]">
                    {dealDetails.specification.batteryHealth}
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <Link href="/checkoutPage">
                    <button
                      className="bg-[#187EB4] px-16 py-4 mt-5 rounded-full text-[#FFFFFF]"
                      onClick={() => addToCart(dealDetails)}
                    >
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DealDetailsPage;
