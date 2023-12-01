import { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [showpassword, setShowpassword] = useState(false);

    const navigate = useNavigate();

    if (user || gUser) {
        navigate('/');
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }


    let signInError;

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    const handleShowPassword = () => {
        setShowpassword(value => !value);
    }

    const handleSignIn = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);


    }
    return (
        <div className='flex justify-center items-center signing-container py-8 px-4'>
            <div className="w-1/4 bg-white rounded-3xl">
                <h2 className="text-center text-black mt-2 underline">Login</h2>
                <p className='text-center text-white font-light'>Today will be great.</p>
                <div className='flex justify-center'>
                    <form onSubmit={handleSignIn} className='w-4/5 mt-3' action="">
                        {/* ------------Email Field------------- */}
                        <input type="email" name="email" placeholder="Enter Your Email" className="w-full max-w-xs my-2 border-2 rounded-xl" required />

                        {/* ------------Password Field------------- */}
                        <input type={showpassword ? "text" : "password"} name="password" placeholder="Enter Your Password" className="w-full max-w-xs my-2 border-2 rounded-xl" required />

                        {signInError}

                        <div className='flex items-center'>
                            <input type="checkbox" className='w-4 h-4 mx-2' onClick={handleShowPassword} />
                            <label>Show Password</label>
                        </div>

                        {/* ------------Submit Button------------- */}
                        <input className='btn btn-primary btn-sm w-full max-w-xs my-1' type="submit" value="Login" />

                    </form>
                </div>

                <div className='w-4/5 mx-auto'>
                    <p className='font-bold text-orange-500 mt-4'>NEW TO SocialBook??</p>
                    <Link className="underline text-blue-500 font-bold" to="/signup">CLICK TO CREATE NEW ACCOUNT</Link>
                </div>

                <div className='w-4/5 mx-auto'>
                    <Link className='underline text-xl font-bold text-red-700 mt-4' to="/resetpassword">Reset Password</Link>
                </div>

                {/* -------------OR Divider--------------- */}
                <div className='flex justify-center items-center my-2'>
                    <div className="divider bg-gray-500 w-2/6 h-0.5 rounded-lg"></div>
                    <h5 className='mx-2'>OR</h5>
                    <div className="divider bg-gray-500 w-2/6 h-0.5 rounded-lg"></div>

                </div>

                <div className='flex justify-center'>
                    <button onClick={() => signInWithGoogle()} className="flex justify-center items-center w-full max-w-xs mt-2 mb-4 py-2 border rounded-2xl">
                        <img className='w-6 h-6 mr-2' src="https://i.ibb.co/vcHZKPm/google-logo.png" alt="google_logo" />
                        <p className='m-0'>CONTINUE WITH GOOGLE</p>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Login;