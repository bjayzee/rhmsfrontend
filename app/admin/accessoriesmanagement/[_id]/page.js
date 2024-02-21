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

export default function AccessoryDetails({ params: { _id } }) {


  const [accessory, setAccessory] = useState({});

  useEffect(() => {
    const fetchaccessory = async () => {
      const res = await fetch(`/api/accessories/${_id}`);
      const data = await res.json();
      setAccessory(data);
    };

    fetchaccessory();
  }, []);


  return (
    <div className='my-[100px] mx-[50px]'>
      <Card>
        <Card.Header className="flex items-center justify-between">
          <div className=' text-2xl font-bold'>Accessory Details</div>
          <div>
            <div className='userInfo__back  '>
             
                <Link className='no-underline flex items-center gap-[5px]' href="/admin/accessoriesmanagement">
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
                      <strong className='mr-[65px]'>Name:</strong> {accessory?.data?.name}
                    </td>
                  </tr>
          
                     <tr>
                    <td>
                      <strong className='mr-[65px]'>Supplier:</strong> {accessory?.data?.supplier}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <strong className='mr-[65px]'>Featured:</strong>{' '}
                      {accessory?.data?.featured === true ? 'Yes': 'No'}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong className='mr-[65px]'>Price:</strong>{' '}
                      ₦{accessory?.data?.price}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong className='mr-[65px]'>Quantity in-stock:</strong>{' '}
                      {accessory?.data?.numInStock}
                    </td>
                  </tr>
                     <tr>
                    <td>
                      <strong className='mr-[65px]'>IMEI SN:</strong> {accessory?.data?.IMEI_SN}
                    </td>
                  </tr>
          
                  <tr>
                    <td>
                      <strong className='mr-[65px]'>Category:</strong>{' '}
                      {accessory?.data?.category}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong className='mr-[65px]'>Created at:</strong>{' '}
                      {moment(accessory?.data?.createdAt).format('DD MMM YYYY')}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col>
              <h2>Thumbnail</h2>
              <img
                src={accessory?.data?.image}
                alt={accessory?.data?.name}
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
