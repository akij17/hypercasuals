import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Snake from './Snake';
import Hypercasuals from './Hypercasuals';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/snake" component={Snake} />
                </Switch>  
            </Router>
            <Hypercasuals />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);