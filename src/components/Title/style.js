import factory from 'react-inlinestyle/factory'


export const origin= factory({
  default: {
    top: '500px',
    opacity:0,
    fontSize:30,
    textAlign:'center',
    fontFamily:"Helvetica",
    transition:'all 1s ease',
    marginTop:'500px',
    margin:' 0 auto',
    width:'600px',
  }
});


export const next = factory({
  default: {
    opacity:1,
    top:'100px',
    fontSize:30,
    textAlign:'center',
    fontFamily:"Helvetica",
    transition:'all 1s ease',
    marginTop:'200px',
    margin:' 0 auto',
    width:'600px',

  }
});

export const button= factory({
  default: {
    top: '500px',
    fontSize:20,
    fontFamily:"Helvetica",
    margin:'0 auto',
    // marginLeft:'500px',
    textAlign:'center',
  }
});

