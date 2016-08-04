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
    this.setTimeout = setTimeout(this.show,500);
  };


  render () {
    return (
        <div style={this.state.up}>
          <div>
            <img src="RedFace.png" width="200px"/>
          </div>
          <div style={{marginTop:"25px"}}>I Design</div>
          <div>“Design changed my life, after graduated from university, I began learning design.
          I crafting some kinetic things & making design interactively.”
          </div>
          <Link to="/Test">
          <img style={style.button()} src="more.svg" alt="" width="26px" />
          </Link>
        </div>
    );
  }
}

export default Title;