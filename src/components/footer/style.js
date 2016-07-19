import factory from 'react-inlinestyle/factory'

const globalFonts = {
  ss: '黑体, sans-serif'
}


export const footer = factory({
  default: {
    color:'#ffffff',
    fontFamily: globalFonts.ss,
    marginLeft:'50px',
    marginTop:'50px',
  }
})

export const pic = factory({
  default: {
   width:'20px',
  marginLeft:'10px',

  }
})