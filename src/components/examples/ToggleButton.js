import React from 'react';
import { Button } from 'react-bootstrap';

// Example 3
class ToggleButton extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          isToggleOn : true
      };
      
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState(state => ({
          isToggleOn: !state.isToggleOn
      }));
      if (this.state.isToggleOn) {
          alert("Yes !");
      } else {
        alert("No !");
      }
  }

  render() {
      return (
        <div>
            <h1>Le toggle button</h1>
            <p>Comprendre les événements !</p>
            <Button variant="outline-info" onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </Button>
        </div>
      )
    }
}
  
  export default ToggleButton;