import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import auth from '../../firebase.init';
import Loading from '../Loading';

const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const [passwordError, setPasswordError] = useState('');
    const [showpassword, setShowpassword] = useState(false);

    const navigate = useNavigate();


    if (loading || gLoading || updating) {
        <Loading></Loading>
    }

    let signInError;
    if (error || gError || uError) {
        signInError = <p className='text-red-500 font-bold'><small>{error?.message || gError?.message}</small></p>
    }

    if (user || gUser) {
        navigate('/');
    }

    const handlePasswordFocus = () => {
        setPasswordError('')
    }

    const handleShowPassword = () => {
        setShowpassword(value => !value);
    }

    const handleSignUp = async event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirm.value;
        if (password !== confirmPassword) {
            setPasswordError('Sorry!! Password and Confirm Password did not match')

        }
        else {
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            // navigate('/')
        }

    }
    return (
        <div className='flex justify-center items-center py-8 px-4'>
            <div className="w-1/4 bg-white rounded-3xl">
                <h2 className="text-center text-black mt-2 underline">Sign Up</h2>
                <div className='flex justify-center'>
                    <form onSubmit={handleSignUp} className='w-4/5 mt-3' action="">
                        {/* ------------Name Field------------- */}
                        <input type="text" name="name" placeholder="Your Name" className="w-full max-w-xs my-2 border-2 rounded-xl" required />

                        {/* ------------Email Field------------- */}
                        <input type="email" name="email" placeholder="Enter Your Email" className="w-full max-w-xs my-2 border-2 rounded-xl" required />

                        {/* ------------Password Field------------- */}
                        <input onFocus={handlePasswordFocus} type={showpassword ? "text" : "password"} name="password" placeholder="Enter Your Password" className="w-full max-w-xs my-2 border-2 rounded-xl" required />

                        {/* ------------Confirm Password Field------------- */}
                        <input onFocus={handlePasswordFocus} type={showpassword ? "text" : "password"} name="confirm" placeholder="Enter Your Confirm Password" className="w-full max-w-xs my-2 border-2 rounded-xl" required />

                        <p className='text-red-500 font-bold'><small>{passwordError}</small></p>
                        {signInError}

                        <div className='flex items-center'>
                            <input type="checkbox" className='w-4 h-4 mx-2' onClick={handleShowPassword} />
                            <label>Show Password</label>
                        </div>


                        {/* ------------Submit Button------------- */}
                        <input className='btn btn-primary btn-sm w-full max-w-xs my-1' type="submit" value="Sign up" />
                    </form>
                </div>

                <div className='w-4/5 mx-auto'>
                    <p className='font-bold text-orange-500 my-2'>Already Have An Account??</p>
                    <Link className="font-bold underline text-blue-500" to="/login">CLICK HERE TO LOGIN</Link>
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

export default SignUp;