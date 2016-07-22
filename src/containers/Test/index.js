import React, {Component} from 'react';
import {Link} from 'react-router'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AutoCompleteExampleSimple from '../../components/AutoCompleteExampleSimple'
import Hello from '../../components/Hello'
import Timer from '../../components/Timer'
import Header from '../../components/Header'



class Test extends React.Component {

  state = {
    moveY: 0
  };


  handleMousewheel = (e) => {
    const moveY = e.deltaY;
    this.setState({moveY: moveY})
  };

  render() {
    return (
      <div style={{height: 2000}}
           onWheel={this.handleMousewheel}
           onScroll={this.handleMousewheel}>
        <div>
          <Header moveY={this.state.moveY}/>
          <Link to="/Unlock">跳转回首页</Link>
          <Link to="/todo">todo</Link>

        </div>
        <div>
          <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <div>
              <AutoCompleteExampleSimple/>
            </div>
          </MuiThemeProvider>
        </div>
          <Hello name="world"/>
          <Timer/>
      </div>
      
    )
  }
}

export default Test;