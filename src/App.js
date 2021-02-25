import React, { useEffect, useState } from 'react';
import './App.css';
import { Multiselect } from 'multiselect-react-dropdown';
import axios from 'axios';
import VideosList from './components/videosList/VideosList';

function App() {
  const dataTags = [
    { course: 'spring' },
    { course: 'react' },
    { course: 'redux' },

  ]
  const dataLevels = [
    { level: 'ELEMENTARY' },
   { level: 'EASY'},
    { level: 'MEDIUM' },
    { level: 'HARD' }, 

  ]

  const [videoList, setVideoList] = useState([]);
  const [tags, setTags] = useState([]);
  const [level, setLevel] = useState(null);
  const [errMessage, setErrMessage] = useState(null);

  useEffect(async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/videos', {
        params: {
          tags,
          level
        }
      });
      setVideoList(response.data);
    } catch (err) {
      console.error(err.message);
      setErrMessage(err.message);
    }
    
  }, [tags, level]);

  const handleTagsChange = (e) => {
    e.preventDefault();
    setTags(e.target.value);
    console.log(tags);
  }

  const handleLevelChange = (e) => {
    
    setLevel(e.target.value);

  }

  return (
    <div className="App">
      <h1>Video Course listing</h1>
      {errMessage && <h3> `Ooops something went wrong : ${errMessage}`</h3>}
      <div className='filters'>
        <Multiselect options={dataTags} value={tags} onChange={handleTagsChange} displayValue='course' />
        <Multiselect singleSelect options={dataLevels} value={level} onChange={handleLevelChange} displayValue='level' />
        <VideosList videoList={videoList} />
      </div>
    </div>
  );
}

export default App;
