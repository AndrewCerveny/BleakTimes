import React,{Component} from "react";
import '../Searchbar/Searchbar.css'


class Searchbar extends Component {
   constructor(props){
    super(props)
    this.state = {
      searchedTitle: ''
    }
   }
   handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]:value})
    this.props.titleFind(value)
   }
   

   render(){
    return(
      <form>
        <input
        type="text"
        placeholder="Search by title"
        name='searchedTitle'
        value={this.state.searchedTitle}
        onChange={(e)=> this.handleChange(e)}
        />
      </form>
    )
   }
}

export default Searchbar; 