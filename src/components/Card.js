import React from 'react';

import '../css/basicStyle.module.css';

const Card = (props) => {
    console.log(props.banner.url)
    return(
        <a className="boring-a" href="">
            <div className="card" style={{width: '20rem'}}>
                <img className="card-img-top" src={props.banner.url} alt="game-pic"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some random text that should be replaced by something meaningful.</p>
                </div> 
            </div>
        </a>
    );
}

export default Card;