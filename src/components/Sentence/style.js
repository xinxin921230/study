import factory from 'react-inlinestyle/factory'




export const origin= factory({
  default: {
    width: '100%',
    height:'50px',
    top: '600px',
    position: 'fixed',
    opacity:0,
    transition:'all .5s ease',
    fontSize:30,
    textAlign:'center',
    fontFamily:"Helvetica",
  }
})



export const origin2 = factory({
  default: {
    top: 800,
    transitionDelay:"0.3s",
  }
})


export const up = factory({
  default: {
    opacity:1,
    top:400
  }
})



export const up2= factory({
  default: {
    opacity:1,
    top:550
  }
})