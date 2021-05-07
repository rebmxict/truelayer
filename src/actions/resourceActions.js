import * as actionTypes from './actionTypes';

export const initResource = (payload) => (dispatch) => dispatch({
  type: actionTypes.GET_RESOURCE,
  payload
});