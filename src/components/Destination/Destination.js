import React from 'react';
import destination1 from '../../images/services/brazil-south-america-531x354.jpg';
import destination2 from '../../images/services/costa-rica-with-arenal-volcano-531x354.jpg';
import destination3 from '../../images/services/moraine-lake-with-boat-531x354.jpg';
import { Col, Container, Row } from 'react-bootstrap';

const Destination = () => {
    return (
        <Container className="py-5">
            <p className="text-center">Find a Tour by</p>
            <h2 className="text-uppercase mb-4 text-center">DESTINATION</h2>
            <Row md={3} className="g-4">
                <Col className="shadow-sm">
                    <img className="w-100" src={destination1} alt="" />
                    <h4 className="text-uppercase mb-4 text-center">Brazil</h4>
                </Col>
                <Col className="shadow-sm">
                    <img className="w-100" src={destination2} alt="" />
                    <h4 className="text-uppercase mb-4 text-center">Costa Rica</h4>
                </Col>
                <Col className="shadow-sm">
                    <img className="w-100" src={destination3} alt="" />
                    <h4 className="text-uppercase mb-4 text-center">Canada</h4>
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;