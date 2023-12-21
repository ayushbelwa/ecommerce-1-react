import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

const Product = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Splide aria-label="My Favorite Images">
                            <SplideSlide>
                                <img src="image1.jpg" alt="Image 1" />
                            </SplideSlide>
                            <SplideSlide>
                                <img src="image2.jpg" alt="Image 2" />
                            </SplideSlide>
                        </Splide>
                    </Col>
                    <Col><Container>
                        <Container>
                            <h1>Title</h1>
                        </Container>
                    </Container>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Product;
