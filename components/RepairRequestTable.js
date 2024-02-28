"use client";

import { Avatar, Button, Table } from "antd";
import moment from "moment";
import React, { useRef, useState } from "react";
import { getColumnSearchProps } from "@/components/TableColSearch";
import EditRepairItem from "./EditRepairItem";
import Link from "next/link";

const RepairRequestTable = ({
  data,
  loading,
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
        title: "Repair Item",
        dataIndex: "repairItem",
        key: "repairItem",
        ...getColumnSearchProps({
          dataIndex: "repairItem",
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
        title: "Status",
        dataIndex: "status",
        key: "status",
        ...getColumnSearchProps({
          dataIndex: "status",
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
         <Link
              className="no-underline"
              href={`/admin/repairmanager/${singleData?._id}`}
            >
              {"View and Edit"}
            </Link>
          </Button>
  
          {/* <Button
            danger
            onClick={() => handleDelete(singleData)}
            title="Delete repair item"
          >
            delete
          </Button> */}
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

export default RepairRequestTable;
