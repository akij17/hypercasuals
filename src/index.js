import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Snake from './components/games/snake/Snake';
import Game from './components/Game';
import Hypercasuals from './Hypercasuals';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route 
                        path="/snake"
                        render={(props) => <Game game={Snake} gameName="Snake"/>}
                    />
                </Switch>  
            </Router>
            <Hypercasuals title="HyperCasuals"/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);