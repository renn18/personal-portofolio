import React from 'react';
import './about.css';
import Avatar from '../../assets/avatar-2.svg';
import AboutBox from './AboutBox.jsx';

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section_title">About Me</h2>

      <div className="about_container grid">
        <img src={Avatar} alt="" className="about_img" />

        <div className="about_data grid">
          <div className="about_info">
            <p className="about_description">I'm Muhammad Putra Pratama, web dev from Makassar, Indonesia. Interest with something new and relate to history.</p>
            <a href="" className="btn">Download CV</a>
          </div>

          <div className="about_skills grid">

            <div className="skills_data">
              <div className="skill_titles">
                <h3 className="skills_name">React Native</h3>
                <span className="skills_number">90%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage react_native"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skill_titles">
                <h3 className="skills_name">UI/UX Design</h3>
                <span className="skills_number">70%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage ui_design"></span>
              </div>
            </div>

            <div className="skills_data">
              <div className="skill_titles">
                <h3 className="skills_name">Mobile Program</h3>
                <span className="skills_number ">80%</span>
              </div>

              <div className="skills_bar">
                <span className="skills_percentage mobile_program"></span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About