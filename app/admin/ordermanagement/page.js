"use client";

import OrderTable from "@/components/OrderTable";
import { useState, useEffect } from "react";
import { PageHeader, Tabs, Button } from "antd";


const OrderManagement = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await fetch("/api/order");
    const data = await res.json();
    setOrders(data);
  };

  useEffect(() => {

    fetchOrders();
  }, []);

  return (
    <div className="my-[100px]">
      <div className="mx-[50px]">
        <PageHeader title="Orders" />

       {orders?.data && (<OrderTable data={orders?.data} />)} 
      </div>
    </div>
  );
};

export default OrderManagement;

