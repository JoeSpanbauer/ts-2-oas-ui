import {
  ACTION,
} from '../actions/actionTypes';

const initialState = {
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION:
      return state;
    default:
      return state;
  }
}
