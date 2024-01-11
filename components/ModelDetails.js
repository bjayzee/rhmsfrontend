const ModelDetails = ({ iphoneModel, currentPictureIndex, showPrevImage, showNextImage }) => {
    return (
        <div className="relative flex items-center justify-center bg-white rounded-[30px] shadow-xl px-16 py-10 my-5 border-[#D9D9D9] border-r-8 border-b-8">
            {/* ... (your existing code for image display) */}
            <img
                src={iphoneModel?.images[currentPictureIndex]}
                className="w-full h-64 object-cover"
                alt={`${iphoneModel.name} image`}
            />
            <BiLeftArrow className="absolute left-5 text-2xl" onClick={showPrevImage} />
            <BiRightArrow className="absolute right-5 text-2xl" onClick={showNextImage} />
            <div className="absolute bottom-2 flex space-x-1">
                {iphoneModel?.images.map((_, index) => (
                    <span
                        className="text-lg text-center"
                        key={index}
                        aria-label={`View Image ${index + 1}`}
                        onClick={() => setCurrentPictureIndex(index)}
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
export default ModelDetails;