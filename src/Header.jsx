import React from 'react';
import Name from './Name';
import { Link, useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        navigate('/login');
    };

    return <nav className="flex bg-orange-500 text-white">
        <h1 className="flex text-2xl font-semibold m-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-1 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Products App
        </h1>
        <ul className="flex m-4">
            <li className="mr-2"><Link to="/">Home</Link></li>
            <li className="mr-2"><Link to="/about">About</Link></li>
            <li className="mr-2"><Link to="/products">Products</Link></li>
            <li className="mr-2"><Link to="/users">Users</Link></li>
            <li className="mr-2"><Link to="/contact">Contact Us</Link></li>
        </ul>
        <div className="ml-auto flex mr-2">
            {localStorage.getItem('token') ?
                <div className="flex">
                    <Name name={localStorage.getItem('name')} />
                    <button onClick={onLogout} className="ml-2">Logout</button>
                </div> :
                <Link className="mt-4" to="/login">Login</Link>
            }
        </div>
    </nav>
}

export default Header;
