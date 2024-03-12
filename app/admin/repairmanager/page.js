"use client";
import AdminMetrics from "@/components/AdminMetrics";
import { useState, useEffect } from "react";
import { PageHeader, Tabs, Button } from "antd";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { notification } from "antd";
import axios from "axios";
import RepairCentreTable from "@/components/RepairCentreTable";
import CreateRepairCentre from "@/components/createRepairCenter";
import RepairItemTable from "@/components/RepairItemTable";
import CreateRepairItem from "@/components/createRepairItem";
import RepairRequestTable from "@/components/RepairRequestTable";

const { TabPane } = Tabs;
const RepairManager = (props) => {
  const [repairItems, setRepairItems] = useState([]);
  const [repairCentres, setRepairCentres] = useState([]);
  const [repairRequests, setRepairRequests] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchRepairItems = async () => {
    const res = await fetch("/api/repair-items");
    const data = await res.json();
    setRepairItems(data);
  };

  useEffect(() => {
    fetchRepairItems();
  }, []);


  const fetchRepairCentres = async () => {
    const res = await fetch("/api/repair-center");
    const data = await res.json();
    setRepairCentres(data);
  };

  useEffect(() => {
    fetchRepairCentres();
  }, []);

  const fetchRepairRequests = async () => {
    const res = await fetch("/api/repair");
    const data = await res.json();
    setRepairRequests(data);
  };

  useEffect(() => {
    fetchRepairRequests();
  }, []);

  console.log(repairRequests)
  const handleDeleteRepairCentre = async ({ _id }) => {
    try {
      const response = await axios.delete(`/api/repair-center/?id=${_id}`);
      notification.success({
        message: "repair centre deleted successfully",
      });
      fetchRepairCentres();
    } catch (err) {
      console.error("Error deleting:", err);
      notification.error({
        message: "Error deleting repair centre, please try again",
      });
    }
  };

  const handleDeleteRepairItem = async ({ _id }) => {
    try {
      const response = await axios.delete(`/api/repair-items/?id=${_id}`);
      notification.success({
        message: "repair item deleted successfully",
      });
      fetchRepairItems();
    } catch (err) {
      console.error("Error deleting:", err);
      notification.error({
        message: "Error deleting repair item, please try again",
      });
    }
  };

  return (
    <div className="my-[50px] md:my-[100px] mx-[20px] md:mx-[50px]">
      <PageHeader
        title="Repair Manager"
        extra={[
          <Button
            key="CreateRepairItem"
            style={{ color: "#187EB4", border: "1px solid #187EB4" }}
          >
            <CreateRepairItem fetchRepairItems={fetchRepairItems} />
          </Button>,
          <Button
            key="CreateRepairCentre"
            style={{ color: "#187EB4", border: "1px solid #187EB4" }}
          >
            <CreateRepairCentre fetchRepairCentres={fetchRepairCentres} />
          </Button>,
        ]}
      />
      <StyledDiv {...props}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Repair items" key="1">
            <RepairItemTable
              data={repairItems?.data}
              loading={loading}
              handleDelete={handleDeleteRepairItem}
              fetchRepairItems={fetchRepairItems}
            />
          </TabPane>
          <TabPane tab="Repair centres" key="2">
            <RepairCentreTable
              data={repairCentres?.data}
              loading={loading}
              handleDelete={handleDeleteRepairCentre}
              fetchRepairCentres={fetchRepairCentres}
            />
          </TabPane>

        <TabPane tab="Repair requests" key="3">
           <RepairRequestTable  data={repairRequests?.data}
              loading={loading}
              fetchRepairRequests={fetchRepairRequests}/>
          </TabPane>
        </Tabs>
      </StyledDiv>
      <ToastContainer />
    </div>
  );
};

export default RepairManager;

const StyledDiv = styled.div`
  margin-products: 1rem;
  padding: 0 0.5rem;
`;
