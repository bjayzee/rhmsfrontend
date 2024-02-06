'use client'
import Image from "next/image"
import DealODayCard from "./DealODayCard"
import { useState, useEffect } from "react";
import axios from "axios";

const DealOfTheDay = () => {

  const [availableForDeals, setAvailableForDeals] = useState([])
  const [fetchingModel, setFetchingModel] = useState(true);
  const getModelsAvailable = async () => {
    setFetchingModel(true);
    try {
      const response = await axios
        .get("/api/products/search?dealOfTheDay=true", {
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
    <div className="">
      <h1 className="font-black text-center text-2xl">DEALS OF THE DAY</h1>
      <div className="flex flex-wrap justify-around gap-5">

      {fetchingModel && <div>fetching deals of the day</div>}
        
        {availableForDeals.length !== 0 && (
          availableForDeals.map((deal, index) => (
            <div key={index}>
              <DealODayCard param={deal} />
            </div>
          )
          
          
          ))}
       
      <div>

        </div>
      </div>
    </div>
  )
}

export default DealOfTheDay