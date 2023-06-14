import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const AddAClasses = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    // const { createUser, updateUserProfile, user } = useContext(AuthContext);
    const { user } = useContext(AuthContext);
    // const navigate = useNavigate();

    const onSubmit = data => {

        

        // fetch('http://localhost:8000/allClasses', {
        fetch('https://server-assignment-12-anik12136.vercel.app/allClasses', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(data)
                            
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Class added successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    
                                }
                            });

        }

    return (
        <div>
             <div className="hero">
                <div className="hero-content ">
                    
                    <div className=" shadow-2xl bg-base-100">
                    <div className="text-center p-5">
                        <h1 className="text-5xl font-bold">Add A class</h1>
                    </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body w-96">
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor name</span>
                                </label>
                                <input type="text" value={user?.displayName}  {...register("InstructorName", { required: true })}  className="input input-bordered"/>
                                {errors.photoURL && <span className="text-red-600">Instructor name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor email</span>
                                </label>
                                <input type="text" value={user?.email}  {...register("InstructorEmail", { required: true })}  className="input input-bordered"/>
                                {errors.photoURL && <span className="text-red-600">Instructor email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class name</span>
                                </label>
                                <input type="text"  {...register("ClassName", { required: true })} placeholder="Class name" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Class name is required</span>}
                            </div>           

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Image</span>
                                </label>
                                <input type="text"  {...register("ClassImage", { required: true })} placeholder="Class Image Url" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Class Image is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available seats</span>
                                </label>
                                <input type="text"  {...register("AvailableSeats", { required: true })} placeholder="Available seats" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Available seats is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number"  {...register("Price", { required: true })} placeholder="Price" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Price is required</span>}
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Status</span>
                                </label>
                                <input type="text" value="pending"  {...register("status", { required: true })}  className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Price is required</span>}
                            </div>

        
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Add class" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAClasses;