import React, {Component} from 'react';
import {Link} from 'react-router'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AutoCompleteExampleSimple from '../../components/AutoCompleteExampleSimple'
import Hello from '../../components/Hello'
import Timer from '../../components/Timer'
import Header from '../../components/Header'
import Sentence from '../../components/Sentence'
import Title from '../../components/Title'
import  Row from 'antd/lib/row'
import  Col  from 'antd/lib/col'
import * as style from './style'
import css from './css.css'
import classnames from 'classnames/bind'

const cx = classnames.bind(css)



class Test extends React.Component {

  state = {
    showSentence: false,
    moveY: 0,
    y:0
  };

  handleMousewheel = (e) => {
    const moveY = e.deltaY;
    const {y, showSentence}=this.state;
    let nextY = y + moveY;
    if (nextY < 0) nextY = 0;
    if (nextY > 2000) nextY = 2000;

    console.log(`nexY: ${nextY}`)

    this.setState({moveY:moveY})

    if (nextY > 300 && !showSentence) {
      this.setState({showSentence: true})
    }

    this.setState({
      y: nextY,
    });
  };




  render() {
    console.log(this.state.y)
    return (
      <div >
        <div style={{height: 2000}}
           onWheel={this.handleMousewheel}
           onScroll={this.handleMousewheel}>
           <div>
            <Header moveY={this.state.moveY}/>
            <div>
             <Title/>
             <Sentence y={this.state.y} show={this.state.showSentence} />
            </div>
            {/*
            <Link to="/Unlock">跳转回首页</Link>
            <Link to="/todo">todo</Link>
            */}
          </div>

           <div className={cx('row')}>
             <div className={cx('item')}>
               <div className={cx('inner')}></div>
             </div>
             <div className={cx('item')}>
               <div className={cx('inner')}></div>
             </div>
             <div className={cx('item')}>
               <div className={cx('inner')}></div>
             </div>
           </div>
         </div>
      </div>
    )
  }
}

export default Test;