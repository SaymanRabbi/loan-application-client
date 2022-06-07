import React from 'react';
import useData from '../../hooks/useData';

const Loan = () => {
    const [user] = useData()
    return (
        <div className="overflow-x-auto mt-10 md:w-3/4 w-full mx-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>loan Tenure</th>
                        <th>interest</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((data, index) => <tr key={index}>
                            <td>{data?.amount}</td>
                            <td>{data?.interest}</td>
                            <td>{data?.loan}</td>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Loan;