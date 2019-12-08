import React from 'react';

import GameBorder from './GameBorder';

const Game = (props) => {
    return(
        <div>
            <GameBorder game={<props.game/>} gameName={props.gameName} />
        </div>
    );
}

export default Game;