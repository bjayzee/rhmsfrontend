"use client";

import { Avatar, Button, Table } from "antd";
import moment from "moment";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { getColumnSearchProps } from "@/components/TableColSearch";
import EditAccessory from "./EditAccessory";

const SwapManagementTable = ({ data, loading, handleDelete }) => {
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
      title: "Base storage",
      dataIndex: "baseStorage",
      key: "baseStorage",
      ...getColumnSearchProps({
        dataIndex: "baseStorage",
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
        title: "Lock status",
        dataIndex: "lockStatus",
        key: "lockStatus",
        ...getColumnSearchProps({
          dataIndex: "lockStatus",
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
      title: "Storage price",
      dataIndex: "storagePrice",
      key: "storagePrice",
      render: (storagePrice) => `₦${Number(storagePrice).toLocaleString()}` || "Null",
    },




    {
      title: "Actions",
      key: "id",
      align: "center",
      render: (singleData) => (
        <>
          <Button style={{ marginRight: "5px" }} title="View product details">
            <Link
              className="no-underline"
              href={`/admin/swapmanagement/${singleData?._id}`}
            >
              {"View"}
            </Link>
          </Button>
          {/* <Button style={{ marginRight: "5px" }} title="Edit">
            <EditAccessory data={singleData} fetchAccessories={fetchAccessories}
 />
          </Button> */}
          <Button
            danger
            onClick={() => handleDelete(singleData)}
            title="Delete swap item"
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

export default SwapManagementTable;
