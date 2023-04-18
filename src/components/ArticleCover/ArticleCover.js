import React from "react";
import './ArticleCover.css'

const ArticleCover = ({title,id,created,picture}) => {
  const image = picture[1].url
   const altText = picture[1].caption
  
  return(
    <section className="cover-area">
      <div className="article-cont">
        <div className="image-cont">
          <img className="pic-image" src={image} alt={altText}/>
        </div>
        <article className="article-cov">
          <h2>{title}</h2>
          <h2>Created:{created}</h2>
        </article>
      </div>

    </section>
  )
}
export default ArticleCover; 