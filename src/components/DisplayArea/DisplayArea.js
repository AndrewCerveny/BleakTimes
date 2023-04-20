import React from "react";
import ArticleCover from "../ArticleCover/ArticleCover";
import './DisplayArea.css'
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar/Searchbar";
import Error from "../Error/Error";

const DisplayArea = ({articles,titleFind,clear,error,searchedNews}) => {
  console.log('socks',searchedNews);
 
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
  <Searchbar titleFind={titleFind} clear={clear}/>
  {error ? <Error error={error}/> : null }
  {allArticles}
 </section>
 )
}

export default DisplayArea; 