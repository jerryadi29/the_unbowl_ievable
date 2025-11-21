import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
    Outlet,
} from "react-router-dom";

export default function NavBar() {
    return (
        <nav className='fixed z-10 top-2 flex flex-row justify-evenly items-center px-8 bg-white w-3/4 gap-10 rounded-md border-2 border-black-600 shadow-md'>
            <h1 className='text-1xl font-bold text-green-600'>The Unbowl-ievable</h1>
            <ul className='flex-1 flex flex-row justify-evenly items-center gap-4 w-full'>
                <ul className='flex-1 flex flex-row justify-end items-center gap-12'>
                    <Link to='/'>
                        Home
                    </Link>
                    <Link to='/Menu'>
                        Menu
                    </Link>
                    <Link to='/About Us'>
                        About Us
                    </Link>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </ul>
                <ul className='flex-1 flex flex-row justify-end items-center'>


                    <Link to='/profile'>
                        <a href="#" class="inline-flex items-center justify-center p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand group">
                            <svg class="w-4 h-4 me-2 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                            Profile
                        </a>
                    </Link>

                    <Link to='/addtocart'>
                        <a href="#" class="inline-flex items-center justify-center p-4 border-b border-transparent rounded-t-base hover:text-fg-brand hover:border-brand group">
                            <svg class="w-4 h-4 me-2 text-body group-hover:text-fg-brand" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                            Add To cart
                        </a>
                    </Link>

                </ul>

            </ul>
        </nav>
    )
}
