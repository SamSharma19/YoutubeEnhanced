import React from 'react'
import './Navbar.css'

const Navbar = ({setSideview}) => {
  return (
    <div className = "Navbar flex-div">
        <div className = "left-menu flex-div">
            <img src="../../src/assets/menu.png" className = "menu-img" onClick = {()=>setSideview(prev=>prev===false?true:false)} alt="menu" />
            <img src="../../src/assets/logo.jpg" className = "logo-img"alt="logo" />
        </div>

        <div className = "mid-menu flex-div">
            <input type = "text" placeholder = "Search" className = "search-bar flex-div" />
            <img src = "../../src/assets/search.png" className = "search-img" alt = "search_icon" />
        </div>

        <div className = "right-menu flex-div">
            <img src="../../src/assets/upload.png" alt="upload" className = "upload-img"/>
            <img src="../../src/assets/notification.png" alt="notification" className = "notify-img"/>
            <img src="../../src/assets/more.png" alt="more" className = "more-img"/>
            <img src="../../src/assets/react.svg" alt="profile-pic" className = "profile-img"/>
        </div>
    </div>

  )
}

export default Navbar