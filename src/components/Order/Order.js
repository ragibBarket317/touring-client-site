import React from 'react';
import useAuth from '../../hooks/useAuth';

const Order = (props) => {
    const { user } = useAuth();
    const { name, email, tour, date, phone } = props.user;
    if (user?.displayName == name) {
        return (
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{tour}</td>
                <td>{date}</td>
            </tr >
        );
    }
    else {
        return (
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    }

};

export default Order;