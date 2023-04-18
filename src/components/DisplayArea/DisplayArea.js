import React from "react";
import ArticleCover from "../ArticleCover/ArticleCover";
import './DisplayArea.css'

const DisplayArea = ({articles}) => {
 const allArticles = articles.map((article) => 
  <ArticleCover
    title={article.title}
    id={article.id}
    created={article.createdDate}
    picture={article.multimedia}
  />
 )

 return( 
 <section className='articles-displayed'>
  {allArticles}
 </section>
 )
}

export default DisplayArea; 