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

        console.log(data);
        // createUser(data.email, data.password)
        //     .then(result => {

        //         const loggedUser = result.user;
        //         console.log(loggedUser);

        //         updateUserProfile(data.name, data.photoURL)
        //             .then(() => {
        //                 const insertUser = { name: data.name, email: data.email, image:data.photoURL,role:data.role }
        //                 console.log(insertUser);
        //                 fetch('http://localhost:8000/users', {
        //                     method: 'POST',
        //                     headers: {
        //                         'content-type': 'application/json'
        //                     },
        //                     body: JSON.stringify(insertUser)
        //                 })
        //                     .then(res => res.json())
        //                     .then(data => {
        //                         if (data.insertedId) {
        //                             reset();
        //                             Swal.fire({
        //                                 position: 'top-end',
        //                                 icon: 'success',
        //                                 title: 'User created successfully.',
        //                                 showConfirmButton: false,
        //                                 timer: 1500
        //                             });
                                    
        //                         }
        //                     })

        //             })
        //             .catch(error => console.log(error))
        //     })

        }

        console.log(user)
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add A class</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                           

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor name</span>
                                </label>
                                <input type="text" value={user.displayName}  {...register("InstructorName", { required: false })}  className="input input-bordered"/>
                                {errors.photoURL && <span className="text-red-600">Instructor name is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor email</span>
                                </label>
                                <input type="text" value={user.email}  {...register("InstructorEmail", { required: false })}  className="input input-bordered"/>
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