import React, { Component } from 'react';

class ButtonMessage extends Component {
  handleClick = () => {
    import('./moduleA')
      .then(({ moduleA }) => {
      document.write("testing testing testing...");
    })
    .catch(err => {
      // Handle failure
    });
  };

  render() {
    return (
      <div> 
        <button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}

export default ButtonMessage;