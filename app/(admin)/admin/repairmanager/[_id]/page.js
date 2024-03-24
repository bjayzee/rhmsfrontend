"use client";

import { Avatar, Button, Card, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { useEffect, useState } from "react";
import { BsPhone, BsArrowLeft, BsEnvelope } from "react-icons/bs";
import styled from "styled-components";
import moment from "moment";
import Form from "react-bootstrap/Form";
import { NumericFormat } from "react-number-format";
import { notification } from "antd";
import Link from "next/link";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialFormState = {
  status: "",
  repairClinicTagNum: "",
  repairReport: "",
};

const RepairRequestDetails = ({ params: { _id } }) => {
  const [repairRequestFormData, setRepairRequestFormData] =
    useState(initialFormState);

  const [repairRequest, setRepairRequest] = useState({});

  const [repairCentres, setRepairCentres] = useState({});

  const [loading, setLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);

  const fetchRepairRequest = async () => {
    const res = await fetch(`/api/repair/${_id}`);
    const data = await res.json();
    setRepairRequest(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRepairRequest();
  }, []);

  useEffect(() => {
    if (repairRequest?.data?.status) {
      setRepairRequestFormData((prevState) => ({
        ...prevState,
        status: repairRequest.data.status,
        repairClinicTagNum: repairRequest.data.repairClinicTagNum,
        repairReport: repairRequest.data.repairReport,
      }));
    }
  }, [repairRequest]); 
  

  const fetchRepairCentres = async () => {
    const res = await fetch("/api/repair-center");
    const data = await res.json();
    setRepairCentres(data);
  };

  useEffect(() => {
    fetchRepairCentres();
  }, []);

  const thisRepairCentre = repairCentres?.data?.find(
    (centre) => centre._id === repairRequest?.data?.repairCenter
  );

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    // If the input field has a dot notation (e.g., screenReplacement.economyCost),
    // we need to handle the nested structure
    if (name.includes(".")) {
      const [parentKey, childKey] = name.split(".");
      setRepairRequestFormData((prevState) => ({
        ...prevState,
        [parentKey]: {
          ...prevState[parentKey],
          [childKey]: value,
        },
      }));
    } else {
      // If not nested, update directly
      setRepairRequestFormData({
        ...repairRequestFormData,
        [name]: value,
      });
    }
  };

  const handleStatusChange = (event) => {
    const selectedValue = event.target.value;
    setRepairRequestFormData({
      ...repairRequestFormData,
      status: selectedValue,
    });
  };

  const clearFormData = () => {
    setRepairRequestFormData(initialFormState);
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    setEditLoading(true);

    const formData = {
      repairItem: repairRequest?.data?.drepairItem,
      otherIssues: repairRequest?.data?.otherIssues,
      status: repairRequestFormData.status,
      repairCenter: repairRequest?.data?.repairCenter,
      faceId: repairRequest?.data?.faceId,
      trueTone: repairRequest?.data?.trueTone,
      phoneOpenedBefore: repairRequest?.data?.phoneOpenedBefore,
      repairReport: repairRequestFormData.repairReport,
      repairClinicTagNum: repairRequestFormData.repairClinicTagNum,
    };

    axios
      .put(`/api/repair/${repairRequest?.data?._id}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        clearFormData();
        notification.success({
          message: "request updated successfully",
        });
        fetchRepairRequest();

        setEditLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);

        setEditLoading(false);

        notification.error({
          message: "Error updating request, please try again",
        });
      });
  };

  return (
    <StyledContainer>
      <div className="m-[50px]">
        <div className="userInfo">
          <Card
            loading={loading}
            className="userInfo__card"
            title="Repair Request Details"
          >
            <div className="userInfo__back  flex justify-end">
              <Link
                className="no-underline flex items-center gap-[5px]"
                href="/admin/repairmanager"
              >
                <BsArrowLeft /> <div>Back</div>
              </Link>
            </div>

            <Meta
              title={
                <Typography.Title level={2} className="text-3xl m-0 w-full">{`${
                  `${repairRequest?.data?.repairItem}` || ""
                } `}</Typography.Title>
              }
              description={
                <div className="metaDescription">
                  <div className="flex align-middle items-center gap-4 flex-wrap ">
                    <strong>Face ID:</strong>{" "}
                    {repairRequest?.data?.faceId || ""}
                  </div>
                  <div className="flex align-middle items-center gap-4 flex-wrap ">
                    <strong>True tone:</strong>{" "}
                    {repairRequest?.data?.trueTone || "N/A"}
                  </div>
                  <div className="flex align-middle items-center gap-4 flex-wrap ">
                    <strong>Other issues:</strong>{" "}
                    {repairRequest?.data?.otherIssues || "N/A"}
                  </div>
                  <div className="flex align-middle items-center gap-4 flex-wrap ">
                    <strong>Repair centre:</strong>{" "}
                    {thisRepairCentre?.address || "N/A"}
                  </div>
                  <div className="flex align-middle items-center gap-4 flex-wrap ">
                    <strong>Phone opened before:</strong>{" "}
                    {repairRequest?.data?.phoneOpenedBefore || "N/A"}
                  </div>

                  <div className="flex align-middle items-center gap-4 flex-wrap ">
                    <strong>Created At:</strong>{" "}
                    {moment(repairRequest?.data?.createdAt).format(
                      "DD MMM YYYY"
                    ) || ""}
                  </div>
                  <Form>
                    <Form.Group
                      className="mb-3 w-1/3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Status</Form.Label>
                      <Form.Select
                        name="status"
                        aria-label="Default select example"
                        required
                        onChange={handleStatusChange}
                        value={repairRequestFormData.status}
                      >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Repair Clinic Tag Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="repairClinicTagNum"
                        placeholder="Enter tag number "
                        onChange={(evt) => handleInputChange(evt)}
                        defaultValue={repairRequest?.data?.repairClinicTagNum}
                      />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                      style={{ marginBottom: "10px" }}
                    >
                      <Form.Label>Repair report </Form.Label>
                      <Form.Control
                        as="textarea"
                        style={{ height: "200px" }}
                        name="repairReport"
                        onChange={(evt) => handleInputChange(evt)}
                        defaultValue={repairRequest?.data?.repairReport}
                      />
                    </Form.Group>

                    <button
                      className="bg-[#187EB4] text-[#fff] border-none px-[30px] p-2 rounded"
                      onClick={handleEdit}
                      disabled={editLoading ? true : false}
                    >
                      {editLoading ? "Please wait..." : "Edit request"}
                    </button>
                  </Form>
                </div>
              }
            />
          </Card>
        </div>
      </div>
      <ToastContainer />
    </StyledContainer>
  );
};

export default RepairRequestDetails;

const StyledContainer = styled.div`
  .ant-card-meta {
    align-items: center !important;
  }

  .metaDescription {
    a {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
  }

  .userInfo {
    &__back {
      display: flex;
      justify-content: flex-end;
      button {
        display: flex;
        gap: 0.2rem;
        align-items: center;
        transition: all 0.3s;
      }
      button :hover {
        gap: 0.5rem;
      }
    }
  }

  .infoTab {
    margin-top: 1rem;
    padding: 0 0.5rem;
  }
  . {
    margin-top: 5px;
  }
`;
