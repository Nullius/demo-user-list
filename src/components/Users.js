import React from 'react';
import {Link} from "react-router-dom";

function Users({users}) {
    return (
        <div className='list-group mb-4'>
            {users.map((user, index) => (
                <Link key={user.index} to={'/user/' + user.index}>
                    <button key={index} type="button" className="list-group-item list-group-item-action">
                        {user.first_name} {user.last_name}
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default Users;