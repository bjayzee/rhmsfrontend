"use client";

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notification } from "antd";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { CloudinaryContext, Image } from "cloudinary-react";


function CreateCategory() {


  const initialFormState = {
    name: "",
    displayPicture: "",
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(false);
  const [categoryFormData, setcategoryFormData] = useState(initialFormState);
  const [image, setImage] = useState("");

  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setcategoryFormData({
      ...categoryFormData,
      [name]: value,
    });
  };

  const clearFormData = () => {
    setcategoryFormData({
      name: "",
      displayPicture: "",
    });
  };

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "kk4zifqd");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/fatherofdragons/image/upload",
      formData
    );

    const imageUrl = response.data.secure_url;

    const formDataForBackend = new FormData();
    formDataForBackend.append("name", categoryFormData.name);
    formDataForBackend.append("displayPicture", imageUrl);

    setLoading(true);
    axios
      .post("/api/categories", formDataForBackend, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        handleClose();
        clearFormData();
        notification.success({
          message: "Category created successfully",
        });

        setLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);

        setLoading(false);

        notification.error({
          message: "Error creating category, please try again",
        });
      });
  };

  return (
    <>
      <span onClick={handleShow}>Create category</span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="flex justify-between items-center">
          <Modal.Title>Create category</Modal.Title>
          <Button
            onClick={handleClose}
            className="border-none bg-none text-[#e94d4d] hover:bg-[#e94d4d] hover:text-[#fff]"
          >
            <IoMdClose className="text-lg" />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreateCategory}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter category name"
                onChange={(evt) => handleInputChange(evt)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="displayPicture"
                onChange={(evnt) => onChangeImage(evnt)}
              />
            </Form.Group>

            <Button
              style={{
                marginTop: "10px",
                background: "#187EB4",
                border: "none",
              }}
              variant="primary"
              type="submit"
              disabled={loading ? true : false}
            >
              {loading ? "Please wait..." : "Submit"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default CreateCategory;
