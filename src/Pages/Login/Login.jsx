import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';


const Login = () => {

    const [error, setError] = useState('');

    const { signIn, googleSignIn, user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                event.target.reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Log in success',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                navigate(from, { replace: true })
            })
            .catch(error => { })
    }

    return (

        <div className='-mt-10'>
          <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://img.freepik.com/free-vector/my-password-concept-illustration_114360-4294.jpg" alt="" className='h-[500px] mx-10' />

                    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="text-center lg:text-left">
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form action="" onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                    <label className="label">
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline btn-default">Login</button>
                                </div>

                                {
                                    !user && <SocialLogin></SocialLogin>
                                }
                            </form>    

                            <p className='my-4 text-center'>New to <span className=' font-bold'>YouDrawing</span> ? <Link className='text-pink-400 font-bold' to="/signup">Sign Up</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;