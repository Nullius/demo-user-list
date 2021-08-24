import React, {
    useState
} from 'react';
import Users from './Users';
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import users from '../data/randomuser.json' // from https://github.com/pixelastic/fakeusers/tree/master/data

function List() {
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(20);

    // Получение текущих постов с именами
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    
    const currentUsers = [];
    for (let i = indexOfFirstUser; i < indexOfLastUser; i++) {
        if (!users[i]) break;
        users[i].index = i;
        users[i].listPage = currentPage;
        currentUsers.push(users[i]);
    }
    
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