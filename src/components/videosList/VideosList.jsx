import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './videosList.css';
import VideoCard from '../video/VideoCard';

const VideosList = (props) => (

    <div className="card-list">
    {props.videoList.map((video) => (
      <VideoCard key={video.id} video={video} />
    ))}
  </div>

)

export default VideosList;
