"use client";

import { useState, useEffect } from "react";
import { PageHeader, Button } from "antd";
import CreateCategory from "@/components/CreateCategory";
import CategoryTable from "@/components/CategoryTable";

const CategoryManagement = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchCategories = async () => {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);
      setLoading(false);
    };

    fetchCategories();
  }, [categories?.data?.length]);

  return (
      <div className="mx-[50px] my-[100px]">
        <PageHeader
          title="Categories"
          extra={[
            <Button
              key="CreateProduct"
              style={{ color: "#187EB4", border: "1px solid #187EB4" }}
            >
              <CreateCategory />
            </Button>,
          ]}
        />

        <CategoryTable data={categories.data} loading={loading} />
      </div>
  );
};

export default CategoryManagement;
