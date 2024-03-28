"use client";

import { Avatar, Button, Card, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { useState, useEffect } from "react";
import { BsPhone, BsArrowLeft, BsEnvelope } from "react-icons/bs";
import styled from "styled-components";
import moment from "moment";
import Link from "next/link";

const ArticleDetails = ({ params: { _id } }) => {
  const [article, setArticle] = useState({});

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await fetch(`/api/blog/${_id}`);
      const data = await res.json();
      setArticle(data);
    };

    fetchArticle();
  }, []);

  console.log("single article", article);

  return (
    <StyledContainer>
      <div>
        <div className="userInfo">
          <Card>
            <div className="flex justify-between items-center w-[90%] mx-auto my-[50px]">
              <div className="text-lg">Article details</div>
              <div className="userInfo__back  ">
                <Link
                  className="no-underline flex items-center gap-[5px]"
                  href="/"
                >
                  <BsArrowLeft /> <div>Back</div>
                </Link>
              </div>
            </div>

            {article?.data && (
              <Meta
                description={
                  <div className="metaDescription w-[80%] mx-auto">
                    {
                      <Avatar
                        size={100}
                        src={
                          article?.data?.image_path ||
                          "https://joeschmoe.io/api/v1/random"
                        }
                      />
                    }

                    <div className="flex align-middle items-center gap-4 flex-wrap article-detail">
                      {moment(article?.data?.createdAt).format("DD MMM YYYY") ||
                        ""}
                    </div>

                    <div className="flex flex-col-reverse md:flex-row gap-[5px] md:gap-0 justify-between items-center">
                      <div className="flex text-3xl align-middle items-center gap-4 flex-wrap article-detail mt-[30px] mb-[15px]">
                        {article?.data?.title}
                      </div>
                      <div className="flex items-center gap-[10px]">
                        {article?.data?.tags.map((tag, i) => (
                          <div key={i}>
                            <div className="bg-[#187EB4] text-[#fff] rounded-lg p-1">
                              {tag}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex align-middle items-center gap-4 flex-wrap article-detail my-[30px]">
                      {article?.data?.body}
                    </div>
                  </div>
                }
              />
            )}
          </Card>
        </div>
      </div>
    </StyledContainer>
  );
};

export default ArticleDetails;

const StyledContainer = styled.div`
  .ant-card-meta {
    align-items: center !important;
  }

  .metaDescription {
    a {
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
  }

  .userInfo {
    &__back {
      display: flex;
      justify-content: flex-end;
      button {
        display: flex;
        gap: 0.2rem;
        align-items: center;
        transition: all 0.3s;
      }
      button :hover {
        gap: 0.5rem;
      }
    }
  }

  .infoTab {
    margin-top: 1rem;
    padding: 0 0.5rem;
  }
  .article-detail {
    margin-top: 5px;
  }
`;
