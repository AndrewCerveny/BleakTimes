import React, {Component} from "react";
import getArticles from "../../util/apiCall";
import cleanApi from "../../util/cleaning";
import Navbar from '../Navbar/Navbar'
import DisplayArea from '../DisplayArea/DisplayArea'
import { Route, Switch } from "react-router-dom";
import DetailedArticle from "../DetailedArticle/DetailedArticle";
import Error from "../Error/Error";

class App extends Component{
  constructor(){
    super();
    this.state= {
      articles:[],
      error:'',
      selections:[],
      selectedArticle:''
    }
  }


  componentDidMount = () => {
    getArticles()
    .then((data) => this.setState({articles:cleanApi(data.results)}))
    .catch((err)=> {
      err.message = '404 failed to retrieve information, Try Again Later!'
    return  this.setState({error:err.message})})
  }
  
  titleFilter = (searchedItem) => {
    this.setState({selectedArticle:searchedItem})
    
    if(searchedItem === ''){
      return this.setState({selections:[]})
    }else{
      
      const comparedWord = searchedItem.toUpperCase()
     
      const comparableTitles = this.state.articles.map((news) => {
        news.titleAbr = news.title.substring(0,3).toUpperCase()
        return news
      })
      const matchedSelections = comparableTitles.filter((news) => news.titleAbr.includes(comparedWord))
      this.setState({selections:matchedSelections})
    }
    
   }
  
   clearSelects = () => {
    this.setState({selectedArticle: '', selections:[]})
   }
  
    render() {
    return(
      <main className="app">
        <Navbar/>
        <Switch>
          
          {!this.state.selections.length && <Route exact path={'/'} render={() => <DisplayArea articles={this.state.articles} titleFind={this.titleFilter} error={this.state.error} /> }/>}
          {this.state.selections.length > 0 && <Route exact path={'/'} render={() => <DisplayArea articles={this.state.selections} titleFind={this.titleFilter} error={this.state.error}  />}/>}
          <Route exact path={'/article/:id'} render={({match})=> {
          const matchedArticle = this.state.articles.find((article) => article.id === match.params.id)
          return <DetailedArticle matchedArticle={matchedArticle} clear={this.clearSelects}/>
          }}/> 
          <Route path={'*'} render={() => {
            return <Error message={this.state.error}/>
          }}/>
        </Switch>
      </main>
    )
  }

}


export default App; 