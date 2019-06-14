import { fromJS } from 'immutable';
import * as actionTypes from './constants';

const defaultState = fromJS({
  login: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
    case actionTypes.LOGOUT:
      return state.set('login', action.value);
    default:
      return state;
  }
}