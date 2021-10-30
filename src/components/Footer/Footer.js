import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClone, faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import award from '../../images/travel-awards.png'
import award2 from '../../images/award2.png';
import blog1 from '../../images/services/tropical-rainforest-parrot-360x240.jpg'
import blog2 from '../../images/services/niagara-falls-360x240.jpg'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    const element1 = <FontAwesomeIcon icon={faMapMarker} />
    const element2 = <FontAwesomeIcon icon={faPhone} />
    const element3 = <FontAwesomeIcon icon={faEnvelope} />
    const element4 = <FontAwesomeIcon icon={faClone} />
    return (
        <div className="bg-dark text-white py-5">
            <Container>
                <Row md={3} className="pb-4">
                    <Col>
                        <h3 className="mb-3">About Us</h3>
                        <p className="text-muted">We are a small company based in Dhaka Bangladesh which delivers outstanding adventure travel experiences.</p>
                        <img src={award} alt="" />
                        <img className="w-25 px-3" src={award2} alt="" />
                    </Col>
                    <Col>
                        <h3 className="mb-3">From The Blog</h3>
                        <div className="d-flex">
                            <img className="w-25 rounded-circle" src={blog1} alt="" />
                            <div className="px-3">
                                <h5 className="text-muted">Amazon Cruise</h5>
                                <p className="text-muted">17 july 2019</p>
                            </div>
                        </div>
                        <p>---------------------------------------------</p>
                        <div className="d-flex">
                            <img className="w-25 rounded-circle" src={blog2} alt="" />
                            <div className="px-3">
                                <h5 className="text-muted">Niagara Falls</h5>
                                <p className="text-muted">21 january 2020</p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <h3 className="mb-3">Contact Us</h3>
                        <h6 className="text-muted my-2"><span className="pe-2">{element1}</span> 7899 Boshundhora, Dhaka</h6>
                        <h6 className="my-2"><span className="pe-2">{element2}</span>+1 420-240-6000</h6>
                        <h6 className="my-2"><span className="pe-2">{element3}</span>contact@funtouring.com</h6>
                        <h6 className="my-2"><span className="pe-2">{element4}</span>fun.touring</h6>
                    </Col>
                </Row>
                <div className="border-top text-center">
                    <p className="mt-3">copy@right ragib</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;