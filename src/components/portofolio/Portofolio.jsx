import React, { useState } from 'react';
import './portofolio.css';
import Menu from './Menu';

const Portofolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })

    setItems(updateItems);
  }
  return (
    <section className="work container" id='portofolio'>
      <h2 className="section_title">Recent Works</h2>

      <div className="work_filters">
        <span className="work_item" onClick={() => setItems (Menu)}>All</span>
        <span className="work_item" onClick={() => filterItem ("Javascript")}>Javascript</span>
        <span className="work_item" onClick={() => filterItem ("Design")}>Design</span>
        <span className="work_item" onClick={() => filterItem ("Mobile")}>Mobile App</span>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
          const {
            id,
            image,
            title,
            category
          } = elem;
          return (
            <div className="work_card" key={id}>
              <div className="work_thumbnail">
                <img src={image} alt="" className="workmask" />
                <div className="work_mask"></div>
              </div>

              <span className="work_category">{category}</span>
              <h3 className="work_title">{title}</h3>
              <a href="#" className="work_button">
                <i className="icon-link work_button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Portofolio