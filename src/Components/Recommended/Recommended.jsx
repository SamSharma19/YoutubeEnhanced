import React from 'react'
import './Recommended.css'
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import {useState, useEffect} from 'react';
import { API_KEY , valueconvert} from '../../data';
import {Link, useParams} from 'react-router-dom';

const Recommended = () => {
  
  const {categoryId} = useParams();
  
  const [apiData, setapiData] = useState([]);
  
  const fetchData = async() => {
     const relatedvideourl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`
     await fetch(relatedvideourl).then(res=>res.json()).then(data => setapiData(data.items)) 
  }
  
  useEffect(() => {
    fetchData();
   },[categoryId]);

  return (
    <div className = "recommended">
      {apiData.map((item,index) => {

        return(
          <Link to = {`/video/${item.snippet.categoryId}/${item.id}`} className = "side-video-list">
          <img src = {item?item.snippet.thumbnails.medium.url:""} alt = "1" />
          <div className = "vid-info">
             <h4>{item?item.snippet.title:""}</h4>
             <p>{item?item.snippet.channelTitle:""}</p>
             <p>{valueconvert(item?item.statistics.viewCount:2000)} Views</p>
          </div>
        </Link>
        )
      })}
    </div>
  )
}

export default Recommended