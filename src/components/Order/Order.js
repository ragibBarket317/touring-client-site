import React from 'react';

const Order = (props) => {
    const { name, email, tour, date, phone } = props.user;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{tour}</td>
            <td>{date}</td>
            <td>
                <button className="btn btn-warning">Delete</button>
            </td>
        </tr >
    );
}

export default Order;