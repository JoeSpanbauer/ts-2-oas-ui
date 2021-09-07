import React from 'react'
import PropTypes from 'prop-types'

const Output = ({ schema }) => {
  return (
    <div>
      <textarea value={schema} />
    </div>
  )
}

Output.propTypes = {
  schema: PropTypes.string
}

export default Output
