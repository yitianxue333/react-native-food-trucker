import { createStore, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import rootReducer from "./rootReducer"

export default function configureStore(initialState = {}) {
  const loggerMiddleware = createLogger({
    collapsed: true
  })

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(loggerMiddleware),
  )

  return store
}