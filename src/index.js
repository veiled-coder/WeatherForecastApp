import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./Season";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import "./style.css";

class App extends React.Component{


state ={lat:null,errorMessage:""}


componentDidMount(){
window.navigator.geolocation.getCurrentPosition(
    (position)=>this.setState({lat:position.coords.latitude}),
    (errorMessage)=>this.setState({errorMessage:errorMessage.message})

)

}
renderContent(){
if (!this.state.lat && this.state.errorMessage){
    return(
        <div><ErrorMessage message={this.state.errorMessage}/></div>
    )
}
else if (this.state.lat && !this.state.errorMessage){
    return(
        <div><SeasonDisplay lat={this.state.lat}/></div>
    )
}
else {
    return(
        <Spinner message="Please accept location request"/>
    )
}
}

render(){

return(
<div>
{this.renderContent()}
</div>
   
   
)
}

}

ReactDOM.render(<App/>,document.querySelector("#root"));