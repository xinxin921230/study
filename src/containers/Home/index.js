import React from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Link} from 'react-router'
import Title from '../../components/Title'


import * as style from './style'


class Home extends React.Component {

  render() {
    return (
        <div>
           <Title/>
        </div>
    );
  }
}

export default Home;