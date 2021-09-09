import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ updateInput }) => {
  return (
    <div className="textContainer">
      <textarea placeholder="Paste types file here." onChange={updateInput} />
    </div>
  )
}

Input.propTypes = {
  updateInput: PropTypes.func.isRequired
}

export default Input
