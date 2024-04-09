import React from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png';
import thumbnail2 from '../../assets/thumbnail2.png';
import thumbnail3 from '../../assets/thumbnail3.png';
import thumbnail4 from '../../assets/thumbnail4.png';
import thumbnail5 from '../../assets/thumbnail5.png';
import thumbnail6 from '../../assets/thumbnail6.png';
import thumbnail7 from '../../assets/thumbnail7.png';
import thumbnail8 from '../../assets/thumbnail8.png';
import {Link} from 'react-router-dom';

const Feed = () => {
  return (
    <div className = 'feed'>
       <Link to = {'video/20/4521'} className = 'card'>
         <img src = {thumbnail1} alt="thumb1"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </Link>
       <div className = 'card'>
         <img src = {thumbnail2} alt="thumb2"/>
         <h2>Vlog-2 : Are you ready to go?</h2>
         <h3>Sam's arena</h3>
         <p>100K views &bull; 1 days ago</p>
       </div>
       <div className = 'card'>
         <img src = {thumbnail3} alt="thumb3"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div>
       <div className = 'card'>
         <img src = {thumbnail4} alt="thumb4"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div>
       <div className = 'card'>
         <img src = {thumbnail5} alt="thumb5"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div>
       <div className = 'card'>
         <img src = {thumbnail6} alt="thumb6"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div>
       <div className = 'card'>
         <img src = {thumbnail7} alt="thumb7"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div> 
       <div className = 'card'>
         <img src = {thumbnail8} alt="thumb8"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div>
       <div className = 'card'>
         <img src = {thumbnail8} alt="thumb8"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div>      
       <div className = 'card'>
         <img src = {thumbnail4} alt="thumb4"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div>
       <div className = 'card'>
         <img src = {thumbnail5} alt="thumb5"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div>
       <div className = 'card'>
         <img src = {thumbnail6} alt="thumb6"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div>
       <div className = 'card'>
         <img src = {thumbnail7} alt="thumb7"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div> 
       <div className = 'card'>
         <img src = {thumbnail8} alt="thumb8"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div>
       <div className = 'card'>
         <img src = {thumbnail8} alt="thumb8"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div>       
       <div className = 'card'>
         <img src = {thumbnail5} alt="thumb5"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div>
       <div className = 'card'>
         <img src = {thumbnail6} alt="thumb6"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div>
       <div className = 'card'>
         <img src = {thumbnail7} alt="thumb7"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div> 
       <div className = 'card'>
         <img src = {thumbnail8} alt="thumb8"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div>
       <div className = 'card'>
         <img src = {thumbnail8} alt="thumb8"/>
         <h2>Vlog-1 : Here we go!</h2>
         <h3>Sam's arena</h3>
         <p>150K views &bull; 2 days ago</p>
       </div>       
    </div>
  ) 
}

export default Feed