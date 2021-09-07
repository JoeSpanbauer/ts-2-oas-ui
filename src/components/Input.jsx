import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ updateInput }) => {
  return (
    <textarea onChange={updateInput} />
  )
}

Input.propTypes = {
  updateInput: PropTypes.func.isRequired
}

export default Input
