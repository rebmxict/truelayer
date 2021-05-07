import * as actionTypes from './actionTypes';

export const initResource = (payload) => (dispatch) => dispatch({
  type: actionTypes.SET_ACCESS_TOKEN,
  payload
});

export const initResult = (payload) => (dispatch) => dispatch({
  type: actionTypes.SET_RESULT,
  payload
});

export const initLoader = (payload) => (dispatch) => dispatch({
  type: actionTypes.SET_LOADER,
  payload
});