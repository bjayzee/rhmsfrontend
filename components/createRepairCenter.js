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

import Badge from "react-bootstrap/Badge";

function CreateRepairCentre({fetchRepairCentres}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialFormState = {
    email: "",
    number: "",
    address: "",

  };

  const [loading, setLoading] = useState(false);
  const [repairCentreFormData, setrepairCentreFormData] = useState(initialFormState);

  const [numberArray, setnumberArray] = useState([]);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setrepairCentreFormData({
      ...repairCentreFormData,
      [name]: value,
    });
  };

  const handlenumberInputChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setrepairCentreFormData({
      ...repairCentreFormData,
      number: value,
    });
  };

  const handleAddnumber = () => {
    if (repairCentreFormData.number.trim() !== "") {
      setnumberArray([...numberArray, repairCentreFormData.number]);
      setrepairCentreFormData({
        ...repairCentreFormData,
        number: "",
      });
    }
  };

  const clearFormData = () => {
    setrepairCentreFormData(initialFormState);
  };

  const handleCreateRepairCentre = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formDataForBackend = new FormData();

    formDataForBackend.append("email", repairCentreFormData.email);
    formDataForBackend.append("address", repairCentreFormData.address);

    numberArray.forEach((number, index) => {
      formDataForBackend.append(`phoneNumbers[${index}]`, number);
    });

    axios
      .post("/api/repair-center", formDataForBackend, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        handleClose();
        clearFormData();
        notification.success({
          message: "Repair centre created successfully",
        });
        fetchRepairCentres()

        setLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);

        setLoading(false);

        notification.error({
          message: "Error creating repair centre, please try again",
        });
      });
  };

  return (
    <>
      <span onClick={handleShow}>New Repair centre</span>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header className="flex justify-between items-center px-[50px]">
          <Modal.Title>New Repair Centre</Modal.Title>
          <button
            onClick={handleClose}
            className="border-none px-2 py-1 bg-none rounded text-[#e94d4d] hover:bg-[#e94d4d] hover:text-[#fff]"
          >
            <IoMdClose className="text-lg" />
          </button>
        </Modal.Header>
        <Modal.Body className="px-[50px]">
          <Form onSubmit={handleCreateRepairCentre} className="overflow-y-scroll">
            <div>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="email"
                    placeholder="Enter email "
                    onChange={(evt) => handleInputChange(evt)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Enter address "
                    onChange={(evt) => handleInputChange(evt)}
                  />
                </Form.Group>

             
              </div>
            </div>

            

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number(s)</Form.Label>
              <div className="flex items-center gap-[10px]">
                <Form.Control
                  type="text"
                  name="number"
                  placeholder="Enter phone number"
                  value={repairCentreFormData.number}
                  onChange={(evt) => handlenumberInputChange(evt)}
                />
                <Button variant="secondary" onClick={handleAddnumber}>
                  Add
                </Button>
              </div>
              <div className="pt-[5px]">
                {numberArray.map((number, index) => (
                  <Badge key={index} className="mr-[5px] bg-[#187EB4]">
                    {number}
                  </Badge>
                ))}
              </div>
            </Form.Group>

            <div className="flex items-center justify-end gap-[30px] mt-[60px]">
              <button
                className="bg-[#187EB4] text-[#fff] border-none px-[20px] py-[10px] w-1/6 rounded"
                onClick={handleCreateRepairCentre}
                disabled={loading ? true : false}
              >
                {loading ? "creating..." : "Submit"}
              </button>
              <button
                onClick={handleClose}
                className="bg-[#fff] border border-[#187eb4] px-[20px] py-[10px] w-1/6 rounded"
              >
                Cancel
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default CreateRepairCentre;
