import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Container, Row, Col } from "react-bootstrap";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'

function Bryllup() {

    const [item, setItem] = useState('');

    const loadData = () => {

        axios.get('/mocks/Bryllup.json').then(res => {
            setItem(res.data[0])
        });
    }

    useEffect(() => {
        loadData();
    }, [])


    const handleSelect = (e) => {
        axios.get('/mocks/Bryllup.json').then(res => {
            setItem(res.data[e - 1])
        });
    }

    return (
        <div className="bryllup_layout">

            <Container>
                <Row className="justify-content-md-center">
                    <Col xs="12" md="6">
                        <a href={item.mainLink}>
                            <img
                                className="content-image"
                                src={item.mainImg}
                            />
                        </a>
                    </Col>
                    <Col xs="12" md="2">
                        <DropdownButton
                            variant="outline-danger"
                            alignRight
                            title="Property"
                            id="dropdown-menu-align-right"
                            onSelect={handleSelect}
                        >
                            <Dropdown.Item eventKey="1">Property 1</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Property 2</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Property 3</Dropdown.Item>
                        </DropdownButton>

                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="12">
                        <h1 className="title">{item.title}</h1>

                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="12">
                        <p className="description">{item.text}</p>
                    </Col>
                </Row>

                <Row>
                    <Col xs="12" md="4">
                        <a href={item.link1}>
                            <img
                                className="content-image"
                                src={item.img1}
                            />
                        </a>
                    </Col>
                    <Col xs="12" md="4">
                        <a href={item.link2}>
                            <img
                                className="content-image"
                                src={item.img2}
                            />
                        </a>
                    </Col>
                    <Col xs="12" md="4">
                        <a href={item.link3}>
                            <img
                                className="content-image"
                                src={item.img3}
                            />
                        </a>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs="12" md="9" className="bottom_btn_layout">
                        <Button className="button_bg" size="sm">
                            {item.btnText}
                        </Button>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Bryllup
