import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import beautify from 'json-beautify'
import Input from './Input'
import Output from './Output'
import GenerateButton from './GenerateButton'

const config = {
  headers: {
    'Content-Type': 'text/plain'
  },
  responseType: 'text'
}

const Page = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const onInputChange = (e) => {
    setInput(e.target.value)
  }

  const generateOutput = async () => {
    const { data } = await axios.post('https://ts-2-oas-api.herokuapp.com/', String(input), config)
    setOutput(beautify(data, null, 2, 20))
  }

  return (
    <div className="pageContainer">
      <div className="page">
        <div className="inputOutput">
          <Input updateInput={onInputChange} />
          <div className="inputOutputSpacer" />
          <Output schema={output} />
        </div>
        <GenerateButton onClick={generateOutput} />
      </div>
    </div>
  )
}

Page.propTypes = {

}

export default Page
