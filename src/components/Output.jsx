import React from 'react'
import PropTypes from 'prop-types'

const Output = ({ schema }) => {
  return (
    <div className="textContainer">
      <textarea placeholder="Schema output here." value={schema} />
    </div>
  )
}

Output.propTypes = {
  schema: PropTypes.string
}

export default Output
