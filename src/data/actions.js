import * as c from './constants'

export const submitHomeForm = values => {
  return ({
    type: c.HOME_FORM_SUBMITTED,
    values,
  })
}

export const submitQuestion = currentQuestion => ({
  type: c.QUESTION_SUBMITTED,
  currentQuestion,
})

export const updateQuestionsArr = questionsArr => ({
  type: c.UPDATE_QUESTIONS_ARR,
  questionsArr,
})