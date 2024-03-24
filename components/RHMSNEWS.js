"use client";
import Slider from "react-slick";
import Image from "next/image";
import { useState, useEffect } from "react";
import moment from "moment";

const RHMSNEWS = () => {
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
    <div className="p-[100px]">
      <h1 className="text-center mb-8">RHMS News</h1>
      <div>
        {posts?.data && (
          <div className="block md:flex justify-center gap-[50px]">
            {posts?.data?.map((post) => (
              <div className="flex flex-col gap-[10px] max-w-[400px]">
                <Image src="/news.png" height={200} width={347} />
                <div className="uppercase text-[10px]">
                  {moment(post.createdAt, "YYYYMMDD").fromNow()}
                </div>
                <div className="text-[15px]">{post.body}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RHMSNEWS;
