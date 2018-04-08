import React, { Component } from 'react';
import './App.css';

let result = 3;

class App extends Component {
  result = 7;
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
      document.write("testing testing testing...");
      document.write(result);
    })
    .catch(err => {
      // Handle failure
    });
  };

  render() {
    return (
      <div style={{textAlign:'center'}}> 
        <button onClick={this.handleClick}>7</button>
        <button onClick={this.handleClick}>8</button>
        <span> </span>
      </div>
    );
  }
}

export default App;
