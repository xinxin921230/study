import React, {Component} from 'react';
import {Link} from 'react-router'

import * as style from './style'



function createStar2(pwd) {
  return new Array(pwd.length+1).join('*')
}


class Footer extends Component {

  state = {
    showPassword: false
  }

  static defaultProps = {
    password: "fdad"
  }


  handleClick = (e) => {
    this.setState({showPassword: !this.state.showPassword})
  }

  renderPic=()=>{
    const {showPassword} = this.state
    const show = 'appear.svg'
    const hide = 'hide.svg'
    return (
      <img src={showPassword?show:hide} style={style.pic()}/>
    )
  }

  renderPassword = () => {
    const {password} = this.props
    const {showPassword} = this.state
    return (
     <span>{showPassword?password:createStar2(password)}</span>
    )
  }

  render () {

    return (
      <div>
        <div style={style.footer()}>
          请记好你的账户：32342   和：<br/>
          密码：{this.renderPassword()}
          <span onClick={this.handleClick} >
            {this.renderPic()}
          </span>

          <div>
            就在2016.7.7 ，
            <br/>
            开启新的幸福旅程
          </div>
        </div>
      </div>
    )
  }
}


export default Footer;