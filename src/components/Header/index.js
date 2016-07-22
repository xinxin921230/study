import React, {Component} from 'react';
import {Link} from 'react-router'

import * as style from './style'


class Header extends Component {


  Hide = () => {

   if ( this.props.moveY <= 0) {
     return style.box()
   }
   if ( this.props.moveY > 0) {
     return style.hidebox()
   }
 }

  render () {
    console.log(this.props.moveY)
    return(
        <div style={this.Hide()}></div>
    )
  }
}


export default Header;



