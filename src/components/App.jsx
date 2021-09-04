import React from 'react';
import { connect } from 'react-redux';

import { ACTION } from '../actions/actionTypes';

import '../style/style.scss';

const App = (props) => {
  return (
    <div>
      Your app here.
    </div>
  );
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(App);
