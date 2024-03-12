"use client";

import { useState, useEffect } from "react";
import { PageHeader, Tabs, Button } from "antd";
import styled from "styled-components";
import AccessoriesTable from "@/components/AccessoriesTable";
import CreateAccessory from "@/components/CreateAccessory";
import { ToastContainer, toast } from "react-toastify";
import { notification } from "antd";
import axios from "axios";


const { TabPane } = Tabs;

const AccessoriesManagement = (props) => {
  const [accessories, setAccessories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAccessories = async () => {
    const res = await fetch("/api/accessories");
    const data = await res.json();
    setAccessories(data);
  };

  useEffect(() => {
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

  const handleDelete = async ({_id}) => {
    try {
      const response = await axios.delete(
        `/api/accessories/?id=${_id}`
      );
      notification.success({
        message: "accessory deleted successfully",
      });
      fetchAccessories();
    } catch (err) {
      console.error("Error deleting:", err);
      notification.error({
        message: "Error deleting accessory, please try again",
      });
    }
  };

  return (
    <div className="my-[50px] md:my-[100px] mx-[20px] md:mx-[50px]">
      <div>
        <PageHeader
          title="Accessories"
          extra={[
            <Button
              key="CreateAccessory"
              style={{ color: "#187EB4", border: "1px solid #187EB4" }}
            >
              <CreateAccessory />
            </Button>,
          ]}
        />
        <StyledDiv {...props}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="IPhones" key="1">
              <AccessoriesTable
                data={iphone}
                loading={loading}
                handleDelete={handleDelete}
                fetchAccessories={fetchAccessories}
              />
            </TabPane>
            <TabPane tab="IWatches" key="2">
              <AccessoriesTable
                data={iwatch}
                loading={loading}
                handleDelete={handleDelete}
                fetchAccessories={fetchAccessories}

              />
            </TabPane>
            <TabPane tab="IPads" key="3">
              <AccessoriesTable
                data={ipad}
                loading={loading}
                handleDelete={handleDelete}
                fetchAccessories={fetchAccessories}

              />
            </TabPane>{" "}
            <TabPane tab="Mac" key="4">
              <AccessoriesTable
                data={mac}
                loading={loading}
                handleDelete={handleDelete}
                fetchAccessories={fetchAccessories}

              />
            </TabPane>
            <TabPane tab="Airpods" key="5">
              <AccessoriesTable
                data={airpods}
                loading={loading}
                handleDelete={handleDelete}
                fetchAccessories={fetchAccessories}

              />
            </TabPane>
          </Tabs>
        </StyledDiv>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AccessoriesManagement;

const StyledDiv = styled.div`
  margin-orders: 1rem;
  padding: 0 0.5rem;
`;
