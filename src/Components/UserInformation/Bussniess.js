import React from 'react';
import useData from '../../hooks/useData';

const Bussniess = () => {
    const [user] = useData()
    return (
        <div className="overflow-x-auto mt-10 md:w-3/4 w-full mx-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Business Name</th>
                        <th>GST no</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((data, index) => <tr>

                            <th>{index + 1}</th>
                            <td>{data?.business}</td>
                            <td>{data?.gstNumber}</td>
                            <td>{`${data?.city}, ${data?.state}, ${data?.zip}`}</td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Bussniess;