import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../Loading";

const Header = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }
    const handleSignOut = () => {
        signOut(auth);
    };
    const signOutConfirmation = () => {
        const proceed = window.confirm("Signing Out");
        if (proceed) {
            handleSignOut();
        }
        else {
            return;
        }

    }
    return (
        <div className="navbar bg-white">
            <div className="navbar-start">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>SocialBook</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li className='px-3 text-3xl'><Link to='/'><IoHomeOutline /></Link></li>

                </ul>
            </div>

            <div className={user ? 'navbar-end' : 'navbar-end hidden'}>
                <ul className="menu menu-horizontal p-0">
                    <li className='text-3xl'><Link to='/notifications'><IoIosNotificationsOutline />
                    </Link></li>
                    <li className='text-white'>
                        <button className='w-16' onClick={signOutConfirmation}>
                            <div className="avatar">
                                <div className="rounded-full ring ring-primary ring-offset-base-100">
                                    <img src="https://i.ibb.co/ctFS6Qt/login-Avatar.png" alt="login avatar" />
                                </div>
                            </div>
                        </button>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Header;