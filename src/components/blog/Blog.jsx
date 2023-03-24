import React from 'react';
import './blog.css';
import Image1 from '../../assets/blog-1.svg';
import Image2 from '../../assets/blog-2.svg';
import Image3 from '../../assets/blog-3.svg';


const Blog = () => {
  return (
    <section className="blog container section" id='blog'>
      <h2 className="section_title">Latest Post</h2>

      <div className="blog_container grid">
        <div className="blog_card">
          <div className="blog_thumb">
            <a href="#"><span className="blog_category">Reviews</span></a>
            <a href="#"><img src={Image1} alt="" className='blog_img'/></a>
          </div>
          <div className="blog_details">
            <h3 className="blog_title">5 Best App Development Tool for Your Projects</h3>
            <div className="blog_meta">
              <span>09 March, 2022</span>
              <span className="blog_dot">.</span>
              <span>Muhammad Putra Pratama</span>
            </div>
          </div>
        </div>

        <div className="blog_card">
          <div className="blog_thumb">
            <a href="#"><span className="blog_category">Tutorial</span></a>
            <a href="#"><img src={Image2} alt="" className='blog_img'/></a>
          </div>
          <div className="blog_details">
            <h3 className="blog_title">How To Make Your PC 3X Faster</h3>
            <div className="blog_meta">
              <span>3 March, 2022</span>
              <span className="blog_dot">.</span>
              <span>Muhammad Putra Pratama</span>
            </div>
          </div>
        </div>


        <div className="blog_card">
          <div className="blog_thumb">
            <a href="#"><span className="blog_category">Business</span></a>
            <a href="#"><img src={Image3} alt="" className='blog_img'/></a>
          </div>
          <div className="blog_details">
            <h3 className="blog_title">Top 3 Coins Make You Profit Everyday</h3>
            <div className="blog_meta">
              <span>1 January, 2022</span>
              <span className="blog_dot">.</span>
              <span>Muhammad Putra Pratama</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog