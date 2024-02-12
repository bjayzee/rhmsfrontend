'use client'

import { Avatar, Button, Table } from 'antd'
import moment from 'moment'
import React, { useRef, useState } from 'react'
import Link from "next/link";
import { UserOutlined } from '@ant-design/icons'
import { getColumnSearchProps } from '@/components/TableColSearch'
import EditProduct from './EditProduct';

const ProductTable = ({ data, loading, handleDelete }) => {
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  const searchInput = useRef(null)

  console.log(data)

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
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps({
        dataIndex: 'name',
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
      render: (price) => `₦${Number(price).toLocaleString()}` || 'Null',
    },

    {
        title: 'Number',
        dataIndex: 'numInStock',
        key: 'numInStock',
        ...getColumnSearchProps({
          dataIndex: 'numInStock',
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
      title: 'Date Created',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt) => (
        <span style={{ whiteSpace: 'nowrap' }}> {moment(createdAt).format('DD MMM YYYY')}</span>
      ),
    },
    {
      title: 'Image',
      key: 'id',
      align: 'center',
      render: (singleData) => (
        <div>
          {singleData?.thumbnail ? (
            <img
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
              src={singleData?.thumbnail}
              height={60}
              width={60}
              alt='avatar'
            />
          ) : (
            <Avatar style={{ backgroundColor: '#3f8bcaa1' }} icon={<UserOutlined />} size={50} />
          )}
        </div>
      ),
    },
    {
      title: 'Actions',
      key: 'id',
      align: 'center',
      render: (singleData) => (
        <>
          <Button style={{ marginRight: '5px' }} title='View product details'>
            <Link href={`/admin/product/details/${singleData?._id}}`}>{'View'}</Link>
          </Button>
          <Button style={{ marginRight: '5px' }} title='Edit'>
            <EditProduct/>
          </Button>
          <Button
            danger
            onClick={() => handleDelete(singleData)}
            title='Delete product'
          >
            delete
          </Button>
        </>
      ),
    },
  ]

  return (
    <div>
     <Table
        columns={columns}
        loading={loading}
        pagination={data?.length > 10 ? true : false}
        dataSource={data}
        rowKey='id'
        scroll={{ x: 'max-content' }}
      /> 
    </div>
  )
}

export default ProductTable
