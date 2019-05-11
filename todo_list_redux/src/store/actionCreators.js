import { 
  CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION
} from "./actionTypes";
import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteItemAction = (item) => {
  console.log(`getDeleteItemAction ${item}`)
  return {
  type: DELETE_TODO_ITEM,
  item}
};

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
});

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('http://localhost:5000/list.json').then((res) => {
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);
    }).catch((e) => {
      console.log(e);
    })
  }
}