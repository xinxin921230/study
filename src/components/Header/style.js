import factory from 'react-inlinestyle/factory'


export const box = factory({
  default: {
    width: '100%',
    height:'50px',
    top:0,
    position: 'fixed',
    backgroundColor:'#4a75a2',
    transition:'all .5s ease'
  }
})


export const hidebox= factory({
  default: {
    width: '100%',
    height:'50px',
    top: '-50px',
    position: 'fixed',
    backgroundColor:'#4a75a2',
    transition:'all .5s ease'
  }
})