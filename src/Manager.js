import React from 'react';
import { Link } from 'react-router-dom';

const Managers = ({ managers }) => {
    return(
        <ul>
        {
            employees.filter( employees => {
                return(
                    <li key={manager.id}>
                    { !employee.managerId }
                    </li>
                )
            })
        }
            </ul>
    )
};

export default Employees;
