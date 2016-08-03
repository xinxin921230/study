import factory from 'react-inlinestyle/factory'


export const box = factory({
  default: {
    width: '100%',
    height:'50px',
    top:0,
    position: 'fixed',
    backgroundColor:'#4a75a2',
    transition:'all .5s ease',
    boxShadow:'0 0 10px #6d6d6d',

}
})


export const hidebox= factory({
  default: {
    width: '100%',
    height:'50px',
    top: '-50px',
    position: 'fixed',
    backgroundColor:'#4a75a2',
    transition:'all .5s ease',
    boxShadow:'0 0 10px #6d6d6d',
  }
})