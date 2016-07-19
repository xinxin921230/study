import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Link} from 'react-router'

class Home extends React.Component {
  render() {
    return (
      <div>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <Link to="/test">跳转到测试页面</Link>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default Home;