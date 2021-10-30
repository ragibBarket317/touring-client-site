import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Order from '../Order/Order';

const MyOrder = () => {
    const [bookUser, setBookUser] = useState([]);
    useEffect(() => {
        fetch('https://calm-plains-21354.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setBookUser(data))
    }, [])
    return (
        <div className="container py-5">
            <h2 className="text-center">Booking Details</h2>
            <Table className="shadow" striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Tour Place</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookUser.map(user => <Order
                            key={user._id}
                            user={user}
                        ></Order>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrder;