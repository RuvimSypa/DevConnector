import uuid from 'uuid'
import { SET_ALERT, REMOVE_ALERT } from './types'

export const setAlert = (msg, typeAlert, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, typeAlert, id }
  });

  setTimeout(()=> dispatch({ type: REMOVE_ALERT, payload: id }), timeout)
};