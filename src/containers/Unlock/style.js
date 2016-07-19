import factory from 'react-inlinestyle/factory'


const globalFonts = {
  ss: '黑体, sans-serif'
}

export const background = factory({
  default: {
    backgroundColor: '#1a4839',
    position:'fixed',
    bottom:'0px',
    left:'0px',
    top:'0px',
    right:'0px',
  }
})

export const bar = factory({
  default: {
    padding:'10px',
    fontFamily:globalFonts.ss,
    color:'#ffffff',
  }
})