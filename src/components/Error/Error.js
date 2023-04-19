import React from "react";
import Robot from '../../util/Images/robot.png'
import { Link } from "react-router-dom";
import './Error.css'

const Error = (message) => {
  let warning;

  if(message.length){
    warning = message 
  }else{
    warning = 'According to records ... Page Not Found' 
  }
  
  return(
    <section className="error-page">
      <img className="err-image" src={Robot} alt='confused Robot'/>
        <div className="err-message-wrap">
          <h2>{warning}</h2>
          <div>
            <Link to='/'>
              <button> HomePage </button>
            </Link>
          </div>
        </div>
    </section>
  )
}

export default Error; 