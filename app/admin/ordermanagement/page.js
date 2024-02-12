'use client'

import AdminNav from "@/components/AdminNav"
import OrderTable from "@/components/OrderTable"
import { useState, useEffect } from "react";
import { PageHeader, Tabs, Button } from "antd";
import styled from "styled-components";
import AdminLayout from "@/app/adminlayout";

const { TabPane } = Tabs;

const OrderManagement = (props) => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch("/api/orders/search?name=Iphones");
      const data = await res.json();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  console.log(orders);

  return (
    <AdminLayout>
        <div className="my-[100px]">
        <div className="mx-[50px]">
        <PageHeader title="Orders" />

        <StyledDiv {...props}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="IPhones" key="1">
              <OrderTable
                data={orders.data}
                loading={orders.loading}
              />
            </TabPane>
            <TabPane tab="IWatches" key="2">
              <OrderTable
                data={orders.data}
                loading={orders.loading}
              />
            </TabPane>
            <TabPane tab="IPads" key="3">
              <OrderTable
                data={orders.data}
                loading={orders.loading}
              />
            </TabPane>{" "}
            <TabPane tab="Mac" key="4">
              <OrderTable
                data={orders.data}
                loading={orders.loading}
              />
            </TabPane>
            <TabPane tab="Airpods" key="5">
              <OrderTable
                data={orders.data}
                loading={orders.loading}
              />
            </TabPane>
          </Tabs>
        </StyledDiv>
      </div>
        </div>
    </AdminLayout>
  )
}

export default OrderManagement

const StyledDiv = styled.div`
  margin-orders: 1rem;
  padding: 0 0.5rem;
`;
