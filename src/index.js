import React from 'react';
import ReactDOM from 'react-dom';

import Hypercasuals from './Hypercasuals';

const App = () => {
    return (
        <Hypercasuals />
    );
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
);