import React, {Component} from 'react';
import {Link} from 'react-router'

class Timer extends Component {
  
  state = {
   secondsElapsed: 0
  }
  
    
  tick = () => {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  }
  
  componentDidMount = () => {
    this.interval = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount =()=> {
    clearInterval(this.interval);
  }
  
  render () {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}

export default Timer;