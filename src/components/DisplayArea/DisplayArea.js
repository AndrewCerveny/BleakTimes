import React from "react";
import ArticleCover from "../ArticleCover/ArticleCover";
import './DisplayArea.css'
import { Link } from "react-router-dom";

const DisplayArea = ({articles}) => {
 const allArticles = articles.map((article) => 

<section className=" article-wrap" key={article.id}>
      <ArticleCover
        title={article.title}
        id={article.id}
        created={article.createdDate}
        picture={article.multimedia}
      />
    </section>)


 return( 
 <section className='articles-displayed'>
  {allArticles}
 </section>
 )
}

export default DisplayArea; 