import authReducer from './auth-reducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth : authReducer,
    project : projectReducer
});

export default rootReducer