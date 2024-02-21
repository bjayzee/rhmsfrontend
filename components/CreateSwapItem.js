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

function CreateSwapItem({fetchSwapItems}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [selected, setSelected] = useState([]);

  const initialFormState = {
    name: "",
    baseStorage: "",
    storagePrice: "",
    storageVariance: "",
    lockStatus: "",
    pricePerGrade: [
      { New: "" },
      { GradeA: "" },
      { GradeB: "" },
      { GradeC: "" },
    ],
  };

  const [loading, setLoading] = useState(false);
  const [swapItemFormData, setSwapItemFormData] = useState(initialFormState);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
  
    if (name.startsWith("pricePerGrade")) {
      const gradeKey = name.split("[")[1].split("]")[0];
      setSwapItemFormData((prevState) => ({
        ...prevState,
        pricePerGrade: prevState.pricePerGrade.map((grade) =>
          Object.keys(grade)[0] === gradeKey ? { [gradeKey]: value } : grade
        ),
      }));
    } else {
      setSwapItemFormData({
        ...swapItemFormData,
        [name]: value,
      });
    }
  };
  
  

  const storage = ["32GB", "64GB", "128GB", "256GB", "512GB", "1TB"];

  const storage_list = storage.map((s, key) => {
    return (
      <label key={key} style={{ paddingBottom: "10px" }}>
        {s}
        <input
          style={{ marginRight: "10px" }}
          type="checkbox"
          defaultValue={s}
          name="storageVariance"
          onClick={(e) => handleChange(e, s)}
        />
        &nbsp;
      </label>
    );
  });

  const handleChange = (e, i) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.value]);
    } else {
      setSelected([...selected.filter((val) => val !== e.target.value)]);
    }
  };

  const handleCarrierChange = (event) => {
    const selectedValue = event.target.value;
    setSwapItemFormData({
      ...swapItemFormData,
      lockStatus: selectedValue,
    });
  };

  const clearFormData = () => {
    setSwapItemFormData(initialFormState);
  };

  const handleCreateSwapItem = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formDataForBackend = new FormData();

    formDataForBackend.append("name", swapItemFormData.name);
    formDataForBackend.append("storagePrice", swapItemFormData.storagePrice);
    formDataForBackend.append("baseStorage", swapItemFormData.baseStorage);
    selected.forEach((variant, index) => {
      formDataForBackend.append(`storageVariance[${index}]`, variant);
    });
    formDataForBackend.append("lockStatus", swapItemFormData.lockStatus);
    const pricePerGradeArray = swapItemFormData.pricePerGrade.reduce((acc, grade, index) => {
      const key = Object.keys(grade)[0];
      acc[`pricePerGrade[${index}][${key}]`] = grade[key];
      return acc;
    }, {});
  
    // Append each item in pricePerGradeArray to formDataForBackend
    Object.entries(pricePerGradeArray).forEach(([key, value]) => {
      formDataForBackend.append(key, value);
    });

    if (selected.length < 1) {
      notification.error({
        message:
          "No storage selected. Please select at least one storage variant",
      });
      return;
    }

    axios
      .post("/api/old-phones", formDataForBackend, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        handleClose();
        clearFormData()
        fetchSwapItems();
        notification.success({
          message: "Swap item created successfully",
        });

        setLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);

        setLoading(false);

        notification.error({
          message: "Error creating swap item, please try again",
        });
      });
  };

  return (
    <>
      <span onClick={handleShow}>Create swap item</span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="flex justify-between items-center px-[50px]">
          <Modal.Title>Create swap item</Modal.Title>
          <button
            onClick={handleClose}
            className="border-none px-2 py-1 bg-none rounded text-[#e94d4d] hover:bg-[#e94d4d] hover:text-[#fff]"
          >
            <IoMdClose className="text-lg" />
          </button>
        </Modal.Header>
        <Modal.Body className="px-[50px]">
          <Form>
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter item name"
                  onChange={(evt) => handleInputChange(evt)}
                />
              </Form.Group>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Lock status</Form.Label>
                    <Form.Select
                      name="lockStatus"
                      aria-label="Default select example"
                      required
                      onChange={handleCarrierChange} // Add onChange handler
                      value={swapItemFormData.lockStatus} // Set the selected value
                    >
                      <option>------</option>
                      <option value="locked">Locked</option>
                      <option value="unlocked">Unlocked</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Base storage</Form.Label>
                    <Form.Control
                      type="text"
                      name="baseStorage"
                      placeholder="Enter base storage"
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Storage price</Form.Label>
                    <Form.Control
                      type="text"
                      name="storagePrice"
                      placeholder="Enter storage price"
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Select storage variance</Form.Label>
                    {storage_list}
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div>
              <Form.Label> Price per grade</Form.Label>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> New</Form.Label>
                    <Form.Control
                      type="text"
                      name="pricePerGrade[New]"
                      placeholder="Enter price for new"
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Grade A</Form.Label>
                    <Form.Control
                      type="text"
                      name="pricePerGrade[GradeA]"
                      placeholder="Enter grade A price"
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Grade B</Form.Label>
                    <Form.Control
                      type="text"
                      name="pricePerGrade[GradeB]"
                      placeholder="Enter grade B price"
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Grade C</Form.Label>
                    <Form.Control
                      type="text"
                      name="pricePerGrade[GradeC]"
                      placeholder="Enter grade C price"
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label> Grade D</Form.Label>
                    <Form.Control
                      type="text"
                      name="pricePerGrade[GradeD]"
                      placeholder="Enter grade D price"
                      onChange={(evt) => handleInputChange(evt)}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className="flex items-center justify-end gap-[30px] mt-[60px]">
              <button
                className="bg-[#187EB4] text-[#fff] border-none px-[20px] py-[10px] w-1/3 rounded"
                onClick={handleCreateSwapItem}
                disabled={loading ? true : false}
              >
                {loading ? "Please wait..." : "Add swap item"}
              </button>
              <button
                onClick={handleClose}
                className="bg-[#fff] border border-[#187eb4] px-[20px] py-[10px] w-1/3 rounded"
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

export default CreateSwapItem;
