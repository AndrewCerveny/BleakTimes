import React from "react";
import './ArticleCover.css'
import { Link } from "react-router-dom";

const ArticleCover = ({title,id,created,picture}) => {
  const image = picture[1].url
   const altText = picture[1].caption
  
  return(
    <Link to={`/article/${id}`} className="link-c">
      <section className="cover-area">
        <div className="article-cont">
          <div className="image-cont">
            <img className="pic-image" src={image} alt={altText}/>
          </div>
          <article className="article-cov">
            <h2>{title}</h2>
            <h2 className='date-written'>Created: <span className="date">{created}</span></h2>
          </article>
        </div>
      </section>
    </Link>
    
  )
}
export default ArticleCover; 