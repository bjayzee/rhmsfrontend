"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import moment from "moment";
import { Button } from "antd";
import Link from "next/link";

const RHMSNEWS = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchArticles = async () => {
    setLoading(true)
    const res = await fetch("/api/blog");
    const data = await res.json();
    setPosts(data);
    setLoading(false)
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="p-[100px]">
      <h1 className="text-center mb-8">RHMS News</h1>
      <div>
        {posts?.data && (
          <div className="block md:flex justify-center gap-[50px]">
            {posts?.data?.map((post) => (
              <div className="flex flex-col justify-between w-[400px] shadow-lg mb-[20px] md:mb-0">
                <img src="/news.png" className="w-full object-cover" />
                <div className="uppercase text-[10px] p-[10px]">
                  {moment(post.createdAt, "YYYYMMDD").fromNow()}
                </div>
                <div className="text-[17px] p-[10px] pb-0 uppercase">
                  {post.title}
                </div>

                <div className="text-[15px] p-[10px]">{post.body}</div>
                <div className="flex items-center gap-[10px] p-[10px]">
                  {post.tags.map((tag, i) => (
                    <div key={i}>
                      <div className="bg-[#187EB4] text-[#fff] rounded-lg p-1">
                        {tag}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  title="View article"
                  className="my-[10px] p-[10px] flex flex-start"
                >
                  <Link
                    className="no-underline"
                    href={`/articles/${post?._id}`}
                  >
                    {"Read more"}
                  </Link>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RHMSNEWS;
