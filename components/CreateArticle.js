"use client";

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notification } from "antd";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

import Badge from "react-bootstrap/Badge";

function CreateArticle() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialFormState = {
    author: "",
    tag: "",
    title: "",
    category: "",
    images: "",
    image: "",
    body: "",
  };

  const [loading, setLoading] = useState(false);
  const [articleFormData, setArticleFormData] = useState(initialFormState);

  const [tagArray, setTagArray] = useState([]);

  const handleInputChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setArticleFormData({
      ...articleFormData,
      [name]: value,
    });
  };

  const handleTagInputChange = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setArticleFormData({
      ...articleFormData,
      tag: value,
    });
  };

  const handleAddTag = () => {
    if (articleFormData.tag.trim() !== "") {
      setTagArray([...tagArray, articleFormData.tag]);
      setArticleFormData({
        ...articleFormData,
        tag: "",
      });
    }
  };

  const clearFormData = () => {
    setArticleFormData(initialFormState);
  };

  const handleCreateArticle = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formDataForBackend = new FormData();

    formDataForBackend.append("author", articleFormData.author);
    formDataForBackend.append("category", articleFormData.category);
    formDataForBackend.append("title", articleFormData.title);
    formDataForBackend.append("body", articleFormData.body);
    tagArray.forEach((tag, index) => {
      formDataForBackend.append(`tags[${index}]`, tag);
    });

    axios
      .post("/api/blog", formDataForBackend, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Response:", response.data);
        handleClose();
        clearFormData();
        notification.success({
          message: "Category created successfully",
        });

        setLoading(false);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);

        setLoading(false);

        notification.error({
          message: "Error creating category, please try again",
        });
      });
  };

  return (
    <>
      <span onClick={handleShow}>New Post</span>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header className="flex justify-between items-center px-[50px]">
          <Modal.Title>New Post</Modal.Title>
          <button
            onClick={handleClose}
            className="border-none px-2 py-1 bg-none rounded text-[#e94d4d] hover:bg-[#e94d4d] hover:text-[#fff]"
          >
            <IoMdClose className="text-lg" />
          </button>
        </Modal.Header>
        <Modal.Body className="px-[50px]">
          <Form onSubmit={handleCreateArticle} className="overflow-y-scroll">
            <div>
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    type="text"
                    name="author"
                    placeholder="Enter author name "
                    onChange={(evt) => handleInputChange(evt)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="Enter Title "
                    onChange={(evt) => handleInputChange(evt)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    name="category"
                    placeholder="Enter category "
                    onChange={(evt) => handleInputChange(evt)}
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
              style={{ marginBottom: "10px" }}
            >
              <Form.Label>Article Body </Form.Label>
              <Form.Control
                as="textarea"
                style={{ height: "500px" }}
                name="body"
                onChange={(evt) => handleInputChange(evt)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Tags</Form.Label>
              <div className="flex items-center gap-[10px]">
                <Form.Control
                  type="text"
                  name="tags"
                  placeholder="Enter tag"
                  value={articleFormData.tag}
                  onChange={(evt) => handleTagInputChange(evt)}
                />
                <Button variant="secondary" onClick={handleAddTag}>
                  Add
                </Button>
              </div>
              <div className="pt-[5px]">
                {tagArray.map((tag, index) => (
                  <Badge key={index} variant="primary" className="mr-[5px]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Form.Group>

            <div className="flex items-center justify-end gap-[30px] mt-[60px]">
              <button
                className="bg-[#187EB4] text-[#fff] border-none px-[20px] py-[10px] w-1/6 rounded"
                onClick={handleCreateArticle}
                disabled={loading ? true : false}
              >
                {loading ? "Please wait..." : "Add article"}
              </button>
              <button
                onClick={handleClose}
                className="bg-[#fff] border border-[#187eb4] px-[20px] py-[10px] w-1/6 rounded"
              >
                Cancel
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default CreateArticle;
