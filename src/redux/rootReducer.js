import { combineReducers } from "redux"
import session from './modules/session'

const rootReducer = combineReducers({
  session,
})

export default rootReducer