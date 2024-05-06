import React from 'react'
import './PlayVideo.css'
import tempvideo from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY, valueconvert } from '../../data';
import moment from 'moment';


const PlayVideo = () => {
  
  const {videoId} = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setchannelData] = useState(null);
  const [commentData, setcommentData] = useState([]);

  const fetchVideoData = async () => { 
    //Fetching video details
    const videodetailurl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    await fetch(videodetailurl).then(res=>res.json()).then(data => setApiData(data.items[0]))
   }

   const fetchChannelData = async () => { 
    //Fetching channel details
    const channeldetailurl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    await fetch(channeldetailurl).then(res=>res.json()).then(data => setchannelData(data.items[0]))

    //Fetching comment data
    const commenturl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&moderationStatus=published&order=relevance&textFormat=plainText&videoId=${videoId}&key=${API_KEY}`
    await fetch(commenturl).then(res=>res.json()).then(data => setcommentData(data.items))
}
   
   
   //calling the fetch data func once when the page is rendered
   useEffect(() => {
    fetchVideoData();
   },[videoId]);
   
   //calling after fetchvideodetails
   useEffect(() => {
    fetchChannelData();
   },[apiData]);


  return (
    <div className = "playvideo">
       {/*<video src={tempvideo} controls autoPlay muted></video>*/}
       <iframe src= {`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <h3>{apiData?apiData.snippet.title:"Title here"}</h3>
       <div className="playvideo-info">
          <p> {apiData?valueconvert(apiData.statistics.viewCount) : "16K"} Views &bull; {moment(apiData?apiData.snippet.publishedAt: "a day ago").fromNow()}</p>
         <div>
          <span><img src = {like} alt = "like"></img> 20K</span>
          <span><img src = {dislike} alt = "dilike"></img>0</span>
          <span><img src = {share} alt = "share"></img>19K</span>
          <span><img src = {save} alt = "save"></img></span>
         </div>
        </div> 
       <hr />
       <div className = "channel">
          <img src = {channelData?channelData.snippet.thumbnails.default.url:jack} alt = "Channel-owner" />
          <div>
             <p>{apiData?apiData.snippet.channelTitle: "Sam_musics"}</p>
             <span>{valueconvert(channelData?channelData.statistics.subscriberCount:20)} Subscribers</span>
          </div>  
          <button>Subscribe</button>
       </div>
       <div className = "Video-description">
          <p>{apiData?apiData.snippet.description: "Description of the video"}</p>
          <hr />
          <h4>{apiData?valueconvert(apiData.statistics.commentCount): 1000} Comments</h4>
          {commentData.map((item,index) => {
              

              return (
                <div key = {index} className = "comments">
                <img src = {item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt = 'profile'/>
                   <div>
                       <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span> </h3>
                       <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                       <div className = "comment-action">
                           <img src = {like}  alt = ""/> <span>{valueconvert(item.snippet.topLevelComment.snippet.likeCount)} </span>
                           <img src = {dislike} alt = ""/> <span></span>
                       </div>
                   </div>
             </div>
              )
          })}
        </div>  
    </div>    
  )
}

export default PlayVideo