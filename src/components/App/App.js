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
      error:''
    }
  }
  
  componentDidMount = () => {
    getArticles()
    .then((data) => this.setState({articles:cleanApi(data.results)}))
    .catch((err)=> this.setState({error:err.message}))
  }
  
  
  render() {
    return(
      <main className="app">
        <Navbar/>
        <Switch>
          <Route exact path={'/'} render={() => <DisplayArea articles={this.state.articles}/> }/>
          <Route exact path={'/article/:id'} render={({match})=> {
          const matchedArticle = this.state.articles.find((article) => article.id === match.params.id)
          return <DetailedArticle matchedArticle={matchedArticle}/>
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