import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Order from '../Order/Order';

const ManageOrder = () => {
    const [bookUser, setBookUser] = useState([]);
    useEffect(() => {
        fetch('https://calm-plains-21354.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setBookUser(data))
    }, [])
    // Delete User Method
    const handleDeleteUser = id => {
        const deleting = window.confirm('Are you sure, you want to delete?');
        if (deleting) {
            fetch(`https://calm-plains-21354.herokuapp.com/users/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully deleted.')
                        const remainingUser = bookUser.filter(user => user._id !== id);
                        setBookUser(remainingUser);
                    }
                })
        }
    }
    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Booking Details</h2>
            <Table responsive="sm" className="shadow" striped bordered hover size="sm">
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
                            handleDeleteUser={handleDeleteUser}
                        ></Order>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrder;