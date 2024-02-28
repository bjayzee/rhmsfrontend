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
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CreateRepairItem({ fetchRepairItems }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialFormState = {
    name: "",
    screenReplacement: {
      economyCost: "",
      premiumCost: "",
    },
    backGlassReplacement: {
      economyCost: "",
      premiumCost: "",
    },
    batteryReplacement: {
        economyCost: "",
        premiumCost: "",
      },
  };

  const [loading, setLoading] = useState(false);
  const [repairCentreFormData, setrepairCentreFormData] =
    useState(initialFormState);
    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
      
        // If the input field has a dot notation (e.g., screenReplacement.economyCost),
        // we need to handle the nested structure
        if (name.includes('.')) {
          const [parentKey, childKey] = name.split('.');
          setrepairCentreFormData((prevState) => ({
            ...prevState,
            [parentKey]: {
              ...prevState[parentKey],
              [childKey]: value,
            },
          }));
        } else {
          // If not nested, update directly
          setrepairCentreFormData({
            ...repairCentreFormData,
            [name]: value,
          });
        }
      };
      

  const clearFormData = () => {
    setrepairCentreFormData(initialFormState);
  };

  const handleCreateRepairItem = async (e) => {
    e.preventDefault();

    setLoading(true);


    const formData = {
        name: repairCentreFormData.name,
        screenReplacement: {
          economyCost: repairCentreFormData.screenReplacement.economyCost,
          premiumCost: repairCentreFormData.screenReplacement.premiumCost,
        },
        backGlassReplacement: {
          economyCost: repairCentreFormData.backGlassReplacement.economyCost,
          premiumCost: repairCentreFormData.backGlassReplacement.premiumCost,
        },
        batteryReplacement: {
            economyCost: repairCentreFormData.batteryReplacement.economyCost,
            premiumCost: repairCentreFormData.batteryReplacement.premiumCost,
          },
      };
  

    axios
      .post("/api/repair-items", formData, {
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
        fetchRepairItems();

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
      <span onClick={handleShow}>New Repair item</span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="flex justify-between items-center px-[50px]">
          <Modal.Title>New Repair item</Modal.Title>
          <button
            onClick={handleClose}
            className="border-none px-2 py-1 bg-none rounded text-[#e94d4d] hover:bg-[#e94d4d] hover:text-[#fff]"
          >
            <IoMdClose className="text-lg" />
          </button>
        </Modal.Header>
        <Modal.Body className="px-[50px]">
          <Form onSubmit={handleCreateRepairItem} className="overflow-y-scroll">
            <div>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter name "
                    onChange={(evt) => handleInputChange(evt)}
                  />
                </Form.Group>

                <div>
                  <Form.Label>Screen Replacement</Form.Label>

                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Economy cost</Form.Label>
                        <Form.Control
                          type="text"
                          name="screenReplacement.economyCost"
                          placeholder="Enter cost"
                          onChange={(evt) => handleInputChange(evt)}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Premium cost</Form.Label>
                        <Form.Control
                          type="text"
                          name="screenReplacement.premiumCost"
                          placeholder="Enter cost"
                          onChange={(evt) => handleInputChange(evt)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>

                <div>
                  <Form.Label>Back glass Replacement</Form.Label>

                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Economy cost</Form.Label>
                        <Form.Control
                          type="text"
                          name="backGlassReplacement.economyCost"
                          placeholder="Enter cost"
                          onChange={(evt) => handleInputChange(evt)}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Premium cost</Form.Label>
                        <Form.Control
                          type="text"
                          name="backGlassReplacement.premiumCost"
                          placeholder="Enter cost"
                          onChange={(evt) => handleInputChange(evt)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>

                <div>
                  <Form.Label>Battery Replacement</Form.Label>

                  <Row>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Economy cost</Form.Label>
                        <Form.Control
                          type="text"
                          name="batteryReplacement.economyCost"
                          placeholder="Enter cost"
                          onChange={(evt) => handleInputChange(evt)}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Premium cost</Form.Label>
                        <Form.Control
                          type="text"
                          name="batteryReplacement.premiumCost"
                          placeholder="Enter cost"
                          onChange={(evt) => handleInputChange(evt)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-[30px] mt-[60px]">
              <button
                className="bg-[#187EB4] text-[#fff] border-none p-2 w-1/6 rounded"
                onClick={handleCreateRepairItem}
                disabled={loading ? true : false}
              >
                {loading ? "creating..." : "Submit"}
              </button>
              <button
                onClick={handleClose}
                className="bg-[#fff] border border-[#187eb4] p-2 w-1/6 rounded"
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

export default CreateRepairItem;
