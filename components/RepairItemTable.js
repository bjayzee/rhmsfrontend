"use client";

import { Avatar, Button, Table } from "antd";
import moment from "moment";
import React, { useRef, useState } from "react";
import { getColumnSearchProps } from "@/components/TableColSearch";
import EditRepairCentre from "./EditRepairCentre";

const RepairItemTable = ({
  data,
  loading,
  handleDelete,
  fetchRepairCentres,
}) => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...getColumnSearchProps({
        dataIndex: "name",
        handleReset,
        searchInput,
        handleSearch,
        setSearchedColumn,
        searchText,
        setSearchText,
        searchedColumn,
      }),
    },

    {
      title: "Screen Replacement",
      dataIndex: "screenReplacement",
      key: "screenReplacement",
      render: (screenReplacement) => (
        <div className="flex gap-[15px]">
          <span>Economy: {screenReplacement.economyCost}</span>
          <span>Premium: {screenReplacement.premiumCost}</span>
        </div>
      ),
    },

    {
        title: "Back glass Replacement",
        dataIndex: "backGlassReplacement",
        key: "backGlassReplacement",
        render: (backGlassReplacement) => (
          <div className="flex gap-[15px]">
            <span>Economy: {backGlassReplacement.economyCost}</span>
            <span>Premium: {backGlassReplacement.premiumCost}</span>
          </div>
        ),
      },

      {
        title: "Battery Replacement",
        dataIndex: "batteryReplacement",
        key: "batteryReplacement",
        render: (batteryReplacement) => (
          <div className="flex gap-[15px]">
            <span>Economy: {batteryReplacement.economyCost}</span>
            <span>Premium: {batteryReplacement.premiumCost}</span>
          </div>
        ),
      },

    {
      title: "Date Created",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => (
        <span style={{ whiteSpace: "nowrap" }}>
          {" "}
          {moment(createdAt).format("DD MMM YYYY")}
        </span>
      ),
    },

    {
      title: "Actions",
      key: "id",
      align: "center",
      render: (singleData) => (
        <>
          <Button style={{ marginRight: "5px" }} title="Edit">
            <EditRepairCentre
              repairCentre={singleData}
              fetchRepairCentres={fetchRepairCentres}
            />
          </Button>
          <Button
            danger
            onClick={() => handleDelete(singleData)}
            title="Delete repair centre"
          >
            delete
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        loading={loading}
        pagination={data?.length > 10 ? true : false}
        dataSource={data}
        rowKey="_id"
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default RepairItemTable;
