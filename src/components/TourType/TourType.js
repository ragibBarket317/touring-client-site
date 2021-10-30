import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TourType.css';

const TourType = () => {
    return (
        <div className="back-img text-white">
            <Container className="py-5">
                <h2 className="text-uppercase mb-4 text-center">JOIN THE NEWSLETTER</h2>
                <p className="text-center"><small>To receive our best monthly deals</small></p>
                <p className="text-center">Whoops, you're not connected to Mailchimp. You need to enter a valid Mailchimp API key.</p>
            </Container>

        </div>
    );
};

export default TourType;