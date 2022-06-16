import { ADD_TODO, DELETE_TODO, REMOVE_TODO } from "../actions/actionTypes";

const initialData = {
  list : [],
}
// const [list, setList] = useState([])

const TodoReducers = (state=initialData, {type, payload}) => {
  switch(type) {
    case  ADD_TODO : 
    const {id, data} = payload;
    return {
      ...state, 
      list: [
        ...state.list,
        {
          id:id,
          data: data
        }
      ]
    }
    case DELETE_TODO :
      const newList = state.list.filter((item) => item.id !== payload) 
      return {
        ...state,
          list: newList
      }
    case REMOVE_TODO :
      return {
        ...state,
        list: []
      }
    default: return state;
  } 
}

export default TodoReducers;