import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import BigStar from '../assets/Star 1.svg'
const DevicePage = () => {

    const device  = {id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: `https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png`}
    return (
        <Container className="mt-3">
            <Col md={4}>
                <Image width={300} height={300} src={device.img}/>
            </Col>

            <Col md={4}>
                <Row className="d-flex flex-column align-items-center">
                    <h2>{device.name}</h2>
                    <div
                        className="d-flex align-items-center justify-content-between"
                        style={{width: 240, height: 240, backgroundSize: "cover"}} //!@!!! 1 47
                    >
                        {device.rating}
                    </div>
                </Row>
            </Col>

            <Col md={4}>

            </Col>
        </Container>
    );
};

export default DevicePage;