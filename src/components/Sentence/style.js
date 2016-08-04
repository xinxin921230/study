import factory from 'react-inlinestyle/factory'




export const origin= factory({
  default: {
    width: '100%',
    top: '900px',
    opacity:0,
    transition:'all .5s ease',
    fontSize:26,
    textAlign:'center',
    fontFamily:"Helvetica",
    margin:'0 auto',
    position:'absolute',
  }
});



export const origin2 = factory({
  default: {
    top: 950,
    transitionDelay:"0.2s",
    margin:'0 auto',
    position:'absolute',
  }
});


export const up = factory({
  default: {
    opacity:1,
    top:750,
  }
});



export const up2= factory({
  default: {
    opacity:1,
    top:890,
  }
});