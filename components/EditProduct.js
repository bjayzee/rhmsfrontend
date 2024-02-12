'use client'

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notification } from "antd";
import { IoMdClose } from "react-icons/io";


function EditProduct() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const clearFormData = () => {
        // Add any logic you need to clear form data
    }

    return (
        <>
            <span onClick={handleShow}>Edit</span>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="flex justify-between items-center">
                    <Modal.Title>Edit product</Modal.Title>
                    <Button  onClick={handleClose} className="border-none bg-none text-[#e94d4d] hover:bg-[#e94d4d] hover:text-[#fff]">
                        <IoMdClose className="text-lg"/>
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    {/* Your modal content goes here */}
                    {/* No need for a close button here */}
                </Modal.Body>
            </Modal>
            <ToastContainer />
        </>
    );
}

export default EditProduct;
