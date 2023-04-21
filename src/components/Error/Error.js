import React from "react";
import Robot from '../../util/Images/robot.png'
import { Link } from "react-router-dom";
import './Error.css'
import  PropTypes  from "prop-types";

const Error = ({error}) => {
  let warning;

  if(error){
    warning = error
  }else{
    warning = 'According to records ... Page Not Found' 
  }
  
  return(
    <section className="error-page">
      <img className="err-image" src={Robot} alt='confused Robot'/>
        <div className="err-message-wrap">
          <h2>{warning}</h2>
          <div className="return-wrap">
            <Link to='/'>
              <button className="err-btn"> HomePage </button>
            </Link>
          </div>
        </div>
    </section>
  )
}

export default Error; 

Error.propTypes = {
  error:PropTypes.string.isRequired,
}