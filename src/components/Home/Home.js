import React from 'react';
import banner1 from '../../images/banner1.jpg'
import banner2 from '../../images/banner2.jpg'
import banner3 from '../../images/banner3.jpg'
import banner4 from '../../images/banner4.jpg'
import { Carousel, Container, Row } from 'react-bootstrap';
import './Home.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Places from '../Places/Places';
import Destination from '../Destination/Destination';
import TourType from '../TourType/TourType';

const Home = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('https://calm-plains-21354.herokuapp.com/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])
    return (
        <div>
            <Carousel className="banner">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="mb-5 pb-5">
                        <div className="mb-5 pb-5">
                            <h1>enjoy your tour with FunTouring</h1>
                            <p>your happiness and satisfaction our pleasure</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="mb-5 pb-5">
                        <div className="mb-5 pb-5">
                            <h1>enjoy your tour with FunTouring</h1>
                            <p>your happiness and satisfaction our pleasure</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="mb-5 pb-5">
                        <div className="mb-5 pb-5">
                            <h1>enjoy your tour with FunTouring</h1>
                            <p>your happiness and satisfaction our pleasure</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="mb-5 pb-5">
                        <div className="mb-5 pb-5">
                            <h1>enjoy your tour with FunTouring</h1>
                            <p>your happiness and satisfaction our pleasure</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="py-5">
                <Container>
                    <p className="text-center">Take a Look at Our</p>
                    <h2 className="text-uppercase mb-4 text-center">MOST POPULAR TOURS</h2>
                    <Row md={3} xs={1} className="g-3">
                        {
                            places.map(place => <Places
                                key={place._id}
                                place={place}
                            >
                            </Places>)
                        }
                    </Row>
                </Container>
            </div>
            <Destination></Destination>
            <TourType className="back-img"></TourType>
        </div>
    );
};

export default Home;