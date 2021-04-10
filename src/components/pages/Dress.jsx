
import Carousel from 'react-bootstrap/Carousel'
import { Container, Row, Col } from "react-bootstrap";

function Dress() {
    return (
        <div className="dress_layout">
            <Container>
                <Row>
                    <h1 className="title">Smoking - vi hjelper deg med a finne den riktige smokingen.</h1>
                </Row>
                <Row>
                    <Col xs="12" md="6">
                            <Carousel>
                                <Carousel.Item interval={2000}>
                                    <div className="img_layout">
                                        <img
                                            className="content-image"
                                            src="https://houseofsingles.no/upload/Roaldblogg_03_Tittelbilde.png"
                                            alt="First slide"
                                        />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <div className="img_layout">
                                        <img
                                            className="content-image"
                                            src="https://houseofsingles.no/upload/bryllup_liggende_cavaliere.jpg"
                                            alt="Second slide"
                                        />
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <div className="img_layout">
                                        <img
                                            className="content-image"
                                            src="https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/HA1RQCRQJ7.jpg"
                                            alt="Third slide"
                                        />
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                    </Col>
                    <Col xs="12" md="6">
                        <p>Smoking er et populaert antrekk til bryliup bade for brudgommen or gjestene. Saerlig folk som bruker dress i jobb ansker a skille mer mellom job of fest, da er smoking et naturlig og godt Valg.</p>
                        <p>Hos Menswer finner du tru typer somoking:</p>
                        <p>- Svart smoking med sjalskrage.</p>
                        <p>- Svart smoking med spisse slag/peak lapels.</p>
                        <p>- Midnightbue smoking med sjalskrage.</p>
                        <h5>Smoking med sjalskrage</h5>
                        <p>Smoking med sjalskrage har vaert den mest vanlige modellen de siste arene men i det siste er det ogsa blitt mer populaert med spisse slag(peak lapels). Deflestevelger fortsatt svart smoking,men morkebla smoking er stadig mer populaert.</p>
                        <p>Hos Menswear finner du begge modellene i et moderne smalt snitt, Begge smokingene er i 100% uli. <h5>Smokingen med sjalskrage finnes ogsa i midnight blue/morkebia.</h5> Vi har egen skredder somgior tilpasninger pakort tid</p>
                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Dress
