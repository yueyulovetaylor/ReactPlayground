import { 
  CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION
} from './actionTypes'

const defaultState = {
  inputValue: 'Hello World',
  list: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ]
};

// Reducer cannot modify the input state, need to deep copy
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state)); //deep copy state
  if (action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value;
    return newState;
  } else if (action.type === ADD_TODO_ITEM) {
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
  } else if (action.type === DELETE_TODO_ITEM) {
    newState.list.splice(action.item, 1);
  } else if (action.type === INIT_LIST_ACTION) {
    newState.list = [...newState.list, ...action.data];
  }
  return newState;
}