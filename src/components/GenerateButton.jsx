import React from 'react'
import PropTypes from 'prop-types'

const GenerateButton = ({ onClick }) => {
  return (
    <button className="generateButton" type='submit' onClick={onClick}>Generate</button>
  )
}

GenerateButton.propTypes = {
  onClick: PropTypes.func
}

export default GenerateButton
