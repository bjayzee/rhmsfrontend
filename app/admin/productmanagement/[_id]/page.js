'use client'
import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Link from 'next/link'
import moment from 'moment'
import { BsArrowLeft } from 'react-icons/bs'

export default function ProductDetails({ params: { _id } }) {


  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProduct = async () => {
      const res = await fetch(`/api/products/${_id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, []);

  console.log(product.data)

  return (
    <div className='my-[100px] mx-[50px]'>
      <Card>
        <Card.Header className="flex items-center justify-between">
          <div className=' text-2xl font-bold'>Product Details</div>
          <div>
            <div className='userInfo__back  '>
             
                <Link className='no-underline flex items-center gap-[5px]' href="/admin/productmanagement">
                <BsArrowLeft /> <div>Back</div>
                </Link>
               
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <Table striped bordered hover>
                <tbody>
                   <tr>
                    <td>
                      <strong className='mr-[65px]'>Description:</strong> {product?.data?.description}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong className='mr-[65px]'>Product type:</strong> {product?.data?.productType}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong className='mr-[65px]'>Name:</strong> {product?.data?.name}
                    </td>
                  </tr>
                     <tr>
                    <td>
                      <strong className='mr-[65px]'>Subcategory:</strong> {product?.data?.subCategory}
                    </td>
                  </tr>
                     <tr>
                    <td>
                      <strong className='mr-[65px]'>Supplier:</strong> {product?.data?.supplier}
                    </td>
                  </tr>

                     <tr>
                    <td>
                      <strong className='mr-[65px]'>Tag number:</strong> {product?.data?.tagNumber}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong className='mr-[65px]'>Cost Price:</strong>{' '}
                      ₦{product?.data?.costPrice}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong className='mr-[65px]'>Price:</strong>{' '}
                      ₦{product?.data?.price}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong className='mr-[65px]'>Quantity in-stock:</strong>{' '}
                      {product?.data?.numInStock}
                    </td>
                  </tr>
                     <tr>
                    <td>
                      <strong className='mr-[65px]'>IMEI SN:</strong> {product?.data?.IMEI_SN}
                    </td>
                  </tr>
                  {/* <tr>
                    <td>
                      <strong className='mr-[65px]'>Product size:</strong>{' '}
                      {product?.data?.product_size}
                    </td>
                  </tr> */}
                  <tr>
                    <td>
                      <strong className='mr-[65px]'>Category:</strong>{' '}
                      {product?.data?.category?.name}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong className='mr-[65px]'>Created at:</strong>{' '}
                      {moment(product?.data?.createdAt).format('DD MMM YYYY')}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col>
              <h2>Thumbnail</h2>
              <img
                src={product?.data?.thumbnail}
                alt={product?.data?.name}
                width='{40}'
                height='{40}'
                key='{key}'
              />
            </Col>
          </Row>

        </Card.Body>
      </Card>
    </div>
  )
}
