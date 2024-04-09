import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
import Feed from '../../Components/Feed/Feed.jsx'

const Home = ({Sideview}) => {
  return (
    <>
      <Sidebar Sideview = {Sideview}/>
      <div className = {`container ${Sideview?"":'large-container'}`}>
        <Feed />
      </div>
    </>
  )
}

export default Home