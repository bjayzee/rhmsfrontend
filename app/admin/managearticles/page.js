"use client";

import { useState, useEffect } from "react";
import { PageHeader, Tabs, Button } from "antd";
import CreateArticle from "@/components/CreateArticle";
import moment from "moment";

const ManageArticles = () => {
  const [posts, setPosts] = useState([]);

  const fetchArticles = async () => {
    const res = await fetch("/api/blog");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  console.log(posts);

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

        {posts?.data?.length === 0 ? (
          <div className="text-lg text-center mt-[100px]">
            No articles to show
          </div>
        ) : (
          <div>
            {posts?.data?.map((post) => (
              <div key={post.id} className="mb-[30px]">
                <div className="border py-[30px] px-[50px] w-full rounded-lg">
                  <div className="text-lg font-bold pb-[10px]">
                    {post.title}
                  </div>
                  <div className="pb-[20px]">
                    {" "}
                    {post.body && post.body?.substring(0, 200)}{" "}
                    {post.body && post.body?.length >= 200 && "..."}
                  </div>
                  <div className="pb-[20px]">By {post.author}</div>

                  <div className="flex items-center gap-3">
                    <div className="text-sm">
                      {moment(post.createdAt).format("DD MMM YYYY")}
                    </div>
                    <div className="flex items-center gap-[10px]">
                      {post.tags.map((tag, i) => (
                        <div key={i}>
                          <div className="bg-[#187EB4] text-[#fff] rounded-lg p-1">
                            {tag}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center my-[5px]">
                  <button className="text-[#187EB4] mr-[15px]">Edit</button>
                  <button className="text-[#ff0000]">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageArticles;
