"use client"
import Slider from "react-slick";
import Image from "next/image";

const RHMSNEWS = () =>{
  return (
    <div className="p-4 flex flex-col">
      <h1>RHMS News</h1>
      <Image 
        src='/news.png'
        height={200}
        width={347}
      />
    </div>
  );
};

export default RHMSNEWS;