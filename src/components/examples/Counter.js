import React from 'react';
import { Button } from 'react-bootstrap';

// Example 1
class Counter extends React.Component {

  constructor() {
    super();
    this.state = {
      number: 0
    };
  }

  increment() {
    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
      return (
        <div>
          <h1>Conteur !</h1>
          <div>
            <h2>{ this.state.number }</h2>
              <Button variant="outline-danger" onClick={ () => this.increment() }>
                Click Here
              </Button>
          </div>
        </div>
      )
    }
}
  
  export default Counter;