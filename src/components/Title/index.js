import React, {Component} from 'react';
import {Link} from 'react-router'

import * as style from './style'

class Title extends Component {
  
  state = {
   up: style.origin(),
  };
  
    
  show = () => {
    this.setState({up:style.next()})
  };
  
  componentDidMount = () => {
    this.setTimeout = setTimeout(this.show,1000);
  };


  render () {
    return (
        <div style={this.state.up}>
          <div>
            <img src="RedFace.png" alt="" width="300px"/>
          </div>
          <div>I Design</div>
          <div>“Design changed my life, after graduated from university, I began learning design.
          I crafting some kinetic things & making design interactively.”
          </div>
          <Link to="/Test">
          <span style={style.button()}>跳转</span>
          </Link>
        </div>
    );
  }
}

export default Title;