import { ADD_TODO, REMOVE_TODO, DELETE_TODO } from "./actionTypes"
export const  AddTodo = (data) => {
  return {
    type : ADD_TODO, 
    payload: {
      id : new Date().getTime().toString(),
      data: data
    }
  }
}
export const RemoveTodo = () => {
  return {
    type : REMOVE_TODO
  }
}

export const DeleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload:id
  }
}