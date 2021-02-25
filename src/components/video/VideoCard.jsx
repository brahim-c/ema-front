import React from 'react';
import './videoCard.css';

const VideoCard = (props) => (

    <div className="card-container">
        <h1>{props.video.title}</h1>
        <p>{props.video.description}</p>
    </div>

)

export default VideoCard;
