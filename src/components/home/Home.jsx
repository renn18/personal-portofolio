import React from 'react';
import './home.css';
import Avatar from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials.jsx';
import ScrollDown from './ScrollDown.jsx';
import Shapes from './Shapes.jsx';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Avatar} alt="" className="home_img" />
        <h1 className="home_name">Muhammad Putra Pratama</h1>
        <span className="home_education">I'm Full-stack Web Developer</span>

        <HeaderSocials/>

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown/>
      </div>

      <Shapes/>
    </section>
  )
}

export default Home