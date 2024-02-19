"use client";

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notification } from "antd";
import { IoMdClose } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import { useDropzone } from "react-dropzone";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Switch } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { CloudinaryContext, Image } from "cloudinary-react";
import { FaCheckCircle } from "react-icons/fa";

function EditProduct({ data }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialFormState = {
    name: "",
    description: "",
    categoryName: "",
    productType: "",
    subCategory: "",
    specification: {
      capacity: "",
      carrier: "",
      color: "",
      batteryHealth: "",
      grade: "",
      network: "",
      sim: "",
    },
    images: [],
    tagNumber: "",
    price: "",
    costPrice: "",
    numInStock: "",
    isFeatured: "",
    dealOfTheDay: "",
    IMEI_SN: "",
    supplier: "",
    thumbnail: "",
  };

  const [loading, setLoading] = useState(false);
  const [productFormData, setProductFormData] = useState(initialFormState);
  const [dealChecked, setDealChecked] = useState(false);
  const [featuredChecked, setFeaturedChecked] = useState(false);

  const [image, setImage] = useState(null);

  const [categories, setCategories] = useState([]);

  
  useEffect(() => {
    setProductFormData({
      name: data?.name,
      thumbnail: data?.thumbnail,
      description: data?.description,
      categoryName: data?.categoryName,
      productType: data?.productType,
      subCategory: data?.subCategory,
      specification: {
        capacity: data?.specification?.capacity,
        carrier: data?.specification?.carrier,
        color: data?.specification?.color,
        batteryHealth: data?.specification?.batteryHealth,
        grade: data?.specification?.grade,
        network: data?.specification?.network,
        sim: data?.specification?.sim,
      },
      images: data?.images,
      tagNumber: data?.tagNumber,
      price: data?.price,
      costPrice: data?.costPrice,
      numInStock: data?.numInStock,
      isFeatured:
        data?.isFeatured === true
          ? setFeaturedChecked(true)
          : setFeaturedChecked(false),
      dealOfTheDay:
        data?.dealOftheday === true
          ? setDealChecked(true)
          : setDealChecked(false),
      IMEI_SN: data?.IMEI_SN,
      supplier: data?.supplier,
    });
    setImage(data?.thumbnail);
  }, [data]);

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "Africa/Lagos", // West Africa Time (GMT+1)
    };

    const formattedDate = date
      .toLocaleString("en-NG", options)
      .replace(/\//g, "-");
    const [day, month, year] = formattedDate.split("-");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);
    };

    fetchCategories();
  }, [categories?.data?.length]);

  const category_list =
    categories &&
    categories?.data?.map((category, key) => {
      return (
        <option value={category?.name} key={key}>
          {category?.name}
        </option>
      );
    });

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const [selectedImages, setSelectedImages] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      // Handle dropped files here
      setSelectedImages((prevImages) => [...prevImages, ...acceptedFiles]);
    },
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setProductFormData({
      ...productFormData,
      [name]: value,
    });
  };

  const handleConditionChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      specification: {
        ...productFormData.specification,
        grade: selectedValue,
      },
    });
  };

  const handleCarrierChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      specification: {
        ...productFormData.specification,
        carrier: selectedValue,
      },
    });
  };

  const handleStorageChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      specification: {
        ...productFormData.specification,
        capacity: selectedValue,
      },
    });
  };

  const handleColorChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      specification: {
        ...productFormData.specification,
        color: selectedValue,
      },
    });
  };

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      categoryName: selectedValue,
    });
  };

  const handleProductTypeChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      productType: selectedValue,
    });
  };

  const handleSimChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      specification: {
        ...productFormData.specification,
        sim: selectedValue,
      },
    });
  };

  const handleNetworkChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      specification: {
        ...productFormData.specification,
        network: selectedValue,
      },
    });
  };

  const handleBatteryHealthChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      specification: {
        ...productFormData.specification,
        batteryHealth: selectedValue,
      },
    });
  };

  const clearFormData = () => {
    setProductFormData(initialFormState);
  };

  const handleEditProduct = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "kk4zifqd");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/fatherofdragons/image/upload",
      formData
    );

    const imageUrl = response.data.secure_url;

    const imageUploadPromises = selectedImages.map(async (file) => {
      const imageFormData = new FormData();
      imageFormData.append("file", file);
      imageFormData.append("upload_preset", "kk4zifqd");

      const imageResponse = await axios.post(
        "https://api.cloudinary.com/v1_1/fatherofdragons/image/upload",
        imageFormData
      );

      return imageResponse.data.secure_url;
    });

    let uploadedImageUrls;

    try {
      // Wait for all image uploads to complete
      uploadedImageUrls = await Promise.all(imageUploadPromises);

      // Append each image URL separately
      uploadedImageUrls.forEach((url, index) => {
        formData.append(`images[${index}]`, url);
      });
    } catch (error) {
      console.error("Error uploading one or more images:", error);
      // Handle error if needed
    }

    const formDataForBackend = new FormData();

    formDataForBackend.append("name", productFormData.name);
    formDataForBackend.append("description", productFormData.description);
    formDataForBackend.append("categoryName", productFormData.categoryName);
    formDataForBackend.append("productType", productFormData.productType);
    formDataForBackend.append("subCategory", productFormData.subCategory);
    formDataForBackend.append(
      "specification[capacity]",
      productFormData.specification.capacity
    );
    formDataForBackend.append(
      "specification[carrier]",
      productFormData.specification.carrier
    );
    formDataForBackend.append(
      "specification[color]",
      productFormData.specification.color
    );
    formDataForBackend.append(
      "specification[batteryHealth]",
      productFormData.specification.batteryHealth
    );
    formDataForBackend.append(
      "specification[grade]",
      productFormData.specification.grade
    );
    formDataForBackend.append(
      "specification[network]",
      productFormData.specification.network
    );
    formDataForBackend.append(
      "specification[sim]",
      productFormData.specification.sim
    );

    formDataForBackend.append("price", productFormData.price);
    formDataForBackend.append("costPrice", productFormData.costPrice);
    formDataForBackend.append("numInStock", productFormData.numInStock);
    uploadedImageUrls.forEach((url, index) => {
      formDataForBackend.append(`images[${index}]`, url);
    });

    formDataForBackend.append("isFeatured", featuredChecked ? "true" : "false");
    formDataForBackend.append("dealOftheday", dealChecked ? "true" : "false");
    formDataForBackend.append("IMEI_SN", productFormData.imei);
    formDataForBackend.append("supplier", productFormData.supplier);
    formDataForBackend.append("dateReceived", formatDate(selectedDate));
    formDataForBackend.append("thumbnail", imageUrl);

    axios
      .put(`/api/products/?id=${data?._id}`, formDataForBackend, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        handleClose();
        clearFormData();
        notification.success({
          message: "Category edited successfully",
        });

        setLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);

        setLoading(false);

        notification.error({
          message: "Error editing category, please try again",
        });
      });
  };

  return (
    <>
      <span onClick={handleShow}>Edit</span>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header className="flex justify-between items-center px-[50px]">
          <Modal.Title>Edit product</Modal.Title>
          <button
            onClick={handleClose}
            className="border-none px-2 py-1 bg-none rounded text-[#e94d4d] hover:bg-[#e94d4d] hover:text-[#fff]"
          >
            <IoMdClose className="text-lg" />
          </button>
        </Modal.Header>
        <Modal.Body className="px-[50px]">
          <Form className="grid grid-cols-2 gap-[100px] overflow-y-scroll">
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>SubCategory</Form.Label>
                <Form.Control
                  type="text"
                  name="subCategory"
                  placeholder="Enter subcategory "
                  onChange={(evt) => handleInputChange(evt)}
                  defaultValue={productFormData.subCategory}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter product name"
                  onChange={(evt) => handleInputChange(evt)}
                  defaultValue={productFormData.name}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                style={{ marginBottom: "10px" }}
              >
                <Form.Label>Description </Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  name="description"
                  onChange={(evt) => handleInputChange(evt)}
                  defaultValue={productFormData.description}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Number in stock</Form.Label>
                <Form.Control
                  type="text"
                  name="numInStock"
                  placeholder="Enter number"
                  onChange={(evt) => handleInputChange(evt)}
                  defaultValue={productFormData.numInStock}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Condition</Form.Label>
                    <Form.Select
                      name="grade"
                      aria-label="Default select example"
                      required
                      onChange={handleConditionChange} 
                      value={productFormData.specification.grade} 
                      defaultValue={productFormData.specification.grade}
                    >
                      <option>------</option>
                      <option value="used">Used</option>
                      <option value="new">New</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Carrier/Connection</Form.Label>
                    <Form.Select
                      name="carrier"
                      aria-label="Default select example"
                      required
                      onChange={handleCarrierChange} 
                      value={productFormData.carrier} 
                      defaultValue={productFormData.specification.carrier}

                    >
                      <option>------</option>
                      <option value="locked">Locked</option>
                      <option value="unlocked">Unlocked</option>
                      <option value="wifi + cellular">Wifi + Cellular</option>
                      <option value="wifi">Wifi</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Network</Form.Label>
                    <Form.Control
                      type="text"
                      name="network"
                      placeholder="Enter network"
                      onChange={handleNetworkChange}
                      defaultValue={productFormData.specification.network}

                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Sim</Form.Label>
                    <Form.Select
                      name="sim"
                      aria-label="Default select example"
                      required
                      onChange={handleSimChange} 
                      value={productFormData.specification.sim} 
                      defaultValue={productFormData.specification.sim}

                    >
                      <option>------</option>
                      <option value="physical sim">Physical sim</option>
                      <option value="e-Sim">e-Sim</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Capacity</Form.Label>
                    <Form.Select
                      name="capacity"
                      aria-label="Default select example"
                      required
                      onChange={handleStorageChange} 
                      value={productFormData.specification.capacity} 
                      defaultValue={productFormData.specification.capacity}

                    >
                      <option>------</option>
                      <option value="64gb">64GB</option>
                      <option value="128gb">128GB</option>
                      <option value="256gb">256GB</option>
                      <option value="512gb">512GB</option>
                      <option value="1tb">1TB</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Color</Form.Label>
                    <Form.Select
                      name="color"
                      aria-label="Default select example"
                      required
                      onChange={handleColorChange} 
                      value={productFormData.specification.color} 
                      defaultValue={productFormData.specification.color}

                    >
                      <option>------</option>
                      <option value="black">Black</option>
                      <option value="green">Green</option>
                      <option value="red">Red</option>
                      <option value="gold">Gold</option>
                      <option value="silver">Silver</option>
                      <option value="blue">Blue</option>
                      <option value="space grey">Space Grey</option>
                      <option value="pink">Pink</option>
                      <option value="yellow">Yellow</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      name="category"
                      aria-label="Default select example"
                      required
                      onChange={handleCategoryChange} 
                      value={productFormData.category} 
                      defaultValue={productFormData.category}

                    >
                      <option>------</option>
                      {category_list}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Product Type</Form.Label>
                    <Form.Select
                      name="productType"
                      aria-label="Default select example"
                      required
                      onChange={handleProductTypeChange} 
                      value={productFormData.productType} 
                      defaultValue={productFormData.productType}

                    >
                      <option>------</option>
                      <option value="high end">High end</option>
                      <option value="low end">Low end</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Tag Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="tagNumber"
                      placeholder="Enter tag number"
                      onChange={(evt) => handleInputChange(evt)}
                      defaultValue={productFormData.tagNumber}

                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>IMEI</Form.Label>
                    <Form.Control
                      type="text"
                      name="imei"
                      placeholder="Enter IMEI"
                      onChange={(evt) => handleInputChange(evt)}
                      defaultValue={productFormData.IMEI_SN}

                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Cost Price</Form.Label>
                    <Form.Control
                      type="text"
                      name="costPrice"
                      placeholder="Enter cost price"
                      onChange={(evt) => handleInputChange(evt)}
                      defaultValue={productFormData.costPrice}

                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Battery Health</Form.Label>
                    <Form.Control
                      type="batteryHealth"
                      name="name"
                      placeholder="Enter Battery health"
                      onChange={handleBatteryHealthChange}
                      defaultValue={productFormData.specification.batteryHealth}

                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Price</Form.Label>
                    <Form.Control
                      type="text"
                      name="price"
                      placeholder="Enter Regular price"
                      onChange={(evt) => handleInputChange(evt)}
                      defaultValue={productFormData.price}

                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Date received</Form.Label>
                    <Col sm="10">
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        dateFormat="yyyy/MM/dd"
                        className="form-control"
                      />
                    </Col>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                style={{ marginBottom: "10px" }}
              >
                <Form.Label>Supplier </Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ height: "100px" }}
                  name="supplier"
                  onChange={(evt) => handleInputChange(evt)}
                  defaultValue={productFormData.supplier}

                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group
                    className="mt-4"
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Label>Set as deal of the day</Form.Label>
                    <Switch
                      style={{ marginLeft: "10px" }}
                      checked={dealChecked}
                      onChange={() => setDealChecked(!dealChecked)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mt-4"
                    controlId="exampleForm.ControlSelect1"
                  >
                    <Form.Label>Set as featured</Form.Label>
                    <Switch
                      style={{ marginLeft: "10px" }}
                      checked={featuredChecked}
                      onChange={() => setFeaturedChecked(!featuredChecked)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <div className="image-uploader">
                  <label htmlFor="imageInput" className="upload-box">
                    {image ? (
                      <img
                        src={data?.thumbnail}
                        alt="image"
                      />
                    ) : (
                      <div className="placeholder text-[#fff]">
                        Click to upload
                      </div>
                    )}
                    <input
                      type="file"
                      id="imageInput"
                      accept="image/*"
                      onChange={(evnt) => onChangeImage(evnt)}
                      style={{ display: "none" }}
                    />
                  </label>
                </div>

                <div>
                  <div className="text-lg py-[20px]">Product Gallery</div>
                  <div
                    {...getRootProps()}
                    className="dropzone border border-dotted border-slate-800 p-[20px] my-[20px]"
                  >
                    <input {...getInputProps()} />
                    <div className="flex flex-col items-center justify-center ">
                      <FaRegImage className="text-8xl text-[#187EB4]" />
                      <p>Drop your images here, or click to select</p>
                    </div>
                  </div>
                  <div>
                 
                    {data?.images?.map((file) => (
                      <div
                        key={file.name}
                        className="p-[20px] bg-[#ebeaea] rounded w-full mb-[20px]"
                      >
                        <div className="flex items-center justify-between">
                          <div className="h-[50px] w-[50px] rounded">
                            <img
                              className="h-full w-full object-cover"
                              src={file}
                              alt=""
                            />
                          </div>
                          <div>
                            <FaCheckCircle className="text-[#187eb4]" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-[30px]">
                <button
                  className="bg-[#187EB4] text-[#fff] border-none px-[30px] py-[10px] w-1/3 rounded"
                  onClick={handleEditProduct}
                  disabled={loading ? true : false}
                >
                  {loading ? "Please wait..." : "Edit Product"}
                </button>
                <button
                  onClick={handleClose}
                  className="bg-[#fff] border border-[#187eb4] px-[30px] py-[10px] w-1/3 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default EditProduct;
