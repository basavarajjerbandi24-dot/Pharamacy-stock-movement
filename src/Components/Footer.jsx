import React from 'react'

export const Footer = () => {
  const textcss = {
    fontSize: 20,
    marginRight: '900px',
    color: 'white',
    padding: '20px'
  }
  const textcss1 = {
    fontSize: 55 ,
    marginRight: '900px',
    color: 'white',
    padding: '20px'
  }
  const bg = {

    backgroundColor: 'green'
  }
  return (
    <div className='conatiner' style={bg}>
      <text style={textcss}>LIFETRENZ</text>
      <div>
        <text style={textcss1}>EHR</text>
      </div>
    </div>
  )
}

 export default Footer;