import React, { useState, useEffect } from 'react';
import frontpage from "../../images/frontpage.jpg"
import smoking from "../../images/promo-012.jpg"
import teaser from "../../images/promo-04.jpg"
import dresser from "../../images/promo-031.jpg"
import clock from "../../images/clock.png"
import calendar_icon from "../../images/calendar.png"
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomFullCalendar from "../../fullcalendar/CustomFullCalendar";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'

const home = () => {
    const [calendar, setCalendar] = useState(true);
    const [register, setRegister] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [booking, setBooking] = useState(false);
    const isRegister = useSelector(state => state.homeReducer)



    useEffect(() => {
        setRegister(isRegister);
    }, [isRegister])

    const gotoConfirm = (e) => {
        setConfirm(true)
        setRegister(false)
    }

    const bookFunc = (e) => {
        setBooking(true)
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col xs="12" xs="12" md="12">
                        {!booking && <div id="frontPageImg"><img className="Image" src={frontpage} alt="log" />
                            <section className="card-big">
                                <article>
                                    <h2>Norges brudgomsekspert!</h2>
                                    <span>Ekspert utvalg på antrekk, og gode priser. Hos oss finner du det du trenger til ditt bryllup</span>
                                    <div className="spacebetween"><a onClick={bookFunc} className="btn">Book tid</a><a href="#" className="btn">Drop-in i butikk</a></div>
                                </article>
                            </section>
                        </div>
                        }
                        {booking &&
                            <div className="calendar_container">
                                {calendar && !isRegister && <>
                                    <section className="description-section">
                                        <hgroup>
                                            <h4 id="scheduler">ACME Sales</h4>
                                            <h2 id="event">Pricing Review</h2>
                                            <div className="icon-text-div">
                                                <img src={clock} alt="clock-icon" />
                                                <h4 id="duration">15 min</h4>
                                            </div>
                                        </hgroup>
                                        <p id="description">Our team will meet with you to review pricing options.</p>
                                    </section>
                                    <div className="divider"></div>
                                    <section id="calendar-section" className="body-section">
                                        <h3>Select a Date & Time</h3>
                                        <div id="schedule-div">
                                            <div id="available-times-div"></div>
                                            <div id="calendar">
                                                <CustomFullCalendar />
                                            </div>
                                        </div>
                                    </section>
                                </>}
                                {register && <>
                                    <section className="description-section">
                                        <hgroup>
                                            <h5 id="scheduler">ACME Sales</h5>
                                            <br />
                                            <h3 id="event">Pricing Review</h3>
                                            <br />
                                            <div className="icon-text-div">
                                                <img src={clock} alt="clock-icon" />
                                                <h5 id="duration">15 min</h5>
                                            </div>
                                            <br />
                                            <div class="icon-text-div">
                                                <img src={calendar_icon} alt="calendar-icon" />
                                                <h5 id="event-time-stamp">9:00am - 9:15am, Monday, July 13, 2020</h5>
                                            </div>
                                        </hgroup>
                                    </section>
                                    <div className="divider"></div>
                                    <section id="register-section" className="body-section">
                                        <h3>Enter Details</h3>
                                        <Row className="align-items-center justify-content-md-center">
                                            <Col xs="12">
                                                <Form.Control
                                                    className="mb-2"
                                                    id="inlineFormInput"
                                                    placeholder="Name"
                                                />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row className="align-items-center justify-content-md-center">
                                            <Col xs="12">
                                                <Form.Control
                                                    className="mb-2"
                                                    id="inlineFormInput"
                                                    placeholder="Email"
                                                />
                                            </Col>
                                        </Row>
                                        <br />
                                        <Row className="align-items-center justify-content-md-center">
                                            <Col xs="12">
                                                <Button type="submit" className="mb-2" onClick={gotoConfirm}>
                                                    Schedule Event
                                            </Button>
                                            </Col>
                                        </Row>
                                    </section>
                                </>}
                                {confirm && <div className="confirm">
                                    <section className="body-section">
                                        <h3>Confirmed!</h3>
                                        <p id="scheduler">You are scheduled with ACME Sales.</p>
                                    </section>
                                    <section className="description-section">
                                        <hgroup>
                                            <h4 id="event">Pricing Review</h4>
                                            <div className="icon-text-div">
                                                <img src={clock} alt="clock-icon" />
                                                <h5 id="duration">15 min</h5>
                                            </div>
                                            <div className="icon-text-div">
                                                <img src={calendar_icon} alt="calendar-icon" />
                                                <h5 id="event-time-stamp">9:00am - 9:15am, Monday, July 13, 2020</h5>
                                            </div>
                                        </hgroup>
                                    </section>
                                </div>}
                            </div>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                        <div  ><img src={smoking} className="promoimg" alt="logo" />
                            <div className="teaser"><h2><span className="hugefont-small"><Link to="/bryllup" params={{ special: "smoking" }}>Smoking</Link></span></h2></div>
                        </div>
                    </Col>
                    <Col xs="12" md="6">
                        <Row>
                            <Col xs="12" xs="12" md="12">
                                <div  ><img src={teaser} className="promoimg" alt="logo" />
                                    <div className="teaser"><h2><span className="hugefont-small"><Link to="/dress">Dresser</Link></span></h2></div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" xs="12" md="12">
                                <div  ><img src={dresser} className="promoimg" alt="logo" />
                                    <div className="teaser"><h2><span className="hugefont-small"><Link to="/bryllup">Bryllup</Link></span></h2></div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default home
