import {
    _getQuestions,
    _getUsers,
    _saveQuestionAnswer,
    _saveQuestion
} from './_DATA';

export function getInitialData(){
    return Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => ({
        users,
        questions
    })
    );
}

export function saveQuestionAnswer(authUser, qid, answer) {
    return _saveQuestionAnswer({authUser, qid, answer})
}

export function saveQuestion(question){
    console.log('saveQ ', question)
    return _saveQuestion(question)
}