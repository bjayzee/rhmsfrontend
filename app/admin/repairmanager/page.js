"use client";
import AdminMetrics from "@/components/AdminMetrics";
import { useState, useEffect } from "react";
import { PageHeader, Tabs, Button } from "antd";
import styled from "styled-components";
import ProductTable from "@/components/ProductTable";
import CreateProduct from "@/components/CreateProduct";
import { ToastContainer, toast } from "react-toastify";
import { notification } from "antd";
import axios from "axios";
import RepairCentreTable from "@/components/RepairCentreTable";

const { TabPane } = Tabs;
const RepairManager = (props) => {
  const [repairItems, setRepairItems] = useState([]);
    const [repairCentres, setRepairCentres] = useState([]);
  
    const [loading, setLoading] = useState(false);
  
    const fetchRepairItems = async () => {
      const res = await fetch("/api/repair-items");
      const data = await res.json();
      setRepairItems(data);
    };
  
    useEffect(() => {
      fetchRepairItems();
    }, []);
  
    console.log(repairItems)
  
    const fetchRepairCentres = async () => {
      const res = await fetch("/api/repair-center");
      const data = await res.json();
      setRepairCentres(data);
    };
  
    useEffect(() => {
      fetchRepairCentres();
    }, []);
  
    console.log(repairCentres)

    const handleDelete = async ({_id}) => {
      try {
        const response = await axios.delete(
          `/api/products/?id=${_id}`
        );
        notification.success({
          message: "product deleted successfully",
        });
        fetchProducts();
      } catch (err) {
        console.error("Error deleting:", err);
        notification.error({
          message: "Error deleting product, please try again",
        });
      }
    };

  return (
    <div className="my-[100px] mx-[50px]">
   
        <PageHeader
          title="Repair Manager"
          // extra={[
          //   <Button
          //     key="CreateProduct"
          //     style={{ color: "#187EB4", border: "1px solid #187EB4" }}
          //   >
          //     <CreateProduct />
          //   </Button>,
          // ]}
        />
  <StyledDiv {...props}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Repair items" key="1">
              {/* <ProductTable
                data={iphone}
                loading={loading}
                handleDelete={handleDelete}
              /> */}
            </TabPane>
            <TabPane tab="Repair centres" key="2">
              <RepairCentreTable
                data={repairCentres?.data}
                loading={loading}
                handleDelete={handleDelete}
                fetchRepairCentres={fetchRepairCentres}
              />
            </TabPane>
   
          </Tabs>
        </StyledDiv>      
     <ToastContainer/>
      
    </div>
  );
};

export default RepairManager;

const StyledDiv = styled.div`
  margin-products: 1rem;
  padding: 0 0.5rem;
`;

