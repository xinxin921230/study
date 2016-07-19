import React, {Component} from 'react';
import {Link} from 'react-router'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AutoCompleteExampleSimple from '../../components/AutoCompleteExampleSimple'




class Test extends React.Component {
  render() {
    return (
      <div>
      <div>
        <Link to="/Unlock">跳转回首页</Link>
      </div>
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <AutoCompleteExampleSimple/>
        </div>
      </MuiThemeProvider>
      </div>
      </div>
      
    );
  }
}

export default Test;