"use client";

import { useState, useEffect } from "react";
import { PageHeader, Tabs, Button } from "antd";
import styled from "styled-components";
import AccessoriesTable from "@/components/AccessoriesTable";
import CreateAccessory from "@/components/CreateAccessory";

const { TabPane } = Tabs;

const AccessoriesManagement = (props) => {
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAccessories = async () => {
      const res = await fetch("/api/accessories");
      const data = await res.json();
      setAccessories(data);
    };

    fetchAccessories();
  }, []);

  const iphone = accessories?.data?.filter(
    (accessory) => accessory?.category == "iphone"
  );
  const ipad = accessories?.data?.filter(
    (accessory) => accessory?.category == "ipad"
  );
  const mac = accessories?.data?.filter(
    (accessory) => accessory?.category == "mac"
  );
  const iwatch = accessories?.data?.filter(
    (accessory) => accessory?.category == "iwatch"
  );
  const airpods = accessories?.data?.filter(
    (accessory) => accessory?.category == "airpods"
  );


  const handleDelete = () => {};

  return (
    <div className="my-[100px]">
      <div className="mx-[50px]">
        <PageHeader title="Accessories"   extra={[
            <Button
              key="CreateAccessory"
              style={{ color: "#187EB4", border: "1px solid #187EB4" }}
            >
             <CreateAccessory/>
            </Button>,
          ]} />

        <StyledDiv {...props}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="IPhones" key="1">
              <AccessoriesTable
                data={iphone}
                loading={loading}
                handleDelete={handleDelete}
              />
            </TabPane>
            <TabPane tab="IWatches" key="2">
              <AccessoriesTable
                data={iwatch}
                loading={loading}
                handleDelete={handleDelete}
              />
            </TabPane>
            <TabPane tab="IPads" key="3">
              <AccessoriesTable
                data={ipad}
                loading={loading}
                handleDelete={handleDelete}
              />
            </TabPane>{" "}
            <TabPane tab="Mac" key="4">
              <AccessoriesTable
                data={mac}
                loading={loading}
                handleDelete={handleDelete}
              />
            </TabPane>
            <TabPane tab="Airpods" key="5">
              <AccessoriesTable
                data={airpods}
                loading={loading}
                handleDelete={handleDelete}
              />
            </TabPane>
          </Tabs>
        </StyledDiv>
      </div>
    </div>
  );
};

export default AccessoriesManagement;

const StyledDiv = styled.div`
  margin-orders: 1rem;
  padding: 0 0.5rem;
`;
