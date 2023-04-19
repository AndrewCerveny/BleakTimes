
import React from "react";
import { Link } from "react-router-dom";
import './DetailedArticle.css'

const DetailedArticle = ({matchedArticle}) => {
  if(matchedArticle){
  return(
  <section className="bleak-page">
    <section className="title-display">
      <h2>{matchedArticle.title}</h2>
    </section>
    <section className="author-spot">
      <h3 className="author">{matchedArticle.byline}</h3> 
      <h3 className="subsection"> Published: <span className="date">{matchedArticle.publishedDate} </span> </h3>
      <h3 className="subsection"> Updated: <span className="date">{matchedArticle.updatedDate}</span></h3>     
    </section>
    <section className="article-syn">
      <img src={matchedArticle.multimedia[1].url} alt={matchedArticle.multimedia[1].caption}/>
      <section className="abstract">
       <p>{matchedArticle.abstract}</p>
      </section>
    </section>
    <div className="button-wrap">
      <a href={matchedArticle.shortUrl} target="_blank" rel="noopener noreferrer">
        <button className="art-btn btnM"> Read More</button>
      </a>
      <Link to='/'>
        <button className="art-btn btnA"> Change Article</button>
      </Link>
    </div>
  </section>)
  }
}
export default DetailedArticle