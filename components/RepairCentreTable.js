"use client";

import { Avatar, Button, Table } from "antd";
import moment from "moment";
import React, { useRef, useState } from "react";
import { getColumnSearchProps } from "@/components/TableColSearch";
import EditRepairCentre from "./EditRepairCentre";

const RepairCentreTable = ({ data, loading, handleDelete, fetchRepairCentres }) => {
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
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps({
        dataIndex: "address",
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
      title: "Email",
      dataIndex: "email",
      key: "email",
      ...getColumnSearchProps({
        dataIndex: "email",
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
        title: "Phone Number(s)",
        dataIndex: "phoneNumbers",
        key: "phoneNumbers",
        render: (phoneNumbers) => {
          return phoneNumbers?.map((phoneNumber, i) => (
            <span key={i} className="pr-[10px]">
              {phoneNumber}
            </span>
          ));
        },
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
            <EditRepairCentre repairCentre={singleData} fetchRepairCentres={fetchRepairCentres}
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

export default RepairCentreTable;
