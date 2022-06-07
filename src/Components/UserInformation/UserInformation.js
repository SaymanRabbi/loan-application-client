import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const UserInformation = () => {
    return (
        <div>
            <div className="md:w-2/4 w-full justify-center mx-auto gap-3 flex">
                <Link to='/' className="btn rounded">Personal details</Link>
                <Link to='/busniess' className="btn rounded">Business details</Link>
                <Link to='/loan' className="btn rounded">Loan Application details</Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default UserInformation;