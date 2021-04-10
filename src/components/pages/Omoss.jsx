import { Row, Tabs, Tab, Container } from "react-bootstrap";
import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Omoss = () => {

    const [employee, setEmployee] = useState('');
    const [data, setData] = useState([]);

    const loadData = () => {

        axios.get('/mocks/employee.json').then(res => {
            setData(res.data)
        });
    }

    useEffect(() => {
        loadData();
    }, [])


    function employeeSelect(index) {
        axios.get('/mocks/employee.json').then(res => {
            var res = res.data
            setEmployee(res[index])
        });
    }

    return (
        <div className="omoss_layout">
            <Container>
                <div className="paragraph-mid">
                    <span className="bold">House of Singles</span> ble startet som en protest mot dårlig stil i 1996 av Roald Olsbø og Robin Knudsen på terrassen til Olsbø på Nesøya i Asker kommune.
            Ideen var klær og en stil man var alene om.
            <br />
                    <br />
                    <h3 className="uppercase">Passform i fokus</h3>
                    {employee.text}
                </div>
                <br />
                <br />
                <Tabs defaultActiveKey="all" transition={false} id="controlled-tab">
                    <Tab eventKey="all" title="All">
                        <br/>
                        <Row>
                        {data.map((item, key) => {
                            return (
                                <div className="content" >
                                    <div className="content-overlay"></div>
                                    <img className="content-image" src={item.img} />
                                    <div className="content-details">
                                        <a href="#" value="1" onClick={() => employeeSelect(item.id)}> <h3 >{item.name}</h3></a>
                                        <h5 >LAWYER MNA</h5>
                                        <h6 >Director of Business Development </h6>
                                        <a href="#" >
                                            <span className="fg-item-icon-inner">
                                                <i className="fas fa-link" aria-hidden="true"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                        }
                        </Row>
                    </Tab>
                    <Tab eventKey="lawyer" title="LAWYER">
                    </Tab>
                    <Tab eventKey="assistant" title="ASSISTANT LAWYER" >
                    </Tab>
                    <Tab eventKey="support" title="OFFICE SUPPORT" >
                    </Tab>
                </Tabs>

            </Container>
        </div>
    )
}

export default Omoss
