import { saveQuestion } from "../utils/api"
import { addQuestionToUser } from "./users"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION'

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleSaveQuestion(optionOne, optionTwo, author){
    console.log('out return', optionOne,' ', optionTwo,' ',author)
    return dispatch => {
        console.log('first return', optionOne,' ', optionTwo,' ',author)

        return saveQuestion({ optionOne, optionTwo, author }).then(
            question => {
                console.log('sec return', optionOne,' ', optionTwo,' ',author)

              dispatch(addQuestion(question));
              dispatch(addQuestionToUser(question));
            }
          )
    }
}

export function addAnswerToQuestion(authUser, qid, answer) {
    return {
      type: ADD_ANSWER_TO_QUESTION,
      authUser,
      qid,
      answer
    };
  }