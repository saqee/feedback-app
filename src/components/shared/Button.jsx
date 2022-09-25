import React from "react"

const Button = ({ type, isDisabled, version, children }) => {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
}
export default Button
