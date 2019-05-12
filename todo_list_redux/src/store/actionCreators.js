import { 
  CHANGE_INPUT_VALUE, 
  ADD_TODO_ITEM, 
  DELETE_TODO_ITEM, 
  INIT_LIST_ACTION, 
  GET_INIT_LIST
} from "./actionTypes";
// import axios from 'axios' When using redux thunk

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (item) => {
  return {
  type: DELETE_TODO_ITEM,
  item}
};

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
});

export const getInitList = () => ({
  type: GET_INIT_LIST
});

// When using redux sunk
// export const getTodoList = () => {
//   return (dispatch) => {
    // axios.get('http://localhost:5000/list.json').then((res) => {
    //   const data = res.data;
    //   const action = initListAction(data);
    //   dispatch(action);
    // }).catch((e) => {
    //   console.log(e);
    // })
//   }
// }