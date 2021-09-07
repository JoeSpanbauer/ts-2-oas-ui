import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import Page from './Page'
import Footer from './Footer'

import { ACTION } from '../actions/actionTypes'

import '../style/style.scss'

const App = (props) => {
  return (
    <>
      <Header />
      <Page />
      <Footer />
    </>
  )
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(App)
