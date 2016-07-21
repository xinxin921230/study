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
  render() {
    return (
      <div>
      <div>
        <Header/>
        <Link to="/Unlock">跳转回首页</Link>
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