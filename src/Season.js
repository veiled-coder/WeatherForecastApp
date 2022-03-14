import React from 'react';
import ReactDom from "react-dom";

const SeasonConfig={
    winter:{
        text:"burr, it's chilly",
        iconName:'snowflake'
    },
    summer:{
        text:"lets hit the beach!",
        iconName:'sun'
    }

}

const getSeason  = (mon,lat)=>{
    if (mon > 2 && mon <9){
        return      lat >0?"summer":"winter";
          }
          else {
          return    lat >0 ? "winter":"summer"
          }
}

const SeasonDisplay =(props)=>{

const CurrentSeason=getSeason(new Date().getMonth(),props.lat)

const {text,iconName}=SeasonConfig[CurrentSeason]
return(
    <div className= {`season-display  ${CurrentSeason}`}>
        <i className={`icon-left massive ${iconName} icon`}></i>
      <h1> {text}</h1>
        <i className={`icon-right massive ${iconName} icon`}></i>

    </div>
)

}

export default SeasonDisplay;