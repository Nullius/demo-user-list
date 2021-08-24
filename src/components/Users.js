import React from 'react';
import {Link} from "react-router-dom";

function Users({users}) {
    // лучше не использовать индекс в качестве key - об ошибке уникальности индекса даже в ворнингах в консоли было написано
    // кнопке key вообще не нужен

    return (
        <div className='list-group mb-4'>
            {users.map((user) => (
                <Link key={user.username} to={'/user/' + user.username}>
                    <button type="button" className="list-group-item list-group-item-action">
                        {user.first_name} {user.last_name}
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default Users;