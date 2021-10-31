import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://calm-plains-21354.herokuapp.com/places', {
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
        <div className="d-flex justify-content-center">
            <div className="py-5 w-lg-50 shadow bg-primary p-5 my-5">
                <h3 className="text-center mb-4">Add A New Service</h3>
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <input className="w-100 mb-2 px-2" placeholder="title" {...register("title", { required: true, maxLength: 20 })} />
                    <input className="w-100 mb-2 px-2" type="text" placeholder="describe" {...register("describe")} />
                    <input className="w-100 mb-2 px-2" type="text" placeholder="duration" {...register("duration")} />
                    <input className="w-100 mb-2 px-2" type="text" placeholder="price" {...register("price")} />
                    <input className="w-100 mb-2 px-2" type="text" placeholder="image" {...register("img")} />
                    <br />
                    <input className="btn btn-danger w-100" type="submit" value="Book Now" />
                </form>
            </div>
        </div>
    );
};

export default AddService;