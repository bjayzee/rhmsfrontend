"use client";
import DealODayCard from "./DealODayCard";
import { useState, useEffect } from "react";
import axios from "axios";
import MoonLoader from "react-spinners/MoonLoader";
import Link from "next/link";

const DealOfTheDay = () => {
  const [availableForDeals, setAvailableForDeals] = useState([]);
  const [fetchingModel, setFetchingModel] = useState(true);
  const getModelsAvailable = async () => {
    setFetchingModel(true);
    try {
      const response = await axios
        .get("/api/products/search?dealOfTheDay=" + true, {
          validateStatus: (status) => status < 400,
        })
        .then((res) => res.data);

      const models = response.data;
      setAvailableForDeals(models);
    } catch (error) {
      console.error("Error fetching available models:", error);
    } finally {
      setFetchingModel(false);
    }
  };

  useEffect(() => {
    getModelsAvailable();
  }, []);
  return (
    <div className=" justify-items-center">
      <h1 className="font-black text-center my-5 text-lg">DEALS OF THE DAY</h1>
      <div className="grid grid-cols-2 justify-between gap-6">
        {fetchingModel && (
          <div className="my-10 flex flex-col items-center gap-3">
            <MoonLoader />
            Fetching deals of the day
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:w-[70%] mx-auto gap-10">
        {availableForDeals.length > 0 &&
          availableForDeals.map((deal, index) => (
            <Link key={index} href={`/deal/${deal._id}`}>
              <div>
                <DealODayCard param={deal} />
              </div>
            </Link>

          ))}
      </div>
    </div>
  );
};

export default DealOfTheDay;
