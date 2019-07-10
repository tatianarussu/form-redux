export const UPDATE_USER = 'user'

export function onUpdateUser( name, value){
  return {
    type: UPDATE_USER,
    name,
    value
  }
}




