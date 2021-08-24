import React, {
    useState
} from 'react';
import Users from './Users';
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import users from '../data/randomuser.json' // from https://github.com/pixelastic/fakeusers/tree/master/data

function List() {
    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 20; // Нет смысла засовывать константу в стейт - туда нужно засовывать данные, изменения в которых должны триггерить изменения компонентов
    const usersOffset = (currentPage - 1) * usersPerPage
    const currentUsers = users.slice(usersOffset, usersOffset + 20) // Цикл лучше заменить обычным разрезанием массива. Нам просто надо получить кусочек наших данных
    
    // Изменение страницы
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='container mt-5'>
            <h1 className='text-primary mb-3'>Usernames</h1>
            <Users users={currentUsers} />
            <Pagination
                currentPage={currentPage}
                usersPerPage={usersPerPage}
                totalUsers={users.length}
                paginate={paginate}
            />
        </div>
    );
};

export default List;