import React from 'react';
import { Link } from 'react-router-dom';

const Employees = ({ employees }) => {
    return(
        <ul>
        {
            employees.map( employee => {
                return(
                    <li key={employee.id}>
                  {/*  <Link to={`/employees/${ employee.id} `}></Link>*/}
                    { employee.name }

                    </li>
                )
            })
        }
            </ul>
    )
};

export default Employees;
