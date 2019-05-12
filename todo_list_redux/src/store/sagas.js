import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import { initListAction } from './actionCreators'
import axios from 'axios';

function* getInitList() {
  try {
    const res = yield axios.get('http://localhost:5000/list.json')
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    console.log(JSON.stringify(e));
  }
}

function* todoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}
  
export default todoSagas;
  