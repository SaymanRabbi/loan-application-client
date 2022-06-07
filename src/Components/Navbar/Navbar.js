import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-5">
            <div className="flex-1">

                <Link to='/' className="btn btn-ghost normal-case text-xl">Loan Information</Link>

            </div>
            <div className="flex-none">
                <Link to='/form' className="btn btn-ghost normal-case text-xl">Get Loan</Link>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://api.lorem.space/image/face?hash=33791" alt='' />
                        </div>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between" href='#1'>
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a href='#2'>Settings</a></li>
                        <li><a href='#2'>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;