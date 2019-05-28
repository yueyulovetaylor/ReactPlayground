import axios from 'axios';
import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const changeHomeDate = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addHomeDate = (list, nextPage) => ({
  type: actionTypes.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(
      (res) => {
        const result = res.data.data;
        dispatch(changeHomeDate(result));
      }
    );
  }
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/more.json?page=' + page).then(
      (res) => {
        const result = res.data.data;
        dispatch(addHomeDate(result, page + 1));
      }
    );
  }
}