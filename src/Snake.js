import React from 'react';
import Sketch from 'react-p5';

class Snake extends React.Component {
    render() {
        return(
            <Sketch
                setup={
                    (p5, canvasParentRef) => {
                        p5.createCanvas(400, 400).parent(canvasParentRef);
                    } 
                }
                draw={
                    (p5) => {
                        p5.background(0);
                    }
                }
            />
        );
    }
}

export default Snake;