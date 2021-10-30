import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import BookingForm from '../BookingForm/BookingForm';
import './Details.css';

const Details = () => {
    const { id } = useParams();
    const [place, setPlace] = useState();

    useEffect(() => {
        fetch(`https://calm-plains-21354.herokuapp.com/places/${id}`)
            .then(res => res.json())
            .then(data => setPlace(data))
    }, [])
    return (
        <div>
            <img className="w-100 img" src={place?.img} alt="" />
            <h2 className="text-center mt-4">{place?.title}</h2>
            <div className="container py-5">
                <div className="row">
                    <div className="col-7 me-5 shadow p-4">
                        <p className="text-muted">{place?.details}</p>
                        <div className="d-flex justify-content-start mt-3">
                            <h5 className="shadow px-4 py-2 bg-primary text-white rounded-pill me-2">{place?.duration}</h5>
                            <h5 className="shadow px-4 py-2 bg-primary text-white rounded-pill">{place?.price}</h5>
                        </div>
                        <h3 className=" mt-4 border-bottom pb-2">Others</h3>
                        <h6 className=" mt-4 border-bottom pb-2">DEPARTURE TIME: <span className="ms-4 text-muted fw-normal">{place?.departureTime}</span></h6>
                        <h6 className=" mt-4 border-bottom pb-2">RETURN TIME: <span className="ms-4 text-muted fw-normal">{place?.returnTime}</span></h6>
                        <h6 className=" mt-4 border-bottom pb-2">WARE: <span className="ms-4 text-muted fw-normal">{place?.ware}</span></h6>
                        <h6 className=" mt-4 border-bottom pb-2">INCLUDED: <span className="ms-4 text-muted fw-normal">{place?.includs}</span></h6>
                        <h6 className=" mt-4 border-bottom pb-2">NOT INCLUDED: <span className="ms-4 text-muted fw-normal">{place?.noIncluds}</span></h6>
                    </div>
                    <div className="col-4 ms-4 bg-primary p-4 text-white h-100 shadow-sm">
                        <BookingForm></BookingForm>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;