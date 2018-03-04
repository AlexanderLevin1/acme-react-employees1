import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location, employees, managers }) => {
    const path = location.path
    return (
    <ul>
        <li>
        {
            path === '/' ? (
                <span>Employees{ employees.length }</span>
            ):(
                <Link to='/'>Employees { employees.length }</Link>
            )
        }
        </li>
        <li>
        {
            path === '/managers' ? (
                <span>Managers{ managers.length }</span>
            ):(
                <Link to='/managers'>Managers</Link>
            )
        }
        </li>
    </ul>
)
};

export default Nav;
