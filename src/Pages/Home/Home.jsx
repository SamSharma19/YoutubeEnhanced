import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar.jsx'
import Feed from '../../Components/Feed/Feed.jsx'
import {useState} from 'react';

const Home = ({Sideview}) => {

  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar Sideview = {Sideview} category = {category} setCategory = {setCategory}/>
      <div className = {`container ${Sideview?"":'large-container'}`}>
        <Feed category = {category}/>
      </div>
    </>
  )
}

export default Home