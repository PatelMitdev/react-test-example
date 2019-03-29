import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Grievances from './components/Grievances';

class App extends Component {
   
  render() {
    return (<Provider store={store}>
        <div className="App">
          <Router>
            <div>
              <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <Link className="navbar-brand" to={'/'}>
                      <p>{"ToDo App"}</p>
                    </Link>
                  </div>
                  <ul className="nav navbar-nav">
                    <li className="active">
                      <Link to={'/'}>Grievances</Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <Switch>
                <Route exact path='/' component={Grievances} />
              </Switch>
            </div>
          </Router>
        </div>
    </Provider>

    );
  }
}

export default App;
