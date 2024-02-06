<div className="">
                <div className=" flex flex-col space-y-5">
                  <p className="font-semibold ">Please select as applied:</p>
                  <p className="font-semibold text-sm">
                    select if the phone is locked or unlocked
                  </p>
                </div>

                <div className="flex items-center space-x-5">
                  <div className="flex items-center justify-center space-x-2">
                    <input
                      type="radio"
                      name="condition"
                      checked={selectedCondition === "locked"}
                      onChange={() => handleConditionSelect("locked")}
                      className="w-4 h-8 mt-[3px]"
                    />

                    <p className="mx-1 mt-2">Locked</p>
                  </div>

                  <div className="flex items-center justify-center space-x-2">
                    <input
                      type="radio"
                      name="condition"
                      checked={selectedCondition === "unlocked"}
                      onChange={() => handleConditionSelect("unlocked")}
                      className="w-4 h-8 mt-[3px]"
                    />
                    <p className="mx-1 mt-2">Unlocked</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-3 text-lg my-5">
                  <span className="font-semibold text-sm">
                    Select Storage Capacity
                  </span>

                  <div className="flex space-x-3">
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="storage"
                        checked={selectedStorage === "128GB"}
                        onChange={() => handleStorageSelect("128GB")}
                      />
                      <span>128GB</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="storage"
                        checked={selectedStorage === "256GB"}
                        onChange={() => handleStorageSelect("256GB")}
                      />
                      <span>256GB</span>
                    </label>
                    <label className="flex items-center space-x-1">
                      <input
                        type="radio"
                        name="storage"
                        checked={selectedStorage === "512GB"}
                        onChange={() => handleStorageSelect("512GB")}
                      />
                      <span>512GB</span>
                    </label>
                  </div>
                </div>
              </div>
          
          
          
          
          
          
          {phoneSelection ? (
            <>
              

              <div className="flex items-center justify-between font-bold right-4 left-4 text-[16px]">
                <p className="font-semibold py-5 w-full">I want this iPhone</p>

                <div className="w-full flex items-end justify-end">
                  <button
                    className="px-3 py-4 rounded-xl shadow-lg flex items-center border-[#D9D9D9] border-r-8 border-b-8"
                    onClick={handleNewPhoneSelectClick}
                  >
                    {selectedOption ? selectedOption.label : "Select a phone"}
                    <FaPlay className="text-[30px] text-[#187EB4] ml-1" />
                  </button>
                </div>
              </div>

              {showDropdown && selectedModel !== modelIndex ? (
                <div
                  className={`mt-10 p-5 grid grid-cols-2 space-y-3 items-center text-xl border-solid rounded-[20px] bg-white shadow right-4 left-4 border-[#D9D9D9] border-r-8 border-b-8`}
                >
                  {models.map((model, index) => (
                    <div className="flex justify-start">
                      <div
                        key={index}
                        className={`rounded-xl ${
                          selectedModel !== null && selectedModel !== index
                            ? "hidden"
                            : ""
                        }`}
                        onClick={() => {
                          setModelIndex(index);
                          setIphoneModel(model);
                          setSelectedModel(index);
                          setCurrentPictureIndex(0);
                        }}
                      >
                        <span className="font-bold">{model.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}

              {selectedModel === modelIndex ? (
                <div>
                  <div className="">
                    <div className="relative w-full flex items-center justify-center bg-white rounded-[30px] shadow-xl px-16 py-10 my-5 border-[#D9D9D9] border-r-8 border-b-8">
                      <img
                        src={iphoneModel?.pictures[currentPictureIndex]}
                        className="w-full h-64 object-cover"
                        alt="Perfect Image"
                      />
                      <BiLeftArrow
                        className="absolute left-5 text-2xl"
                        onClick={showPrevImage}
                      />
                      <BiRightArrow
                        className="absolute right-5 text-2xl"
                        onClick={showNextImage}
                      />
                      <div className="absolute bottom-3 flex space-x-1">
                        {iphoneModel?.pictures.map((_, index) => (
                          <span
                            className="text-lg text-center"
                            key={index}
                            aria-label={`View Image ${index + 1}`}
                            onClick={() => setCurrentPictureIndex(index)}
                          >
                            {index === currentPictureIndex ? (
                              <GoDotFill
                                className="text-[#000000]"
                                aria-hidden
                              />
                            ) : (
                              <GoDot className="text-[#D9D9D9]" aria-hidden />
                            )}
                          </span>
                        ))}
                      </div>
                    </div>

                    {removeItem !== false ? (
                      <div className="flex justify-between py-4">
                        <b>{iphoneModel?.name}</b>
                        <b>Price: {iphoneModel?.price}</b>
                      </div>
                    ) : null}

                    {removeItem !== false ? (
                      <div className="flex flex-col space-y-3 text-lg my-5">
                        <span className="font-bold">Pick your preference</span>

                        <div className="flex space-x-3">
                          <label className="flex items-center space-x-1">
                            <input
                              type="radio"
                              name={`condition-${iphoneModel?.name}`}
                              value="brand-new"
                              onChange={() =>
                                handleNewOrUsedChange("brand-new")
                              }
                            />
                            <span>Brand New</span>
                          </label>

                          <label className="flex items-center space-x-1">
                            <input
                              type="radio"
                              name={`condition-${iphoneModel?.name}`}
                              value="used"
                              onChange={() => handleNewOrUsedChange("used")}
                            />
                            <span>Used</span>
                          </label>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <>
                    {selectedNewPhoneCondition === "brand-new" ? (
                      <>
                        {removeItem !== false ? (
                          <div className="flex flex-col space-y-3 my-5 text-lg">
                            <span className="font-bold">Phone Status</span>

                            <div className="flex space-x-3">
                              <label className="flex items-center space-x-1">
                                <input
                                  type="radio"
                                  name={`status-${iphoneModel?.name}`}
                                  value="locked"
                                  onChange={() =>
                                    handleLockedOrUnlockedChange("locked")
                                  }
                                />
                                <span>Locked</span>
                              </label>
                              <label className="flex items-center space-x-1">
                                <input
                                  type="radio"
                                  name={`status-${iphoneModel?.name}`}
                                  value="unlocked"
                                  onChange={() => {
                                    handleLockedOrUnlockedChange("locked");
                                    setShowStorageOptions(false); // Hide storage options
                                  }}
                                />
                                <span>Unlocked</span>
                              </label>
                            </div>
                          </div>
                        ) : null}

                        {lockState !== null ? (
                          <>
                            {removeItem !== false ? (
                              <div className="flex flex-col space-y-3 text-lg my-5">
                                <span className="font-bold">
                                  Select from available Colors
                                </span>

                                <div className="grid grid-cols-4 gap-2">
                                  <label className="flex items-center space-x-1">
                                    <input
                                      type="radio"
                                      name={`color-${iphoneModel?.name}`}
                                      value="red"
                                      onChange={() => handleColorChange("red")}
                                    />
                                    <span>Red</span>
                                  </label>

                                  <label className="flex items-center space-x-1">
                                    <input
                                      type="radio"
                                      name={`color-${iphoneModel?.name}`}
                                      value="blue"
                                      onChange={() => handleColorChange("blue")}
                                    />
                                    <span>Blue</span>
                                  </label>
                                  <label className="flex items-center space-x-1">
                                    <input
                                      type="radio"
                                      name={`color-${iphoneModel?.name}`}
                                      value="black"
                                      onChange={() =>
                                        handleColorChange("black")
                                      }
                                    />
                                    <span>Black</span>
                                  </label>
                                  <label className="flex items-center space-x-1">
                                    <input
                                      type="radio"
                                      name={`color-${iphoneModel?.name}`}
                                      value="green"
                                      onChange={() =>
                                        handleColorChange("green")
                                      }
                                    />
                                    <span>Green</span>
                                  </label>
                                  <label className="flex items-center space-x-1">
                                    <input
                                      type="radio"
                                      name={`color-${iphoneModel?.name}`}
                                      value="pink"
                                      onChange={() => handleColorChange("pink")}
                                    />
                                    <span>Pink</span>
                                  </label>
                                </div>
                              </div>
                            ) : null}

                            {showStorageOptions ? (
                              <div>
                                {removeItem !== false ? (
                                  <div className="flex flex-col space-y-3 text-lg my-5">
                                    <span className="font-bold">
                                      Select Storage Capacity
                                    </span>

                                    <div className="flex space-x-3">
                                      <label className="flex items-center space-x-1">
                                        <input
                                          type="radio"
                                          name={`storage-${iphoneModel?.name}`}
                                          value="128GB"
                                          onChange={() =>
                                            handleStorageSelection("128GB")
                                          }
                                        />
                                        <span>128GB</span>
                                      </label>
                                      <label className="flex items-center space-x-1">
                                        <input
                                          type="radio"
                                          name={`storage-${iphoneModel?.name}`}
                                          value="256GB"
                                          onChange={() =>
                                            handleStorageSelection("256GB")
                                          }
                                        />
                                        <span>256GB</span>
                                      </label>
                                      <label className="flex items-center space-x-1">
                                        <input
                                          type="radio"
                                          name={`storage-${iphoneModel?.name}`}
                                          value="512GB"
                                          onChange={() =>
                                            handleStorageSelection("512GB")
                                          }
                                        />
                                        <span>512GB</span>
                                      </label>
                                    </div>
                                  </div>
                                ) : null}

                                {showAddToCart && selectedModel !== null ? (
                                  <div className="selected-model-details flex flex-col space-y-5 mt-10 text-lg">
                                    <div className="flex justify-between items-center">
                                      <div className="flex space-x-2 font-bold capitalize my-5">
                                        <span>1 {selectedCondition}</span>
                                        <span>
                                          {models[selectedModel].name}
                                        </span>
                                      </div>
                                      <div className="flex space-x-2 capitalize">
                                        <span>{selectedStorage}</span>
                                        <span>{lockState}</span>
                                        <span>{selectedColor}</span>
                                      </div>
                                    </div>

                                    <div className="flex space-x-3 font-bold">
                                      <span>Your swap:</span>
                                      <span>{models[selectedModel].name}</span>
                                      <span>{models[selectedModel].price}</span>
                                    </div>

                                    <div className="flex justify-between items-center font-bold">
                                      <span>Price after swap:</span>
                                      <span>{models[selectedModel].price}</span>
                                    </div>

                                    <div className="flex justify-end">
                                      <span
                                        className="py-10 text-[#187EB4] font-bold"
                                        onClick={() => setShowAddToCart(false)}
                                      >
                                        Remove
                                      </span>
                                    </div>
                                  </div>
                                ) : (
                                  ""
                                )}

                                {addToCartButton ? (
                                  <div className="flex justify-center items-center">
                                    <button
                                      onClick={showCartDetails}
                                      className="my-10 bg-[#187EB4] text-[#FFFFFF] rounded-full px-16 py-5"
                                    >
                                      ADD TO CART
                                    </button>
                                  </div>
                                ) : (
                                  ""
                                )}

                                {checkoutButton ? (
                                  <>
                                    <div className="flex justify-center items-center">
                                      <Link
                                        className="bg-[#187EB4] text-[#FFFFFF] rounded-full px-16 py-5"
                                        href="/howToCheckOut"
                                      >
                                        CHECKOUT
                                      </Link>
                                    </div>
                                    <p className="text-[#187EB4] text-center font-semibold py-2">
                                      Add more items
                                    </p>
                                  </>
                                ) : (
                                  ""
                                )}
                              </div>
                            ) : null}
                          </>
                        ) : (
                          ""
                        )}
                      </>
                    ) : null}
                  </>
                </div>
              ) : null}
            </>
          ) : null}
        </>
      ) : null}
    </div>
  );
};