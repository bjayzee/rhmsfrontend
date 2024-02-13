'use client'

import { Avatar, Button, Table } from 'antd'
import moment from 'moment'
import React, { useRef, useState } from 'react'
import Link from "next/link";
import { UserOutlined } from '@ant-design/icons'
import { getColumnSearchProps } from '@/components/TableColSearch'

const OrderTable = ({ data, loading }) => {
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef(null)

  

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }

  const handleReset = (clearFilters) => {
    clearFilters()
    setSearchText('')
  }

  const columns = [
    {
        title: 'Order ID',
        dataIndex: 'order_id',
        key: 'order_id',
        ...getColumnSearchProps({
          dataIndex: 'order_id',
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
        title: 'Recipient name',
        dataIndex: 'recipient_name',
        key: 'recipient_name',
        ...getColumnSearchProps({
          dataIndex: 'recipient_name',
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
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        ...getColumnSearchProps({
          dataIndex: 'status',
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
        title: 'Payment type',
        dataIndex: 'payment_type',
        key: 'payment_type',
        ...getColumnSearchProps({
          dataIndex: 'payment_type',
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
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (price) => (
          <span style={{ whiteSpace: 'nowrap' }}>
            <NumericFormat
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₦'}
            />
          </span>
        ),
      },
  
      {
        title: 'Total order amount',
        dataIndex: 'total_price',
        key: 'total_price',
        render: (total_price) => (
          <span style={{ whiteSpace: 'nowrap' }}>
            <NumericFormat
              value={total_price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₦'}
            />
          </span>
        ),
      },
  
      {
        title: 'Delivery Fee',
        dataIndex: 'delivery_fee',
        key: 'delivery_fee',
        render: (delivery_fee) => (
          <span style={{ whiteSpace: 'nowrap' }}>
            <NumericFormat
              value={delivery_fee}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₦'}
            />
          </span>
        ),
      },
  
      
  
      {
        title: 'Tax',
        dataIndex: 'tax',
        key: 'tax',
        render: (tax) => (
          <span style={{ whiteSpace: 'nowrap' }}>
            <NumericFormat
              value={tax}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'₦'}
            />
          </span>
        ),
      },
  
    
  
      {
        title: 'Created At',
        dataIndex: 'created_at',
        key: 'created_at',
        ...getColumnSearchProps({
          dataIndex: 'created_at',
          handleReset,
          searchInput,
          handleSearch,
          setSearchedColumn,
          searchText,
          setSearchText,
          searchedColumn,
        }),
        render: (created_at) => (
          <span style={{ whiteSpace: 'nowrap' }}> {moment(created_at).format('DD MMM YYYY')}</span>
        ),
      },
    // {
    //   title: 'Actions',
    //   key: 'id',
    //   align: 'center',
    //   render: (singleData) => (
    //     <>
    //       <Button style={{ marginRight: '5px' }} title='View product details'>
    //         <Link to={`/ordermanagement/details/${singleData?.id}/${singleData?.sku}`}>{'View'}</Link>
    //       </Button>
    //     
    // 
    //     </>
    //   ),
    // },
  ]

  return (
    <div>
     <Table
        columns={columns}
        loading={loading}
        pagination={data?.length > 10 ? true : false}
        dataSource={data?.data}
        rowKey='id'
        scroll={{ x: 'max-content' }}
      /> 
    </div>
  )
}

export default OrderTable