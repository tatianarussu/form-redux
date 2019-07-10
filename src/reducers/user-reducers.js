import { UPDATE_USER } from '../actions/user-actions'

const initState = {
  firstName : '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function userReducer( state = initState, action){
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
       [action.name] : action.value,
      }
    default:
      return state
  }
}


