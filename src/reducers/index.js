import { combineReducers } from "redux";
import questions from './questions';
import authUser from './authUser';
import users from './users';

export default combineReducers({
    authUser,
    questions,
    users
})