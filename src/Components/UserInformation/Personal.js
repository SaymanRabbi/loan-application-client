import React from 'react';
import useData from '../../hooks/useData';

const Personal = () => {
    const [user] = useData()
    return (
        <div className="overflow-x-auto mt-10 md:w-3/4 w-full mx-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((data, index) => <tr>

                            <th>{index + 1}</th>
                            <td>{data?.firstName + data.lastName}</td>
                            <td>{data?.age}</td>
                            <td>{data?.PhoneNumber
                            }</td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Personal;