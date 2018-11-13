import { createAction, handleActions } from 'redux-actions'

// ACTIONS
export const ADD_CURRENT_TRUCK= 'truckr/login/ADD_CURRENT_TRUCK'
export const CLEAR_CURRENT_TRUCK = 'truckr/login/CLEAR_CURRENT_TRUCK'

// REDUCER
const getInitialState = {
  currentTruck: undefined,
}

const reducer = handleActions(
  {
    [ADD_CURRENT_TRUCK](state, action) {
      const {
        truck
      } = action.payload
      return {
        currentTruck: truck,
      }
    },

    [CLEAR_CURRENT_TRUCK](state, action) {
      return getInitialState
    },
  },
  getInitialState,
)

export default reducer

// ACTION CREATORS

export const addCurrentTruck = (truck) => {
  return createAction(ADD_CURRENT_TRUCK)({ truck })
}

export const clearCurrentTruck = () => {
  return createAction(CLEAR_CURRENT_TRUCK)({})
}