import React, {Component} from 'react';
import {Link} from 'react-router'

import * as style from './style'


class Header extends Component {
  
  state = {
    opcity: 0
  }


  handleMousewheel = (e) => {
    this.setstate( 
      
    )
    
  }
  
  render () {
    return(
      <div onmousewheel={this.handleMousewheel}
           style={style.box()}>
      </div>
    )
    
  }
}


export default Header;



