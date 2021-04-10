import { REGISTER } from '../Types/types'

export const homeReducer = (state = false, action) => {

  switch (action.type) {

    case REGISTER:
      return action.data
    default:
      return state
  }

}