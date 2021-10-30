import React from 'react';
import { useForm } from "react-hook-form";

const BookingForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://calm-plains-21354.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Booking Successfully')
                    reset();
                }
            })
    }
    return (
        <div>
            <h3 className="text-center mb-4">Book Your Tour</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="w-100 mb-2 px-2" placeholder="name" {...register("name", { required: true, maxLength: 20 })} />
                <input className="w-100 mb-2 px-2" type="email" placeholder="email" {...register("email")} />
                <input className="w-100 mb-2 px-2" type="text" placeholder="tour-name" {...register("tour")} />
                <input className="w-100 mb-2 px-2" type="text" placeholder="number" {...register("phone")} />
                <input className="w-100 mb-2 px-2" type="date" {...register("date")} />
                <input className="w-100 mb-2 px-2" type="time" {...register("time")} />
                <input className="w-100 mb-2 px-2" type="number" {...register("number")} />
                <br />
                <input className="btn btn-danger" type="submit" value="Book Now" />
            </form>
        </div>
    );
};

export default BookingForm;