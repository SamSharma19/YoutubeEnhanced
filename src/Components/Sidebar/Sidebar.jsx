import React from 'react';
import './Sidebar.css';
import Subs from '../../assets/subscriprion.png';
import Game from '../../assets/game_icon.png';
import Music from '../../assets/music.png';
import Explore from '../../assets/explore.png';
import Enter from '../../assets/entertainment.png';
import News from '../../assets/news.png';
import Automobiles from '../../assets/automobiles.png';
import Blogs from '../../assets/blogs.png';
import Jack from '../../assets/jack.png';
import Simon from '../../assets/simon.png';
import Tom from '../../assets/tom.png';
import Min from '../../assets/gerard.png';
import Tech from '../../assets/tech.png';

const Sidebar = ({Sideview, category, setCategory}) => {
  return (
    <div className = {`side-bar ${Sideview?"":"small-sidebar"}`}>
        <div className = "sidebar-links" >
           <div className = {`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
              <img src = "../../src/assets/home.png" alt = "" /><p>Home</p>
           </div>
           <div className = {`side-link ${category===24?"active":""}`} onClick = {()=>setCategory(24)}>
              <img src = {Enter} alt = ""></img><p>Entertainment</p>
           </div>
           <div className = {`side-link ${category===20?"active":""}`} onClick = {()=>setCategory(20)}> 
              <img src = {Game} alt = ""></img><p>Gaming</p>
           </div>
           <div className = {`side-link ${category===10?"active":""}`} onClick = {()=>setCategory(10)}>
              <img src = {Music} alt = ""></img><p>Music</p>
           </div>
           <div className = {`side-link ${category===1?"active":""}`} onClick = {()=>setCategory(1)}>
              <img src = {Explore} alt = ""></img><p>Explore</p>
           </div>
           <div className = {`side-link ${category===28?"active":""}`} onClick = {()=>setCategory(28)}>
              <img src = {Tech} alt = ""></img><p>Technology</p>
           </div>
           <div className = {`side-link ${category===25?"active":""}`} onClick = {()=>setCategory(25)}>
              <img src = {News} alt = ""></img><p>News</p>
           </div>
           <div className = {`side-link ${category===2?"active":""}`} onClick = {()=>setCategory(2)}>
              <img src = {Automobiles} alt = ""></img><p>Automobiles</p>
           </div>
           <div className = {`side-link ${category===22?"active":""}`} onClick = {()=>setCategory(22)}>
              <img src = {Blogs} alt = ""></img><p>Blogs</p>
           </div>
           <hr />
        </div>
        <div className = "subscribed-list">
            <h3>Subscribed</h3>
            <div className = "side-link">
              <img src = {Jack} alt = "sub1" /><p>Pewdiepie</p>
            </div>
            <div className = "side-link">
              <img src = {Simon} alt = "sub1" /><p>Mr.Beast</p>
            </div>
            <div className = "side-link">
              <img src = {Tom} alt = "sub1" /><p>Justin B</p>
            </div>
            <div className = "side-link">
              <img src = {Min} alt = "sub1" /><p>5-Min Craft</p>
            </div>
        </div>
    </div>
  );
}

export default Sidebar