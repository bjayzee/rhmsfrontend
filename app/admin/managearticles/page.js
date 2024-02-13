"use client";

import { useState, useEffect } from "react";
import { PageHeader, Tabs, Button } from "antd";
import CreateArticle from "@/components/CreateArticle";

const ManageArticles = () => {
  const posts = [
    {
      title: "lorem ipsum yaday ayada yada",
      date: "Jan 15, 2024",
      id: 1,
    },

    {
      title: "lorem ipsum yaday ayada yada",
      date: "Jan 16, 2024",
      id: 2,
    },

    {
      title: "lorem ipsum yaday ayada yada",
      date: "Jan 14, 2024",
      id: 3,
    },

    {
      title: "lorem ipsum yaday ayada yada",
      date: "Jan 25, 2024",
      id: 4,
    },
  ];

  return (
      <div className="my-[100px]">
        <div className="mx-[50px]">
          <PageHeader
            title="Posts"
            extra={[
              <Button
                key="CreateProduct"
                style={{ color: "#187EB4", border: "1px solid #187EB4" }}
              >
                <CreateArticle />
              </Button>,
            ]}
          />

          {posts &&
            posts.map((post) => (
              <div key={post.id} className="mb-[30px]">
                <div className="border py-[30px] px-[50px] w-full rounded-lg">
                  <div>Title:&nbsp;&nbsp;{post.title}</div>
                  <div>Date:&nbsp;&nbsp;{post.date}</div>
                </div>
                <div className="flex justify-end items-center my-[5px]">
                  <button className="text-[#187EB4] mr-[15px]">Edit</button>
                  <button className="text-[#ff0000]">Delete</button>
                </div>
              </div>
            ))}
        </div>
      </div>
  );
};

export default ManageArticles;
