import React from 'react'

function Button({text, cssClass}) {
  return (
    <button className={cssClass}>{text}</button>
  )
}

export default Button