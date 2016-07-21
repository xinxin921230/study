import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Link} from 'react-router'
import Timeline from '../../components/Timeline'
import Footer from '../../components/Footer'

import * as style from './style'

class Unlock extends React.Component {
  render() {
    return (
      <div>
          <div style={style.background()}>
            <div style={style.bar()}>
              <span><img src='back.svg' alt="" style={{left:0 , width:'20px'}} /></span>
              <span style={{float:'right'}}>确定</span>
            </div>
            <Timeline/>
            <Footer password={"fdad"}/>
            
          </div>
      </div>
    );
  }
}

export default Unlock;


