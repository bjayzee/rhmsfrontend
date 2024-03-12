"use client";

import OrderTable from "@/components/OrderTable";
import { useState, useEffect } from "react";
import { PageHeader } from "antd";


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
      <div className="my-[50px] md:my-[100px] mx-[20px] md:mx-[50px]">
        <div>
          <PageHeader title="Orders" />
          <OrderTable data={orders?.data} loading={orders?.loading} />

        </div>
      </div>
  );
};

export default OrderManagement;

