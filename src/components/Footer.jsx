import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="t40">


            <Container className="footercontent">
                <Row>
                    <Col xs="12" md="3">
                        <h5 className="footerheadline">Information</h5>
                        <a className="footermenu" href="#">Contact</a>
                        <br></br>
                        <a className="footermenu" href="#">Our stores</a>
                        <br></br>
                        <a className="footermenu" href="#">Terms</a>
                    </Col>
                    <Col xs="12" md="3">
                        <h5 className="footerheadline">My pages</h5>
                        <a className="footermenu" href="#">Login</a>
                        <br></br>
                        <a className="footermenu" href="#">Our suppliers</a>
                        <br></br>
                        <a className="footermenu" href="#">Somethingelse</a>
                    </Col>
                    <Col xs="12" md="3">
                        <h5 className="footerheadline">follow us</h5>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col xs="12" >
                        <div className="copyrigt">
                            <span className="footermenu">
                                © 2021 House of Singles Kvadraturen, Kirkegata 15, 0153, OSLO, +47 965 05 401
                             </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
