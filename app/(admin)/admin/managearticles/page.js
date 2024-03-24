"use client";

import { useState, useEffect } from "react";
import { PageHeader, Tabs, Button } from "antd";
import CreateArticle from "@/components/CreateArticle";
import moment from "moment";
import EditArticle from "@/components/EditArticle";
import { notification } from "antd";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ManageArticles = () => {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  const [posts, setPosts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const fetchArticles = async () => {
    const res = await fetch("/api/blog");
    const data = await res.json();
    setPosts(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  console.log(posts);

  const handleDelete = async ({ _id }) => {
    try {
      const response = await axios.delete(`/api/blog/?id=${_id}`);
      notification.success({
        message: "article deleted successfully",
      });
      fetchArticles();
    } catch (err) {
      console.error("Error deleting:", err);
      notification.error({
        message: "Error deleting article, please try again",
      });
    }
  };

  const handleSearchInputChange = (e) => {
    const input = e.target.value.toLowerCase();
    const filtered = posts?.data?.filter((post) =>
      post.title.toLowerCase().includes(input)
    );
    setFilteredPosts(filtered);
    setSearchInput(input);
  };

  console.log(filteredPosts);

  return (
    <div className="my-[50px] md:my-[100px] mx-[20px] md:mx-[50px]">
      <div>
        <PageHeader
          title="Posts"
          extra={[
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                value={searchInput}
                placeholder="Search by title"
                onChange={handleSearchInputChange}
              />
            </Form.Group>,

            <Button
              key="CreateProduct"
              style={{ color: "#187EB4", border: "1px solid #187EB4" }}
            >
              <CreateArticle fetchArticles={fetchArticles} />
            </Button>,
          ]}
        />

{searchInput ? (
  // Render filtered posts if there is a search input
  filteredPosts.length === 0 ? (
    <div className="text-lg text-center mt-[100px]">
      No matching articles found
    </div>
  ) : (
    <div>
      {filteredPosts.map((post) => (
      <div key={post.id} className="mb-[30px]">
      <div className="border py-[30px] px-[20px] md:px-[50px] w-full rounded-lg">
        <div className="flex flex-col-reverse md:flex-row gap-[5px] md:gap-0 justify-between items-center">
          <div className="text-lg font-bold pb-[10px]">
            {post.title}
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

        <div className="pb-[20px]">
          {" "}
          {post.body && post.body?.substring(0, 200)}{" "}
          {post.body && post.body?.length >= 200 && "..."}
        </div>
        <div className="pb-[20px]">By {post.author}</div>

        <div className="text-sm">
          {moment(post.createdAt).format("DD MMM YYYY")}
        </div>
      </div>
      <div className="flex justify-end items-center my-[5px]">
        <button className="text-[#187EB4] mr-[15px]">
          <EditArticle post={post} fetchArticles={fetchArticles} />
        </button>
        <button
          className="text-[#ff0000]"
          onClick={() => handleDelete(post)}
        >
          Delete
        </button>
      </div>
    </div>
      ))}
    </div>
  )
) : (
  <div>
    {posts?.data?.map((post) => (
      <div key={post.id} className="mb-[30px]">
      <div className="border py-[30px] px-[20px] md:px-[50px] w-full rounded-lg">
        <div className="flex flex-col-reverse md:flex-row gap-[5px] md:gap-0 justify-between items-center">
          <div className="text-lg font-bold pb-[10px]">
            {post.title}
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

        <div className="pb-[20px]">
          {" "}
          {post.body && post.body?.substring(0, 200)}{" "}
          {post.body && post.body?.length >= 200 && "..."}
        </div>
        <div className="pb-[20px]">By {post.author}</div>

        <div className="text-sm">
          {moment(post.createdAt).format("DD MMM YYYY")}
        </div>
      </div>
      <div className="flex justify-end items-center my-[5px]">
        <button className="text-[#187EB4] mr-[15px]">
          <EditArticle post={post} fetchArticles={fetchArticles} />
        </button>
        <button
          className="text-[#ff0000]"
          onClick={() => handleDelete(post)}
        >
          Delete
        </button>
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
