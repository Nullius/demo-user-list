import React from 'react';
import {
    Link,
    useParams
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import users from '../data/randomuser.json' // from https://github.com/pixelastic/fakeusers/tree/master/data

function hDate(timestamp) {
    if (!timestamp || !Number.isInteger(timestamp)) return timestamp;
    const a = new Date(timestamp * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const time = date + ' ' + month + ' ' + year;
    return time;
}

function ucFirst(arr) {
    const resp = [];
    arr.forEach(element => {
        resp.push(element[0].toUpperCase() + element.slice(1));
    });
    return resp.join(' ');
}

function Hero() {
    const username = useParams(); // исправляем идентификацию пользователя (поменяли ссылку в компоненте <Users />)
    const hero = users.find((user) => user.username === username.id)

    return (
        <div className='container mt-5'>
            <h1 className='text-primary mb-3'>Details</h1>
            <h2>{ucFirst([hero.title, hero.first_name, hero.last_name])}</h2>
            <div className="row">
                <div className="col-2">
                    <img src={"/pictures/" + hero.picture} className="rounded float-start mt-3" alt={ucFirst([hero.title, hero.first_name, hero.last_name])} />
                </div>
                <div className="col-10">
                    <dl className="row mt-3">
                        <dt className="col-sm-2">Username</dt>
                        <dd className="col-sm-10">{hero.username}</dd>
                        <dt className="col-sm-2">Password</dt>
                        <dd className="col-sm-10">{hero.password}</dd>
                        <dt className="col-sm-2">Gender</dt>
                        <dd className="col-sm-10">{hero.gender}</dd>
                        <dt className="col-sm-2">Birthdate</dt>
                        <dd className="col-sm-10">{hDate(hero.birthdate)}</dd>
                        <dt className="col-sm-2">Phone</dt>
                        <dd className="col-sm-10">{hero.phone_number}</dd>
                        <dt className="col-sm-2">Email</dt>
                        <dd className="col-sm-10">{hero.email}</dd>
                        <dt className="col-sm-2">Location</dt>
                        <dd className="col-sm-10">
                            <dl className="row">
                                <dt className="col-sm-2">State</dt>
                                <dd className="col-sm-10">{hero.location.state}</dd>
                                <dt className="col-sm-2">City</dt>
                                <dd className="col-sm-10">{hero.location.city}</dd>
                                <dt className="col-sm-2">Street</dt>
                                <dd className="col-sm-10">{hero.location.street}</dd>
                                <dt className="col-sm-2">Postcode</dt>
                                <dd className="col-sm-10">{hero.location.postcode}</dd>
                            </dl>
                        </dd>
                    </dl>
                </div>
            </div>
            <Link to="/"><button type="button" className="btn btn-primary">Back</button></Link>
        </div>
    );
}

export default Hero;