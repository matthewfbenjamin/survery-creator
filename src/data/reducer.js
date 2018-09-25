import * as c from './constants'

const initialState = {
  homeFormValues: {},
  questions: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case c.HOME_FORM_SUBMITTED: {
      return {
        ...state,
        homeFormValues: action.values,
      }
    }
    case c.QUESTION_SUBMITTED: {
      return {
        ...state,
        questions: [...state.questions, action.currentQuestion]
      }
    }
    case c.UPDATE_QUESTIONS_ARR: {
      return {
        ...state,
        questions: action.questionsArr,
      }
    }
    default:
      return state;
  }
}
