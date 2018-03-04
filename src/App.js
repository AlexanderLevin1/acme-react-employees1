import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Nav from './Nav';
import axios from 'axios';
import Employees from './Employees';


const Managers = () => <div>Managers</div>;

class App extends Component{
    constructor() {
    super()
    this.state = {
        employees: [],
        managers: []
    }
}
componentDidMount() {
  axios.get('/api/employees')
    .then( result => result.data)
    .then( employees => this.setState({ employees }))

  axios.get('/api/managers')
  .then( result => result.data)
  .then( managers => this.setState({ managers }))


}
    render() {
        const { employees } = this.state;
        return(
        <Router>
        <div>
        { employees.length }
            <Route component={ ({ location }) => <Nav employees = { employees } location={ location }/> } />
            <Route exact path='/' component={ () => <Employees employees={ employees }/>} />
            <Route path='/managers' component={ Managers } />
            </div>
        </Router>
    )
    }
}

export default App;
