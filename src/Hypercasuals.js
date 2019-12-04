import React from 'react';

import Card from './components/Card';
import snakeBannerImage from './assets/banners/snake-banner.jpg';


class Hypercasuals extends React.Component {
    render() {
        const image = {
            url: snakeBannerImage
        }
        return (
            <div className="container">
                <h1 className="text-center mt-4">Hypercasuals</h1>
                <div className="row mt-5">
                    <div className="col">
                        <Card banner={image} title="Snake Game"/>
                    </div>
                    <div className="col">
                        <Card banner={image} title="Snake Game"/>
                    </div>
                    <div className="col">
                        <Card banner={image} title="Snake Game"/>
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col">
                        <Card banner={image} title="Snake Game"/>
                    </div>
                    <div className="col">
                        <Card banner={image} title="Snake Game"/>
                    </div>
                    <div className="col">
                        <Card banner={image} title="Snake Game"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hypercasuals;