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

function CreateArticle() {
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



  const clearFormData = () => {
    // Add any logic you need to clear form data
  };

  const handleCreateProduct = () => {};

  return (
    <>
      <span onClick={handleShow}>New Post</span>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header className="flex justify-between items-center px-[50px]">
          <Modal.Title>New Post</Modal.Title>
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
            className="overflow-y-scroll"
          >
            <div className="grid grid-cols-2 gap-[100px] ">
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter Title "
                  onChange={(evt) => handleInputChange(evt)}
                />
              </Form.Group>
            

              <div>
                <div className="text-lg py-[20px]">Article Images</div>
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
        
            </div>
         
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                style={{ marginBottom: "10px" }}
              >
                <Form.Label>Article Body </Form.Label>
                <Form.Control
                  as="textarea"
                  style={{ height: "500px" }}
                  name="body"
                  onChange={(evt) => handleInputChange(evt)}
                />
              </Form.Group>
          
          
            
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default CreateArticle;
