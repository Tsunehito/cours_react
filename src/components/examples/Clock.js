import React from 'react';

// Example 2
class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        date : new Date()
    };
  }

  componentDidMount() {
      this.timerID = setInterval(
          () => this.tick(),
          1000
      );
}

componentWillUnmount() {
    clearImmediate(this.timerID);
}

tick() {
    this.setState({
        date: new Date()
    });
}

  render() {
      return (
        <div>
          <h1>L'horloge</h1>
          <p>Comprendre les fonctions componentDidMount et componentWillUnmount</p>
          <p>{ this.state.date.toLocaleTimeString() }</p>
        </div>
      )
    }
}
  
  export default Clock;