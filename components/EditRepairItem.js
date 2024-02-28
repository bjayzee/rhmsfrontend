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

function EditRepairItem({ repairItem, fetchRepairItems }) {
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


  useEffect(()=> {
    setrepairItemFormData({
      name: repairItem?.name,
      screenReplacement: {
        economyCost: repairItem?.screenReplacement?.economyCost,
        premiumCost: repairItem?.screenReplacement?.premiumCost,
      },
      backGlassReplacement: {
        economyCost: repairItem?.backGlassReplacement?.economyCost,
        premiumCost: repairItem?.backGlassReplacement?.premiumCost,
      },
      batteryReplacement: {
          economyCost: repairItem?.batteryReplacement?.economyCost,
          premiumCost: repairItem?.batteryReplacement?.premiumCost,
        },
    

    })
  }, [repairItem])

  const [loading, setLoading] = useState(false);
  const [repairItemFormData, setrepairItemFormData] =
    useState(initialFormState);
    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
      
        // If the input field has a dot notation (e.g., screenReplacement.economyCost),
        // we need to handle the nested structure
        if (name.includes('.')) {
          const [parentKey, childKey] = name.split('.');
          setrepairItemFormData((prevState) => ({
            ...prevState,
            [parentKey]: {
              ...prevState[parentKey],
              [childKey]: value,
            },
          }));
        } else {
          // If not nested, update directly
          setrepairItemFormData({
            ...repairItemFormData,
            [name]: value,
          });
        }
      };
      

  const clearFormData = () => {
    setrepairItemFormData(initialFormState);
  };

  const handleEditRepairItem = async (e) => {
    e.preventDefault();

    setLoading(true);


    const formData = {
        name: repairItemFormData.name,
        screenReplacement: {
          economyCost: repairItemFormData.screenReplacement.economyCost,
          premiumCost: repairItemFormData.screenReplacement.premiumCost,
        },
        backGlassReplacement: {
          economyCost: repairItemFormData.backGlassReplacement.economyCost,
          premiumCost: repairItemFormData.backGlassReplacement.premiumCost,
        },
        batteryReplacement: {
            economyCost: repairItemFormData.batteryReplacement.economyCost,
            premiumCost: repairItemFormData.batteryReplacement.premiumCost,
          },
      };
  

    axios
      .put(`/api/repair-items/${repairItem?._id}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        handleClose();
        clearFormData();
        notification.success({
          message: "Repair item edited successfully",
        });
        fetchRepairItems();

        setLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);

        setLoading(false);

        notification.error({
          message: "Error editing repair item, please try again",
        });
      });
  };

  return (
    <>
      <span onClick={handleShow}>Edit</span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="flex justify-between items-center px-[50px]">
          <Modal.Title>Edit Repair item</Modal.Title>
          <button
            onClick={handleClose}
            className="border-none px-2 py-1 bg-none rounded text-[#e94d4d] hover:bg-[#e94d4d] hover:text-[#fff]"
          >
            <IoMdClose className="text-lg" />
          </button>
        </Modal.Header>
        <Modal.Body className="px-[50px]">
          <Form onSubmit={handleEditRepairItem} className="overflow-y-scroll">
            <div>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter name "
                    onChange={(evt) => handleInputChange(evt)}
                    defaultValue={repairItemFormData.name}
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
                          defaultValue={repairItemFormData.screenReplacement.economyCost}

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
                          defaultValue={repairItemFormData.screenReplacement.premiumCost}

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
                          defaultValue={repairItemFormData.backGlassReplacement.economyCost}

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
                          defaultValue={repairItemFormData.backGlassReplacement.premiumCost}

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
                          defaultValue={repairItemFormData.batteryReplacement.economyCost}

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
                          defaultValue={repairItemFormData.batteryReplacement.premiumCost}

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
                onClick={handleEditRepairItem}
                disabled={loading ? true : false}
              >
                {loading ? "editing..." : "Submit"}
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

export default EditRepairItem;
