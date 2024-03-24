import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { GoDot, GoDotFill } from "react-icons/go";

const ImageSlider = ({
  images,
  currentPictureIndex,
  showPrevImage,
  showNextImage,
}) => {
  return (
    <div className="relative flex items-center justify-center bg-white rounded-[10px] shadow-xl px-16 py-10 my-5 border-[#D9D9D9] border-r-8 border-b-8">
      <img
        src={images[currentPictureIndex]}
        className="w-full h-64 object-cover cursor-pointer"
        alt={`Image ${currentPictureIndex + 1}`}
      />
      <BiLeftArrow
        className="absolute left-5 text-2xl cursor-pointer"
        onClick={showPrevImage}
      />
      <BiRightArrow
        className="absolute right-5 text-2xl cursor-pointer"
        onClick={showNextImage}
      />
      <div className="absolute bottom-2 flex space-x-1">
        {images.map((_, index) => (
          <span
            className="text-lg text-center"
            key={index}
            aria-label={`View Image ${index + 1}`}
            onClick={() => showPrevImage(index)}
          >
            {index === currentPictureIndex ? (
              <GoDotFill className="text-[#000000]" aria-hidden />
            ) : (
              <GoDot className="text-[#D9D9D9]" aria-hidden />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
