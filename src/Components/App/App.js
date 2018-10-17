import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import Dashboard from "../Dashboard/Dashboard";
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </div>
        );
    }
}

export default App;
