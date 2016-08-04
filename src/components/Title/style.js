import factory from 'react-inlinestyle/factory'


export const origin= factory({
  default: {
    top: '500px',
    opacity:0,
    fontSize:26,
    textAlign:'center',
    fontFamily:"Helvetica",
    transition:'all 1s ease',
    marginTop:'500px',
    margin:' 0 auto',
    width:'100%',
    lineHeight:'36px',
    maxWidth:600,
  }
});


export const next = factory({
  default: {
    opacity:1,
    top:'100px',
    fontSize:26,
    textAlign:'center',
    fontFamily:"Helvetica",
    transition:'all 1s ease',
    marginTop:'200px',
    margin:' 0 auto',
    width:'100%',
    lineHeight:'36px',
    maxWidth:600,
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
    marginTop:"30px",
  }
});

