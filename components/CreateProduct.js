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

function CreateProduct() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialFormState = {
    name: "",
    thumbnail: "",
  };

  const [loading, setLoading] = useState(false);
  const [productFormData, setProductFormData] = useState(initialFormState);

  const [image, setImage] = useState(null);

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
      condition: selectedValue,
    });
  };

  const handleCarrierChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      carrier: selectedValue,
    });
  };

  const handleStorageChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      storage: selectedValue,
    });
  };

  const handleColorChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      color: selectedValue,
    });
  };

  const handleBandChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      band: selectedValue,
    });
  };

  const handleMemoryChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      memory: selectedValue,
    });
  };

  const handleMaterialChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      material: selectedValue,
    });
  };

  const handleSizeChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      size: selectedValue,
    });
  };

  const handleDiscountChange = (event) => {
    const selectedValue = event.target.value;
    setProductFormData({
      ...productFormData,
      discount: selectedValue,
    });
  };

  const clearFormData = () => {
    // Add any logic you need to clear form data
  };

  const handleCreateProduct = () => {};

  return (
    <>
      <span onClick={handleShow}>Create product</span>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header className="flex justify-between items-center px-[50px]">
          <Modal.Title>Create product</Modal.Title>
          <Button
            onClick={handleClose}
            className="border-none bg-none text-[#e94d4d] hover:bg-[#e94d4d] hover:text-[#fff]"
          >
            <IoMdClose className="text-lg" />
          </Button>
        </Modal.Header>
        <Modal.Body className="px-[50px]">
          <Form
            onSubmit={handleCreateProduct}
            className="grid grid-cols-2 gap-[100px] overflow-y-scroll"
          >
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Sub product</Form.Label>
                <Form.Control
                  type="text"
                  name="subproduct"
                  placeholder="Enter subproduct "
                  onChange={(evt) => handleInputChange(evt)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter product name"
                  onChange={(evt) => handleInputChange(evt)}
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
                  name="Description"
                  onChange={(evt) => handleInputChange(evt)}
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Condition</Form.Label>
                    <Form.Select
                      name="condition"
                      aria-label="Default select example"
                      required
                      onChange={handleConditionChange} // Add onChange handler
                      value={productFormData.condition} // Set the selected value
                    >
                      <option>------</option>
                      <option value="used">Used</option>
                      <option value="brand new">Brand New</option>
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
                      onChange={handleCarrierChange} // Add onChange handler
                      value={productFormData.carrier} // Set the selected value
                    >
                      <option>------</option>
                      <option value="locked">Used</option>
                      <option value="brand new">Brand New</option>
                      <option value="wifi + cellular">Wifi + Cellular</option>
                      <option value="wifi">Wifi</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Storage</Form.Label>
                    <Form.Select
                      name="storage"
                      aria-label="Default select example"
                      required
                      onChange={handleStorageChange} // Add onChange handler
                      value={productFormData.storage} // Set the selected value
                    >
                      <option>------</option>
                      <option value="64gb">64GB</option>
                      <option value="128gb">128GB</option>
                      <option value="256gb">256GB</option>
                      <option value="512gb">512GB</option>
                      <option value="128gb">1TB</option>
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
                      onChange={handleColorChange} // Add onChange handler
                      value={productFormData.color} // Set the selected value
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
                    <Form.Label>Band</Form.Label>
                    <Form.Select
                      name="band"
                      aria-label="Default select example"
                      required
                      onChange={handleBandChange} // Add onChange handler
                      value={productFormData.band} // Set the selected value
                    >
                      <option>------</option>
                      <option value="braided solo loop">
                        Braided Solo Loop
                      </option>
                      <option value="leather link">Leather Link</option>
                      <option value="link bracelet">Link Bracelet</option>
                      <option value="milanese loop">Milanese Loop</option>
                      <option value="modern buckle">Modern Buckle</option>
                      <option value="silver link bracelet">
                        Silver Link Bracelet
                      </option>
                      <option value="space link bracelet">
                        Space Link Bracelet
                      </option>
                      <option value="sport band">Sport Band</option>
                      <option value="sport loop">Sport loop</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Memory</Form.Label>
                    <Form.Select
                      name="memory"
                      aria-label="Default select example"
                      required
                      onChange={handleMemoryChange} // Add onChange handler
                      value={productFormData.memory} // Set the selected value
                    >
                      <option>------</option>
                      <option value="4gb">4GB</option>
                      <option value="8gb">8GB</option>
                      <option value="16gb">16GB</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Case Material</Form.Label>
                    <Form.Select
                      name="material"
                      aria-label="Default select example"
                      required
                      onChange={handleMaterialChange} // Add onChange handler
                      value={productFormData.material} // Set the selected value
                    >
                      <option>------</option>
                      <option value="aluminium">Aluminium</option>
                      <option value="ceramic">Ceramic</option>
                      <option value="stainless steel">Stainless Steel</option>
                      <option value="titanium">Titanium</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Size</Form.Label>
                    <Form.Select
                      name="size"
                      aria-label="Default select example"
                      required
                      onChange={handleSizeChange} // Add onChange handler
                      value={productFormData.size} // Set the selected value
                    >
                      <option>------</option>
                      <option value="512mb">512MB</option>
                      <option value="256mb">256MB</option>
                      <option value="1gb">1GB</option>
                      <option value="2gb">2GB</option>
                      <option value="3gb">3GB</option>
                      <option value="4gb">4GB</option>
                      <option value="6gb">6GB</option>
                      <option value="8gb">8GB</option>
                      <option value="16gb">16GB</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>IMEI</Form.Label>
                    <Form.Control
                      type="text"
                      name="imei"
                      placeholder="Enter IMEI"
                      onChange={(evt) => handleInputChange(evt)}
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
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Range Price</Form.Label>
                    <Form.Control
                      type="text"
                      name="range"
                      placeholder="Enter range price"
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Regular Price</Form.Label>
                    <Form.Control
                      type="text"
                      name="regular"
                      placeholder="Enter Regular price"
                      onChange={(evt) => handleInputChange(evt)}
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
                      name="cost"
                      placeholder="Enter cost price"
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Discounted Price</Form.Label>
                    <Form.Select
                      name="discount"
                      aria-label="Default select example"
                      required
                      onChange={handleDiscountChange} // Add onChange handler
                      value={productFormData.discount} // Set the selected value
                    >
                      <option>------</option>
                      <option value="10%">10%</option>
                      <option value="15%">15%</option>
                      <option value="20%">20%</option>
                      <option value="25%">25%</option>
                      <option value="30%">30%</option>
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
                />
              </Form.Group>
            </div>
            <div>
              <div className="image-uploader">
                <label htmlFor="imageInput" className="upload-box">
                  {image ? (
                    <img src={URL.createObjectURL(image)} alt="Selected image" />
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
                <div {...getRootProps()} className="dropzone border border-dotted border-slate-800 p-[20px] my-[20px]">
                  <input {...getInputProps()} />
                  <div className="flex flex-col items-center justify-center ">
                    <FaRegImage className="text-8xl text-[#187EB4]"/>
                    <p>Drop your images here, or click to select</p>

                  </div>
                </div>
                <div>
                  {/* Display selected images */}
                  {selectedImages.map((file) => (
                    <div key={file.name}>
                      {file.name} - {file.size} bytes
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default CreateProduct;
