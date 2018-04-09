import React, { Component } from 'react';
import './App.css';

let result = 8;

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
      <div> 
        <button onClick={this.handleClick}>7</button>
        <button onClick={this.handleClick}>8</button>
        <span>{this.result} </span>
      </div>
    );
  }
}

export default App;
