import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';




const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const insertUser = { name: data.name, email: data.email, image:data.photoURL,role:data.role }
                        console.log(insertUser);
                        fetch('http://localhost:8000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(insertUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <>
            {/* <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet> */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">role</span>
                                </label>
                                <input type="text"  {...register("role", { required: false })} name="role" value="student" placeholder="role" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 15,
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                               
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p><small>Already have an account <Link to="/login">Login</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;



// const SignUp = () => {

//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');


//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setSuccess('');
//         setError('');
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         const name = event.target.name.value;
//         const photo = event.target.photoUrl.value;



//         if (password.length < 6) {
//             setError('Please add at least 6 characters in your password')
//             return;
//         }

//         createUserWithEmailAndPassword(auth, email, password)
//             .then(result => {
//                 const loggedUser = result.user;

//                 setError('');
//                 event.target.reset();
//                 setSuccess('User has been created successfully');
//                 updateUserData(result.user, name, photo);
//             })
//             .catch(error => {

//                 setError(error.message);
//             })
//     }

//     const updateUserData = (user, name, photo) => {
//         updateProfile(user, {
//             displayName: name,
//             photoURL: photo
//         })
//             .then(() => {



//                 // for users data 
//                 const saveUser = {name:data.name, email: data.email}
//                 fetch('http://localhost:8000/users'), {
//                     method:'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(saveUser)
//                 }
//                 .then(res => res.json())
//                 .then(data => {
//                     if(data.insertedId){
//                         console.log(data.insertedId)
//                     } 
//                 })

//                 console.log('user name and photo updated')
//             })
//             .catch(error => {
//                 setError(error.message);
//             })
//     }


//     return (
//         <div className="hero  bg-base-200">
//             <div className="hero-content flex-col lg:flex-row my-3">
//                 <div className="w-1/2 mr-12">
//                     {/* <img src={img} alt="" /> */}
//                     <img alt="" />
//                 </div>
//                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                     <div className="card-body">
//                         <h1 className="text-3xl text-center font-bold">Sign Up</h1>
//                         {/* <form onSubmit={handleSignUp}> */}
//                         <form onSubmit={handleSubmit}>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input type="text" name='name' placeholder="name" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="text" name='email' placeholder="email" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="text" name='password' placeholder="password" className="input input-bordered" />
//                             </div>
//                             {/* <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Confirm Password</span>
//                                 </label>
//                                 <input type="text" name='password' placeholder="Confirm password" className="input input-bordered" />

//                             </div> */}
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Photo URL</span>
//                                 </label>
//                                 <input type="text" name='photoUrl' placeholder="photoUrl" className="input input-bordered" />
//                             </div>
//                             <div className="form-control mt-6">
//                                 <input className="btn btn-primary" type="submit" value="Sign Up" />
//                             </div>
//                         </form>
//                         <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;