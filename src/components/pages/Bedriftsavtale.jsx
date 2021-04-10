
import Form from 'react-bootstrap/Form'
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'

function Bedriftsavtale() {
    return (
        <div className="bedriftsavtale_layout">

            <Container>
                <Row className="justify-content-md-center">
                    <Col xs="12" md="6">

                        <img
                            className="content-image"
                            src="https://instagram.fbsr6-2.fna.fbcdn.net/v/t51.2885-15/e35/c0.71.566.566a/126623015_1028631564282920_2153493759258940588_n.jpg?tp=1&_nc_ht=instagram.fbsr6-2.fna.fbcdn.net&_nc_cat=108&_nc_ohc=fPCzv11tCwIAX_VeFdr&ccb=7-4&oh=030901e4bcd6f4a0f5f78ac9955a796e&oe=60850CC4&_nc_sid=86f79a"
                        />
                        <h1 className="title_layout">Bedriftsavtale info</h1>

                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs="12" md="6">
                        <Form>
                            <Form.Row className="align-items-center justify-content-md-center">
                                <Col xs="auto">
                                    <Form.Control
                                        className="mb-2"
                                        id="inlineFormInput"
                                        placeholder="Company Number"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit" className="mb-2">
                                        Next
                                    </Button>
                                </Col>
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Bedriftsavtale
