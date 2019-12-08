import React from 'react';

const GameBorder = (props) => {
    return(
        <div className="container game-container mt-4">
            <div className="row">
                <div className="col text-center">
                    <h1>{props.gameName}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    {props.game}
                </div>
            </div>
        </div>
    );
}

export default GameBorder;