import React from 'react';
import Sketch from 'react-p5';

let w;
let h;
class MySnake {

    constructor(p5) {
        this.body = [];
        this.body[0] = p5.createVector(p5.floor(w / 2), p5.floor(h / 2));
        this.xdir = 0;
        this.ydir = 0;
        this.len = 0;
    }

    setDir(x, y) {
        this.xdir = x;
        this.ydir = y;
    }

    update() {
        let head = this.body[this.body.length - 1].copy();
        this.body.shift();
        head.x += this.xdir;
        head.y += this.ydir;
        this.body.push(head);
    }

    grow() {
        let head = this.body[this.body.length - 1].copy();
        this.len++;
        this.body.push(head);
    }

    endGame() {
        let x = this.body[this.body.length - 1].x;
        let y = this.body[this.body.length - 1].y;
        if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
            return true;
        }
        for (let i = 0; i < this.body.length - 1; i++) {
            let part = this.body[i];
            if (part.x == x && part.y == y) {
                return true;
            }
        }
        return false;
    }

    eat(pos) {
        let x = this.body[this.body.length - 1].x;
        let y = this.body[this.body.length - 1].y;
        if (x == pos.x && y == pos.y) {
            this.grow();
            return true;
        }
        return false;
    }

    show(p5) {
        for (let i = 0; i < this.body.length; i++) {
            p5.fill(0);
            p5.noStroke();
            p5.rect(this.body[i].x, this.body[i].y, 1, 1)
        }
    }

}

let snake;
let rez = 20;
let food;

class Snake extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            p5: undefined
        }
    }

    foodLocation(p5) {
        let x = p5.floor(p5.random(w));
        let y = p5.floor(p5.random(h));
        food = p5.createVector(x, y);
      }
      
    keyPressed() {
        if (this.state.p5.keyCode === this.state.p5.LEFT_ARROW) {
          snake.setDir(-1, 0);
        } else if (this.state.p5.keyCode === this.state.p5.RIGHT_ARROW) {
          snake.setDir(1, 0);
        } else if (this.state.p5.keyCode === this.state.p5.DOWN_ARROW) {
          snake.setDir(0, 1);
        } else if (this.state.p5.keyCode === this.state.p5.UP_ARROW) {
          snake.setDir(0, -1);
        } else if (this.state.p5.key == ' ') {
          snake.grow();
        }
      
      }

    render() {
        return (
            <Sketch
                setup={
                    (p5, canvasParentRef) => {
                        this.setState({p5: p5});
                        p5.createCanvas(400, 400).parent(canvasParentRef);
                        w = p5.floor(p5.width / rez);
                        h = p5.floor(p5.height / rez);
                        p5.frameRate(5);
                        snake = new MySnake(p5);
                        this.foodLocation(p5);
                    }
                }

                draw={
                    (p5) => {
                        p5.scale(rez);
                        p5.background(220);
                        if (snake.eat(food)) {
                            this.foodLocation(p5);
                        }
                        snake.update();
                        snake.show(p5);
                        if (snake.endGame()) {
                            p5.background(255, 0, 0);
                            p5.noLoop();
                        }

                        p5.noStroke();
                        p5.fill(255, 0, 0);
                        p5.rect(food.x, food.y, 1, 1);
                    }
                }
            />
        );
    }
}

export default Snake;