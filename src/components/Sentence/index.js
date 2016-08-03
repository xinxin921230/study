import React, {Component} from 'react';
import {Link} from 'react-router'

import * as style from './style'


class Sentence extends Component {

  state = {
    show: false,
    logoStyle: style.origin(),
    wordStyle: Object.assign({}, style.origin(), style.origin2())
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.show && !this.state.show) {
      this.setState({
        show: true,
        logoStyle: Object.assign({}, style.origin(), style.up()),
        wordStyle: Object.assign({}, style.origin(), style.origin2(), style.up2())
      })
    }
  }


  render () {

    console.log(this.state)

    return(
        <div>
          <div style={this.state.logoStyle}>
            <div>
              <img src="Logo.png" alt=""/>
            </div>
            Hi, my friend!
          </div>

          <div style={this.state.wordStyle}>
            My name is Martin.
            I’m a Designer, Code Lover and Lifelong-learner.
          </div>
        </div>
    )
  }
}


export default Sentence;



