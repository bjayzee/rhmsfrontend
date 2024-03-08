"use client";

import { Avatar, Button, Table } from "antd";
import moment from "moment";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { getColumnSearchProps } from "@/components/TableColSearch";
import { NumericFormat } from "react-number-format";

const OrderTable = ({ data }) => {
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
      title: "Customer",
      dataIndex: "customerInformation",
      key: "customerInformation",
      ...getColumnSearchProps({
        dataIndex: "customerInformation",
        handleReset,
        searchInput,
        handleSearch,
        setSearchedColumn,
        searchText,
        setSearchText,
        searchedColumn,
      }),
      render: (customerInformation) => (
        <span style={{ whiteSpace: "nowrap" }}>
          {customerInformation.firstName} {customerInformation.lastName}
        </span>
      ),
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
      title: "Payment status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (paymentStatus) => (
        <span style={{ whiteSpace: "nowrap" }}>
         {paymentStatus === true ? 'Paid' : 'Unpaid'}
        </span>
      ),


    },

    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (totalPrice) => (
        <span style={{ whiteSpace: "nowrap" }}>
          <NumericFormat
            value={totalPrice}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₦"}
          />
        </span>
      ),
    },

    {
      title: "Delivery Fee",
      dataIndex: "deliveryFee",
      key: "deliveryFee",
      render: (deliveryFee) => (
        <span style={{ whiteSpace: "nowrap" }}>
          <NumericFormat
            value={deliveryFee}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₦"}
          />
        </span>
      ),
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
              href={`/admin/ordermanagement/${singleData?._id}`}
            >
              {"View"}
            </Link>
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        pagination={data?.length > 10 ? true : false}
        dataSource={data}
        rowKey="id"
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default OrderTable;
