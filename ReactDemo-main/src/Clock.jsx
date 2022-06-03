import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          date: new Date()
      };
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({date: new Date()})
        }, 1000);
    }

    render() {
      return (
        <div>
          <h1>Clock:</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  export default Clock;