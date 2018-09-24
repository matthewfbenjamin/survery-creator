import * as c from './constants'

const initialState = {
  homeFormValues: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case c.HOME_FORM_SUBMITTED: {
      return {
        ...state,
        homeFormValues: action.values,
      }
    }
    default:
      return state;
  }
}
