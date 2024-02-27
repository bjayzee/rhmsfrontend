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

function EditRepairCentre({repairCentre, fetchRepairCentres}) {
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

  useEffect(()=> {
    setrepairCentreFormData({
      email: repairCentre?.email  ,
      address: repairCentre?.address,
    

    })
  }, [repairCentre])

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

  const handleEditRepairCentre = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formDataForBackend = new FormData();

    formDataForBackend.append("email", repairCentreFormData.email);
    formDataForBackend.append("address", repairCentreFormData.address);
    numberArray.forEach((number, index) => {
      formDataForBackend.append(`numbers[${index}]`, number);
    });

    axios.put(`/api/repair-center/${repairCentre?._id}`, formDataForBackend, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        handleClose();
        clearFormData();
        notification.success({
          message: "repair centre edited successfully",
        });
        fetchRepairCentres()

        setLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);

        setLoading(false);

        notification.error({
          message: "Error editing repair centre, please try again",
        });
      });
  };

  return (
    <>
      <span onClick={handleShow}>Edit</span>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header className="flex justify-between items-center px-[50px]">
          <Modal.Title>Edit repair centre</Modal.Title>
          <button
            onClick={handleClose}
            className="border-none px-2 py-1 bg-none rounded text-[#e94d4d] hover:bg-[#e94d4d] hover:text-[#fff]"
          >
            <IoMdClose className="text-lg" />
          </button>
        </Modal.Header>
        <Modal.Body className="px-[50px]">
          <Form onSubmit={handleEditRepairCentre} className="overflow-y-scroll">
            <div>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    name="author"
                    placeholder="Enter email "
                    onChange={(evt) => handleInputChange(evt)}
                    defaultValue={repairCentreFormData.email}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter address "
                    onChange={(evt) => handleInputChange(evt)}
                    defaultValue={repairCentreFormData.address}

                  />
                </Form.Group>

            
              </div>
            </div>


            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>numbers</Form.Label>
              <div className="flex items-center gap-[10px]">
                <Form.Control
                  type="text"
                  name="numbers"
                  placeholder="Enter number"
                  value={repairCentreFormData.number}
                  onChange={(evt) => handlenumberInputChange(evt)}

                />
                <Button variant="secondary" onClick={handleAddnumber}>
                  Add
                </Button>
              </div>
              <div className="pt-[5px]">
                {numberArray.map((number, index) => (
                  <Badge key={index} variant="primary" className="mr-[5px]">
                    {number}
                  </Badge>
                ))}
              </div>
            </Form.Group>

            <div className="flex items-center justify-end gap-[30px] mt-[60px]">
              <button
                className="bg-[#187EB4] text-[#fff] border-none px-[20px] py-[10px] w-1/6 rounded"
                onClick={handleEditRepairCentre}
                disabled={loading ? true : false}
              >
                {loading ? "editing..." : "Edit"}
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

export default EditRepairCentre;
