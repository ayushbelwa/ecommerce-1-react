import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import './css/homeStyle.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import axios from 'axios';

const Home = () => {
  const [fake, setFake] = useState([]);
  console.log(fake);
  useEffect(() => {
    fakestore();
  }, [])
  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log(response);
    const jsonData = await response.json();
    setFake(jsonData);
  }
  fakestore();






  return (

    <Container className='p-5'>
      <Row>
        <Col xs={4} className='px-5'>
          <Card className='border-0' style={{ width: '18rem' }}>
            <Card.Title>CATEGORIES</Card.Title>
            <Accordion className='border-0 p-0' >
              <Accordion.Item className='border-0 p-0' eventKey="0">
                <Accordion.Header>Entertainment</Accordion.Header>
                <Accordion.Body className='border-0 p-0'>

                </Accordion.Body>
              </Accordion.Item>




              <Accordion.Item className='border-0 p-0' eventKey="1">
                <Accordion.Header className='border-0'>Electronics</Accordion.Header>
                <Accordion.Body className='p-0 border-0'>
                  <ListGroup.Item className='border-0'>TV</ListGroup.Item>
                  <ListGroup.Item className='border-0 '>Washing Machine</ListGroup.Item>
                  <ListGroup.Item className='border-0 '>Mobiles</ListGroup.Item>
                  <ListGroup.Item className='border-0 '>Laptops</ListGroup.Item>
                  <ListGroup.Item className='border-0 '>PC</ListGroup.Item>
                  <ListGroup.Item className='border-0 '>Trimer</ListGroup.Item>
                  <ListGroup.Item className='border-0 '>Speakers</ListGroup.Item>

                </Accordion.Body>
              </Accordion.Item>



              <Accordion.Item className='border-0' eventKey="2">
                <Accordion.Header className='border-0' >Clothes</Accordion.Header>
                <Accordion.Body className='p-0 border-0'>
                  <Accordion className='border-0'  >
                    <Accordion.Item className='border-0' eventKey="0">
                      <Accordion.Header className='p-0 border-0'>Men</Accordion.Header>
                      <Accordion.Body className='p-0 border-0'>
                        <ListGroup.Item className='border-0'>Men T-Shirts/Shirts</ListGroup.Item>
                        <ListGroup.Item className='border-0'>Men  Jacket</ListGroup.Item>
                        <ListGroup.Item className='border-0'>Men Shoes</ListGroup.Item>
                        <ListGroup.Item className='border-0'>Men Asseseries</ListGroup.Item>
                      </Accordion.Body>
                    </Accordion.Item>




                    <Accordion.Item className='border-0' eventKey="1">
                      <Accordion.Header className='p-0 border-0'>Women</Accordion.Header>
                      <Accordion.Body className='p-0 border-0'>
                        <ListGroup.Item className='border-0'>Women Dress</ListGroup.Item>
                        <ListGroup.Item className='border-0'>Tops</ListGroup.Item>
                        <ListGroup.Item className='border-0'>Jwellery</ListGroup.Item>
                        <ListGroup.Item className='border-0'>Shoes</ListGroup.Item>
                        <ListGroup.Item className='border-0'>Bags</ListGroup.Item>
                      </Accordion.Body>
                    </Accordion.Item>

                  </Accordion>

                </Accordion.Body>
              </Accordion.Item>



              <Accordion.Item className='border-0 p-0' eventKey="3">
                <Accordion.Header className='border-0'>House Holds</Accordion.Header>
                <Accordion.Body className='p-0 border-0'>
                  <ListGroup.Item className='border-0'>Kitchen</ListGroup.Item>
                  <ListGroup.Item className='border-0'>Bathroom</ListGroup.Item>
                  <ListGroup.Item className='border-0'>Bedroom</ListGroup.Item>
                  <ListGroup.Item className='border-0'>Living Room</ListGroup.Item>
                  <ListGroup.Item className='border-0'></ListGroup.Item>
                </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item className='border-0 p-0' eventKey="4">
                <Accordion.Header className='border-0'>Sports</Accordion.Header>
                <Accordion.Body className='p-0 border-0'>
                  <ListGroup.Item className='border-0'>FootBall</ListGroup.Item>
                  <ListGroup.Item className='border-0'>Bat</ListGroup.Item>
                  <ListGroup.Item className='border-0'>Shoes</ListGroup.Item>
                  <ListGroup.Item className='border-0'>Jerrsy</ListGroup.Item>
                  <ListGroup.Item className='border-0'>Socks</ListGroup.Item>
                  <ListGroup.Item className='border-0'>Pants</ListGroup.Item>
                </Accordion.Body>
              </Accordion.Item>


              <Accordion.Item className='border-0 p-0' eventKey="5">
                <Accordion.Header className='border-0'>Gamming</Accordion.Header>
                <Accordion.Body className='p-0 border-0'>
                  <ListGroup.Item className='border-0'>JoyStick</ListGroup.Item>
                  <ListGroup.Item className='border-0'>Bat</ListGroup.Item>
                  <ListGroup.Item className='border-0'>Shoes</ListGroup.Item>
                  <ListGroup.Item className='border-0'>Jerrsy</ListGroup.Item>
                  <ListGroup.Item className='border-0'>Socks</ListGroup.Item>
                  <ListGroup.Item className='border-0'>Pants</ListGroup.Item>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card>

          <Card className='mt-4 border-0' >
            <Card.Title>PRICE</Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item className='p-0'>
                <Box width={300}>
                  <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    className='mt-5 p-0' />

                </Box>
              </ListGroup.Item>

            </ListGroup>
          </Card>
        </Col>
        <Col className='w-100 pt-3'>
          <Container>
            <Row>
              {fake.map((values) =>
                <Col xs={6} md={4}>
                  <Card class="mb-2 w-auto" style={{ height: "auto" }}>
                    <Card.Img variant="top" class="" style={{ width: '250px', height: '300px', objectFit: "cover" }} src={values.image} />
                    <Card.Body>
                      <Card.Title style={{ fontSize: '0.9rem', fontWeight: 'normal' }} >{values.title}</Card.Title>
                      <Card.Text>
                        <p style={{ fontSize: '0.8rem' }}>{values.price}</p>
                      </Card.Text>
                      <Button className="btn1">Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>

  )
}

export default Home;

