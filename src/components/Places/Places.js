import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserClock } from '@fortawesome/free-solid-svg-icons'
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Places = (props) => {
    const { title, img, describe, duration, price, _id } = props.place;
    const element = <FontAwesomeIcon icon={faUserClock} />
    return (
        <div className="col">
            <CardGroup className="h-100 shadow">
                <Card>
                    <Card.Img variant="top" src={img} className="img-fluid" />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <div className="text-muted">{describe}</div>
                            <div className="d-flex justify-content-between">
                                <h6 className="text-muted border p-1"><span className="text-primary">{element}</span> {duration}</h6>
                                <h6 className="text-muted border p-1">{price}</h6>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <div className="text-center mb-4">
                        <Link to={`details/${_id}`}><button className="w-50 btn btn-primary">Booking Now</button></Link>
                    </div>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Places;