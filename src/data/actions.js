import * as c from './constants'

export const submitHomeForm = values => {
  return ({
    type: c.HOME_FORM_SUBMITTED,
    values,
  })
}
