import React from 'react'

const Card = (props) => {
  return (
    <div className="timeline_item">
        <i className={props.icon}></i>
        <span className="timeline_date">{props.year}</span>
        <a href={props.link} target={'_blank'} rel="noreferrer"><h3 className="timeline_title">{props.title}</h3></a>
        <p className="timeline_text">{props.desc}</p>
    </div>
  )
}

export default Card