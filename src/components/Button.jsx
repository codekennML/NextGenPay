import React from 'react'

const Button = (props) => {
  return (
   <button type = "button" className = {`font-poppins rounded-lg font-medium py-4 px-6 mt-6 bg-blue-gradient text-lg outline-none ${props.styles}`}>Get Started</button>
  )
}

export default Button