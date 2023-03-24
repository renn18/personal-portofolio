import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Service from './components/services/Services.jsx';
import Resume from './components/resume/Resume.jsx';
import Portofolio from './components/portofolio/Portofolio.jsx';
import Testimonial from './components/testimonial/Testimonial.jsx';
import Blog from './components/blog/Blog.jsx';
import Contact from './components/contact/Contact.jsx';


function App() {
  return (
    <>
    <Sidebar/>
    <main className='main'>
      <Home/>
      <About/>
      <Service/>
      <Resume/>
      <Portofolio/>
      <Testimonial/>
      <Blog/>
      <Contact/>
    </main>
    </>
  );
}

export default App;
