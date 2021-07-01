import React, {Component} from "react";
import "./styles.css";

class App extends Component{
  constructor(){
    super();
    this.state = {
      company: "My Test Company",
      name: "Abhishek"
    };
  }

  handleChange = event=>{
    this.setState({name: event.target.value});
  };
  handleClick=()=>{
    alert(`Hi, ${this.state.name}!`);
  };

  render(){
    let name = this.state.name;
    return(
      <div>
        <h4>Simple Data Binding</h4>
        <p>{this.state.company}</p>

        <h4>Two Way Data Binding </h4>
        <p>
          <input type="text" value={name} onChange={this.handleChange}/> : {" "}
          {name}
        </p>

        <h4>Event Binding</h4>
        <button onClick={this.handleClick}>Greet!</button>
        </div>
    )
  }
}

export default App;