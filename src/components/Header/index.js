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
      <div>
        <div style={this.Hide()}>
          <ul>
            <li style={style.Nav()}>About</li>
            <li style={style.Nav()}>Work</li>
            <li style={style.Nav()}>Contact</li>
            <li style={style.Nav()}>Blog</li>
          </ul>
        </div>
      </div>
    )
  }
}


export default Header;



