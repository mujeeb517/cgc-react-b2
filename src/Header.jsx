import React from 'react';
import Name from './Name';

function Header() {
    return <nav class="flex bg-orange-500 text-white">
        <h1 class="flex text-2xl font-semibold m-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-1 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Products App
        </h1>
        <ul class="flex m-4">
            <li class="mr-2"><a href="">Home</a></li>
            <li class="mr-2"><a href="">About</a></li>
            <li class="mr-2"><a href="">Products</a></li>
            <li class="mr-2"><a href="">Contact Us</a></li>
        </ul>
        <div>
            <Name name="John" />
        </div>
    </nav>
}

export default Header;
