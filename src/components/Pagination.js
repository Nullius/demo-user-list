import React from 'react';

const Pagination = ({ currentPage, usersPerPage, totalUsers, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='mb-5'>
            <ul className='pagination'>
                {pageNumbers.map((number) => {
                    if (number !== currentPage)
                        return <li key={number} className='page-item'><button onClick={() => paginate(number)} className='page-link'>{number}</button></li>
                    return <li key={number} className='page-item active'><button onClick={() => paginate(number)} className='page-link'>{number}</button></li>
                })}
            </ul>
        </nav>
    );
};

export default Pagination;