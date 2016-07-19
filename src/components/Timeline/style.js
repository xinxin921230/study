import factory from 'react-inlinestyle/factory'

const globalFonts = {
  ss: '黑体, sans-serif'
}

export const cardContent = factory({
  default: {
    color:'#ffffff',
    fontFamily: globalFonts.ss,
    marginTop:'50px',
    marginLeft:'170px',
  }
})

export const line = factory({
  default: {
    borderLeft:'1px solid #B7D0E4',
    top: "0px",
    left:'40%',
    position:'absolute',
    bottom: 0
  }
})



export const icon = factory({
  default: {
    left: "40%",
    marginLeft: "-30px",
    position:'absolute',
    width:'20px',
    top:'15px',
  }
})

