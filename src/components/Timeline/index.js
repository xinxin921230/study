import React, {Component} from 'react';
import {Link} from 'react-router'

import * as style from './style'

class Timeline extends Component {


  static defaultProps = {
    data: [
      {
        icon: 'photo.svg',
        title: '2016.6.1',
        content: 'Cindy为您开启时光之旅'
      },
      {
        icon: 'photo.svg',
        title: '2016.6.1',
        content: 'Cindy为您开启时光之旅'
      }
    ]
  }


  renderCards = () => {
    const {data} = this.props
    
    const html = data.map((item, index)=> {
      return (
        <div key={index} style={{position: "relative"}}>
          <img src={item.icon} alt="" style={style.icon()} />
          <div style={style.cardContent()}>
            <p>{item.title}</p>
            <p>{item.content}</p>
          </div>
        </div>
      )
    })
    return html
  }

  render () {


    return (
      <div style={{position: "relative"}}>
        <div>
          {this.renderCards()}

        </div>
        <div style={style.line()}>
          <div>
            <img src='heart.svg' alt="" style={{width:'20px',position:"absolute", marginLeft:'-10px',top: '-15px'}}/>
            <img src='heart.svg' alt="" style={{width:'20px',position:"absolute", marginLeft:'-10px', bottom: '-14px'}} />
          </div>
        </div>

      </div>



    )
  }
}


export default Timeline;