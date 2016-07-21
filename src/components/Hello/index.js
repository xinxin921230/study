import React, {Component} from 'react';
import {Link} from 'react-router'



class Hello extends Component {
  state = {
    opacity: 1.0
  }

  componentDidMount = () => {
    const that = this
    const timer = setInterval(function () {

      var opacity = that.state.opacity
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0
      }
      that.setState({
        opacity: opacity
      })
    }, 100)
  }
  
  //这里是一个匿名函数  所以用that=this 防止指向this全局 或者可以命名函数  或者可以用bind this的写法//

  render () {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
}

export default Hello;









