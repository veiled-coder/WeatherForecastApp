import React from 'react';
import "./style.css"


const ErrorMessage=(props)=>{
return(
    <div className="errorMessage">
        {props.message}
  </div>
)
}

export default ErrorMessage;