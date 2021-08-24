import React from 'react';
/**
* Немного переформатировал и убрал условие
* Вообще есть хорошая библиотека classNames, ей удобнее условные классы выставлять
*/
const Pagination = ({ currentPage, usersPerPage, totalUsers, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='mb-5'>
            <ul className='pagination'>
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={
                            (number === currentPage)
                            ? 'page-item active'
                            : 'page-item'
                        }
                    >
                        <button onClick={() => paginate(number)} className='page-link'>{number}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;