import axios from 'axios';
import * as actionTypes from './constants';

const changeDetail = (title, content, id) => ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  content,
  id
});

export const getDetail = (id) => {
  console.log("getDetail " + id);
  return (dispatch) => {
    axios.get('/api/detail.json').then((res) => {
      const result = res.data.data;
      console.log(JSON.stringify(result[id - 1]));
      dispatch(changeDetail(result[id - 1].title, result[id - 1].content));
    })
  }
}