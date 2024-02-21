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

function EditAccessory({ data, fetchAccessories }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialFormState = {
    name: "",
    description: "",
    category: "",
    color: "",
    images: [],
    tagNumber: "",
    price: "",
    costPrice: "",
    numInStock: "",
    featured: "",
    dealOfTheDay: "",
    IMEI_SN: "",
    supplier: "",
    image: "",
  };

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
    setAccessoryFormData({
      name: data?.name,
      image: data?.image,
      description: data?.description,
      category: data?.category,
      color: data?.specification?.color,
      price: data?.price,
      costPrice: data?.costPrice,
      numInStock: data?.numInStock,
      isFeatured:
        data?.isFeatured === true
          ? setFeaturedChecked(true)
          : setFeaturedChecked(false),
      IMEI_SN: data?.IMEI_SN,
      supplier: data?.supplier,
    });
    setImage(data?.image);
  }, [data]);

  const [loading, setLoading] = useState(false);
  const [accessoryFormData, setAccessoryFormData] = useState(initialFormState);
  const [featuredChecked, setFeaturedChecked] = useState(false);

  const [image, setImage] = useState(null);

  const [categories, setCategories] = useState([]);

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
        <option value={category?.name.toLowerCase()} key={key}>
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
    setAccessoryFormData({
      ...accessoryFormData,
      [name]: value,
    });
  };

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setAccessoryFormData({
      ...accessoryFormData,
      category: selectedValue,
    });
  };

  const handleColorChange = (event) => {
    const selectedValue = event.target.value;
    setAccessoryFormData({
      ...accessoryFormData,
      color: selectedValue,
    });
  };

  const clearFormData = () => {
    setAccessoryFormData(initialFormState);
  };

  const handleCreateAccessory = async (e) => {
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

    formDataForBackend.append("name", accessoryFormData.name);
    formDataForBackend.append(
      "category",
      accessoryFormData.category.toLowerCase()
    );
    formDataForBackend.append("color", accessoryFormData.color);
    formDataForBackend.append("price", accessoryFormData.price);
    formDataForBackend.append("costPrice", accessoryFormData.costPrice);
    formDataForBackend.append("numInStock", accessoryFormData.numInStock);

    formDataForBackend.append("featured", featuredChecked ? "true" : "false");
    formDataForBackend.append("IMEI_SN", accessoryFormData.imei);
    formDataForBackend.append("supplier", accessoryFormData.supplier);
    formDataForBackend.append("dateReceived", formatDate(selectedDate));
    formDataForBackend.append("image", imageUrl);

    axios
      .put(`/api/accessories/${data?._id}`, formDataForBackend, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        handleClose();
        clearFormData();
        setLoading(false);
        fetchAccessories();
        notification.success({
          message: "accessory edited successfully",
        });
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);

        setLoading(false);

        notification.error({
          message: "Error editing accessory, please try again",
        });
      });
  };

  return (
    <>
      <span onClick={handleShow}>Edit</span>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header className="flex justify-between items-center px-[50px]">
          <Modal.Title>Create accessory</Modal.Title>
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
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter accessory name"
                  onChange={(evt) => handleInputChange(evt)}
                  defaultValue={accessoryFormData.name}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Number in stock</Form.Label>
                <Form.Control
                  type="text"
                  name="numInStock"
                  placeholder="Enter number"
                  onChange={(evt) => handleInputChange(evt)}
                  defaultValue={accessoryFormData.numInStock}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      name="category"
                      aria-label="Default select example"
                      required
                      onChange={handleCategoryChange} // Add onChange handler
                      value={accessoryFormData.category} // Set the selected value
                      defaultValue={accessoryFormData.category}
                    >
                      <option>------</option>
                      {category_list}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>IMEI</Form.Label>
                      <Form.Control
                        type="text"
                        name="imei"
                        placeholder="Enter IMEI"
                        onChange={(evt) => handleInputChange(evt)}
                        defaultValue={accessoryFormData.IMEI_SN}
                      />
                    </Form.Group>
                  </Col>
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
                      defaultValue={accessoryFormData.price}
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
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Cost Price</Form.Label>
                    <Form.Control
                      type="text"
                      name="costPrice"
                      placeholder="Enter cost price"
                      onChange={(evt) => handleInputChange(evt)}
                      defaultValue={accessoryFormData.costPrice}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Color</Form.Label>
                    <Form.Select
                      name="color"
                      aria-label="Default select example"
                      required
                      onChange={handleColorChange} // Add onChange handler
                      value={accessoryFormData.color} // Set the selected value
                      defaultValue={accessoryFormData.color}
                    >
                      <option>------</option>
                      <option value="black">Black</option>
                      <option value="white">White</option>
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
                  defaultValue={accessoryFormData.supplier}
                />
              </Form.Group>

              <Row>
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
                      <img src={data?.image} alt="Selected image" />
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
              </div>

              <div className="flex items-center justify-center gap-[30px] mt-[60px]">
                <button
                  className="bg-[#187EB4] text-[#fff] border-none px-[20px] py-[10px] w-1/3 rounded"
                  onClick={handleCreateAccessory}
                  disabled={loading ? true : false}
                >
                  {loading ? "Please wait..." : "Edit Accessory"}
                </button>
                <button
                  onClick={handleClose}
                  className="bg-[#fff] border border-[#187eb4] px-[20px] py-[10px] w-1/3 rounded"
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

export default EditAccessory;
