"use client";
import React, { useEffect, useState } from "react";
import { Button } from "antd";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Link from "next/link";
import moment from "moment";
import { BsArrowLeft } from "react-icons/bs";

export default function OrderDetails({ params: { _id } }) {
  const [order, setorder] = useState({});

  useEffect(() => {
    const fetchorder = async () => {
      const res = await fetch(`/api/order/${_id}`);
      const data = await res.json();
      setorder(data);
    };

    fetchorder();
  }, []);

  console.log(order.data);

  return (
    <div className="my-[100px] mx-[50px]">
      <Card>
        <Card.Header className="flex items-center justify-between">
          <div className=" text-2xl font-bold">order Details</div>
          <div>
            <div className="userInfo__back  ">
              <Link
                className="no-underline flex items-center gap-[5px]"
                href="/admin/ordermanagement"
              >
                <BsArrowLeft /> <div>Back</div>
              </Link>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <tbody>
            
              <tr>
                <td>
                  <strong className="mr-[65px]">Customer name:</strong>{" "}
                  {order?.data?.customerInformation?.firstName}{" "}
                  {order?.data?.customerInformation?.lastName}
                </td>
              </tr>
              <tr>
                <td>
                  <strong className="mr-[65px]">Payment status:</strong>{" "}
                  {order?.data?.paymentStatus === true ? "Paid" : "Unpaid"}
                </td>
              </tr>
              <tr>
                <td>
                  <strong className="mr-[65px]">Status:</strong>{" "}
                  {order?.data?.status}
                </td>
              </tr>

              <tr>
                <td>
                  <strong className="mr-[65px]">Phone number:</strong>{" "}
                  {order?.data?.phoneNumber}
                </td>
              </tr>
              <tr>
                <td>
                  <strong className="mr-[65px]">Total Price:</strong> ₦
                  {order?.data?.totalPrice}
                </td>
              </tr>
              <tr>
                <td>
                  <strong className="mr-[65px]">Delivery fee:</strong> ₦
                  {order?.data?.deliveryFee}
                </td>
              </tr>
              <tr>
                <td>
                  <strong className="mr-[65px]">Sales terms:</strong>{" "}
                  {order?.data?.salesTerm}
                </td>
              </tr>
              <tr>
                <td>
                  <strong className="mr-[65px]">Shipping address:</strong>{" "}
                  {order?.data?.shippingAddress?.shippingLocation}
                </td>
              </tr>

              <tr>
                <td>
                  <strong className="mr-[65px]">How did you find us:</strong>{" "}
                  {order?.data?.howDidYouFindUs}
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}
