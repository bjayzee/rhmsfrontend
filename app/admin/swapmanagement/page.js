"use client";

import { useState, useEffect } from "react";
import { PageHeader, Button } from "antd";
import CreateSwapItem from "@/components/CreateSwapItem";
import SwapManagementTable from "@/components/SwapManagementTable";

const SwapManagement = () => {
  const [swapItems, setSwapItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSwapItems = async () => {
    setLoading(true);
    const res = await fetch("/api/old-phones");
    const data = await res.json();
    setSwapItems(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSwapItems();
  }, []);

console.log(swapItems.data)
  const handleDelete = async ({_id}) => {
    try {
      const response = await axios.delete(
        `/api/accessories/?id=${_id}`
      );
      notification.success({
        message: "swap item deleted successfully",
      });
      fetchAccessories();
    } catch (err) {
      console.error("Error deleting:", err);
      notification.error({
        message: "Error deleting swap item, please try again",
      });
    }
  };

  return (
    <div className="mx-[50px] my-[100px]">
      <PageHeader
        title="Swap Management"
        extra={[
          <Button
            key="CreateSwapItems"
            style={{ color: "#187EB4", border: "1px solid #187EB4" }}
          >
            <CreateSwapItem fetchSwapItems={fetchSwapItems}/>
          </Button>,
        ]}
      />

      <SwapManagementTable
        data={swapItems?.data}
        loading={loading}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default SwapManagement;
