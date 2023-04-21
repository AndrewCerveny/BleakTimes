import React from "react";
import ArticleCover from "../ArticleCover/ArticleCover";
import './DisplayArea.css'
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import Error from "../Error/Error";
import  PropTypes  from "prop-types";

const DisplayArea = ({articles,titleFind,error}) => {
  
 
  const allArticles = articles.map((article) => 

<section className=" article-wrap" key={article.id}>
      <ArticleCover
        title={article.title}
        id={article.id}
        key={article.id}
        created={article.createdDate}
        picture={article.multimedia}
      />
    </section>)


 return( 
 <section className='articles-displayed'>
  <Searchbar titleFind={titleFind} />
  {error ? <Error error={error}/> : null }
  {allArticles}
 </section>
 )
}

export default DisplayArea; 

DisplayArea.propTypes = {
  articles:PropTypes.array.isRequired,
  titleFind:PropTypes.func.isRequired,
  error:PropTypes.string.isRequired,
}