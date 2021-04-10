import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";

import DetailedPost from "./DetailedPost";
import axios from 'axios';


const Inspirasjon = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const loadData = () => {

        axios.get('/mocks/Feed.json').then(res => {
            setData(res.data)
        });
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <div>
            <div className="paragraph-mid">
                <h1>OUR INSTAGRAM</h1>

                {data.map((post, key) => {
                    return (
                        <div>
                            <div className="img_container" onClick={handleShow}>
                                <div className="content">
                                    <a target="_blank">
                                        <div className="content-overlay"></div>
                                        <img className="content-image" src={post.img} />
                                        <div className="content-details fadeIn-bottom">
                                            <h3 className="content-title">{post.title}</h3>
                                            <p className="content-text">{post.text}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })
                }

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body><DetailedPost /></Modal.Body>
            </Modal>
        </div>
    )
}

export default Inspirasjon
