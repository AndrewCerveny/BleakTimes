import React from "react";
import { useEffect, useState } from "react";
import cleanApi from "../../util/cleaning";
import DisplayArea from "../DisplayArea/DisplayArea";
import './ArticleHub.css'

const ArticleHub = () => {
  const [ articles , setArticles] = useState([])
  const [ error, setError]= useState('')
  
  const getArticles = async () => {
    const url = 'https://api.nytimes.com/svc/topstories/v2/us.json?api-key=IncPXxDhLTioCj842WteukrUvw5vCeap'
    setError('')
    
    try{
      const response = await fetch(url)
      const data = await response.json()
      setArticles(cleanApi(data.results))

    } catch(error){
      setError(error.message)
    }
  } 

  useEffect(()=> {
    getArticles()
  },[])


  return( 
  <section className="article-hub-area">
    <DisplayArea articles={articles}/>
  </section>

  )

}

export default ArticleHub; 