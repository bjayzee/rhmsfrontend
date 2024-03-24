"use client";
import AdminMetrics from "@/components/AdminMetrics";
import { useState, useEffect } from "react";
import { PageHeader, Tabs, Button } from "antd";
import styled from "styled-components";
import ProductTable from "@/components/ProductTable";
import CreateProduct from "@/components/CreateProduct";
import { ToastContainer, toast } from "react-toastify";
import { notification } from "antd";
import axios from "axios";

const { TabPane } = Tabs;
const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products)

  const iphone = products?.data?.filter(
    (product) => product?.category?.name == "iPhone"
  );
  const ipad = products?.data?.filter(
    (product) => product?.category?.name == "iPad"
  );
  const mac = products?.data?.filter(
    (product) => product?.category?.name == "MacBook"
  );
  const iwatch = products?.data?.filter(
    (product) => product?.category?.name == "iWatch"
  );
  const airpods = products?.data?.filter(
    (product) => product?.category?.name == "Airpods"
  );

  const handleDelete = async ({_id}) => {
    try {
      const response = await axios.delete(
        `/api/products/?id=${_id}`
      );
      notification.success({
        message: "product deleted successfully",
      });
      fetchProducts();
    } catch (err) {
      console.error("Error deleting:", err);
      notification.error({
        message: "Error deleting product, please try again",
      });
    }
  };

  return (
    <div  className="my-[50px] md:my-[100px] mx-[20px] md:mx-[50px]">
      <div className="mb-[30px]">
        <AdminMetrics products={products?.data} />
      </div>
      <div>
        <PageHeader
          title="Products"
          extra={[
            <Button
              key="CreateProduct"
              style={{ color: "#187EB4", border: "1px solid #187EB4" }}
            >
              <CreateProduct />
            </Button>,
          ]}
        />
  {/* <StyledDiv {...props}> */}
          <Tabs defaultActiveKey="1">
            <TabPane tab="IPhones" key="1">
              <ProductTable
                data={iphone}
                loading={loading}
                handleDelete={handleDelete}
              />
            </TabPane>
            <TabPane tab="IWatches" key="2">
              <ProductTable
                data={iwatch}
                loading={loading}
                handleDelete={handleDelete}
              />
            </TabPane>
            <TabPane tab="IPads" key="3">
              <ProductTable
                data={ipad}
                loading={loading}
                handleDelete={handleDelete}
              />
            </TabPane>{" "}
            <TabPane tab="Mac" key="4">
              <ProductTable
                data={mac}
                loading={loading}
                handleDelete={handleDelete}
              />
            </TabPane>
            <TabPane tab="Airpods" key="5">
              <ProductTable
                data={airpods}
                loading={loading}
                handleDelete={handleDelete}
              />
            </TabPane>
          </Tabs>
        {/* </StyledDiv>       */}
     <ToastContainer/>
      </div>
    </div>
  );
};

export default ProductManagement;

// const StyledDiv = styled.div`
//   margin-products: 1rem;
//   padding: 0 0.5rem;
// `;